import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Loader } from 'semantic-ui-react';
import Visibility from 'src/components/effects/Visibility';
import AnimatedModal from 'src/components/elements/Modal';
import TestDisplay from 'src/Pages/CRUD/TestDisplay';
import fruitRoutines from 'src/state/actions/FruitActions/fruitRoutines';
import FruitTable from './FruitTable';
import TestForm from './TestForm';

interface IProps {
  actions: any;
  fruits: any;
}

interface State {
  uiLoading: boolean;
  visible: boolean;
  optionSelect: string;
}

const mapStateToProps = ({ fruits }) => ({ fruits });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...fruitRoutines }, dispatch)
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class CRUD extends React.Component<IProps, State> {
  public state = {
    uiLoading: false,
    visible: false,
    optionSelect: 'create'
  };
  public componentDidMount() {
    this.fetchFruits();
  }
  public sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  public fetchFruits = () => {
    this.props.actions.getFruitList();
  };

  public setLoading = (bool: boolean) => {
    this.setState({
      uiLoading: bool
    });
  };

  public create = value => {
    this.props.actions.addFruit(value);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  public delete = id => {
    this.props.actions.deleteFruit(id);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  public update = value => {
    this.props.actions.updateFruit(value);
    this.setLoading(true);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
      this.setLoading(false);
    });
  };

  public details = id => {
    this.props.actions.getFruit(id);

    this.toggleEvent();
  };

  public createFetch = id => {
    this.setState({
      optionSelect: 'create'
    });
    this.toggleEvent();
  };

  public updateFetch = id => {
    this.setState({
      optionSelect: 'update'
    });
    this.details(id);
  };

  public deleteFetch = id => {
    this.setState({
      optionSelect: 'delete'
    });
    this.details(id);
  };

  public detailsFetch = id => {
    this.setState({
      optionSelect: 'details'
    });
    this.details(id);
  };
  public toggleEvent = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  public render() {
    return (
      <React.Fragment>
        <div>
          <h2>Fruits Table</h2>
          <div>
            <AnimatedModal
              header={'Fruit'}
              visible={this.state.visible}
              toggleEvent={this.toggleEvent}
            >
              <Visibility active={this.state.optionSelect === 'create'}>
                <TestForm onSubmit={this.create} {...this.state} />
              </Visibility>
              <Visibility active={this.state.optionSelect === 'details'}>
                <TestDisplay
                  onSubmit={this.details}
                  initial={this.props.fruits.fruit}
                  {...this.state}
                />
              </Visibility>
              <Visibility active={this.state.optionSelect === 'update'}>
                <TestForm
                  onSubmit={this.update}
                  initial={this.props.fruits.fruit}
                  {...this.state}
                />
              </Visibility>
              <Visibility active={this.state.optionSelect === 'delete'}>
                <TestDisplay
                  onSubmit={this.delete}
                  initial={this.props.fruits.fruit}
                  {...this.state}
                />
              </Visibility>
            </AnimatedModal>
          </div>
          <div>
            <FruitTable
              list={this.props.fruits.fruitList}
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
          <p>Loading: {String(this.props.fruits.isLoading)}</p>
          <p>Error: {String(this.props.fruits.error)}</p>
          <p>selected form: {this.state.optionSelect}</p>
          <div>
            <h2>Errors:</h2>

            <p>{JSON.stringify(this.props.fruits.errorData)}</p>
            <p>{JSON.stringify(this.props.fruits.errorData.message)}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CRUD;
