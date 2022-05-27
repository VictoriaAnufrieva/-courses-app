import { SET_COURSES, DELETE_COURSE } from "./actionTypes";

export function setCourses(courses) {
  return {
    type: SET_COURSES,
    payload: courses,
  };
}

export function deleteCourse(courseId) {
    return {
      type: DELETE_COURSE,
      payload: courseId,
    };
  }