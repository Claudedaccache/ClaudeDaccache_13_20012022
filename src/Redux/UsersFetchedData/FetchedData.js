import axios from "axios";
import {
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersFailure,
} from "./UserAction";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(FetchUsersRequest)
    axios
      .fetch("")
      .then((response) => {
        const users = response.data
        dispatch(FetchUsersSuccess(users))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(FetchUsersFailure(errorMsg))

      });
  };
};
