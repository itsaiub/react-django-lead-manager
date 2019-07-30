import * as Types from "../actions/actionTypes";

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default messagesReducer;
