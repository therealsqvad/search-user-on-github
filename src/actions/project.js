const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const FETCH_PROJECT = 'FETCH_PROJECT';
const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
const FETCH_PROJECT_ERROR = 'FETCH_PROJECT_ERROR';

export default {
  setSearchText: searchText => ({ type: SET_SEARCH_TEXT, searchText }),
  fetchProject: () => ({ type: FETCH_PROJECT }),
  fetchProjectSuccess: project => ({ type: FETCH_PROJECT_SUCCESS, project }),
  fetchProjectError: () => ({ type: FETCH_PROJECT_ERROR })
};
