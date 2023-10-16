import React ,{useState} from "react";
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
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { fctaSchema } from "../../../schemas";
import { W9_state } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FCTA_Reporting(props: any) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const history = useNavigate()
  const [report, setReport] = useState<string>("");
  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport((event.target as HTMLInputElement).value);
  };
 
  const initialValue = {
    isExemptionFATCAReportings: "",
  };
  return (  

    <section
    className="inner_content"
    style={{ backgroundColor: "#0c3d69", marginBottom: "10px", height: "100%" }}
  >
       <Formik
          initialValues={initialValue}
          enableReinitialize
          validationSchema={fctaSchema} // Uncomment after testing ,this is validation Schema
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            history("/US_Purposes/Back/Exemption/Tax")
            dispatch(
              W9_state(values, () => {
                console.log( "Done");
              })
            );
          }}
        >
          {({
            errors,
            touched,
            handleBlur,
            values,
            handleSubmit,
            handleChange,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
     <div className="row w-100 h-100">
                <div className="col-4 mt-2" >
                  <div className="bg-none" style={{ padding: "10px 0px", height: "100%", }}>
                    <Paper style={{ padding: "0px 0px 0px 0px", height: "100%", backgroundColor: "#ffffff33" }} >


                      <div className="stepper" >
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChangestatus("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            className="accordian-header"
                          >
                            <Typography
                              className="text-uppercase d-flex active"
                              sx={{
                                width: "100%",
                                flexShrink: 0,
                                fontSize: "20px",
                              }}
                            >
                              Step I<img className="steper-check-icon-solid my-auto mx-2" src={checksolid} />
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <Paper
                              elevation={3}
                              style={{
                                padding: "20px",
                                backgroundColor: "#f0f0f0",
                                overflow: "auto",
                              }}
                            >
                              <ul>
                                <li className="active"> <label className="my-auto">Name and Address </label></li>
                                <li className="active">Account Information(Optional)</li>
                                <li className="active">Tax Identification Number</li>
                                <li className="active">Contact Details</li>
                                <li className="active">Form Selection</li>
                              </ul>
                            </Paper>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChangestatus("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            className="accordian-header"
                          >
                            <Typography
                              className="text-uppercase d-flex"
                              sx={{
                                width: "100%",
                                flexShrink: 0,
                                fontSize: "20px",
                              }}
                            >
                              Step II<img className="steper-check-icon-solid my-auto mx-2" src={checksolid} />
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Paper
                              elevation={3}
                              style={{
                                padding: "20px",
                                backgroundColor: "#f0f0f0",
                                overflow: "auto",
                              }}
                            >
                              <ul>
                                <li className="active"> <label className="my-auto">Federal Tax</label></li>
                                <li >Exemption from Backup Withholding</li>
                                <li >Exemption from FATCA reporting</li>
                                <li>Tax Identification Number</li>

                              </ul>
                            </Paper>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel3"}
                          onChange={handleChangestatus("panel3")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            className="accordian-header"
                          >
                            <Typography
                              className="text-uppercase d-flex"
                              sx={{
                                width: "100%",
                                flexShrink: 0,
                                fontSize: "20px",
                              }}
                            >
                              Step III<img className="steper-check-icon-solid my-auto mx-2" src={checksolid} />
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Paper
                              elevation={3}
                              style={{
                                padding: "20px",
                                backgroundColor: "#f0f0f0",
                                overflow: "auto",
                              }}
                            >
                              <ul>
                                <li > <label className="my-auto">Penalties of Perjury Certification</label></li>
                                <li >Electronic Signature</li>
                                <li>Electronic Signature Confirmation</li>
                                <li>U.S. Tax Certification Complete</li>

                              </ul>
                            </Paper>
                          </AccordionDetails>
                        </Accordion>
                      </div>


                    </Paper>
                  </div>
                </div>
                <div className="col-8 mt-2" >          
  <div style={{ margin: "10px", padding: "10px", backgroundColor: "#ffff", }}>
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
        id="isExemptionFATCAReportings"
        aria-labelledby="demo-row-radio-buttons-group-label"
        row
        value={values.isExemptionFATCAReportings}
        onChange={handleChange}
      >
        <FormControlLabel
          control={<Radio/>}
          value="Yes"
          name="isExemptionFATCAReportings"
          label="Yes"
        />
        <FormControlLabel
        control={<Radio/>}
          value="No"
          name="isExemptionFATCAReportings"
          label="No"
        />
           
      </RadioGroup>
    </div>
    {errors.isExemptionFATCAReportings && touched.isExemptionFATCAReportings ? (
                <div>
                  <Typography color="error">
                    {errors.isExemptionFATCAReportings}
                  </Typography>
                </div>
              ) : (
                ""
              )}
    {values?.isExemptionFATCAReportings === "Yes" ? (
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
          className="col-md-6 col-12"
            style={{
              padding: " 0 10px",
              color: "#7e7e7e",
              fontStyle: "italic",
              height: "30px",
            }}
            name="interestDividendPaymentId"
            id="Income"
            // defaultValue={data.interestDividendPaymentId}
             onChange={handleChange}
          >
            <option value={0}>-Select-</option>
            <option value={1}>Individual</option>
            <option value={2}>Individual/sole Propritor</option>
            <option value={3}>Limited Liability Company</option>
          </select>
        </FormControl>
      </>
    ) : ""}
  </div>
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
     type="submit"
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
    type="submit"
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
   </Form>
   )}
 </Formik>
</section>

)}