import { SET_COURSES, DELETE_COURSE, ADD_COURSE, UPDATE_COURSE } from "./actionTypes";

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

export function addCourse(course){
    return {
        type: ADD_COURSE,
        payload: course,
      };
}

export function updateCourse(course){
    return{
        type: UPDATE_COURSE,
        payload: course,
    };
}