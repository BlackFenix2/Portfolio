import * as React from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import ShowStore from 'src/state/stores/showStore';
import styles from './test.module.css';

interface IProps {
  routing: any;
  ShowStore: ShowStore;
}
@inject('routing', ShowStore.name)
@observer
class Home extends React.Component<IProps> {
  goToSearch = event => {
    event.preventDefault();
    this.props.routing.push('/Shows');
  };

  handleSearchTermChange = event => {
    this.props.ShowStore.searchTerm = event.target.value;
  };

  render() {
    return (
      <div>
        <p>{this.props.ShowStore.searchTerm}</p>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.ShowStore.searchTerm}
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

export default Home;
