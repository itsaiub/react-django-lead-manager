import * as Types from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case Types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user
      };
    case Types.AUTH_ERROR:
    case Types.LOGIN_FAILED:
    case Types.LOGOUT_SUCCESS:
    case Types.REGISTER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLoading: false
      };
    case Types.LOGIN_SUCCESS:
    case Types.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export default authReducer;
