import Button from "../../../../common/Button/Button";
import { formatDate } from "../../../../helpers/formatDate";
import { pipeDuration } from "../../../../helpers/pipeDuration";

export default function CourseCard({course}) {
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
                        <dd></dd>
                    </div>
                    <div>
                        <dt>Duration:</dt> 
                        <dd>{pipeDuration(course.duration)}</dd>
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
