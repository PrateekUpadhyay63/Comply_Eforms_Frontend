import Utils from "../../Utils";
// import { postSecurityCode } from "../Actions";

const {LOGIN,GetCountries,getBreadCrums,GetTinTypes,GetSecurityQuestions,GetCountriesCode,GetAllIncomeCodes,GetStateByCountryId,W9PDF,postSecurutyCode}= Utils.actionName


  let initialState:any = [];

  

  export const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, ...action.payload };
      default:
        return state;
    }
}

export const getCountriesReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GetCountries:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getCountriesCodeReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GetCountriesCode:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAllIncomeCodesReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GetAllIncomeCodes:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetStateByCountryIdReducer = (state = initialState, action:any):any => {
  switch (action.type) {
    case GetStateByCountryId:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


//PDF Reducers
export const W9PDFReducer = (state = initialState, action:any):any => {
  switch (action.type) {
    case W9PDF:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const postSecurityCodeReducer= (state = initialState, action:any):any => {
  switch (action.type) {
    case postSecurutyCode:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getSecurityQuestionsReducer= (state = initialState, action:any):any => {
  switch (action.type) {
    case GetSecurityQuestions:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getBreadCrumsReducer= (state = initialState, action:any):any => {
  switch (action.type) {
    case getBreadCrums:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


export const GetTinTypesReducer= (state = initialState, action:any):any => {
  switch (action.type) {
    case GetTinTypes:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};



