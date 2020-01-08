import produce from 'immer';

const INITIAL_STATE = {
  members: [],
  memberModalOpen: false,
  // active: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // case '@projects/GET_PROJECT_SUCCESS': {
      //   draft.projects = action.payload.projects;
      //   break;
      // }

      case '@members/OPEN_MEMBER_MODAL': {
        draft.memberModalOpen = true;
        break;
      }

      case '@members/CLOSE_MEMBER_MODAL': {
        draft.memberModalOpen = false;
        break;
      }

      // case '@projects/CREATE_PROJECT_SUCCESS': {
      //   const projects = [...state.projects, action.payload.project];
      //   draft.projects = projects;
      //   break;
      // }

      default:
    }
  });
}
