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
import checksolid from "../../../assets/img/check-solid.png";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import BreadCrumbComponent from "../../reusables/breadCrumb";
import { useNavigate } from "react-router-dom";
import { TinSchema } from "../../../schemas/w8ECI";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Tin(props: any) {
  const obValues = JSON.parse(localStorage.getItem("agentDetails") || "{}");
  const initialValue = {
    streetNumberName: obValues.permanentResidentialStreetNumberandName,
    eciUsTinTypeId: obValues.usTinTypeId,
    eciUsTin: obValues.usTin,
    aptSuite: obValues.permanentResidentialAptSuite,
    cityTown: obValues.permanentResidentialCityorTown,
    stateProvinceId: obValues.permanentResidentialStateorProvince,
    zipPostalCode: obValues.permanentresidentialzippostalcode,
  };
  const history = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [toolInfo, setToolInfo] = useState("");

  const onChangeSingle = (e:any,setFieldValue:any) => {
    console.log(e.target.value)
    if(e.target.value==2){
      setFieldValue('eciUsTin', obValues.usTin)
    }
    else {
      setFieldValue('eciUsTin', "")
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={TinSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          history("/W-8ECI/Tax_Purpose");
          console.log(values);
        }}
      >
        {({
          errors,
          // touched,
          // handleBlur,
          values,
          handleSubmit,
          handleChange,
          isSubmitting,
          setFieldValue,
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
                  <div style={{ padding: "0px 0px", height: "100%" }}>
                    <BreadCrumbComponent breadCrumbCode={1202} formName={4} />
                  </div>
                </div>
                <div className="col-8 mt-3">
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
                              U.S. TIN Type
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
                              name="eciUsTinTypeId"
                              id="Income"
                              defaultValue={0}
                              
                              onChange={(e)=>{handleChange(e);onChangeSingle(e,setFieldValue)}}
                              // onBlur={handleBlur}
                              value={values.eciUsTinTypeId}
                            >
                              <option value={0}>-Select-</option>
                              <option value={2}>SSN/ITIN</option>
                              <option value={3}>U.S. TIN not applicable</option>
                              <option value={4}>U.S. TIN not available</option>
                            </select>
                            <p className="error">
                              {errors.eciUsTinTypeId?.toString()}
                            </p>
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
                              // onBlur={handleBlur}
                              error={Boolean(errors.eciUsTin)}
                              value={values.eciUsTin}
                            />
                            {/* <p className="error">{errors.eciUsTin}</p> */}
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
                          Please Provide your Business Address in the United
                          States
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
                              placeholder="Enter Street Number and Name"
                              onChange={handleChange}
                              // onBlur={handleBlur}
                              error={Boolean(errors.streetNumberName)}
                              value={values.streetNumberName}
                            />
{errors.streetNumberName ? <p className="error">{errors.streetNumberName as string}</p> : null}
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
                              City or Town:{" "}
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
                              name="cityTown"
                              placeholder="Enter City or Town"
                              onChange={handleChange}
                              // onBlur={handleBlur}
                              error={Boolean(errors.cityTown)}
                              value={values.cityTown}
                            />
                            {errors.cityTown ? <p className="error">{errors.cityTown as string}</p> : null}
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
                              // onBlur={handleBlur}
                              onChange={handleChange}
                              error={Boolean(errors.stateProvinceId)}
                            />
                            {errors.stateProvinceId ? <p className="error">{errors.stateProvinceId as string}</p> : null}
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
                              // onBlur={handleBlur}
                              error={Boolean(errors.zipPostalCode)}
                              value={values.zipPostalCode}
                            />
                            {errors.zipPostalCode ? <p className="error">{errors.zipPostalCode as string}</p> : null}
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
                          onClick={() => {
                            history("/Certificates");
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
    </>
  );
}
