const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const FETCH_PROJECT = 'FETCH_PROJECT';
const GITHUB_UPDATE_FORM = 'GITHUB_UPDATE_FORM';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_PROJECT_ERROR = 'FETCH_PROJECT_ERROR';

export default {
  setSearchText: searchText => ({ type: SET_SEARCH_TEXT, searchText }),
  fetchProject: () => ({ type: FETCH_PROJECT }),
  githubUpdateForm: value => ({ type: GITHUB_UPDATE_FORM, payload: { value } }),
  fetchProjectSuccess: project => ({ type: FETCH_WEATHER_SUCCESS, project }),
  fetchProjectError: () => ({ type: FETCH_PROJECT_ERROR })
};
