import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import errorsReducer from "./errorsReducer";
import gameImgsDataReducer from './gameImgsDataReducer'



export default combineReducers({
  auth: authReducer,
  game:gameReducer,
  errors: errorsReducer,
  gameImgsData:gameImgsDataReducer
});