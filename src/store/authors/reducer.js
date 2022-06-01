import { SET_AUTHORS, ADD_AUTHOR} from "./actionTypes";

const initialState = [];

export default function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHORS:
      return action.payload;
    case ADD_AUTHOR:
      return [...state, action.payload];
    default:
      return state;
  }
}
