import produce from 'immer';

const INITIAL_STATE = {
  teams: [],
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

      default:
    }
  });
}
