import * as actionType from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";


export const onImgsData = imgsData => {
    return {
      type: actionType.IMGS_URL_SUCCEED,
      payload: imgsData
    };
  };