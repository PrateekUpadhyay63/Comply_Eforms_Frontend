import React , {useState} from "react";
import {FormControl,Typography,Button, Input,Paper,Checkbox} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

export default function Penalties(props:any){
    const [open2, setOpen2] = useState(false);
    const handleClickOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [selectedContinue, setselectedContinue] = useState({step1:true,step2:false,step3:false,step4:false,step5:false,step6:false,step7:false,step8:false}); 


    return(
<Paper  style={{ marginLeft: '5px', width: '80%' }}>
<Typography align='left' style={{ margin: '10px',fontSize:"20px" ,fontWeight:'550'}}>Part II Certification<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Typography  align='left'style={{ margin: '10px',fontSize:"20px" ,fontWeight:'550'}}>W-9 Electronic Substitute Form Statement</Typography>
                      <Typography align='left' style={{ margin: '10px',fontSize:"12px", color:"grey"}}>
                      The Internal Revenue Service does not require your consent to any provisions of this document other than the certifications required to avoid backup withholding.
                      </Typography>
                      <div style={{margin:'20px',display:"flex",marginTop:"20px",justifyContent:"space-between"}}>
                       <div>
                       <Typography  style={{fontSize:"15px"}}>
                       Signed by<span style={{ color: 'red' }}>*</span>
                      <InfoIcon
                        style={{ color: '#ffc107', fontSize: '13px',verticalAlign:"super" }}

                      /> 
                       </Typography>
                       <select
                       style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '36px',
                        width: '295%'
                      }}
                      name="permanentResidentialCountryId1"
                      id="Income"
                      defaultValue={1}>
                        

                       </select>
                       </div>
                      
                       <div style={{marginRight:"150px"}} >
                       <Typography style={{fontSize:"15px"}}>
                       Enter Confirmation Code:<span style={{ color: 'red' }}>*</span>
                      <InfoIcon
                        style={{ color: '#ffc107', fontSize: '13px',verticalAlign:"super" }}

                      /> 
                       </Typography>
                        <Input
                        type='password'
                        required
                        style={{
                          width: '120%',
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',}}
                       />
                       <span style={{fontSize:"12px",color:"blue"}}>Recover Password</span>
                       </div>
                     
                      
                      </div>
                      <Typography align='left' style={{margin:'10px',marginLeft:"20px"}}>
                       <Typography  style={{fontSize:"15px"}}>
                       Date<span style={{ color: 'red' }}>*</span>
                      <InfoIcon
                        style={{ color: '#ffc107', fontSize: '13px',verticalAlign:"super" }}

                      /> 
                       </Typography>
                       <Input
                       type='date'
                        required
                        style={{
                          width: '32%',
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',}}
                       />
                       </Typography>

                       <Typography style={{display:"flex",marginLeft:"10px"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'7px'}}>
        Please "check" box to confirm your acceptance with the above declarations  <InfoIcon
                        style={{ color: '#ffc107', fontSize: '13px',verticalAlign:"super" }}

                      /> 
       

      </Typography>
    </Typography>
                     





         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Button onClick={()=>{
                  setOpen2(true)
                }} variant="contained" style={{ color: "white" }}>
          SAVE & EXIT
        </Button>
        <Button 

          onClick={() => {
           setOpen2(false)
           
           

            
          }}
        variant="contained" style={{ color: "white", marginLeft: '15px' }}>
          Submit Electronically
        </Button>
      </div>
      <Typography align="center" style={{ color: '#adadac', justifyContent: 'center', alignItems: "center", marginTop: "20px" }}>
        Do you want to go back?
      </Typography >
      <Typography align="center">
        <Button variant="contained" style={{ color: "white", backgroundColor: "black", marginTop: "10px" ,marginBottom:'20px'}}>
          Back
        </Button>
      </Typography>

</Paper>
    )
}