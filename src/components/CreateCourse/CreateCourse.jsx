import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { mockedAuthorsList } from "../../constants";
import { pipeDuration } from "../../helpers/pipeDuration";
import { authorsSelector } from "../../store/authors/selectors";
import { addCourse } from "../../store/courses/actionCreators";
import { addAuthor } from "../../store/authors/actionCreators";

export default function CreateCourse() {
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
  }, [authors]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newCourse = {
      id: String(Date.now() * Math.random()),
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      creationDate: new Date().toISOString(),
      duration: Number(duration),
      authors: courseAuthorsList.map((author) => author.id),
    };
    console.log(newCourse);

    form.reset();
    dispatch(addCourse(newCourse));
    navigate("/courses");
    // setCourses((prev) => [...prev, newCourse]);
  }
  function addNewAuthor(event) {
    event.preventDefault();
    const form = event.target;
    const newAuthor = {
      name: form.authorName.value.trim(),
      id: String(Date.now() * Math.random()),
    };
    // setAuthorsList((prev) => [...prev, newAuthor]);
    dispatch(addAuthor(newAuthor));
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
        <Input name="title" placeholderText="Enter title" labelText="Title" />
        <label>
          Description
          <textarea
            name="description"
            placeholder="Enter descriprion"
            minLength="2"
          ></textarea>
        </label>
        <Button buttonText="Create course" />
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
