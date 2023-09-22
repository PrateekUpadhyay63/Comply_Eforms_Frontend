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
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { claimSchema } from "../../../../../schemas/w8Ben";
import { W8_state } from "../../../../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function FCTA_Reporting(props: any) {
  const history = useNavigate();
  const [report, setReport] = useState<string>("");
  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport((event.target as HTMLInputElement).value);
  };
  const [toolInfo, setToolInfo] = useState("");
  const dispatch = useDispatch();

  return (
    <section
      className="inner_content"
      style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
    >
      <div style={{ padding: "20px" }}>
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
