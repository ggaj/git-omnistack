import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  roles: [],
  permissions: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      case '@auth/GET_PERMISSIONS_SUCCESS': {
        draft.roles = action.payload.roles;
        draft.permissions = action.payload.permissions;
        break;
      }

      default:
    }
  });
}
