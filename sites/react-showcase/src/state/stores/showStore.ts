import { Dictionary, pickBy } from 'lodash';
import { autorun, observable } from 'mobx';
import { createContext } from 'react';
import * as preload from './datas.json';

class ShowStore {
  @observable searchTerm = '';

  @observable shows: Dictionary<any> = preload.shows;

  // delay like debounce
  testRun = autorun(
    () => {
      this.shows = pickBy(
        preload.shows,
        (value) =>
          value.title.toUpperCase().match(this.searchTerm.toUpperCase()) ||
          value.description.toUpperCase().match(this.searchTerm.toUpperCase())
      );
    },
    { delay: 500 }
  );
}

export default createContext(new ShowStore());
