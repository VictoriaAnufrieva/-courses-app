import Button from "../../../../common/Button/Button";

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
                        <dd></dd>
                    </div>
                    <div>
                        <dt>Created:</dt> 
                        <dd></dd>
                    </div>
                </dl>
                <Button buttonText='Show course'/>
            </div>
        </div>
    )
}
