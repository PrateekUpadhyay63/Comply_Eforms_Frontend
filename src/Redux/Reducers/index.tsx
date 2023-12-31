import Utils from "../../Utils";
// import { postSecurityCode } from "../Actions";

const { LOGIN, GetCountries, getBreadCrums, GetAgentPaymentType, GetTinTypes, GetSecurityQuestions, GetCountriesCode, GetAllIncomeCodes, GetStateByCountryId, W9PDF, postSecurutyCode,
  GetAgentCapacityHiddenForEform,
  GetAgentChapter4EntityTypeHiddenForEform,
  GetAgentChapter3EntityTypeHiddenForEform,
  GetAgentChapter4EntityTypeImportantForEform,
  GetAgentDocumentationMandatoryForEform,
  GetAgentExemptionCodeDisabledForEform,
  GetAgentIncomeCodeHiddenForEform,
  GetAgentUSVisaTypeHiddenForEform,
  GetAgentFATCAExemptionCodeHiddenForEform,
  GetAgentFATCAEntityGIINChallengeDisabledForEform,
  GetAgentSPTQuestionHiddenForEform,
  GetAgentWrittenStatementSelectionByAgentIdForEform,
  GetAgentTINTypeSelectionByIdForEform,
  GetAgentCountriesImportantForEform,
  GetChapter3Status,
  GetChapter4Statuses,
  GetLimitationBenefits,
  GetIncomeTypes,
  GetAgentIncomeTypeHiddenAllowAnoymo,
  SendOTPMail,
} = Utils.actionName


let initialState: any = [];

export const SendOTPMailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SendOTPMail:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const getCountriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GetCountries:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getCountriesCodeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GetCountriesCode:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAllIncomeCodesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GetAllIncomeCodes:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetStateByCountryIdReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetStateByCountryId:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


//PDF Reducers
export const W9PDFReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case W9PDF:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const postSecurityCodeReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case postSecurutyCode:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getSecurityQuestionsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetSecurityQuestions:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getBreadCrumsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case getBreadCrums:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


export const GetTinTypesReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetTinTypes:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentPaymentTypeReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentPaymentType:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentCapacityHiddenForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentCapacityHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentChapter4EntityTypeHiddenForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentChapter4EntityTypeHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentChapter3EntityTypeHiddenForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentChapter3EntityTypeHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentChapter4EntityTypeImportantForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentChapter4EntityTypeImportantForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentDocumentationMandatoryForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentDocumentationMandatoryForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentExemptionCodeDisabledForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentExemptionCodeDisabledForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentIncomeCodeHiddenForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentIncomeCodeHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// export const GetAgentUSVisaTypeHiddenForEformReducer = (state = initialState, action: any): any => {
//   console.log("dhskdjlwjdlsjldjksl;jkdl;sjdl;jsl;jd;lsjd;lsjkd;lsjd;lk",action.payload)
//   switch (action.type) {
//     case GetAgentUSVisaTypeHiddenForEform:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };
export const GetAgentUSVisaTypeHiddenForEformReducer = (state = initialState, action: any): any => {
  console.log("Subham",action)
  switch (action.type) {
    case GetAgentUSVisaTypeHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentFATCAExemptionCodeHiddenForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentFATCAExemptionCodeHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentFATCAEntityGIINChallengeDisabledForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentFATCAEntityGIINChallengeDisabledForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentIncomeTypeHiddenAllowAnoymoReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentIncomeTypeHiddenAllowAnoymo:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};



export const GetAgentSPTQuestionHiddenForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentSPTQuestionHiddenForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentWrittenStatementSelectionByAgentIdForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentWrittenStatementSelectionByAgentIdForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentTINTypeSelectionByIdForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentTINTypeSelectionByIdForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetAgentCountriesImportantForEformReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetAgentCountriesImportantForEform:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetChapter3StatusReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetChapter3Status:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetChapter4StatusesReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetChapter4Statuses:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetLimitationBenefitsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetLimitationBenefits:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GetIncomeTypesReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GetIncomeTypes:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
// 