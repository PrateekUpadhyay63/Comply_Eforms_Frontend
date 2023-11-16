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
  Divider,
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
           
            <BreadCrumbComponent breadCrumbCode={1210} formName={3} />
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


{values.federalTaxClassificationId == 6 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
                        Part XXV <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Active NFFE </span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      39
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that :
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
The entity identified in Part I is a foreign entity that is not a financial institution;
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Less than 50% of such entity's gross income for the preceding calendar year is passive income; <span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Less than 50% of the assets held by such entity are assets that produce or are held for the production of passive income (calculated as a weighted average of the percentage of passive assets measured quarterly) (see instructions for the definition of passive income)
</Typography>
                      </Paper>
  </>

):""}


{values.federalTaxClassificationId == 7 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part IX  <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Certain Investment Entities that Do Not Maintain Financial Accounts </span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      39
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is a financial institution solely because it is an investment entity described in <Link style={{textDecorationLine:"none"}}>
1.1471-5(e)(4)(i)(A);</Link>,
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2" >

<span style={{fontWeight:"bold"}}>
and</span> Does not maintain financial accounts.
</Typography>

                      </Paper>
  </>

):""}


{values.federalTaxClassificationId == 8 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part VI <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Certified Deemed-Compliant FFI with Only Low-Value Accounts</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      39
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the FFI identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is not engaged primarily in the business of investing, reinvesting, or trading in securities, partnership interests, commodities, notional principal contracts, insurance or annuity contracts, or any interest (including a futures or forward contract or option) in such security, partnership interest, commodity, notional principal contract, insurance contract or annuity contract;
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
No financial account maintained by the FFI or any member of its expanded affiliated group, if any, has a balance or value in excess of $50,000 (as determined after applying applicable account aggregation rules); <span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Neither the FFI nor the entire expanded affiliated group, if any, of the FFI, have more than $50 million in assets on its consolidated or combined balance sheet as of the end of its most recent accounting year.
</Typography>
                      </Paper>
  </>

):""}

{values.federalTaxClassificationId == 9 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part VIII  <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Certified Deemed-Compliant Limited Life Debt Investment Entity</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      22
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Was in existence as of January 17, 2013;
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Issued all classes of its debt or equity interests to investors on or before January 17, 2013, pursuant to a trust indenture or similar agreement; <span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is certified deemed-compliant because it satisfies the requirements to be treated as a limited life debt investment entity (such as the restrictions with respect to its assets and other requirements under
Regulations section 1.1471-5(f)(2)(iv)
</Typography>
                      </Paper>
  </>

):""}

{values.federalTaxClassificationId == 10 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part V<span  style={{fontWeight:"bold",marginLeft:"10px"}}>Certified Deemed-Compliant Nonregistering Local Bank</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      18
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the FFI identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Operates and is licensed solely as a bank or credit union (or similar cooperative credit organization operated without profit) in its country of incorporation or organization;
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Engages primarily in the business of receiving deposits from and making loans to, with respect to a bank, retail customers unrelated to such bank and, with respect to a credit union or similar cooperative credit organization, members, provided that no member has a greater than five percent interest in such credit union or cooperative credit organization;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Does not solicit account holders outside its country of organization;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Has no fixed place of business outside such country (for this purpose, a fixed place of business does not include a location that is not advertised to the public and from which the FFI performs solely administrative support functions);
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Has no more than $175 million in assets on its balance sheet and, if it is a member of an expanded affiliated group, the group has no more than $500 million in total assets on its consolidated or combined balance sheets; <span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Does not have any member of its expanded affiliated group that is a foreign financial institution, other than a foreign financial institution that is incorporated or organized in the same country as the FFI identified in Part I and that meets the requirements set forth in this Part V.
</Typography>
                      </Paper>
  </>

):""}

{values.federalTaxClassificationId == 11 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part VII <span  style={{fontWeight:"bold",marginLeft:"10px"}}>Certified Deemed-Compliant Sponsored, Closely Held Investment Vehicle</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      21
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is an FFI solely because it is an investment entity described in <Link style={{textDecorationLine:"none"}}>
Regulations section 1.1471-5(e)(4)
</Link>
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is not a QI, WP, or WT;
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Will have all of its due diligence, withholding, and reporting responsibilities (determined as if the FFI were a participating FFI) fulfilled by the sponsoring entity on line 20;<span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
20 or fewer individuals own all of the debt and equity interests in the entity (disregarding debt interests owned by U.S. financial institutions, participating FFIs, registered deemed-compliant FFIs, and certified deemed-compliant FFIs and equity interests owned by an entity if that entity owns 100% of the equity interests in the FFI and is itself a sponsored FFI).
</Typography>
                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 13 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XVI <span  style={{fontWeight:"bold",marginLeft:"10px"}}>Entity Wholly Owned by Exempt Beneficial Owners</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      30
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is an FFI solely because it is an investment entity; 
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Each direct holder of an equity interest in the investment entity is an exempt beneficial owner described in  <Link style={{textDecorationLine:"none"}}>
Regulations section 1.1471-6
</Link>
<span style={{marginLeft : "5px"}}>
or in an applicable Model 1 or Model 2 IGA;
</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Each direct holder of a debt interest in the investment entity is either a depository institution (with respect to a loan made to such entity) or an exempt beneficial owner described in  

<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-6

</Link>
<span style={{marginLeft : "5px"}} >
or an applicable Model 1 or Model 2 IGA.

</span>
</Typography>




<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Has provided an owner reporting statement that contains the name, address, TIN (if any), chapter 4 status, and a description of the type of documentation provided to the withholding agent for every person that owns a debt interest constituting a financial account or direct equity interest in the entity;<span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Has provided documentation establishing that every owner of the entity is an entity described in 

<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-6(b), (c), (d), (e), (f), 

</Link>

and/or
<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
(g) 

</Link>
,


</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
without regard to whether such owners are beneficial owners.
</Typography>

                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 14 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XXVII <span  style={{fontWeight:"bold",marginLeft:"10px"}}>Excepted Inter-Affiliate FFI</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      41
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is a member of an expanded affiliated group;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Does not maintain financial accounts (other than accounts maintained for members of its expanded affiliated group);
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Does not make withholdable payments to any person other than to members of its expanded affiliated group that are not limited FFIs or limited branches;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Does not hold an account (other than a depository accounts in the country in which the entity is operating to pay for expenses) with or receive payments from any withholding agent other than a member of its expanded affiliated group; <span style={{fontWeight:"bold"}}>
and</span>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Has not agreed to report under

<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-4(d)(2)(ii)(C) 

</Link>

<span  style={{ marginLeft : "5px"}}>
or otherwise act as an agent for chapter 4 purposes on behalf of any financial institution, including a member of its expanded affiliated group.
</span>



</Typography>



                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 15 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XX <span  style={{fontWeight:"bold",marginLeft:"10px"}}>Excepted Nonfinancial Entity in Liquidation or Bankruptcy</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      34
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Filed a plan of liquidation, filed a plan of reorganization, or filed for bankruptcy on: 
</Typography>
<Input className="mb-4 date" type="date"/>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
During the past 5 years has not been engaged in business as a financial institution or acted as a passive NFFE;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is either liquidating or emerging from a reorganization or bankruptcy with the intent to continue or recommence operations as a nonfinancial entity;<span style={{fontWeight:"bold"}}>
and</span>

</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Has, or will provide, documentary evidence such as a bankruptcy filing or other public documentation that supports its claim if it remains in bankruptcy or liquidation for more than three years.
</Typography>


                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 16 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XVIII <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Excepted Nonfinancial Group Entity</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      32
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is a holding company, treasury center, or captive finance company and substantially all of the entity's activities are functions described in 

<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-5(e)(5)(i)(C)  
</Link>
<span style={{marginLeft : "5px"}}>
through
</span>
<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
(E);
</Link>
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is a member of a nonfinancial group described in 
<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-5(e)(5)(i)(B);
</Link>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is not a depository or custodial institution (other than for members of the entity's expanded affiliated group);<span style={{fontWeight:"bold"}}>
and</span>

</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Does not function (or hold itself out) as an investment fund, such as a private equity fund, venture capital fund, leveraged buyout fund, or any investment vehicle with an investment strategy to acquire or fund companies and then hold interests in those companies as capital assets for investment purposes.
</Typography>


                      </Paper>
  </>

):""}

{values.federalTaxClassificationId == 17 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XIX <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Excepted Nonfinancial Start-Up Company</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      33
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
Was formed on (or, in the case of a new line of business, the date of board resolution approving the new line of business):
</>
</Typography>

<Typography className="my-2">
<Input className="mb-4 date" type="date"/>
<span>(date must be less than 24 months prior to date of payment);</span>



</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is not yet operating a business and has no prior operating history or is investing capital in assets with the intent to operate a new line of business other than that of a financial institution or passive NFFE;

</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is investing capital into assets with the intent to operate a business other than that of a financial institution;<span style={{fontWeight:"bold"}}>
and</span>

</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">

Does not function (or hold itself out) as an investment fund, such as a private equity fund, venture capital fund, leveraged buyout fund, or any investment vehicle whose purpose is to acquire or fund companies and then hold interests in those companies as capital assets for investment purposes.
</Typography>


                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 18 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XXIV <span  style={{fontWeight:"bold",marginLeft:"10px"}}>  Excepted Territory NFFE</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      38
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that :
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
The entity identified in Part I is an entity that is organized in a possession of the United States;

</>
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
The entity identified in Part I:

</Typography>
<Typography>
(i) Does not accept deposits in the ordinary course of a banking or similar business;

</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
(iI) Does not hold, as a substantial portion of its business, financial assets for the account of others; or;


</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">

(iii) Is not an insurance company (or the holding company of an insurance company) that issues or is obligated to make payments with respect to a financial account; and
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">

All of the owners of the entity identified in Part I are bona fide residents of the possession in which the NFFE was organized or incorporated.
</Typography> 


                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 20 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XIII <span  style={{fontWeight:"bold",marginLeft:"10px"}}>  Foreign Government, Government of a U.S. Possession, or Foreign Central Bank of Issue</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      27
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that :
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
the entity identified in Part I is the beneficial owner of the payment, and is not engaged in commercial financial activities of a type engaged in by an insurance company, custodial institution, or depository institution with respect to the payments, accounts, or obligations for which this form is submitted (except as permitted in
</>
<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-6(h)(2)

</Link>
)
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Less than 50% of such entity's gross income for the preceding calendar year is passive income; <span style={{fontWeight:"bold"}}>
and</span>

</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Less than 50% of the assets held by such entity are assets that produce or are held for the production of passive income (calculated as a weighted average of the percentage of passive assets measured quarterly) (see instructions for the definition of passive income)

</Typography>



                      </Paper>
  </>

):""}
{values.federalTaxClassificationId == 21 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XIII <span  style={{fontWeight:"bold",marginLeft:"10px"}}>  Foreign Government, Government of a U.S. Possession, or Foreign Central Bank of Issue</span>

                        </Typography>
                        <span>
                        Check box 28a or 28b, whichever applies:
                        </span>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      28 a
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that :
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
the entity identified in Part I is an international organization described in section 7701(a)(18).
</>

</Typography>
</Paper>
<div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      b
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I :
                        </Typography>
                      </div>
<Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
Is comprised primarily of foreign governments;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is recognized as an intergovernmental or supranational organization under a foreign law similar to the International Organizations Immunities Act or that has in effect a headquarters agreement with a foreign government;
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
The benefit of the entity's income does not inure to any private person;<span style={{fontWeight:"bold"}}>
and</span>

</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Is the beneficial owner of the payment and is not engaged in commercial financial activities of a type engaged in by an insurance company, custodial institution, or depository institution with respect to the payments, accounts, or obligations for which this form is submitted (except as permitted in
</Typography>
<Link style={{textDecorationLine:"none" , marginLeft : "5px"}}>
Regulations section 1.1471-6(h)(2)

</Link>

).


</Paper>
  </>

):""}
{values.federalTaxClassificationId == 23 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XXII <span  style={{fontWeight:"bold",marginLeft:"10px"}}>  Non-profit Organization</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      36
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I :
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
is a non-profit organization that meets the following requirements:

</>
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
<>
The entity is established and maintained in its country of residence exclusively for religious, charitable, scientific, artistic, cultural or educational purposes;

</>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">
The entity is exempt from income tax in its country of residence;


</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
The entity has no shareholders or members who have a proprietary or beneficial interest in its income or assets;

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

</Typography>
<Typography className="my-2">
Neither the applicable laws of the entity's country of residence nor the entity's formation documents permit any income or assets of the entity to be distributed to, or applied for the benefit of, a private person or non-charitable entity other than pursuant to the conduct of the entity's charitable activities or as payment of reasonable compensation for services rendered or payment representing the fair market value of property which the entity has purchased; <span style={{fontWeight:"bold"}}>
and</span>



</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">
The applicable laws of the entity's country of residence or the entity's formation documents require that, upon the entity's liquidation or dissolution, all of its assets be distributed to an entity that is a foreign government, an integral part of a foreign government, a controlled entity of a foreign government, or another organization that is described in this Part XXII or escheats to the government of the entity's country of residence or any political subdivision thereof.


</Typography>





                      </Paper>
  </>

):""}

{values.federalTaxClassificationId == 24 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XII <span  style={{fontWeight:"bold",marginLeft:"10px"}}>  Nonreporting IGA FFI</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                      26
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        I certify that the entity identified in Part I :
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
Meets the requirements to be considered a nonreporting financial institution pursuant to an applicable IGA between the United States and

</>
</Typography>
<FormControl className="my-2">
<select
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                          defaultValue={1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                            <option value={1}>-Select-</option>
                              <option value={257}>United Kingdom</option>
                              <option value={258}>United States</option>
                              <option value="">---</option>
                              {getCountriesReducer.allCountriesData?.map((ele:any) => (
                              <option key={ele?.id} value={ele?.id}>{ele?.name}</option>
                                  ))}
                            </select>
</FormControl>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
<>
The applicable IGA is a <span>
<select
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "40%",
                          }}
                          defaultValue={1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                            <option value={1}>-Select-</option>
                              <option value={257}>Model 1 IGA</option>
                              <option value={258}>Model 2 IGA</option>
                           
                              
                            </select>


</span>
<span>; and <span style={{color:'red'}}>
  *</span></span>

</>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">
Is treated as a <span style={{color:'red'}}> *
  </span>
  <span>
  <select
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "40%",
                          }}
                          defaultValue={24}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                            <option value={1}>-Select-</option>
                              <option value={257}>Deemed Compliant FFI</option>
                              <option value={258}>Exempt Beneficial Owner</option>
                              <option value={25}>Exempt Product</option>
                              <option value={24}>Other</option>
                              
                            </select>
  </span>
  <span style={{marginLeft:"6px"}}>
  <TextField
                          style={{
                            backgroundColor:"#fff",
                          
                         
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "40%",
                          }}
                        placeholder="---Enter the specific entity type---"                     
                          onChange={handleChange}
                        
                           
                              
                            />
                            <span style={{color:"red",verticalAlign:"super"}}>
    *
  </span>
  </span>
  <Typography>
  under the provisions of the applicable IGA or Treasury regulations (if applicable, see instructions);
  </Typography>
  


</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
Are you a trustee or a sponsored entity? 
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

</Typography>
<Typography className="my-2">
Neither the applicable laws of the entity's country of residence nor the entity's formation documents permit any income or assets of the entity to be distributed to, or applied for the benefit of, a private person or non-charitable entity other than pursuant to the conduct of the entity's charitable activities or as payment of reasonable compensation for services rendered or payment representing the fair market value of property which the entity has purchased; <span style={{fontWeight:"bold"}}>
and</span>



</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">
The applicable laws of the entity's country of residence or the entity's formation documents require that, upon the entity's liquidation or dissolution, all of its assets be distributed to an entity that is a foreign government, an integral part of a foreign government, a controlled entity of a foreign government, or another organization that is described in this Part XXII or escheats to the government of the entity's country of residence or any political subdivision thereof.


</Typography>





                      </Paper>
  </>

):""}


{values.federalTaxClassificationId == 32 ?(
  <>
   <Typography style={{border:"2px solid black",color:"white",backgroundColor:"black"}}>
   Part XI <span  style={{fontWeight:"bold",marginLeft:"10px"}}> Restricted Distributor</span>

                        </Typography>
                        <div className="d-flex mt-3">
                        <Typography className="mt-2" style={{marginTop:"10px"}}>
                     25a
                        </Typography>
                        <Typography>
                       <Checkbox />
                        </Typography>
                        <Typography className="mt-2">
                        (All restricted distributors check here) I certify that: entity identified in Part I:
                        </Typography>
                      </div>
                      <Paper style={{backgroundColor:"#e3e3e3",padding:"10px"}}>
<Typography className="my-2">
<>
is a non-profit organization that meets the following requirements:

</>
</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
<>
The entity is established and maintained in its country of residence exclusively for religious, charitable, scientific, artistic, cultural or educational purposes;

</>
</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">
The entity is exempt from income tax in its country of residence;


</Typography>

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>
<Typography className="my-2">
The entity has no shareholders or members who have a proprietary or beneficial interest in its income or assets;

<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

</Typography>
<Typography className="my-2">
Neither the applicable laws of the entity's country of residence nor the entity's formation documents permit any income or assets of the entity to be distributed to, or applied for the benefit of, a private person or non-charitable entity other than pursuant to the conduct of the entity's charitable activities or as payment of reasonable compensation for services rendered or payment representing the fair market value of property which the entity has purchased; <span style={{fontWeight:"bold"}}>
and</span>



</Typography>
<Divider style={{backgroundColor:"black",marginBottom:"10px"}}/>

<Typography className="my-2">
The applicable laws of the entity's country of residence or the entity's formation documents require that, upon the entity's liquidation or dissolution, all of its assets be distributed to an entity that is a foreign government, an integral part of a foreign government, a controlled entity of a foreign government, or another organization that is described in this Part XXII or escheats to the government of the entity's country of residence or any political subdivision thereof.


</Typography>





                      </Paper>
  </>

):""}
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
