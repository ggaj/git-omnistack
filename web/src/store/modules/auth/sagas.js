import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  let response = null;
  try {
    const { email, password } = payload;

    response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

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

    yield call(api.post, 'users', { name, email, password, provider: true });

    history.push('/');
  } catch (error) {
    // toast.error('Falha na criação do usuário');
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

export function signOut() {
  history.push('/');
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
