import * as actionType from "./actionTypes";
import axios from "axios";
import setAxiosAuth from "../../setAxiosAuthHeader";
import jwt_decode from "jwt-decode";
import * as actions from "./index";

export const signup = (dataUser, history) => async dispatch => {
  try {
    dispatch(setAuthLoading());
    const user = await axios.post(
      "https://memory-game-7.herokuapp.com/user/signup",
      // "http://localhost:5000/user/signup",
      dataUser
    );
    if (user) {
      history.push("/startGame");
      console.log("Hallo token", user.data);
      dispatch(clearErrors());
      history.push("/startGame");
      localStorage.setItem("tokenMemory", user.data);
      setAxiosAuth(user.data);
      const tokenDecoded = jwt_decode(user.data);
      actions.getCurrentGame(tokenDecoded.id);

      dispatch({
        type: actionType.LOGIN_SUCCEED,
        payload: tokenDecoded
      });
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response ? e.response.data.error : null
    });
  }
};

export const login = (data, history) => async dispatch => {
  try {
    dispatch(setAuthLoading());
    const user = await axios.post(
      "https://memory-game-7.herokuapp.com/user/login",
      data
    );
    if (user) {
      console.log(user);
      dispatch(clearErrors());
      localStorage.setItem("tokenMemory", user.data.token);
      localStorage.setItem("expirationDate", user.data.expirationDate);
      localStorage.setItem("userId", user.data.userId);
      setAxiosAuth(user.data.token);
      const tokenDecoded = jwt_decode(user.data.token);
      actions.getCurrentGame(tokenDecoded.id);
      dispatch({
        type: actionType.LOGIN_SUCCEED,
        payload: tokenDecoded
      });
      history.push("/startGame");
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data ? e.response.data.error : null
    });
  }
};
export const logout = () => {
  localStorage.removeItem("tokenMemory");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  return {
    type: actionType.LOGOUT_SUCCEED
  };
};

export const currentUser = userData => {
  return {
    type: actionType.LOGIN_SUCCEED,
    payload: userData
  };
};

// Set loading state
export const setAuthLoading = () => {
  return {
    type: actionType.AUTH_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};
