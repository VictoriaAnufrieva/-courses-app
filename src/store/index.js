import { applyMiddleware, combineReducers, createStore } from "redux";
import coursesReducer from "./courses/reducer";
import authorsReducer from "./authors/reducer";
import userReducer from "./user/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
