import { inject } from 'mmlpx';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Button, Loader } from 'semantic-ui-react';
import Visibility from 'src/components/effects/Visibility';
import AnimatedModal from 'src/components/elements/Modal';
import TestDisplay from 'src/pages/CRUD/TestDisplay';
import FruitStore from 'src/state/stores/fruitStore';
import FruitTable from './FruitTable';
import TestForm from './TestForm';
import DeleteForm from './DeleteForm';

interface IProps {
  actions: any;
  fruits: any;
}

interface State {
  uiLoading: boolean;
  visible: boolean;
  optionSelect: string;
}

@observer
class CRUD extends React.Component<IProps, State> {
  @inject() FruitStore: FruitStore;

  @observable visible: boolean = false;

  @observable uiLoading: boolean = false;

  @observable optionSelect: string = 'create';

  componentDidMount() {
    this.fetchFruits();
  }

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  fetchFruits = () => {
    this.FruitStore.getFruitList();
  };

  setLoading = (bool: boolean) => {
    this.uiLoading = bool;
  };

  create = value => {
    this.FruitStore.addFruit(value);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  delete = id => {
    this.FruitStore.deleteFruit(id);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  update = value => {
    this.FruitStore.updateFruit(value);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  details = value => {
    this.FruitStore.getFruit(value);

    this.toggleEvent();
  };

  createFetch = () => {
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
              header="Fruit"
              visible={this.visible}
              toggleEvent={this.toggleEvent}
            >
              <Visibility active={this.optionSelect === 'create'}>
                <TestForm onSubmit={this.create} {...this} />
              </Visibility>
              <Visibility active={this.optionSelect === 'details'}>
                <TestDisplay
                  onSubmit={this.details}
                  initial={this.FruitStore.fruit}
                  {...this}
                />
              </Visibility>
              <Visibility active={this.optionSelect === 'update'}>
                <TestForm
                  onSubmit={this.update}
                  initial={this.FruitStore.fruit}
                  {...this}
                />
              </Visibility>
              <Visibility active={this.optionSelect === 'delete'}>
                <DeleteForm
                  onSubmit={this.delete}
                  initial={this.FruitStore.fruit}
                  {...this}
                />
              </Visibility>
            </AnimatedModal>
          </div>
          <div>
            <FruitTable
              list={this.FruitStore.fruitList}
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
          <p>
            Loading:
            {String(this.FruitStore.isLoading)}
          </p>
          <p>
            Error:
            {String(this.FruitStore.error)}
          </p>
          <p>
            selected form:
            {this.optionSelect}
          </p>
          <div>
            <h2>Errors:</h2>

            <p>{JSON.stringify(this.FruitStore.errorData)}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CRUD;
