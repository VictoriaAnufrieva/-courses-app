import { useState } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import './Courses.css'

export default function Courses({setIsShownCreateCourse, courses}) {
  const [searchValue, setSearchValue] = useState("");
function handleClick(){
    setIsShownCreateCourse(true)
}
  return (
    <div className='courses'>
      <div className="courses-topbar">
        <SearchBar setSearchValue={setSearchValue} />
        <Button buttonText="Add new course" onClick={handleClick}/>
      </div>
      <div className="courses-list">
        {courses
          .filter((course) =>
            `${course.title} ${course.id}`.toLowerCase().includes(searchValue)
          )
          .map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
}

