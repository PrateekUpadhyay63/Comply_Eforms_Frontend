import React, { useState, useEffect } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,

  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import Link from "@mui/material/Link";

import Tooltip from "@mui/material/Tooltip";
import { CheckBox, ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import {
  getAllCountries,
  getAllCountriesCode,
  getAllCountriesIncomeCode,
  getAllStateByCountryId,
  GetChapter4Statuses,
} from "../../../../../Redux/Actions";
import { TaxPurposeSchema } from "../../../../../schemas/w8BenE";
import BreadCrumbComponent from "../../../../reusables/breadCrumb";
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
    federalTaxClassificationId: 0,
  };
  const [toolInfo, setToolInfo] = useState("");
  const history = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>("");
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [numPapers, setNumPapers] = useState(1);
  const addIncomeTypePaper = () => {
    setNumPapers(numPapers + 1);
  };
  const deleteIncomeTypePaper = () => {
    setNumPapers(numPapers - 1);
  };
  const handleCheckbox1Change = () => {
    setCheckbox1Checked(true);
    setCheckbox2Checked(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox1Checked(false);
    setCheckbox2Checked(true);
  };
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllCountriesCode());
    dispatch(getAllCountriesIncomeCode());
    dispatch(getAllStateByCountryId());
    dispatch(GetChapter4Statuses());
  }, []);

  const getCountriesReducer = useSelector(
    (state: any) => state.getCountriesReducer
  );
  const getCountriesCodeReducer = useSelector(
    (state: any) => state.getCountriesCodeReducer
  );
  const GetAllIncomeCodesReducer = useSelector(
    (state: any) => state.GetAllIncomeCodesReducer
  );
  const GetStateByCountryIdReducer = useSelector(
    (state: any) => state.GetStateByCountryIdReducer
  );
  const GetChapter4StatusesReducer = useSelector(
    (state: any) => state.GetChapter4StatusesReducer
  );

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
            {/* <div style={{ padding: "20px 0px",height:"100%",marginTop:"20px" }}>
       
      </div> */}
            <BreadCrumbComponent breadCrumbCode={1204} formName={2} />
          </div>
          <div className="col-8 mt-3">
            <div style={{ padding: "20px" }}>
              <Paper style={{ padding: "18px" }}>
                <Formik
                  initialValues={initialValue}
                  validationSchema={TaxPurposeSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    history(
                      "/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/US_Tin_BenE"
                    );
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
                                className="col-md-12 col-12"
                                align="left"
                                style={{
                                  color: "black",
                                  fontSize: "25px",
                                  fontWeight: "550",
                                }}
                              >
                                 Chapter 4 Status:{" "}
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
                                    <Typography style={{ fontSize: "12px" }}>
                                      You are required to provide a Chapter 4
                                      status on Form W-8BEN-E or W-8EXP if you
                                      are the payee of a withholdable payment or
                                      hold an account with an FFI requesting
                                      this form.
                                    </Typography>
                                    <Typography
                                      style={{
                                        marginTop: "10px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      You are required to provide a Chapter 4
                                      status on Form W-8IMY if you are acting as
                                      an intermediary with respect to a
                                      withholdable payment, you are a
                                      flow-through entity receiving a
                                      withholdable payment on behalf of your
                                      owners (including a reverse hybrid entity
                                      providing documentation on behalf of its
                                      owners to claim treaty benefits), you are
                                      providing a withholding statement
                                      associated with this form that allocates a
                                      portion of the payment to a chapter 4
                                      withholding rate pool of U.S. payees with
                                      respect to your direct account holders (as
                                      described in Regulations section
                                      1.6049-4(c)(4)), you are providing this
                                      form to an FFI requesting this form to
                                      document your chapter 4 status, or you are
                                      a QI (including a QDD), WP, or WT. If you
                                      are a U.S. branch that does not agree to
                                      be treated as a U.S. person and that does
                                      not make the certification on line 19c,
                                      you should check nonparticipating FFI;
                                      otherwise, leave line 5 blank.
                                    </Typography>

                                    <Typography
                                      style={{
                                        marginTop: "10px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      By checking a box on this line, you are
                                      representing that you qualify for this
                                      classification.
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
                            </div>
                            <div className="row">
                              <div
                                className="col-12 col-md-12 mt-3"
                                style={{ marginTop: "20px" }}
                              >
                                <Typography
                                  align="left"
                                  className="d-flex w-100 "
                                  style={{ fontSize: "13px" }}
                                >
                                  Select Chapter 4 Status:
                                </Typography>

                                <FormControl className="w-50">
                                  <select
                                    name="federalTaxClassificationId"
                                    value={values.federalTaxClassificationId}
                                    onChange={handleChange}
                                    autoComplete="businessName"
                                    placeholder="Business Name"
                                    onBlur={handleBlur}
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "36px",
                                    }}
                                  >
                                    {GetChapter4StatusesReducer.GetChapter4StatusesData?.map(
                                      (ele: any) => (
                                        <option key={ele?.id} value={ele?.id}>
                                          {ele?.name}
                                        </option>
                                      )
                                    )}
                                  </select>

                                  <p className="error">
                                    {errors.federalTaxClassificationId}
                                  </p>
                                </FormControl>
                              </div>
                            </div>
{values.federalTaxClassificationId == 2 ?(
                            <>
  <div>
                        <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
                        Part XXVI  <span  style={{fontWeight:"bold",marginLeft:"10px"}}>Passive NFFE </span>

                        </Typography>
                      </div>
                      <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"5px"}}>
                        40a
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I
                        </Typography>
                      </div>
                      <div>
                        <Paper style={{padding:"10px",backgroundColor:"#dbd7d7",fontSize:"13px"}}>
                        is a foreign entity that is not a financial institution (other than an investment entity organized in a possession of the United States) and is not certifying its status as a publicly traded NFFE (or affiliate), excepted territory NFFE, active NFFE, direct reporting NFFE, or sponsored direct reporting NFFE.
                          </Paper>
                        </div>
                        <div className="mt-3">
                          <Typography style={{color:"grey",fontSize:"19px"}}>
                          Check box 40b or 40c, whichever applies:
                          </Typography>
                        </div>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"13px"}}>
                        b
                        </Typography>
                        <Typography>
                       <Checkbox checked={checkbox2Checked}
            onChange={handleCheckbox2Change}/>
                        </Typography>
                        <Typography className="mt-2">
                        I further certify that
                        </Typography>
                      </div>
<div>
  <Paper style={{padding:"10px",backgroundColor:"#dbd7d7",fontSize:"13px"}}>
  the entity identified in Part I has no substantial U.S. owners (or, if applicable, no controlling U.S. persons), or
  </Paper>
  </div>

<div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"5px"}}>
                        c
                        </Typography>
                        <Typography>
                       <Checkbox  checked={checkbox1Checked}
            onChange={handleCheckbox1Change} />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I
                        </Typography>
                      </div>

                      <Paper style={{padding:"10px",backgroundColor:"#dbd7d7",fontSize:"13px"}}>
                      has provided the name, address, and TIN of each substantial U.S. owner (or, if applicable, controlling U.S. person) of the NFFE in Part XXIX.
                      </Paper>

                     {checkbox1Checked ?( <>
                      <div className="mt-3">
                        <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
                        Part XXIX  <span  style={{fontWeight:"bold",marginLeft:"10px"}}>Substantial U.S. Owners of Passive NFFE </span>

                        </Typography>
                      </div>
                      <Typography className="mt-2" style={{fontSize:"13px"}}>
                      As required by Part XXVI, provide the name, address and TIN of each substantial U.S. owner of the NFFE. Please see instructions for definition of substantial U.S. owner.
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
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                   Name:{" "}

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
                                    // value={values.withHoldingClaim}
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
                                    {/* {errors.withHoldingClaim} */}
                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                TIN:

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
                                    // value={values.paragraphArticleClaimed}
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
                                    {""}
                                    {/* {errors.incomeExpected} */}
                                  </p>
                                </FormControl>
                              </div>
                            </div>
                            <Typography style={{fontWeight:"bold"}}>
                            Address:
                            </Typography>
                            <div className="col-12 d-flex" style={{justifyContent:"space-between"}}>

                              <div className="col-5">

                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                  House Number or Name:{" "}

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
                                    // value={values.withHoldingClaim}
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
                                    {/* {errors.withHoldingClaim} */}
                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Road Name:

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
                                    // value={values.paragraphArticleClaimed}
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
                                    {""}
                                    {/* {errors.incomeExpected} */}
                                  </p>
                                </FormControl>
                              </div>
                            </div>
                            <div className="col-12 d-flex"style={{justifyContent:"space-between"}}>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                  City or Town:{" "}

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

                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                  State or Province:

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

                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    <option value="0">-Select-</option>

                                  </select>
                                  {/* <p className="error">
                                    {errors.incomeExpected}
                                  </p> */}
                                </FormControl>
                              </div>
                            </div>
                            <div className="col-12 d-flex"style={{justifyContent:"space-between"}}>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Zip or Postal Code:

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

                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-5">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "17px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Residential Country:

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

                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    <option value="0">-Select-</option>

                                  </select>
                                  {/* <p className="error">
                                    {errors.incomeExpected}
                                  </p> */}
                                </FormControl>
                              </div>
                            </div>


                            <div className="col-10">
                            <Typography
                              align="left"
                              style={{ fontSize: "17px", marginTop: "10px" }}
                            >
                              Other (not available in the drop down):

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
                                // value={values.subParagraphArticle}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                // error={Boolean(
                                //   touched.subParagraphArticle &&
                                //     errors.subParagraphArticle
                                // )}
                              />
                              {/* <p className="error">
                                {errors.subParagraphArticle}
                              </p> */}
                            </FormControl>
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
                          Add Substantial U.S. Owner
              </Button>
                      </div>
                      </>):""}
</>):""}

                          </Typography>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "80px",
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{ color: "white" }}
                          >
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
                          { checkbox1Checked  || checkbox2Checked || values.federalTaxClassificationId ?( <Button
                        // type="submit"
                        onClick={()=>{
                          history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/US_Tin_BenE")
                        }}
                        variant="contained"
                        style={{ color: "white", marginLeft: "15px" }}
                      >
                        Continue
                      </Button>):
                      <Button
                     disabled
                      onClick={()=>{
                        history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/US_Tin_BenE")
                      }}
                      variant="contained"
                      style={{ color: "white", marginLeft: "15px" }}
                    >
                      Continue
                    </Button>
                      }
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
                              history("/BenE/Tax_Purpose_BenE/Declaration_BenE/US/Factors_BenE");
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
