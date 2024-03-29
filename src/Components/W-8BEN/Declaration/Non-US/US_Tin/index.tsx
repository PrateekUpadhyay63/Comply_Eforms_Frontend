import React, { useEffect, useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  FormControlLabel,
  Tooltip,
  Link,
  Checkbox,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";
// import Infoicon from "../../../assets/img/info.png";

import { Info, Delete } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import checksolid from "../../../../../assets/img/check-solid.png";
import { useNavigate } from "react-router-dom";
import { US_TINSchema } from "../../../../../schemas/w8Ben";
import {
  W8_state,
  getTinTypes,
  getAllCountries,
} from "../../../../../Redux/Actions";
 import Infoicon from "../../../../../assets/img/info.png";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BreadCrumbComponent from "../../../../reusables/breadCrumb";

export default function Tin(props: any) {
  const history = useNavigate();
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;
  const [expanded, setExpanded] = React.useState<string | false>("");
  const [ustinArray, setUStinArray] = useState([]);
  const [ustinValue, setUStinvalue] = useState([]);
  const [notUsIndividual, setNonUsIndividual] = useState([]);
  useEffect(() => {
    dispatch(getAllCountries());
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
        setNonUsIndividual(nonData);
      })
    );
  }, []);
  const onChangeUsInit = (values: any) => {
    let data;
    console.log("here");
    if (values.isUSIndividual == "no") {
      data = ustinArray.filter((ele: any | undefined) => {
        // Filter out elements where usIndividual is true
        return ele?.usIndividual === false;
      });
      console.log("yes", data);
      // Do something with the filtered data...
    } else {
      data = ustinArray.filter((ele: any | undefined) => {
        // Filter out elements where usIndividual is false
        return ele?.usIndividual === true;
      });
      console.log("no");
      // Do something with the filtered data...
    }
    console.log(data, "data");
    setUStinvalue(data);
  };
  const allCountriesData = useSelector(
    (state: any) => state.getCountriesReducer
  );

  const getCountriesReducer = useSelector(
    (state: any) => state.getCountriesReducer
  );
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const onBoardingFormValues = JSON.parse(
    localStorage.getItem("agentDetails") ?? "null"
  );
  // console.log("first", onBoardingFormValues);
  const [toolInfo, setToolInfo] = useState("");
  const dispatch = useDispatch();

  // const onBoardingFormValues=localStorage.getItem(JSON.parse("agentDetails"));
  // console.log("first",onBoardingFormValues );

  const initialValue = {
    FTINFeild: "",
    FTINFeild1: "",
    usTinTypeId: onBoardingFormValues?.usTinTypeId
      ? onBoardingFormValues?.usTinTypeId
      : 0,

    usTin: onBoardingFormValues?.usTin ? onBoardingFormValues?.usTin : "",
    // usTinTypeId:0,
    // usTin:"",
    tinValue: "",
    notAvailable: false,
    foreignTINCountry: onBoardingFormValues?.foreignTINCountryId
      ? onBoardingFormValues?.foreignTINCountryId
      : "",
    foreignTIN:
      // onBoardingFormValues?.foreignTIN
      // ? onBoardingFormValues?.foreignTIN
      // : 
      "",
    isFTINNotLegallyRequired: false,
    tinisFTINNotLegallyRequired: "",
    // tinAlternativeFormate: true,
    isNotLegallyFTIN: "",
  };
  const [clickCount, setClickCount] = useState(0);
  const [payload, setPayload] = useState({ usTin: "" })
  const formatTin = (e: any, values: any): any => {
    if (e.key === "Backspace" || e.key === "Delete") return;
    if (e.target.value.length === 3) {
      setPayload({ ...payload, usTin: payload.usTin + "-" });
      values.usTin = values.usTin + "-";
    }
    if (e.target.value.length === 6) {
      setPayload({ ...payload, usTin: payload.usTin + "-" });
      values.usTin = values.usTin + "-";
    }
  };
  function getUStinValue() {
    let val:string=""
    notUsIndividual.filter((item: any) => {
    if(item?.taxpayerIdTypeID ==
      onBoardingFormValues?.usTinTypeId){
         val= item.taxpayerIdTypeName 
      }
  })
  return val;}
  const isFieldDisabled = (values: any) => {
    if (values.isFTINNotLegallyRequired == "Yes") {
      return true;
    } else {
      return false;
    }
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
          <div style={{ padding: "20px 0px", height: "100%" }}>
            <BreadCrumbComponent breadCrumbCode={1249} formName={2} />
          </div>
        </div>

        <div className="col-8 mt-3">
          <div style={{ padding: "15px" }}>
            <Paper style={{ padding: "10px" }}>
              <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={initialValue}
                enableReinitialize
                validationSchema={US_TINSchema}
                onSubmit={(values, { setSubmitting }) => {
                  if (clickCount === 0) {
      
                    setClickCount(clickCount+1);
                  } else{
                    setSubmitting(true);
                    dispatch(
                      W8_state(values, () => {
                        history("/W-8BEN/Declaration/US_Tin/Claim");
                      })
                    );
                    history("/W-8BEN/Declaration/US_Tin/Claim");

                  }
              
                 
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

{values.isFTINNotLegallyRequired && clickCount === 1 ? (
 <div  style={{backgroundColor: "#e8e1e1" , padding:"10px"}}>
 <Typography>
 FTIN165
 <span className="mx-1">
 <img src={Infoicon} style={{color: "#ffc107",height:"22px",
 width:"20px",
 boxShadow:"inherit",


        
         cursor: "pointer",
         marginBottom:"3px"
        
       }}/>
   
  
 </span>

 <strong>Foreign Taxpayer Identification Number.</strong> <p>You have selected a country in the IRS TIN exemption list. If you are not legally required to obtain an FTIN from your jurisdiction of residence (including if the jurisdiction does not issue TINs). You may check the box "TIN Not Legally Required". By checking this box, you will be treated as having provided an explanation for not providing an FTIN. If you wish to provide a further (or other) explanation why you are not required to provide an FTIN you will be provided with the option to do so.</p>
 </Typography>



</div>
):""}
                    {toolInfo === "ForeignTin" ? (
                      <div className="mt-5">
                        <>{console.log(errors, "errors!!!!!")}</>



                        <Paper
                          style={{
                            backgroundColor: "#d1ecf1",
                            padding: "15px",
                          }}
                        >
                          <div
                            className="d-flex"
                            style={{ justifyContent: "space-between" }}
                          >
                            <Typography style={{ color: "#0c5460" }}>
                              United Kingdom TIN Format is 9999999999 false{" "}
                              <br /> 9- Numeric value only <br /> A- Alphabetic
                              character only <br /> *- Alphanumeric character
                              only <br /> ?- Characters optional after this{" "}
                              <br /> IF TIN format is not available, please
                              check the below box and continue
                            </Typography>

                            <Typography>
                              <CloseIcon
                                style={{
                                  color: "#0c5460",
                                  cursor: "pointer",
                                  fontSize: "medium",
                                }}
                                onClick={() => {
                                  setToolInfo("");
                                }}
                              />
                            </Typography>
                          </div>
                        </Paper>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* <>{console.log(errors, values)}</> */}
                    <Typography
                      align="left"
                      style={{
                        margin: "10px",
                        fontSize: "27px",
                        fontWeight: "550",
                      }}
                    >
                      Taxpayer Identification Number
                    </Typography>

                    <div>
                      {values.notAvailable === true ? (
                        <div
                          style={{
                            margin: "10px",
                            display: "flex",
                            marginTop: "25px",
                          }}
                          className="row"
                        >
                          <div className="col-lg-5 col-12">
                            <Typography style={{ fontSize: "14px" }}>
                              U.S. TIN Type
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
                                    Please select a U.S. TIN type status from
                                    the dropdown.
                                  </Typography>

                                  <Typography style={{ marginTop: "10px" }}>
                                    If a TIN type is not available, ensure you
                                    select the checkbox to the right of the
                                    field and provide an explanation as to why
                                    it is not available in the corresponding
                                    boxes at the bottom of the screen.
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
                              <option
                                key={onBoardingFormValues?.usTinTypeId}
                                value={onBoardingFormValues?.usTinTypeId}
                              >
                                {notUsIndividual.filter((item: any) => {
                                  item?.taxpayerIdTypeID ==
                                    onBoardingFormValues?.usTinTypeId;
                                })}
                              </option>

                              {/* {notUsIndividual?.map((ele: any) => (
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
                              ))} */}
                            </select>
                            {/* <p className="error">{errors.usTinTypeId}</p> */}
                          </div>

                          <div className="col-lg-5 col-12">
                            <Typography style={{ fontSize: "14px" }}>
                              U.S. TIN
                            </Typography>
                            <Input
                              disabled
                              fullWidth
                              placeholder="ENTER US TIN"
                              defaultValue="ENTER US TIN"
                              value={values.tinValue}
                              // onBlur={handleBlur}
                              onChange={(e: any) => {
                                handleChange(e);
                                setFieldValue("", "");
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
                            {values.notAvailable
                              ? ""
                              : // <p className="error">{errors.usTin}</p>
                                " "}
                          </div>
                          <div className="col-lg-2 ">
                            <div
                              className="radio"
                              style={{ marginTop: "17px" }}
                            >
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
                      ) : (
                        <div
                          style={{
                            margin: "10px",
                            display: "flex",
                            marginTop: "25px",
                          }}
                          className="row"
                        >
                          <div className="col-lg-5 col-12">
                            <Typography style={{ fontSize: "14px" }}>
                              U.S. TIN Type
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
                                    Please select a U.S. TIN type status from
                                    the dropdown.
                                  </Typography>

                                  <Typography style={{ marginTop: "10px" }}>
                                    If a TIN type is not available, ensure you
                                    select the checkbox to the right of the
                                    field and provide an explanation as to why
                                    it is not available in the corresponding
                                    boxes at the bottom of the screen.
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
                              <option value="1">--Select--</option>

                              {/* {notUsIndividual?.map((ele: any) => (
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
                              ))} */}
                                <option
                                key={onBoardingFormValues?.usTinTypeId}
                                value={onBoardingFormValues?.usTinTypeId}
                              >
                               {getUStinValue()}
                              
                              </option>

                            </select>
                            {/* <p className="error">{errors.usTinTypeId}</p> */}
                          </div>

                          <div className="col-lg-5 col-12">
                            <Typography style={{ fontSize: "14px" }}>
                              U.S. TIN
                            </Typography>
                            <Input
                              disabled={values.notAvailable}
                              fullWidth
                              type="text"
                              name="usTin"
                              value={values.usTin}
                              onKeyDown={(e) => formatTin(e, values)}
                              inputProps={{ maxLength: 11 }}
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
                            {values.notAvailable
                              ? ""
                              : // <p className="error">{errors.usTin}</p>
                                " "}
                          </div>
                          <div className="col-lg-2 ">
                            <div
                              className="radio"
                              style={{ marginTop: "17px" }}
                            >
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
                      )}

                      <div
                        style={{
                          margin: "10px",
                          display: "flex",
                          marginTop: "25px",
                        }}
                        className="row"
                      >
                        <div className="col-lg-5">
                          <Typography style={{ fontSize: "14px" }}>
                            Foreign TIN Country
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <select
                            disabled={
                              values?.tinisFTINNotLegallyRequired == "yes"
                                ? true
                                : false
                            }
                            // fullWidth
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
                          {/* {errors.foreignTINCountry && touched.foreignTINCountry ? (
                                <div>
                                  <Typography color="error">
                                    {errors?.foreignTINCountry}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )} */}

                          <div style={{ marginTop: "2px" }}>
                            <Checkbox
                              value={values.isFTINNotLegallyRequired}
                              checked={values.isFTINNotLegallyRequired}
                              onChange={(e) => {
                                handleChange(e);
                                {
                                  setFieldValue(
                                    "tinisFTINNotLegallyRequired",
                                    ""
                                  );
                                }
                                setFieldValue("foreignTIN", "");
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
                          <Typography style={{ fontSize: "14px" }}>
                            Foreign TIN{" "}
                            {values.foreignTINCountry == 257 ? (
                              <span>
                                {" "}
                                <Tooltip
                                  style={{
                                    backgroundColor: "black",
                                    color: "white",
                                  }}
                                  title={
                                    <>
                                      <a
                                        onClick={() =>
                                          setToolInfo("ForeignTin")
                                        }
                                      ></a>
                                    </>
                                  }
                                >
                                  <Info
                                    onClick={() => setToolInfo("ForeignTin")}
                                    style={{
                                      color: "#ffc107",
                                      fontSize: "15px",
                                      verticalAlign: "super",
                                      marginLeft: "5px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Tooltip>
                              </span>
                            ) : (
                              ""
                            )}
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
                              onChange={handleChange}
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
                                values.tinisFTINNotLegallyRequired === "Yes"
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
                          {values.isFTINNotLegallyRequired ? "" : " "}
                          {/* {errors.foreignTIN? (
                                  <p className="error">
                                    {errors?.foreignTIN}
                                  </p>
                              ) : (
                                ""
                              )} */}

                          <div>
                            <FormControl className="col-12 radio">
                              <RadioGroup
                                row
                                name="tinisFTINNotLegallyRequired"
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.tinisFTINNotLegallyRequired}
                                onChange={(e) => {
                                  handleChange(e);
                                  setFieldValue("foreignTIN", "");
                                  setFieldValue("foreignTINCountry", "0");
                                }}
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
                                      handleChange(
                                        "tinisFTINNotLegallyRequired"
                                      )("");
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
                        <FormControl
                          className="col-12 radio"
                          style={{ marginLeft: "20px" }}
                        >
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

                    {values.tinisFTINNotLegallyRequired === "Yes" ? (
                      <>
                        <div
                          className="my-3"
                          style={{ marginLeft: "20px", marginRight: "20px" }}
                        >
                          <Typography
                            align="left"
                            style={{ fontWeight: "bold" }}
                          >
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
                            style={{
                              fontWeight: "bold",
                              marginTop: "2rem",
                              textAlign: "justify",
                            }}
                          >
                            You have selected a FTIN country that is not on the
                            IRS exemption list, where, in most cases a FTIN
                            should be provided. You must provide a written
                            explanation here explaining why you are not
                            providing. By not providing we may not be able to
                            apply treaty benefits should they apply and may
                            render the form invalid.
                          </Typography>
                          <TextField
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="FTINFeild1"
                            value={values.FTINFeild1}
                            multiline
                            rows={4}
                            style={{
                              marginTop: "2rem",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "7rem",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          className="my-3"
                          style={{ marginLeft: "20px", marginRight: "20px" }}
                        >
                          <p className="error">{errors.FTINFeild1}</p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    {values.notAvailable ? (
                      <>
                        <div style={{ marginLeft: "20px" }}>
                          <Typography>
                            Please specify the reason for non-availability of US
                            TIN <span style={{ color: "red" }}>*</span>
                          </Typography>

                          <TextField
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="FTINFeild"
                            value={values.FTINFeild}
                            multiline
                            rows={4}
                            style={{
                              marginTop: "2rem",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "7rem",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div
                          className="my-3"
                          style={{ marginLeft: "20px", marginRight: "20px" }}
                        >
                          <p className="error">{errors.FTINFeild}</p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

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
                        View Form
                      </Button>
                      <Button
                        variant="contained"
                        style={{ color: "white", marginLeft: "15px" }}
                        type="submit"
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
                        onClick={() => {
                          history("/W-8BEN/Declaration/Non_US_Sorced/Status");
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
