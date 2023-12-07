import React, { useState, ChangeEvent, useEffect } from "react";
import {
  FormControl,
  Typography,
  Button,
  Paper,
  Tooltip,
  Link,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { getAllCountries } from "../../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import checksolid from "../../../../assets/img/check-solid.png";
// import check from "../../../assets/img/check.png";
import Accordion from "@mui/material/Accordion";
import DeleteIcon from "@mui/icons-material/Delete";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DynamicForm from "./text";

export default function Factors() {
  const history = useNavigate();

  const [allocation, setAllocation] = useState(); // State to track allocation input
  const [formList, setFormList] = useState<FormData[]>([]);

  const dispatch = useDispatch();
  const handleAllocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // setAllocation(inputValue);

    const mirroredText = document.getElementById("mirroredText");
    if (mirroredText) {
      mirroredText.innerText = inputValue;
    }
  };

  // useEffect(()=>{
  //   dispatch(getAllCountries());
  // })
  // const getCountriesReducer = useSelector(
  //   (state: any) => state.getCountriesReducer
  // );
  const [toolInfo, setToolInfo] = useState("");
  const [numPapers, setNumPapers] = useState(1);
  const addIncomeTypePaper = () => {
    setNumPapers(numPapers + 1);
  };
  const [expanded, setExpanded] = React.useState<string | false>("");
  const deleteIncomeTypePaper = () => {
    setNumPapers(numPapers - 1);
  };
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history("/W-8BEN/Declaration/Non_US_Sorced/Status");
    console.log("Form List:", formList);
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
          <div
            style={{ padding: "25px 0px", height: "100%", marginTop: "10px" }}
          >
            <Paper
              style={{ padding: "0px 0px 0px 18px", height: "100%" }}
              className="bg-none"
            >
              <div style={{ background: "#ffffff33", height: "100%" }}>
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
                        Step I
                        <img
                          className="steper-check-icon-solid my-auto mx-2"
                          src={checksolid}
                        />
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
                          <li className="active">
                            {" "}
                            <label className="my-auto">Name and Address </label>
                          </li>
                          <li className="active">
                            Account Indivation(Optional)
                          </li>
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
                        Step II
                        <img
                          className="steper-check-icon-solid my-auto mx-2"
                          src={checksolid}
                        />
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
                          <li className="active">
                            {" "}
                            <label className="my-auto">
                              US Sourced Income Declaration (optional)
                            </label>
                          </li>
                          <li>United States Citizenship Status</li>
                          <li>Tax Identification Number</li>
                          <li>Treaty Claim</li>
                          <li>Special Rates and Conditions</li>
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
                        Step III
                        <img
                          className="steper-check-icon-solid my-auto mx-2"
                          src={checksolid}
                        />
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
                          <li>
                            {" "}
                            <label className="my-auto">
                              Penalties of Perjury Certification
                            </label>
                          </li>
                          <li>Electronic Signature</li>
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
        <div className="col-8 mt-4">
          <div style={{ padding: "10px" }}>
            <Paper style={{ padding: "18px" }}>
              <div style={{ margin: "10px" }}>
                <Typography
                  align="left"
                  style={{ marginTop: "10px", fontSize: "38px" }}
                >
                  U.S. Source Income and Determining Factors
                  <span>
                    <Tooltip
                      style={{ backgroundColor: "black", color: "white" }}
                      title={
                        <>
                          <Typography color="inherit">
                            TT-124 Q&A process, U.S. Sourced Income
                          </Typography>
                          <a onClick={() => setToolInfo("factor")}>
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
                {toolInfo === "factor" ? (
                  <div>
                    <Paper
                      style={{
                        backgroundColor: "#dedcb1",
                        padding: "15px",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography>
                        EH023: Select the type of income the submission is being
                        applied to.
                      </Typography>

                      <Typography style={{ marginTop: "10px" }}>
                        You may select more than one where multiple sources of
                        income may be covered. Generally income is considered
                        from U.S. sources if it is paid by domestic U.S.
                        corporations, U.S. citizens or resident aliens, or
                        entities formed under the laws of the United States or a
                        state.
                      </Typography>
                      <Typography className="my-2">
                        Income is also from U.S. sources if the property that
                        produces the income is located in the United States or
                        the services for which the income is paid were performed
                        in the United States.
                      </Typography>
                      <Typography className="my-2">
                        A payment is treated as being from sources within the
                        United States if the source of the payment cannot be
                        determined at the time of payment, such as fees for
                        personal services paid before the services have been
                        performed.
                      </Typography>
                      <Typography className="my-2">
                        Generally, interest on an obligation of a foreign
                        corporation or foreign partnership is foreign-source
                        income.
                      </Typography>
                      <Typography className="my-2">
                        If the entity is engaged in a trade or business in the
                        United States during its tax year, interest paid by such
                        an entity is treated as from U.S. sources only if
                        interest is paid by a U.S. trade or business conducted
                        by the entity or is allocable to income that is treated
                        as effectively connected with the conduct of a U.S.
                        trade or business. This applies to a foreign partnership
                        only if it is predominantly engaged in the active
                        conduct of a trade or business outside the United
                        States.
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

                <DynamicForm formList={formList} setFormList={setFormList} allocation={allocation} setAllocation={setAllocation}/>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "80px",
                }}
              >
                <Button
                  disabled={allocation !== 100}
                  variant="contained"
                  style={{ color: "white" }}
                >
                  SAVE & EXIT
                </Button>
                <Button
                  variant="contained"
                  style={{ color: "white", marginLeft: "15px" }}
                >
                  View form
                </Button>
                <Button
                  disabled={allocation !== 100}
                  onClick={handleSubmit}
                  variant="contained"
                  style={{ color: "white", marginLeft: "15px" }}
                >
                  Confirm
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
            </Paper>
          </div>
        </div>
      </div>
    </section>
  );
}
