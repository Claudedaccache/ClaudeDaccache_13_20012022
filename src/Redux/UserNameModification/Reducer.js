import * as actions from "./ActionTypes";
const initialState = [
  {
    firstName: "",
    lastName: "",
  },
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.EDIT_USER_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload.firstName,
      };
    case actions.EDIT_USER_FAMILYNAME:
      return {
        ...state,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
}

export default reducer;
