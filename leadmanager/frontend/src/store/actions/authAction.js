import Axios from "axios";
import * as Types from "./actionTypes";
import { returnErrors } from "./messagesAction";

export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: Types.USER_LOADING
  });

  Axios.get(`/api/auth/user`, tokenConfig(getState))
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

export const loginUser = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  Axios.post(`/api/auth/login`, body, config)
    .then(res => {
      dispatch({
        type: Types.LOGIN_SUCCESS,
        payload: {
          user: res.data.user,
          token: res.data.token
        }
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: Types.LOGIN_FAILED
      });
    });
};

// Logout User

export const logoutUser = () => (dispatch, getState) => {
  Axios.post(`/api/auth/logout`, null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: Types.LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: Types.AUTH_ERROR
      });
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
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

  return config;
};
