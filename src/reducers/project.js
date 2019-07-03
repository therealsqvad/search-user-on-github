const initialState = {
  project: {
    html_url: '',
    full_name: '',
    stargazers_count: 0,
    watchers_count: 0
  },
  loading: false,
  error: null,
  searchText: ''
};

function setSearchText(state, { searchText }) {
  return {
    ...state,
    searchText
  };
}

function fetchProject(state) {
  console.log('reducer fetch project');
  return {
    ...state,
    error: null,
    loading: true
  };
}

function fetchProjectSuccess(state, { project }) {
  console.log('reducer fetch project success');

  return {
    ...state,
    error: null,
    loading: false,
    project
  };
}

function fetchProjectError(state, { error }) {
  return {
    ...state,
    error,
    loading: false
  };
}

const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const FETCH_PROJECT = 'FETCH_PROJECT';
const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
const FETCH_PROJECT_ERROR = 'FETCH_PROJECT_ERROR';

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return setSearchText(state, action);
    case FETCH_PROJECT:
      return fetchProject(state, action);
    case FETCH_PROJECT_SUCCESS:
      return fetchProjectSuccess(state, action);
    case FETCH_PROJECT_ERROR:
      return fetchProjectError(state, action);
    default:
      return state;
  }
}
