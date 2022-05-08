import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import { mockedCoursesList } from "./constants";


function App() {
  const [courses, setCourses] = useState(mockedCoursesList)
  const [isShownCreateCourse, setIsShownCreateCourse] = useState(false);
  return (
    <>
      <Header />
      {!isShownCreateCourse ? <Courses setIsShownCreateCourse={setIsShownCreateCourse} courses={courses} /> : <CreateCourse setIsShownCreateCourse={setIsShownCreateCourse} setCourses={setCourses}/>}
    </>
  );
}

export default App;
