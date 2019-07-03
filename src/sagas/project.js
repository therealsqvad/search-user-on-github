// import { takeEvery } from 'redux-saga';
import {
  call, put, select, takeEvery
} from 'redux-saga/effects';
import fetchProjectService from '../services/ferchProject';
import projectActions from '../actions/project';
import projectSelector from '../selectors/index';


export function* fetchProject() {
  try {
    const searchText = yield select(projectSelector.getSearchText);
    const response = yield call(fetchProjectService, searchText);

    console.log(response);
    console.log('saga fetchproject');
    yield put(projectActions.fetchWeatherSucces(response));
  } catch (error) {
    yield put(projectActions.fetchWeatherError(error));
  }
}
export function* watchFetchProject() {
  yield* takeEvery('FETCH_PROJECT', fetchProject);
}
