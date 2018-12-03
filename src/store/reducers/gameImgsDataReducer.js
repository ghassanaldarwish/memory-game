import * as actionType from "../actions/actionTypes";

const initialState = {
  gameImgsData: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCT_CURRENT_GAME_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCT_CURRENT_GAME:
      return {
        ...state,
        gameImgsData: action.payload,
        loading: false
      };
    case actionType.FETCT_CURRENT_GAME_FILD:
      return {
        ...state,

        loading: false
      };
    case actionType.IMGS_URL_SUCCEED:
      return {
        ...state,
        gameImgsData: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
