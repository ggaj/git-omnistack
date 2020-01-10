/* eslint-disable no-useless-return */
import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { clearTeam } from '../teams/actions';
import { signInSuccess, signFailure, getPermissionsSuccess } from './actions';

// eslint-disable-next-line import/no-cycle
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/');
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no Login',
        message: 'Verifique seu email/senha!',
      })
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', { name, email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/');
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Você foi convidado para algum time?',
      })
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* signOut() {
  yield put(clearTeam());
  history.push('/signin');
}

export function* getPermissions() {
  try {
    const team = yield select(state => state.teams.active);
    const signedIn = yield select(state => state.auth.signed);

    if (!signedIn || !team) return;

    const response = yield call(api.get, 'permissions');

    const { roles, permissions } = response.data;
    console.tron.log(roles, permissions);
    yield put(getPermissionsSuccess(roles, permissions));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Configurador',
        message: 'Falha ao obter configurador',
      })
    );
  }
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
