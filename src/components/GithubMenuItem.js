import PropTypes from 'prop-types';
import React from 'react';

const GithubMenuItem = ({ user }) => (
  <div>
    <span>{user.full_name}</span>
    <span>
    ☆
      {' '}
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
// import PropTypes from 'prop-types';
// import React from 'react';

// const GithubMenuItem = ({ user }) => (
//   <div>
//     <img
//       alt={user.login}
//       src={user.avatar_url}
//       style={{
//         height: '24px',
//         marginRight: '10px',
//         width: '24px'
//       }}
//     />
//     <span>{user.login}</span>
//   </div>
// );

// GithubMenuItem.propTypes = {
//   user: PropTypes.shape({
//     avatar_url: PropTypes.string.isRequired,
//     login: PropTypes.string.isRequired
//   }).isRequired
// };

// export default GithubMenuItem;
