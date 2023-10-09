import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Paper,
  RadioGroup,
  Radio,
  Link,
  FormControlLabel,
  Tooltip,
  Divider,
  Checkbox
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { claimSchema } from "../../../../../schemas/w8Ben";
import { W8_state } from "../../../../../Redux/Actions";
import { useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import checksolid from "../../../../../assets/img/check-solid.png";
import check from "../../../../../assets/img/check.png";
export default function FCTA_Reporting(props: any) {
  const history = useNavigate();
  const [report, setReport] = useState<string>("");
  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport((event.target as HTMLInputElement).value);
  };
  const [toolInfo, setToolInfo] = useState("");
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <section
      className="inner_content"
      style={{ backgroundColor: "#0c3d69", marginBottom: "10px" ,height:"100%"}}
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
          <div style={{ padding: "20px 0px",height:"100%" }}>
        <Paper style={{ padding: "0px 0px 0px 18px", height:"100%" }} className="bg-none">
          <Formik
            initialValues={{
              isSubmissionClaimTreaty: "No",
              ownerResidentId: "",
            }}
            enableReinitialize
            validationSchema={claimSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              dispatch(
                W8_state(values, () => {
                  history("/W-8BEN/Declaration/US_Tin/Rates");
                })
              );
              history("/W-8BEN/Declaration/US_Tin/Rates");
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
              <Form onSubmit={handleSubmit} style={{background:"#ffffff33",height:"100%"}}>
                <div className="stepper">
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
                            Step I<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
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
                              <li>Tax Identification Number</li>
                              <li>Contact Details</li>
                              <li>Form Selection</li>
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
                            Step II<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
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
                              <li className="active">Exemption from Backup Withholding</li>
                              <li>Exemption from FATCA reporting</li>
                              <li>Tax Identification Number</li>
                            </ul>
                        </Paper>
                        </AccordionDetails>
                      </Accordion>
                    </div>
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
          </div>
          <div className="col-8">

      <div style={{ padding: "20px 0px" }}>
        <Paper style={{ padding: "18px" }}>
          <Formik
            initialValues={{
              isSubmissionClaimTreaty: "No",
              ownerResidentId: "",
            }}
            enableReinitialize
            validationSchema={claimSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              dispatch(
                W8_state(values, () => {
                  history("/W-8BEN/Declaration/US_Tin/Rates");
                })
              );
              history("/W-8BEN/Declaration/US_Tin/Rates");
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
                <>{console.log(errors, values, "valeeeeeeeeeee")}</>
                <div>
                  <div style={{ margin: "10px" }}>
                    <Typography
                      align="left"
                      style={{
                        marginTop: "10px",
                        fontSize: "32px",
                        fontWeight: "550",
                      }}
                    >
                      Treaty Claim Statement
                      <span>
                        <Tooltip
                          style={{ backgroundColor: "black", color: "white" }}
                          title={
                            <>
                              <Typography color="inherit">
                                Treaty claim information
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
                          <Info
                            style={{
                              color: "#ffc107",
                              fontSize: "19px",
                              cursor: "pointer",
                              verticalAlign: "super",
                            }}
                          />
                        </Tooltip>
                      </span>
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
                            An entity that is claiming a reduced rate of, or
                            exemption from, withholding under an income tax
                            treaty must state they wish to make a treaty claim.
                          </Typography>

                          <Typography style={{ marginTop: "10px" }}>
                            IRS Form Guidance
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            An entity that is claiming a reduced rate of, or
                            exemption from, withholding under an income tax
                            treaty must check the box to certify that it:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            Derives the item of income for which the treaty
                            benefit is claimed, and meets the limitation on
                            benefits provisions contained in the treaty, if any.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            An item of income may be derived by either the
                            entity receiving the item of income or by the
                            interest holders in the entity or, in certain
                            circumstances, both. An item of income paid to an
                            entity is considered to be derived by the entity
                            only if the entity is not fiscally transparent under
                            the laws of the entity’s jurisdiction with respect
                            to the item of income. An item of income paid to an
                            entity shall be considered to be derived by the
                            interest holder in the entity only if:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - The interest holder is not fiscally transparent in
                            its jurisdiction with respect to the item of income,
                            and
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - The entity is considered to be fiscally
                            transparent under the laws of the interest holder’s
                            jurisdiction with respect to the item of income.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            An item of income paid directly to a type of entity
                            specifically identified in a treaty as a resident of
                            a treaty jurisdiction is treated as derived by a
                            resident of that treaty jurisdiction. To determine
                            whether an entity meets the limitation on benefits
                            provisions of a treaty, you must consult the
                            specific provisions or articles under the treaty.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            Ref: EH156
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
                      align="left"
                      style={{ fontSize: "22px", marginTop: "10px" }}
                    >
                      Is this submission being made to claim treaty benefits?
                    </Typography>

                    <div
                      style={{ marginTop: "10px", justifyContent: "center" }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        value={values.isSubmissionClaimTreaty}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                          name="isSubmissionClaimTreaty"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                          name="isSubmissionClaimTreaty"
                        />
                      </RadioGroup>
                      {errors.isSubmissionClaimTreaty &&
                      touched.isSubmissionClaimTreaty ? (
                        <div>
                          <Typography color="error">
                            {errors.isSubmissionClaimTreaty}
                          </Typography>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {values.isSubmissionClaimTreaty == "yes" ? (
                      <>
                        <Typography
                          align="left"
                          style={{ fontSize: "22px", marginTop: "20px" }}
                        >
                          I certify the beneficial owner is a resident of:{" "}
                          <span style={{ color: "red" }}>*</span>
                          <Info
                            style={{
                              color: "#ffc107",
                              fontSize: "20px",
                              verticalAlign: "super",
                            }}
                          />
                        </Typography>
                        <div className="row px-2">
                            <div className="col-12" style={{padding:"0px"}}>
                              <FormControl className="w-100">
                                <div className="row">
                                  <div    className="col-md-6 col-12 d-flex" >
                                    <select
                                      style={{
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                          
                                        width: "98%",
                                      }}
                                      name="ownerResidentId"
                                      id="ownerResidentId"
                                      onBlur={handleBlur}
                                      value={values.ownerResidentId}
                                      onChange={(e) => {
                                        handleChange(e);
                                      }}
                                    >
                                      <option value={0}>-Select-</option>
                                      <option value={1}>Individual</option>
                                      <option value={2}>Individual/sole Propritor</option>
                                      <option value={3}>Limited Liability Company</option>
                                    </select>

                                  </div>
                                </div>
                                
                                <p className="error">{errors.ownerResidentId}</p>
                              </FormControl>
                            </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div>
                      <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChangestatus("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Electronic Submission Declaration
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#d4d9d4",
                              height: "280px",
                              overflow: "auto",
                            }}
                          >
                            <Typography
                              align="left"
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "18px",
                                width: "100%",
                              }}
                            >
                              Electronic Submission Declaration
                            </Typography>

                            <Typography
                              align="left"
                              style={{ fontSize: "15px", marginTop: "13px" }}
                            >
                              <span
                                style={{
                                  color: "black",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                }}
                              >
                                Under Penalties or Perjury
                              </span>{" "}
                              you hereby declare that, pursuant to the
                              Electronic Signature in Global and National
                              Commerce Act - the E-Sign Act - Title 15 U.S.C.
                              §7001, you are declaring that you have examined
                              the information you are about to electronically
                              submit and that to the best of your knowledge and
                              belief it is true, correct and complete.
                            </Typography>

                            <Typography
                              align="left"
                              style={{ fontSize: "15px", marginTop: "13px" }}
                            >
                              Furthermore you acknowledge that you understand
                              your rights and obligations under Title 28 U.S.C.
                              §1746 governing unsworn declarations made under
                              the Penalties of Perjury.
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px", marginTop: "13px" }}
                            >
                              Additionally, you are certifying that you have
                              read and agreed the certification statement
                              presented through the submission process,
                              confirming that:
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px", marginTop: "13px" }}
                            >
                              1. You are the beneficial owner (or an authorized
                              to sign for the beneficial owner) of all the
                              income to which the form relates,
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px", marginTop: "13px" }}
                            >
                              2. The beneficial owner is not a U.S person.
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px", marginTop: "13px" }}
                            >
                              3. You are a U.S. person submitting a Form type
                              W-9
                            </Typography>

                            <Typography
                              align="left"
                              style={{
                                fontSize: "20px",
                                marginTop: "13px",
                                fontWeight: "bold",
                              }}
                            >
                              To Confirm:
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px" }}
                            >
                              1. You have entered your name in the box provided
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px" }}
                            >
                              2. Checked the{" "}
                              <span
                                style={{
                                  color: "black",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                }}
                              >
                                "I agree with the above declaration"
                              </span>
                              and
                            </Typography>
                            <Typography
                              align="left"
                              style={{ fontSize: "15px" }}
                            >
                              3. By submitting the form here will have provided
                              a legally binding self certified electronic
                              signature.
                            </Typography>

                            <Typography
                              align="left"
                              style={{ fontSize: "20px", marginTop: "13px" }}
                            >
                              On submission your details will be transmitted to
                              your withholding agent previously selected, who
                              may wish to contact you for further confirmation.
                              No data is stored within the Comply Exchange
                              Service on transfer and it is again recommended
                              that you save a copy locally for your own records.
                            </Typography>
                          </Paper>
                          <div style={{ display: "flex", marginTop: "10px" }}>
                            <Checkbox />
                            <Typography style={{ marginTop: "9px" }}>
                              I agree with the above Declarations
                            </Typography>
                          </div>
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
                        >
                          <Typography
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Electronic Recipient Statement
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#d4d9d4",
                            }}
                          >
                            <Divider
                              style={{ marginTop: "10px", color: "black" }}
                            />
                            <Typography
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "16px",
                                marginTop: "10px",
                              }}
                            >
                              We may be required to provide you with a Form
                              1042-S or 1099 depending on your U.S. status. In
                              order to receive this statement electronically, by
                              email or accessible through our onboarding portal
                              you must provide your consent by checking the box
                              below. If you do not provide consent a paper copy
                              will be provided. Furthermore: The statement will
                              be provided in PDF format. This consent will
                              remain in place until you withdraw your consent.
                              You may withdraw this consent at any time by
                              writing to our support centre requesting that a
                              paper copy is provided to you. If you require a
                              paper copy after giving consent you may request a
                              copy by writing to our support centre requesting
                              that a paper copy is provided to you. We reserve
                              the right to change our delivery processes and
                              should circumstances change we will contact you by
                              written notice after which time statements will be
                              provided by paper, until a further consent is
                              given by you.
                            </Typography>
                            <Divider style={{ marginBottom: "10px" }} />
                          </Paper>
                          <div style={{ display: "flex", marginTop: "10px" }}>
                            <Checkbox />
                            <Typography style={{ marginTop: "9px" }}>
                              I give consent to receiving a recipent statement
                              electronically
                            </Typography>
                          </div>
                          <div style={{ display: "flex", marginTop: "10px" }}>
                            <Checkbox />
                            <Typography style={{ marginTop: "9px" }}>
                              {" "}
                              I do not give consent to receiving a recipent
                              statement electronically
                            </Typography>
                          </div>
                        </AccordionDetails>
                      </Accordion>
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
                  onClick={()=>{
                    history("/W-8BEN/Declaration/US_Tin")
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
