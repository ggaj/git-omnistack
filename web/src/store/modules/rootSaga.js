import { all } from 'redux-saga/effects';

// eslint-disable-next-line import/no-cycle
import auth from './auth/sagas';
// eslint-disable-next-line import/no-cycle
import teams from './teams/sagas';

export default function* rootSaga() {
  return yield all([auth, teams]);
}
