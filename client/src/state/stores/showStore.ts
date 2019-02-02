import { Dictionary, pickBy } from 'lodash';
import { Store } from 'mmlpx';
import { autorun, observable } from 'mobx';
import preload from './datas.json';

@Store
export default class ShowStore {
  @observable searchTerm: string = '';

  @observable test: string = '';

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
