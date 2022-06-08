export function fetchCourses() {
  return fetch("http://localhost:4000/courses/all", {
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchCourse(courseId) {
   return fetch(`http://localhost:4000/courses/${courseId}`, {
     headers: { Authorization: localStorage.getItem("token") },
   })
     .then((res) => res.json())
     .then((data) => {
       return data;
     })
     .catch((error) => console.log(error));
 }
 

export function fetchAuthors() {
  return fetch("http://localhost:4000/authors/all", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchLogIn(userData) {
  return fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchAddCourse(courseData) {
  return fetch("http://localhost:4000/courses/add", {
    method: "POST",
    body: JSON.stringify(courseData),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchAddAuthor(authorData) {
  return fetch("http://localhost:4000/authors/add", {
    method: "POST",
    body: JSON.stringify(authorData),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchUpdateCourse(courseId, updateData) {
  return fetch(`http://localhost:4000/courses/${courseId}`, {
    method: "PUT",
    body: JSON.stringify(updateData),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchUserData() {
  return fetch("http://localhost:4000/users/me", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchDeleteCourse(courseId) {
  return fetch(`http://localhost:4000/courses/${courseId}`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export function fetchLogOut() {
  return fetch("http://localhost:4000/logout", {
    method: "DELETE",
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}
