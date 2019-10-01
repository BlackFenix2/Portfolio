import React from 'react';

import { observer } from 'mobx-react-lite';
import { Input } from 'semantic-ui-react';
import showStore from 'src/state/stores/showStore';
import ShowList from 'src/components/Views/Shows/ShowList';

const Shows = observer(() => {
  const ShowStore = React.useContext(showStore);

  const setSearchTerm = event => {
    ShowStore.searchTerm = event.target.value;
  };

  return (
    <div>
      <Input
        icon="search"
        placeholder="Search..."
        value={ShowStore.searchTerm}
        onChange={setSearchTerm}
      />

      <ShowList shows={ShowStore.shows} />
    </div>
  );
});

export default Shows;
