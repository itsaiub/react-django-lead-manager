import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  leads: leadsReducer,
  errors: errorsReducer
});

export default rootReducer;
