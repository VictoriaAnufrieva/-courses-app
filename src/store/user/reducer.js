import { LOG_IN, LOG_OUT } from "./actionTypes";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token") || "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        isAuth: true,
        ...action.payload,
      };
    case LOG_OUT:
      return {
        isAuth: false,
        name: "",
        email: "",
        token: "",
      };

    default:
      return state;
  }
}
