export function getProjectRequest() {
  return {
    type: '@projects/GET_PROJECT_REQUEST',
  };
}

export function getProjectSuccess(projects) {
  return {
    type: '@projects/GET_PROJECT_SUCCESS',
    payload: { projects },
  };
}

export function openProjectModal() {
  return {
    type: '@projects/OPEN_PROJECT_MODAL',
  };
}

export function closeProjectModal() {
  return {
    type: '@projects/CLOSE_PROJECT_MODAL',
  };
}

export function createProjectRequest(title) {
  return {
    type: '@projects/CREATE_PROJECT_REQUEST',
    payload: { title },
  };
}

export function createProjectSuccess(project) {
  return {
    type: '@projects/CREATE_PROJECT_SUCCESS',
    payload: { project },
  };
}
