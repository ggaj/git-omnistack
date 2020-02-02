import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import NavigationService from "../../../services/navigation";
import { ToastActionsCreators } from "react-native-redux-toast";
import { signInSuccess, getPermissionsSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });
    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token));
    NavigationService.navigate('Main')
    
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.message))
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
    yield put(ToastActionsCreators.displayError(error.message))
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
  // yield put(clearTeam());
  // history.push('/signin');
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
    yield put(ToastActionsCreators.displayError(error.message))
  }
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
