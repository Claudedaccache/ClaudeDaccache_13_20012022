import * as actions from "./ActionTypes";

export const editFirstName = (firstName) => {
  return {
    type: actions.EDIT_USER_FIRSTNAME,
    payload: {
      firstName,
    },
  };
};

export const editFamilyName = (lastName) => {
  return {
    type: actions.EDIT_USER_FAMILYNAME,
    payload: {
      lastName,
    },
  };
};


