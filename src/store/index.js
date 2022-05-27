import { combineReducers, createStore } from "redux";
import coursesReducer from "./courses/reducer";


const rootReducer = combineReducers({
    courses: coursesReducer,
});

export const store = createStore(rootReducer);
