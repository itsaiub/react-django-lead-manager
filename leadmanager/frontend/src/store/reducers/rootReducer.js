import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
import errorsReducer from "./errorsReducer";
import messagesReducer from "./messagesReducer";

const rootReducer = combineReducers({
  leads: leadsReducer,
  errors: errorsReducer,
  messages: messagesReducer
});

export default rootReducer;
