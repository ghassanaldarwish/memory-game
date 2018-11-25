import * as actionType from "../actions/actionTypes";

const initialState = {
  user: null,
  token: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.CURRENT_USER:
      return {
        ...state,
        user: action.userId,
        token: action.token
      };

    case actionType.AUTH_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.LOGIN_SUCCEED:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case actionType.LOGIN_FAILED:
      return {
        ...state,
        loading: false
      };
    case actionType.LOGOUT_SUCCEED:
      return {
        ...state,
        loading: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
}
