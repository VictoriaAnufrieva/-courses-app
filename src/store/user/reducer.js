import { LOG_IN, LOG_OUT, SET_USER_DATA } from "./actionTypes";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token") || "",
  role: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        isAuth: true,
        token: action.payload,
      };
    case LOG_OUT:
      return {
        isAuth: false,
        name: "",
        email: "",
        token: "",
        role: "",
      };

    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
