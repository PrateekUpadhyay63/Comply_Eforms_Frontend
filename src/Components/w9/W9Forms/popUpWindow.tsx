import React, {useState} from "react";
export default function PopUp(props:any){
    const {click,setClick} =props
    return(
             <div className={click ? "abc" :"xyz"}>
          XYZ
        </div>
    )
}