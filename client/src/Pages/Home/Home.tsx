import * as React from 'react';
import { Link } from 'react-router-dom';

import { inject } from 'mmlpx';
import { observer } from 'mobx-react';
import ShowStore from 'src/state/stores/showStore';
import styles from './test.module.css';

interface IProps {
  routing: any;
}

@observer
class Home extends React.Component<IProps> {
  @inject() ShowStore: ShowStore;
  goToSearch = event => {
    event.preventDefault();
    this.props.routing.push('/Shows');
  };

  handleSearchTermChange = event => {
    this.ShowStore.searchTerm = event.target.value;
  };

  render() {
    return (
      <div>
        <p>{this.ShowStore.searchTerm}</p>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.ShowStore.searchTerm}
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
