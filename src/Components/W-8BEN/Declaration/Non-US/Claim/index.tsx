import React, { useState } from "react";
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
  Link,
  FormControlLabel,
  Tooltip
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss"

export default function FCTA_Reporting(props: any) {
    const [report, setReport] = useState<string>("");
    const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setReport((event.target as HTMLInputElement).value);
    };
    const [toolInfo, setToolInfo] = useState("");
  return (  
    <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>
    <div style={{padding:"20px"}}>
    <Paper style={{padding:"18px"}} >
  <div>
  <div style={{ margin: "10px" }}>
    <Typography
      align="left"
      style={{ marginTop: "10px", fontSize: "32px" ,fontWeight:"550"}}
    >
      Treaty Claim Statement
    
      <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                            <>
                              <Typography color="inherit">U.S. TIN Type Info</Typography>
                              <a onClick={() => setToolInfo("basic")}>
                                <Typography style={{ cursor: "pointer", textDecorationLine: "underline" }} align="center" > View More...</Typography>
                              </a>
                            </>
                          }>
                            <Info
                              style={{
                                color: '#ffc107',
                                fontSize: '16px',
                                cursor: 'pointer',
                                verticalAlign: "super"
                              }}

                            />
                          </Tooltip></span>
    </Typography>
    {toolInfo === "basic" ? (<div>
                          <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                            <Typography>
                            Please select a U.S. TIN type status from the dropdown.
                            </Typography>
                           
                            <Typography style={{ marginTop: "10px" }}>
                            If a TIN type is not available, ensure you select the checkbox to the right of the field and provide an explanation as to why it is not available in the corresponding boxes at the bottom of the screen.
                            </Typography>


                            <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                          </Paper>

                        </div>) : ""}
    <Typography
      align="left"
      style={{ fontSize: "22px", marginTop: "10px" }}
    >
      Is this submission being made to claim treaty benefits?
    </Typography>

    <div style={{ marginTop: "10px", justifyContent: "center" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={report}
        onChange={handleReportChange}
      >
        <FormControlLabel
          value={257}
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          value={258}
          control={<Radio />}
          label="No"
        />
      </RadioGroup>
    </div>
    {report === "257" ? (
      <>
        <Typography
          align="left"
          style={{ fontSize: "22px", marginTop: "20px" }}
        >
          I certify the beneficial owner is a resident of: <span style={{ color: "red" }}>*</span>
          <Info style={{ color: "#ffc107", fontSize: "20px",verticalAlign:"super" }} />
        </Typography>
        <FormControl className="w-100">
          <select
          className="col-md-6 col-12"
            style={{
              padding: " 0 10px",
              color: "#7e7e7e",
              fontStyle: "italic",
              height: "50px",
              width:"50%"
            }}
            name="interestDividendPaymentId"
            id="Income"
           
            // onChange={handleChange}
          >
            <option value={0}>-Select-</option>
            <option value={1}>Individual</option>
            <option value={2}>Individual/sole Propritor</option>
            <option value={3}>Limited Liability Company</option>
          </select>
        </FormControl>
      </>
    ) : null}
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

)}