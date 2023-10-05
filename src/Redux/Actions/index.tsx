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
