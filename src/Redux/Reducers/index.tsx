import Utils from "../../Utils";

const {LOGIN,GetCountries,GetCountriesCode,GetAllIncomeCodes,GetStateByCountryId,W9PDF}= Utils.actionName


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
