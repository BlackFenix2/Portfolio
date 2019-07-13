import * as React from 'react';

const SearchBar = props => (
  <div>
    <input
      type="search"
      placeholder="Enter search term"
      value={props.searchTerm}
      onChange={props.doSearch}
    />
  </div>
);

export default SearchBar;
