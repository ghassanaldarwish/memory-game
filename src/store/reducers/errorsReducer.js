
import * as actionType from "../actions/actionTypes";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_ERRORS:
      return action.payload;
    case actionType.CLEAR_ERRORS:
      return null;
    default:
      return state;
  }
}