import * as React from 'react';
import SearchBar from 'src/components/SearchBar';
import ShowList from './ShowList';

import { inject, observer } from 'mobx-react';
import ShowStore from 'src/state/stores/showStore';

interface IProps {
  ShowStore: ShowStore;
}

@inject(ShowStore.name)
@observer
class Shows extends React.Component<IProps> {
  setSearchTerm = event => {
    this.props.ShowStore.searchTerm = event.target.value;
  };

  render() {
    return (
      <div>
        <SearchBar
          doSearch={this.setSearchTerm}
          searchTerm={this.props.ShowStore.searchTerm}
        />

        <ShowList shows={this.props.ShowStore.shows} />
      </div>
    );
  }
}

export default Shows;
