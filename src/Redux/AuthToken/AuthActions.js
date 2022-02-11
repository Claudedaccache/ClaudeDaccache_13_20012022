import * as actions from "../AuthToken/ActionTypes";

export const addAuthToken = (token) => {
  return {
    type: actions.ADD_AUTH_TOKEN,
    payload: token,
  };
};

export const removeAuthToken = (token) => {
  return {
    type: actions.REMOVE_AUTH_TOKEN,
    payload: null,
  };
};
