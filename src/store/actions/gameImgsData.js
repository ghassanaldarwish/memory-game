import * as actionType from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const onImgsData = imgsData => {
  return {
    type: actionType.IMGS_URL_SUCCEED,
    payload: imgsData
  };
};
export const getCurrentGame = userId => dispatch => {
  console.log("user id", userId);
  axios.get("https://memory-game-7.herokuapp.com/game/" + userId).then(game => {
    console.log(game.data.imgsGame);
    dispatch({
      type: actionType.FETCT_CURRENT_GAME,
      payload: game.data
    });
  });
};
