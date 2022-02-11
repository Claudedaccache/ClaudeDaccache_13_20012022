import * as actions from "./ActionTypes";

export const userIsLoggedIn = (auth) => {
  return {
    type: actions.USER_LOGIN,
    payload: auth,

  };
};

export const userIsLoggedOut = () => {
  return {
    type: actions.USER_LOGOUT,
    payload: false
  };
};
