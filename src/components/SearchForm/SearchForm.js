import React, { Component } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import './SearchForm.css';
// import fetchProject from '../../services/ferchProject';
import GithubMenuItem from '../GithubMenuItem';


class SearchForm extends Component {
  state = {
    allowNew: false,
    bsSize: 'large',
    multiple: false,
    isLoading: false,
    options: [],
    searchText: ''
  };

  render() {
    const { loading, actions, project } = this.props;

    return (
      <div>
        <AsyncTypeahead
          {...this.state}
          id="SearchForm"
          className="searchForm"
          labelKey="full_name"
          options={project}
          minLength={3}
          onSearch={event => {
            actions.setSearchText(event);
            this.setState({ searchText: event });
            actions.fetchProject();
          }}
          placeholder="Search for a Github user..."
          isLoading={loading}
          renderMenuItemChildren={option => (
            <GithubMenuItem key={option.id} user={option} />
          )}
        />
        {/* <Button onClick={() => actions.fetchProject()}>OK</Button>
        {loading ? 'Loading' : ''} */}
      </div>
    );
  }
}

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.array.isRequired
};

export default SearchForm;
