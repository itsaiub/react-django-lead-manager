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
    case Types.DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload.id)
      };
    case Types.ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload.lead]
      };
    default:
      return state;
  }
};

export default leadsReducer;
