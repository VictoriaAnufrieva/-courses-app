import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchAuthors, fetchCourses } from "./services";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import CourseForm from "./components/CourseForm/CourseForm";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { mockedCoursesList } from "./constants";
import { setAuthors } from "./store/authors/actionCreators";
import { setCourses } from "./store/courses/actionCreators";
import { coursesSelector } from "./store/courses/selectors";
import { fetchAllCourses } from "./store/courses/thunk";
import { fetchAllAuthors } from "./store/authors/thunk";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const courses = useSelector(coursesSelector);
  // const [courses, setCourses] = useState(mockedCoursesList);
  useEffect(() => {
    dispatch(fetchAllCourses());
    dispatch(fetchAllAuthors());
    // fetchAuthors().then((data) => {
    //   dispatch(setAuthors(data.result));
    // });
  }, []);

  // const [isShownCreateCourse, setIsShownCreateCourse] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/courses/add"
          element={
            <PrivateRoute>
              <CourseForm />
            </PrivateRoute>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="/courses/update/:courseId" element={
            <PrivateRoute>
              <CourseForm />
            </PrivateRoute>
          }
          />
      </Routes>
      {/* {!isShownCreateCourse ? (
        <Courses
          setIsShownCreateCourse={setIsShownCreateCourse}
          courses={courses}
        />
      ) : (
        <CreateCourse
          setIsShownCreateCourse={setIsShownCreateCourse}
          setCourses={setCourses}
        />
      )} */}
    </BrowserRouter>
  );
}

export default App;
