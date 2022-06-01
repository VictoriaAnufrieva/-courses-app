export function fetchCourses() {
  return fetch("http://localhost:4000/courses/all")
    .then((res) => res.json())
    .then((data) => {
       return data;
      
    })
    .catch((error) => console.log(error));
}

export function fetchAuthors() {
    return fetch("http://localhost:4000/authors/all")
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
      },
    })
      .then((res) => res.json())
      .then((data) => {
      return data;

      })
      .catch((error) => console.log(error));
 }
