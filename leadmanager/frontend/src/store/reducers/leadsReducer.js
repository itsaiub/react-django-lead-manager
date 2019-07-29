import * as Types from "../actions/actionTypes";

const initialState = {
  leads: []
};

const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_LEADS:
      return {
        ...state,
        leads: action.payload.leads
      };
    default:
      return {
        ...state
      };
  }
};

export default leadsReducer;
