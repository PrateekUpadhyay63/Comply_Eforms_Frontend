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
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { firstStepSchema } from "../../../schemas";

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
  };
 
  return (
    <>
            <Paper style={{ marginLeft: "5px", width: "80%" }}>
              <Formik
                initialValues={initialValue}
                enableReinitialize
                validationSchema={firstStepSchema}
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
                    <>
                    {console.log(errors,values,"formssssss")}
                    </>
                    <div>

                      <div>
                        <Typography align="left" style={{ margin: "10px" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              align="left"
                              style={{
                                color: "black",
                                fontSize: "20px",
                                fontWeight: "550",
                              }}
                            >
                              Select your status for U.S. tax purposes
                            </Typography>
                            <Typography align="right">
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
                          <div
                            className="col-lg-3 col-6 col-md-3 mt-3"
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
                              <select
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "30px",
                                  width: "200%",
                                }}
                                name="permanentResidentialCountryId1"
                                id="Income"
                                defaultValue={1}
                                value={selectedTaxClassification}
                                onChange={handleTaxClassificationChange}
                              >
                                <option value="">-Select-</option>
                                <option value={257}>Individual</option>
                                <option value={258}>
                                  Individual/sole Propritor
                                </option>
                                <option value={258}>
                                  Limited Liability Company
                                </option>
                              </select>
                            </FormControl>
                          </div>
                          {selectedTaxClassification === "257" ? (
                            <div style={{ marginTop: "20px", display: "flex" }}>
                              <div>
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
                                    placeholder="Title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.firstName && errors.firstName}
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    name="firstName"
                                    value={values.firstName}
                                    style={{
                                      width: "150%",
                                      border: " 1px solid #d9d9d9 ",
                                      height: " 36px",
                                      lineHeight: "36px ",
                                      background: "#fff ",
                                      fontSize: "13px",
                                      color: " #000 ",
                                      fontStyle: "normal",
                                      borderRadius: "1px",
                                      padding: " 0 10px ",
                                    }}
                                  />
                                </FormControl>
                              </div>
                              <div style={{ marginLeft: "120px" }}>
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
                                placeholder="Title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.lastName && errors.lastName}
                                error={Boolean(touched.lastName && errors.lastName)}
                                name="lastName"
                                value={values.lastName}
                                    style={{
                                      width: "150%",
                                      border: " 1px solid #d9d9d9 ",
                                      height: " 36px",
                                      lineHeight: "36px ",
                                      background: "#fff ",
                                      fontSize: "13px",
                                      color: " #000 ",
                                      fontStyle: "normal",
                                      borderRadius: "1px",
                                      padding: " 0 10px ",
                                    }}
                                  />
                                </FormControl>
                              </div>
                            </div>
                          ) : null}

                          {selectedTaxClassification === "258" ? (
                            <>
                              <div
                                style={{ marginTop: "20px", display: "flex" }}
                              >
                                <div>
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
                                
                                      name="firstName"
                                      value={data.firstName}
                                      onChange={handleChange}
                                      style={{
                                        width: "150%",
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                    />
                                  </FormControl>
                                </div>
                                <div style={{ marginLeft: "120px" }}>
                                  <Typography
                                    align="left"
                                    className="d-flex w-100 "
                                    style={{ fontSize: "13px" }}
                                  >
                                    Last Name
                                  </Typography>

                                  <FormControl className="w-100">
                                    <TextField
                                
                                      name="lastName"
                                      value={data.lastName}
                                      onChange={handleChange}
                                      style={{
                                        width: "150%",
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                    />
                                  </FormControl>
                                </div>
                              </div>

                              <div>
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
                                    value={data.businessName}
                                    onChange={handleChange}
                                    style={{
                                      width: "200%",
                                      border: " 1px solid #d9d9d9 ",
                                      height: " 36px",
                                      lineHeight: "36px ",
                                      background: "#fff ",
                                      fontSize: "13px",
                                      color: " #000 ",
                                      fontStyle: "normal",
                                      borderRadius: "1px",
                                      padding: " 0 10px ",
                                    }}
                                  />
                                </FormControl>
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
