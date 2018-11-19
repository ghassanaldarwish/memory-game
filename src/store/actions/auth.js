import * as actionType from "./actionTypes";
import axios from "axios";
import setAxiosAuth from "../../setAxiosAuthHeader";

export const signup = (data, history) => async dispatch => {
  dispatch(setPostLoading());
  try {
    const user = await axios.post(
      "https://memory-game-7.herokuapp.com/user/signup",
      data
    );
    if (user) {
      dispatch(clearErrors());
      history.push("/login");
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
      // dispatch(checkAuthTimeout(user.data.expirationDate))
      dispatch({
        type: actionType.LOGIN_SUCCEED
      });
      history.push("/");
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error
    });
  }
};
export const logout = () => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  dispatch({
    type: actionType.LOGOUT_SUCCEED
  });
};

export const currentUser = () => {
  return {
    type: actionType.CURRENT_USER,
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token")
  };
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