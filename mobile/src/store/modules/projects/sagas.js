import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ToastActionsCreators } from "react-native-redux-toast";
import {
  getProjectSuccess,
  createProjectSuccess,
  closeProjectModal,
} from './actions';

import api from '~/services/api';

export function* projectRequest() {
  try {
    const response = yield call(api.get, 'projects');
    yield put(getProjectSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.message))
  }
}

export function* createProjectRequest({ payload }) {
  try {
    const { title } = payload;

    const response = yield call(api.post, 'projects', { title });

    yield put(createProjectSuccess(response.data));
    yield put(closeProjectModal());
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.message))
  }
}

export default all([
  takeLatest('@projects/GET_PROJECT_REQUEST', projectRequest),
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProjectRequest),
]);
