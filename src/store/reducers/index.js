import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";



export default combineReducers({
  auth: authReducer,
  game:gameReducer
});