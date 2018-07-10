import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actionCreators from '../../state/actions';

import styles from './test.module.css';

interface IProps {
  history: any;
  actions: any;
  searchTerm: string;
}

class Landing extends React.Component<IProps> {
  public goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/Shows');
  };

  public handleSearchTermChange = event => {
    this.props.actions.setSearchTerm(event.target.value);
  };

  public render() {
    return (
      <div>
        <h1>Welcome to thew home page</h1>
        <p>{this.props.searchTerm}</p>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
          <Link to="/Shows" className={styles.othertest}>
            or Browse All
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
