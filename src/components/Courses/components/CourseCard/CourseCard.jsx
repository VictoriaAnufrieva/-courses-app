import Button from "../../../../common/Button/Button";
import { formatDate } from "../../../../helpers/formatDate";
import { pipeDuration } from "../../../../helpers/pipeDuration";
import { mockedAuthorsList } from "../../../../constants.js"


export default function CourseCard({course}) {
    const authorsNames = course.authors.map(authorId => mockedAuthorsList.find(author => author.id === authorId)?.name).join(', ')
    return (
        <div>
            <div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
            </div>
            <div>
                <dl>
                    <div>
                        <dt>Authors:</dt> 
                        <dd>{authorsNames}</dd>
                    </div>
                    <div>
                        <dt>Duration:</dt> 
                        <dd>{pipeDuration(course.duration)} hours</dd>
                    </div>
                    <div>
                        <dt>Created:</dt> 
                        <dd>{formatDate(course.creationDate)}</dd>
                    </div>
                </dl>
                <Button buttonText='Show course'/>
            </div>
        </div>
    )
}
