import { apiErrorCode, $axios } from './constants';
import Utils from '.';

export const removeSession = () => {
  Utils.showAlert(2, 'Session Expired');
  sessionStorage.clear();
  localStorage.clear();
  window.location.reload();
};

export const checkUserValidation = (data: any) => {
  if (data && data.statusCode) {
    const { statusCode: stc } = data;
    return (
      stc === apiErrorCode.sessionExpired ||
      stc === apiErrorCode.unauthorized ||
      stc === apiErrorCode.accessDenied
    );
  }
  return false;
};

const getApiCall = (
  endPoint: string,
  params: string,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .get(endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err?.response?.data?.statusCode === 401) {
        removeSession();

        errorCallback(err.response.data);
      }
      if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (checkUserValidation(err.response?.data)) {
        removeSession();
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const postApiCall = (
  endPoint: string,
  params: { [key: string]: any },
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .post(endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (checkUserValidation(err.response?.data)) {
        removeSession();
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const putApiCall = (
  endPoint: string,
  params: { [key: string]: any },
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .put(endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (checkUserValidation(err?.response?.data)) {
        removeSession();
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const patchApiCall = (
  endPoint: string,
  params: string,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .patch(endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (checkUserValidation(err.response.data)) {
        removeSession();
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const deleteApiCall = (
  endPoint: string,
  params: any,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .delete(endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (checkUserValidation(err.response.data)) {
        removeSession();
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.message);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const getApiCallWithoutParams = (
  endPoint: string,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .get(endPoint, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err?.response?.data.statusCode === 401) {
        removeSession();
        errorCallback(err.response.data);
      }
      if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (checkUserValidation(err.response?.data)) {
        removeSession();
      } else if (err.response && !checkUserValidation(err.response.data)) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const api = {
  getApiCall,
  postApiCall,
  putApiCall,
  patchApiCall,
  deleteApiCall,
  getApiCallWithoutParams,
};
export default api;
