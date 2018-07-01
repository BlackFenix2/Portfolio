import * as _ from 'lodash';

const filterResults = collection =>
  _.pickBy(
    collection,
    value =>
      value.title.toUpperCase().match(this.props.searchTerm.toUpperCase()) ||
      value.description.toUpperCase().match(this.props.searchTerm.toUpperCase())
  );
