import { mockedAuthorsList, mockedCoursesList } from "../../constants"
import CourseCard from "./components/CourseCard/CourseCard"
import SearchBar from "./components/SearchBar/SearchBar"

export default function Courses() {
    return (
        <div>
            <div><SearchBar/></div>
            <div>{mockedCoursesList.map(course => <CourseCard key={course.id} course={course}/>)}</div>
            
        </div>
    )
}
