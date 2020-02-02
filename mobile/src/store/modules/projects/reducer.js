import produce from 'immer';

const INITIAL_STATE = {
  projects: [],
  projectModalOpen: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@projects/GET_PROJECT_SUCCESS': {
        draft.projects = action.payload.projects;
        break;
      }

      case '@projects/OPEN_PROJECT_MODAL': {
        draft.projectModalOpen = true;
        break;
      }

      case '@projects/CLOSE_PROJECT_MODAL': {
        draft.projectModalOpen = false;
        break;
      }

      case '@projects/CREATE_PROJECT_SUCCESS': {
        const projects = [...state.projects, action.payload.project];
        draft.projects = projects;
        break;
      }

      default:
    }
  });
}
