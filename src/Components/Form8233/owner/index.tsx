import React, { useEffect, useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Checkbox,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import Infoicon from "../../../assets/img/info.png";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ownerSchema } from "../../../schemas/8233";
import { CREATE_8233,getAllCountries,GetAgentUSVisaTypeHiddenForEformAction } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BreadCrumbComponent from "../../reusables/breadCrumb";
export default function Tin(props: any) {
  const initialValue = {
    exemptionApplicableForCompensationForCalnderYear: 0,
    otherTaxBeginingYear: "",
    otherTaxEndYear: "",
    usVisaTypeID: "",
    countryIssuingPassportId: "",
    countryIssuingPassportNumber: "",
    dateOfEntryIntoUS: "",
    nonImmigrationStatus: false,
    currentNonImmigrationStatus: "",
    dateNonImmigrationStatusExpire: "",
    declarationOfDurationStayStatus: false,
    foreignStudent_Teacher_Professor_ResearcherStatus: false,
    statementToForm8233_FileUpoad: "",
  };
  const dispatch = useDispatch();
  const history = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [tax, setTax] = useState<string>("");



const currentYear = (new Date()).getFullYear();
const range = (start:number, stop:number, step:number) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

 
const GetAgentUSVisaTypeHiddenForEform = useSelector(
  (state: any) =>
    state.GetAgentUSVisaTypeHiddenForEformReducer
      .GetAgentUSVisaTypeHiddenForEform
);



const handleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value);
  };
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
useEffect(()=>{
  dispatch(getAllCountries())  
  dispatch(GetAgentUSVisaTypeHiddenForEformAction())
},[])
const getCountriesReducer = useSelector((state:any) => state.getCountriesReducer);
  const [toolInfo, setToolInfo] = useState("");
  return (
    <>
      <Formik
      validateOnChange={false}
      validateOnBlur={false}
        initialValues={initialValue}
        enableReinitialize
        validationSchema={ownerSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (clickCount === 0) {
      
            setClickCount(clickCount+1);
          } else{
          setSubmitting(true);
          console.log(values);
          dispatch(
            CREATE_8233(values, () => {
              history("/Form8233/TaxPayer_Identification/Owner/Claim_part");
            })
          );
          }
          history("/Form8233/TaxPayer_Identification/Owner/Claim_part");
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
          <div style={{ padding: "10px 0px",height:"100%" }}>
          <BreadCrumbComponent breadCrumbCode={1358} formName={2}/>
      </div>
      </div>
      <div className="col-8 mt-3">
              <div style={{ padding: "4px" }}>
                <Paper style={{ padding: "18px" }}>

                  {values.declarationOfDurationStayStatus && clickCount === 1 ?(<div>
                    <div  style={{backgroundColor: "#e8e1e1" , padding:"10px"}}>
                  <Typography>
                  8233104
                  <span className="mx-1">
                  <img src={Infoicon} style={{color: "#ffc107",height:"22px",
                  width:"20px",
                  boxShadow:"inherit",
                 
                          cursor: "pointer",
                          marginBottom:"3px"
                         
                        }}/>
                    
                   <span> Duration of Stay Identified on form 8233</span>
 
                  </span>
   
                  
                  </Typography>
                
                
                 
                </div>
                  </div>

                  ):""}
                  <Typography
                    align="left"
                    style={{
                      margin: "0px",
                      fontSize: "27px",
                      fontWeight: "550",
                    }}
                  >
                    Identification of Beneficial Owner (See instructions)
                  </Typography>

                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <Typography style={{ margin: "2px", fontSize: "15px" }}>
                        This exemption is applicable for compensation for
                        calendar year
                      </Typography>
                      <FormControl className="w-50 ">
                        <select
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "40px",
                            width: "50%",
                          }}
                          name="exemptionApplicableForCompensationForCalnderYear"
                          value={
                            values.exemptionApplicableForCompensationForCalnderYear
                          }
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                         <option value="">-Select-</option>
                              {range(currentYear, 2000, -1)?.map((ele:any) => (
                              <option key={ele} value={ele}>{ele}</option>
                                  ))}
                        </select>
                        <p className="error">
                          {
                            errors.exemptionApplicableForCompensationForCalnderYear
                          }
                        </p>
                      </FormControl>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <Typography
                        style={{ fontSize: "15px" }}
                        className="my-auto"
                      >
                        , or other tax year beginning
                      </Typography>
                      <FormControl className="mx-2" style={{ width: "20%" }}>
                        <input
                        disabled
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "40px",
                          }}
                          name="otherTaxBeginingYear"
                          value={values.otherTaxBeginingYear}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                       
                        {/* <p className="error">{errors.otherTaxBeginingYear}</p> */}
                      </FormControl>

                      <Typography
                        style={{ fontSize: "15px" }}
                        className="my-auto"
                      >
                        and ending
                      </Typography>
                      <FormControl className="mx-2" style={{ width: "20%" }}>
                        <input
                        disabled
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "40px",
                          }}
                          name="otherTaxEndYear"
                          value={values.otherTaxEndYear}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                         
                        {/* <p className="error">{errors.otherTaxEndYear}</p> */}
                      </FormControl>
                    </div>
                  </div>
                  <Paper
                    style={{
                      padding: "10px",
                      border: "2px solid black",
                      fontSize: "19px",
                    }}
                    className="my-3"
                  >
                    <span
                      style={{ backgroundColor: "darkgrey", padding: "10px" }}
                    >
                      Part I
                    </span>{" "}
                    Identification of Beneficial Owner (See instructions.)
                  </Paper>
                  <Typography style={{ fontSize: "15px" }}>
                    <span style={{ fontWeight: "550" }}>Note:</span> Citizens of
                    Canada or Mexico are not required to complete lines 7a and
                    7b.
                  </Typography>

                  <div className="col-12">
                    <div className="col-6 my-3">
                      <Typography style={{ fontSize: "15px" }}>
                        <span style={{ fontWeight: "550" }}>6</span> U.S.visa
                        type<span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  TT-048 Enter your U.S. visa type
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
                                fontSize: "15px",
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
                              <span style={{ fontWeight: "550" }}>
                                {" "}
                                Line 6.
                              </span>{" "}
                              Enter your U.S. visa type.
                            </Typography>

                            <Typography style={{ marginTop: "10px" }}>
                              For example
                            </Typography>
                            <Typography style={{ marginTop: "10px" }}>
                              foreign students are usually granted an “F-1”
                              visa. Foreign professors, teachers, or researchers
                              are usually granted a “J-1” visa.
                            </Typography>
                            <ul>
                              <li>
                                Business/vocational trainees are usually granted
                                an “M-1” visa; however, some persons granted a
                                “J-1” visa may also be considered
                                business/vocational trainees (for example, a
                                person admitted to complete a postgraduate
                                residency in medicine).
                              </li>
                            </ul>
                            <Typography>
                              Spouses and dependents admitted on secondary visas
                              (for example, “F-2,” “J-2,” “H-4,” and “O-3”
                              visas) are not usually eligible to claim the same
                              treaty benefits as the primary visa holder.
                            </Typography>
                            <Typography>
                              If you do not have, or do not require, a visa,
                              write “None.”
                            </Typography>

                            <Link
                              href="#"
                              underline="none"
                              style={{ marginTop: "10px", fontSize: "15px" }}
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
                      <select
                        value={values.usVisaTypeID}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="usVisaTypeID"
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                      >
                        <option value="">-Select-</option>
                        {GetAgentUSVisaTypeHiddenForEform?.map(
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
                      <p className="error">{errors.usVisaTypeID}</p>
                    </div>
                    <div className="col-6 my-3">
                      <Typography style={{ fontSize: "15px" }}>
                        <span style={{ fontWeight: "550" }}>7a</span> Country
                        issuing passport <span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  TT-049 Country that issued your Passport
                                </Typography>
                                <a onClick={() => setToolInfo("issue")}>
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
                                fontSize: "13px",
                                cursor: "pointer",
                                verticalAlign: "super",
                              }}
                            />
                          </Tooltip>
                        </span>
                      </Typography>
                      {toolInfo === "issue" ? (
                        <div>
                          <Paper
                            style={{
                              backgroundColor: "#dedcb1",
                              padding: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <Typography>
                              <span style={{ fontWeight: "550" }}>
                                Line 7a.
                              </span>{" "}
                              Enter the Country that issued your Passport.
                            </Typography>

                            <Typography style={{ marginTop: "5px" }}>
                              If you are Citizen of Canada or Mexico skip this
                              line.
                            </Typography>

                            <Link
                              href="#"
                              underline="none"
                              style={{ marginTop: "10px", fontSize: "15px" }}
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
                      <select
                        name="countryIssuingPassportId"
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                        value={values.countryIssuingPassportId}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                       <option value="">-Select-</option>
                              <option value={257}>United Kingdom</option>
                              <option value={258}>United States</option>
                              <option value="">---</option>
                              {getCountriesReducer.allCountriesData?.map((ele:any) => (
                              <option key={ele?.id} value={ele?.id}>{ele?.name}</option>
                                  ))}
                      </select>
                      <p className="error">{errors.countryIssuingPassportId}</p>
                    </div>
                    <div className="col-6 my-3">
                      <Typography style={{ fontSize: "15px" }}>
                        <span style={{ fontWeight: "550" }}>7b</span> Passport
                        number<span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  TT-050 Passport Number
                                </Typography>
                                <a onClick={() => setToolInfo("num")}>
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
                                fontSize: "13px",
                                cursor: "pointer",
                                verticalAlign: "super",
                              }}
                            />
                          </Tooltip>
                        </span>
                      </Typography>
                      {toolInfo === "num" ? (
                        <div>
                          <Paper
                            style={{
                              backgroundColor: "#dedcb1",
                              padding: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <Typography>
                              <span style={{ fontWeight: "550" }}>
                                Line 7b.
                              </span>{" "}
                              Enter your Passport Number.
                            </Typography>

                            <Typography style={{ marginTop: "5px" }}>
                              If you are Citizen of Canada or Mexico skip this
                              line.
                            </Typography>

                            <Link
                              href="#"
                              underline="none"
                              style={{ marginTop: "10px", fontSize: "15px" }}
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
                      <Input
                      value={values.countryIssuingPassportNumber}
                        name="countryIssuingPassportNumber"
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                        onChange={handleChange} 
                      />
                      <p className="error">
                        {errors.countryIssuingPassportNumber}
                      </p>
                    </div>
                    <div className="col-6 my-3">
                      <Typography style={{ fontSize: "15px" }}>
                        <span style={{ fontWeight: "550" }}> 8</span> Date of
                        entry into the United States{" "}
                        <span style={{ color: "red" }}>*</span>
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  TT-051 Date of entry into the United States
                                </Typography>
                                <a onClick={() => setToolInfo("united")}>
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
                                fontSize: "13px",
                                cursor: "pointer",
                                verticalAlign: "super",
                              }}
                            />
                          </Tooltip>
                        </span>
                      </Typography>
                      {toolInfo === "united" ? (
                        <div>
                          <Paper
                            style={{
                              backgroundColor: "#dedcb1",
                              padding: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <Typography>
                              <span style={{ fontWeight: "550" }}>Line 8.</span>{" "}
                              You are generally required to enter your date of
                              entry into the United States that pertains to your
                              current non-immigrant status. For example, enter
                              the date of arrival shown on your current
                              Immigration Form I-94, Arrival-Departure Record.
                            </Typography>

                            <Typography style={{ marginTop: "10px" }}>
                              <span style={{ fontWeight: "550" }}>
                                {" "}
                                Exception.
                              </span>{" "}
                              If you are claiming a tax treaty benefit that is
                              determined by reference to more than one date of
                              arrival, enter the earlier date of arrival. For
                              example, you are currently claiming treaty
                              benefits (as a teacher or a researcher) under
                              article 15 of the tax treaty between the United
                              States and Norway. You previously claimed treaty
                              benefits (as a student) under article 16(1) of
                              that treaty. Under article 16(4) of that treaty,
                              the combination of exemptions under articles 15
                              and 16(1) may not extend beyond 5 tax years from
                              the date you entered the United States. If article
                              16(4) of that treaty applies, enter on line 8 the
                              date you entered the United States as a student.
                            </Typography>

                            <Link
                              href="#"
                              underline="none"
                              style={{ marginTop: "10px", fontSize: "15px" }}
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
                      <Input
                        type="date"
                        name="dateOfEntryIntoUS"
                        value={values.dateOfEntryIntoUS}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                      />
                      <p className="error">{errors.dateOfEntryIntoUS}</p>
                    </div>
                    <div>
                      <Checkbox name="nonImmigrationStatus" size="medium" onChange={handleChange}
                            id="nonImmigrationStatus"
                           
                            value={values.nonImmigrationStatus}
                            checked={values.nonImmigrationStatus} />
                      <span style={{ fontSize: "12px", marginTop: "5px" }}>
                        Check if Nonimmigrant status Not Applicable:
                      </span>
                    </div>

                    <div className="row col-12 mt-2">
                      <div className="col-6 ">
                        <Typography style={{ fontSize: "15px" }}>
                          <span style={{ fontWeight: "550" }}>9a</span> Current
                          nonimmigrant status
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
                                    TT-052 Current non-immigrant status
                                  </Typography>
                                  <a onClick={() => setToolInfo("status")}>
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
                                  fontSize: "13px",
                                  cursor: "pointer",
                                  verticalAlign: "super",
                                }}
                              />
                            </Tooltip>
                          </span>
                        </Typography>
                        {toolInfo === "status" ? (
                          <div>
                            <Paper
                              style={{
                                backgroundColor: "#dedcb1",
                                padding: "15px",
                                marginBottom: "10px",
                              }}
                            >
                              <Typography>
                                <span style={{ fontWeight: "550" }}>
                                  Line 9a.
                                </span>{" "}
                                Enter your current non-immigrant status.
                              </Typography>

                              <Typography style={{ marginTop: "5px" }}>
                                For example, enter your current non-immigrant
                                status shown on your current Immigration Form
                                I-94. Check the box if not applicable.
                              </Typography>

                              <Link
                                href="#"
                                underline="none"
                                style={{ marginTop: "10px", fontSize: "15px" }}
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
                        <Input
                          name="currentNonImmigrationStatus"
                          value={values.currentNonImmigrationStatus}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                        
                        
                        />
                        <p className="error">
                          {errors.currentNonImmigrationStatus}
                        </p>
                      </div>

                      <div className="col-6">
                        <Typography style={{ fontSize: "15px" }}>
                          <span style={{ fontWeight: "550" }}>9b</span> Date
                          your current nonimmigrant status expires
                          <span>
                            <Tooltip
                              style={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                              title={
                                <>
                                  <Typography color="inherit">
                                    TT-053 Expiry of current non-immigrant
                                    status
                                  </Typography>
                                  <a onClick={() => setToolInfo("expiry")}>
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
                                  fontSize: "13px",
                                  cursor: "pointer",
                                  verticalAlign: "super",
                                }}
                              />
                            </Tooltip>
                          </span>
                        </Typography>
                        {toolInfo === "expiry" ? (
                          <div>
                            <Paper
                              style={{
                                backgroundColor: "#dedcb1",
                                padding: "15px",
                                marginBottom: "10px",
                              }}
                            >
                              <Typography>
                                <span style={{ fontWeight: "550" }}>
                                  Line 9b.
                                </span>{" "}
                                Enter the date your current non-immigrant status
                                expires.
                              </Typography>

                              <Typography style={{ marginTop: "5px" }}>
                                For example, you may enter the date of
                                expiration shown on your current Immigration
                                Form I-94. Enter “DS” on line 9b if the date of
                                expiration is based on “duration of status.”
                              </Typography>

                              <Link
                                href="#"
                                underline="none"
                                style={{ marginTop: "10px", fontSize: "15px" }}
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

                        <Input
                          type="date"
                          name="dateNonImmigrationStatusExpire"
                          value={values.dateNonImmigrationStatusExpire}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.dateNonImmigrationStatusExpire &&
                              errors.dateNonImmigrationStatusExpire
                          )}
                          fullWidth
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                        />
                        <p className="error">
                          {errors.dateNonImmigrationStatusExpire}
                        </p>
                        <div className="mt-2">
                          <Checkbox
                            size="small"
                            onChange={handleChange}
                            id="declarationOfDurationStayStatus"
                            name="declarationOfDurationStayStatus"
                            value={values.declarationOfDurationStayStatus}
                            checked={values.declarationOfDurationStayStatus}
                          />
                          <span
                            style={{
                              fontSize: "10px",
                              marginTop: "6px",
                              fontWeight: "550",
                            }}
                          >
                            Please check this box if you wish to declare
                            Duration of Stay (DS)
                          </span>
                        </div>
                        <p className="error">
                          {errors.declarationOfDurationStayStatus}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2">
                      <Checkbox
                        name="foreignStudent_Teacher_Professor_ResearcherStatus"
                        size="medium"
                        onChange={handleChange}
                        id="foreignStudent_Teacher_Professor_ResearcherStatus"
                      
                        value={values.foreignStudent_Teacher_Professor_ResearcherStatus}
                        checked={values.foreignStudent_Teacher_Professor_ResearcherStatus}
                        
                      />
                      <span style={{ fontSize: "15px", marginTop: "13px" }}>
                        <span style={{ fontWeight: "550" }}> 10</span> If you
                        are a foreign student, trainee, professor/teacher, or
                        researcher, check this box
                      </span>
                      <div
                        style={{ fontSize: "15px", fontWeight: "550" }}
                        className="mx-2"
                      >
                        Caution: See the line 10 instructions for the required
                        additional statement you must attach.
                        <span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  TT-053 Expiry of current non-immigrant status
                                </Typography>
                                <a onClick={() => setToolInfo("student")}>
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
                                fontSize: "13px",
                                cursor: "pointer",
                                verticalAlign: "super",
                              }}
                            />
                          </Tooltip>
                        </span>

                        <p className="error">
                      {errors.foreignStudent_Teacher_Professor_ResearcherStatus}
                    </p>
                    <div
                      style={{ fontSize: "15px" }}
                      className="d-flex mt-5 col-12"
                    >
                      You have selected Line 10 Checkbox. Please provide
                      Statement to Form 8233 <span style={{ color: "red" }}>*</span>
                     
                      <Input
                      style={{fontSize:"10px"}}
                        name="statementToForm8233_FileUpoad"
                        id="statementToForm8233_FileUpoad"
                        className="mx-2"
                        type="file"
                        onChange={handleChange}
                      />
                    
                    </div>
                    <p className="error">
                        {errors.statementToForm8233_FileUpoad}
                      </p>
                      </div>
                      {toolInfo === "student" ? (
                        <div>
                          <Paper
                            style={{
                              backgroundColor: "#dedcb1",
                              padding: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <Typography>
                              <span style={{ fontWeight: "550" }}>
                                Line 10. Nonresident alien students, trainees,
                                professors/teachers, and researchers using Form
                                8233 to claim a tax treaty withholding exemption
                                for compensation for personal services must
                                attach a statement to Form 8233.The format and
                                contents of the required statements are shown in
                                Appendix A and Appendix B in Pub. 519.
                              </span>
                            </Typography>

                            <Link
                              href="#"
                              underline="none"
                              style={{ marginTop: "10px", fontSize: "15px" }}
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

                   
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5rem",
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
                    onClick={()=>{
                      history("/Form8233/TaxPayer_Identification")
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
