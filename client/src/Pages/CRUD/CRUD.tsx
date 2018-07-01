import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader } from 'semantic-ui-react';
import Visibility from 'src/components/effects/Visibility';
import fruitRoutines from 'src/state/actions/FruitActions/fruitRoutines';
import FruitTable from './FruitTable';
import ModalContent from './ModalContent';
import TestForm from './TestForm';

interface IProps {
  actions: any;
  fruits: any;
}

class CRUD extends React.Component<IProps> {
  public state = {
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

  public create = value => {
    this.props.actions.addFruit(value);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
    });
  };

  public delete = id => {
    this.props.actions.deleteFruit(id);

    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
    });
  };

  public update = value => {
    this.props.actions.updateFruit(value);
    this.sleep(1000).then(() => {
      this.fetchFruits();
      this.toggleEvent();
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

    this.details(id);
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
            <ModalContent
              visible={this.state.visible}
              toggleEvent={this.toggleEvent}
              loading={this.props.fruits.isLoading}
            >
              <Visibility active={this.state.optionSelect === 'create'}>
                <TestForm
                  onSubmit={this.create}
                  initial={this.props.fruits.fruit}
                />
              </Visibility>
              <Visibility active={this.state.optionSelect === 'details'}>
                <TestForm
                  onSubmit={this.details}
                  initial={this.props.fruits.fruit}
                />
              </Visibility>
              <Visibility active={this.state.optionSelect === 'update'}>
                <TestForm
                  onSubmit={this.update}
                  initial={this.props.fruits.fruit}
                />
              </Visibility>
              <Visibility active={this.state.optionSelect === 'delete'}>
                <TestForm
                  onSubmit={this.delete}
                  initial={this.props.fruits.fruit}
                />
              </Visibility>
            </ModalContent>
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
          <button onClick={this.fetchFruits}>
            Fetch fruits<Loader inline active={false} />
          </button>
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

const mapStateToProps = ({ fruits }) => ({ fruits });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...fruitRoutines }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CRUD);
