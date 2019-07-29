import Axios from "axios";
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
    .catch(err => console.log(err));
};

export const deleteLead = id => dispatch => {
  Axios.delete(`api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: Types.DELETE_LEAD,
        payload: {
          id
        }
      });
    })
    .catch(err => console.log(err));
};
