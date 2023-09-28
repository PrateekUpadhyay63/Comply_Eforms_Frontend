import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { TaxPurposeSchema } from "../../../schemas/w8ECI";
export default function Fedral_tax(props: any) {
  const dispatch = useDispatch();
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
    federalTaxClassificationId: 0,
  };
  const [toolInfo, setToolInfo] = useState("");
  const history = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChangeAccodion =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [expandedState, setExpandedState] = React.useState<string | false>(
    "panel1"
  );

  const handleChangeAccodionState =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedState(newExpanded ? panel : false);
    };
  const W9Data = useSelector((state: any) => state.w9Data);
  return (
    <>
      <section
        className="inner_content"
        style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
      >
        <div style={{ padding: "20px" }}>
          <Paper style={{ padding: "18px" }}>
            <Formik
              initialValues={initialValue}
              validationSchema={TaxPurposeSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                history("/W-8ECI/Tax_Payer");
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
                  <div style={{ width: "100%" }}>
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
                              fontSize: "25px",
                              fontWeight: "550",
                            }}
                          >
                            Select your status for U.S. tax purposes
                          </Typography>
                        </div>
                        <div className="row">
                          <div
                            className="col-12 col-md-12 mt-3"
                            style={{ marginTop: "20px" }}
                          >
                            <Typography
                              align="left"
                              className="d-flex w-100 "
                              style={{ fontSize: "16px" }}
                            >
                              Select Chapter 3 Status
                              <span style={{ color: "red" }}>*</span>
                              <span>
                                <Tooltip
                                  style={{
                                    backgroundColor: "black",
                                    color: "white",
                                  }}
                                  title={
                                    <>
                                      <Typography color="inherit">
                                        Classification details
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
                                    Please make a selection from the dropdown
                                    provided. The selection must represent the
                                    Chapter 3 classification, under U.S. tax
                                    principles, of the individual, business, or
                                    organization that the certificate will
                                    represent.
                                  </Typography>
                                  <Typography style={{ marginTop: "10px" }}>
                                    For more information, please review the
                                    Chapter 3 Classification Guide to establish
                                    your entity status for purposes of Chapter
                                    3.
                                  </Typography>
                                  <Typography
                                    style={{
                                      marginTop: "10px",
                                      fontWeight: "550",
                                    }}
                                  >
                                    IRS Guidance:
                                  </Typography>
                                  <Typography style={{ marginTop: "10px" }}>
                                    Please selection the option that applies. By
                                    making this selection, you are representing
                                    that you qualify for this classification.
                                    You must select the option that represents
                                    your classification (for example,
                                    corporation, partnership, trust, estate,
                                    etc.) under U.S. tax principles. Do not
                                    select the option that describes your status
                                    under the law of the treaty country. If you
                                    are a partnership or a disregarded entity
                                    receiving a payment for which treaty
                                    benefits are being claimed, you must select
                                    the 'Partnership' or 'Disregarded entity'
                                    option. If you are a sole proprietor select
                                    the 'Individual' option, not 'Disregarded
                                    entity'.
                                  </Typography>

                                  <Link
                                    href="#"
                                    underline="none"
                                    style={{
                                      marginTop: "10px",
                                      fontSize: "16px",
                                    }}
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

                            <FormControl className="w-50">
                              <Select
                                onChange={(e) => {
                                  handleChange(e);
                                  // handleTaxClassificationChange(e);
                                }}
                                onBlur={handleBlur}
                                error={Boolean(
                                  touched.federalTaxClassificationId &&
                                    errors.federalTaxClassificationId
                                )}
                                name="federalTaxClassificationId"
                                value={values.federalTaxClassificationId}
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "45px",
                                  width: "100%",
                                }}
                              >
                                <MenuItem value={1}>-Select-</MenuItem>
                                <MenuItem value={2}>SSN/ITIN</MenuItem>
                                <MenuItem value={3}>
                                  U.S. TIN not applicable
                                </MenuItem>
                                <MenuItem value={4}>
                                  U.S. TIN not available
                                </MenuItem>
                              </Select>
                              <p className="error">
                                {errors.federalTaxClassificationId}
                              </p>
                            </FormControl>
                          </div>
                        </div>

                        <div
                          style={{ marginTop: "20px", display: "flex" }}
                          className="col-12"
                        >
                          <div className="col-6">
                            <Typography
                              align="left"
                              className="d-flex w-60 "
                              style={{ fontSize: "16px" }}
                            >
                              First Name
                              <span style={{ color: "red" }}>*</span>
                              <span>
                                <Tooltip
                                  style={{
                                    backgroundColor: "black",
                                    color: "white",
                                  }}
                                  title={
                                    <>
                                      <Typography color="inherit">
                                        Name details
                                      </Typography>
                                      <a onClick={() => setToolInfo("name")}>
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
                            {toolInfo === "name" ? (
                              <div>
                                <Paper
                                  style={{
                                    backgroundColor: "#dedcb1",
                                    padding: "15px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <Typography>
                                    Please enter the first and last name of the
                                    person who is required or has been requested
                                    to submit an information return.
                                  </Typography>
                                  <Typography
                                    style={{
                                      marginTop: "10px",
                                      fontWeight: "550",
                                    }}
                                  >
                                    Specific instructions for U.S. individuals
                                    and sole proprietors: U.S. individuals:
                                  </Typography>
                                  <Typography style={{ marginTop: "10px" }}>
                                    If you are an{" "}
                                    <span style={{ fontWeight: "550" }}>
                                      individual
                                    </span>
                                    , you must enter the name shown on your
                                    income tax return. However, if you have
                                    changed your last name, for instance, due to
                                    marriage without informing the Social
                                    Security Administration of the name change,
                                    enter your first name, the last name shown
                                    on your social security card, and your new
                                    last name. In certain situations we may need
                                    to contact you for further verification.
                                  </Typography>
                                  <Typography style={{ marginTop: "10px" }}>
                                    <span style={{ fontWeight: "550" }}>
                                      Joint names:
                                    </span>
                                    If the account is in joint names, both
                                    parties will need to submit separate
                                    submissions.
                                  </Typography>
                                  <Typography style={{ marginTop: "10px" }}>
                                    <span style={{ fontWeight: "550" }}>
                                      {" "}
                                      Sole proprietor:
                                    </span>
                                    Enter your individual name as shown on your
                                    income tax return on the 'Name' line. You
                                    may enter your business, trade, or 'doing
                                    business as (DBA)' name on the 'Business
                                    name' line.
                                  </Typography>

                                  <Link
                                    href="#"
                                    underline="none"
                                    style={{
                                      marginTop: "10px",
                                      fontSize: "16px",
                                    }}
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

                            <FormControl className="w-100">
                              <TextField
                                autoComplete="firstName"
                                type="text"
                                placeholder="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                  touched.firstName && errors.firstName
                                }
                                error={Boolean(
                                  touched.firstName && errors.firstName
                                )}
                                name="firstName"
                                className="inputClassFull"
                                value={values.firstName}
                              />
                            </FormControl>
                          </div>
                          <div className="col-6" style={{ marginLeft: "10px" }}>
                            <Typography
                              align="left"
                              className="d-flex w-60 "
                              style={{ fontSize: "16px" }}
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
                                error={Boolean(
                                  touched.lastName && errors.lastName
                                )}
                                name="lastName"
                                value={values.lastName}
                                className="inputClass"
                              />
                            </FormControl>
                          </div>
                        </div>

                        <>
                          <div className="row">
                            <div className=" col-12">
                              <Typography
                                align="left"
                                className="d-flex w-60 "
                                style={{
                                  fontSize: "16px",
                                  marginTop: "15px",
                                }}
                              >
                                Country of Residence for Tax Purposes:
                                <span style={{ color: "red" }}>*</span>
                              </Typography>

                              <FormControl className="w-50">
                                <Select
                                  name="businessName"
                                  fullWidth
                                  value={values.businessName}
                                  onChange={handleChange}
                                  autoComplete="businessName"
                                  type="text"
                                  placeholder="Business Name"
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.businessName && errors.businessName
                                  )}
                                  className="inputClassFull"
                                >
                                  <MenuItem value={1}>-Select-</MenuItem>
                                  <MenuItem value={2}>SSN/ITIN</MenuItem>
                                  <MenuItem value={3}>
                                    U.S. TIN not applicable
                                  </MenuItem>
                                  <MenuItem value={4}>
                                    U.S. TIN not available
                                  </MenuItem>
                                </Select>
                                <p className="error">{errors.businessName}</p>
                              </FormControl>
                            </div>
                          </div>
                        </>
                      </Typography>
                    </div>

                    <div style={{ padding: "10px", width: "51%" }}>
                      <Accordion
                        expanded={expanded === "groupPanel"}
                        onChange={handleChangeAccodion("groupPanel")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel-content"
                          id="panel-header"
                        >
                          <Typography
                            style={{ fontSize: "18px", color: "blue" }}
                          >
                            Chapter 3 Status Guide Test
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Accordion
                            expanded={expandedState === "panel1"}
                            onChange={handleChangeAccodionState("panel1")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMore />}
                              aria-controls="panel1d-content"
                              id="panel1d-header"
                            >
                              <Typography
                                style={{ fontSize: "18px", color: "blue" }}
                              >
                                Introduction
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                align="center"
                                style={{ fontWeight: "bold" }}
                              >
                                Classification Guide - Introduction
                              </Typography>
                              <Typography
                                align="left"
                                style={{ marginTop: "20px", fontSize: "12px" }}
                              >
                                This guide is provided to help you determine the
                                classification of the entity the submission
                                represents.
                              </Typography>

                              <Typography
                                align="left"
                                style={{ marginTop: "10px", fontSize: "12px" }}
                              >
                                In the left hand menu you will see several
                                different classification types. Please select
                                each in turn reading the definition provided.
                                When you are satisfied the description matches
                                the entity type select “confirm”.
                              </Typography>
                              <Typography
                                align="left"
                                style={{ marginTop: "10px", fontSize: "12px" }}
                              >
                                Depending on the type selected you may either be
                                provided with further selections, more detailed
                                guidance or the pop up will close and you will
                                be taken to the next stage in the submission
                                process.
                              </Typography>
                              <Typography
                                align="left"
                                style={{ marginTop: "10px", fontSize: "12px" }}
                              >
                                Please note that although this guide is provided
                                to assist your selection, it is not intended nor
                                aims to provide tax advice.
                              </Typography>
                              <Typography
                                align="left"
                                style={{
                                  marginTop: "30px",
                                  fontWeight: "bold",
                                }}
                              >
                                Should you need specific help or guidance you
                                should consult your tax advisers.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion
                            expanded={expandedState === "panel2"}
                            onChange={handleChangeAccodionState("panel2")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMore />}
                              aria-controls="panel2d-content"
                              id="panel2d-header"
                            >
                              <Typography
                                style={{ fontSize: "18px", color: "blue" }}
                              >
                                Individual{" "}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography align="left">
                                Chapter 3 Classification - Individual
                              </Typography>
                              <Typography
                                align="left"
                                style={{ marginTop: "10px" }}
                              >
                                An individual is a single person who is not
                                connected to an Business or Organization and
                                would be declaring only personal income.
                              </Typography>

                              <Typography
                                align="center"
                                style={{ marginTop: "30px" }}
                              >
                                <Button variant="contained">Confirm</Button>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion
                            expanded={expandedState === "panel5"}
                            onChange={handleChangeAccodionState("panel5")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMore />}
                              aria-controls="panel3d-content"
                              id="panel3d-header"
                            >
                              <Typography
                                style={{ fontSize: "18px", color: "blue" }}
                              >
                                Don't Know?
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                align="center"
                                style={{ fontWeight: "bold" }}
                              >
                                Don't Know?
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                Please pick a category from the left hand menu.
                                We cannot offer tax advice so if you need
                                assistance, please Exit the process and consult
                                your tax adviser.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </AccordionDetails>
                      </Accordion>
                    </div>

                    {/* <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccodion('panel1')}>
        <AccordionSummary expandIcon={<ExpandMore />}  aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccodion('panel2')}>
        <AccordionSummary expandIcon={<ExpandMore />}  aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChangeAccodion('panel3')}>
        <AccordionSummary expandIcon={<ExpandMore />}  aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div> */}

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
                      <Button>Back</Button>
                    </Typography>
                  </div>
                </Form>
              )}
            </Formik>
          </Paper>
        </div>
      </section>
    </>
  );
}
