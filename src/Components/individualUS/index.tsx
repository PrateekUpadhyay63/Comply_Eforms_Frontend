import React, { useEffect, useState } from "react";
import {
  Collapse,
  CardHeader,
  IconButton,
  FormControl,
  Typography,
  Select,
  MenuItem,
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
import { useDispatch } from "react-redux";
import { postOnboarding } from "../../Redux/Actions";
import { AppDispatch } from "../../Redux/store";

import { apiGetUrl, apiPostUrl } from "../../api/apiUtils";
// import { CheckBox } from '@mui/icons-material';

export default function IndividualUs() {
  //States
   
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
  const [payload, setPayload] = useState({
    agentId: 3,
    businessTypeId: 1,
    isUSEntity: true,
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
    isCorrectPaymentPurposes: true,
    isConfirmed: true,
   
  });

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

  useEffect(() => {
    localStorage.clear();
  }, []);

  const redirectFunc=()=>{
    history("/Term");
  }

  // const history = useNavigate();

  const handleOpen = (val: any) => {
    if (open === val) {
      setOpen("");
    } else setOpen(val);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPlaceholder({ ...placeholder, [name]: value });
  // };
  // const handleRadio = event => {
  //   setSelectedValue(event.target.value);
  // };

  // const handleRadio1 = event => {
  //   setSelectedValue1(event.target.value);
  // };

  const addIncomeType = () => {
    setIncomeArr((incomeArr) => [...incomeArr, ""]);
  };

  const continueSubmit = (e:any) => {
    console.log("b dzsfdvcyghgc",payload)
    e.preventDefault();
    dispatch(postOnboarding(payload,redirectFunc))
    // redirectFunc();
  };

  const returnFieldName = (handleBlur: any, touched: any, errors: any) => {
    if (payload.accountBankBranchLocationId == 258) {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              {/* {returnFieldName()} */}
              ABA/Routing
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
              name="abaRouting"
              placeholder="Enter ABA / Routing"
              onChange={(e: any) =>
                setPayload({
                  ...payload,
                  abaRouting: e.target.value,
                })
              }
              onBlur={handleBlur}
              error={Boolean(touched.abaRouting && errors.abaRouting)}
              value={payload.abaRouting}
            />
            <p style={{ color: "red", textAlign: "left" }}>
              {errors.abaRouting}
            </p>
          </FormControl>
        </div>
      );
    } else if (payload.accountBankBranchLocationId == 257) {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              {/* {returnFieldName()} */}
              Sort Code
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
              name="sortCode"
              placeholder="Sort Code"
              onChange={(e: any) =>
                setPayload({
                  ...payload,
                  sortCode: e.target.value,
                })
              }
              onBlur={handleBlur}
              error={Boolean(touched.sortCode && errors.sortCode)}
              value={payload.sortCode}
            />
            <p style={{ color: "red", textAlign: "left" }}>{errors.sortCode}</p>
          </FormControl>
        </div>
      );
    } else {
      return (
        <div className="col-lg-3 col-6 col-md-3 mt-2">
          <FormControl className="w-100">
            <Typography align="left">
              Bank Code
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
              name="bankCode"
              placeholder=" Enter Bank Code"
              onChange={(e: any) =>
                setPayload({
                  ...payload,
                  bankCode: e.target.value,
                })
              }
              onBlur={handleBlur}
              error={Boolean(touched.bankCode && errors.bankCode)}
              value={payload.bankCode}
            />
            <p style={{ color: "red", textAlign: "left" }}>{errors.bankCode}</p>
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
  const clickInfo = () => {
    alert(
      "Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this"
    );
  };

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
                      <span>Individual</span>
                    </div>
                  </button>
                </li>
                <li>OR</li>
                <li>
                  <button onClick={() => history("/EntityUs")}>
                    <div>
                      <div>
                        {" "}
                        <img src={entity} />
                      </div>
                      <span>Entity</span>
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
              initialValues={payload}
              enableReinitialize
              onSubmit={continueSubmit}
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
              }
              ) => (
                <Form onSubmit={continueSubmit}>
                  <></>
                  <CardHeader
                    style={{ textAlign: "left", marginLeft: "13px" }}
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
                            onClick={clickInfo}
                          />
                        </Tooltip>
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
                            <Info
                              style={{
                                color: "#ffc107",
                                fontSize: "15px",
                                marginBottom: "12px",
                              }}
                              onClick={clickInfo}
                            />
                          </Typography>

                          <div className="d-flex">
                            <Typography className="my-auto">Yes</Typography>
                            <Radio
                              required
                              checked={payload.isUSEntity}
                              onChange={() =>
                                setPayload({ ...payload, isUSEntity: true })
                              }
                              value="yes"
                              name="radio-buttons"
                              inputProps={{ "aria-label": "Yes" }}
                            />
                            <Typography className="my-auto">No</Typography>
                            <Radio
                              required
                              checked={!payload.isUSEntity}
                              onChange={() =>
                                setPayload({ ...payload, isUSEntity: false })
                              }
                              value="no"
                              name="radio-buttons"
                              inputProps={{ "aria-label": "No" }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6">
                          <Typography className="d-flex w-100">
                            Unique Identifier
                            <span style={{ color: "red" }}>*</span>
                            <Info
                              style={{ color: "#ffc107", fontSize: "15px" }}
                              onClick={clickInfo}
                            />
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
                            className="w-100 input"
                            name="uniqueIdentifier"
                            id="outlined"
                            placeholder="Enter Instructor Identifier"
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                uniqueIdentifier: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.uniqueIdentifier &&
                                errors.uniqueIdentifier
                            )}
                            value={payload.uniqueIdentifier}
                          />
                          <p className="error">{errors.uniqueIdentifier}</p>
                        </div>
                      </div>
                    </FormControl>

                    {!payload.isUSEntity ? (
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
                              required
                              id="outlined"
                              name="firstName"
                              placeholder="Enter First Name"
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.firstName && errors.firstName
                              )}
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  firstName: e.target.value,
                                })
                              }
                              value={payload.firstName}
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
                              name="lastName"
                              placeholder="Enter Last Name"
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  lastName: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.lastName && errors.lastName
                              )}
                              value={payload.lastName}
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
                            <select
                              style={{
                                padding: " 0 10px",
                                color: "#7e7e7e",
                                fontStyle: "italic",
                                height: "36px",
                              }}
                              name="countryOfCitizenshipId"
                              id="countryId"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  countryOfCitizenshipId: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              // error={Boolean(touched.countryOfCitizenshipId && errors.countryOfCitizenshipId)}
                              value={payload.countryOfCitizenshipId}
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
                              type="date"
                              id="outlined"
                              name="dob"
                              onChange={(e) =>
                                setPayload({ ...payload, dob: e.target.value })
                              }
                              onBlur={handleBlur}
                              error={Boolean(touched.dob && errors.dob)}
                              value={payload.dob}
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
                              value={payload.nameOfDisregarded}
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
                              required
                              id="outlined"
                              name="firstName"
                              placeholder="Enter First Name"
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.firstName && errors.firstName
                              )}
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  firstName: e.target.value,
                                })
                              }
                              value={payload.firstName}
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
                              name="lastName"
                              placeholder="Enter Last Name"
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  lastName: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.lastName && errors.lastName
                              )}
                              value={payload.lastName}
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
                      style={{ textAlign: "left", marginLeft: "13px" }}
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
                              onClick={clickInfo}
                            />
                          </Tooltip>
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
                            be input. An individual’s US TIN type is generally a
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  usTinTypeId: e.target.value,
                                })
                              }
                              value={payload.usTinTypeId}
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
                                payload.usTinTypeId == 3 ||
                                payload.usTinTypeId == 4
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  usTin: e.target.value,
                                })
                              }
                              inputProps={{ maxLength: 11 }}
                              // onBlur={handleBlur}
                              //   error={Boolean(touched.usTin && errors.usTin)}
                              value={payload.usTin}
                            />
                          </FormControl>
                        </div>
                      </div>
                      {!payload.isUSEntity ? (
                        <div className="col-12 d-flex mt-3">
                          <div className="col-lg-3 col-6 col-md-3 ">
                            <Typography align="left" className="d-flex w-100">
                              Foreign TIN Country
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
                                name="foreignTINCountryId"
                                id="Income"
                                defaultValue={1}
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    foreignTINCountryId: e.target.value,
                                  })
                                }
                                value={payload.foreignTINCountryId}
                              >
                                <option value={0}>-Select-</option>
                                <option value={1}>-Select1-</option>
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
                                payload.foreignTINCountryId == 0 ||
                                (payload.foreignTINCountryId != 0 &&
                                  payload.foreignTINNotAvailable == true)
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
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    foreignTIN: e.target.value,
                                  })
                                }
                                value={payload.foreignTIN}
                              />
                            </FormControl>
                            <div className="d-flex">
                              <Typography
                                style={{ fontSize: "13px", marginTop: "10px" }}
                              >
                                Not Available{" "}
                              </Typography>
                              <Radio
                                disabled={payload.foreignTINCountryId == 0}
                                // foreignTINNotAvailable
                                name="radio-buttons"
                                checked={payload.foreignTINNotAvailable}
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    foreignTINNotAvailable:
                                      !payload.foreignTINNotAvailable,
                                    alternativeTINFormat:
                                      payload.foreignTINNotAvailable,
                                  })
                                }
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
                                  payload.foreignTINCountryId == 0 ||
                                  payload.foreignTINCountryId != 257
                                }
                                name="radio-buttons"
                                checked={payload.alternativeTINFormat}
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
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      vatId: e.target.value,
                                    })
                                  }
                                  value={payload.vatId}
                                >
                                  <option value={0}>-Select-</option>
                                  <option value={1}>My VAT Number is</option>
                                  <option value={2}>
                                    I Do Not Have A VAT Number
                                  </option>
                                </select>
                                <p className="error">
                              {errors.vatId}
                            </p>
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
                                    payload.vatId == 0 ||
                                    payload.vatId == 2
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
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      vat: e.target.value,
                                    })
                                  }
                                  inputProps={{ maxLength: 11 }}
                                  // onBlur={handleBlur}
                                  //   error={Boolean(touched.usTin && errors.vat)}
                                  value={payload.vat}
                                />
                              </FormControl>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </Collapse>
                    <hr className="w-100"></hr>

                    <CardHeader
                      style={{ textAlign: "left", marginLeft: "13px" }}
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
                              onClick={clickInfo}
                            />
                          </Tooltip>
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
                          Residential Country:
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
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialCountryId: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                            value={payload.permanentResidentialCountryId}
                          >
                            <option value={0}>-Select-</option>
                            {/* <option value={1}>-Select1-</option> */}
                            <option value={257}>United Kingdom</option>
                            <option value={258}>United States</option>
                            <option value="">-----</option>
                            {/* <option value={3}>-Select3-</option> */}
                            {countries.map(({ id, name }) => (
                              <option value={id}>{name}</option>
                            ))}
                          </select>
                          <p style={{ color: "red", textAlign: "left" }}>
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
                              name="permanentResidentialStreetNumberandName"
                              placeholder="Enter Street Number and Name"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  permanentResidentialStreetNumberandName:
                                    e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.permanentResidentialStreetNumberandName &&
                                  errors.permanentResidentialStreetNumberandName
                              )}
                              value={
                                payload.permanentResidentialStreetNumberandName
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  permanentResidentialAptSuite: e.target.value,
                                })
                              }
                              value={payload.permanentResidentialAptSuite}
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
                              name="permanentResidentialCityorTown"
                              placeholder="Enter City or Town"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  permanentResidentialCityorTown:
                                    e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.permanentResidentialCityorTown &&
                                  errors.permanentResidentialCityorTown
                              )}
                              value={payload.permanentResidentialCityorTown}
                            />
                            <p className="error">
                              {errors.permanentResidentialCityorTown}
                            </p>
                          </FormControl>
                        </div>
                        {payload.permanentResidentialCountryId == 258 ? (
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
                                name="permanentResidentialStateorProvince1"
                                // id="Income"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    permanentResidentialStateorProvince1:
                                      e.target.value,
                                  })
                                }
                                value={
                                  payload.permanentResidentialStateorProvince1
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
                                  payload.permanentResidentialCountryId == 0
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
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    permanentResidentialStateorProvince1:
                                      e.target.value,
                                  })
                                }
                                value={
                                  payload.permanentResidentialStateorProvince1
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
                              name="permanentResidentialZipPostalCode"
                              placeholder="Enter Zip or Postal Code"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  permanentResidentialZipPostalCode:
                                    e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.permanentResidentialZipPostalCode &&
                                  errors.permanentResidentialZipPostalCode
                              )}
                              value={payload.permanentResidentialZipPostalCode}
                            />
                            <p className="error">
                              {errors.permanentResidentialZipPostalCode}
                            </p>
                          </FormControl>
                        </div>
                      </div>
                      <div className="d-flex">
                        {payload.isUSEntity ? (
                          <div className="mx-5">
                            <Typography
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
                            </Typography>

                            <div className="d-flex">
                              <Typography className="my-auto">Yes</Typography>
                              <Radio
                                required
                                checked={payload.isalternativebusinessaddress}
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    isalternativebusinessaddress: true,
                                  })
                                }
                                value={payload.isalternativebusinessaddress}
                                name="radio-buttons"
                                inputProps={{ "aria-label": "A" }}
                              />
                              <Typography className="my-auto">No</Typography>
                              <Radio
                                required
                                checked={!payload.isalternativebusinessaddress}
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    isalternativebusinessaddress: false,
                                  })
                                }
                                value={!payload.isalternativebusinessaddress}
                                name="radio-buttons"
                                inputProps={{ "aria-label": "B" }}
                              />
                              <p className="error">
                                  {errors.isalternativebusinessaddress}
                                </p>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Typography
                              align="left"
                              style={{ marginTop: "20px" }}
                            >
                              Is this address a Post Office Box?
                              <span style={{ color: "red" }}>*</span>
                              <Info
                                style={{
                                  color: "#ffc107",
                                  fontSize: "15px",
                                  marginBottom: "12px",
                                }}
                                onClick={clickInfo}
                              />
                            </Typography>

                            <div className="d-flex ">
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="false"
                                  control={<Radio />}
                                  label="No"
                                  checked={!payload.isAddressPostOfficeBox}
                                  onChange={() =>
                                    setPayload({
                                      ...payload,
                                      isAddressPostOfficeBox: false,
                                    })
                                  }
                                />
                                <FormControlLabel
                                  value="true"
                                  control={<Radio />}
                                  label="Yes"
                                  checked={payload.isAddressPostOfficeBox}
                                  onChange={() =>
                                    setPayload({
                                      ...payload,
                                      isAddressPostOfficeBox: true,
                                    })
                                  }
                                />
                              </RadioGroup>
                              <p className="error">
                              {errors.isAddressPostOfficeBox}
                            </p>
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
                                  onClick={clickInfo}
                                />
                              </Typography>

                              <div className="d-flex">
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="No"
                                    checked={!payload.isCareOfAddress}
                                    onChange={() =>
                                      setPayload({
                                        ...payload,
                                        isCareOfAddress: false,
                                      })
                                    }
                                  />
                                  <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Yes"
                                    checked={payload.isCareOfAddress}
                                    onChange={() =>
                                      setPayload({
                                        ...payload,
                                        isCareOfAddress: true,
                                      })
                                    }
                                  />
                                </RadioGroup>
                                <p className="error">
                              {errors.isCareOfAddress}
                            </p>
                              </div>
                            </div>
                            <div className="mx-5">
                              <Typography style={{ marginTop: "20px" }}>
                                Is there an alternative mailing or business
                                address in the US?
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
                                <Typography className="my-auto">Yes</Typography>
                                <Radio
                                  required
                                  checked={payload.isalternativebusinessaddress}
                                  onChange={() =>
                                    setPayload({
                                      ...payload,
                                      isalternativebusinessaddress: true,
                                    })
                                  }
                                  value={payload.isalternativebusinessaddress}
                                  name="radio-buttons"
                                  inputProps={{ "aria-label": "A" }}
                                />
                                <Typography className="my-auto">No</Typography>
                                <Radio
                                  required
                                  checked={
                                    !payload.isalternativebusinessaddress
                                  }
                                  onChange={() =>
                                    setPayload({
                                      ...payload,
                                      isalternativebusinessaddress: false,
                                    })
                                  }
                                  value={!payload.isalternativebusinessaddress}
                                  name="radio-buttons"
                                  inputProps={{ "aria-label": "B" }}
                                />
                                <p className="error">
                                  {errors.isalternativebusinessaddress}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {payload.isalternativebusinessaddress ? (
                        <>
                          <div className="col-lg-3 col-6 col-md-3">
                            <Typography align="left" className="d-flex w-100 ">
                              Residential Country:
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
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    permanentResidentialCountryId1:
                                      e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                value={payload.permanentResidentialCountryId1}
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
                                  name="permanentResidentialStreetNumberandName1"
                                  placeholder="Enter Street Number and Name"
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      permanentResidentialStreetNumberandName1:
                                        e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.permanentResidentialStreetNumberandName1 &&
                                      errors.permanentResidentialStreetNumberandName1
                                  )}
                                  value={
                                    payload.permanentResidentialStreetNumberandName1
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
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      permanentResidentialAptSuite1:
                                        e.target.value,
                                    })
                                  }
                                  value={payload.permanentResidentialAptSuite1}
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
                                  name="permanentResidentialCityorTown1"
                                  placeholder="Enter City or Town"
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      permanentResidentialCityorTown1:
                                        e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.permanentResidentialCityorTown1 &&
                                      errors.permanentResidentialCityorTown1
                                  )}
                                  value={
                                    payload.permanentResidentialCityorTown1
                                  }
                                />
                                <p className="error">
                                  {errors.permanentResidentialCityorTown1}
                                </p>
                              </FormControl>
                            </div>
                            {payload.permanentResidentialCountryId1 == 258 ? (
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
                                    onChange={(e: any) =>
                                      setPayload({
                                        ...payload,
                                        permanentResidentialStateorProvince1:
                                          e.target.value,
                                      })
                                    }
                                    value={
                                      payload.permanentResidentialStateorProvince1
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
                                      payload.permanentResidentialCountryId1 ==
                                      0
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
                                    onChange={(e: any) =>
                                      setPayload({
                                        ...payload,
                                        permanentResidentialStateorProvince1:
                                          e.target.value,
                                      })
                                    }
                                    value={
                                      payload.permanentResidentialStateorProvince1
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
                                  name="permanentResidentialZipPostalCode1"
                                  placeholder="Enter Zip or Postal Code"
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      permanentResidentialZipPostalCode1:
                                        e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.permanentResidentialZipPostalCode1 &&
                                      errors.permanentResidentialZipPostalCode1
                                  )}
                                  value={
                                    payload.permanentResidentialZipPostalCode1
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
                      style={{ textAlign: "left", marginLeft: "13px" }}
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
                              onClick={clickInfo}
                            />
                          </Tooltip>
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
                            Where applicable enter your US and Non-US (i.e.
                            “Foreign”) taxpayer identification number(s) along
                            with the US TIN Type and Foreign Country(ies)
                            correlating to the FTIN(s).?
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            ated if you select one of those jurisdictions. If
                            you select a country that normally does provide an
                            FTIN, but you do not wish to provide or cannot
                            provide, you have the option to provide an
                            explanation. Not providing a FTIN when it would
                            normally be available may lead to the highest rate
                            of withholding being applied, where treaty benefits
                            could apply.
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
                              name="contactFirstName"
                              placeholder="Enter First Name"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  contactFirstName: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.contactFirstName &&
                                  errors.contactFirstName
                              )}
                              value={payload.contactFirstName}
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
                              name="contactLastName"
                              placeholder="Enter Last Name"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  contactLastName: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.contactLastName &&
                                  errors.contactLastName
                              )}
                              value={payload.contactLastName}
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
                                  name="contactEmail"
                                  id="outlined"
                                  type="email"
                                  placeholder="example@domain.com"
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      contactEmail: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touched.contactEmail && errors.contactEmail
                                  )}
                                  value={payload.contactEmail}
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  primaryContactNumberId: e.target.value,
                                })
                              }
                              value={payload.primaryContactNumberId}
                            >
                              <option value={0}>-Select-</option>
                              {/* <option value={1}>-Select1-</option> */}
                              {countriesCode.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <Input
                              disabled={payload.primaryContactNumberId == 0}
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  primaryContactNumber: e.target.value,
                                })
                              }
                              value={payload.primaryContactNumber}
                            />
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Secondary Contact Number
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  alternativeNumberId: e.target.value,
                                })
                              }
                              value={payload.alternativeNumberId}
                            >
                              <option value={0}>-Select-</option>
                              {/* <option value={1}>-Select1-</option> */}
                              {countriesCode.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <Input
                              disabled={payload.alternativeNumberId == 0}
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  alternativeNumber: e.target.value,
                                })
                              }
                              value={payload.alternativeNumber}
                            />
                          </FormControl>
                        </div>

                        <div>
                          {alternateNo ? (
                            <div className="col-lg-3 col-6 col-md-3 mt-3">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  Secondary Contact Number
                                </Typography>
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
                                    onChange={(e: any) =>
                                      setPayload({
                                        ...payload,
                                        alternativeNumberId1: e.target.value,
                                      })
                                    }
                                    value={payload.alternativeNumberId1}
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
                                  disabled={payload.alternativeNumberId1 == 0}
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
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      alternativeNumber1: e.target.value,
                                    })
                                  }
                                  value={payload.alternativeNumber1}
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
                    <CardHeader
                      style={{ textAlign: "left", marginLeft: "13px" }}
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
                        incomeArr.map((ind) => {
                          return (
                            <div className="col-lg-3 col-6 col-md-3 ">
                              <Typography className="d-flex w-100 pb-2">
                                Income Type
                                {/* <span style={{ color: 'red' }}>*</span> */}
                              </Typography>

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
                                    onChange={(e: any) =>
                                      setPayload({
                                        ...payload,
                                        incomeTypeId: e.target.value,
                                      })
                                    }
                                    value={payload.incomeTypeId}
                                  >
                                    <option value="1">-Select-</option>
                                    {incomeCodes.map(({ id, name }) => (
                                      <option value={id}>{name}</option>
                                    ))}
                                  </select>
                                  <Delete
                                    onClick={() => {
                                      setAlternateIncome(false);
                                    }}
                                    style={{
                                      color: "red",
                                      fontSize: "20px",
                                      marginTop: "8px",
                                      marginLeft: "4px",
                                    }}
                                  />
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
                    <hr className="w-100"></hr>
                    {/* Payment type */}
                    <CardHeader
                      style={{ textAlign: "left", marginLeft: "13px" }}
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
                                  TT-134 Q&A, Account information
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
                          Payment Type<span style={{ color: "red" }}>*</span>
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  paymentTypeId: parseInt(e.target.value),
                                })
                              }
                              value={payload.paymentTypeId}
                            >
                              <option value={0}>Select</option>
                              <option value={1}>ACH</option>
                              <option value={2}>Check</option>
                              <option value={3}>Wire</option>
                            </select>
                            <p className="error">{errors.paymentTypeId}</p>
                            <Delete
                              style={{
                                color: "red",
                                fontSize: "20px",
                                marginTop: "8px",
                                marginLeft: "4px",
                              }}
                            />
                          </span>
                        </FormControl>
                      </div>
                    </Collapse>
                    <hr className="w-100"></hr>

                    {payload.paymentTypeId ? (
                      <>
                        <CardHeader
                          style={{ textAlign: "left", marginLeft: "13px" }}
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
                                submission please identify here. The account
                                details provided will be used to:
                              </Typography>
                              <Typography>
                                1. Make payments to you if you are entitled to
                                any
                              </Typography>
                              <Typography>
                                2.Ensure your form is correctly matched to your
                                account
                              </Typography>
                              <Typography>
                                3.for further validation of new and existing
                                information
                              </Typography>
                              <Typography>
                                4.In some circumstance will allow us to document
                                multiple accounts with the same certificate
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
                          {payload.paymentTypeId === 1 ? (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Account holder name
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
                                      name="accountHolderName"
                                      placeholder="Enter  Account holder name"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountHolderName: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountHolderName &&
                                          errors.accountHolderName
                                      )}
                                      value={payload.accountHolderName}
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
                                      name="accountBankName"
                                      placeholder="Enter Bank name"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountBankName: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountBankName &&
                                          errors.accountBankName
                                      )}
                                      value={payload.accountBankName}
                                    />
                                    <p className="error">
                                      {errors.accountBankName}
                                    </p>
                                  </FormControl>
                                </div>
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <Typography align="left">
                                    Branch Location
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
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountBankBranchLocationId:
                                            e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      value={
                                        payload.accountBankBranchLocationId
                                      }
                                    >
                                      <option value="">-Select-</option>
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
                                      name="accountNumber"
                                      placeholder="Enter Account Number"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountNumber: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountNumber &&
                                          errors.accountNumber
                                      )}
                                      value={payload.accountNumber}
                                    />
                                    <p className="error">
                                      {errors.accountNumber}
                                    </p>
                                  </FormControl>
                                </div>
                                {returnFieldName(handleBlur, touched, errors)}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                          {payload.paymentTypeId === 2 ? (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Make Payable To
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
                                      name="makePayable"
                                      placeholder="Enter Make Payable To"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          makePayable: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.makePayable &&
                                          errors.makePayable
                                      )}
                                      value={payload.makePayable}
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
                                      required
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
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          payResidentalCountryId:
                                            e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      value={payload.payResidentalCountryId}
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
                                      name="payStreetNumberAndName"
                                      placeholder="Enter Street Number And Name"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          payStreetNumberAndName:
                                            e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.payStreetNumberAndName &&
                                          errors.payStreetNumberAndName
                                      )}
                                      value={payload.payStreetNumberAndName}
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
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          payAptSuite: e.target.value,
                                        })
                                      }
                                      value={payload.payAptSuite}
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
                                      name="payCityorTown"
                                      placeholder="Enter  City OR Town"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          payCityorTown: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.payCityorTown &&
                                          errors.payCityorTown
                                      )}
                                      value={payload.payCityorTown}
                                    />
                                    <p className="error">
                                      {errors.payCityorTown}
                                    </p>
                                  </FormControl>
                                </div>
                                {payload.payResidentalCountryId == 258 ? (
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
                                        onChange={(e: any) =>
                                          setPayload({
                                            ...payload,
                                            payStateOrProvince: e.target.value,
                                          })
                                        }
                                        value={payload.payStateOrProvince}
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
                                          payload.payResidentalCountryId == 0
                                        }
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
                                        name="payStateOrProvince"
                                        placeholder="Enter  State OR Provience"
                                        onChange={(e: any) =>
                                          setPayload({
                                            ...payload,
                                            payStateOrProvince: e.target.value,
                                          })
                                        }
                                        onBlur={handleBlur}
                                        error={Boolean(
                                          touched.payStateOrProvince &&
                                            errors.payStateOrProvince
                                        )}
                                        value={payload.payStateOrProvince}
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
                                      name="payZipPostalCode"
                                      placeholder="Enter Zip/Postal Code"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          payZipPostalCode: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.payZipPostalCode &&
                                          errors.payZipPostalCode
                                      )}
                                      value={payload.payZipPostalCode}
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

                          {payload.paymentTypeId === 3 ? (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      Account holder name
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
                                      name="accountHolderName"
                                      placeholder="Enter Account holder name"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountHolderName: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountHolderName &&
                                          errors.accountHolderName
                                      )}
                                      value={payload.accountHolderName}
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
                                      name="accountBankName"
                                      placeholder="Enter Bank name"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountBankName: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountBankName &&
                                          errors.accountBankName
                                      )}
                                      value={payload.accountBankName}
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
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountBankBranchLocationId:
                                            e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      value={
                                        payload.accountBankBranchLocationId
                                      }
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
                                      name="accountNumber"
                                      placeholder="Enter Account Number"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          accountNumber: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      error={Boolean(
                                        touched.accountNumber &&
                                          errors.accountNumber
                                      )}
                                      value={payload.accountNumber}
                                    />
                                    <p className="error">
                                      {errors.accountNumber}
                                    </p>
                                  </FormControl>
                                </div>

                                {payload.accountBankBranchLocationId == 258 ? (
                                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                                    <FormControl className="w-100">
                                      <Typography align="left">
                                        ABA / Routing
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
                                        name="abaRouting"
                                        placeholder="Enter ABA / Routing"
                                        onChange={(e: any) =>
                                          setPayload({
                                            ...payload,
                                            abaRouting: e.target.value,
                                          })
                                        }
                                        onBlur={handleBlur}
                                        error={Boolean(
                                          touched.abaRouting &&
                                            errors.abaRouting
                                        )}
                                        value={payload.abaRouting}
                                      />
                                      <p className="error">
                                        {errors.abaRouting}
                                      </p>
                                    </FormControl>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {payload.accountBankBranchLocationId == 257 ? (
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
                                        onChange={(e: any) =>
                                          setPayload({
                                            ...payload,
                                            iban: e.target.value,
                                          })
                                        }
                                        // onBlur={handleBlur}
                                        // error={Boolean(touched.iban && errors.iban)}
                                        value={payload.iban}
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
                                        onChange={(e: any) =>
                                          setPayload({
                                            ...payload,
                                            swiftCode: e.target.value,
                                          })
                                        }
                                        // onBlur={handleBlur}
                                        // error={Boolean(touched.swiftCode && errors.swiftCode)}
                                        value={payload.swiftCode}
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
                            checked={payload.isConfirmed}
                            name="radio-buttons"
                            onChange={() =>
                              setPayload({
                                ...payload,
                                isConfirmed: !payload.isConfirmed,
                              })
                            }
                            onBlur={handleBlur}
                            // error={Boolean(touched.isConfirmed && errors.isConfirmed)}
                            value={payload.isConfirmed}
                          />
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
                          disabled={!payload.isConfirmed}
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
