import * as actionType from "../actions/actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCT_CURRENT_GAME:
      return [action.payload];
    default:
      return state;
  }
}
