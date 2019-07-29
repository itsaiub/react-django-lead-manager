import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";

const rootReducer = combineReducers({
  leads: leadsReducer
});

export default rootReducer;
