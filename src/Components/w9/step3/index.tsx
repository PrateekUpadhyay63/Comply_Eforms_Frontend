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
  Divider
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { firstStepSchema } from "../../../schemas";

export default function VerifyDocs(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
    initialValue
  } = props;
  return(   <Paper style={{ marginLeft: "5px", width: "80%" }}>
  <Typography
    align="left"
    style={{ margin: "10px", fontSize: "20px", fontWeight: "550" }}
  >
    Attach Supporting Documentation{" "}
    <span style={{ color: "red" }}>*</span>
    <Info
      style={{
        color: "#ffc107",
        fontSize: "13px",
        verticalAlign: "super",
      }}
    />{" "}
  </Typography>
  <div style={{ margin: "20px" }}>
    <div
      style={{
        margin: "10px",
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography>Birth Certificate (Copy)</Typography>
        <Typography style={{ fontSize: "13px", color: "grey" }}>
          A government issued document that registers the birth of the
          holder
        </Typography>
      </div>

      <div style={{ justifyContent: "flex-end" }}>
        <Input type="file" />
      </div>
    </div>
    <Divider />
    <div
      style={{
        margin: "10px",
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography>Certificate of Incorporation</Typography>
        <Typography style={{ fontSize: "13px", color: "grey" }}>
          Certificate of Incorporation
        </Typography>
      </div>

      <div style={{ justifyContent: "flex-end" }}>
        <Input type="file" />
      </div>
    </div>
    <Divider />
    <div
      style={{
        margin: "10px",
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography>Driving License</Typography>
        <Typography style={{ fontSize: "13px", color: "grey" }}>
          Driving License
        </Typography>
      </div>

      <div style={{ justifyContent: "flex-end" }}>
        <Input type="file" />
      </div>
    </div>
    <Divider />
    <div
      style={{
        margin: "10px",
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography>Passport</Typography>
        <Typography style={{ fontSize: "13px", color: "grey" }}>
          Passport
        </Typography>
      </div>

      <div style={{ justifyContent: "flex-end" }}>
        <Input type="file" />
      </div>
    </div>
    <Divider />
    <div
      style={{
        margin: "10px",
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography>Power of Attorney statement</Typography>
        <Typography style={{ fontSize: "13px", color: "grey" }}>
          Power of Attorney statement
        </Typography>
      </div>

      <div style={{ justifyContent: "flex-end" }}>
        <Input type="file" />
      </div>
    </div>
    <Divider />
    <div
      style={{
        margin: "10px",
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography>Proof of Residency</Typography>
        <Typography style={{ fontSize: "13px", color: "grey" }}>
          Proof of Residency
        </Typography>
      </div>

      <div style={{ justifyContent: "flex-end" }}>
        <Input type="file" />
      </div>
    </div>
    <Divider />
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
          step5: false,
          step6: true,
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