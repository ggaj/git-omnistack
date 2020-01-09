import produce from 'immer';

const INITIAL_STATE = {
  members: [],
  memberModalOpen: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@members/GET_MEMBER_SUCCESS': {
        draft.members = action.payload.members;
        break;
      }

      case '@members/OPEN_MEMBER_MODAL': {
        draft.memberModalOpen = true;
        break;
      }

      case '@members/CLOSE_MEMBER_MODAL': {
        draft.memberModalOpen = false;
        break;
      }

      case '@members/UPDATE_MEMBER_REQUEST': {
        const { id, roles } = action.payload;
        const members = state.members.map(member =>
          member.id === id ? { ...member, roles } : member
        );
        draft.members = members;
        break;
      }
      default:
    }
  });
}
