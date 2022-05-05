import { useState } from "react";
import Button from "../../common/Button/Button";
import { mockedAuthorsList, mockedCoursesList } from "../../constants";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Courses() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div>
        <SearchBar setSearchValue={setSearchValue} />
    
      </div>
      <div>
        {mockedCoursesList
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
const test = [
  { name: "Java", id: 1 },
  { name: "JavaScript", id: 2 },
  { name: "Pyton", id: 3 },
];
const value = "3";
test.filter((el) => `${el.name} ${el.id}`.toLowerCase().includes(value));
