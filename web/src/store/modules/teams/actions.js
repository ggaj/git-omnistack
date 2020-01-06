export function getTeamRequest() {
  return {
    type: '@teams/GET_TEAM_REQUEST',
  };
}

export function getTeamSuccess(teams) {
  return {
    type: '@teams/GET_TEAM_SUCCESS',
    payload: { teams },
  };
}

export function selectTeam(team) {
  return {
    type: '@teams/SELECT_TEAM',
    payload: { team },
  };
}
