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
<Typography align='left' style={{ margin: '10px',fontSize:"20px" ,fontWeight:'550',marginLeft:"20px"}}>Certification  <span style={{ color: 'red' }}>*</span>
                      <InfoIcon
                        style={{ color: '#ffc107', fontSize: '13px',verticalAlign:"super" }}

                      /> </Typography>
                      <Typography style={{ margin: '10px',fontSize:"12px", color:"grey",marginLeft:"20px"}}>
                      Under penalties of perjury, I certify that:
                      </Typography>
                     
<Paper  style={{ marginLeft: '20px', width: '80%',backgroundColor:"#d2d6d3" }}>
  <div style={{margin:'10px'}}>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number

      </Typography>
    </Typography>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number

      </Typography>
    </Typography>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number

      </Typography>
    </Typography>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number

      </Typography>
    </Typography>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number

      </Typography>
    </Typography>
    <Typography style={{fontSize:'11px',color:'black',marginTop:"10px",marginBottom:"20px"}}>Please check the box below if you have been notified by the IRS that you are currently subject to backup withholding because you have failed to report all interest and dividends on your tax return. For real estate transactions, item 2 does not apply.For mortgage interest paid, acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the Certification, but you must provide your correct TIN. (Please note e-submission through this service requires an e-signature)</Typography>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number

      </Typography>
    </Typography>
    <Typography style={{display:"flex"}}>
      <Checkbox/>
      <Typography style={{fontSize:'13px',color:'black',marginTop:'11px'}}>
        The Number Show on the form is my correct taxpayer identification number
        <span style={{color:"blue",fontSize:"13px",marginLeft:"5px"}}>
          (view Electronic Form)
        </span>

      </Typography>
    </Typography>
  </div>

</Paper>
                     
   
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Button onClick={()=>{
                  setOpen2(true)
                }} variant="contained" style={{ color: "white" }}>
          SAVE & EXIT
        </Button>
        <Button 

          onClick={() => {
            setselectedContinue({step1:false,step2:false,step3:false,step4:false,step5:false,step6:false,step7:false,step8:true})
           
           

            
          }}
        variant="contained" style={{ color: "white", marginLeft: '15px' }}>
          Continue
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