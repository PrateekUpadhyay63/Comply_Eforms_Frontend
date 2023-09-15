import React from "react";
  import {Button,Tooltip,Typography} from "@mui/material"


export default function Nav() {
    return(

<div style={{width:'100%',backgroundColor:"white",height:"90px"}}>
<div style={{marginLeft:"22px",marginTop:"13px",display:"flex",justifyContent:"space-between"}}>
<img className="navbar"src={require("../../assets/img/logo.png")}/>
<div  style={{height:"40px",width:"10%",marginTop:'20px'}}>
<Tooltip style={{backgroundColor:"black",color:"white"}} title={
     <Typography >
     Are you sure you want to exit the process?
   </Typography>
   }
   >
<Button style={{borderRadius:"30px"}} variant="contained" >
    signOut
   
   
    </Button>
   </Tooltip>

</div>
</div>
        </div>
    )

}