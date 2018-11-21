import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import errorsReducer from "./errorsReducer";



export default combineReducers({
  auth: authReducer,
  game:gameReducer,
  errors: errorsReducer,
});