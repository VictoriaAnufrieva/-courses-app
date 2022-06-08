import {
  SET_COURSES,
  DELETE_COURSE,
  ADD_COURSE,
  UPDATE_COURSE,
} from "./actionTypes";
const initialState = [];

export default function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COURSES:
      return action.payload;
    case DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);
    case ADD_COURSE:
      return [...state, action.payload];
    case UPDATE_COURSE:
      const courseIndex = state.findIndex(
        (course) => course.id === action.payload.id
      );
      const newState = [...state];
      newState[courseIndex] = action.payload;
      return newState;
    default:
      return state;
  }
}
