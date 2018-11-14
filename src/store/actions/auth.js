import * as actionType from "./actionTypes";
import axios from "axios";

export const authFild = error => {
  return {
    type: actionType.AUTH_FILD,
    error
  };
};

export const onAuth = () => async dispatch => {
  const res = await axios.get("/api/user/current_user");

  dispatch({ type: actionType.FETCH_USER, payload: res.data });
};