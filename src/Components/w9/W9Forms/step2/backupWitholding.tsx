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

export default function Backup_witholding(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;
  return (
    <Paper style={{ marginLeft: "5px", width: "80%" }}>
      <div style={{ margin: "10px" }}>
        <Typography
          align="left"
          style={{ color: "black", fontSize: "20px", fontWeight: "550" }}
        >
          Exemption from Backup Withholding for U.S. Business & Organizations{" "}
          <span style={{ color: "red" }}>*</span>
          <Info style={{ color: "#ffc107", fontSize: "13px" }} />{" "}
        </Typography>
        <Typography
          align="left"
          style={{ fontSize: "13px", marginTop: "10px" }}
        >
          Generally, individuals (including sole proprietors) are not exempt
          from backup withholding.
        </Typography>
        <Typography
          align="left"
          style={{
            fontSize: "13px",
            fontWeight: "550",
            marginTop: "10px",
          }}
        >
          Is the business or organization you are making this submission for
          exempt from backup withholding?{" "}
          <span style={{ color: "red" }}>*</span>
          <Info style={{ color: "#ffc107", fontSize: "13px" }} />
        </Typography>
        <div style={{ marginTop: "20px", justifyContent: "center" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="isExemptionfromBackup"
            value={data.isExemptionfromBackup}
            onChange={handleChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Don't know"
            />
          </RadioGroup>
        </div>
        <Paper style={{ backgroundColor: "#adadac" }}>
          <Typography
            style={{
              margin: "10px",
              justifyContent: "center",
              fontSize: "13px",
            }}
          >
            If you are an individual completing the submission, please select
            either 'Yes' or 'No'. If you are submitting this form as an entity,
            and are not sure which to select, please refer to the help available
            or select "Don't Know", where you will be guided through a series of
            questions to help you determine based on your expected income type.
          </Typography>
        </Paper>
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
              step3: true,
              step4: false,
              step5: false,
              step6: false,
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
              step2: true,
              step3: false,
              step4: false,
              step5: false,
              step6: false,
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
    </Paper>
  );
}
