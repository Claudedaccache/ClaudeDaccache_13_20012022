import * as actions from "./ActionTypes";
const initialState = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.EditUserName:
      return;
    default:
      return state;
  }
}

export default reducer;
