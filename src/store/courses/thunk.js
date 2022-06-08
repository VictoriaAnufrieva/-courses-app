import {fetchAddCourse, fetchCourses, fetchDeleteCourse, fetchUpdateCourse } from "../../services";
import { addCourse, deleteCourse, setCourses, updateCourse } from "./actionCreators";

export function fetchAllCourses() {
  return (dispatch) => {
    fetchCourses().then((data) => {
      dispatch(setCourses(data.result));
    });
  };
}

export function fetchRemoveCourse(courseId) {
    return (dispatch) => {
        fetchDeleteCourse(courseId).then(() =>{
            dispatch(deleteCourse(courseId));
        })
    }
}

export function fetchCreateCourse(courseData) {
    return (dispatch) => {
        fetchAddCourse(courseData).then((data) => {
            dispatch(addCourse(data.result))
        })
    }
}

export function fetchEditCourse(courseId, courseData){
    return (dispatch) => {
        fetchUpdateCourse(courseId, courseData).then((data) => {
            dispatch(updateCourse(data.result))
        })
    }
}
