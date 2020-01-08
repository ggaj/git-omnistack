import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import {
  getProjectSuccess,
  createProjectSuccess,
  closeProjectModal,
} from './actions';

// eslint-disable-next-line import/no-cycle
import api from '~/services/api';

export function* projectRequest() {
  try {
    const response = yield call(api.get, 'projects');
    yield put(getProjectSuccess(response.data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Projetos',
        message: 'Falha ao buscar Dados',
      })
    );
  }
}

export function* createProjectRequest({ payload }) {
  try {
    const { title } = payload;

    const response = yield call(api.post, 'projects', { title });

    yield put(createProjectSuccess(response.data));
    yield put(closeProjectModal());
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Projetos',
        message: 'Falha ao inserir project',
      })
    );
  }
}

export default all([
  takeLatest('@projects/GET_PROJECT_REQUEST', projectRequest),
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProjectRequest),
]);
