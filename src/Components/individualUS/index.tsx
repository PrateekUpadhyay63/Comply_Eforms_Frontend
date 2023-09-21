import React, { useEffect, useState } from "react";
import {
  Collapse,
  CardHeader,
  IconButton,
  FormControl,
  Typography,
  Input,
  Button,
  Checkbox,
  Paper,
  TextField,
  Tooltip,
  Link,
} from "@mui/material";
// import { useDispatch} from "react-redux";
import {
  RemoveCircleOutlineOutlined,
  ControlPointOutlined,
  Info,
  Delete,
} from "@mui/icons-material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { individualSchema } from "../../schemas/individualindex";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "bootstrap/dist/css/bootstrap.css";
import entity from "../../../src/assets/img/entity.png";
import individual from "../../../src/assets/img/individual.png";
import { useDispatch,useSelector } from "react-redux";
import { postOnboarding,getAllCountries,getAllCountriesCode,getAllCountriesIncomeCode,getAllStateByCountryId } from "../../Redux/Actions";
import { AppDispatch } from "../../Redux/store";
// import DatePicker from "react-datepicker";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// import "react-datepicker/dist/react-datepicker.css";
import { apiGetUrl, apiPostUrl } from "../../api/apiUtils";
import { Value } from "sass";
// import { CheckBox } from '@mui/icons-material';
type ValuePiece = Date | null;
console.log(Date ,"date")
type Value2 = ValuePiece | [ValuePiece, ValuePiece];
export default function IndividualUs() {
  //States
  const [value, onChange] = useState<Value2>(null);
  const history = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState("");
  const [incomeArr, setIncomeArr] = useState(["intrest"]);
  const [bankLocation, setBankLocation] = useState("");
  const [alternateNo, setAlternateNo] = useState(false);
  const [alternateIncome, setAlternateIncome] = useState(false);
  const [countries, setCountries] = useState([]);
  const [countriesCode, setCountriesCode] = useState([]);
  const [incomeCodes, setIncomeCodes] = useState([]);
  const [usStates, setUsStates] = useState([]);
  const [toolInfo, setToolInfo] = useState("");
  const allCountriesData = useSelector((state:any) => state.getCountriesReducer);
  const [payload, setPayload] = useState({
    agentId: 3,
    businessTypeId: 1,
    isUSEntity: true,
    isUSIndividual: true,
    uniqueIdentifier: "",
    firstName: "",
    lastName: "",
    countryOfCitizenshipId: 0,
    dob: "",
    nameOfDisregarded: "",
    entityName: "",
    usTinTypeId: 0,
    usTin: "",
    foreignTINCountryId: 0,
    foreignTIN: "",
    foreignTINNotAvailable: true,
    alternativeTINFormat: true,
    giin: "",
    permanentResidentialCountryId: 0,
    permanentResidentialStreetNumberandName: "",
    permanentResidentialAptSuite: "",
    permanentResidentialCityorTown: "",
    permanentResidentialStateorProvince: "",
    permanentResidentialZipPostalCode: "",
    isAddressRuralRoute: true,
    isAddressPostOfficeBox: true,
    isCareOfAddress: true,
    isalternativebusinessaddress: true,
    permanentResidentialCountryId1: 0,
    permanentResidentialStreetNumberandName1: "",
    permanentResidentialAptSuite1: "",
    permanentResidentialCityorTown1: "",
    permanentResidentialStateorProvince1: "",
    permanentResidentialZipPostalCode1: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    primaryContactNumberId: 0,
    primaryContactNumber: "",
    alternativeNumberId: 0,
    alternativeNumber: "",
    alternativeNumberId1: 0,
    alternativeNumber1: "",
    incomeTypeId: 0,
    paymentTypeId: 0,
    accountHolderName: "",
    accountBankName: "",
    accountBankBranchLocationId: 0,
    accountNumber: "",
    abaRouting: "",
    iban: "",
    swiftCode: "",
    bankCode: "",
    makePayable: "",
    payResidentalCountryId: 0,
    payStreetNumberAndName: "",
    payAptSuite: "",
    vatId: 0,
    vat: "",
    doingBusinessAsName: "",
    payCityorTown: "",
    payStateOrProvince: "",
    payZipPostalCode: "",
    sortCode: "",
    bsb: "",
    capacityId: 1,
    isCorrectPaymentPurposes: true,
    isConfirmed: true,
  });
  var initialValues = {
    agentId: 3,
    businessTypeId: 1,
    isUSEntity: "yes",
    isUSIndividual: "yes",
    uniqueIdentifier: "",
    firstName: "",
    lastName: "",
    countryOfCitizenshipId: 0,
    dob: "",
    nameOfDisregarded: "",
    entityName: "",
    usTinTypeId: 0,
    usTin: "",
    foreignTINCountryId: 0,
    foreignTIN: "",
    foreignTINNotAvailable: false,//
    alternativeTINFormat: true,//
    giin: "",
    permanentResidentialCountryId: 0,
    permanentResidentialStreetNumberandName: "",
    permanentResidentialAptSuite: "",
    permanentResidentialCityorTown: "",
    permanentResidentialStateorProvince: "",
    permanentResidentialZipPostalCode: "",
    isAddressRuralRoute: "yes",
    isAddressPostOfficeBox: "yes",
    isCareOfAddress: "yes",
    isalternativebusinessaddress: "yes",
    permanentResidentialCountryId1: 0, 
    permanentResidentialStreetNumberandName1: "",
    permanentResidentialAptSuite1: "",
    permanentResidentialCityorTown1: "",
    permanentResidentialStateorProvince1: "",
    permanentResidentialZipPostalCode1: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    primaryContactNumberId: 0,
    primaryContactNumber: "",
    alternativeNumberId: 0,
    alternativeNumber: "",
    alternativeNumberId1: 0,
    alternativeNumber1: "",
    incomeTypeId: 0,
    paymentTypeId: 0,
    accountHolderName: "",
    accountBankName: "",
    accountBankBranchLocationId: 0,
    accountNumber: "",
    abaRouting: "",
    iban: "",
    swiftCode: "",
    bankCode: "",
    makePayable: "",
    payResidentalCountryId: 0,
    payStreetNumberAndName: "",
    payAptSuite: "",
    vatId: 0,
    vat: "",
    doingBusinessAsName: "",
    payCityorTown: "",
    payStateOrProvince: "",
    payZipPostalCode: "",
    sortCode: "",
    bsb: "",
    capacityId: 1,
    isCorrectPaymentPurposes: true,
    isConfirmed: true,
  };

  // useEffect(() => {
  //   apiGetUrl("GetCountries", "", {})
  //     .then((res) => {
  //       setCountries(res.data);
  //       console.log(res.data, "res.data");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   apiGetUrl("GetCountriesCode", "", {})
  //     .then((res) => {
  //       setCountriesCode(res.data);
  //       console.log(res.data, "res.data");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   apiGetUrl("GetAllIncomeCodes", "", {})
  //     .then((res) => {
  //       setIncomeCodes(res.data);
  //       console.log(res.data, "res.data");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (payload.permanentResidentialCountryId == 258) {
  //     apiGetUrl("GetStateByCountryId", "", {})
  //       .then((res) => {
  //         setUsStates(res.data);
  //         console.log(res.data, "res.data");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [payload.permanentResidentialCountryId]);
  const formatDate = (date:any) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1; // Months are 0-indexed
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
  
    const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
    // return formattedDate;
    console.log('formattedDate==',formattedDate)
  };
  useEffect(() => {
   dispatch(getAllCountries())
  }, []);

  const redirectFunc = () => {
    history("/Term");
  };

  // const history = useNavigate();

  const handleOpen = (val: any) => {
    if (open === val) {
      setOpen("");
    } else setOpen(val);
  };

  const addIncomeType = () => {
    setIncomeArr((incomeArr) => [...incomeArr, ""]);
  };

  const handleDelete = (i: any) => {
    const updatedIncomeCodes = [...incomeArr];
    updatedIncomeCodes.splice(i, 1);
    setIncomeArr(updatedIncomeCodes);
  };

  const handleSubmit = (e: any, values: any) => {
    console.log("b dzsfdvcyghgc", values);
    e.preventDefault();
    dispatch(postOnboarding(values, redirectFunc));
    redirectFunc();
  };

  const returnFieldName = (
    handleBlur: any,
    touched: any,
    errors: any,
    values: any,
    handleChange: any
  ) => {
    if (values.accountBankBranchLocationId == 258) {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              {/* {returnFieldName()} */}
              ABA/Routing
              <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              style={{
                border: " 1px solid #d9d9d9 ",
                height: " 36px",
                lineHeight: "36px ",
                background: "#fff ",
                fontSize: "13px",
                color: " #000 ",
                fontStyle: "normal",
                borderRadius: "1px",
                padding: " 0 10px ",
              }}
              id="outlined"
              name="abaRouting"
              placeholder="Enter ABA / Routing"
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.abaRouting && errors.abaRouting)}
              value={values.abaRouting}
            />
            <p className="error">
              {errors.abaRouting}
            </p>
          </FormControl>
        </div>
      );
    } else if (values.accountBankBranchLocationId == 257) {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              {/* {returnFieldName()} */}
              Sort Code
              <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              style={{
                border: " 1px solid #d9d9d9 ",
                height: " 36px",
                lineHeight: "36px ",
                background: "#fff ",
                fontSize: "13px",
                color: " #000 ",
                fontStyle: "normal",
                borderRadius: "1px",
                padding: " 0 10px ",
              }}
              id="outlined"
              name="sortCode"
              placeholder="Sort Code"
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.sortCode && errors.sortCode)}
              value={values.sortCode}
            />
            <p className="error">{errors.sortCode}</p>
          </FormControl>
        </div>
      );
    }else if (payload.accountBankBranchLocationId == 16) {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              {/* {returnFieldName()} */}
              BSB
              <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              required
              style={{
                border: " 1px solid #d9d9d9 ",
                height: " 36px",
                lineHeight: "36px ",
                background: "#fff ",
                fontSize: "13px",
                color: " #000 ",
                fontStyle: "normal",
                borderRadius: "1px",
                padding: " 0 10px ",
              }}
              id="outlined"
              name="bsb"
              placeholder="Enter Bank Code"
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.bsb && errors.bsb)}
              value={values.bsb}
            />
            <p className="error">{errors.bsb}</p>
          </FormControl>
        </div>
      );
    }  else {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              Bank Code
              <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              style={{
                border: " 1px solid #d9d9d9 ",
                height: " 36px",
                lineHeight: "36px ",
                background: "#fff ",
                fontSize: "13px",
                color: " #000 ",
                fontStyle: "normal",
                borderRadius: "1px",
                padding: " 0 10px ",
              }}
              id="outlined"
              name="bankCode"
              placeholder=" Enter Bank Code"
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.bankCode && errors.bankCode)}
              value={values.bankCode}
            />
            <p className="error">{errors.bankCode}</p>
          </FormControl>
        </div>
      );
    }
  };

  const formatTin = (e: any) => {
    if (e.key === "Backspace" || e.key === "Delete") return;
    if (e.target.value.length === 3) {
      setPayload({ ...payload, usTin: payload.usTin + "-" });
    }
    if (e.target.value.length === 6) {
      setPayload({ ...payload, usTin: payload.usTin + "-" });
    }
    // if(e.target.value.length === 14) {
    //   setPayload({ ...payload, usTin: payload.usTin +"-" })
    // }
  };
  // const clickInfo = () => {
  //   alert(
  //     "Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this"
  //   );
  // };

  // const chek = (err:any)=>{
  //   console.log(err);

  // }
  return (
    <section className="inner_content" style={{ backgroundColor: "#0c3d69" }}>
      <Typography
        align="center"
        style={{
          fontSize: "32px",
          fontWeight: "500",
          color: "white",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        Account Holder Details
      </Typography>

      <div className="container-fluid">
        <div className="row"></div>

        <div className="row">
          <div className="col-12">
            <div className="tabview">
              <ul>
                <li>
                  <button className="active">
                    <div>
                      <div>
                        {" "}
                        <img src={individual} />
                      </div>
                      <span style={{fontSize:"14px",fontWeight:"600"}}>Individual</span>
                    </div>
                  </button>
                </li>
                <li style={{fontSize:"14px",fontWeight:"400"}}>OR</li>
                <li>
                  <button onClick={() => history("/EntityUs")}>
                    <div>
                      <div>
                        {" "}
                        <img src={entity} />
                      </div>
                      <span style={{fontSize:"14px",fontWeight:"600"}}>Entity</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-lg-12 mt-3 "
          style={{ padding: "1.5rem 8px 8px 8px" }}
        >
          <Paper
            elevation={6}
            style={{ padding: "17px" }}
            className="underline-none"
          >
            <Formik
              initialValues={initialValues}
              enableReinitialize
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
               const payload = {
                  agentId: values?.agentId,
                  businessTypeId: values?.businessTypeId,
                  isUSEntity: values?.isUSEntity == "yes" ? true : false,
                  isUSIndividual: values?.isUSIndividual == "yes" ? true : false,
                  uniqueIdentifier: values?.uniqueIdentifier,
                  firstName: values?.firstName,
                  lastName: values?.lastName,
                  countryOfCitizenshipId:values?.countryOfCitizenshipId,
                  dob: values?.dob,
                  nameOfDisregarded: values?.nameOfDisregarded,
                  entityName: values?.entityName,
                  usTinTypeId: values?.usTinTypeId,
                  usTin: values?.usTin,
                  foreignTINCountryId:values?.foreignTINCountryId,
                  foreignTIN: values?.foreignTIN,
                  foreignTINNotAvailable: values?.foreignTINNotAvailable,//
                  alternativeTINFormat: values?.alternativeTINFormat,//
                  giin: values?.giin,
                  permanentResidentialCountryId: values?.permanentResidentialCountryId,
                  permanentResidentialStreetNumberandName: values?.permanentResidentialStreetNumberandName,
                  permanentResidentialAptSuite: values?.permanentResidentialAptSuite,
                  permanentResidentialCityorTown: values?.permanentResidentialCityorTown,
                  permanentResidentialStateorProvince: values?.permanentResidentialStateorProvince,
                  permanentResidentialZipPostalCode: values?.permanentResidentialZipPostalCode,
                  isAddressRuralRoute: values?.isAddressRuralRoute == "yes" ? true : false,
                  isAddressPostOfficeBox: values?.isAddressPostOfficeBox == "yes" ? true : false,
                  isCareOfAddress: values?.isCareOfAddress == "yes" ? true : false,
                  isalternativebusinessaddress: values?.isalternativebusinessaddress == "yes" ? true : false,
                  permanentResidentialCountryId1: values?.permanentResidentialCountryId1,
                  permanentResidentialStreetNumberandName1: values?.permanentResidentialStreetNumberandName1,
                  permanentResidentialAptSuite1: values?.permanentResidentialAptSuite1,
                  permanentResidentialCityorTown1: values?.permanentResidentialCityorTown1,
                  permanentResidentialStateorProvince1: values?.permanentResidentialStateorProvince1,
                  permanentResidentialZipPostalCode1: values?.permanentResidentialZipPostalCode1,
                  contactFirstName: values?.contactFirstName,
                  contactLastName: values?.contactLastName,
                  contactEmail: values?.contactEmail,
                  primaryContactNumberId: values?.primaryContactNumberId,
                  primaryContactNumber: values?.primaryContactNumber,
                  alternativeNumberId: values?.alternativeNumberId,
                  alternativeNumber: values?.alternativeNumber,
                  alternativeNumberId1: values?.alternativeNumberId1,
                  alternativeNumber1: values?.alternativeNumber1,
                  incomeTypeId: values?.incomeTypeId,
                  paymentTypeId: values?.paymentTypeId,
                  accountHolderName: values?.accountHolderName,
                  accountBankName: values?.accountBankName,
                  accountBankBranchLocationId: values?.accountBankBranchLocationId,
                  accountNumber: values?.accountNumber,
                  abaRouting: values?.abaRouting,
                  iban: values?.iban,
                  swiftCode: values?.swiftCode,
                  bankCode: values?.bankCode,
                  makePayable: values?.makePayable,
                  payResidentalCountryId: values?.payResidentalCountryId,
                  payStreetNumberAndName: values?.payStreetNumberAndName,
                  payAptSuite: values?.payAptSuite,
                  vatId: values?.vatId,
                  vat: values?.vat,
                  doingBusinessAsName: values?.doingBusinessAsName,
                  payCityorTown: values?.payCityorTown,
                  payStateOrProvince: values?.payStateOrProvince,
                  payZipPostalCode: values?.payZipPostalCode,
                  sortCode: values?.sortCode,
                  bsb: values?.bsb,
                  capacityId: values?.capacityId,
                  isCorrectPaymentPurposes: values?.isCorrectPaymentPurposes,
                  isConfirmed: values?.isConfirmed,
                };
                console.log(values,"values");
                dispatch(postOnboarding(payload, redirectFunc));
              }}
              validationSchema={individualSchema}
            >
              {({
                errors,
                touched,
                handleBlur,
                values,
                handleSubmit,
                handleChange,
                isSubmitting,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <>
                  {console.log(values ,"hbd",errors)
                  }
                  </>
                  <CardHeader
                    className="flex-row-reverse"
                    title={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "left",
                          marginLeft: "13px",
                        }}
                      >
                        Basic Details
                        <Tooltip
                          style={{ backgroundColor: "black", color: "white" }}
                          title={
                            <>
                              <Typography color="inherit">
                                Basic details - individual
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
                              marginLeft: "5px",
                              cursor: "pointer",
                            }}
                          
                          />
                        </Tooltip>
                        <p className="error">
                            {
                            errors?.isUSIndividual ||
                            errors?.firstName ||
                            errors?.lastName ||
                            errors?.countryOfCitizenshipId ||
                            errors?.dob ||
                             errors?.uniqueIdentifier ? "Mandatory information Required" : ""}
                          </p>
                      </div>
                    }
                    action={
                      <IconButton
                        onClick={() => handleOpen("basics")}
                        aria-label="expand"
                        size="small"
                        style={{ marginTop: "3px" }}
                      >
                        {open === "basics" ? (
                          <RemoveCircleOutlineOutlined />
                        ) : (
                          <ControlPointOutlined />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  {toolInfo === "basic" ? (
                    <div>
                      <Paper
                        style={{ backgroundColor: "#dedcb1", padding: "15px" }}
                      >
                        <Typography>
                          Basic details - are you a U.S. Individual?
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          Select 'Yes' for:
                        </Typography>
                        <Typography>
                          An individual who was born in the U.S., Puerto Rico,
                          Guam, or the U.S. Virgin Islands, or who retains U.S.
                          Green Card entitlement, or who has a parent who is a
                          U.S. citizen.
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          Select 'No' for: An individual who was not born in the
                          U.S., Puerto Rico, Guam, or the U.S. Virgin Islands,
                          who does not retain U.S. Green Card entitlement, and
                          whose parents are not considered U.S. persons
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          Ref: EH165
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

                  <Collapse
                    className="px-5"
                    in={open === "basics"}
                    timeout="auto"
                    unmountOnExit
                  >
                    <FormControl className="w-100">
                      <div className="row">
                        <div>
                          <Typography
                            align="left"
                            style={{ marginTop: "20px" }}
                          >
                            Are you a U.S Individual?
                            <span style={{ color: "red" }}>*</span>
                           
                          </Typography>

                          <div className="d-flex">
                            <FormControl
                              error={Boolean(
                                touched.isUSIndividual &&
                                  errors.isUSIndividual
                              )}
                            >
                              <RadioGroup
                                id="isUSIndividual"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.isUSIndividual} 
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  
                                  value="yes"
                                  name="isUSIndividual"
                                  label="Yes"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  value="no"
                                  name="isUSIndividual"
                                  label="No"
                                />
                              </RadioGroup>
                              {errors.isUSIndividual &&
                              touched.isUSIndividual ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isUSIndividual}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                            {/* <Typography className="my-auto">Yes</Typography>
                            <Radio
                              checked={values.isUSEntity}
                              onChange={handleChange}
                              // setPayload({ ...payload, isUSEntity: true })
                              value={true}
                              name="isUSEntity"
                              inputProps={{ "aria-label": "Yes" }}
                            />
                            <Typography className="my-auto">No</Typography>
                            <Radio
                              checked={!values.isUSEntity}
                              onChange={handleChange}
                              value={false}
                              name="isUSEntity"
                              inputProps={{ "aria-label": "No" }}
                            /> */}
                          </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6">
                          <Typography className="d-flex w-100">
                            Unique Identifier
                            <span style={{ color: "red" }}>*</span>
                            <Info
                              style={{ color: "#ffc107", fontSize: "15px" }}
                          
                            />
                          </Typography>
                          <Input
                            style={{
                              border: " 1px solid #d9d9d9 ",
                              height: " 36px",
                              lineHeight: "36px ",
                              background: "#fff ",
                              fontSize: "13px",
                              color: " #000 ",
                              fontStyle: "normal",
                              borderRadius: "1px",
                              padding: " 0 10px ",
                            }}
                            className="w-100 input"
                            name="uniqueIdentifier"
                            id="outlined"
                            placeholder="Enter Instructor Identifier"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.uniqueIdentifier &&
                                errors.uniqueIdentifier
                            )}
                            value={values.uniqueIdentifier}
                          />
                          <p className="error">{errors.uniqueIdentifier}</p>
                        </div>
                      </div>
                    </FormControl>

                    {values.isUSIndividual === 'no' ? (
                      <div className="row">
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              First Name<span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="firstName"
                              placeholder="Enter First Name"
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.firstName && errors.firstName
                              )}
                              onChange={handleChange}
                              value={values.firstName}
                            />
                            <p className="error">{errors.firstName}</p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Last Name<span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="lastName"
                              placeholder="Enter Last Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.lastName && errors.lastName
                              )}
                              value={values.lastName}
                            />
                            <p className="error">{errors.lastName}</p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Country Of Citizenship
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                           <>{console.log(allCountriesData,"allCountriesData")}</>
                            <select
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="countryOfCitizenshipId"
                              id="countryId"
                              onChange={(e) => {
                                handleChange(e); //condition
                              }}
                              onBlur={handleBlur}
                              // error={Boolean(touched.countryOfCitizenshipId && errors.countryOfCitizenshipId)}
                              value={values.countryOfCitizenshipId}
                            >
                              <option value="">-Select-</option>
                              <option value={257}>United Kingdom</option>
                              <option value={258}>United States</option>
                              <option value="">---</option>
                              {countries.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <p className="error">
                              {errors.countryOfCitizenshipId}
                            </p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Date of Birth
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                            {/* <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              type="date"
                              id="outlined"
                              name="dob"
                              // onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(touched.dob && errors.dob)}
                              value={values.dob}
                              onChange={(e) => { handleChange(e)

                                setFieldValue('dob', formatDate(e.target.value));
                                // console.log(formatDate(e.target.value),e.target.value,"e.target.value")
                              }}
                            /> */}
                            <DatePicker 
                             name="dob"
                            onChange={
                            (date) => {
                              onChange(date);
                              setFieldValue("dob",date)
                            }
                            } 
                            value={value}
                            onBlur={handleBlur}
                            clearIcon ={null}
                            format="MM-dd-yy"
                            dayPlaceholder="DD"
                            monthPlaceholder="MM"
                            yearPlaceholder="YYYY"
                            />
                            <p className="error">{errors.dob}</p>
                          </FormControl>
                        </div>
                        {/* <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Name of disregarded entity receiving the payments
                              (if applicable)
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="nameOfDisregarded"
                              placeholder="Enter Business Name"
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  nameOfDisregarded: e.target.value,
                                })
                              }
                              value={values.nameOfDisregarded}
                            />
                          </FormControl>
                        </div> */}
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              First Name<span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="firstName"
                              placeholder="Enter First Name"
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.firstName && errors.firstName
                              )}
                              onChange={handleChange}
                              value={values.firstName}
                            />
                            <p className="error">{errors.firstName}</p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Last Name<span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="lastName"
                              placeholder="Enter Last Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.lastName && errors.lastName
                              )}
                              value={values.lastName}
                            />
                            <p className="error">{errors.lastName}</p>
                          </FormControl>
                        </div>
                      </div>
                    )}
                  </Collapse>
                  <hr className="w-100"></hr>
                  {/* Tax Identifier Section */}
                  <div>
                    <CardHeader
                      className="flex-row-reverse"
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "left",
                            marginLeft: "13px",
                          }}
                        >
                          Tax Identification Numbers
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Taxpayer information
                                </Typography>
                                <a onClick={() => setToolInfo("tin")}>
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
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            
                            />
                          </Tooltip>
                          <p className="error">
                            {errors?.vatId ? "Mandatory information Required" : ""}
                          </p>
                        </div>
                      }
                      action={
                        <IconButton
                          onClick={() => handleOpen("tax")}
                          aria-label="expand"
                          size="small"
                          style={{ marginTop: "3px" }}
                        >
                          {open === "tax" ? (
                            <RemoveCircleOutlineOutlined />
                          ) : (
                            <ControlPointOutlined />
                          )}
                        </IconButton>
                      }
                    ></CardHeader>
                    {toolInfo === "tin" ? (
                      <div>
                        <Paper
                          style={{
                            backgroundColor: "#dedcb1",
                            padding: "15px",
                          }}
                        >
                          <Typography>
                            Where applicable enter your US and Non-US (i.e.
                            “Foreign”) taxpayer identification number(s) along
                            with the US TIN Type and Foreign Country(ies)
                            correlating to the FTIN(s).?
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            Please note that some jurisdictions do not provide
                            FTINs and this will be indicated if you select one
                            of those jurisdictions. If you select a country that
                            normally does provide an FTIN, but you do not wish
                            to provide or cannot provide, you have the option to
                            provide an explanation. Not providing a FTIN when it
                            would normally be available may lead to the highest
                            rate of withholding being applied, where treaty
                            benefits could apply.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            Note: the Foreign TIN box restricts formatting per
                            the Foreign Country selected, based on OECD
                            guidance. By ticking “TIN Format not available”,
                            this disables the formatting so that any format may
                            be input.
                            </Typography>
                            <Typography style={{ marginTop: "10px" }}>
                             An individual’s US TIN type is generally a
                            Social Security Number (SSN) or an Individual Tax
                            Identification Number (ITIN).?
                            </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            An entity’s US TIN may be an employer identification
                            number (EIN): including a withholding foreign
                            partnership/trust EIN (WP/T-EIN) or a qualified
                            intermediary EIN (QI-EIN).{" "}
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            A TIN must be furnished on US tax returns when filed
                            or when claiming treaty benefits. A US or Foreign
                            TIN must generally be provided on a withholding
                            certificate (i.e. W-8) if the beneficial owner is
                            receiving effectively connected income (ECI),
                            claiming tax treaty benefits (other than for income
                            from marketable, actively traded, securities),
                            claiming an exemption for ECI or claiming an
                            exemption for certain annuities.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            If you are required to have a US TIN but do not have
                            one you may apply for an EIN on Form SS-4,
                            Application for Employer Identification Number, a
                            SSN on Form SS-5, Application for a Social Security
                            Card or an ITIN on Form W-7, IRS Application for
                            Individual Taxpayer Identification Number.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            IRS Form Guidance:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            See Regulations section 1.1441-1(e)(4) (vii) for
                            when you are required to provide a U.S. TIN on a
                            Form W-8 associated with a payment subject to
                            chapter 3 withholding. A partner in a partnership
                            conducting a trade or business in the United States
                            will likely be allocated effectively connected
                            taxable income. The partner is required to file a
                            U.S. federal income tax return and must have a U.S.
                            taxpayer identification number (TIN). You must
                            provide a U.S. TIN if you are:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - Claiming an exemption from withholding under
                            section 871(f) for certain annuities received under
                            qualified plans, or{" "}
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - Claiming benefits under an income tax treaty and
                            have not provided a foreign TIN on line 9b.{" "}
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            However, a TIN is not required to be shown in order
                            to claim treaty benefits on the following items of
                            income:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - Dividends and interest from stocks and debt
                            obligations that are actively traded;
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - investment company registered under the Investment
                            Company Act of 1940 (mutual fund);
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - Dividends, interest, or royalties from units of
                            beneficial interest in a unit investment trust that
                            are (or were upon issuance) publicly offered and are
                            registered with the SEC under the Securities Act of
                            1933;
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            - and Income related to loans of any of the above
                            securities.
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

                    <Collapse
                      className="px-5"
                      in={open === "tax"}
                      timeout="auto"
                      unmountOnExit
                    >
                      {values.isUSIndividual === 'no' ? (
                        <div className="col-12 d-flex mt-3">
                          
                          <div className="col-lg-3 col-6 col-md-3 ">
                          <Typography align="left" className="d-flex w-100">
                            U.S. TIN Type
                            {/* <span style={{ color: 'red' }}>*</span> */}
                          </Typography>

                          <FormControl className="w-100">
                            <select
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="usTinTypeId"
                              id="Income"
                              defaultValue={1}
                              onChange={handleChange}
                              value={values.usTinTypeId}
                            >
                              <option value="1">-Select-</option>
                              <option value="2">SSN/ITIN</option>
                              <option value="3">U.S. TIN not applicable</option>
                              <option value="4">U.S. TIN not available</option>
                            </select>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mx-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              U.S. TIN
                              {/* <span style={{ color: 'red' }}>*</span> */}
                            </Typography>
                            <Input
                              disabled={
                                values.usTinTypeId == 3 ||
                                values.usTinTypeId == 4
                              }
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="usTin"
                              placeholder="Enter U.S. TIN"
                              onKeyDown={formatTin}
                              onChange={handleChange}
                              inputProps={{ maxLength: 11 }}
                              // onBlur={handleBlur}
                              //   error={Boolean(touched.usTin && errors.usTin)}
                              value={values.usTin}
                            />
                          </FormControl>
                        </div>
                        
                          <div className="col-lg-3 col-6 col-md-3 ">
                            

                            <FormControl className="w-100">
                            <Typography align="left" className="d-flex w-100">
                              Foreign TIN Country
                              {/* <span style={{ color: 'red' }}>*</span> */}
                            </Typography>
                              <select
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "36px",
                                }}
                                name="foreignTINCountryId"
                                id="Income"
                                defaultValue={0}
                                onChange={(e)=>{handleChange(e)}}
                                value={values.foreignTINCountryId}
                              >
                                <option value={0}>-Select-</option>
                                <option value={1}>-Select1-</option>
                                <option value={257}>-uk-</option>
                                {countries.map(({ id, name }) => (
                                  <option value={id}>{name}</option>
                                ))}
                              </select>
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mx-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Foreign TIN
                                {/* <span style={{ color: 'red' }}>*</span> */}
                              </Typography>
                              <Input
                                disabled={
                                  values.foreignTINCountryId == 0 ||
                                  (values.foreignTINCountryId != 0 &&
                                    values.foreignTINNotAvailable == true)
                                }
                                style={{
                                  border: " 1px solid #d9d9d9 ",
                                  height: " 36px",
                                  lineHeight: "36px ",
                                  background: "#fff ",
                                  fontSize: "13px",
                                  color: " #000 ",
                                  fontStyle: "normal",
                                  borderRadius: "1px",
                                  padding: " 0 10px ",
                                }}
                                id="outlined"
                                name="foreignTIN"
                                placeholder="Enter foreign TIN"
                                onChange={handleChange}
                                value={values.foreignTIN}
                              />
                            </FormControl>
                            {/* <div className="d-flex">
                              
                              <Typography
                                style={{ fontSize: "13px", marginTop: "10px" }}
                              >
                                Not Available{" "}
                              </Typography>
                              <Radio
                                disabled={values.foreignTINCountryId == 0}
                                // foreignTINNotAvailable
                                name="radio-buttons"
                                checked={values.foreignTINNotAvailable}
                                onChange={(e) => {
                                  handleChange(e); //condition
                                }}
                                // setPayload({
                                //   ...payload,
                                //   foreignTINNotAvailable:
                                //     !payload.foreignTINNotAvailable,
                                //   alternativeTINFormat:
                                //     payload.foreignTINNotAvailable,
                                // })
                                // value="no"

                                inputProps={{ "aria-label": "No" }}
                              />
                              <Typography
                                style={{ fontSize: "13px", marginTop: "10px" }}
                              >
                                Alternative TIN Format
                              </Typography>
                              <Radio
                                disabled={
                                  values.foreignTINCountryId == 0 ||
                                  values.foreignTINCountryId != 257
                                }
                                name="radio-buttons"
                                checked={values.alternativeTINFormat}
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    alternativeTINFormat:
                                      !payload.alternativeTINFormat,
                                    foreignTINNotAvailable:
                                      payload.alternativeTINFormat,
                                  })
                                }
                                inputProps={{ "aria-label": "Yes" }}
                              />
                            </div> */}
                            <div className = "d-flex">
                            <Typography
                                style={{ fontSize: "13px", marginTop: "10px" }}
                              >
                                Not Available{" "}
                              </Typography>
                            <FormControl
                              error={Boolean(
                                touched.foreignTINNotAvailable &&
                                  errors.foreignTINNotAvailable
                              )}
                            >
                              <Checkbox
                                id="foreignTINNotAvailable"
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.foreignTINNotAvailable}
                                disabled={values.foreignTINCountryId == 0}
                                checked={values.foreignTINNotAvailable}
                                onChange={(e) => {handleChange(e)
                                if(e.target.value) setFieldValue('alternativeTINFormat', false)
                                // if(e.target.value) setFieldValue('foreignTINNotAvailable',!values.foreignTINNotAvailable)
                                } }
                              />
                              
                              {errors.foreignTINNotAvailable &&
                              touched.foreignTINNotAvailable ? (
                                <div>
                                  <Typography color="error">
                                    {errors.foreignTINNotAvailable}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                            <Typography
                                style={{ fontSize: "13px", marginTop: "10px" }}
                              >
                                Alternative TIN Format
                              </Typography>
                              <FormControl
                              error={Boolean(
                                touched.alternativeTINFormat &&
                                  errors.alternativeTINFormat
                              )}
                            >
                              <Checkbox
                                id="alternativeTINFormat"
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.alternativeTINFormat}
                                disabled={
                                  values.foreignTINCountryId == 0 ||
                                  values.foreignTINCountryId != 257 
                                }
                                checked={values.alternativeTINFormat}
                                onChange={(e) => {handleChange(e)
                                if(e.target.value) setFieldValue('foreignTINNotAvailable', false)
                                // if(e.target.value) setFieldValue('alternativeTINFormat',!values.alternativeTINFormat)
                                } }
                              />
                              
                              {errors.alternativeTINFormat &&
                              touched.alternativeTINFormat ? (
                                <div>
                                  <Typography color="error">
                                    {errors.alternativeTINFormat}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                            </div>
                          </div>
                          <div className="col-12 d-flex">
                            <div className="col-lg-3 col-6 col-md-3 ">
                              <Typography align="left" className="d-flex w-100">
                                Value Added Tax Number (VAT)
                                <span style={{ color: "red" }}>*</span>
                              </Typography>

                              <FormControl className="w-100">
                                <select
                                  style={{
                                    padding: " 0 10px",
                                    color: "#7e7e7e",
                                    fontStyle: "italic",
                                    height: "36px",
                                  }}
                                  name="vatId"
                                  defaultValue={0}
                                  onChange={handleChange}
                                  value={values.vatId}
                                >
                                  <option value={0}>-Select-</option>
                                  <option value={1}>My VAT Number is</option>
                                  <option value={2}>
                                    I Do Not Have A VAT Number
                                  </option>
                                </select>
                                <p className="error">{errors.vatId}</p>
                              </FormControl>
                            </div>

                            <div className="col-lg-3 col-6 col-md-3 mx-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  Value Added Tax Number (VAT)
                                  {/* <span style={{ color: 'red' }}>*</span> */}
                                </Typography>
                                <Input
                                  disabled={
                                    values.vatId == 0 || values.vatId == 2
                                  }
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  id="outlined"
                                  name="vat"
                                  placeholder="Enter Value Added Tax Number"
                                  // onKeyDown={formatTin}
                                  onChange={handleChange}
                                  inputProps={{ maxLength: 11 }}
                                  // onBlur={handleBlur}
                                  //   error={Boolean(touched.usTin && errors.vat)}
                                  value={values.vat}
                                />
                              </FormControl>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="col-12 d-flex">
                        <div className="col-lg-3 col-6 col-md-3 ">
                          <Typography align="left" className="d-flex w-100">
                            U.S. TIN Type
                            {/* <span style={{ color: 'red' }}>*</span> */}
                          </Typography>

                          <FormControl className="w-100">
                            <select
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="usTinTypeId"
                              id="Income"
                              defaultValue={1}
                              onChange={handleChange}
                              value={values.usTinTypeId}
                            >
                              <option value="1">-Select-</option>
                              <option value="2">SSN/ITIN</option>
                              <option value="3">Applied for</option>
                            </select>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mx-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              U.S. TIN
                              {/* <span style={{ color: 'red' }}>*</span> */}
                            </Typography>
                            <Input
                              disabled={
                                values.usTinTypeId == 3 ||
                                values.usTinTypeId == 4
                              }
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="usTin"
                              placeholder="Enter U.S. TIN"
                              onKeyDown={formatTin}
                              onChange={handleChange}
                              inputProps={{ maxLength: 11 }}
                              // onBlur={handleBlur}
                              //   error={Boolean(touched.usTin && errors.usTin)}
                              value={values.usTin}
                            />
                          </FormControl>
                        </div>
                        </div>
                      )}
                    </Collapse>
                    <hr className="w-100"></hr>

                    <CardHeader
                      className="flex-row-reverse"
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "left",
                            marginLeft: "13px",
                          }}
                        >
                          Permanent Residence Address
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Address Details
                                </Typography>
                                <a onClick={() => setToolInfo("Address")}>
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
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                             
                            />
                          </Tooltip>
                          <p className="error">
                            {errors?.permanentResidentialCountryId ||
                             errors?.permanentResidentialStreetNumberandName ||
                             errors?.permanentResidentialCityorTown || 
                             errors?.permanentResidentialZipPostalCode ||
                             errors?.isAddressRuralRoute || 
                             errors?.isalternativebusinessaddress ||
                             errors?.isAddressPostOfficeBox ||
                             errors?.isCareOfAddress ||
                             errors?.permanentResidentialCountryId1 ||
                             errors?.permanentResidentialStreetNumberandName1 ||
                             errors?.permanentResidentialCityorTown1 ||
                             errors?.permanentResidentialZipPostalCode1 ? "Mandatory information required" : ""}
                          </p>
                        </div>
                      }
                      action={
                        <IconButton
                          onClick={() => handleOpen("pra")}
                          aria-label="expand"
                          size="small"
                          style={{ marginTop: "3px" }}
                        >
                          {open === "pra" ? (
                            <RemoveCircleOutlineOutlined />
                          ) : (
                            <ControlPointOutlined />
                          )}
                        </IconButton>
                      }
                    ></CardHeader>

                    {toolInfo === "Address" ? (
                      <div>
                        <Paper
                          style={{
                            backgroundColor: "#dedcb1",
                            padding: "15px",
                          }}
                        >
                          <Typography>
                          Please enter the permanent residence address of the individual, business or organization the submission represents. This should be in the country where that payee’s income tax submission is made.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                          If there is a mailing address that differs from the permanent address, then please enter that as well.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            IRS Guidance:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            Non-US Person, W-8 submissions, should not use a
                            Post Office (PO Box), a Care-of-address, or mailing
                            address of a financial organization as these may not
                            be considered valid. If you do, the agent receiving
                            the form may require additional information from you
                            to help validate your residency status. Ref: EH005
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
                    <Collapse
                      className="px-5 "
                      in={open === "pra"}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className="col-lg-3 col-6 col-md-3">
                        <Typography align="left" className="d-flex w-100 ">
                          Country:
                          <span style={{ color: "red" }}>*</span>
                        </Typography>

                        <FormControl className="w-100">
                          <select
                            style={{
                              padding: " 0 10px",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "36px",
                            }}
                            name="permanentResidentialCountryId"
                            id="Income"
                            defaultValue={1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.permanentResidentialCountryId}
                          >
                            <option value={0}>-Select-</option>
                            <option value={45}>-canada-</option>
                            <option value={257}>United Kingdom</option>
                            <option value={258}>United States</option>
                            <option value="">-----</option>
                            {/* <option value={3}>-Select3-</option> */}
                            {countries.map(({ id, name }) => (
                              <option value={id}>{name}</option>
                            ))}
                          </select>
                          <p className="error">
                            {errors.permanentResidentialCountryId}
                          </p>
                        </FormControl>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Street Number and Name:
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="permanentResidentialStreetNumberandName"
                              placeholder="Enter Street Number and Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.permanentResidentialStreetNumberandName &&
                                  errors.permanentResidentialStreetNumberandName
                              )}
                              value={
                                values.permanentResidentialStreetNumberandName
                              }
                            />
                            <p className="error">
                              {errors.permanentResidentialStreetNumberandName}
                            </p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">Apt/Suite:</Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="permanentResidentialAptSuite"
                              placeholder="Enter Apt/Suite"
                              onChange={handleChange}
                              value={values.permanentResidentialAptSuite}
                            />
                            <p className="error">
                              {errors.permanentResidentialAptSuite}
                            </p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              City or Town:
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="permanentResidentialCityorTown"
                              placeholder="Enter City or Town"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.permanentResidentialCityorTown &&
                                  errors.permanentResidentialCityorTown
                              )}
                              value={values.permanentResidentialCityorTown}
                            />
                            <p className="error">
                              {errors.permanentResidentialCityorTown}
                            </p>
                          </FormControl>
                        </div>
                        {values.permanentResidentialCountryId == 258 ? (
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <Typography align="left" className="d-flex w-100 ">
                              State or Province:
                              {/* <span style={{ color: 'red' }}>*</span> */}
                            </Typography>

                            <FormControl className="w-100">
                              <select
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "36px",
                                }}
                                name="permanentResidentialStateorProvince"
                                // id="Income"
                                onChange={handleChange}
                                value={
                                  values.permanentResidentialStateorProvince
                                }
                              >
                                <option value="0">
                                  <em>--Select--</em>
                                </option>
                                {usStates.map(({ name }) => (
                                  <option value={name}>{name}</option>
                                ))}
                              </select>
                            </FormControl>
                          </div>
                        ) : (
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                State or Province:
                                {/* <span style={{ color: 'red' }}>*</span> */}
                              </Typography>
                              <Input
                                disabled={
                                  values.permanentResidentialCountryId == 0
                                }
                                style={{
                                  border: " 1px solid #d9d9d9 ",
                                  height: " 36px",
                                  lineHeight: "36px ",
                                  background: "#fff ",
                                  fontSize: "13px",
                                  color: " #000 ",
                                  fontStyle: "normal",
                                  borderRadius: "1px",
                                  padding: " 0 10px ",
                                }}
                                // id="outlined"
                                name="permanentResidentialStateorProvince"
                                placeholder="Enter State or Province"
                                onChange={handleChange}
                                value={
                                  values.permanentResidentialStateorProvince
                                }
                              />
                            </FormControl>
                          </div>
                        )}

                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Zip / Postal Code:
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="permanentResidentialZipPostalCode"
                              placeholder="Enter Zip or Postal Code"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.permanentResidentialZipPostalCode &&
                                  errors.permanentResidentialZipPostalCode
                              )}
                              value={values.permanentResidentialZipPostalCode}
                            />
                            <p className="error">
                              {errors.permanentResidentialZipPostalCode}
                            </p>
                          </FormControl>
                        </div>
                      </div>
                      {values.permanentResidentialCountryId == 45 ? (
                        <div className="mx-5">
                          <Typography style={{ marginTop: "20px" }}>
                            Is this address a rural route number?
                            <span style={{ color: "red" }}>*</span>
                          </Typography>

                          <div className="d-flex">
                          <FormControl
                              error={Boolean(
                                touched.isAddressRuralRoute &&
                                  errors.isAddressRuralRoute
                              )}
                            >
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              value= {values.isAddressRuralRoute}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="no"
                                control={<Radio />}
                                label="No"
                                name= "isAddressRuralRoute"
                              />
                              <FormControlLabel
                                value="yes"
                                control={<Radio />}
                                label="Yes"
                                name= "isAddressRuralRoute"
                              />
                            </RadioGroup>
                            {errors.isAddressRuralRoute &&
                              touched.isAddressRuralRoute ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isAddressRuralRoute}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="d-flex">
                        {values.isUSIndividual == 'yes' ? (
                          <div className="mx-5">
                            <Typography
                              align="left"
                              style={{ marginTop: "20px" }}
                            >
                              Is there an alternative mailing or business
                              address in the U.S.?
                              <span style={{ color: "red" }}>*</span>
                              <Info
                                style={{
                                  color: "#ffc107",
                                  fontSize: "15px",
                                  marginBottom: "12px",
                                }}
                               
                              />
                            </Typography>
                            <div className="d-flex">
                            <FormControl
                              error={Boolean(
                                touched.isalternativebusinessaddress &&
                                  errors.isalternativebusinessaddress
                              )}
                            >
                              <RadioGroup
                                id="isalternativebusinessaddress"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.isalternativebusinessaddress} 
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  
                                  value="yes"
                                  name="isalternativebusinessaddress"
                                  label="Yes"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  value="no"
                                  name="isalternativebusinessaddress"
                                  label="No"
                                />
                              </RadioGroup>
                              {errors.isalternativebusinessaddress &&
                              touched.isalternativebusinessaddress ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isalternativebusinessaddress}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                             {/* <FormControl
                          error={Boolean(
                            touched.isalternativebusinessaddress &&
                              errors.isalternativebusinessaddress
                          )}
                        >
                          <RadioGroup
                            id="isalternativebusinessaddress"
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            value={values.isalternativebusinessaddress}
                            // onChange={(e) = {handleChange(e)
                            
                            // }}
                          >
                            <FormControlLabel
                              control={<Radio />}
                              // value={true}
                              checked={values.isalternativebusinessaddress}
                              name="isalternativebusinessaddress"
                              label="Yes"
                              value={values.isalternativebusinessaddress}
                               
                            />
                            <FormControlLabel
                              control={<Radio />}
                              // value={false}
                              checked={!values.isalternativebusinessaddress}
                              name="isalternativebusinessaddress"
                              label="No"
                              value={!values.isalternativebusinessaddress}
                            />
                          </RadioGroup>
                          {errors.isalternativebusinessaddress &&
                          touched.isalternativebusinessaddress ? (
                            <div>
                              <Typography color="error">
                                {errors.isalternativebusinessaddress}
                              </Typography>
                            </div>
                          ) : (
                            ""
                          )}
                        </FormControl> */}
                        </div>
                            {/* <Typography
                              align="left"
                              style={{ marginTop: "20px" }}
                            >
                              Is there an alternative mailing or business
                              address in the US?
                              <span style={{ color: "red" }}>*</span>
                              <Info
                                style={{
                                  color: "#ffc107",
                                  fontSize: "15px",
                                  marginBottom: "12px",
                                }}
                                onClick={clickInfo}
                              />
                            </Typography> */}

                            {/* <div className="d-flex">
                              <Typography className="my-auto">Yes</Typography>
                              <Radio
                                checked={values.isalternativebusinessaddress}
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    isalternativebusinessaddress: true,
                                  })
                                }
                                value={values.isalternativebusinessaddress}
                                name="radio-buttons"
                                inputProps={{ "aria-label": "A" }}
                              />
                              <Typography className="my-auto">No</Typography>
                              <Radio
                                checked={!values.isalternativebusinessaddress}
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    isalternativebusinessaddress: false,
                                  })
                                }
                                value={!values.isalternativebusinessaddress}
                                name="radio-buttons"
                                inputProps={{ "aria-label": "B" }}
                              />
                              <p className="error">
                                {errors.isalternativebusinessaddress}
                              </p>
                            </div> */}
                          </div>
                        ) : (
                          <div>
                            <Typography
                              align="left"
                              style={{ marginTop: "20px" }}
                            >
                              Is this address a PO Box?
                              <span style={{ color: "red" }}>*</span>
                              <Info
                                style={{
                                  color: "#ffc107",
                                  fontSize: "15px",
                                  marginBottom: "12px",
                                }}
                              
                              />
                            </Typography>

                            <div className="d-flex ">
                            <FormControl
                              error={Boolean(
                                touched.isAddressPostOfficeBox &&
                                  errors.isAddressPostOfficeBox
                              )}
                            >
                              <RadioGroup
                                id="isAddressPostOfficeBox"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.isAddressPostOfficeBox} 
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  value="yes"
                                  name="isAddressPostOfficeBox"
                                  label="Yes"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  value="no"
                                  name="isAddressPostOfficeBox"
                                  label="No"
                                />
                              </RadioGroup>
                              {errors.isAddressPostOfficeBox &&
                              touched.isAddressPostOfficeBox ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isAddressPostOfficeBox}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                              {/* <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel
                                  value={false}
                                  control={<Radio />}
                                  label="No"
                                  checked={!values.isAddressPostOfficeBox}
                                  onChange={handleChange}
                                />
                                <FormControlLabel
                                  value={true}
                                  control={<Radio />}
                                  label="Yes"
                                  checked={values.isAddressPostOfficeBox}
                                  onChange={handleChange}
                                />
                              </RadioGroup>
                              <p className="error">
                                {errors.isAddressPostOfficeBox}
                              </p> */}
                            </div>
                            {/* </div> */}
                            <div className="mx-5">
                              <Typography style={{ marginTop: "20px" }}>
                                Is this an In Care Of address?
                                <span style={{ color: "red" }}>*</span>
                                <Info
                                  style={{
                                    color: "#ffc107",
                                    fontSize: "15px",
                                    marginBottom: "12px",
                                  }}
                                 
                                />
                              </Typography>

                              <div className="d-flex">
                              <FormControl
                              error={Boolean(
                                touched.isCareOfAddress &&
                                  errors.isCareOfAddress
                              )}
                            >
                              <RadioGroup
                                id="isCareOfAddress"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.isCareOfAddress} 
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  value="yes"
                                  name="isCareOfAddress"
                                  label="Yes"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  value="no"
                                  name="isCareOfAddress"
                                  label="No"
                                />
                              </RadioGroup>
                              {errors.isCareOfAddress &&
                              touched.isCareOfAddress ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isCareOfAddress}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                                {/* <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio />}
                                    label="No"
                                    checked={!values.isCareOfAddress}
                                    onChange={handleChange}
                                  />
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio />}
                                    label="Yes"
                                    checked={values.isCareOfAddress}
                                    onChange={handleChange}
                                  />
                                </RadioGroup>
                                <p className="error">
                                  {errors.isCareOfAddress}
                                </p> */}
                              </div>
                            </div>
                            <div className="mx-5">
                              <Typography style={{ marginTop: "20px" }}>
                                Is there an alternative mailing or business
                                address in the U.S.?
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
                                          Alternate Mailing Address
                                        </Typography>
                                        <a onClick={() => setToolInfo("mail")}>
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
                                        marginLeft: "5px",
                                        cursor: "pointer",
                                      }}
                                      // onClick={clickInfo}
                                    />
                                  </Tooltip>
                                </span>
                              </Typography>
                              {toolInfo === "mail" ? (
                                <div>
                                  <Paper
                                    style={{
                                      backgroundColor: "#dedcb1",
                                      padding: "15px",
                                    }}
                                  >
                                    <Typography>
                                      Please check this box if you have an
                                      alternative mailing address away from the
                                      permanent residential address entered
                                      here.
                                    </Typography>
                                    <Typography style={{ marginTop: "10px" }}>
                                      You will be asked to enter the alternative
                                      address later in the process and in some
                                      circumstances you may need to provide
                                      additional information.
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

                              <div className="d-flex">
                              <FormControl
                              error={Boolean(
                                touched.isalternativebusinessaddress &&
                                  errors.isalternativebusinessaddress
                              )}
                            >
                              <RadioGroup
                                id="isalternativebusinessaddress"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={values.isalternativebusinessaddress} 
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  
                                  value="yes"
                                  name="isalternativebusinessaddress"
                                  label="Yes"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  value="no"
                                  name="isalternativebusinessaddress"
                                  label="No"
                                />
                              </RadioGroup>
                              {errors.isalternativebusinessaddress &&
                              touched.isalternativebusinessaddress ? (
                                <div>
                                  <Typography color="error">
                                    {errors.isalternativebusinessaddress}
                                  </Typography>
                                </div>
                              ) : (
                                ""
                              )}
                            </FormControl>
                                {/* <Typography className="my-auto">Yes</Typography>
                                <Radio
                                  checked={values.isalternativebusinessaddress}
                                  onChange={() =>
                                    setPayload({
                                      ...payload,
                                      isalternativebusinessaddress: true,
                                    })
                                  }
                                  value={values.isalternativebusinessaddress}
                                  name="radio-buttons"
                                  inputProps={{ "aria-label": "A" }}
                                />
                                <Typography className="my-auto">No</Typography>
                                <Radio
                                  checked={!values.isalternativebusinessaddress}
                                  onChange={() =>
                                    setPayload({
                                      ...payload,
                                      isalternativebusinessaddress: false,
                                    })
                                  }
                                  value={!values.isalternativebusinessaddress}
                                  name="radio-buttons"
                                  inputProps={{ "aria-label": "B" }}
                                />
                                <p className="error">
                                  {errors.isalternativebusinessaddress}
                                </p> */}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {values.isalternativebusinessaddress == "yes" ? (
                        <>
                          <div className="col-lg-3 col-6 col-md-3">
                            <Typography align="left" className="d-flex w-100 ">
                             Country:
                              <span style={{ color: "red" }}>*</span>
                            </Typography>

                            <FormControl className="w-100">
                              <select
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "36px",
                                }}
                                name="permanentResidentialCountryId1"
                                // id="Income"
                                defaultValue={0}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.permanentResidentialCountryId1}
                              >
                                <option value={0}>-Select-</option>
                                <option value={257}>United Kingdom</option>
                                <option value={258}>United States</option>
                                {countries.map(({ id, name }) => (
                                  <option value={id}> {name} </option>
                                ))}
                              </select>
                              <p className="error">
                                {errors.permanentResidentialCountryId1}
                              </p>
                            </FormControl>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  Street Number and Name:
                                  <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <Input
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  id="outlined"
                                  name="permanentResidentialStreetNumberandName1"
                                  placeholder="Enter Street Number and Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.permanentResidentialStreetNumberandName1 &&
                                      errors.permanentResidentialStreetNumberandName1
                                  )}
                                  value={
                                    values.permanentResidentialStreetNumberandName1
                                  }
                                />
                                <p className="error">
                                  {
                                    errors.permanentResidentialStreetNumberandName1
                                  }
                                </p>
                              </FormControl>
                            </div>
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">Apt/Suite:</Typography>
                                <Input
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  id="outlined"
                                  name="permanentResidentialAptSuite1"
                                  placeholder="Enter Apt/Suite"
                                  onChange={handleChange}
                                  value={values.permanentResidentialAptSuite1}
                                />
                              </FormControl>
                            </div>
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  City or Town:
                                  <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <Input
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  id="outlined"
                                  name="permanentResidentialCityorTown1"
                                  placeholder="Enter City or Town"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.permanentResidentialCityorTown1 &&
                                      errors.permanentResidentialCityorTown1
                                  )}
                                  value={values.permanentResidentialCityorTown1}
                                />
                                <p className="error">
                                  {errors.permanentResidentialCityorTown1}
                                </p>
                              </FormControl>
                            </div>
                            {values.permanentResidentialCountryId1 == 258 ? (
                              <div className="col-lg-3 col-6 col-md-3 mt-2">
                                <Typography
                                  align="left"
                                  className="d-flex w-100 "
                                >
                                  State or Province:
                                  {/* <span style={{ color: 'red' }}>*</span> */}
                                </Typography>

                                <FormControl className="w-100">
                                  <select
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "36px",
                                    }}
                                    name="permanentResidentialStateorProvince1"
                                    // id="Income"
                                    onChange={handleChange}
                                    value={
                                      values.permanentResidentialStateorProvince1
                                    }
                                  >
                                    <option value="0">
                                      <em>--Select--</em>
                                    </option>
                                    {usStates.map(({ name }) => (
                                      <option value={name}>{name}</option>
                                    ))}
                                  </select>
                                </FormControl>
                              </div>
                            ) : (
                              <div className="col-lg-3 col-6 col-md-3 mt-2">
                                <FormControl className="w-100">
                                  <Typography align="left">
                                    State or Province:
                                    {/* <span style={{ color: 'red' }}>*</span> */}
                                  </Typography>
                                  <Input
                                    disabled={
                                      values.permanentResidentialCountryId1 == 0
                                    }
                                    style={{
                                      border: " 1px solid #d9d9d9 ",
                                      height: " 36px",
                                      lineHeight: "36px ",
                                      background: "#fff ",
                                      fontSize: "13px",
                                      color: " #000 ",
                                      fontStyle: "normal",
                                      borderRadius: "1px",
                                      padding: " 0 10px ",
                                    }}
                                    // id="outlined"
                                    name="permanentResidentialStateorProvince1"
                                    placeholder="Enter State or Province"
                                    onChange={handleChange}
                                    value={
                                      values.permanentResidentialStateorProvince1
                                    }
                                  />
                                </FormControl>
                              </div>
                            )}
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  Zip / Postal Code:
                                  <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <Input
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  id="outlined"
                                  name="permanentResidentialZipPostalCode1"
                                  placeholder="Enter Zip or Postal Code"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.permanentResidentialZipPostalCode1 &&
                                      errors.permanentResidentialZipPostalCode1
                                  )}
                                  value={
                                    values.permanentResidentialZipPostalCode1
                                  }
                                />
                                <p className="error">
                                  {errors.permanentResidentialZipPostalCode1}
                                </p>
                              </FormControl>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </Collapse>

                    <hr className="w-100"></hr>

                    <CardHeader
                      className="flex-row-reverse"
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "left",
                            marginLeft: "13px",
                          }}
                        >
                          Contact Details
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Contact Details
                                </Typography>
                                <a onClick={() => setToolInfo("Contact")}>
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
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                             
                            />
                          </Tooltip>
                          <p className="error">
                            {errors?.contactFirstName ||
                             errors?.contactLastName ||
                             errors?.contactEmail ? "Mandatory information required" : ""}
                          </p>
                        </div>
                      }
                      action={
                        <IconButton
                          onClick={() => handleOpen("cd")}
                          aria-label="expand"
                          size="small"
                          style={{ marginTop: "3px" }}
                        >
                          {open === "cd" ? (
                            <RemoveCircleOutlineOutlined />
                          ) : (
                            <ControlPointOutlined />
                          )}
                        </IconButton>
                      }
                    ></CardHeader>
                    {toolInfo === "Contact" ? (
                      <div>
                        <Paper
                          style={{
                            backgroundColor: "#dedcb1",
                            padding: "15px",
                          }}
                        >
                          <Typography>
                          Please enter your contact details here and the capacity in which you will be signing the submission.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            On confirmation an email will be sent to the address entered and contain a PIN that must be entered at the point of signature.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            If you have not received the email within a few
                            minutes, it probably means your local email service
                            has detected an automated email and captured the
                            email in a local spam or quarantine folder. Please
                            see 'more' below for further information or contact:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            If you do not receive the email containing your
                            confirmation code:
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            The email is dispatched to the email address given
                            as soon as you confirm the details entered into this
                            screen and move across to the next part of the
                            submission process. Delivery should take place
                            within a few minutes, although on occasion it may
                            take a little longer because of issues outside of
                            our control.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            The following factors may impact delivery of the
                            email: internet traffic, your internal email service
                            delay, the way your internal email service is
                            configured to accept automatically generated emails,
                            or possibly the security settings of your browser.
                          </Typography>

                          <Typography style={{ marginTop: "10px" }}>
                            Please also check your spam or junk email folder.
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
                    <Collapse
                      className="px-5"
                      in={open === "cd"}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className="row">
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              First Name<span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="contactFirstName"
                              placeholder="Enter First Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.contactFirstName &&
                                  errors.contactFirstName
                              )}
                              value={values.contactFirstName}
                            />
                            <p className="error">{errors.contactFirstName}</p>
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Last Name<span style={{ color: "red" }}>*</span>
                            </Typography>
                            <Input
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="contactLastName"
                              placeholder="Enter Last Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.contactLastName &&
                                  errors.contactLastName
                              )}
                              value={values.contactLastName}
                            />
                            <p className="error">{errors.contactLastName}</p>
                          </FormControl>
                        </div>
                        <FormControl className="w-100">
                          <div className="row">
                            <div className="col-lg-3 col-6 col-md-3 mt-2 mx-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  Email<span style={{ color: "red" }}>*</span>
                                </Typography>
                                <Input
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  name="contactEmail"
                                  id="outlined"
                                  type="email"
                                  placeholder="example@domain.com"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.contactEmail && errors.contactEmail
                                  )}
                                  value={values.contactEmail}
                                />
                                <p className="error">{errors.contactEmail}</p>
                              </FormControl>
                            </div>
                          </div>
                        </FormControl>

                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Primary Contact Number
                            </Typography>
                            <select
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="primaryContactNumberId"
                              id="Income"
                              onChange={handleChange}
                              value={values.primaryContactNumberId}
                            >
                              <option value={0}>-Select-</option>
                              {/* <option value={1}>-Select1-</option> */}
                              {countriesCode.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <Input
                              disabled={values.primaryContactNumberId == 0}
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="primaryContactNumber"
                              placeholder="Enter Primary Number"
                              onChange={handleChange}
                              value={values.primaryContactNumber}
                            />
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Alternative Number
                            </Typography>
                            <select
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="alternativeNumberId"
                              id="Income"
                              onChange={handleChange}
                              value={values.alternativeNumberId}
                            >
                              <option value={0}>-Select-</option>
                              {/* <option value={1}>-Select1-</option> */}
                              {countriesCode.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <Input
                              disabled={values.alternativeNumberId == 0}
                              style={{
                                border: " 1px solid #d9d9d9 ",
                                height: " 36px",
                                lineHeight: "36px ",
                                background: "#fff ",
                                fontSize: "13px",
                                color: " #000 ",
                                fontStyle: "normal",
                                borderRadius: "1px",
                                padding: " 0 10px ",
                              }}
                              id="outlined"
                              name="alternativeNumber"
                              placeholder="Enter Alternate Mobile No"
                              onChange={handleChange}
                              value={values.alternativeNumber}
                            />
                          </FormControl>
                        </div>

                        <div>
                          {alternateNo ? (
                            <div className="col-lg-3 col-6 col-md-3 mt-3">
                              <FormControl className="w-100">
                                {/* <Typography align="left">
                                  Secondary Contact Number
                                </Typography> */}
                                <span className="w-100 d-flex">
                                  <select
                                    className="w-100"
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "36px",
                                    }}
                                    name="alternativeNumberId1"
                                    id="Income"
                                    onChange={handleChange}
                                    value={values.alternativeNumberId1}
                                  >
                                    <option value={0}>--Select--</option>
                                    {/* <option value={1}>--Select1--</option> */}
                                    {countriesCode.map(({ id, name }) => (
                                      <option value={id}>{name}</option>
                                    ))}
                                  </select>
                                  <Delete
                                    style={{
                                      color: "red",
                                      fontSize: "20px",
                                      marginTop: "5px",
                                    }}
                                    onClick={() => {
                                      setAlternateNo(false);
                                    }}
                                  />
                                </span>
                                <Input
                                  disabled={values.alternativeNumberId1 == 0}
                                  style={{
                                    border: " 1px solid #d9d9d9 ",
                                    height: " 36px",
                                    lineHeight: "36px ",
                                    background: "#fff ",
                                    fontSize: "13px",
                                    color: " #000 ",
                                    fontStyle: "normal",
                                    borderRadius: "1px",
                                    padding: " 0 10px ",
                                  }}
                                  id="outlined"
                                  name="alternativeNumber1"
                                  placeholder="Enter Alternate Mobile No"
                                  onChange={handleChange}
                                  value={values.alternativeNumber1}
                                />
                              </FormControl>
                            </div>
                          ) : (
                            <Typography
                              style={{
                                color: "#007bff",
                                cursor: "pointer",
                                fontSize: "12px",
                                marginTop: "8px",
                                
                              }}
                              onClick={() => setAlternateNo(true)}
                            >
                              <a>Add Alternative Number</a>
                            </Typography>
                          )}
                        </div>
                      </div>
                    </Collapse>

                    <hr className="w-100 "></hr>
                    {/* Income Type */}

                    {values.isUSIndividual == "yes" ? (
                      <>
                      <CardHeader
                      className="flex-row-reverse"
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "left",
                            marginLeft: "13px",
                          }}
                        >
                          Income Type
                          <span
                            style={{
                              fontSize: "13px",
                              color: "grey",
                              marginLeft: "4px",
                              marginTop: "11px",
                            }}
                          >
                            (Optional)
                          </span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Q&A, Income Type
                                </Typography>
                                <a onClick={() => setToolInfo("income")}>
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
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </Tooltip>
                        </div>
                      }
                      action={
                        <IconButton
                          onClick={() => handleOpen("it")}
                          aria-label="expand"
                          size="small"
                          style={{ marginTop: "3px" }}
                        >
                          {open === "it" ? (
                            <RemoveCircleOutlineOutlined />
                          ) : (
                            <ControlPointOutlined />
                          )}
                        </IconButton>
                      }
                    ></CardHeader>

                    {toolInfo === "income" ? (
                      <div>
                        <Paper
                          style={{
                            backgroundColor: "#dedcb1",
                            padding: "15px",
                          }}
                        >
                          <Typography>
                            Income type or code is requested as part of the tax
                            form completion process for purposes of calculating
                            withholding rates, where applicable, and to further
                            determine how you should be reported on. You should
                            select the type of code that best defines the
                            payments that you expect to receive. Income Types,
                            associated with Form 1099 reporting, can include
                            things like: Interest, Dividends, Rents, Royalties,
                            Prizes and Awards. Income Codes, associated with
                            Form 1042-S reporting, can be found here:
                            https://www.irs.gov/pub/irs-pdf/p515.pdf
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
                    
                    <Collapse
                      className="px-5"
                      in={open === "it"}
                      timeout="auto"
                      unmountOnExit
                    >
                      {incomeArr.length &&
                        incomeArr.map((ind, i) => {
                          return (
                            <div className="col-lg-3 col-6 col-md-3 ">
                              {/* <Typography className="d-flex w-100 pb-2">
                                Income Type
                              </Typography> */}

                              <FormControl className="w-100 d-flex" key={ind}>
                                <span className="w-100 d-flex pb-2">
                                  <select
                                    className="w-100"
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "36px",
                                    }}
                                    name="incomeTypeId"
                                    id="Income"
                                    onChange={handleChange}
                                    value={values.incomeTypeId}
                                  >
                                    <option value="0">-Select-</option>
                                    {incomeCodes.map(({ id, name }) => (
                                      <option value={id}>{name}</option>
                                    ))}
                                  </select>
                                  {incomeArr.length > 1 && (
                                  <Delete
                                  onClick={() => handleDelete(i)}
                                  style={{
                                    color: "red",
                                    fontSize: "20px",
                                    marginTop: "8px",
                                    marginLeft: "4px",
                                  }}
                                />
                                )}
                                </span>
                              </FormControl>
                            </div>
                          );
                        })}

                      <Typography
                        style={{
                          color: "#007bff",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                        onClick={() => addIncomeType()}
                      >
                        <a>Add Income Type</a>
                      </Typography>
                    </Collapse>
                    </>
                    ):(
                      <>
                      <CardHeader
                      className="flex-row-reverse"
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "left",
                            marginLeft: "13px",
                          }}
                        >
                          Income Code
                          <span
                            style={{
                              fontSize: "13px",
                              color: "grey",
                              marginLeft: "4px",
                              marginTop: "11px",
                            }}
                          >
                            (Optional)
                          </span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  Q&A, Income Type
                                </Typography>
                                <a onClick={() => setToolInfo("income")}>
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
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </Tooltip>
                        </div>
                      }
                      action={
                        <IconButton
                          onClick={() => handleOpen("it")}
                          aria-label="expand"
                          size="small"
                          style={{ marginTop: "3px" }}
                        >
                          {open === "it" ? (
                            <RemoveCircleOutlineOutlined />
                          ) : (
                            <ControlPointOutlined />
                          )}
                        </IconButton>
                      }
                    ></CardHeader>

                    {toolInfo === "income" ? (
                      <div>
                        <Paper
                          style={{
                            backgroundColor: "#dedcb1",
                            padding: "15px",
                          }}
                        >
                          <Typography>
                            Income type or code is requested as part of the tax
                            form completion process for purposes of calculating
                            withholding rates, where applicable, and to further
                            determine how you should be reported on. You should
                            select the type of code that best defines the
                            payments that you expect to receive. Income Types,
                            associated with Form 1099 reporting, can include
                            things like: Interest, Dividends, Rents, Royalties,
                            Prizes and Awards. Income Codes, associated with
                            Form 1042-S reporting, can be found here:
                            https://www.irs.gov/pub/irs-pdf/p515.pdf
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
                    <Collapse
                      className="px-5"
                      in={open === "it"}
                      timeout="auto"
                      unmountOnExit
                    >
                      {incomeArr.length &&
                        incomeArr.map((ind, i) => {
                          return (
                            <div className="col-lg-3 col-6 col-md-3 ">
                              {/* <Typography className="d-flex w-100 pb-2">
                                Income Type
                              </Typography> */}

                              <FormControl className="w-100 d-flex" key={ind}>
                                <span className="w-100 d-flex pb-2">
                                  <select
                                    className="w-100"
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "36px",
                                    }}
                                    name="incomeTypeId"
                                    id="Income"
                                    onChange={handleChange}
                                    value={values.incomeTypeId}
                                  >
                                    <option value="0">-Select-</option>
                                    {incomeCodes.map(({ id, name }) => (
                                      <option value={id}>{name}</option>
                                    ))}
                                  </select>
                                  {incomeArr.length > 1 && (
                                  <Delete
                                  onClick={() => handleDelete(i)}
                                  style={{
                                    color: "red",
                                    fontSize: "20px",
                                    marginTop: "8px",
                                    marginLeft: "4px",
                                  }}
                                />
                                )}
                                </span>
                              </FormControl>
                            </div>
                          );
                        })}

                      <Typography
                        style={{
                          color: "#007bff",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                        onClick={() => addIncomeType()}
                      >
                        <a>Add Income Code</a>
                      </Typography>
                    </Collapse>
                    </>
                    )}
                    
                    <hr className="w-100"></hr>
                    {/* Payment type */}
                    <CardHeader
                      className="flex-row-reverse"
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "left",
                            marginLeft: "13px",
                          }}
                        >
                          Payment Type
                          <span
                            style={{
                              fontSize: "13px",
                              color: "grey",
                              marginLeft: "4px",
                              marginTop: "11px",
                            }}
                          >
                            (Optional)
                          </span>
                          <Tooltip
                            style={{ backgroundColor: "black", color: "white" }}
                            title={
                              <>
                                <Typography color="inherit">
                                  TT-134 Q&A, Account{" "}
                                </Typography>
                                <Typography color="inherit">
                                {" "}
                                information
                              </Typography>
                                <a onClick={() => setToolInfo("account")}>
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
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </Tooltip>
                          <p className="error">
                          {errors?.paymentTypeId ? "Mandatory information required" : ""}
                        </p>
                        </div>
                      }
                      action={
                        <IconButton
                          onClick={() => handleOpen("pt")}
                          aria-label="expand"
                          size="small"
                          style={{ marginTop: "3px" }}
                        >
                          {open === "pt" ? (
                            <RemoveCircleOutlineOutlined />
                          ) : (
                            <ControlPointOutlined />
                          )}
                        </IconButton>
                      }
                    ></CardHeader>

                    {toolInfo === "account" ? (
                      <div>
                        <Paper
                          style={{
                            backgroundColor: "#dedcb1",
                            padding: "15px",
                          }}
                        >
                          <Typography>
                            As part of the tax form completion process, your
                            withholding agent has requested that you provide
                            banking details associated with your account. Here,
                            you will be asked to select the method for which
                            payment will be remitted, as permitted by the
                            withholding agent. Allowable options can include:
                            ACH, Wire or Check
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
                    <Collapse
                      className="px-5"
                      in={open === "pt"}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className="col-lg-3 col-6 col-md-3 ">
                        <Typography className="d-flex w-100 pb-2">
                          Payment Type
                          {/* <span style={{ color: "red" }}>*</span> */}
                        </Typography>

                        <FormControl className="w-100 d-flex">
                          <span className="w-100 d-flex">
                            <select
                              className="w-100"
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="paymentTypeId"
                              id="Payment"
                              onChange={handleChange}
                              value={values.paymentTypeId}
                            >
                              <option value="">Select</option>
                              <option value={1}>ACH</option>
                              <option value={2}>Check</option>
                              <option value={3}>Wire</option>
                            </select>
                            {/* <p className="error">{errors.paymentTypeId}</p> */}
                            {/* <Delete
                              style={{
                                color: "red",
                                fontSize: "20px",
                                marginTop: "8px",
                                marginLeft: "4px",
                              }}
                            /> */}
                          </span>
                        </FormControl>
                      </div>
                    </Collapse>
                    <hr className="w-100"></hr>

                    {values.paymentTypeId ? (
                      <>
                      {console.log(values.paymentTypeId,"values.paymentTypeId")}
                        <CardHeader
                          className="flex-row-reverse"
                          title={
                            <div
                              style={{
                                display: "flex",
                                alignItems: "left",
                                marginLeft: "13px",
                              }}
                            >
                              Account Information
                              <span
                                style={{
                                  fontSize: "13px",
                                  color: "grey",
                                  marginLeft: "4px",
                                  marginTop: "11px",
                                }}
                              >
                                (Mandatory)
                              </span>
                              <Tooltip
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                title={
                                  <>
                                    <Typography color="inherit">
                                      TT-126 Q&A, Account information
                                    </Typography>
                                    <a
                                      onClick={() => setToolInfo("information")}
                                    >
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
                                    marginLeft: "5px",
                                    cursor: "pointer",
                                  }}
                                />
                              </Tooltip>
                              <p className="error">
                            {errors?.accountHolderName ||
                             errors?.accountBankName ||
                             errors?.accountBankBranchLocationId || 
                             errors?.accountNumber ||
                             errors?.makePayable || 
                             errors?.payResidentalCountryId ||
                             errors?.payStreetNumberAndName ||
                             errors?.payCityorTown ||
                             errors?.payStateOrProvince ||
                             errors?.payZipPostalCode ||
                             errors?.sortCode ||
                             errors?.bsb ||
                             errors?.bankCode ||
                             errors?.abaRouting ? "Mandatory information required" : ""}
                          </p>
                            </div>
                          }
                          action={
                            <IconButton
                              onClick={() => handleOpen("ai")}
                              aria-label="expand"
                              size="small"
                              style={{ marginTop: "3px" }}
                            >
                              {open !== "ai" ? (
                                <ControlPointOutlined />
                              ) : (
                                <RemoveCircleOutlineOutlined />
                              )}
                            </IconButton>
                          }
                        ></CardHeader>
                        {toolInfo === "information" ? (
                          <div>
                            <Paper
                              style={{
                                backgroundColor: "#dedcb1",
                                padding: "15px",
                              }}
                            >
                              <Typography>
                                If you have an account number, or several
                                account numbers relating to the certificate
                                submission please identify here.
                              </Typography>
                              <Typography>
                              The account details provided will be used to:
                              </Typography>
                              <Typography>
                                <ul>
                                  <li>Make payments to you if you are entitled to any</li>
                                  <li>Ensure your form is correctly matched to your account</li>
                                  <li>for further validation of new and existing information</li>
                                  <li>In some circumstance will allow us to document multiple accounts with the same certificate</li>
                                </ul>
                              </Typography>
                              
                              <Typography style={{ marginTop: "10px" }}>
                                Please see our privacy statement for further
                                information.
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                See more information on what to do if you have a
                                joint account.
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                Joint Accounts
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                Please note that if you are submitting a form on
                                behalf of an entity, which is part of a joint
                                account and in receipt of a payment, the joint
                                account should submit their own form.
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                The form you are submitting ONLY represents the
                                legal entity named on the form and DOES NOT
                                represent the account or any joint account
                                holders.
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                We can contact the joint account holder by email
                                informing them that they may need to submit a
                                form too.
                              </Typography>
                              <Typography style={{ marginTop: "10px" }}>
                                Ref: EH025
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
                        <Collapse
                          className="px-5"
                          in={open === "ai"}
                          timeout="auto"
                          unmountOnExit
                        >
                          {values.paymentTypeId == 1 ? (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Account holder name
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="accountHolderName"
                                      placeholder="Enter  Account holder name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountHolderName &&
                                          errors.accountHolderName
                                      )}
                                      value={values.accountHolderName}
                                    />
                                    <p className="error">
                                      {errors.accountHolderName}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Bank name
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="accountBankName"
                                      placeholder="Enter Bank name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountBankName &&
                                          errors.accountBankName
                                      )}
                                      value={values.accountBankName}
                                    />
                                    <p className="error">
                                      {errors.accountBankName}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <Typography align="left">
                                    Bank Branch Location
                                    <span style={{ color: "red" }}>*</span>
                                  </Typography>
                                  <FormControl className="w-100">
                                    <select
                                      style={{
                                        padding: "0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "36px",
                                      }}
                                      id="demo-simple-select-standard"
                                      name="accountBankBranchLocationId"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.accountBankBranchLocationId}
                                    >
                                      <option value={0}>-Select-</option>
                                      <option value={16}>Australia</option>
                                      <option value={257}>
                                        United Kingdom
                                      </option>
                                      <option value={258}>United States</option>
                                      <option value="">---</option>
                                      {countries.map(({ id, name }) => (
                                        <option value={id}> {name} </option>
                                      ))}
                                    </select>
                                    <p className="error">
                                      {errors.accountBankBranchLocationId}
                                    </p>
                                  </FormControl>
                                </div>

                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Account Number
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="accountNumber"
                                      placeholder="Enter Account Number"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountNumber &&
                                          errors.accountNumber
                                      )}
                                      value={values.accountNumber}
                                    />
                                    <p className="error">
                                      {errors.accountNumber}
                                    </p>
                                  </FormControl>
                                </div>
                                {returnFieldName(
                                  handleBlur,
                                  touched,
                                  errors,
                                  values,
                                  handleChange
                                )}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                          {values.paymentTypeId == 2 ? (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Make Payable To
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="makePayable"
                                      placeholder="Enter Make Payable To"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.makePayable &&
                                          errors.makePayable
                                      )}
                                      value={values.makePayable}
                                    />
                                    <p className="error">
                                      {errors.makePayable}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      {" "}
                                      Residential Country
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <select
                                      style={{
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "36px",
                                      }}
                                      id="outlined"
                                      name="payResidentalCountryId"
                                      defaultValue={0}
                                      placeholder="Enter Residential Country"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.payResidentalCountryId}
                                    >
                                      <p className="error">
                                        {errors.payResidentalCountryId}
                                      </p>
                                      <option value={0}>-Select-</option>
                                      <option value={257}>
                                        United Kingdom
                                      </option>
                                      <option value={258}>United States</option>
                                      <option value="">-----</option>
                                      {countries.map(({ id, name }) => (
                                        <option value={id}>{name}</option>
                                      ))}
                                    </select>
                                    <p className="error">
                                      {errors.payResidentalCountryId}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Street Number And Name
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="payStreetNumberAndName"
                                      placeholder="Enter Street Number And Name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.payStreetNumberAndName &&
                                          errors.payStreetNumberAndName
                                      )}
                                      value={values.payStreetNumberAndName}
                                    />
                                    <p className="error">
                                      {errors.payStreetNumberAndName}
                                    </p>
                                  </FormControl>
                                </div>

                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Apt/Suite
                                      {/* <span style={{ color: 'red' }}>*</span> */}
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="payAptSuite"
                                      placeholder="Enter Apt/Suite"
                                      onChange={handleChange}
                                      value={values.payAptSuite}
                                    />
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      City OR Town
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="payCityorTown"
                                      placeholder="Enter  City OR Town"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.payCityorTown &&
                                          errors.payCityorTown
                                      )}
                                      value={values.payCityorTown}
                                    />
                                    <p className="error">
                                      {errors.payCityorTown}
                                    </p>
                                  </FormControl>
                                </div>
                                {values.payResidentalCountryId == 258 ? (
                                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                                    <Typography
                                      align="left"
                                      className="d-flex w-100 "
                                    >
                                      State or Province:
                                      {/* <span style={{ color: 'red' }}>*</span> */}
                                    </Typography>

                                    <FormControl className="w-100">
                                      <select
                                        style={{
                                          padding: " 0 10px",
                                          color: "#7e7e7e",
                                          fontStyle: "italic",
                                          height: "36px",
                                        }}
                                        name="payStateOrProvince"
                                        // id="Income"
                                        onChange={handleChange}
                                        value={values.payStateOrProvince}
                                      >
                                        <option value="0">
                                          <em>--Select--</em>
                                        </option>
                                        {usStates.map(({ name }) => (
                                          <option value={name}>{name}</option>
                                        ))}
                                      </select>
                                    </FormControl>
                                  </div>
                                ) : (
                                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                                    <FormControl className="w-100">
                                      <Typography align="left">
                                        State OR Provience
                                        <span style={{ color: "red" }}>*</span>
                                      </Typography>
                                      <Input
                                        disabled={
                                          values.payResidentalCountryId == 0
                                        }
                                        style={{
                                          border: " 1px solid #d9d9d9 ",
                                          height: " 36px",
                                          lineHeight: "36px ",
                                          background: "#fff ",
                                          fontSize: "13px",
                                          color: " #000 ",
                                          fontStyle: "normal",
                                          borderRadius: "1px",
                                          padding: " 0 10px ",
                                        }}
                                        id="outlined"
                                        name="payStateOrProvince"
                                        placeholder="Enter  State OR Provience"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(
                                          touched.payStateOrProvince &&
                                            errors.payStateOrProvince
                                        )}
                                        value={values.payStateOrProvince}
                                      />
                                      <p className="error">
                                        {errors.payStateOrProvince}
                                      </p>
                                    </FormControl>
                                  </div>
                                )}

                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Zip/Postal Code
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="payZipPostalCode"
                                      placeholder="Enter Zip/Postal Code"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.payZipPostalCode &&
                                          errors.payZipPostalCode
                                      )}
                                      value={values.payZipPostalCode}
                                    />
                                    <p className="error">
                                      {errors.payZipPostalCode}
                                    </p>
                                  </FormControl>
                                </div>
                              </div>

                              <div className="d-flex mt-3">
                                <Checkbox />
                                <Typography
                                  align="left"
                                  style={{ marginTop: "10px" }}
                                >
                                  Please check the box to confirm that the above
                                  details are correct for payment purposes.
                                  <span style={{ color: "red" }}>*</span>
                                </Typography>
                              </div>
                            </>
                          ) : (
                            ""
                          )}

                          {values.paymentTypeId == 3 ? (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Account holder name
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="accountHolderName"
                                      placeholder="Enter Account holder name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountHolderName &&
                                          errors.accountHolderName
                                      )}
                                      value={values.accountHolderName}
                                    />
                                    <p className="error">
                                      {errors.accountHolderName}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Bank name
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="accountBankName"
                                      placeholder="Enter Bank name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountBankName &&
                                          errors.accountBankName
                                      )}
                                      value={values.accountBankName}
                                    />
                                    <p className="error">
                                      {errors.accountBankName}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <Typography align="left">
                                    Bank Branch Location
                                    <span style={{ color: "red" }}>*</span>
                                  </Typography>
                                  <FormControl className="w-100">
                                    <select
                                      style={{
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "36px",
                                      }}
                                      id="demo-simple-select-standard"
                                      name="accountBankBranchLocationId"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.accountBankBranchLocationId}
                                    >
                                      <option
                                        value=""
                                        onClick={() => setBankLocation("")}
                                      >
                                        -Select-
                                      </option>
                                      <option
                                        value={257}
                                        onClick={() => setBankLocation("UK")}
                                      >
                                        United Kingdom
                                      </option>
                                      <option
                                        value={258}
                                        onClick={() => setBankLocation("US")}
                                      >
                                        United States
                                      </option>
                                      <option
                                        value=""
                                        onClick={() => setBankLocation("")}
                                      >
                                        ---
                                      </option>
                                      {countries.map(({ id, name }) => (
                                        <option
                                          value={id}
                                          onClick={() => setBankLocation("id")}
                                        >
                                          {" "}
                                          {name}{" "}
                                        </option>
                                      ))}
                                    </select>
                                    <p className="error">
                                      {errors.accountBankBranchLocationId}
                                    </p>
                                  </FormControl>
                                </div>

                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Account Number
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <Input
                                      style={{
                                        border: " 1px solid #d9d9d9 ",
                                        height: " 36px",
                                        lineHeight: "36px ",
                                        background: "#fff ",
                                        fontSize: "13px",
                                        color: " #000 ",
                                        fontStyle: "normal",
                                        borderRadius: "1px",
                                        padding: " 0 10px ",
                                      }}
                                      id="outlined"
                                      name="accountNumber"
                                      placeholder="Enter Account Number"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountNumber &&
                                          errors.accountNumber
                                      )}
                                      value={values.accountNumber}
                                    />
                                    <p className="error">
                                      {errors.accountNumber}
                                    </p>
                                  </FormControl>
                                </div>

                                {values.accountBankBranchLocationId == 258 ? (
                                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                                    <FormControl className="w-100">
                                      <Typography align="left">
                                        ABA / Routing
                                        <span style={{ color: "red" }}>*</span>
                                      </Typography>
                                      <Input
                                        style={{
                                          border: " 1px solid #d9d9d9 ",
                                          height: " 36px",
                                          lineHeight: "36px ",
                                          background: "#fff ",
                                          fontSize: "13px",
                                          color: " #000 ",
                                          fontStyle: "normal",
                                          borderRadius: "1px",
                                          padding: " 0 10px ",
                                        }}
                                        id="outlined"
                                        name="abaRouting"
                                        placeholder="Enter ABA / Routing"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(
                                          touched.abaRouting &&
                                            errors.abaRouting
                                        )}
                                        value={values.abaRouting}
                                      />
                                      <p className="error">
                                        {errors.abaRouting}
                                      </p>
                                    </FormControl>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {values.accountBankBranchLocationId == 257 ? (
                                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                                    <FormControl className="w-100">
                                      <Typography align="left">
                                        IBAN
                                        {/* <span style={{ color: 'red' }}>*</span> */}
                                      </Typography>
                                      <Input
                                        style={{
                                          border: " 1px solid #d9d9d9 ",
                                          height: " 36px",
                                          lineHeight: "36px ",
                                          background: "#fff ",
                                          fontSize: "13px",
                                          color: " #000 ",
                                          fontStyle: "normal",
                                          borderRadius: "1px",
                                          padding: " 0 10px ",
                                        }}
                                        id="outlined"
                                        name="iban"
                                        placeholder="Enter IBAN"
                                        onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // error={Boolean(touched.iban && errors.iban)}
                                        value={values.iban}
                                      />
                                      {/* <p className='error'>{errors.iban}</p> */}
                                    </FormControl>
                                    <FormControl className="w-100">
                                      <Typography align="left">
                                        Swift code
                                        {/* <span style={{ color: 'red' }}>*</span> */}
                                      </Typography>
                                      <Input
                                        style={{
                                          border: " 1px solid #d9d9d9 ",
                                          height: " 36px",
                                          lineHeight: "36px ",
                                          background: "#fff ",
                                          fontSize: "13px",
                                          color: " #000 ",
                                          fontStyle: "normal",
                                          borderRadius: "1px",
                                          padding: " 0 10px ",
                                        }}
                                        id="outlined"
                                        name="swiftCode"
                                        placeholder="Enter Swift code"
                                        onChange={handleChange}
                                        // onBlur={handleBlur}
                                        // error={Boolean(touched.swiftCode && errors.swiftCode)}
                                        value={values.swiftCode}
                                      />
                                      {/* <p className='error'>{errors.swiftCode}</p> */}
                                    </FormControl>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </Collapse>
                      </>
                    ) : (
                      ""
                    )}
                    <div className="row d-flex mx-1 mt-3 mx-3">
                      <div className="d-flex p-0">
                        <div className="w-auto px-2">
                          <Checkbox
                            className="pr-0"
                            checked={values.isConfirmed}
                            name="isConfirmed"
                            // onChange={() =>
                            //   setPayload({
                            //     ...payload,
                            //     isConfirmed: !payload.isConfirmed,
                            //   })
                            // }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.isConfirmed}
                          />
                          {/* <p className="error">
                            {errors.isConfirmed}
                          </p> */}
                        </div>
                        <div className="w-auto d-flex p-0">
                          <Typography className="my-auto">
                            I confirm the information above is correct
                          </Typography>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          // onClick={() => history("/Term")}
                          style={{
                            border: "1px solid #0095dd",
                            background: "#0095dd",
                            height: "45px",
                            lineHeight: "normal",
                            textAlign: "center",
                            fontSize: "16px",
                            textTransform: "uppercase",
                            borderRadius: "0px",
                            color: "#fff",
                            padding: "0 35px",
                            letterSpacing: "1px",
                          }}
                          className="btn btn_submit  btn-primary-agent"

                          // onClick={(errors)=> chek(errors)}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Paper>
        </div>
      </div>

      <div className="container-fluid">
        <footer>
          <div className="row w-100">
            <Typography
              className="mx-2"
              align="left"
              style={{ marginBottom: "10px", color: "white", fontSize: "12px" }}
            >
              © Comply Exchange Ltd.2023 - Version: 2.2.0.29 - Render
              Time:8.6691538s
            </Typography>

            <div className="col-12 col-sm-8 col-md-6 col-lg-6 footer_nav">
              <ul className="nav inner_header_right"></ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
