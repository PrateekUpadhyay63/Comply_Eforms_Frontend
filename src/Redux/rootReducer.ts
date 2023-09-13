import { combineReducers } from "redux";
// import { getMovieDataReducer, getSearchDataReducer } from "./reducer";
import w9Reducer from "./Reducers/w9Reducer"
const rootReducer = combineReducers({
    w9Data:w9Reducer,
//   movieData: getMovieDataReducer,
//   searchData: getSearchDataReducer,
});

export default rootReducer;