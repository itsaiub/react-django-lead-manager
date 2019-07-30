import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
import errorsReducer from "./errorsReducer";
import messagesReducer from "./messagesReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  leads: leadsReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  auth: authReducer
});

export default rootReducer;
