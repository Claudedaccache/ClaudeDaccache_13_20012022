import { combineReducers } from "redux";
import reducer from "./Reducer";
import UsersReducer from "./UsersFetchedData/UserReducer";

const rootReducer = combineReducers({
  user: UsersReducer,
  testing: reducer,
});
export default rootReducer;
