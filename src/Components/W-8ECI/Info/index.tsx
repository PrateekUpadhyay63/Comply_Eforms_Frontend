import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Accordion,
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Link,
  Checkbox,
  TextField,
  RadioGroup,
  Radio,
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { TinSchema } from "../../../schemas/w8ECI";

export default function Tin(props: any) {
  const initialValue = {
    streetNumberName: "",
    eciUsTinTypeId: 0,
    eciUsTin: "",
    aptSuite: "",
    cityTown: "",
    stateProvinceId: "",
    zipPostalCode: "",
  };
  const history = useNavigate();

  const [toolInfo, setToolInfo] = useState("");
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={TinSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          history("/W-8ECI/Tax_Purpose");
          console.log(values);
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
              className="inner_ncontent"
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
                  <Typography
                    align="left"
                    style={{
                      margin: "10px",
                      fontSize: "28px",
                      fontWeight: "550",
                    }}
                  >
                    ECI Mandatory Information
                  </Typography>
                  <Typography
                    align="left"
                    style={{ margin: "10px", fontSize: "18px" }}
                  >
                    Please Provide your U.S. TIN
                  </Typography>

                  <div>
                    <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                        justifyContent: "space-between",
                      }}
                      className="row col-12"
                    >
                      <div className="col-4">
                        <Typography>
                          U.S. TIN Type<span style={{ color: "red" }}>*</span>
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
                          name="eciUsTinTypeId"
                          id="Income"
                          defaultValue={1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.eciUsTinTypeId}
                        >
                          <option value={1}>-Select-</option>
                          <option value={2}>SSN/ITIN</option>
                          <option value={3}>U.S. TIN not applicable</option>
                          <option value={4}>U.S. TIN not available</option>
                        </select>
                        <p className="error">{errors.eciUsTinTypeId}</p>
                      </div>

                      <div className="col-4">
                        <Typography>
                          U.S. TIN <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <Input
                          disabled={
                            values.eciUsTinTypeId == 3 ||
                            values.eciUsTinTypeId == 4
                          }
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          id="outlined"
                          name="eciUsTin"
                          placeholder="Enter U.S. TIN"
                          // onKeyDown={(e)=>formatTin(e,values)}
                          onChange={handleChange}
                          inputProps={{ maxLength: 11 }}
                          onBlur={handleBlur}
                          error={Boolean(touched.eciUsTin && errors.eciUsTin)}
                          value={values.eciUsTin}
                        />
                        <p className="error">{errors.eciUsTin}</p>
                      </div>
                      <div className="col-4"></div>
                    </div>
                    <Typography
                      align="left"
                      style={{
                        fontSize: "18px",
                        marginLeft: "1.3rem",
                        marginTop: "2rem",
                      }}
                    >
                      Please Provide your Business Address in the United States
                    </Typography>
                    <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                        justifyContent: "space-between",
                      }}
                      className="row col-12"
                    >
                      <div className="col-4">
                        <Typography>
                          Street Number and Name:{" "}
                          <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <Input
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          id="outlined"
                          name="streetNumberName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.streetNumberName && errors.streetNumberName
                          )}
                          value={values.streetNumberName}
                        />

                        <p className="error">{errors.streetNumberName}</p>
                      </div>

                      <div className="col-4">
                        <Typography>Apt/Suite: </Typography>
                        <Input
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          id="outlined"
                          name="aptSuite"
                          placeholder="Enter Apt/Suite"
                          onChange={handleChange}
                          value={values.aptSuite}
                        />
                      </div>
                      <div className="col-4">
                        <Typography>
                          City or Town: <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <Input
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          id="outlined"
                          name="cityTown"
                          placeholder="Enter City or Town"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.cityTown && errors.cityTown)}
                          value={values.cityTown}
                        />
                        <p className="error">{errors.cityTown}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                        justifyContent: "space-between",
                      }}
                      className="row col-12"
                    >
                      <div className="col-4">
                        <Typography>
                          State or Province:
                          <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <Input
                          // disabled={
                          //   values.stateProvinceId == 0
                          // }
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          // id="outlined"
                          name="stateProvinceId"
                          placeholder="Enter State or Province"
                          type="text"
                          value={values.stateProvinceId}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.stateProvinceId && errors.stateProvinceId
                          )}
                        />
                        <p className="error">{errors.stateProvinceId}</p>
                      </div>

                      <div className="col-4">
                        <Typography>
                          Zip or Postal Code:
                          <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <Input
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          id="outlined"
                          name="zipPostalCode"
                          placeholder="Enter Zip or Postal Code"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.zipPostalCode && errors.zipPostalCode
                          )}
                          value={values.zipPostalCode}
                        />
                        <p className="error">{errors.zipPostalCode}</p>
                      </div>
                      <div className="col-4"></div>
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
                      variant="contained"
                      style={{ color: "white", marginLeft: "15px" }}
                    >
                      View Form
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
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
}
