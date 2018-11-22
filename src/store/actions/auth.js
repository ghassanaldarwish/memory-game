import * as actionType from "./actionTypes";
import axios from "axios";
import setAxiosAuth from "../../setAxiosAuthHeader";
import jwt_decode from 'jwt-decode';

export const signup = (data, history) => async dispatch => {
  dispatch(setPostLoading());
  try {
    const user = await axios.post(
      "https://memory-game-7.herokuapp.com/user/signup",
      data
    );
    if (user) {
      dispatch(clearErrors());
      history.push("/signin");
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error || null
    });
  }
};
// export const checkAuthTimeout = (expiresTime) => {
//    return dispatch => {
//        setTimeout(() => {
//            dispatch(logout())
//        }, expiresTime)
//    }
// }

export const login = (data, history) => async dispatch => {
  dispatch(setPostLoading());
  try {
    const user = await axios.post(
      "https://memory-game-7.herokuapp.com/user/login",
      data
    );
    if (user) {
      console.log(user);
      dispatch(clearErrors());
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("expirationDate", user.data.expirationDate);
      localStorage.setItem("userId", user.data.userId);
      setAxiosAuth(user.data.token);
      const tokenDecoded = jwt_decode(user.data.token)
      // dispatch(checkAuthTimeout(user.data.expirationDate))
      dispatch({
        type: actionType.LOGIN_SUCCEED,
        payload: tokenDecoded
      });
      history.push("/");
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error || null
    });
    console.log(e.response.data)
  }
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  return{
    type: actionType.LOGOUT_SUCCEED
  };

};

export const currentUser = (userData) => {
  return {
    type: actionType.LOGIN_SUCCEED,
    payload:userData
  }
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: actionType.LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};