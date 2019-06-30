import PropTypes from 'prop-types';
import React from 'react';

const GithubMenuItem = ({ user }) => (
  <div>
    {/* <img
      alt={project.login}
      src={user.avatar_url}
      style={{
        height: '24px',
        marginRight: '10px',
        width: '24px',
      }}
    /> */}
    <span>{user.full_name}</span>
    <span>
Количество звезд:
      {' '}
      {user.stargazers_count}
    </span>
    <span>
Количество подписчиков:
      {' '}
      {user.watchers_count}
    </span>

  </div>
);

GithubMenuItem.propTypes = {
  user: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    watchers_count: PropTypes.number.isRequired
  }).isRequired
};

export default GithubMenuItem;
