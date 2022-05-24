import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { mockedCoursesList } from "./constants";

function App() {
  const [courses, setCourses] = useState(mockedCoursesList);
  // const [isShownCreateCourse, setIsShownCreateCourse] = useState(false);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/courses/add"
          element={<CreateCourse setCourses={setCourses} />}
        />
        <Route path="/courses" element={<Courses courses={courses} />} />
        <Route
          path="/courses/:courseId"
          element={<CourseInfo courses={courses} />}
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
