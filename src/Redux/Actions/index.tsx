import { AnyAction } from "redux";
import Utils from "../../Utils";

export const W9_state = (value: any, callback: any = false): any => {
  return {
    type: Utils.actionName.CREATE_W9,
    payload: value,
  };
  if (callback) {
    callback();
  }
};

export const W8_state = (value: any, callback: any = false): any => {
  return {
    type: Utils.actionName.CREATE_W8,
    payload: value,
  };
  if (callback) {
    callback();
  }
};

export const W8_state_ECI = (value: any, callback: any = false): any => {
  return {
    type: Utils.actionName.CREATE_W8_ECI,
    payload: value,
  };
  if (callback) {
    callback();
  }
};

export const CREATE_8233 = (value: any, callback: any = false): any => {
  return {
    type: Utils.actionName.CREATE_8233,
    payload: value,
  };
  if (callback) {
    callback();
  }
};

export const loginAction = (value: any, callback: Function): any => {
  return (dispatch: any) => {
    const dataToSend = { message: value };
    Utils.api.postApiCall(
      `${Utils.EndPoint.login}`,
      value,
      (responseData) => {
        console.log(responseData);
        if (responseData.status == 200) {
          localStorage.setItem(
            "accessToken",
            responseData.data.token.accessToken
          );
          localStorage.setItem(
            "userDetails",
            JSON.stringify(responseData.data)
          );
          callback();
        }
      },
      (error: any) => {
        let { data } = error;
      }
    );
  };
};



export const postSecurityCode = (callback: Function): any => {
  return (dispatch: any) => {
    Utils.api.postApiCall(
      Utils.EndPoint.postSecurutyCode,
      "",
      (responseData) => {
     
        if (responseData) {

          if (responseData.status === 200) {
            dispatch({
              type: Utils.actionName.postSecurutyCode,
              payload: {
                postSecurutyCodeData: responseData.data,
              },
            });
          } else if (responseData.status == 500) {
            console.log("error");
          } else {
            if (callback) {
              callback();
            }
          }
        }
      },
      (error) => {
      }
    );
  };
};
export const postOnboarding = (value: any, callback: Function): any => {
  return (dispatch: any) => {
    Utils.api.postApiCall(
      Utils.EndPoint.individualAccountHolder,
      value,
      (responseData) => {
        let { data } = responseData;
        console.log(data, "dataaa");
        dispatch({
          type: Utils.actionName.individualAccountHolder,
          payload: { data: data.data },
        });
        if (responseData) {
          if (responseData.status == 500) {
            console.log("error");
          } else {
            if (callback) {
              callback();
            }
          }
        }
      },
      (error) => {
      }
    );
  };
};

export const getBreadCrums = (FormId:Number,callback:Function): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.getBreadCrums,
      `?FormId=${FormId}`,
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.getBreadCrums,
            payload: {
              getBreadCrumsData: resData.data,
            },
          });
          if(callback){
            callback(resData.data);
          }
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};


export const GetAgentPaymentType = (agentId:Number,callback:Function): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentPaymentType,
      `?agentId=${agentId}`,
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentPaymentType,
            payload: {
              GetAgentPaymentTypeData: resData.data,
            },
          });
          if(callback){
            callback(resData.data);
          }
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const getTinTypes = (agentId:Number,callback:Function): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetTinTypes,
      `?agentId=${agentId}`,
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetTinTypes,
            payload: {
              GetTinTypesData: resData.data,
            },
          });
          if(callback){
            callback(resData.data);
          }
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};
export const getAllCountries = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetCountries,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetCountries,
            payload: {
              allCountriesData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const getSecurityQuestions = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetSecurityQuestions,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetSecurityQuestions,
            payload: {
              getSecurityQuestionsData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};



export const getAllCountriesCode = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetCountriesCode,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetCountriesCode,
            payload: {
              allCountriesCodeData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const getAllCountriesIncomeCode = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAllIncomeCodes,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAllIncomeCodes,
            payload: {
              allCountriesIncomeCodeData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const getAllStateByCountryId = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetStateByCountryId,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetStateByCountryId,
            payload: {
              allCountriesStateIdData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

//PDF API's

export const getW9PDF = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.W9PDF,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.W9PDF,
            payload: {
              W9PdfData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};


export const postFormSelection = (value: any, callback: Function): any => {
  return (dispatch: any) => {
    Utils.api.postApiCall(
      Utils.EndPoint.PostFormSelection,
      value,
      (responseData) => {
        let { data } = responseData;
        dispatch({
          type: Utils.actionName.PostFormSelection,
          payload: { data: data.data },
        });
        if (responseData) {
          if (responseData.status == 500) {
            console.log("error");
          } else {
            if (callback) {
              callback();
            }
          }
        }
      },
      (error) => {
      }
    );
  };
};


////

export const GetAgentCapacityHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentCapacityHiddenForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentCapacityHiddenForEform,
            payload: {
              GetAgentCapacityHiddenForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentChapter4EntityTypeHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentChapter4EntityTypeHiddenForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentChapter4EntityTypeHiddenForEform,
            payload: {
              GetAgentChapter4EntityTypeHiddenForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentChapter3EntityTypeHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentChapter3EntityTypeHiddenForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentChapter3EntityTypeHiddenForEform,
            payload: {
              GetAgentChapter3EntityTypeHiddenForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentChapter4EntityTypeImportantForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentChapter4EntityTypeImportantForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentChapter4EntityTypeImportantForEform,
            payload: {
              GetAgentChapter4EntityTypeImportantForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentDocumentationMandatoryForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentDocumentationMandatoryForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentDocumentationMandatoryForEform,
            payload: {
              GetAgentDocumentationMandatoryForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentExemptionCodeDisabledForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentExemptionCodeDisabledForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentExemptionCodeDisabledForEform,
            payload: {
              GetAgentExemptionCodeDisabledForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentIncomeCodeHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentIncomeCodeHiddenForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentIncomeCodeHiddenForEform,
            payload: {
              GetAgentIncomeCodeHiddenForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

// export const GetAgentUSVisaTypeHiddenForEformAction = (): any => {
//   return (dispatch: any) => {
//     Utils.api.getApiCall(
//       Utils.EndPoint.GetAgentUSVisaTypeHiddenForEform,
//       "",
//       (resData) => {
//         const { data } = resData;
//         if (resData.status === 200) {
          
//           dispatch({
//             type: Utils.actionName.GetAgentUSVisaTypeHiddenForEform,
//             payload: {
//               GetAgentUSVisaTypeHiddenForEformData: resData.data,
//             },
//           });
//         } else {
//         }
//       },
//       (error: any) => {
        
//       }
//     );
//   };
// };


export const GetAgentUSVisaTypeHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentUSVisaTypeHiddenForEform,
      `?agentId=3`,
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentUSVisaTypeHiddenForEform,
            payload: {
              GetAgentUSVisaTypeHiddenForEform: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentFATCAExemptionCodeHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentFATCAExemptionCodeHiddenForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentFATCAExemptionCodeHiddenForEform,
            payload: {
              GetAgentFATCAExemptionCodeHiddenForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentFATCAEntityGIINChallengeDisabledForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentFATCAEntityGIINChallengeDisabledForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentFATCAEntityGIINChallengeDisabledForEform,
            payload: {
              GetAgentFATCAEntityGIINChallengeDisabledForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentSPTQuestionHiddenForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentSPTQuestionHiddenForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentSPTQuestionHiddenForEform,
            payload: {
              GetAgentSPTQuestionHiddenForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};
export const GetAgentWrittenStatementSelectionByAgentIdForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentWrittenStatementSelectionByAgentIdForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentWrittenStatementSelectionByAgentIdForEform,
            payload: {
              GetAgentWrittenStatementSelectionByAgentIdForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};


export const GetAgentTINTypeSelectionByIdForEformAction = (): any => {
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentTINTypeSelectionByIdForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentTINTypeSelectionByIdForEform,
            payload: {
              GetAgentTINTypeSelectionByIdForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
};

export const GetAgentCountriesImportantForEform = ():any =>{
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetAgentCountriesImportantForEform,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetAgentCountriesImportantForEform,
            payload: {
              GetAgentCountriesImportantForEformData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
}

export const GetChapter3Status = ():any =>{
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetChapter3Status,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetChapter3Status,
            payload: {
              GetChapter3StatusData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
}

export const GetChapter4Statuses = ():any =>{
  return (dispatch: any) => {
    Utils.api.getApiCall(
      Utils.EndPoint.GetChapter4Statuses,
      "",
      (resData) => {
        const { data } = resData;
        if (resData.status === 200) {
          dispatch({
            type: Utils.actionName.GetChapter4Statuses,
            payload: {
              GetChapter4StatusesData: resData.data,
            },
          });
        } else {
        }
      },
      (error: any) => {
      }
    );
  };
}