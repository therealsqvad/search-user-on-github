import React, { Component } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types';
import './SearchForm.css';
// import fetchProject from '../../services/ferchProject';
// import GithubMenuItem from '../GithubMenuItem';
// import Cards from '../Cards';


class SearchForm extends Component {
  state = {
    allowNew: true,
    bsSize: 'large',
    multiple: false,
    isLoading: false,
    options: [],
    searchText: ''
  };

  render() {
    const { loading, actions, projects } = this.props;

    console.log(projects);
    return (
      <div>
        <AsyncTypeahead
          {...this.state}
          id="SearchForm"
          className="searchForm"
          labelKey="full_name"
          options={projects}
          minLength={3}
          onSearch={event => {
            actions.setSearchText(event);
            this.setState({ searchText: event });
            actions.fetchProject();
            this.setState({ options: projects });
            console.log(this.state);
          }}
          placeholder="Search for a Github project..."
          isLoading={loading}
          // renderMenuItemChildren={option => (
          //   <GithubMenuItem key={option.id} user={option} />
          // )}
        />
        <FormControl
          size="lg"
          placeholder="Поиск проекта на Github..."
          onChange={event => {
            actions.setSearchText(event.target.value);
            this.setState({ searchText: event.target.value });
            actions.fetchProject();
            this.setState({ options: projects });
            console.log(this.state);
          }}
        />
        <div>
          {/* {loading ? 'Loading' : <Cards data={projects} hidden={projects[0].full_name === ''} />} */}
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array.isRequired
};

export default SearchForm;
