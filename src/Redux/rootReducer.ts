import { combineReducers } from "redux";
// import { getMovieDataReducer, getSearchDataReducer } from "./reducer";
import { getCountriesReducer} from "./Reducers"
import w9Reducer from "./Reducers/w9Reducer";
let reducers={
    getCountriesReducer,
}
const rootReducer = combineReducers({
    ...reducers,
    w9Data:w9Reducer,
//   movieData: getMovieDataReducer,
//   searchData: getSearchDataReducer,
});

export default rootReducer;