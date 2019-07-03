import { fork } from 'redux-saga/effects';
import * as projectSaga from './project';

export default function* root() {
  console.log('root saga');
  yield [
    fork(projectSaga.watchFetchProject)
  ];
}
