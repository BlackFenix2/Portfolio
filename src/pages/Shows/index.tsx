import React from 'react';

import { observer } from 'mobx-react-lite';
import { Input as OldInput } from 'semantic-ui-react';
import showStore from 'src/state/stores/showStore';
import ShowList from 'src/components/Views/Shows/ShowList';
import {
  InputBase,
  Paper,
  IconButton,
  Input,
  InputAdornment,
  TextField
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { css } from '@emotion/core';

const Shows = () => {
  const ShowStore = React.useContext(showStore);

  const setSearchTerm = event => {
    ShowStore.searchTerm = event.target.value;
  };

  return (
    <div>
      <Input
        css={css`
          background-color: white;
          border: solid thin lightgray;
          border-radius: 5px;
          padding: 2px 6px;
        `}
        disableUnderline
        placeholder="Search..."
        value={ShowStore.searchTerm}
        onChange={setSearchTerm}
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />

      <ShowList shows={ShowStore.shows} />
    </div>
  );
};

export default observer(Shows);
