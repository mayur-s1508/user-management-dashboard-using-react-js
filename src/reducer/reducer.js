export default function reducer(state = { users: [] }, action) {
  let newState = { ...state };
  switch (action.type) {
    case "FETCH_USERS":
      newState.users = action.payload;
      return newState;
    case "CREATE_USERS":
      newState.users.push({
        userId: "NA",
        userName: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
        userDob: new Date(action.payload.userDob),
        userContacts: [
          action.payload.primaryContact,
          action.payload.alternateContact,
        ],
        userCity: action.payload.userCity,
        userState: action.payload.userState,
      });
      return newState;
    case "UPDATE_USERS":
      newState.users.forEach((user) => {
        if (user.userId === action.payload.userId) {
          if (action.payload.firstName) {
            user.userName.firstName = action.payload.firstName;
          }
          if (action.payload.lastName) {
            user.userName.lastName = action.payload.lastName;
          }
          if (action.payload.userDob) {
            user.userDob = new Date(action.payload.userDob);
          }
          if (
            action.payload.primaryContact &&
            action.payload.alternateContact
          ) {
            user.userContacts[0] = action.payload.primaryContact;
            user.userContacts[1] = action.payload.alternateContact;
          }
          if (action.payload.userCity) {
            user.userCity = action.payload.userCity;
          }
          if (action.payload.userState) {
            user.userState = action.payload.userState;
          }
        }
      });
      return newState;
    case "DELETE_USERS":
      for (var i = 0; i < newState.users.length; i++) {
        if (newState.users[i].userId === action.payload.userId) {
          newState.users.splice(i, 1);
          break;
        }
      }
      return newState;
    default:
      return state;
  }
}
