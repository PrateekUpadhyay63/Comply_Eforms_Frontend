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
import { Formik, Form } from "formik";
import { firstStepSchema } from "../../../../schemas";

export default function FCTA_Reporting(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
    report,
    handleReportChange
  } = props;
  return (   <Paper style={{ marginLeft: "5px", width: "80%" }}>
  <div style={{ margin: "10px" }}>
    <Typography
      align="left"
      style={{ margin: "10px", fontSize: "20px" }}
    >
      Exemption from FATCA reporting
      <span style={{ color: "red" }}>*</span>
      <Info style={{ color: "#ffc107", fontSize: "13px" }} />{" "}
    </Typography>
    <Typography
      align="left"
      style={{ fontSize: "12px", marginTop: "10px" }}
    >
      Will payments be made into an account held outside of the United
      States by a foreign institution?
    </Typography>

    <div style={{ marginTop: "20px", justifyContent: "center" }}>
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
          style={{ fontSize: "12px", marginTop: "10px" }}
        >
          Please select from the list provided to apply for exemption
          from FATCA Reporting or select confirm if no exemption
          applies<span style={{ color: "red" }}>*</span>
          <Info style={{ color: "#ffc107", fontSize: "13px" }} />
        </Typography>
        <FormControl className="w-100">
          <select
            style={{
              padding: " 0 10px",
              color: "#7e7e7e",
              fontStyle: "italic",
              height: "30px",
              width: "35%",
            }}
            name="interestDividendPaymentId"
            id="Income"
            defaultValue={data.interestDividendPaymentId}
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
          step4: true,
          step5: false,
          step6: false,
        });
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
          step2: true,
          step3: false,
          step4: false,
          step5: false,
          step6: false,
        });
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