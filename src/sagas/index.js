import * as projectSaga from './project';

export default function* root() {
  yield [
    projectSaga.watchFetchProject()
  ];
}
