import { mockedAuthorsList, mockedCoursesList } from "../../constants"
import CourseCard from "./components/CourseCard/CourseCard"

export default function Courses() {
    return (
        <div>
            <div></div>
            <div>{mockedCoursesList.map(course => <CourseCard key={course.id} course={course}/>)}</div>
            
        </div>
    )
}
