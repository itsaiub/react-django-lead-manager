import * as Types from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.Types) {
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
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLoading: false
      };
    default:
      return state;
  }
};

export default authReducer;
