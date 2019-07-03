import React, { Component } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import './SearchForm.css';
// import fetchProject from '../../services/ferchProject';
import GithubMenuItem from '../GithubMenuItem';
import makeAndHandleRequest from '../../services/ferchProject';


class SearchForm extends Component {
  state = {
    allowNew: false,
    bsSize: 'large',
    multiple: false,
    isLoading: false,
    options: [],
    searchText: ''
  };

  handleSearch = query => {
    this.setState({ isLoading: true });
    makeAndHandleRequest(query)
      .then(({ options }) => {
        this.setState({
          isLoading: false,
          options
        });
        console.log(this.state);
      });
  }

  render() {
    // const { searchText } = this.state;
    // const { loading, actions } = this.props;

    return (
      <AsyncTypeahead
        {...this.state}
        id="Search"
        labelKey="full_name"
        minLength={3}
        onSearch={event => {
          // actions.setSearchText(event);
          // this.setState({ searchText: event });
          // actions.fetchProject();
          this.handleSearch(event);
        }}
        placeholder="Search for a Github user..."
        // isLoading={loading}
        renderMenuItemChildren={option => (
          <GithubMenuItem key={option.id} user={option} />
        )}
      />
    );
  }
}

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object.isRequired
};

export default SearchForm;
