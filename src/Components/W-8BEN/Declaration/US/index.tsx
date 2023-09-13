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
       
          <Paper elevation={3} style={{backgroundColor:"#e8e1e1",marginTop:"10px",height:"230px"}}>
          {/* {report === "257" ? ( */}
            <div style={{padding:"20px"}}>
              <Typography
                align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}
              >
                Please select income type <span style={{ color: "red" }}>*</span>
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
                  }}
                  name="interestDividendPaymentId"
                  id="Income"
                  
                >
                  <option value={0}>-Select-</option>
                  <option value={1}>Individual</option>
                  <option value={2}>Individual/sole Propritor</option>
                  <option value={3}>Limited Liability Company</option>
                </select>
              </FormControl>
            </div>
            </Paper>
          {/* ) : null} */}
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
          <Button
            
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "black",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Back
          </Button>
        </Typography>
      </Paper>
    </div>

</section>
       
    )
}
