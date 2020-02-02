/* eslint-disable import/no-cycle */
import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { actions as toastrActions } from 'react-redux-toastr';

import { getTeamSuccess, createTeamSuccess, closeTeamModal } from './actions';
import { getPermissions } from '../auth/sagas';
import { projectRequest } from '../projects/sagas';
import { membersRequest } from '../members/sagas';

import api from '~/services/api';

export function* teamRequest() {
  try {
    const response = yield call(api.get, 'teams');
    yield put(getTeamSuccess(response.data));
  } catch (error) {
    yield put(
      // toastrActions.add({
      //   type: 'error',
      //   title: 'Times',
      //   message: 'Falha ao buscar Dados',
      // })
    );
  }
}

export function* createTeamRequest({ payload }) {
  try {
    const { name } = payload;

    const response = yield call(api.post, 'teams', { name });

    yield put(createTeamSuccess(response.data));
    // yield put(closeTeamModal());
  } catch (error) {
    yield put(
      // toastrActions.add({
      //   type: 'error',
      //   title: 'Times',
      //   message: 'Falha ao inserir time',
      // })
    );
  }
}

export default all([
  takeLatest('@teams/GET_TEAM_REQUEST', teamRequest),
  // takeLatest('@teams/GET_TEAM_REQUEST', getPermissions),
  takeLatest('@teams/SELECT_TEAM', projectRequest),
  takeLatest('@teams/SELECT_TEAM', getPermissions),
  takeLatest('@teams/SELECT_TEAM', membersRequest),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeamRequest),
]);
