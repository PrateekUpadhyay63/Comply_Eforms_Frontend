import React,{useState} from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Link,
  TextField,
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { firstStepSchema } from "../../../../schemas";

export default function Tin(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;

  const [toolInfo, setToolInfo] = useState("");
  return( <Paper className="col-12">
  <Typography
    align="left"
    style={{ margin: "10px", fontSize: "24px" ,fontWeight:"550"}}
  >
    Taxpayer Identification Number{" "}
   
  </Typography>

  <div style={{ margin: "10px", display: "flex", marginTop: "25px",justifyContent:"space-between"}} className="row">
    <div className="col-md-6 col-12">
      <Typography>
        U.S. TIN Type<span style={{ color: "red" }}>*</span>
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
      <select
        style={{
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "36px",
          width: "100%",
        }}
        name="permanentResidentialCountryId1"
        id="Income"
        defaultValue={1}
      ></select>
    </div>

    <div className="col-md-6  col-12">
      <Typography>U.S. TIN</Typography>
      <Input
      className="input-w9-cstm"
      fullWidth
        required
        style={{
          width: "100%",
          border: " 1px solid #d9d9d9 ",
          height: " 36px",
          lineHeight: "36px ",
          background: "#fff ",
          fontSize: "13px",
          color: " #000 ",
          fontStyle: "normal",
          borderRadius: "1px",
          padding: " 0 10px ",
        }}
      />
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
    <Button variant="contained" style={{ color: "white",marginLeft:"15px" }}>
     View Form
    </Button>
    <Button
      onClick={() => {
        setselectedContinue({
          step1: false,
              step2: false,
              step3: false,
              step4: false,
              step5: true,
              step6: false,
              step7: false,
              step8: false,
        });
        // setOpen(true);
      }}
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
    onClick={() => {
      setselectedContinue({
        step1: false,
            step2: false,
            step3: false,
            step4: true,
            step5: false,
            step6: false,
            step7: false,
            step8: false,
      });
      // setOpen(true);
    }}
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
</Paper>)}
