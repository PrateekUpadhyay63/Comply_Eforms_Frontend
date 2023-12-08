import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  TextField,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Tooltip,
  Link,
} from "@mui/material";
import { Formik, Form } from "formik";
// import { useDispatch } from "react-redux";
import { partCertiSchema } from "../../../schemas/w8Ben";
import { useDispatch } from "react-redux";
import { W8_state } from "../../../Redux/Actions";
import InfoIcon from "@mui/icons-material/Info";
import Declaration from "../../reusables/Declaration";
import { useNavigate } from "react-router-dom";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreadCrumbComponent from "../../reusables/breadCrumb";
export default function Penalties(props: any) {
  const history = useNavigate()
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const [showRecoverSection, setShowRecoverSection] = useState(false);

    const toggleRecoverSection = () => {
      setShowRecoverSection(true);
    };
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  
   
  const dispatch = useDispatch();
  const obValues = JSON.parse(localStorage.getItem("formSelection") || '{}')
  const initialValue = {
    signedBy: "",
    question:"",
    confirmationCode: "",
    date: obValues.date,
    isAgreeWithDeclaration: false,
  };
  const [toolInfo, setToolInfo] = useState("");

  return (
    <>
    <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValue}
        validationSchema={partCertiSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            W8_state(values, () => {
              history("/Submit")
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
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
       <section
    className="inner_content"
    style={{ backgroundColor: "#0c3d69", marginBottom: "10px" ,height:"100%"}}
  >
     <div className="overlay-div">
        <div className="overlay-div-group">
          <div className="viewInstructions">View Instructions</div>
          <div className="viewform">View Form</div>
          <div className="helpvideo">
            <a
              href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-"
              target="popup"
              onClick={() =>
                window.open(
                  "https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-",
                  "name",
                  "width=600,height=400"
                )
              }
            >
              Help Video
            </a>
          </div>
        </div>
      </div>
     <div className="row w-100 h-100">
     
     <div className="col-4">
          <div style={{ padding: "20px 0px",height:"100%" }}>
            <BreadCrumbComponent breadCrumbCode={1253} formName={2}/>
          
      </div>
          </div>
          <div className="col-8 mt-3" > 
      <div style={{ padding: "10px" }}>
      <div style={{ width: "100%" ,backgroundColor:"#fff",marginBottom:"8rem"}}>
     <Typography
          align="left"
          style={{ margin: "10px", fontSize: "27px", fontWeight: "550" }}
        >
          Part II Certification<span style={{ color: "red" }}>*</span>
        </Typography>
        <Typography
          align="left"
          style={{ margin: "10px", fontSize: "27px", fontWeight: "550" }}
        >
          W-9 Electronic Substitute Form Statement
        </Typography>
        <Typography
          align="left"
          style={{ margin: "10px", fontSize: "17px", color: "grey" }}
        >
          The Internal Revenue Service does not require your consent to any
          provisions of this document other than the certifications required to
          avoid backup withholding.
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
                            <>{console.log(errors,"4454545")}</>
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

                      <Input
                       className="inputTextField"
                        id="outlined"
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
                        <Input
                        className="inputTextField"
                        id="outlined"
                        fullWidth
                          name="confirmationCode"
                          value={values.confirmationCode}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.confirmationCode && errors.confirmationCode
                          )}
                          type="password"
                          
                         
                        />
                        <span
                        onClick={toggleRecoverSection}
                          style={{
                            fontSize: "16px",
                            color: "blue",
                            marginLeft: "10px",
                            cursor:"pointer"
                          }}
                        >
                          Recover Password
                        </span>
                        <p className="error">{errors.confirmationCode}</p>
                      </div>
                    </div>
                  </div>
                  {showRecoverSection &&(<div style={{margin:"10px"}}>
  <Typography align="left" style={{fontWeight:"bold"}}>
  Electronic Signature Confirmation Code Recovery
  </Typography>
  <Typography style={{fontSize:"14px"}}>
  To recover your Confirmation Code, please type in your security word below. Select the 'Hint?' if you need a reminder of your security word.
  </Typography>

  <div className="d-flex my-3 col-8">
    <Typography className="my-2 col-4" style={{fontWeight:"bold"}}>Security Word</Typography>
    <TextField className="col-4"
                        style={{
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "3.5rem",
                          width: "50%",
                        }}
                        fullWidth
                        type="text"
                        name="signedBy"
                        
                      />

  </div>
  <div className="d-flex my-3 col-8">
    <Link className="my-2 col-4" onClick={()=>{setFieldValue("question", obValues.securityQuestion.question)}}>Hint?</Link>
    <TextField className=" col-4"
                        style={{
                         color:"black !important",
                          height: "3.47rem",
                          width: "50%",
                          backgroundColor:"#e3e6e4"
                        }}
                        fullWidth
                        type="text"
                        disabled
                        value={values.question}
                        
                        
                      />

  </div>
  <div className="d-flex my-3 col-8 ">
    <Typography className="my-2 col-4" style={{fontWeight:"bold"}}>Your Confirmation Code</Typography>
    <TextField className="col-4"
                        style={{
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "3.47rem",
                          width: "50%",
                          backgroundColor:"#e3e6e4"
                        }}
                        fullWidth
                        disabled
                        type="text"
                       
                        value={values.confirmationCode}
                      />

  </div>
  <div className="d-flex my-3 col-12 " style={{ justifyContent: 'center' }}>
  <Typography align="center" style={{ marginTop: '20px' }}>
                <Button
                  style={{ fontSize: '12px' }}
                  size="small"
                  type="submit"
                  // onClick={()=>(
                    // history("/Certificates")
                  // )}
                  variant="contained"
                >
                  OK
                </Button>
              </Typography>

  </div>
</div>)}


                  <div
                    className="row"
                    style={{
                      margin: "10px",

                      marginTop: "20px",
                    }}
                  >
                    <div className="col-12 col-md-6 p-0">
                      <Typography align="left" style={{ padding: "0px" }}>
                        <Typography className="date"style={{ fontSize: "15px" }}>
                          Date
                        </Typography>
                        {/* <TextField */}
                          <FormControl style={{ width: "100%" }}>
                          <Input
                        className="inputTextField"
                        id="outlined"
                        fullWidth
                          name="dob"
                          
                         
                          value={
                            new Date().toLocaleDateString('en-US', {
                              month: '2-digit',
                              day: '2-digit',
                              year: 'numeric',
                            })
                          }
                          onBlur={handleBlur}
                          
                          
                          disabled
                        />
                        
                          </FormControl>
                         
                        {/* /> */}
                        {/* <p className="error">{errors.date}</p> */}
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
                        
                      }}
                    >
                      Please "check" box to confirm your acceptance with the
                      above declarations{" "} <span>
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

     </div>
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
            // onClick={() => {
            //   setOpen2(true);
            // }}
            variant="contained"
            style={{ color: "white" ,marginLeft: "15px"}}
          >
            View Form
          </Button>

          <Button
           type="submit"
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
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "black",
              marginTop: "10px",
              marginBottom: "20px",
            }}
           onClick={()=>{
            history("/US_Purposes/Back/Exemption/Tax/Certificates")
           }}
            
          >
            Back
          </Button>
        </Typography>
   
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
