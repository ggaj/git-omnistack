// export function getMemberRequest() {
//   return {
//     type: '@membros/GET_MEMBER_REQUEST',
//   };
// }

// export function getMemberSuccess(projects) {
//   return {
//     type: '@membros/GET_MEMBER_SUCCESS',
//     payload: { projects },
//   };
// }

export function openMemberModal() {
  return {
    type: '@members/OPEN_MEMBER_MODAL',
  };
}

export function closeMemberModal() {
  return {
    type: '@members/CLOSE_MEMBER_MODAL',
  };
}

// export function createProjectRequest(title) {
//   return {
//     type: '@membros/CREATE_PROJECT_REQUEST',
//     payload: { title },
//   };
// }

// export function createProjectSuccess(project) {
//   return {
//     type: '@membros/CREATE_PROJECT_SUCCESS',
//     payload: { project },
//   };
// }
