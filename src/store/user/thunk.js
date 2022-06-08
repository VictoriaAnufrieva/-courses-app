import { fetchLogIn, fetchLogOut, fetchUserData } from "../../services";
import { logIn, logOut, setUserData } from "./actionCreators";

export function fetchSignIn(userData) {
  return (dispatch) => {
    fetchLogIn(userData).then((data) => {
      dispatch(logIn(data.result));
    });
  };
}

export function fetchSignOut() {
  return (dispatch) => {
    fetchLogOut().then(() => {
      dispatch(logOut());
    });
  };
}

export function fetchSetUserData() {
  return (dispatch) => {
    fetchUserData().then((data) => {
      dispatch(setUserData(data.result));
    });
  };
}
