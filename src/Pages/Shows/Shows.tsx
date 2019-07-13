import * as React from 'react';

import { inject } from 'mmlpx';
import { observer } from 'mobx-react';
import { Input } from 'semantic-ui-react';
import ShowStore from 'src/state/stores/showStore';
import ShowList from './ShowList';

@observer
class Shows extends React.Component {
  @inject() ShowStore: ShowStore;

  setSearchTerm = event => {
    this.ShowStore.searchTerm = event.target.value;
  };

  render() {
    return (
      <div>
        <Input
          icon="search"
          placeholder="Search..."
          value={this.ShowStore.searchTerm}
          onChange={this.setSearchTerm}
        />

        <ShowList shows={this.ShowStore.shows} />
      </div>
    );
  }
}

export default Shows;
