import React, { Component } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import fetchProject from '../../services/ferchProject';
import GithubMenuItem from '../GithubMenuItem';


class SearchForm extends Component {
  state = {
    allowNew: false,
    multiple: false,
    isLoading: false,
    options: [],
    searchText: ''
  };

  handleSearch = query => {
    this.setState({ isLoading: true });
    fetchProject(query)
      .then(({ options }) => {
        console.log(this.state);
        this.setState({
          isLoading: false,
          options
        });
      });
  }

  render() {
    // const { searchText } = this.state;
    const { loading, actions } = this.props;

    return (
      <AsyncTypeahead
        {...this.state}
        labelKey="login"
        minLength={3}
        id={1}
        onSearch={event => {
          actions.setSearchText(event);
          this.setState({ searchText: event });
          actions.fetchProject();
          // this.handleSearch(event);
        }}
        placeholder="Search for a Github user..."
        isLoading={loading}
        renderMenuItemChildren={(option, props) => (
          <GithubMenuItem key={option.id} user={option} />
        )}
      />
    );
  }
}

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.shape.isRequired
};

export default SearchForm;
