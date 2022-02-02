import * as actions from "../UsersFetchedData/UserActionTypes"

export const FetchUsersRequest = () =>{
  return{
    type : actions.FETCH_USERS_REQUEST
  }
}

export const FetchUsersSuccess = (users) =>{
  return{
    type : actions.FETCH_USERS_SUCCESS, 
    payload: users,
  }
}

export const FetchUsersFailure = (error) =>{
  return{
    type : actions.FETCH_USERS_FAILURE,
    payload: error
  }
}

