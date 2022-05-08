import { useState } from "react";
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Courses({setIsShownCreateCourse, courses}) {
  const [searchValue, setSearchValue] = useState("");
function handleClick(){
    setIsShownCreateCourse(true)
}
  return (
    <div>
      <div>
        <SearchBar setSearchValue={setSearchValue} />
        <Button buttonText="Add new course" onClick={handleClick}/>
      </div>
      <div>
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

