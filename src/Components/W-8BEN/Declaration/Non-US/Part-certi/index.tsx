import React from "react";
import { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Paper,
  Checkbox,
  Tooltip,
  Link,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Declaration from "../../../../reusables/Declaration";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { W8_state } from "../../../../../Redux/Actions";
import { useNavigate } from "react-router";
import checksolid from "../../../../../assets/img/check-solid.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { partCertiSchema } from "../../../../../schemas/w8Ben";
export default function Penalties() {
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [toolInfo, setToolInfo] = useState("");

  const initialValue = {
    signedBy: "",
    confirmationCode: "",
    date: "",
    isAgreeWithDeclaration: false,
  };
  const dispatch = useDispatch();
  const history = useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={partCertiSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            W8_state(values, () => {
              history("/W-8BEN/Declaration/US_Tin/Certification_Substitute");
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
          <div style={{ padding: "20px 0px",height:"100%",marginTop:"20px" }}>
        <Paper style={{ padding: "0px 0px 0px 18px", height:"100%" }} className="bg-none">
         
              <div style={{background:"#ffffff33",height:"100%"}}>
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
                              <li className="active">Account Indivation(Optional)</li>
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
                              <li className="active"> <label className="my-auto">US Sourced Income Declaration (optional)</label></li>
                              <li className="active">United States Citizenship Status</li>
                              <li className="active">Tax Identification Number</li>
                              <li className="active">Treaty Claim</li>
                              <li>
                              Special Rates and Conditions
                              </li>
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
                            Step III<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
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
              </div>
           
        </Paper>
      </div>
      </div>
      <div className="col-8">

              <div style={{ padding: "20px" }}>
                <Paper style={{ padding: "18px" }}>
                  <Typography
                    align="left"
                    style={{
                      margin: "10px",
                      fontSize: "24px",
                      fontWeight: "550",
                    }}
                  >
                   Part III Certification<span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Typography
                    align="left"
                    style={{
                      margin: "10px",
                      fontSize: "24px",
                      fontWeight: "550",
                    }}
                  >
                    W-8BEN Electronic Substitute Form Statement
                  </Typography>
                  <Typography
                    align="left"
                    style={{ margin: "10px", fontSize: "15px", color: "grey" }}
                  >
                    The Internal Revenue Service does not require your consent
                    to any provisions of this document other than the
                    certifications required to avoid backup withholding.
                  </Typography>

                  <div
                    className="row"
                    style={{
                      margin: "10px",

                      marginTop: "20px",
                    }}
                  >
                    <div className="col-md-6 col-12 p-0">
                      <Typography style={{ fontSize: "15px" }}>
                        Signed by<span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Signature information
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
                                fontSize: "20px",
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
                              width: "70%",
                            }}
                          >
                            <Typography>
                              Please enter the name of the authorized signatory.
                            </Typography>

                            <Typography style={{ marginTop: "10px" }}>
                              See 'More Info' for further information on
                              signature requirements.
                            </Typography>
                            <Typography style={{ marginTop: "10px" }}>
                              On submission an electronic version of this form
                              will be sent directly to the requester for their
                              acceptance and further validation. After
                              submission you will be able to save and print a
                              copy for your own records.
                            </Typography>
                            <Typography style={{ marginTop: "10px" }}>
                              We will confirm receipt of the electronic form.
                              Please note that acceptance of the confirmation
                              declaration for electronic signature and the
                              certification statement are performed under
                              penalty of perjury.
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

                      <TextField
                        style={{
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "3.5rem",
                          width: "100%",
                        }}
                        fullWidth
                        type="text"
                        name="signedBy"
                        value={values.signedBy}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.signedBy && errors.signedBy)}
                      />
                      <p className="error">{errors.signedBy}</p>
                    </div>

                    <div className="col-md-6 col-12">
                      <Typography style={{ fontSize: "15px" }}>
                        Enter Confirmation Code:
                        <span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Exemptions - Backup Withholding
                                </Typography>
                                <a onClick={() => setToolInfo("password")}>
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
                                fontSize: "20px",
                                cursor: "pointer",
                                verticalAlign: "super",
                              }}
                            />
                          </Tooltip>
                        </span>
                      </Typography>

                      {toolInfo === "password" ? (
                        <div>
                          <Paper
                            style={{
                              backgroundColor: "#dedcb1",
                              padding: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <Typography>
                              To authenticate the electronic signature you must
                              enter the alpha numeric token you received at the
                              start of the process. If you cannot remember your
                              confirmation code, you can click the 'Recover
                              Password' link to answer your security question
                              again and receive it.
                            </Typography>

                            <Typography style={{ marginTop: "10px" }}>
                              If you do not wish to submit the electronic form
                              at this stage, you will need to exit the process
                              and undertake again at a later date.
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
                      <div>
                        <TextField
                          name="confirmationCode"
                          value={values.confirmationCode}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.confirmationCode && errors.confirmationCode
                          )}
                          type="password"
                          required
                          style={{ width: "100%" }}
                        />
                        <span
                          style={{
                            fontSize: "16px",
                            color: "blue",
                            marginLeft: "10px",
                          }}
                        >
                          Recover Password
                        </span>
                        <p className="error">{errors.confirmationCode}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      margin: "10px",

                      marginTop: "20px",
                    }}
                  >
                    <div className="col-12 col-md-6 p-0">
                      <Typography align="left" style={{ padding: "0px" }}>
                        <Typography style={{ fontSize: "15px" }}>
                          Date
                        </Typography>
                        <TextField
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.date && errors.date)}
                          value={values.date}
                          type="date"
                          name="date"
                        />
                        <p className="error">{errors.date}</p>
                      </Typography>
                    </div>
                  </div>

                  <Typography style={{ display: "flex", marginLeft: "10px" }}>
                    <Checkbox
                      name="isAgreeWithDeclaration"
                      value={values.isAgreeWithDeclaration}
                      checked={values.isAgreeWithDeclaration}
                      onChange={handleChange}
                    />
                    <Typography
                      style={{
                        fontSize: "15px",
                        color: "black",
                        marginTop: "5px",
                      }}
                    >
                      Please "check" box to confirm your acceptance with the
                      above declarations{" "}
                      {errors.isAgreeWithDeclaration &&
                      touched.isAgreeWithDeclaration ? (
                        <div>
                          <Typography color="error">
                            {errors.isAgreeWithDeclaration}
                          </Typography>
                        </div>
                      ) : (
                        ""
                      )}
                      <span>
                        <Tooltip
                          style={{ backgroundColor: "black", color: "white" }}
                          title={
                            <>
                              <Typography color="inherit">
                                Certification information
                              </Typography>
                              <a onClick={() => setToolInfo("check")}>
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
                              fontSize: "20px",
                              cursor: "pointer",
                              verticalAlign: "super",
                            }}
                          />
                        </Tooltip>
                      </span>
                    </Typography>
                  </Typography>
                  {toolInfo === "check" ? (
                    <div>
                      <Paper
                        style={{
                          backgroundColor: "#dedcb1",
                          padding: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography>
                          This submission <span>must</span> be signed and dated
                          by the beneficial owner of the income, or, if the
                          beneficial owner is not an individual, by an
                          authorized representative or officer of the beneficial
                          owner.
                        </Typography>
                        <Typography>
                          If this submission is being completed by an agent
                          acting under a duly authorized power of attorney for
                          the beneficial owner or account holder, the form must
                          be accompanied by the power of attorney in proper form
                          or a copy thereof specifically authorizing the agent
                          to represent the principal in making, executing, and
                          presenting the form.
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Form 2848, Power of Attorney and Declaration of
                          Representative, can be used for this purpose. The
                          agent, as well as the beneficial owner or account
                          holder, may incur liability for the penalties provided
                          for an erroneous, false, or fraudulent form.
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          Ref: EH015
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

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setOpen2(true);
                      }}
                      variant="contained"
                      style={{ color: "white" }}
                    >
                      SAVE & EXIT
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => {
                        history("/Submit");
                        //  setOpen2(true)
                      }}
                      // onClick={() => {
                      //   setOpen2(true);
                      // }}
                      variant="contained"
                      style={{ color: "white", marginLeft: "15px" }}
                    >
                      Submit Electronically
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
                      history('/W-8BEN/Declaration/US_Tin/Certificates')
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
              </div>
              </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>

      <Declaration
        open={open2}
        setOpen={setOpen2}
        handleClickOpen={handleClickOpen2}
        handleClose={handleClose2}
      />
    </>
  );
}
