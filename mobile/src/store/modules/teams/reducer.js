import produce from 'immer';

const INITIAL_STATE = {
  teams: [],
  teamModalOpen: false,
  active: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@teams/GET_TEAM_SUCCESS': {
        draft.teams = action.payload.teams;
        break;
      }

      case '@teams/SELECT_TEAM': {
        draft.active = action.payload.team;
        break;
      }

      case '@teams/OPEN_TEAM_MODAL': {
        draft.teamModalOpen = true;
        break;
      }

      case '@teams/CLOSE_TEAM_MODAL': {
        draft.teamModalOpen = false;
        break;
      }

      case '@teams/CREATE_TEAM_SUCCESS': {
        const teams = [...state.teams, action.payload.team];
        draft.teams = teams;
        break;
      }

      case '@teams/CLEAR_TEAM': {
        draft.teams = [];
        draft.teamModalOpen = false;
        draft.active = null;
        break;
      }

      default:
    }
  });
}
