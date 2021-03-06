import * as Types from "./actionTypes";

export const createMessage = msg => {
  return {
    type: Types.CREATE_MESSAGE,
    payload: msg
  };
};

export const deleteErrors = msg => {
  return {
    type: Types.DELETE_ERRORS,
    payload: msg
  };
};

export const returnErrors = (msg, status) => {
  return {
    type: Types.GET_ERRORS,
    payload: {
      msg,
      status
    }
  };
};
