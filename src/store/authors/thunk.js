import { fetchAddAuthor, fetchAuthors } from "../../services";
import { addAuthor, setAuthors } from "./actionCreators";

export function fetchAllAuthors() {
  return (dispatch) => {
    fetchAuthors().then((data) => {
      dispatch(setAuthors(data.result));
    });
  };
}

export function fetchCreateAuthor(authorData) {
  return (dispatch) => {
    fetchAddAuthor(authorData).then((data) => {
      dispatch(addAuthor(data.result));
    });
  };
}

