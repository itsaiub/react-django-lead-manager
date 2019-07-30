import Axios from "axios";
import { createMessage, returnErrors } from "./messagesAction";
import * as Types from "./actionTypes";

export const getLeads = () => dispatch => {
  Axios.get("/api/leads/")
    .then(res => {
      dispatch({
        type: Types.GET_LEADS,
        payload: {
          leads: res.data
        }
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteLead = id => dispatch => {
  Axios.delete(`api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: Types.DELETE_LEAD,
        payload: {
          id
        }
      });
    })
    .catch(err => console.log(err));
};

export const addLead = lead => dispatch => {
  Axios.post(`api/leads/`, lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: Types.ADD_LEAD,
        payload: {
          lead: res.data
        }
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
