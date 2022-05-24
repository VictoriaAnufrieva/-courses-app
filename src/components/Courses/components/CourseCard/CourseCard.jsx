import Button from "../../../../common/Button/Button";
import { formatDate } from "../../../../helpers/formatDate";
import { pipeDuration } from "../../../../helpers/pipeDuration";
import { mockedAuthorsList } from "../../../../constants.js"
import "./CourseCard.css"
import { useNavigate } from "react-router-dom";


export default function CourseCard({course}) {
    const navigate = useNavigate()
    const authorsNames = course.authors.map(authorId => mockedAuthorsList.find(author => author.id === authorId)?.name).join(', ')

    function goToCourse() {
        navigate(`/courses/${course.id}`)
    }
    return (
        <div className='course-card'>
            <div>
                <h3>{course.title}</h3>
                <p className='course-description'>{course.description} </p>
            </div>
            <div className='wrap'>
                <dl className='course-data-wrap'>
                    <div className="course-data">
                        <dt className="bold">Authors:</dt> 
                        <dd >{authorsNames}</dd>
                    </div>
                    <div className="course-data">
                        <dt className="bold">Duration:</dt> 
                        <dd >{pipeDuration(course.duration)} hours</dd>
                    </div>
                    <div className="course-data">
                        <dt className="bold">Created:</dt> 
                        <dd>{formatDate(course.creationDate)}</dd>
                    </div>
                </dl>
                <Button className="button-course-card" buttonText='Show course' onClick={goToCourse}/>
            </div>
        </div>
    )
}
