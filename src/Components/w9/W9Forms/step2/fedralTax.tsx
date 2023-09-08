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
  Select,
  MenuItem
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { firstStepSchema ,firstStepBusinessSchema} from "../../../../schemas";
import "./index.scss";
export default function Fedral_tax(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;
  const initialValue = {
    firstName: "",
    lastName: "",
    businessName: "",
    federalTaxClassificationId:"1",
  };
 
  return (
    <>
            <Paper className="col-md-9 col-8">
              <Formik
                initialValues={initialValue}
                enableReinitialize
                validationSchema={selectedTaxClassification==257 ? firstStepSchema : firstStepBusinessSchema}       // Uncomment after testing ,this is validation Schema
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  console.log(values, ":STEP1 VALUES");
                  setselectedContinue({
                    step1: false,
                    step2: true,
                    step3: false,
                    step4: false,
                    step5: false,
                    step6: false,
                  });
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
                    <div>
                      <div>
                        <Typography align="left" style={{ margin: "10px" }}>
                          <div
                          className="row"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                            className="col-md-6 col-12"
                              align="left"
                              style={{
                                color: "black",
                                fontSize: "20px",
                                fontWeight: "550",
                              }}
                            >
                              Select your status for U.S. tax purposes
                            </Typography>
                            <Typography align="right"     className="col-md-6 col-12">
                              <Button
                                style={{
                                  color: "black",
                                  backgroundColor: "#ffc107",
                                  fontWeight: "550",
                                  justifyContent: "flex-end",
                                }}
                              >
                                Federal Tax Classification Guide
                              </Button>
                            </Typography>
                          </div>
                          <div className="row">
                          <div
                            className="col-12 col-md-6 mt-3"
                            style={{ marginTop: "20px" }}
                          >
                            <Typography
                              align="left"
                              className="d-flex w-100 "
                              style={{ fontSize: "13px" }}
                            >
                              Federal Tax Classification
                              <span style={{ color: "red" }}>*</span>
                              <Info
                                style={{ color: "#ffc107", fontSize: "13px" }}
                              />
                            </Typography>

                            <FormControl className="w-100">
                              <Select
                                onChange={(e)=>{handleChange(e);handleTaxClassificationChange(e)}}
                                onBlur={handleBlur}
                                error={Boolean(touched.federalTaxClassificationId && errors.federalTaxClassificationId)}
                                name="federalTaxClassificationId"
                                value={values.federalTaxClassificationId}
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "30px",
                                  width: "100%",
                                }}
                              >
                                <MenuItem  value={""}>-Select-</MenuItem >
                                <MenuItem  value={257}>Individual</MenuItem >
                                <MenuItem  value={258}>
                                  Individual/sole Propritor
                                </MenuItem >
                                <MenuItem  value={259}>
                                  Limited Liability Company
                                </MenuItem >
                              </Select>
                            </FormControl>
                          </div>
                          </div>
                          {selectedTaxClassification != "" ? (
                            <div style={{ marginTop: "20px", display: "flex" }} className="row">
                              <div className="col-md-6 col-12">
                                <Typography
                                  align="left"
                                  className="d-flex w-100 "
                                  style={{ fontSize: "13px" }}
                                >
                                  First Name
                                  <span style={{ color: "red" }}>*</span>
                                  <Info
                                    style={{
                                      color: "#ffc107",
                                      fontSize: "13px",
                                    }}
                                  />
                                </Typography>

                                <FormControl className="w-100">
                                  <TextField                                    
                                    autoComplete="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.firstName && errors.firstName}
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    name="firstName"
                                className="inputClass"
                                    value={values.firstName}
                                    // style={{
                                    //   width: "150%",
                                    // //   border: " 1px solid #d9d9d9 ",
                                    //   height: " 36px",
                                    //   lineHeight: "36px ",
                                    //   background: "#fff ",
                                    //   fontSize: "13px",
                                    //   color: " #000 ",
                                    //   fontStyle: "normal",
                                    //   borderRadius: "1px",
                                    //   padding: " 0 10px ",
                                    // }}
                                  />
                                </FormControl>
                              </div>
                              <div className="col-md-6 col-12">
                                <Typography
                                  align="left"
                                  className="d-flex w-100 "
                                  style={{ fontSize: "13px" }}
                                >
                                  Last Name
                                </Typography>

                                <FormControl className="w-100">
                                  <TextField
                                autoComplete="lastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.lastName && errors.lastName}
                                error={Boolean(touched.lastName && errors.lastName)}
                                name="lastName"
                                value={values.lastName}
                                    // style={{
                                    //   width: "150%",
                                    // //   border: " 1px solid #d9d9d9 ",
                                    //   height: " 36px",
                                    //   lineHeight: "36px ",
                                    //   background: "#fff ",
                                    //   fontSize: "13px",
                                    //   color: " #000 ",
                                    //   fontStyle: "normal",
                                    //   borderRadius: "1px",
                                    //   padding: " 0 10px ",
                                    // }}
                                    className="inputClass"
                                  />
                                </FormControl>
                              </div>
                            </div>
                          ) : null}

                          {selectedTaxClassification == "258" || selectedTaxClassification == "259" ? (
                            <>
                            <div className="row">

                              <div className="col-md-12 col-12">
                                <Typography
                                  align="left"
                                  className="d-flex w-100 "
                                  style={{
                                    fontSize: "13px",
                                    marginTop: "15px",
                                  }}
                                >
                                  Business Name or disregarded entity name if
                                  different
                                </Typography>

                                <FormControl className="w-100">
                                  <TextField
                                    name="businessName"
                                    fullWidth
                                    value={values.businessName}
                                    onChange={handleChange}
                                    autoComplete="businessName"
                                    type="text"
                                    placeholder="Business Name"
                                    onBlur={handleBlur}
                                    helperText={touched.businessName && errors.businessName}
                                    error={Boolean(touched.businessName && errors.businessName)}
                                    // style={{
                                    //   width: "200%",
                                    // //   border: " 1px solid #d9d9d9 ",
                                    //   height: " 36px",
                                    //   lineHeight: "36px ",
                                    //   background: "#fff ",
                                    //   fontSize: "13px",
                                    //   color: " #000 ",
                                    //   fontStyle: "normal",
                                    //   borderRadius: "1px",
                                    //   padding: " 0 10px ",
                                    // }}
                                    className="inputClassFull"
                                  />
                                </FormControl>
                              </div>
                            </div>
                            </>
                          ) : null}
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
                        type="submit"
                        disabled={isSubmitting}
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
                              step1: true,
                              step2: false,
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
                    </div>
                  </Form>
                )}
              </Formik>
            </Paper>
          </>
  );
}
