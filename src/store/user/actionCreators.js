import { LOG_IN, LOG_OUT, SET_USER_DATA } from "./actionTypes";

export function logIn(token) {
  return {
    type: LOG_IN,
    payload: token,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}
