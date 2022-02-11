import { combineReducers } from "redux";
import AuthToken from "./AuthToken/AuthReducer";
import loggedInReducer from "./isLoggedIn/isAuthReducer";
import reducer from "./UserNameModification/Reducer";

const rootReducer = combineReducers({
  userNameModification: reducer,
  authentificationToken: AuthToken,
  signInAuthentication: loggedInReducer

});
export default rootReducer;
