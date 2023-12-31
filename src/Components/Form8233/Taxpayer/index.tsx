import React, { useState,useEffect } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  FormControlLabel,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import { CREATE_8233 } from "../../../Redux/Actions";
import { Info, DeleteOutline,Delete } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { US_TINSchema } from "../../../schemas/8233";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getAllCountries,getAllCountriesCode,getAllCountriesIncomeCode,getAllStateByCountryId  , getTinTypes} from "../../../Redux/Actions";
import BreadCrumbComponent from "../../reusables/breadCrumb";
import CloseIcon from '@mui/icons-material/Close';
export default function Tin(props: any) {


  const onBoardingFormValues = JSON.parse(
    localStorage.getItem("agentDetails") ?? "null"
  );
 
  const initialValue = {
    usTinTypeId: onBoardingFormValues?.usTinTypeId
      ? onBoardingFormValues?.usTinTypeId
      : 0,

    usTin: onBoardingFormValues?.usTin ? onBoardingFormValues?.usTin : "",
    // usTinTypeId:0,
    // usTin:"",
    notAvailable: false,
    foreignTINCountry: onBoardingFormValues?.foreignTINCountryId
      ? onBoardingFormValues?.foreignTINCountryId
      : "",
    foreignTIN: "",
    isFTINNotLegallyRequired: false,
    tinisFTINNotLegallyRequired: "Yes",
    // tinAlternativeFormate: true,
    isNotLegallyFTIN: "",
  };
 
  const [ustinArray, setUStinArray] = useState([]);
  const [ustinValue, setUStinvalue] = useState([]);
  const [notUsIndividual , setNonUsIndividual] = useState([]);
  useEffect(() => {
    dispatch(getAllCountries())   
    dispatch(getAllCountriesCode())   
    dispatch(getAllCountriesIncomeCode())   
    // dispatch(getAllStateByCountryId())   
    dispatch(
      getTinTypes(3, (data: any) => {
        setUStinArray(data);
        let datas = data.filter((ele: any) => {
          return ele.usIndividual === true;
        });
        setUStinvalue(datas);
        let nonData = data.filter((ele: any) => {
          return ele.nonUSIndividual === true;
        });
        setNonUsIndividual(nonData)
      })
    );
   }, []);
   const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
   const getCountriesReducer = useSelector((state:any) => state.getCountriesReducer);
   const getCountriesCodeReducer = useSelector((state:any) => state.getCountriesCodeReducer);
   const GetAllIncomeCodesReducer = useSelector((state:any) => state.GetAllIncomeCodesReducer);
   const GetStateByCountryIdReducer = useSelector((state:any) => state.GetStateByCountryIdReducer);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [toolInfo, setToolInfo] = useState("");
  return (
    <>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValue}
        enableReinitialize
        validationSchema={US_TINSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          dispatch(
            CREATE_8233(values, () => {
              history("/Form8233/TaxPayer_Identification/Owner");
            })
          );
          history("/Form8233/TaxPayer_Identification/Owner");
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
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
              
            <>{console.log(errors, values, "errorsssss")}</>
            <section
              className="inner_content"
              style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
            >
              <div className="overlay-div">
            <div className="overlay-div-group">
                <div className="viewInstructions">View Instructions</div>
                <div className="viewform">View Form</div>
                <div className="helpvideo"> 
                
                <a href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-" target="popup" onClick={()=>window.open('https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-','name','width=600,height=400')}>Help Video</a>
                </div>
            </div>
        </div>
        <div className="row w-100 h-100">
       <div className="col-4">
          <div style={{ padding: "20px 0px",height:"100%" }}>
          <BreadCrumbComponent breadCrumbCode={1360} formName={2}/>
      </div>
      </div>
      <div className="col-8 mt-3">
              <div style={{ padding: "13px" }}>
                
                <Paper style={{ padding: "10px" }}>
                {toolInfo === "ForeignTin" ? (
                    <div className="mt-1">
                      <Paper
                      
                        style={{ backgroundColor: "#d1ecf1", padding: "15px"}}
                      >
                       <div className="d-flex" style={{justifyContent:"space-between"}}>
                       <Typography style={{color: "#0c5460"}}>
                       United Kingdom TIN Format is 9999999999 false <br/> 9- Numeric value only <br/> A- Alphabetic character only <br/> *- Alphanumeric character only <br/> ?- Characters optional after this <br/> IF TIN format is not available, please check the below box and continue
                        </Typography>


                        <Typography>
                          <CloseIcon  style={{color:"#0c5460",cursor:"pointer",fontSize:"medium"}} onClick={() => {
                            setToolInfo("");
                          }}/>
                        </Typography>
                       </div>
                       
                      
                        
                        
                       
                      </Paper>
                    </div>
                  ) : (
                    ""
                  )}
                  <Typography
                    align="left"
                    style={{
                      margin: "10px",
                      fontSize: "23px",
                      fontWeight: "550",
                    }}
                  >
                    Taxpayer Identification Number
                  </Typography>

                  <div>
                     {values.notAvailable === true ?( 
                     
                     <div
                        style={{
                          margin: "10px",
                          display: "flex",
                          marginTop: "25px",
                        }}
                        className="row"
                      >
                        <div className="col-lg-5 col-12">
                          <Typography style={{fontSize:"14px"}}>
                            U.S. TIN Type<span style={{ color: "red" }}>*</span>
                            <span>
                              <Tooltip
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                title={
                                  <>
                                    <Typography color="inherit">
                                      U.S. TIN Type Info
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
                                    fontSize: "12px",
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
                                  Please select a U.S. TIN type status from the
                                  dropdown.
                                </Typography>

                                <Typography style={{ marginTop: "10px" }}>
                                  If a TIN type is not available, ensure you
                                  select the checkbox to the right of the field
                                  and provide an explanation as to why it is not
                                  available in the corresponding boxes at the
                                  bottom of the screen.
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
                          <select
                            disabled
                            style={{
                              border: " 1px solid #d9d9d9 ",
                              padding: " 0 10px",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "40px",
                              width: "100%",
                            }}
                            name="usTinTypeId"
                            id="Income"
                            
                            defaultValue={1}
                            onBlur={handleBlur}
                            value={values?.usTinTypeId}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <option value={0}>--Select--</option>
                               
                               {notUsIndividual?.map((ele: any) => (
                                   // ele?.nonUSIndividual &&
                                   //   values?.isUSIndividual == "no" ||
                                   // ele?.usIndividual &&
                                   //   values?.isUSIndividual == "Yes" ?
                                   // (
                                   <option
 
                                     key={ele?.taxpayerIdTypeID}
                                     value={ele?.taxpayerIdTypeID}
                                   >
                                     {ele?.taxpayerIdTypeName}
                                   </option>
                                   // ) : (
                                   //   ""
                                   // );
                                 ))}
                          </select>
                          {/* <p className="error">{errors.usTinTypeId}</p> */}
                        </div>

                        <div className="col-lg-5 col-12">
                          <Typography style={{fontSize:"14px"}}>U.S. TIN</Typography>
                          <Input
                            disabled
                            fullWidth
                            
                            placeholder="ENTER US TIN"
                         defaultValue="ENTER US TIN"
                            value={values.usTin}
                            // onBlur={handleBlur}
                            onChange={(e: any) => {
                              handleChange(e);
                                setFieldValue("","");
                            }}
                           
                            style={{
                              border: " 1px solid #d9d9d9 ",
                              padding: " 0 10px",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "40px",
                              width: "100%",

                            }}
                          />
                          {values.notAvailable ? (
                            ""
                          ) : 
                            // <p className="error">{errors.usTin}</p>
                            " "
                          }
                        </div>
                        <div className="col-lg-2 ">
                          <div className="radio" style={{ marginTop: "17px" }}>
                            <Checkbox
                              value={values.notAvailable}
                              checked={values.notAvailable}
                              onChange={handleChange}
                              size="medium"
                              name="notAvailable"
                            />
                            <span style={{ fontSize: "12px" }}>
                              Not Available
                              {errors.notAvailable && touched.notAvailable ? (
                                <div>
                                  <Typography color="error">
                                    {errors.notAvailable}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </span>
                          </div>
                        </div>
                      </div>):
                      
                      <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                      }}
                      className="row"
                    >
                      <div className="col-lg-5 col-12">
                        <Typography style={{fontSize:"14px"}}>
                          U.S. TIN Type<span style={{ color: "red" }}>*</span>
                          <span>
                            <Tooltip
                              style={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                              title={
                                <>
                                  <Typography color="inherit">
                                    U.S. TIN Type Info
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
                                  fontSize: "12px",
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
                                Please select a U.S. TIN type status from the
                                dropdown.
                              </Typography>

                              <Typography style={{ marginTop: "10px" }}>
                                If a TIN type is not available, ensure you
                                select the checkbox to the right of the field
                                and provide an explanation as to why it is not
                                available in the corresponding boxes at the
                                bottom of the screen.
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
                        <select
                          disabled={values.notAvailable}
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "40px",
                            width: "100%",
                          }}
                          name="usTinTypeId"
                          id="Income"
                          defaultValue={1}
                          onBlur={handleBlur}
                          value={values?.usTinTypeId}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                         <option value={0}>--Select--</option>
                               
                               {notUsIndividual?.map((ele: any) => (
                                   // ele?.nonUSIndividual &&
                                   //   values?.isUSIndividual == "no" ||
                                   // ele?.usIndividual &&
                                   //   values?.isUSIndividual == "Yes" ?
                                   // (
                                   <option
 
                                     key={ele?.taxpayerIdTypeID}
                                     value={ele?.taxpayerIdTypeID}
                                   >
                                     {ele?.taxpayerIdTypeName}
                                   </option>
                                   // ) : (
                                   //   ""
                                   // );
                                 ))}
                        </select>
                        {/* <p className="error">{errors.usTinTypeId}</p> */}
                      </div>

                      <div className="col-lg-5 col-12">
                        <Typography style={{fontSize:"14px"}}>U.S. TIN</Typography>
                        <Input
                          disabled={values.notAvailable}
                          fullWidth
                          type="text"
                          name="usTin"
                          value={values.usTin}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(touched.usTin && errors.usTin)}
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "40px",
                            width: "100%",
                          }}
                        />
                        {values.notAvailable ? (
                          ""
                        ) : 
                          // <p className="error">{errors.usTin}</p>
                          " "
                        }
                      </div>
                      <div className="col-lg-2 ">
                        <div className="radio" style={{ marginTop: "17px" }}>
                          <Checkbox
                            value={values.notAvailable}
                            checked={values.notAvailable}
                            onChange={handleChange}
                            size="medium"
                            name="notAvailable"
                          />
                          <span style={{ fontSize: "12px" }}>
                            Not Available
                            {errors.notAvailable && touched.notAvailable ? (
                              <div>
                                <Typography color="error">
                                  {errors.notAvailable}
                                </Typography>
                              </div>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                      }



                      <div
                        style={{
                          margin: "10px",
                          display: "flex",
                          marginTop: "25px",
                        }}
                        className="row"
                      >
                        <div className="col-lg-5">
                          <Typography style={{fontSize:"14px"}}>
                            Foreign TIN Country
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <select
                          disabled
                            style={{
                              border: " 1px solid #d9d9d9 ",
                              padding: " 0 10px",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "40px",
                              width: "100%",
                            }}
                            name="foreignTINCountry"
                            id="Income"
                            onBlur={handleBlur}
                            value={values.foreignTINCountry}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <option value={0}>-Select-</option>
                                <option value={257}>-United Kingdom-</option>
                                {getCountriesReducer.allCountriesData?.map(
                                  (ele: any) => (
                                    <option key={ele?.id} value={ele?.id}>
                                      {ele?.name}
                                    </option>
                                  )
                                )}
                          </select>
                          {/* <p className="error">{errors.foreignTINCountry}</p> */}

                          <div style={{ marginTop: "2px" }}>
                            <Checkbox
                              value={values.isFTINNotLegallyRequired}
                              checked={values.isFTINNotLegallyRequired}
                              onChange={(e)=>{handleChange(e);{setFieldValue("tinisFTINNotLegallyRequired", "")}setFieldValue("foreignTIN", "");
                            }}

                              size="medium"
                              name="isFTINNotLegallyRequired"
                            />
                            <span style={{ fontSize: "15px" }}>
                              Check if FTIN not legally required
                              {errors.isFTINNotLegallyRequired &&
                              touched.isFTINNotLegallyRequired ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isFTINNotLegallyRequired}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                              <span>
                                <Tooltip
                                  style={{
                                    backgroundColor: "black",
                                    color: "white",
                                  }}
                                  title={
                                    <>
                                      <Typography color="inherit">
                                        FTIN not legally required
                                      </Typography>
                                      <a onClick={() => setToolInfo("require")}>
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
                                      fontSize: "12px",
                                      cursor: "pointer",
                                      verticalAlign: "super",
                                    }}
                                  />
                                </Tooltip>
                              </span>
                            </span>
                          </div>

                          {toolInfo === "require" ? (
                            <Paper
                              style={{
                                backgroundColor: "#dedcb1",
                                padding: "15px",
                                marginBottom: "10px",
                              }}
                            >
                              <Typography>
                                You may check the box on this line 6b (for Form
                                W-8BEN), line 9c (for Form W-8BEN-E) or line 8b
                                (For Form W-8ECI) if you are an account holder
                                as described for purposes of line 6a (for Form
                                W-8BEN), line 9b (for Form W-8BEN-E) or line 8a
                                (for Form W-8ECI) and you are not legally
                                required to obtain an FTIN from your
                                jurisdiction of residence (including if the
                                jurisdiction does not issue TINs). By checking
                                this box, you will be treated as having provided
                                an explanation for not providing an FTIN on line
                                6a (W-8BEN), line 9b (W-8BEN-E), or line line 8a
                                (W-8ECI). If you wish to provide a further (or
                                other) explanation why you are not required to
                                provide an FTIN, which appears on line 6a, 9b or
                                8a (W-8BEN, W-8BEN-E or W-8ECI respectively),
                                you will be able to enter this as part of the
                                eForms process.
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
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="col-lg-5 col-12">
                          <Typography style={{fontSize:"14px"}}>
                            Foreign TIN{" "}
                            {values.foreignTINCountry == 257 ?(  <span>  <Tooltip
                              style={{
                                backgroundColor: "black",
                                color: "white",
                  
                              }}
                              title={
                                <>
                                 
                                  <a onClick={() => setToolInfo("ForeignTin")}>
                                   
                                  </a>
                                </>
                              }
                            >
                              <Info
                               onClick={() => setToolInfo("ForeignTin")}
                                style={{
                                  color: "#ffc107",
                                  fontSize: "15px",
                                  verticalAlign:"super",
                                  marginLeft: "5px",
                                  cursor: "pointer",
                                }}
                              />
                            </Tooltip></span> ):""}
                          </Typography>

                          {values.tinisFTINNotLegallyRequired === "No" ? (
                            <Input
                              fullWidth
                              type="text"
                              disabled={
                                values.isFTINNotLegallyRequired ||
                                values.foreignTINCountry == "1" 
                               
                                
                                
                              }
                              name="foreignTIN"
                              value={values.foreignTIN}
                              onBlur={handleBlur}
                              onChange={(e)=>{
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === '' || re.test(e.target.value)) {
                                  handleChange(e)
                              }}}
                              
                              inputProps={{ maxLength: 10 }}
                              placeholder="ENTER FOREIGN TIN"

                             
                              error={Boolean(
                                touched.foreignTIN && errors.foreignTIN
                              )}
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "40px",
                                width: "100%",
                              }}
                            />
                          ) : (
                            <Input
                              fullWidth
                              type="text"
                              disabled={
                                values.isFTINNotLegallyRequired ||
                                values.foreignTINCountry == "1" ||
                                values.tinisFTINNotLegallyRequired ==="Yes"
                              }
                              placeholder="ENTER FOREIGN TIN"
                              name="foreignTIN"
                              value={values.foreignTIN}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              error={Boolean(
                                touched.foreignTIN && errors.foreignTIN
                              )}
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "40px",
                                width: "100%",
                              }}
                            />
                          )}
                          {values.isFTINNotLegallyRequired ? (
                            ""
                          ) : 
                            // <p className="error">{errors.foreignTIN}</p>
                            " "
                          }

                          {/* <FormControl >
                            <RadioGroup
                              row
                              
                              name="tinisFTINNotLegallyRequired"
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              value={values.tinisFTINNotLegallyRequired}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="Yes"
                                disabled={values.isFTINNotLegallyRequired}
                                control={<Radio />}
                                label="Not Available"
                                name="tinisFTINNotLegallyRequired"
                              />
                              <FormControlLabel
                                className="label"
                                value="No"
                                control={<Radio />}
                                label="Alternative Tin Format"
                                disabled={values.isFTINNotLegallyRequired}
                                name="tinisFTINNotLegallyRequired"
                              />

                              {values.tinisFTINNotLegallyRequired === "Yes" ||
                              values.tinisFTINNotLegallyRequired === "No" ? (
                                <Delete
                                  onClick={() => {
                                    handleChange("tinisFTINNotLegallyRequired")(
                                      ""
                                    );
                                  }}
                                  style={{
                                    color: "red",
                                    fontSize: "20px",
                                    marginTop: "11px",
                                  
                                  }}
                                />
                              ) : (
                                ""
                              )}
                            </RadioGroup>

                            {errors.tinisFTINNotLegallyRequired &&
                            touched.tinisFTINNotLegallyRequired ? (
                              <div>
                                <Typography color="error">
                                  {errors.tinisFTINNotLegallyRequired}
                                </Typography>
                              </div>
                            ) : (
                              ""
                            )}
                          </FormControl> */}

<div  >
<FormControl className="col-12 radio">
                  <RadioGroup
                    row
                    name="tinisFTINNotLegallyRequired"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    value={values.tinisFTINNotLegallyRequired}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Yes"
                      disabled={values.isFTINNotLegallyRequired}
                      control={<Radio />}
                      label="Not Available"
                      name="tinisFTINNotLegallyRequired"
                    />
                    <FormControlLabel
                      className="label"
                      value="No"
                      control={<Radio />}
                      label="Alternative Tin Format"
                      disabled={values.isFTINNotLegallyRequired}
                      name="tinisFTINNotLegallyRequired"
                    />

                    {values.tinisFTINNotLegallyRequired === "Yes" ||
                    values.tinisFTINNotLegallyRequired === "No" ? (
                      <Delete
                        onClick={() => {
                          handleChange("tinisFTINNotLegallyRequired")(
                            ""
                          );
                        }}
                        style={{
                          color: "red",
                          fontSize: "20px",
                          marginTop: "11px",
                        
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </RadioGroup>

                  {errors.tinisFTINNotLegallyRequired &&
                  touched.tinisFTINNotLegallyRequired ? (
                    <div>
                      <Typography color="error">
                        {errors.tinisFTINNotLegallyRequired}
                      </Typography>
                    </div>
                  ) : (
                    ""
                  )}
                </FormControl>
                        </div>
                        </div>
                       
                      </div>
                    </div>
                    {values.isFTINNotLegallyRequired === true && (
                      <>
                        <Typography
                           className="mt-3"
                           style={{ marginLeft: "20px", fontSize: "15px" }}
                        >
                          Do you wish to provide a further (or other)
                          explanation why you are not legally required to
                          provide an FTIN?
                          <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <FormControl className="col-12 radio" style={{ marginLeft: "20px" }}>
                          <RadioGroup
                            row
                            name="isNotLegallyFTIN"
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            value={values.isNotLegallyFTIN}
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="Yes"
                              control={<Radio />}
                              label="Yes"
                              name="isNotLegallyFTIN"
                            />
                            <FormControlLabel
                              className="label"
                              value="No"
                              control={<Radio />}
                              label="No"
                              // name="isNotLegallyFTIN"
                            />
                          </RadioGroup>
                          {errors.isNotLegallyFTIN &&
                          touched.isNotLegallyFTIN ? (
                            <div>
                              <Typography color="error">
                                {errors.isNotLegallyFTIN}
                              </Typography>
                            </div>
                          ) : (
                            ""
                          )}
                        </FormControl>
                        {values.isNotLegallyFTIN === "Yes" ? (
                          <div style={{ margin: "20px" }}>
                            <Typography
                              style={{ fontSize: "25px", fontWeight: "550" }}
                            >
                              Foreign TIN Provision – Reasonable Explanation
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "20px",
                                fontWeight: "550",
                                marginTop: "15px",
                              }}
                            >
                              Reasonable Explanation Provision
                            </Typography>
                            <Typography
                              style={{ fontSize: "20px", marginTop: "15px" }}
                            >
                              You have not provided a Foreign Tax Identification
                              Number, FTIN, where one would generally be
                              provided. The IRS provides for a range of
                              circumstances where it is considered reasonable to
                              not provide a FTIN, including but not limited to:
                            </Typography>
                            <Typography
                              style={{ fontSize: "20px", marginTop: "15px" }}
                            >
                              <ul>
                                <li>
                                  The account holder is resident of a
                                  jurisdiction that is not listed in section 3
                                  of Revenue Procedure 2017-46, 2017-43 I.R.B.
                                  372, which may be further updated in future
                                  published guidance;
                                </li>
                                <li>
                                  The account holder is resident in a
                                  jurisdiction that has been identified by the
                                  IRS on a list of jurisdictions for which
                                  withholding agents are not required to obtain
                                  foreign TINs;
                                </li>
                                <li>
                                  The account holder is a government,
                                  international organization, foreign central
                                  bank of issue, or resident of a U.S.
                                  territory; or
                                </li>
                                <li>
                                  You obtain a reasonable explanation for why
                                  the account holder has not been issued a
                                  foreign TIN.
                                </li>
                              </ul>
                              <Typography
                                style={{ fontSize: "20px", marginTop: "15px" }}
                              >
                                Please select the appropriate explanation below,
                                or where none apply, please select, ‘Other/None
                                of the above’ and you will have the opportunity
                                to provide a written explanation.
                              </Typography>
                              <Typography
                                style={{ fontSize: "20px", marginTop: "15px" }}
                              >
                                Please note, treaty benefits, where they may
                                otherwise apply, may not be provided if you do
                                not enter either a U.S TIN or a Foreign TIN or
                                provide an acceptable and reasonable
                                explanation. The recipient of the submission
                                document may need to obtain further information.
                              </Typography>
                            </Typography>
                          </div>
                        ) : values.isNotLegallyFTIN === "No" ? (
                          ""
                        ) : (
                          ""
                        )}
                      </>
                    )}


                  {values.notAvailable ? (  <div style={{ marginLeft: "20px" }}>
                      <Typography>
                        Please specify the reason for non-availability of US TIN{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Typography>

                      <Input
                        fullWidth
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "6rem",
                          width: "100%",
                        }}
                      />
                    </div>):""}


                    {values.tinisFTINNotLegallyRequired === "Yes" ? (
                      <div style={{ marginLeft: "20px",marginRight:"20px" }}className="my-3">
                        <Typography align="left" style={{ fontWeight: "bold" }}>
                          Please specify the reason for non-availability of
                          Foreign TIN{" "}
                          <span
                            style={{ color: "red", verticalAlign: "super" }}
                          >
                            *
                          </span>
                          <br />
                        </Typography>
                        <Typography
                          align="left"
                          style={{ fontWeight: "bold", marginTop: "2rem" ,textAlign:"justify"}}
                        >
                          You have selected a FTIN country that is not on the
                          IRS exemption list, where, in most cases a FTIN should
                          be provided. You must provide a written explanation
                          here explaining why you are not providing. By not
                          providing we may not be able to apply treaty benefits
                          should they apply and may render the form invalid.
                        </Typography>
                        <Input
                          fullWidth
                          type="text"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "7rem",
                            width: "100%",
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}

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
                      history("/Form8233/SubstantialPresence")
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
