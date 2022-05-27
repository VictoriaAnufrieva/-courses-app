import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import { coursesSelector } from "../../store/courses/selectors";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import './Courses.css'


export default function Courses() {
  const courses = useSelector(coursesSelector)
const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("");
function handleClick(){
  navigate("/courses/add")
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

