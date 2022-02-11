import * as actions from "./ActionTypes";

const initialState = {
  isLoggedIn: false,
};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case actions.USER_LOGOUT:
      return { ...state, isLoggedIn: false};
    default:
      return state;
  }
};

export default loggedInReducer;
