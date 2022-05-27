import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { mockedAuthorsList } from "../../constants";
import { pipeDuration } from "../../helpers/pipeDuration";
import "./CreateCourse.css";

export default function CreateCourse({ setCourses }) {
  const navigate = useNavigate();
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
  const [courseAuthorsList, setCourseAuthorsList] = useState([]);
  const [duration, setDuration] = useState("");

  function addAuthorToCourse(authorId) {
    const author = authorsList.find((author) => authorId === author.id);
    setCourseAuthorsList((prev) => [...prev, author]);
    setAuthorsList((prev) => prev.filter((author) => authorId !== author.id));
  }

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
    navigate("/courses");
    setCourses((prev) => [...prev, newCourse]);
  }
  function addAuthor(event) {
    event.preventDefault();
    const form = event.target;
    const newAuthor = {
      name: form.authorName.value.trim(),
      id: String(Date.now() * Math.random()),
    };
    setAuthorsList((prev) => [...prev, newAuthor]);
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
    <div className="create-curse-wrap">
      <form onSubmit={handleSubmit}>
        <Input 
        className="title-input"
        name="title" placeholderText="Enter title" labelText="Title" />
        <Button buttonText="Create course" />
        <label className="label-textarea">
          Description
          <textarea
            className="text-description"
            name="description"
            placeholder="Enter descriprion"
            minLength="2"
          ></textarea>
        </label>
      </form>
      <div>
        <form onSubmit={addAuthor}>
          <h2>Add Author</h2>
          <Input
            name="authorName"
            placeholderText="Enter author name..."
            labelText="Author name"
            minLength="2"
          />
          <Button buttonText="Create author" />
        </form>
        <div className="authors-list-wrap">
          <h2>Authors</h2>
          {authorsList.map((author) => (
            <div className="authors-list" key={author.id}>
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
    </div>
  );
}
