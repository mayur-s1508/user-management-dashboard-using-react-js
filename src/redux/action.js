export function fetchUsers(users) {
  return {
    type: "FETCH_USERS",
    payload: users,
  };
}
export function createUsers(users) {
  return {
    type: "CREATE_USERS",
    payload: users,
  };
}
export function updateUsers(users) {
  return {
    type: "UPDATE_USERS",
    payload: users,
  };
}
export function deleteUsers(userData) {
  return {
    type: "DELETE_USERS",
    payload: userData,
  };
}
