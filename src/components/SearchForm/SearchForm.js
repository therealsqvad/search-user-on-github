import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  render() {
    const { loading, actions } = this.props;

    return (
      <div>
        <FormControl
          size="lg"
          placeholder="Поиск проекта на Github..."
          onChange={event => {
            if (event.target.value.length > 2) {
              actions.setSearchText(event.target.value);
              actions.fetchProject();
            }
          }}
        />
        <div>
          <Spinner animation="border" role="status" style={{ visibility: loading ? 'visible' : 'hidden' }} />
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object.isRequired
};

export default SearchForm;
