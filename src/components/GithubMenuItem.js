import PropTypes from 'prop-types';
import React from 'react';

const GithubMenuItem = ({ user }) => (
  <div>
    <a href={user.html_url}><span>{user.full_name}</span></a>
    <span>
      {'   ☆'}
      {user.stargazers_count}
    </span>
    <span>
    👁
      {' '}
      {user.watchers_count}
    </span>

  </div>
);

GithubMenuItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    watchers_count: PropTypes.number.isRequired
  }).isRequired
};

export default GithubMenuItem;
