import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { getMemberSuccess } from './actions';

// eslint-disable-next-line import/no-cycle
import api from '~/services/api';

export function* membersRequest() {
  try {
    const response = yield call(api.get, 'members');
    yield put(getMemberSuccess(response.data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Membros',
        message: 'Falha ao buscar Dados',
      })
    );
  }
}

export function* updateMember({ payload }) {
  try {
    const { id, roles } = payload;
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });
    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Membro atualizado',
        message: 'O membro foi atualizado com sucesso',
      })
    );
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Membros',
        message: 'Falha ao atualizar dados',
      })
    );
  }
}

export default all([
  takeLatest('@members/GET_MEMBER_REQUEST', membersRequest),
  takeLatest('@members/UPDATE_MEMBER_REQUEST', updateMember),
]);
