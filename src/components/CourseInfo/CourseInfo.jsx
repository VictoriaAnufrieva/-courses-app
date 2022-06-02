import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../common/Button/Button.jsx";
import { mockedAuthorsList } from "../../constants.js";
import { formatDate } from "../../helpers/formatDate";
import { pipeDuration } from "../../helpers/pipeDuration";
import { coursesSelector } from "../../store/courses/selectors.js";

export default function CourseInfo() {
  const courses = useSelector(coursesSelector);
  const navigate = useNavigate();
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === courseId);
  if (!course) {
    return <p>Course not found</p>;
  }
  const authorsNames = course.authors
    .map(
      (authorId) =>
        mockedAuthorsList.find((author) => author.id === authorId)?.name
    )
    .join(", ");
  function goBack() {
    navigate("/courses");
  }
  return (
    <>
      <Button buttonText="Back to courses" onClick={goBack} />
      <h2>{course.title}</h2>
      <p>{course.description} </p>
      
      <div>
        <dl>
          <div>
            <dt className="bold">Authors:</dt>
            <dd>{authorsNames}</dd>
          </div>
          <div className="course-data">
            <dt className="bold">Duration:</dt>
            <dd>{pipeDuration(course.duration)} hours</dd>
          </div>
          <div className="course-data">
            <dt className="bold">Created:</dt>
            <dd>{formatDate(course.creationDate)}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
