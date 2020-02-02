import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ToastActionsCreators } from "react-native-redux-toast";
import { getMemberSuccess, closeMemberModal } from './actions';

import api from '~/services/api';

export function* membersRequest() {
  try {
    const response = yield call(api.get, 'members');
    yield put(getMemberSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.message))
  }
}

export function* updateMember({ payload }) {
  try {
    const { id, roles } = payload;
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });
    yield put(ToastActionsCreators.displayInfo('Membro atualizado com sucesso'))
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.message))
  }
}

export function* inviteMember({ payload }) {
  try {
    const { email } = payload;
    yield call(api.post, 'invites', { invites: [email] });
    yield put(closeMemberModal());
    yield put(ToastActionsCreators.displayInfo('Enviamos um convite para participar do time'))
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.message))
  }
}

export default all([
  takeLatest('@members/GET_MEMBER_REQUEST', membersRequest),
  takeLatest('@members/UPDATE_MEMBER_REQUEST', updateMember),
  takeLatest('@members/INVITE_MEMBER_REQUEST', inviteMember),
]);
