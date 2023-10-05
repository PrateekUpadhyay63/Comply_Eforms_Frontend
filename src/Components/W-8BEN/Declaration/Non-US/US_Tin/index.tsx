import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  FormControlLabel,
  Tooltip,
  Link,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { US_TINSchema } from "../../../../../schemas/w8Ben";
import { W8_state } from "../../../../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function Tin(props: any) {
  const history = useNavigate();
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;

  const [toolInfo, setToolInfo] = useState("");
  const dispatch = useDispatch();
  const initialValue = {
    usTinTypeId: 0,
    usTin: "",
    notAvailable: false,
    foreignTINCountry: "",
    foreignTIN: "",
    isFTINNotLegallyRequired: true,
    // tinisFTINNotLegallyRequired: true,
    // tinAlternativeFormate: true,
    isNotLegallyFTIN: true,
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
      <div style={{ padding: "20px" }}>
        <Paper style={{ padding: "18px" }}>
          <Formik
            initialValues={initialValue}
            enableReinitialize
            validationSchema={US_TINSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values, "vallllll");
              dispatch(
                W8_state(values, () => {
                  history("/W-8BEN/Declaration/US_Tin/Claim");
                })
              );
              history("/W-8BEN/Declaration/US_Tin/Claim");
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
                    fontSize: "23px",
                    fontWeight: "550",
                  }}
                >
                  Taxpayer Identification Number
                </Typography>

                <div>
                  <div
                    style={{
                      margin: "10px",
                      display: "flex",
                      marginTop: "25px",
                    }}
                    className="row"
                  >
                    <div className="col-lg-4 col-12">
                      <Typography>
                        U.S. TIN Type<span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  U.S. TIN Type Info
                                </Typography>
                                <a onClick={() => setToolInfo("basic")}>
                                  <Typography
                                    style={{
                                      cursor: "pointer",
                                      textDecorationLine: "underline",
                                    }}
                                    align="center"
                                  >
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
                              Please select a U.S. TIN type status from the
                              dropdown.
                            </Typography>

                            <Typography style={{ marginTop: "10px" }}>
                              If a TIN type is not available, ensure you select
                              the checkbox to the right of the field and provide
                              an explanation as to why it is not available in
                              the corresponding boxes at the bottom of the
                              screen.
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
                      <select
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                        name="usTinTypeId"
                        id="Income"
                        defaultValue={1}
                        onBlur={handleBlur}
                        value={values.usTinTypeId}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        <option value="">-Select-</option>
                        <option value={257}>United Kingdom</option>
                        <option value={258}>United States</option>
                      </select>
                      <p className="error">{errors.usTinTypeId}</p>
                    </div>

                    <div className="col-lg-4 col-12">
                      <Typography>U.S. TIN</Typography>
                      <Input
                        fullWidth
                        type="text"
                        name="usTin"
                        value={values.usTin}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.usTin && errors.usTin)}
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                      />
                      <p className="error">{errors.usTin}</p>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div style={{ marginTop: "27px" }}>
                        <Checkbox
                          value={values.notAvailable}
                          checked={values.notAvailable}
                          onChange={handleChange}
                          size="medium"
                          name="notAvailable"
                        />
                        <span style={{ fontSize: "18px" }}>
                          Not Available
                          {errors.notAvailable && touched.notAvailable ? (
                            <div>
                              <Typography color="error">
                                {errors.notAvailable}
                              </Typography>
                            </div>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      margin: "10px",
                      display: "flex",
                      marginTop: "25px",
                    }}
                    className="row"
                  >
                    <div className="col-lg-4">
                      <Typography>
                        Foreign TIN Country
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <select
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                        name="foreignTINCountry"
                        id="Income"
                        onBlur={handleBlur}
                        value={values.foreignTINCountry}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        <option value="">-Select-</option>
                        <option value={"US"}>United Kingdom</option>
                        <option value={"UK"}>United States</option>
                      </select>
                      <p className="error">{errors.foreignTINCountry}</p>

                      <div style={{ marginTop: "27px" }}>
                        <Checkbox
                          value={values.isFTINNotLegallyRequired}
                          checked={values.isFTINNotLegallyRequired}
                          onChange={handleChange}
                          size="medium"
                          name="isFTINNotLegallyRequired"
                        />
                        <span style={{ fontSize: "20px" }}>
                          Check if FTIN not legally required
                          {errors.isFTINNotLegallyRequired &&
                          touched.isFTINNotLegallyRequired ? (
                            <div>
                              <Typography color="error">
                                {errors.isFTINNotLegallyRequired}
                              </Typography>
                            </div>
                          ) : (
                            ""
                          )}
                          <span>
                            <Tooltip
                              style={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                              title={
                                <>
                                  <Typography color="inherit">
                                    U.S. TIN Type Info
                                  </Typography>
                                  <a onClick={() => setToolInfo("check")}>
                                    <Typography
                                      style={{
                                        cursor: "pointer",
                                        textDecorationLine: "underline",
                                      }}
                                      align="center"
                                    >
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
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <Typography>Foreign TIN </Typography>
                      <Input
                        fullWidth
                        type="text"
                        name="foreignTIN"
                        value={values.foreignTIN}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.foreignTIN && errors.foreignTIN)}
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                      />
                      <p className="error">{errors.foreignTIN}</p>
                    </div>
                  </div>
                </div>
                <Typography style={{ margin: "20px", fontSize: "20px" }}>
                  Do you wish to provide a further (or other) explanation why
                  you are not legally required to provide an FTIN?
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl style={{ marginLeft: "20px" }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    value={values.isNotLegallyFTIN}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      name="isNotLegallyFTIN"
                    />
                    <FormControlLabel
                      className="label"
                      value="No"
                      control={<Radio />}
                      label="No"
                      name="isNotLegallyFTIN"
                    />
                  </RadioGroup>
                  {errors.isNotLegallyFTIN && touched.isNotLegallyFTIN ? (
                    <div>
                      <Typography color="error">
                        {errors.isNotLegallyFTIN}
                      </Typography>
                    </div>
                  ) : (
                    ""
                  )}
                </FormControl>
                <div style={{ margin: "20px" }}>
                  <Typography style={{ fontSize: "25px", fontWeight: "550" }}>
                    Foreign TIN Provision – Reasonable Explanation
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "550",
                      marginTop: "15px",
                    }}
                  >
                    Reasonable Explanation Provision
                  </Typography>
                  <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                    You have not provided a Foreign Tax Identification Number,
                    FTIN, where one would generally be provided. The IRS
                    provides for a range of circumstances where it is considered
                    reasonable to not provide a FTIN, including but not limited
                    to:
                  </Typography>
                  <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                    <ul>
                      <li>
                        The account holder is resident of a jurisdiction that is
                        not listed in section 3 of Revenue Procedure 2017-46,
                        2017-43 I.R.B. 372, which may be further updated in
                        future published guidance;
                      </li>
                      <li>
                        The account holder is resident in a jurisdiction that
                        has been identified by the IRS on a list of
                        jurisdictions for which withholding agents are not
                        required to obtain foreign TINs;
                      </li>
                      <li>
                        The account holder is a government, international
                        organization, foreign central bank of issue, or resident
                        of a U.S. territory; or
                      </li>
                      <li>
                        You obtain a reasonable explanation for why the account
                        holder has not been issued a foreign TIN.
                      </li>
                    </ul>
                    <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                      Please select the appropriate explanation below, or where
                      none apply, please select, ‘Other/None of the above’ and
                      you will have the opportunity to provide a written
                      explanation.
                    </Typography>
                    <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                      Please note, treaty benefits, where they may otherwise
                      apply, may not be provided if you do not enter either a
                      U.S TIN or a Foreign TIN or provide an acceptable and
                      reasonable explanation. The recipient of the submission
                      document may need to obtain further information.
                    </Typography>
                  </Typography>
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
                    View Form
                  </Button>
                  <Button
                    variant="contained"
                    style={{ color: "white", marginLeft: "15px" }}
                    type="submit"
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
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
    </section>
  );
}
