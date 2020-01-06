import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { getTeamSuccess } from './actions';

// eslint-disable-next-line import/no-cycle
import api from '~/services/api';

export function* teamRequest() {
  try {
    const response = yield call(api.get, 'teams');
    yield put(getTeamSuccess(response.data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Times',
        message: 'Falha ao buscar Dados',
      })
    );
  }
}

export default all([takeLatest('@teams/GET_TEAM_REQUEST', teamRequest)]);
