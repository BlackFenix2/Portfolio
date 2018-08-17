import pickBy from 'lodash.pickby';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from 'src/components/SearchBar';
import actionCreators from 'src/state/actions';
import ShowList from './ShowList';

import preload from './datas.json';

interface IProps {
  actions: any;
  searchTerm: string;
}

class Shows extends React.Component<IProps> {
  public setSearchTerm = event => {
    this.props.actions.setSearchTerm(event.target.value);
  };

  public filterResults = collection =>
    pickBy(
      collection,
      value =>
        value.title.toUpperCase().match(this.props.searchTerm.toUpperCase()) ||
        value.description
          .toUpperCase()
          .match(this.props.searchTerm.toUpperCase())
    );

  public render() {
    return (
      <div>
        <SearchBar
          doSearch={this.setSearchTerm}
          searchTerm={this.props.searchTerm}
        />

        <ShowList
          searchTerm={this.props.searchTerm}
          shows={this.filterResults(preload.shows)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shows);
