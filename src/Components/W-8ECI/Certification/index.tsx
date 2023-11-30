import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  Typography,
  Button,
  Tooltip,
  Link,
  Accordion,
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { W8_state_ECI } from "../../../Redux/Actions";
import { certificateSchema } from "../../../schemas/w8ECI";
import checksolid from "../../../assets/img/check-solid.png";
import BreadCrumbComponent from "../../reusables/breadCrumb";
export default function Certifications(props: any) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [toolInfo, setToolInfo] = useState("");
  const initialValue = {
    isBeneficialOwnerIncome: false,
    isAmountCertificationUS: false,
    isBeneficialOwnerGrossIncome: false,
    isBeneficialOwnerNotUSPerson: false,
    isAuthorizeWithHoldingAgent: false,
    isCapacityForm: false,
    isElectronicForm: false,
  };

  return (
    <section
      className="inner_content"
      style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
    >
      <div className="overlay-div">
            <div className="overlay-div-group">
                <div className="viewInstructions">View Instructions</div>
                <div className="viewform">View Form</div>
                <div className="helpvideo"> 
                {/* <a target="_blank" href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-">Help Video</a> */}
                <a href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-" target="popup" onClick={()=>window.open('https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-','name','width=600,height=400')}>Help Video</a>
                </div>
            </div>
        </div>
        <div className="row w-100 h-100">
        <div className="col-4">
          <div style={{ padding: "0px 0px",height:"100%" }}>
          <BreadCrumbComponent breadCrumbCode={1500} formName={4}/>
      </div>
      </div>
      <div className="col-8 mt-3">
      <div style={{ padding: "20px" }}>
        <Paper style={{ padding: "18px" }}>
          <Formik
            initialValues={initialValue}
            enableReinitialize
            validationSchema={certificateSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values, "vallllll");
              dispatch(
                W8_state_ECI(values, () => {
                  history("/W-8ECI/Certification/Participation");
                })
              );
              history("/W-8ECI/Certification/Participation");
            }}
          >
            {({
              errors,
              touched,
              handleBlur,
              values,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <>{console.log(errors, values)}</>
                <Typography
                  align="left"
                  style={{
                    margin: "10px",
                    fontSize: "30px",
                    fontWeight: "550",
                    marginLeft: "20px",
                  }}
                >
                  Certification 
                  <span style={{ color: "red" }}>*</span>
                  <span>
                    <Tooltip
                      style={{ backgroundColor: "black", color: "white" }}
                      title={
                        <>
                          <Typography color="inherit">
                            TT-282 W-8ECI-General
                          </Typography>
                          <a onClick={() => setToolInfo("basic")}>
                            <Typography
                              style={{
                                cursor: "pointer",
                                textDecorationLine: "underline",
                              }}
                              align="center"
                            >
                              {" "}
                              View More...
                            </Typography>
                          </a>
                        </>
                      }
                    >
                      <InfoIcon
                        style={{
                          color: "#ffc107",
                          fontSize: "13px",
                          cursor: "pointer",
                          verticalAlign: "super",
                        }}
                      />
                    </Tooltip>
                  </span>{" "}
                </Typography>
                {toolInfo === "basic" ? (
                  <div>
                    <Paper
                      style={{
                        backgroundColor: "#dedcb1",
                        padding: "15px",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography>
                        EH049: You have selected to submit a form W-8ECI to
                        claim that the person, business or organization
                        represented by the form is a foreign person and the
                        beneficial owner of U.S. sourced income that is (or is
                        deemed to be) effectively connected with the conduct of
                        a trade or business within the United States.
                      </Typography>

                      <Typography style={{ marginTop: "10px" }}>
                        If this is not correct you must go back and change your
                        selection.
                      </Typography>
                      <Typography style={{ marginTop: "10px" }}>
                        Please check the information and change where
                        appropriate. On completion this information will be
                        presented as a pdf image, which you can save locally or
                        print off.
                      </Typography>

                      <Link
                        href="#"
                        underline="none"
                        style={{ marginTop: "10px", fontSize: "16px" }}
                        onClick={() => {
                          setToolInfo("");
                        }}
                      >
                        --Show Less--
                      </Link>
                    </Paper>
                  </div>
                ) : (
                  ""
                )}

                <Typography
                  style={{
                    margin: "10px",
                    fontSize: "17px",
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  I certify that (Check All).{" "}
                  <span style={{ fontWeight: "550" }}>
                    Checking the box signifies you have read the statement, even
                    if it does not directly apply.
                  </span>
                </Typography>
                <Typography
                  style={{
                    margin: "10px",
                    fontSize: "17px",
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  Under penalties of perjury, I declare that I have examined the
                  information on this form and to the best of my knowledge and
                  belief it is true, correct, and complete. I further certify
                  under penalties of perjury that:
                </Typography>

                <Paper
                  style={{
                    marginLeft: "20px",
                    width: "96%",
                    backgroundColor: "#d2d6d3",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isBeneficialOwnerIncome"
                        value={values.isBeneficialOwnerIncome}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "10px",
                        }}
                      >
                        I am the beneficial owner (or I am authorized to sign
                        for the beneficial owner) of all the payments to which
                        this form relates,
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isBeneficialOwnerIncome}</p>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isAmountCertificationUS"
                        value={values.isAmountCertificationUS}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "7px",
                        }}
                      >
                        The amounts for which this certification is provided are
                        effectively connected with the conduct of a trade or
                        business in the United States,
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isAmountCertificationUS}</p>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isBeneficialOwnerGrossIncome"
                        value={values.isBeneficialOwnerGrossIncome}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "7px",
                        }}
                      >
                        The income for which this form was provided is
                        includible in my gross income (or the beneficial owner’s
                        gross income) for the taxable year,
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isBeneficialOwnerGrossIncome}</p>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isBeneficialOwnerNotUSPerson"
                        value={values.isBeneficialOwnerNotUSPerson}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "7px",
                        }}
                      >
                        The beneficial owner is not a U.S. person.
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isBeneficialOwnerNotUSPerson}</p>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isAuthorizeWithHoldingAgent"
                        value={values.isAuthorizeWithHoldingAgent}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "7px",
                        }}
                      >
                        Furthermore, I authorize this form to be provided to any
                        withholding agent that has control, receipt, or custody
                        of the payments of which I am the beneficial owner or
                        any withholding agent that can disburse or make payments
                        of the amounts of which I am the beneficial owner
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isAuthorizeWithHoldingAgent}</p>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isCapacityForm"
                        value={values.isCapacityForm}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "7px",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          I certify that I have the capacity to sign for the
                          entity identified on line 1 of this form.
                        </span>
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isCapacityForm}</p>
                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "17px",
                        color: "black",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    ></Typography>
                    
                    <Typography style={{ display: "flex" }}>
                      <Checkbox
                        name="isElectronicForm"
                        value={values.isElectronicForm}
                        onChange={handleChange}
                        size="medium"
                        style={{ fontSize: "2rem" }}
                      />
                      <Typography
                        style={{
                          fontSize: "17px",
                          color: "black",
                          marginTop: "7px",
                        }}
                      >
                        Check to confirm you have reviewed the Electronic Form
                        <span
                          style={{
                            color: "blue",
                            fontSize: "19px",
                            marginLeft: "5px",
                          }}
                        >
                          (view Electronic Form)
                        </span>
                      </Typography>
                    </Typography>
                    <p className="error">{errors.isElectronicForm}</p>

                    <Divider
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "black",
                      }}
                    />
                  </div>
                </Paper>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  <Button variant="contained" style={{ color: "white" }}>
                    SAVE & EXIT
                  </Button>
                  <Button
                    variant="contained"
                    style={{ color: "white", marginLeft: "15px" }}
                  >
                    View form
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
                  onClick={()=>{
                    history("/W-8ECI/Income")
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
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
      </div>
      </div>
    </section>
  );
}
