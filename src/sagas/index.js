// import { fork } from 'redux-saga/effects';
import * as projectSaga from './project';

export default function* root() {
  yield projectSaga.watchFetchProject();
}
