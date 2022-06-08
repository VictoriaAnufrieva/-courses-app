import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { mockedAuthorsList } from "../../constants";
import { pipeDuration } from "../../helpers/pipeDuration";
import { authorsSelector } from "../../store/authors/selectors";
import { addCourse } from "../../store/courses/actionCreators";
import { addAuthor } from "../../store/authors/actionCreators";
import { fetchCreateCourse, fetchEditCourse } from "../../store/courses/thunk";
import { fetchCreateAuthor } from "../../store/authors/thunk";
import { fetchCourse } from "../../services";

export default function CourseForm() {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();

  const navigate = useNavigate();
  const authors = useSelector(authorsSelector);
  const [authorsList, setAuthorsList] = useState([]);
  const [courseAuthorsList, setCourseAuthorsList] = useState([]);
  const [duration, setDuration] = useState("");
  const dispatch = useDispatch();
  function addAuthorToCourse(authorId) {
    const author = authorsList.find((author) => authorId === author.id);
    setCourseAuthorsList((prev) => [...prev, author]);
    setAuthorsList((prev) => prev.filter((author) => authorId !== author.id));
  }
  useEffect(() => {
    if (course.id) {
      setDuration(course.duration);
      const courseAuthors = course.authors.map((authorId) => {
        return authors.find((author) => author.id === authorId);
      });
      setCourseAuthorsList(courseAuthors);
    }
  }, [course]);
  useEffect(() => {
    if (courseId) {
      fetchCourse(courseId).then((data) => {
        setCourse(data.result);
      });
    }
  }, [courseId]);
  useEffect(() => {
    if (authors.length > 0) {
      const newAuthors = authors.reduce((list, author) => {
        const exist = courseAuthorsList.find(
          (courseAuthor) => courseAuthor.id === author.id
        );
        if (exist) {
          return list;
        } else {
          return [...list, author];
        }
      }, []);
      setAuthorsList(newAuthors);
    }
  }, [authors, courseAuthorsList]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newCourse = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      creationDate: new Date().toISOString(),
      duration: Number(duration),
      authors: courseAuthorsList.map((author) => author.id),
    };
    console.log(newCourse);

    form.reset();
    if (course.id) {
      delete newCourse.creationDate;
      dispatch(fetchEditCourse(course.id, newCourse));
    } else {
      dispatch(fetchCreateCourse(newCourse));
    }

    navigate("/courses");
    // setCourses((prev) => [...prev, newCourse]);
  }
  function addNewAuthor(event) {
    event.preventDefault();
    const form = event.target;
    const newAuthor = {
      name: form.authorName.value.trim(),
    };
    // setAuthorsList((prev) => [...prev, newAuthor]);
    dispatch(fetchCreateAuthor(newAuthor));
    form.reset();
  }
  function deleteAuthorFromList(authorId) {
    const author = courseAuthorsList.find((author) => authorId === author.id);
    setAuthorsList((prev) => [...prev, author]);
    setCourseAuthorsList((prev) =>
      prev.filter((author) => authorId !== author.id)
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholderText="Enter title"
          labelText="Title"
          defaultValue={course.title}
        />
        <label>
          Description
          <textarea
            name="description"
            placeholder="Enter descriprion"
            minLength="2"
            defaultValue={course.description}
          ></textarea>
        </label>
        <Button buttonText={`${course.id ? "Update" : "Create"} course`} />
      </form>
      <div>
        <form onSubmit={addNewAuthor}>
          <h2>Add Author</h2>
          <Input
            name="authorName"
            placeholderText="Enter author name..."
            labelText="Author name"
            minLength="2"
          />
          <Button buttonText="Create author" />
        </form>
        <div>
          <h2>Authors</h2>
          {authorsList.map((author) => (
            <div key={author.id}>
              <p>{author.name}</p>
              <Button
                buttonText="Add author"
                onClick={() => addAuthorToCourse(author.id)}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>Course authors</h2>
          {courseAuthorsList.map((author) => (
            <div key={author.id}>
              <p>{author.name}</p>
              <Button
                buttonText="Delete author"
                onClick={() => deleteAuthorFromList(author.id)}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>Duration</h2>
          <Input
            name="duration"
            placeholderText="123"
            labelText="Duration"
            type="number"
            min="0"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <p>Duration: {pipeDuration(duration)} hours</p>
        </div>
      </div>
    </>
  );
}
