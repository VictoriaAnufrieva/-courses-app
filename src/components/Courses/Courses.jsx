import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import { coursesSelector } from "../../store/courses/selectors";
import { userSelector } from "../../store/user/selectors";
import { fetchSetUserData } from "../../store/user/thunk";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import "./Courses.css";


export default function Courses() {
  const courses = useSelector(coursesSelector);
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(fetchSetUserData())
  }, [])
  function handleClick() {
    navigate("/courses/add");
  }
  return (
    <div className="courses">
      <div className="courses-topbar">
        <SearchBar setSearchValue={setSearchValue} />
        {user.role === "admin" && (
          <Button buttonText="Add new course" onClick={handleClick} />
        )}
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
