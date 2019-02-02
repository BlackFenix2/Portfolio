import * as React from 'react';
import SearchBar from 'src/components/SearchBar';
import ShowList from './ShowList';

import { inject } from 'mmlpx';
import { observer } from 'mobx-react';
import ShowStore from 'src/state/stores/showStore';

@observer
class Shows extends React.Component {
  @inject() ShowStore: ShowStore;
  setSearchTerm = event => {
    this.ShowStore.searchTerm = event.target.value;
  };

  render() {
    return (
      <div>
        <SearchBar
          doSearch={this.setSearchTerm}
          searchTerm={this.ShowStore.searchTerm}
        />

        <ShowList shows={this.ShowStore.shows} />
      </div>
    );
  }
}

export default Shows;
