import { AnyAction } from "redux";
import Utils from "../../Utils";

export const W9_state  =(value:any,callback:any=false):any=>{
    return {
        type: Utils.actionName.CREATE_W9,
        payload:value
     }
     if(callback){
        callback()
     }
}

export const loginAction = (value:any,callback:Function):any => {
    return (dispatch:any) => {
      const dataToSend = { message: value };
      Utils.api.postApiCall(
        `${ Utils.EndPoint.login}`,  
        value,
        (responseData) => {
          console.log(responseData)
          if(responseData.status ==200){
            localStorage.setItem('accessToken',responseData.data.token.accessToken)
            localStorage.setItem('userDetails',JSON.stringify(responseData.data))
            Utils.showAlert(1, "Logged in Succesfully");
            callback();
          }
        },
        (error:any) => {
          let { data } = error;
          Utils.showAlert(2, data.error);
        }
      );
    };
  };