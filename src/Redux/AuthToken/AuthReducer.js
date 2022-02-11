import * as actions from "../AuthToken/ActionTypes";

const initialState = {
  token: null,
};

const AuthToken = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actions.REMOVE_AUTH_TOKEN:
      return { ...state, token: "" };

    default:
      return state;
  }
};

export default AuthToken;
