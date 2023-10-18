import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Paper,
  Checkbox,
  Tooltip,
  TextField,
  RadioGroup,
  Radio,
  Link,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { Info } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./index.scss";
import checksolid from "../../../../../assets/img/check-solid.png";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { W8_state } from "../../../../../Redux/Actions";
import { StatusSchema } from "../../../../../schemas/w8Ben";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BreadCrumbComponent from "../../../../reusables/breadCrumb";

export default function Factors() {
  const initialValue = {
    isHeldUSCitizenship: "",
    countryOfCitizenship: "",
    dob: "",
    isTaxationUSCitizenOrResident: "",
    isPermamnentResidentCardHolder: "",
    isHoldDualCitizenshipStatus: false,
    isHoldDualCitizenshipIncludeUSCitizenship: false,
    // isRenouncedCitizenship: false,
    // dateRenouncedUSCitizenship: "",
    // renouncementProof: "",
    isTaxLiabilityJurisdictions: false,
    countryTaxLiability: "",
    taxReferenceNumber: "",
    isTINFormatNotAvailable: false,
    isPresentAtleast31Days: false,
  };

  const dispatch = useDispatch();
  const history = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const W8Data = useSelector((state: any) => state.w8Data);

  const [tax, setTax] = useState<string>("");

  const handleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value);
  };

  const [tax1, setTax1] = useState<string>("");

  const handleTaxChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax1(event.target.value);
  };
  const [renounced, setRenounced] = useState<string>("");

  const handleRenouncedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRenounced(event.target.value);
  };

  const [individual, setIndividual] = useState<string>("");

  const handleIndividualChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIndividual(event.target.value);
  };
  const [citizenship, setCitizenship] = useState<string>("");

  const handleCitizenshipChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCitizenship(event.target.value);
  };

  const [toolInfo, setToolInfo] = useState("");
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
          <div style={{ padding: "20px 0px",height:"100%",marginTop:"20px" }}>
          <BreadCrumbComponent breadCrumbCode={1207} formName={2}/>

      </div>
      </div>
      <div className="col-8">
      <div style={{ padding: "20px" }}>
        <Paper style={{ padding: "18px" }}>
          <Formik
            initialValues={initialValue}
            enableReinitialize
            validationSchema={StatusSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values, ":STEP1 VALUES");
              dispatch(
                W8_state(values, () => {
                  console.log(W8Data, "Done");
                  history("/W-8BEN/Declaration/US_Tin");
                })
              );
              history("/W-8BEN/Declaration/US_Tin");
              // uploadNews(dispatch, values, navigate);
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
                <>{console.log(errors, values, "W8")}</>
                <div style={{ margin: "10px" }}>
                  <Typography
                    align="left"
                    style={{ marginTop: "10px", fontSize: "38px" }}
                  >
                    United States Citizenship Status
                    <span>
                      <Tooltip
                        style={{ backgroundColor: "black", color: "white" }}
                        title={
                          <>
                            <Typography color="inherit">
                              United States citizenship status
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
                            fontSize: "16px",
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
                          If you are an alien (not a U.S. citizen), you are
                          considered a non resident alien unless you meet one of
                          two tests. You are a resident alien of the United
                          States for tax purposes if you meet either the green
                          card test or the substantial presence test for the
                          calendar year (January 1-December 31).
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          Certain rules exist for determining the Residency
                          Starting and Ending Dates for aliens.
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          In some cases aliens are allowed to make elections
                          which override the green card test and the substantial
                          presence test, as follows:
                        </Typography>

                        <Typography style={{ marginTop: "20px" }}>
                          - Non-resident Spouse Treated as a Resident
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          - Closer Connection to a Foreign Country
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          - Effect of Tax Treaties
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          You can be both a nonresident alien and a resident
                          alien during the same tax year. This usually occurs in
                          the year you arrive or depart from the United States.
                          If so, you may elect to be treated as a Dual Status
                          Alien for this taxable year and a Resident Alien for
                          the next taxable year if you meet certain tests.
                          (Refer to section 'Dual-Status Aliens' - 'First Year
                          Choice' in Publication 519, U.S. Tax Guide for
                          Aliens).
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          A resident alien who is required to establish their
                          U.S. residency for the purposes of claiming a tax
                          treaty benefit with a foreign country should refer to
                          Certification of U.S. Residency for Tax Treaty
                          Purposes.
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          Ref: EH162
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
                      fontSize: "19px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    Was the individual born in the United States and held U.S.
                    citizenship?<span style={{ color: "red" }}>*</span>
                  </Typography>

                  <FormControl>
                    <RadioGroup
                      row
                      defaultValue="No"
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={values.isHeldUSCitizenship}
                      onChange={handleChange}
                      id="isHeldUSCitizenship"
                    >
                      <FormControlLabel
                        control={<Radio />}
                        value="Yes"
                        name="isHeldUSCitizenship"
                        label="Yes"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        value="No"
                        name="isHeldUSCitizenship"
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Divider className="dividr" />

                  {values.isHeldUSCitizenship == "Yes" ? (
                    <>
                       <Typography
                        style={{
                          fontSize: "19px",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Date of Birth (mm/dd/yyyy)
                      </Typography>
                      <FormControl className="form">
                        <input className="input" type="date" />
                      </FormControl>
                      <Divider className="dividr" />
                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Is the individual subject to taxation as a U.S. citizen
                        or resident alien?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          id="isTaxationUSCitizenOrResident"
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          value={values.isTaxationUSCitizenOrResident}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            control={<Radio />}
                          
                            name="isTaxationUSCitizenOrResident"
                            label="Yes"
                          />
                          <FormControlLabel
                            control={<Radio />}
                            
                            name="isTaxationUSCitizenOrResident"
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />

                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Is the individual a Permanent Resident Card Holder
                        (Green Card)?<span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          id="isPermamnentResidentCardHolder"
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          value={values.isPermamnentResidentCardHolder}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            control={<Radio />}
                          
                            name="isPermamnentResidentCardHolder"
                            label="Yes"
                          />
                          <FormControlLabel
                            control={<Radio />}
                            
                            name="isPermamnentResidentCardHolder"
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />
                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Does the individual hold dual citizenship status?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          id="isHoldDualCitizenshipStatus"
                          value={values.isHoldDualCitizenshipStatus}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            control={<Radio />}
                            value="Yes"
                            name="isHoldDualCitizenshipStatus"
                            label="Yes"
                          />
                          <FormControlLabel
                            control={<Radio />}
                            value="No"
                            name="isHoldDualCitizenshipStatus"
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />
                      {citizenship === "Yes" ? (
                        <>
                          <Typography
                            style={{ fontSize: "19px", marginTop: "10px" }}
                          >
                            Does or did the dual citizenship include U.S.
                            citizenship? <span style={{ color: "red" }}>*</span>
                          </Typography>

                          <FormControl>
                            <RadioGroup
                              id="isHoldDualCitizenshipIncludeUSCitizenship"
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              value={
                                values.isHoldDualCitizenshipIncludeUSCitizenship
                              }
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                control={<Radio />}
                                value="Yes"
                                name="isHoldDualCitizenshipIncludeUSCitizenship"
                                label="Yes"
                              />
                              <FormControlLabel
                                control={<Radio />}
                                value="No"
                                name="isHoldDualCitizenshipIncludeUSCitizenship"
                                label="No"
                              />
                            </RadioGroup>
                          </FormControl>
                          <Divider className="dividr" />
                        </>
                      ) : (
                        ""
                      )}

                      {/* <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Has the individual formally renounced U.S. citizenship?{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Typography> */}

                      {/* <FormControl>
                        <RadioGroup
                          id="isRenouncedCitizenship"
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          value={values.isRenouncedCitizenship}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            control={<Radio />}
                            value="Yes"
                            name="isRenouncedCitizenship"
                            label="Yes"
                          />
                          <FormControlLabel
                            control={<Radio />}
                            value="No"
                            name="isRenouncedCitizenship"
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" /> */}

                      {/* {renounced === "Yes" ? (
                        <>
                          <Typography
                            style={{ fontSize: "19px", marginTop: "10px" }}
                          >
                            Please enter the date U.S. citizenship was
                            renounced: <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <FormControl className="form">
                            <TextField
                              autoComplete="dateRenouncedUSCitizenship"
                              type="date"
                              placeholder="date U.S. citizenship was
                          renounced:"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              helperText={
                                touched.dateRenouncedUSCitizenship &&
                                errors.dateRenouncedUSCitizenship
                              }
                              error={Boolean(
                                touched.dateRenouncedUSCitizenship &&
                                  errors.dateRenouncedUSCitizenship
                              )}
                              name="dateRenouncedUSCitizenship"
                              className="inputClass"
                              value={values.dateRenouncedUSCitizenship}
                            />
                          </FormControl>
                          <Divider className="dividr" />
                          <Typography
                            style={{ fontSize: "19px", marginTop: "10px" }}
                          >
                            Please attach proof of formal renouncement:
                          </Typography>
                          <div style={{ marginTop: "10px" }}>
                            <TextField
                              autoComplete="renouncementProof"
                              type="file"
                              placeholder="proof of formal renouncement"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              helperText={
                                touched.renouncementProof &&
                                errors.renouncementProof
                              }
                              error={Boolean(
                                touched.renouncementProof &&
                                  errors.renouncementProof
                              )}
                              name="renouncementProof"
                              value={values.renouncementProof}
                            />
                          </div>
                          <Divider className="dividr" />
                        </>
                      ) : (
                        ""
                      )} */}

                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Does the individual the submission represents have tax
                        liability in any other jurisdictions?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          id="isTaxLiabilityJurisdictions"
                          value={values.isTaxLiabilityJurisdictions}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            control={<Radio />}
                            value="Yes"
                            name="isTaxLiabilityJurisdictions"
                            label="Yes"
                          />
                          <FormControlLabel
                            control={<Radio />}
                            value="No"
                            name="isTaxLiabilityJurisdictions"
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />

                      {tax === "Yes" ? (
                        <>
                          <Typography>
                            Please select the country where the individual has a
                            tax liability:
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <FormControl className="form">
                            <select></select>
                          </FormControl>
                          <Divider className="dividr" />

                          <Typography>
                            Please enter the tax reference number:
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <div className="d-flex">
                            <FormControl className="form">
                              <input className="input" />
                            </FormControl>
                            <div className="d-flex">
                              <Checkbox required />
                              <div className="mt-2">
                                TIN format not available
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Has the individual been physically present in the United
                        States on at least 31 days during the current calendar
                        year?<span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            className="label"
                            value="male"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>

                      <Divider className="dividr" />
                    </>
                  ) : values.isHeldUSCitizenship == "No" ?(
                    <>
                      <Typography>
                        Country of citizenship of the individual?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <FormControl className="form">
                        <select></select>
                      </FormControl>

                      <Divider className="dividr" />
                      <Typography
                        style={{
                          fontSize: "19px",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Date of Birth (mm/dd/yyyy)
                      </Typography>
                      <FormControl className="form">
                        <input className="input" type="date" />
                      </FormControl>

                      <Divider className="dividr" />
                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Is the individual subject to taxation as a U.S. citizen
                        or resident alien?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            className="label"
                            value="male"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />
                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Is the individual a Permanent Resident Card Holder
                        (Green Card)?<span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            className="label"
                            value="male"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />
                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Does the individual hold dual citizenship status?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          value={citizenship}
                          onChange={handleCitizenshipChange}
                        >
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            className="label"
                            value="No"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />
                      {citizenship === "Yes" ? (
                        <>
                          <Typography
                            style={{ fontSize: "19px", marginTop: "10px" }}
                          >
                            Does or did the dual citizenship include U.S.
                            citizenship? <span style={{ color: "red" }}>*</span>
                          </Typography>

                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Yes"
                              />
                              <FormControlLabel
                                className="label"
                                value="male"
                                control={<Radio />}
                                label="No"
                              />
                            </RadioGroup>
                          </FormControl>
                          <Divider className="dividr" />
                        </>
                      ) : (
                        ""
                      )}

                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Does the individual the submission represents have tax
                        liability in any other jurisdictions?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          value={tax}
                          onChange={handleTaxChange}
                        >
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            className="label"
                            value="No"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />

                      {tax === "Yes" ? (
                        <>
                          <Typography>
                            Please select the country where the individual has a
                            tax liability:
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <FormControl className="form">
                            <select>
                              
                            </select>
                          </FormControl>
                          <Divider className="dividr" />

                          <Typography>
                            Please enter the tax reference number:
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <div className="d-flex">
                            <FormControl className="form">
                              <input className="input" />
                            </FormControl>
                            <div className="d-flex">
                              <Checkbox />
                              <div className="mt-2">
                                TIN format not available
                              </div>
                            </div>
                          </div>

                          {/* <Divider className="dividr" />
                          <Typography
                            style={{ fontSize: "19px", marginTop: "10px" }}
                          >
                            Does the individual the submission represents have
                            tax liability in any other jurisdictions?
                            <span style={{ color: "red" }}>*</span>
                          </Typography> */}

                          {/* <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              value={tax1}
                              onChange={handleTaxChange1}
                            >
                              <FormControlLabel
                                value="Yes"
                                control={<Radio />}
                                label="Yes"
                              />
                              <FormControlLabel
                                className="label"
                                value="No"
                                control={<Radio />}
                                label="No"
                              />
                            </RadioGroup>
                          </FormControl> */}
                          {/* <Divider className="dividr" /> */}
                          {/* 
                          {tax1 === "Yes" ? (
                            <>
                              <Typography>
                                Please select the country where the individual
                                has a tax liability:
                                <span style={{ color: "red" }}>*</span>
                              </Typography>
                              <FormControl className="form">
                                <select></select>
                              </FormControl>
                              <Divider className="dividr" />

                              <Typography>
                                Please enter the tax reference number:
                                <span style={{ color: "red" }}>*</span>
                              </Typography>
                              <div className="d-flex">
                                <FormControl className="form">
                                  <input className="input" />
                                </FormControl>
                                <div className="d-flex">
                                  <Checkbox />
                                  <div className="mt-2">
                                    TIN format not available
                                  </div>
                                </div>
                              </div>

                              <Divider className="dividr" />
                            </>
                          ) : (
                            ""
                          )} */}
                        </>
                      ) : (
                        ""
                      )}

                      <Typography
                        style={{ fontSize: "19px", marginTop: "10px" }}
                      >
                        Has the individual been physically present in the United
                        States on at least 31 days during the current calendar
                        year?<span style={{ color: "red" }}>*</span>
                      </Typography>

                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            className="label"
                            value="male"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Divider className="dividr" />
                    </>
                    
                  ):""}

                  {/* <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Is the individual subject to taxation as a U.S. citizen or resident alien?<span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" />



            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Is the individual a Permanent Resident Card Holder (Green Card)?<span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" />
            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Does the individual hold dual citizenship status? <span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" />
            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Has the individual formally renounced U.S. citizenship?<span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" />

            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Has the individual formally renounced U.S. citizenship?<span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl className="form">
              <input
                className="input"
                type="date"
              />
            </FormControl>
            <Divider className="dividr" />
            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Does the individual the submission represents have tax liability in any other jurisdictions?<span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" />

            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Please attach proof of formal renouncement:
            </Typography>
            <div style={{ marginTop: "10px" }}>
              <input style={{ fontSize: "22px" }} type="file" />
            </div>
            <Divider className="dividr" />

            <Typography style={{ fontSize: "19px", marginTop: "10px", marginBottom: "10px" }}>
              Was the individual born in the United States and held U.S. citizenship?<span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" />
            <Typography style={{ fontSize: "19px", marginTop: "10px" }}>
              Has the individual been physically present in the United States on at least 31 days during the current calendar year?<span style={{ color: "red" }}>*</span>
            </Typography>


            <FormControl >

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel className="label" value="male" control={<Radio />} label="No" />

              </RadioGroup>


            </FormControl>
            <Divider className="dividr" /> */}
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
                    history('/W-8BEN/Declaration')
                  }}
                    variant="contained"
                    size="large"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ marginRight: "5px" }}>
                      {" "}
                      <ArrowBackIcon />
                    </span>{" "}
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
