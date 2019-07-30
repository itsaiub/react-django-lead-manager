import * as Types from "./actionTypes";

export const createMessage = msg => {
  return {
    type: Types.CREATE_MESSAGE,
    payload: msg
  };
};
