export function getMemberRequest() {
  return {
    type: '@members/GET_MEMBER_REQUEST',
  };
}

export function getMemberSuccess(members) {
  return {
    type: '@members/GET_MEMBER_SUCCESS',
    payload: { members },
  };
}

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

export function updateMemberRequest(id, roles) {
  return {
    type: '@members/UPDATE_MEMBER_REQUEST',
    payload: { id, roles },
  };
}

export function inviteMemberRequest(email) {
  return {
    type: '@members/INVITE_MEMBER_REQUEST',
    payload: { email },
  };
}
