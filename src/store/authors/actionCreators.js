import { SET_AUTHORS, ADD_AUTHOR } from "./actionTypes";

export function setAuthors(authors) {
    return {
      type: SET_AUTHORS,
     payload: authors,
    };
  }

  export function addAuthor(author) {
    return {
      type: ADD_AUTHOR,
      payload: author,
    };
  }