import Utils from "../../Utils";

const {LOGIN,GetCountries}= Utils.actionName


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