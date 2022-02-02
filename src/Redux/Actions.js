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

export const addUserTransactionCategory = (category) => {
  return {
    type: actions.ADD_USER_TRANSACTION_CATEGORY,
    payload: {
      category,
    },
  };
};

export const addUserTransactionNote = (note) => {
  return {
    type: actions.ADD_USER_TRANSACTION_NOTE,
    payload: {
      note,
    },
  };
};
