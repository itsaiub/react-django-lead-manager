import Axios from "axios";
import { createMessage, returnErrors, deleteErrors } from "./messagesAction";
import { tokenConfig } from "./authAction";
import * as Types from "./actionTypes";

export const getLeads = () => (dispatch, getState) => {
  Axios.get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: Types.GET_LEADS,
        payload: {
          leads: res.data
        }
      });
    })
    .catch(err => {
      dispatch({
        type: Types.GET_LEADS,
        payload: {
          leads: []
        }
      });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteLead = id => (dispatch, getState) => {
  Axios.delete(`api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(deleteErrors({}));
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: Types.DELETE_LEAD,
        payload: {
          id
        }
      });
    })
    .catch(err => {
      dispatch(createMessage({}));
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const addLead = lead => (dispatch, getState) => {
  Axios.post(`api/leads/`, lead, tokenConfig(getState))
    .then(res => {
      dispatch(deleteErrors({}));
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: Types.ADD_LEAD,
        payload: {
          lead: res.data
        }
      });
    })
    .catch(err => {
      dispatch(createMessage({}));
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
