export function fetchCourses() {
  return fetch("http://localhost:4000/courses/all")
    .then((res) => res.json())
    .then((data) => {
       return data;
      
    })
    .catch((error) => console.log(error));
}
