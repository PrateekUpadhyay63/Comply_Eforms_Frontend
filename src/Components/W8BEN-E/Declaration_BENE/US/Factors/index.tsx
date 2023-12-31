import React, { useState,ChangeEvent,useEffect } from "react";
import { FormControl, Typography, Button, Paper, Tooltip ,Link} from "@mui/material";
import { Info } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
    getAllCountries,
    W8_state
    
  } from "../../../../../Redux/Actions";
  import DynamicForm from "./text";
  import {validationUS} from "../../../../../schemas/w8BenE"
  import { useDispatch, useSelector } from "react-redux";
import checksolid from "../../../../../assets/img/check-solid.png";
// import check from "../../../assets/img/check.png";
import Accordion from "@mui/material/Accordion";
import DeleteIcon from "@mui/icons-material/Delete";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BreadCrumbComponent from "../../../../reusables/breadCrumb";
export default function Factors() {
  const history = useNavigate();

  const [allocation, setAllocation] = useState(0); // State to track allocation input
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
  
      history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Status_BenE")
  
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
                <a href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-" target="popup" onClick={()=>window.open('https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-','name','width=600,height=400')}>Help Video</a>
                </div>
            </div>
        </div>

        <div className="row w-100 h-100">
        <div className="col-4" >
          <div style={{ padding: "20px 0px",height:"100%", }}>
          <BreadCrumbComponent
           breadCrumbCode={1204} formName={2}/>
      </div>
      </div>
        <div className="col-8 mt-3" >
      <div style={{ padding: "12px" }}>
      {/* <Formik
                validateOnChange={false}
                validateOnBlur={false}
                // initialValues={initialValue}
                enableReinitialize
                //  validationSchema={validationUS}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
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
                  <Form onSubmit={handleSubmit}> */}
        <Paper style={{ padding: "18px" }}>
        <div style={{ margin: "10px" }}>
                <Typography
                  align="left"
                  style={{ marginTop: "10px", fontSize: "27px",fontWeight:"550" }}
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

               <div className="mt-2">
               <DynamicForm formList={formList} setFormList={setFormList} allocation={allocation} setAllocation={setAllocation}/>
              </div>
              </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <Button  disabled={allocation !== 100} variant="contained" style={{ color: "white" }}>
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
              onClick={() => {
                history("/BenE/Tax_Purpose_BenE/Declaration_BenE");
              }}
            >
             
              Back
            </Button>
          </Typography>
        </Paper>
   {/* </Form>
        )}
  </Formik> */}
      </div>
      </div>
</div>

    </section>
  );
}