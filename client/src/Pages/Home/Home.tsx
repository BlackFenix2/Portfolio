import { inject } from 'mmlpx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import ShowStore from 'src/state/stores/showStore';

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
          <Input
            onChange={this.handleSearchTermChange}
            value={this.ShowStore.searchTerm}
            placeholder="Search..."
            icon="search"
          />
          <Link to="/Shows">or Browse All</Link>
        </form>
      </div>
    );
  }
}

export default Home;
