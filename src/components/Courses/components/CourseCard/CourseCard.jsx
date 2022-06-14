import Button from "../../../../common/Button/Button";
import { formatDate } from "../../../../helpers/formatDate";
import { pipeDuration } from "../../../../helpers/pipeDuration";
import { mockedAuthorsList } from "../../../../constants.js";
import "./CourseCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../../../../store/courses/actionCreators";
import { authorsSelector } from "../../../../store/authors/selectors";
import { userSelector } from "../../../../store/user/selectors";
import { fetchRemoveCourse } from "../../../../store/courses/thunk";


export default function CourseCard({ course }) {
    const user = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector(authorsSelector);

  const authorsNames = course.authors
    .map((authorId) => authors.find((author) => author.id === authorId)?.name)
    .join(", ");
  function removeCourse() {
    dispatch(fetchRemoveCourse(course.id));
  }
  function goToCourse() {
    navigate(`/courses/${course.id}`);
  }
  function editCourse() {
    navigate(`/courses/update/${course.id}`)
      
  }
  return (
    <div className="course-card">
      <div>
        <h3>{course.title}</h3>
        <p className="course-description" data-testid="corseCardDescription">{course.description} </p>
      </div>
      <div className="wrap">
        <dl className="course-data-wrap">
          <div className="course-data">
            <dt className="bold">Authors:</dt>
            <dd data-testid="corseCardAuthorsNames" >{authorsNames}</dd>
          </div>
          <div className="course-data">
            <dt className="bold">Duration:</dt>
            <dd>{pipeDuration(course.duration)} hours</dd>
          </div>
          <div className="course-data">
            <dt className="bold">Created:</dt>
            <dd data-testid="corseCardCreatedData">{formatDate(course.creationDate)}</dd>
          </div>
        </dl>
        <Button
          className="button-course-card"
          buttonText="Show course"
          onClick={goToCourse}
        />
        {user.role === "admin" && (
          <Button buttonText="&#128465;" onClick={removeCourse} />
        )}
        {user.role === "admin" && <Button buttonText="&#9997;" onClick={editCourse} />}
      </div>
    </div>
  );
}
