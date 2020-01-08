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

export function openTeamModal() {
  return {
    type: '@teams/OPEN_TEAM_MODAL',
  };
}

export function closeTeamModal() {
  return {
    type: '@teams/CLOSE_TEAM_MODAL',
  };
}

export function createTeamRequest(name) {
  return {
    type: '@teams/CREATE_TEAM_REQUEST',
    payload: { name },
  };
}

export function createTeamSuccess(team) {
  return {
    type: '@teams/CREATE_TEAM_SUCCESS',
    payload: { team },
  };
}

export function clearTeam() {
  return {
    type: '@teams/CLEAR_TEAM',
  };
}
