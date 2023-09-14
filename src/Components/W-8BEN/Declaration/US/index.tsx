import React from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Factors(){
    return(
        <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>

<div style={{padding:"20px"}}>
<Paper style={{padding:"18px"}}>
        <div style={{ margin: "10px" }}>
          <Typography
            align="left"
            style={{ marginTop: "10px", fontSize: "38px" }}
          >
            U.S. Source Income and Determining Factors 
            
            <Info style={{ color: "#ffc107", fontSize: "19px",verticalAlign:'super' }} />{" "}
          </Typography>
       
          <Paper className="paper" elevation={3} style={{backgroundColor:"#e8e1e1",marginTop:"10px"}}>
         
            <div style={{padding:"20px"}}>
              <Typography
                align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}
              >
                Please select income type <span style={{ color: "red",fontSize:"30px" }}>*</span>
                <Info style={{ color: "#ffc107", fontSize: "19px",verticalAlign:"super" }} />
              </Typography>
              <FormControl className="w-100">
                <select
                className="col-md-6 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "50px",
                    marginBottom:"20px"
                  }}
                  name="interestDividendPaymentId"
                  id="Income"
                  
                >
                  <option value={0}>-Select-</option>
                  <option value={1}>Other</option>
                  <option value={2}>Goods</option>
                  <option value={3}>Services</option>
                </select>
              </FormControl>

           {/* step1    <Typography align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}>
              Please provide an explanation
              <span style={{ color: "red",fontSize:"30px" }}>*</span>
              </Typography>
              <FormControl className="w-100">
                <input
                className="col-md-6 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "10rem",
                  }}
                  
                  
                />
              </FormControl>
              <Typography align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}>
              Allocation %  <span style={{ color: "red",fontSize:"30px" }}>*</span>
              </Typography>
              <FormControl className="w-50">
                <input
                className="col-md-6 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "3rem",
                  }}
                  
                  
                />
              </FormControl>  */}

              <Typography align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}>
              Select where goods are used <span style={{ color: "red",fontSize:"30px" }}>*</span>
              </Typography>
              <FormControl className="w-100">
                <select
                className="col-md-6 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "50px",
                    marginBottom:"20px"
                  }}
                  name="interestDividendPaymentId"
                  id="Income"
                  
                >
                  <option value={0}>-Select-</option>
                 
                </select>
              </FormControl>

              <Typography align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}>
              Allocation %  <span style={{ color: "red",fontSize:"30px" }}>*</span>
              </Typography>
              <FormControl className="w-50">
                <input
                className="col-md-6 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "3rem",
                  }}
                  
                  
                />
              </FormControl> 
              
            </div>
            </Paper>
        <div style={{marginTop:"20px",display:"flex"}}>
            <Button variant="contained" size="large" style={{backgroundColor:"black",color:"white"}}>
                Add Income Type
            </Button>
            <Typography style={{fontWeight:"bold",marginTop:"10px",marginLeft:"10px"}}>
                Total Allocation: 22%
            </Typography>
        </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <Button variant="contained" style={{ color: "white" }}>
            SAVE & EXIT
          </Button>
          <Button variant="contained" style={{ color: "white",marginLeft: "15px" }}>
            View form
          </Button>
          <Button
            
            variant="contained"
            style={{ color: "white", marginLeft: "15px" }}
          >
            Continue
          </Button>
        </div>
        <Typography
          align="center"
          style={{
            color: "#adadac",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          Do you want to go back?
        </Typography>
        <Typography align="center">
        <Button variant="contained" size="large"  style={{ color: "white", backgroundColor: "black", marginTop: "10px" ,marginBottom:'20px'}}>
         <span style={{marginRight:"5px"}}> <ArrowBackIcon/></span> Back
        </Button>
        </Typography>
      </Paper>
    </div>

</section>
       
    )
}
