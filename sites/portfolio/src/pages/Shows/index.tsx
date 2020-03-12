import React from 'react';
import { observer } from 'mobx-react-lite';
import showStore from 'src/state/stores/showStore';
import ShowList from 'src/components/Views/Shows/ShowList';
import { Search } from '@material-ui/icons';
import TextInput from 'src/components/inputs';

const Shows = () => {
  const ShowStore = React.useContext(showStore);

  const setSearchTerm = event => {
    ShowStore.searchTerm = event.target.value;
  };

  return (
    <div>
      <TextInput
        label="Search Shows"
        value={ShowStore.searchTerm}
        changeEvent={setSearchTerm}
        Icon={Search}
      />

      <ShowList shows={ShowStore.shows} />
    </div>
  );
};

export default observer(Shows);
