import * as Types from "../actions/actionTypes";

const initialState = {
  msg: {},
  status: null
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status
      };
    case Types.DELETE_ERRORS:
      return {
        msg: {},
        status: null
      };
    default:
      return state;
  }
};

export default errorsReducer;
