import * as actionType from "../actions/actionTypes";

const initialState = {
  profile: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
   
    
    default:
      return state;
  }
}