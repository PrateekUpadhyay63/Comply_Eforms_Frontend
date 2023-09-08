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
  return( <Paper className="col-md-9 col-8">
  <Typography
    align="left"
    style={{ margin: "10px", fontSize: "20px" }}
  >
    Taxpayer Identification Number{" "}
    <span style={{ color: "red" }}>*</span>
    <Info style={{ color: "#ffc107", fontSize: "13px" }} />{" "}
  </Typography>

  <div style={{ margin: "10px", display: "flex", marginTop: "25px",justifyContent:"space-between"}} className="row">
    <div className="col-md-6 col-12">
      <Typography>
        U.S. TIN Type<span style={{ color: "red" }}>*</span>
        <Info style={{ color: "#ffc107", fontSize: "13px",verticalAlign:"super" }}/>
      </Typography>
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
