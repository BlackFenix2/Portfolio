import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Button, Loader } from 'semantic-ui-react';
import Visibility from 'src/components/effects/Visibility';
import AnimatedModal from 'src/components/elements/Modal';
import TestDisplay from 'src/Pages/CRUD/TestDisplay';
import FruitStore from 'src/state/stores/fruitStore';
import FruitTable from './FruitTable';
import TestForm from './TestForm';

interface IProps {
  actions: any;
  fruits: any;
  FruitStore?: FruitStore;
}

interface State {
  uiLoading: boolean;
  visible: boolean;
  optionSelect: string;
}

@inject(FruitStore.name)
@observer
class CRUD extends React.Component<IProps, State> {
  @observable visible: boolean = false;
  @observable uiLoading: boolean = false;
  @observable optionSelect: string = 'create';

  componentDidMount() {
    this.fetchFruits();
  }
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  fetchFruits = () => {
    this.props.FruitStore.getFruitList();
  };

  setLoading = (bool: boolean) => {
    this.uiLoading = bool;
  };

  create = value => {
    this.props.FruitStore.addFruit(value);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  delete = id => {
    this.props.FruitStore.deleteFruit(id);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  update = value => {
    this.props.FruitStore.updateFruit(value);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  details = id => {
    this.props.FruitStore.getFruit(id);

    this.toggleEvent();
  };

  createFetch = id => {
    this.optionSelect = 'create';
    this.toggleEvent();
  };

  updateFetch = id => {
    this.optionSelect = 'update';

    this.details(id);
  };

  deleteFetch = id => {
    this.optionSelect = 'delete';
    this.details(id);
  };

  detailsFetch = id => {
    this.optionSelect = 'details';
    this.details(id);
  };
  toggleEvent = () => {
    this.visible = !this.visible;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Fruits Table</h2>
          <div>
            <AnimatedModal
              header={'Fruit'}
              visible={this.visible}
              toggleEvent={this.toggleEvent}
            >
              <Visibility active={this.optionSelect === 'create'}>
                <TestForm onSubmit={this.create} {...this} />
              </Visibility>
              <Visibility active={this.optionSelect === 'details'}>
                <TestDisplay
                  onSubmit={this.details}
                  initial={this.props.FruitStore.fruit}
                  {...this}
                />
              </Visibility>
              <Visibility active={this.optionSelect === 'update'}>
                <TestForm
                  onSubmit={this.update}
                  initial={this.props.FruitStore.fruit}
                  {...this}
                />
              </Visibility>
              <Visibility active={this.optionSelect === 'delete'}>
                <TestDisplay
                  onSubmit={this.delete}
                  initial={this.props.FruitStore.fruit}
                  {...this}
                />
              </Visibility>
            </AnimatedModal>
          </div>
          <div>
            <FruitTable
              list={this.props.FruitStore.fruitList}
              deleteAction={this.deleteFetch}
              updateAction={this.updateFetch}
              detailsAction={this.detailsFetch}
              createAction={this.createFetch}
            />
          </div>
        </div>

        <div>
          <Button onClick={this.fetchFruits}>
            Fetch fruits
            <Loader inline active={false} />
          </Button>
          <p>Loading: {String(this.props.FruitStore.isLoading)}</p>
          <p>Error: {String(this.props.FruitStore.error)}</p>
          <p>selected form: {this.optionSelect}</p>
          <div>
            <h2>Errors:</h2>

            <p>{JSON.stringify(this.props.FruitStore.errorData)}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CRUD;
