import { Dictionary, pickBy } from 'lodash';
import { autorun, observable } from 'mobx';
import preload from './datas.json';

export default class ShowStore {
  @observable searchTerm: string = '';

  @observable shows: Dictionary<any> = preload.shows;

  // delay like debounce
  testRun = autorun(
    () => {
      this.shows = pickBy(
        preload.shows,
        value =>
          value.title.toUpperCase().match(this.searchTerm.toUpperCase()) ||
          value.description.toUpperCase().match(this.searchTerm.toUpperCase())
      );
    },
    { delay: 500 }
  );
}
