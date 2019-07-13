import { inject } from 'src/pages/Home/node_modules/mmlpx';
import { observer } from 'src/pages/Home/node_modules/mobx-react';
import * as React from 'src/pages/Home/node_modules/react';
import { Link } from 'src/pages/Home/node_modules/react-router-dom';
import { Input } from 'src/pages/Home/node_modules/semantic-ui-react';
import ShowStore from 'src/state/stores/showStore';

interface Props {
  routing: any;
}

@observer
class Home extends React.Component<Props> {
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
