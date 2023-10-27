import { combineReducers } from "redux";
// import { getMovieDataReducer, getSearchDataReducer } from "./reducer";
import {
  getCountriesReducer,
  getCountriesCodeReducer,
  GetAllIncomeCodesReducer,
  GetStateByCountryIdReducer,
  W9PDFReducer,
  postSecurityCodeReducer,
  getSecurityQuestionsReducer,
  getBreadCrumsReducer,
  GetTinTypesReducer,
  GetAgentPaymentTypeReducer,
  GetAgentUSVisaTypeHiddenForEformReducer

} from "./Reducers";
import w9Reducer from "./Reducers/w9Reducer";
import w8Reducer from "./Reducers/w8BenNonUs";
import form8233Reducer from "./Reducers/form8233";
import w8ReducerECI from "./Reducers/w8ECI";

let reducers = {
  getCountriesReducer,
  getCountriesCodeReducer,
  GetAllIncomeCodesReducer,
  GetStateByCountryIdReducer,
  W9PDFReducer,
  postSecurityCodeReducer,
  getSecurityQuestionsReducer,
  getBreadCrumsReducer,
  GetTinTypesReducer,
  GetAgentPaymentTypeReducer,
  GetAgentUSVisaTypeHiddenForEformReducer,
};
const rootReducer = combineReducers({
  ...reducers,
  w9Data: w9Reducer,
  w8Data: w8Reducer,
  form8233: form8233Reducer,
  w8eciDATA: w8ReducerECI,
});

export default rootReducer;
