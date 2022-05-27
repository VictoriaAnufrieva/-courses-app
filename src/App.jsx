import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchCourses } from "./ services";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { mockedCoursesList } from "./constants";
import { setCourses } from "./store/courses/actionCreators";
import { coursesSelector } from "./store/courses/selectors";

function App() {
  const dispatch = useDispatch();
  const courses = useSelector(coursesSelector);
  // const [courses, setCourses] = useState(mockedCoursesList);
  useEffect(() => {
    fetchCourses().then((data) => {
      dispatch(setCourses(data.result));
    });
  }, []);

  // const [isShownCreateCourse, setIsShownCreateCourse] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses/add" element={<CreateCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
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
