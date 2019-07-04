// import { takeEvery } from 'redux-saga';
import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import fetchProjectService from '../services/ferchProject';
import projectActions from '../actions/project';
import projectSelector from '../selectors';


export function* fetchProject() {
  try {
    const searchText = yield select(projectSelector.getSearchText);
    const response = yield call(fetchProjectService, searchText);

    yield put(projectActions.fetchProjectSuccess(response));
  } catch (error) {
    yield put(projectActions.fetchProjectError(error));
  }
}
export function* watchFetchProject() {
  yield takeLatest('FETCH_PROJECT', fetchProject);
}
