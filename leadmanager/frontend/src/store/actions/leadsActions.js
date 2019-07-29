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
