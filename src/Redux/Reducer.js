import * as actions from "./ActionTypes";
const initialState = [
  {
    id:0,
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    id:1,
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
  {
    id:2,
    firstName: "ffggg",
    lastName: "Rogers",
    email: "steve@rerogers.com",
    password: "password4ere56",
  },
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.EDIT_USER_FIRSTNAME:
     return{
       ...state, 
       firstName: action.payload.firstName
     }
     case actions.EDIT_USER_FAMILYNAME:
      return{
        ...state, 
        lastName: action.payload.lastName
      }
      case actions.ADD_USER_TRANSACTION_CATEGORY:
        return{
          ...state, 
          lastName: action.payload.category
        }
        case actions.ADD_USER_TRANSACTION_NOTE:
          return{
            ...state, 
            lastName: action.payload.note
          }



    default:
      return state;
  }
}


export default reducer;
