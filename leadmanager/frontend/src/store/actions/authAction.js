import Axios from "axios";
import * as Types from "./actionTypes";
import { returnErrors } from "./messagesAction";

export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: Types.USER_LOADING
  });

  // get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  Axios.get(`/api/auth/user`, config)
    .then(res => {
      dispatch({
        type: Types.USER_LOADED,
        payload: {
          user: res.data
        }
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: Types.AUTH_ERROR
      });
    });
};
