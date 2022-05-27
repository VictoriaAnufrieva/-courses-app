import { SET_COURSES, DELETE_COURSE } from "./actionTypes";
const initialState = [];

export default function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COURSES:
      return action.payload;
    case DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);

    default:
      return state;
  }
}
