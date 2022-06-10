import { ADD_COURSE, SET_COURSES } from "../actionTypes";
import coursesReducer from "../reducer";

describe("Courses reducer", () => {
  test("reducer should return the initial state", () => {
    const initialState = [];
    const state = coursesReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  test("reducer should handle ADD_COURSE and returns new state", () => {
    const prevState = [];
    const newState = coursesReducer(prevState, {
      type: ADD_COURSE,
      payload: { id: 1 },
    });
    expect(newState).toEqual([{ id: 1 }]);
  });
  test("reducer should handle SET_COURSES and returns new state", () => {
    const prevState = [];
    const newState = coursesReducer(prevState, {
      type: SET_COURSES,
      payload: [{ id: 1 }, { id: 2 }],
    });
    expect(newState).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
