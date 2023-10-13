import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Tooltip,
  Link,
  Input,
  Divider,
  Paper,
  Checkbox,
} from "@mui/material";
import checksolid from "../../../../../assets/img/check-solid.png";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Certifications(props: any) {
  const history = useNavigate();
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [toolInfo, setToolInfo] = useState("");
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
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
              fontSize: "30px",
              fontWeight: "550",
              marginLeft: "20px",
            }}
          >
            Certification <span style={{ color: "red" }}>*</span>
            <span>
              <Tooltip
                style={{ backgroundColor: "black", color: "white" }}
                title={
                  <>
                    <Typography color="inherit">
                      Legal certification details
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
            </span>{" "}
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
                  You have selected to submit a form W-8BEN to claim that the
                  person, business or organization represented by the form is a
                  beneficial owner solely claiming foreign status or treaty
                  benefits. If this is not correct you must go back and change
                  your selection.
                </Typography>

                <Typography style={{ marginTop: "10px" }}>
                  Please check the information and change where appropriate. On
                  completion this information will be transferred to an image
                  (pdf) of the standard official form.
                </Typography>
                <Typography style={{ marginTop: "10px" }}>
                  Enter your U.S. or non-U.S. (i.e. Foreign) taxpayer
                  identification number along with the U.S. TIN Type and foreign
                  country correlating to such Foreign TIN. An individual's U.S.
                  TIN type is generally a Social Security Number (SSN) or an
                  Individual Tax Identification Number (ITIN). An entity's U.S.
                  TIN may be an employer identification number (EIN), including
                  a withholding foreign partnership/trust EIN (WP/T-EIN) or a
                  qualified intermediary EIN (QI-EIN). A U.S. TIN must be
                  furnished on U.S. tax returns when filed or when claiming
                  treaty benefits. A U.S. TIN must be on a withholding
                  certificate (i.e. W-8) if the beneficial owner is receiving
                  effectively connected income (ECI), claiming tax treaty
                  benefits (other than for income from marketable, actively
                  traded, securities), claiming an exemption for ECI or claiming
                  an exemption for certain annuities. If you are required to
                  have a U.S. TIN but do not you may apply for an EIN on Form
                  SS-4, Application for Employer Identification Number, a SSN on
                  Form SS-5, Application for a Social Security Card or an ITIN
                  on Form W-7, IRS Application for Individual Taxpayer
                  Identification Number.
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
              margin: "10px",
              fontSize: "20px",
              color: "grey",
              marginLeft: "20px",
            }}
          >
            I certify that (Check All).{" "}
            <span style={{ fontWeight: "550" }}>
              Checking the box signifies you have read the statement, even if it
              does not directly apply.
            </span>
          </Typography>
          <Typography
            style={{
              margin: "10px",
              fontSize: "20px",
              color: "grey",
              marginLeft: "20px",
            }}
          >
            Under penalties of perjury, I declare that I have examined the
            information on this form and to the best of my knowledge and belief
            it is true, correct, and complete. I further certify under penalties
            of perjury that:
          </Typography>

          <Paper
            style={{
              marginLeft: "20px",
              width: "97%",
              backgroundColor: "#d2d6d3",
            }}
          >
            <div style={{ margin: "10px" }}>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginTop: "10px",
                  }}
                >
                  1. I am the individual that is the beneficial owner (or am
                  authorized to sign for the individual that is the beneficial
                  owner) of all the income to which this form relates or am
                  using this form to document myself as an individual that is an
                  owner or account holder of a foreign financial institution
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  2. The person named on line 1 of this form is not a U.S.
                  person,
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  3. The income to which this form relates is:
                </Typography>
              </Typography>

              <div style={{ marginLeft: "60px", fontSize: "17px" }}>
                <li>
                  (a) not effectively connected with the conduct of a trade or
                  business in the United States,
                </li>
                <li>
                  (b) effectively connected but is not subject to tax under an
                  applicable income tax treaty, or
                </li>
                <li>
                  (c) the partner's share of a partnership's effectively
                  connected income or,
                </li>
                <li>
                  (d) the partner’s amount realized from the transfer of a
                  partnership interest subject to withholding under section
                  1446(f)
                </li>
              </div>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  4. The person named on line 1 of this form is a resident of
                  the treaty country listed on line 9 of the form (if any)
                  within the meaning of the income tax treaty between the United
                  States and that country, and
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  5. For broker transactions or barter exchanges, the beneficial
                  owner is an exempt foreign person as defined in the
                  instructions.
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  Furthermore, I authorize this form to be provided to any
                  withholding agent that has control, receipt, or custody of the
                  income of which I am the beneficial owner or any withholding
                  agent that can disburse or make payments of the income of
                  which I am the beneficial owner.
                  <span style={{ fontWeight: "bold" }}>
                    I agree that I will submit a new form within 30 days if any
                    certification made on this form becomes incorrect.
                  </span>
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />

              <Typography
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              ></Typography>
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  I have been notified by IRS that I am currently subject to
                  backup withholding.
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  Check to confirm you have reviewed the Electronic Form
                  <span
                    style={{
                      color: "blue",
                      fontSize: "19px",
                      marginLeft: "5px",
                    }}
                  >
                    (view Electronic Form)
                  </span>
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
            </div>
          </Paper>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
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
              onClick={() => {
                history("/W-8BEN/Declaration/US_Tin/Certification_Substitute");
              }}
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
              history("/W-8BEN/Declaration/US_Tin/Rates")
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
  );
}
