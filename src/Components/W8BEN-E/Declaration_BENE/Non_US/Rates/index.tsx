import React, { useEffect, useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Paper,
  Link,
  Tooltip,
  RadioGroup,
  Radio,
  FormControlLabel,
  Input,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.scss";
import { Info } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import checksolid from "../../../../../assets/img/check-solid.png";
import { useDispatch, useSelector } from "react-redux";
import { W8_state } from "../../../../../Redux/Actions";
import { rateSchema } from "../../../../../schemas/w8Ben";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BreadCrumbComponent from "../../../../reusables/breadCrumb";
import { getAllCountriesIncomeCode } from "../../../../../Redux/Actions";
export default function Factors() {
  const history = useNavigate();
  const [numPapers, setNumPapers] = useState(1);
  const addIncomeTypePaper = () => {
    setNumPapers(numPapers + 1);
  };
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const deleteIncomeTypePaper = () => {
    setNumPapers(numPapers - 1);
  };
  const [toolInfo, setToolInfo] = useState("");
  const [status, setStatus] = useState("");
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };
  const dispatch = useDispatch();
 
 
  useEffect(()=>{
    dispatch(getAllCountriesIncomeCode());

  },[])
const GetAllIncomeCodesReducer = useSelector(
    
    (state: any) => state.GetAllIncomeCodesReducer
  );
  console.log("GetAllIncomeCodesReducer" , GetAllIncomeCodesReducer)
  const initialValue = {
    isSubmissionSpecialRates: "No",
    articleBeneficalOwner: "",
    paragraphArticleClaimed: "",
    subParagraphArticle: "",
    withHoldingClaim: "",
    incomeExpected: "",
    articleExplanation: "",
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
          <div style={{ padding: "20px 0px",height:"100%",}}>
          <BreadCrumbComponent breadCrumbCode={1256} formName={3}/>
      </div>
      </div>
      <div className="col-8 mt-3">

      <div style={{ padding: "13px" }}>
        <Paper style={{ padding: "10px" }}>
          <Formik
            initialValues={initialValue}
            enableReinitialize
            validationSchema={rateSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
                dispatch(
                  W8_state(values, () => {
                    history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E/Rates_BenE/Certi_BenE");
                  })
                );
              history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E/Rates_BenE/Certi_BenE");
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
                <div style={{ margin: "10px" }}>
                  <Typography
                     align="left"
                     style={{
                       fontSize: "27px",
                       fontWeight: "550",
                     }}
                  >
                    Special Rates and Conditions
                    <span>
                      <Tooltip
                        style={{ backgroundColor: "black", color: "white" }}
                        title={
                          <>
                            <Typography color="inherit">
                              Special Rates & Conditions
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
                            fontSize: "18px",
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
                          You should only select 'Yes' and proceed through the
                          Special Rates and Conditions flow if you are claiming
                          specific treaty benefits that require you to meet
                          conditions you haven't already declared in your
                          submission. For example, for royalty income, you must
                          complete this line if your country's treaty specifies
                          different withholding rates for different kinds of
                          royalties. See the IRS's Tax Treaty Table (February
                          2019 version available in English here) for more about
                          the Treaty Rates that different countries have
                          negotiated with the US.
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          The following are additional examples of persons who
                          should complete this section.
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          - Exempt organizations claiming treaty benefits under
                          the exempt organization articles of the treaties with
                          Canada, Mexico, Germany, and the Netherlands.
                        </Typography>

                        <Typography style={{ marginTop: "20px" }}>
                          - Foreign corporations that are claiming a
                          preferential rate applicable to dividends based on
                          ownership of a specific percentage of stock.
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          - Persons claiming treaty benefits on royalties if the
                          treaty contains different withholding rates for
                          different types of royalties.
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          - Effect of Tax Treaties
                        </Typography>
                        <Typography style={{ marginTop: "20px" }}>
                          This line is generally not applicable to claiming
                          treaty benefits under an interest or dividends (other
                          than dividends subject to a preferential rate based on
                          ownership) article of a treaty.
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
                  <div style={{ marginTop: "15px" }}>
                    <Typography style={{ fontSize: "22px" }}>
                      Is the submission being made to claim treaty benefits on
                      items not covered by the representations made above and
                      where special withholding rates and conditions may apply?
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={handleChange}
                        value={values.isSubmissionSpecialRates}
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                          name="isSubmissionSpecialRates"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                          name="isSubmissionSpecialRates"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  {values.isSubmissionSpecialRates == "Yes" ? (
                    <>
                      <Typography style={{ fontSize: "20px" }}>
                        Please select the Article, Paragraph, rate of
                        withholding and income types claimed below:{" "}
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Special Rates & Conditions Info
                                </Typography>
                                <a onClick={() => setToolInfo("type")}>
                                  <Typography
                                    style={{
                                      cursor: "pointer",
                                      textDecorationLine: "underline",
                                      fontSize: "18px",
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
                                fontSize: "20px",
                                cursor: "pointer",
                                verticalAlign: "super",
                              }}
                            />
                          </Tooltip>
                        </span>
                        {toolInfo === "type" ? (
                          <div>
                            <Paper
                              style={{
                                backgroundColor: "#dedcb1",
                                padding: "15px",
                                marginBottom: "10px",
                              }}
                            >
                              <Typography>
                                You should only select 'Yes' and proceed through
                                the Special Rates and Conditions flow if you are
                                claiming specific treaty benefits that require
                                you to meet conditions you haven't already
                                declared in your submission. For example, for
                                royalty income, you must complete this line if
                                your country's treaty specifies different
                                withholding rates for different kinds of
                                royalties. See the IRS's Tax Treaty Table
                                (February 2019 version available in English
                                here) for more about the Treaty Rates that
                                different countries have negotiated with the US.
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                The following are additional examples of persons
                                who should complete this section.
                              </Typography>
                              <Typography style={{ marginTop: "20px" }}>
                                - Exempt organizations claiming treaty benefits
                                under the exempt organization articles of the
                                treaties with Canada, Mexico, Germany, and the
                                Netherlands.
                              </Typography>

                              <Typography style={{ marginTop: "20px" }}>
                                - Foreign corporations that are claiming a
                                preferential rate applicable to dividends based
                                on ownership of a specific percentage of stock.
                              </Typography>
                              <Typography style={{ marginTop: "20px" }}>
                                - Persons claiming treaty benefits on royalties
                                if the treaty contains different withholding
                                rates for different types of royalties.
                              </Typography>
                              <Typography style={{ marginTop: "20px" }}>
                                - Effect of Tax Treaties
                              </Typography>
                              <Typography style={{ marginTop: "20px" }}>
                                This line is generally not applicable to
                                claiming treaty benefits under an interest or
                                dividends (other than dividends subject to a
                                preferential rate based on ownership) article of
                                a treaty.
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
                      </Typography>
                      {Array.from({ length: numPapers }).map((_, index) => (
                        <Paper
                          className="paper"
                          elevation={3}
                          style={{
                            backgroundColor: "#e8e1e1",
                            marginTop: "10px",
                          }}
                        >
                          <div style={{ padding: "20px" }}>
                            <Typography align="right">
                              {numPapers > 1 ?(<DeleteIcon
                                onClick={deleteIncomeTypePaper}
                                style={{ color: "red", fontSize: "30px" }}
                              />):""}
                            </Typography>
                            <div className="col-12 d-flex" style={{justifyContent:"space-between"}}>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "22px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Article the beneficial owner is claiming the
                                  provisions of:{" "}
                                  <span
                                    style={{ color: "red", fontSize: "30px" }}
                                  >
                                    *
                                  </span>
                                  <span></span>
                                </Typography>
                                <FormControl className="w-100">
                                  <select
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}
                                    name="articleBeneficalOwner"
                                    value={values.articleBeneficalOwner}
                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    <option value="">-Select-</option>
                                    <option value="US">United Kingdom</option>
                                    <option value="UK">United States</option>
                                  </select>
                                 
                                </FormControl>
                                <p className="error">{errors.articleBeneficalOwner}</p>
                              </div>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "22px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Enter the Paragraph of the Article being
                                  claimed:
                                  <span
                                    style={{ color: "red", fontSize: "30px" }}
                                  >
                                    *
                                  </span>
                                  <span></span>
                                </Typography>
                                <FormControl className="w-100">
                                  <select
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}
                                    name="paragraphArticleClaimed"
                                    value={values.paragraphArticleClaimed}
                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    <option value="">-Select-</option>
                                    <option value="US">United Kingdom</option>
                                    <option value="UK">United States</option>
                                  </select>
                                 
                                </FormControl>
                                <p className="error">
                                    {errors.paragraphArticleClaimed}
                                  </p>
                              </div>
                            </div>

                            <div className="col-10">
                            <Typography
                              align="left"
                              style={{ fontSize: "22px", marginTop: "10px" }}
                            >
                              Enter the Subparagraph of the Article being
                              claimed:{" "}
                              <span style={{ color: "red", fontSize: "30px" }}>
                                *
                              </span>
                            </Typography>
                            <FormControl className="w-100">
                              <TextField
                                className="col-md-6 col-12"
                                style={{
                                  backgroundColor:"#fff",
                                 
                                  // color: "#7e7e7e",
                                  fontStyle: "italic",
                                 
                                }}
                                name="subParagraphArticle"
                                value={values.subParagraphArticle}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(
                                  touched.subParagraphArticle &&
                                    errors.subParagraphArticle
                                )}
                              />
                              <p className="error">
                                {errors.subParagraphArticle}
                              </p>
                            </FormControl>
                            </div>

                            <div className="col-12 d-flex"style={{justifyContent:"space-between"}}>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "22px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Withholding rate claimed:{" "}
                                  <span
                                    style={{ color: "red", fontSize: "30px" }}
                                  >
                                    *
                                  </span>
                                  <span></span>
                                </Typography>
                                <FormControl className="w-100">
                                  <select
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}
                                    name="withHoldingClaim"
                                    value={values.withHoldingClaim}
                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    <option value="">-Select-</option>
                                    <option value="US">United Kingdom</option>
                                    <option value="UK">United States</option>
                                  </select>
                                  <p className="error">
                                    {errors.withHoldingClaim}
                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "22px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Type of income expected:{" "}
                                  <span
                                    style={{ color: "red", fontSize: "30px" }}
                                  >
                                    *
                                  </span>
                                  <span></span>
                                </Typography>
                                <FormControl className="w-100">
                                  <select
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}
                                    name="incomeExpected"
                                    value={values.incomeExpected}
                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    <option value="0">-Select-</option>
                                    {GetAllIncomeCodesReducer.allCountriesIncomeCodeData?.map(
                                          (ele: any) => (
                                            <option
                                              key={ele?.id}
                                              value={ele?.id}
                                            >
                                              {ele?.name}
                                            </option>
                                          )
                                        )}
                                  </select>
                                  <p className="error">
                                    {errors.incomeExpected}
                                  </p>
                                </FormControl>
                              </div>
                            </div>
                          </div>
                        </Paper>
                      ))}

                      <div style={{ marginTop: "20px" }}>
                        <Button
                          onClick={addIncomeTypePaper}
                          variant="contained"
                          size="large"
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          Add Income Type
                        </Button>
                      </div>
                      <div>
                        <Typography
                          align="left"
                          style={{ fontSize: "22px", marginTop: "10px" }}
                        >
                          Please provide a brief explanation why the beneficial
                          owner meets the terms of the treaty article or
                          articles identified above:
                          <span style={{ color: "red", fontSize: "30px" }}>
                            *
                          </span>
                          <span></span>
                        </Typography>
                        <FormControl className="w-100">
                          <TextField
                          
                            className="col-md-10 col-12"
                           
                            name="articleExplanation"
                            value={values.articleExplanation}
                            onBlur={handleBlur}
                            onChange={handleChange}
                           
                          />
                          <p className="error">{errors.articleExplanation}</p>
                        </FormControl>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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
                    View form
                  </Button>
                  {values.isSubmissionSpecialRates == "Yes" ?( <Button
                    type="submit"
                    variant="contained"
                    style={{ color: "white", marginLeft: "15px" }}
                  >
                    Continue
                  </Button>):<>
                  <Button 
                   onClick={()=>
                    history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E/Rates_BenE/Certi_BenE")
                   }
                   variant="contained"
                   style={{ color: "white", marginLeft: "15px" }}
                 >
                   Continue
                 

                  </Button>
                  </>}
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
                    history('/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E')
                  }}
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
                      {/* <ArrowBackIcon /> */}
                    </span>{" "}
                    Back
                  </Button>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
      </div>
      </div>
    </section>
  );
}
