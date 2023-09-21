import { combineReducers } from "redux";
// import { getMovieDataReducer, getSearchDataReducer } from "./reducer";
import { getCountriesReducer,getCountriesCodeReducer,GetAllIncomeCodesReducer,GetStateByCountryIdReducer} from "./Reducers"
import w9Reducer from "./Reducers/w9Reducer";
import w8Reducer from "./Reducers/w8BenNonUs";
let reducers={
    getCountriesReducer,
    getCountriesCodeReducer,
    GetAllIncomeCodesReducer,
    GetStateByCountryIdReducer
}
const rootReducer = combineReducers({
    ...reducers,
    w9Data:w9Reducer,
    w8Data:w8Reducer,
//   movieData: getMovieDataReducer,
//   searchData: getSearchDataReducer,
});

export default rootReducer; 