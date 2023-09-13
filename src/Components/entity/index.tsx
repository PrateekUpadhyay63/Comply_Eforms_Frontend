import React, { useState, useEffect } from "react";
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
  Tooltip,
  Link
} from "@mui/material";

import { useDispatch } from "react-redux";
import {
  RemoveCircleOutlineOutlined,
  ControlPointOutlined,
  Delete,
  Info,
} from "@mui/icons-material";
// import Link from '@mui/material/Link';
// import Tooltip from '@mui/material/Tooltip';
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Form } from "formik";
import { EntitySchema } from "../../schemas/entityindex";
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import "./style.css"
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import entity from "../../../src/assets/img/entity.png";
import individual from "../../../src/assets/img/individual.png";
import Checkbox from "@mui/material/Checkbox";
import { apiGetUrl, apiPostUrl } from "../../api/apiUtils";

export default function Entity() {
  const history = useNavigate();
  //   //States
  const [open, setOpen] = useState("");
  // const [is_US, setUS] = useState(false);
  // const [is_USACH, setUSACH] = useState('');
  const [incomeArr, setIncomeArr] = useState(["intrest"]);
  // const [accInfoSection, setAccInfoSection] = useState(false);
  // const [accInfoType, setAccInfoType] = useState('');
  const [bankLocation, setBankLocation] = useState("");
  const [alternateNo, setAlternateNo] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [countriesCode, setCountriesCode] = useState([]);
  const [incomeCodes, setIncomeCodes] = useState([]);
  const [usStates, setUsStates] = useState([]);
  const [toolInfo,setToolInfo]=useState("");
  const [payload, setPayload] = useState({
    agentId: 3,
    businessTypeId: 1,
    isUSEntity: true,
    uniqueIdentifier: "",
    firstName: "",
    lastName: "",
    countryOfCitizenshipId: 1,
    dob: "",
    nameOfDisregarded: "",
    entityName: "",
    usTinTypeId: 1,
    usTin: "",
    foreignTINCountryId: 0,
    foreignTIN: "",
    foreignTINNotAvailable: false,
    alternativeTINFormat: false,
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
    incomeTypeId: 1,
    paymentTypeId: 0,
    accountHolderName: "",
    accountBankName: "",
    accountBankBranchLocationId: 0,
    accountNumber: "",
    abaRouting: "",
    iban: "",
    swiftCode: "",
    bankCode: "",
    doingBusinessAsName: "",
    makePayable: "",
    payResidentalCountryId: 0,
    payStreetNumberAndName: "",
    payAptSuite: "",
    payCityorTown: "",
    sortCode: "",
    payStateOrProvince: "",
    payZipPostalCode: "",
    isCorrectPaymentPurposes: true,
    isConfirmed: true,
  });

  useEffect(() => {
    apiGetUrl("GetCountries", "", {})
      .then((res) => {
        setCountries(res.data);
        console.log(res.data, "res.data");
      })
      .catch((err) => {
        console.log(err);
      });

    apiGetUrl("GetCountriesCode", "", {})
      .then((res) => {
        setCountriesCode(res.data);
        console.log(res.data, "res.data");
      })
      .catch((err) => {
        console.log(err);
      });

    apiGetUrl("GetAllIncomeCodes", "", {})
      .then((res) => {
        setIncomeCodes(res.data);
        console.log(res.data, "res.data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleDelete = (i: any) => {
    const updatedIncomeCodes = [...incomeArr];
    updatedIncomeCodes.splice(i, 1);
    setIncomeArr(updatedIncomeCodes);
  };
  
 

  useEffect(() => {
    if (payload.permanentResidentialCountryId == 258) {
      apiGetUrl("GetStateByCountryId", "", {})
        .then((res) => {
          setUsStates(res.data);
          console.log(res.data, "res.data");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [payload.permanentResidentialCountryId]);

  const handleOpen = (val: any) => {
    if (open === val) {
      setOpen("");
    } else setOpen(val);
  };

  // const handleRadio = event => {
  //   setSelectedValue(event.target.value);
  // };

  // const handleRadio1 = event => {
  //   setSelectedValue1(event.target.value);
  // };

  const addIncomeType = () => {
    setIncomeArr((incomeArr) => [...incomeArr, "1"]);
  };

  const handleSub = (e: any) => {
    e.preventDefault();
    apiPostUrl("InsertAccountHolderDetail", "", payload)
      .then((res) => {
        console.log(res.data, "res.data");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(payload, "payload2");
  };

  // const returnFieldName = () => {
  //   if (is_USACH === 'US') {
  //     return 'ABA / Routing';
  //   } else if (is_USACH === 'UK') {
  //     return 'Sort Code';
  //   } else {
  //     return 'Bank Code';
  //   }
  // };
  //accountBankBranchLocationId
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

  const clickInfo = () => {
    alert(
      "Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this"
    );
  };
  // console.log(errors,"error")
  return (
    <section
      className="inner_content"
      style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
    >
     <Typography align="center"  style={{ fontSize: '32px', fontWeight: '500', color: 'white',marginBottom:"20px",marginTop:"10px" }}>
        Account Holder Details
      </Typography >

      <div className="container-fluid">
        <div className="row"></div>

        <div className="row">
          <div className="col-12">
            <div className="tabview">
              <ul>
                <li>
                  <button onClick={() => history("/IndividualUs")}>
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
                  <button className="active">
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

        <div className="col-lg-12 mt-3" style={{ padding: "8px" }}>
          <Paper elevation={6} style={{ padding: "17px" }}>
            <Formik
              initialValues={payload}
              enableReinitialize
              onSubmit={() => {
                console.log("submit!");
              }}
              validationSchema={EntitySchema}
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
                  <></>
                  <CardHeader
                    style={{ textAlign: "left" }}
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
                        <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Basic details - individual</Typography>
            <a onClick={()=>setToolInfo("basic")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center" > View More...</Typography>
           </a>
           </>
        }>
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
                  {toolInfo==="basic" ? ( <div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Are you a U.S. Business?
                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  Select 'Yes' if: You are submitting a form on behalf of a U.S. Business/Entity.
                  </Typography>
                  <Typography>Select 'No' if: You are submitting a form on behalf of a Business/Entity that is not a U.S. Business/Entity. 
 </Typography>
                <Typography style={{marginTop:"10px"}}>IRS Form Guidance</Typography>
                <Typography style={{marginTop:"10px"}}>
                A U.S. entity is an entity created or organized in the U.S. or under the law of any state in the United States.
                </Typography>
                <Typography style={{marginTop:"10px"}}>
                The term 'Non-U.S. Entity' generally means any business or organization including corporations, partnerships, public or private limited companies, trusts etc, not created or organized in the United States or under the law of any state in the U.S. or its territories.
                </Typography>
                <Typography>
                For additional clarification, follow the following link: <Link >https://www.irs.gov/individuals/international-taxpayers/classification-of-taxpayers-for-us-tax-purposes
                  </Link> 
                </Typography>
                <Typography style={{marginTop:"10px"}}>Ref: H002 </Typography>
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}
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
                            Are you a U.S Entity?
                            <span style={{ color: "red" }}>*</span>
                            <Info
                              style={{
                                color: "#ffc107",
                                fontSize: "15px",
                                marginBottom: "12px",
                              }}
                              // onClick={clickInfo}
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
                              // value={!payload.isUSEntity}
                              value="no"
                              name="radio-buttons"
                              inputProps={{ "aria-label": "No" }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-3 col-6 col-md-3">
                          <Typography className="d-flex w-100 ">
                            Unique Identifier
                            <span style={{ color: "red" }}>*</span>
                            <Info
                              style={{ color: "#ffc107", fontSize: "15px" }}
                              // onClick={clickInfo}
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
                          <p style={{ color: "red", textAlign: "left" }}>
                            {errors.uniqueIdentifier}
                          </p>
                        </div>
                      </div>
                    </FormControl>

                    {payload.isUSEntity ? (
                      <div className="row">
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Entity Name<span style={{ color: "red" }}>*</span>
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
                              name="entityName"
                              placeholder="Enter Business Name"
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  entityName: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.entityName && errors.entityName
                              )}
                              value={payload.entityName}
                            />
                            <p style={{ color: "red", textAlign: "left" }}>
                              {errors.entityName}
                            </p>
                          </FormControl>
                        </div>
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
                              Entity Name<span style={{ color: "red" }}>*</span>
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
                              name="entityName"
                              placeholder="Enter Business Name"
                              onChange={(e) =>
                                setPayload({
                                  ...payload,
                                  entityName: e.target.value,
                                })
                              }
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.entityName && errors.entityName
                              )}
                              value={payload.entityName}
                            />
                            <p style={{ color: "red", textAlign: "left" }}>
                              {errors.entityName}
                            </p>
                          </FormControl>
                        </div>
                      </div>
                    )}
                  </Collapse>
                  <hr className="w-100"></hr>

                  <CardHeader
                    style={{ textAlign: "left" }}
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
                        <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Taxpayer information</Typography>
            <a onClick={()=>setToolInfo("tin")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                  {toolInfo==="tin"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Where applicable enter your US and Non-US (i.e. “Foreign”) taxpayer identification number(s) along with the US TIN Type and Foreign Country(ies) correlating to the FTIN(s).?  
                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  Please note that some jurisdictions do not provide FTINs and this will be indicated if you select one of those jurisdictions. If you select a country that normally does provide an FTIN, but you do not wish to provide or cannot provide, you have the option to provide an explanation. Not providing a FTIN when it would normally be available may lead to the highest rate of withholding being applied, where treaty benefits could apply.
                  </Typography>
                  <Typography style={{marginTop:"10px"}}>Note: the Foreign TIN box restricts formatting per the Foreign Country selected, based on OECD guidance. By ticking “TIN Format not available”, this disables the formatting so that any format may be input. 
An individual’s US TIN type is generally a Social Security Number (SSN) or an Individual Tax Identification Number (ITIN).?</Typography>
                <Typography style={{marginTop:"10px"}}>An entity’s US TIN may be an employer identification number (EIN): including a withholding foreign partnership/trust EIN (WP/T-EIN) or a qualified intermediary EIN (QI-EIN). </Typography>
                <Typography style={{marginTop:"10px"}}>
A TIN must be furnished on US tax returns when filed or when claiming treaty benefits. A US or Foreign TIN must generally be provided on a withholding certificate (i.e. W-8) if the beneficial owner is receiving effectively connected income (ECI), claiming tax treaty benefits (other than for income from marketable, actively traded, securities), claiming an exemption for ECI or claiming an exemption for certain annuities.</Typography>
           <Typography style={{marginTop:"10px"}}>
           If you are required to have a US TIN but do not have one you may apply for an EIN on Form SS-4, Application for Employer Identification Number, a SSN on Form SS-5, Application for a Social Security Card or an ITIN on Form W-7, IRS Application for Individual Taxpayer Identification Number. 
            </Typography>   
            <Typography style={{marginTop:"10px"}}>
            IRS Form Guidance: 
              </Typography>  
              <Typography style={{marginTop:"10px"}}>
              See Regulations section 1.1441-1(e)(4) (vii) for when you are required to provide a U.S. TIN on a Form W-8 associated with a payment subject to chapter 3 withholding. A partner in a partnership conducting a trade or business in the United States will likely be allocated effectively connected taxable income. The partner is required to file a U.S. federal income tax return and must have a U.S. taxpayer identification number (TIN). You must provide a U.S. TIN if you are: 
                </Typography>
                <Typography style={{marginTop:"10px"}}>- Claiming an exemption from withholding under section 871(f) for certain annuities received under qualified plans, or </Typography>
<Typography style={{marginTop:"10px"}}>- Claiming benefits under an income tax treaty and have not provided a foreign TIN on line 9b. </Typography>
  <Typography style={{marginTop:"10px"}}>
  However, a TIN is not required to be shown in order to claim treaty benefits on the following items of income: 
    </Typography> 
    <Typography style={{marginTop:"10px"}}>
    However, a TIN is not required to be shown in order to claim treaty benefits on the following items of income: 
      </Typography>  
      <Typography style={{marginTop:"10px"}}>- Dividends and interest from stocks and debt obligations that are actively traded; 
        </Typography>  
        <Typography style={{marginTop:"10px"}}>
        - investment company registered under the Investment Company Act of 1940 (mutual fund); 
          </Typography>   
          <Typography style={{marginTop:"10px"}}>
          - Dividends, interest, or royalties from units of beneficial interest in a unit investment trust that are (or were upon issuance) publicly offered and are registered with the SEC under the Securities Act of 1933; 
            </Typography>  
            <Typography style={{marginTop:"10px"}}>
            - and Income related to loans of any of the above securities.
              </Typography>    
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}

                  <Collapse
                    className="px-5"
                    in={open === "tax"}
                    timeout="auto"
                    unmountOnExit
                  >
                    {!payload.isUSEntity ? (
                      <div className="col-12 d-flex mt-3">
                        <div className="col-lg-3 col-6 col-md-3 ">
                          <Typography align="left" className="d-flex w-100 ">
                            U.S. TIN Type
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
                              <option value="2">EIN</option>
                              <option value="3">QIEIN</option>
                              <option value="4">WPEIN</option>
                              <option value="5">WTEIN</option>
                              <option value="6">U.S. TIN not applicable</option>
                              <option value="7">U.S. TIN not available</option>
                            </select>
                          </FormControl>
                        </div>

                        <div className="col-lg-3 col-6 col-md-3 mx-2">
                          <FormControl className="w-100">
                            <Typography align="left">U.S. TIN</Typography>
                            <Input
                              disabled={
                                payload.usTinTypeId == 6 ||
                                payload.usTinTypeId == 7
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
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  usTin: e.target.value,
                                })
                              }
                              value={payload.usTin}
                            />
                          </FormControl>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 ">
                          <Typography align="left" className="d-flex w-100 ">
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
                              // defaultValue={1}
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  foreignTINCountryId: e.target.value,
                                })
                              }
                              value={payload.foreignTINCountryId}
                            >
                              <option value={0}>-Select-</option>
                              <option value={1}>-Select2-</option>
                              {countries.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                          </FormControl>
                        </div>

                        <div className="col-lg-3 col-6 col-md-3 mx-2">
                          <FormControl className="w-100">
                            <Typography align="left">Foreign TIN</Typography>
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
                          <div className="col-lg-3 col-6 col-md-3 ">
                            <FormControl className="w-100">
                              <Typography align="left">
                                GIIN
                                <Info
                                  style={{
                                    color: "#ffc107",
                                    fontSize: "15px",
                                    marginBottom: "12px",
                                  }}
                                  // onClick={clickInfo}
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
                                id="outlined"
                                name="giin"
                                type="uppercase"
                                placeholder="Enter GIIN"
                                onChange={(e) =>
                                  setPayload({
                                    ...payload,
                                    giin: e.target.value,
                                  })
                                }
                                value={payload.giin}
                              />
                            </FormControl>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="col-12 d-flex">
                        <div className="col-lg-3 col-6 col-md-3 ">
                          <Typography align="left" className="d-flex w-100 ">
                            U.S. TIN Type
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
                              <option value="2">EIN</option>
                            </select>
                          </FormControl>
                        </div>

                        <div className="col-lg-3 col-6 col-md-3 mx-2">
                          <FormControl className="w-100">
                            <Typography align="left">U.S. TIN</Typography>
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
                              name="usTin"
                              placeholder="Enter U.S. TIN"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  usTin: e.target.value,
                                })
                              }
                              value={payload.usTin}
                            />
                          </FormControl>
                        </div>
                      </div>
                    )}
                  </Collapse>
                  <hr className="w-100"></hr>

                  {/* Permanent Residence Section */}
                  <CardHeader
                    style={{ textAlign: "left" }}
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
                        <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Address Details</Typography>
            <a onClick={()=>setToolInfo("Address")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                  {toolInfo==="Address"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Where applicable enter your US and Non-US (i.e. “Foreign”) taxpayer identification number(s) along with the US TIN Type and Foreign Country(ies) correlating to the FTIN(s).?  

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  Please note that some jurisdictions do not provide FTINs and this will be indicated if you select one of those jurisdictions. If you select a country that normally does provide an FTIN, but you do not wish to provide or cannot provide, you have the option to provide an explanation. Not providing a FTIN when it would normally be available may lead to the highest rate of withholding being applied, where treaty benefits could apply.

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>IRS Guidance:</Typography>
                <Typography style={{marginTop:"10px"}}>Non-US Person, W-8 submissions, should not use a Post Office (PO Box), a Care-of-address, or mailing address of a financial organization as these may not be considered valid. If you do, the agent receiving the form may require additional information from you to help validate your residency status. Ref: EH005</Typography>
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}
                  <Collapse
                    className="px-5 "
                    in={open === "pra"}
                    timeout="auto"
                    unmountOnExit
                  >
                    <div className="col-lg-3 col-6 col-md-3">
                      <Typography className="d-flex w-100 ">
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
                          // defaultValue={1}
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
                          <p style={{ color: "red", textAlign: "left" }}>
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
                        </FormControl>
                      </div>
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
                            City or Town:<span style={{ color: "red" }}>*</span>
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
                                permanentResidentialCityorTown: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.permanentResidentialCityorTown &&
                                errors.permanentResidentialCityorTown
                            )}
                            value={payload.permanentResidentialCityorTown}
                          />
                          <p style={{ color: "red", textAlign: "left" }}>
                            {errors.permanentResidentialCityorTown}
                          </p>
                        </FormControl>
                      </div>
                      {/* {is_US ? (
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                            marginTop: '23px',
                          }}
                          defaultValue={0}
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                        >
                          <MenuItem value="0">--Select--</MenuItem>
                          <MenuItem value={1}>Alabama</MenuItem>
                          <MenuItem value={2}>Alaska</MenuItem>
                          <MenuItem value={3}>etc</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  ) : ( */}
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
                            State or Province:
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
                            id="outlined"
                            name="permanentResidentialStateorProvince"
                            placeholder="Enter State or Province"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialStateorProvince:
                                  e.target.value,
                              })
                            }
                            value={payload.permanentResidentialStateorProvince}
                          />
                        </FormControl>
                      </div>
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
                          <p style={{ color: "red", textAlign: "left" }}>
                            {errors.permanentResidentialZipPostalCode}
                          </p>
                        </FormControl>
                      </div>
                    </div>
                    <div className="d-flex">
                      {payload.isUSEntity ? (
                        <div className="mx-5">
                          <Typography style={{ marginTop: "20px" }}>
                            Is there an alternative mailing or business address
                            in the US?
                            <span style={{ color: "red" }}>*</span>
                           <span>
                           <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Address Details</Typography>
            <a onClick={()=>setToolInfo("mail")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                          {toolInfo==="mail"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Please check this box if you have an alternative mailing address away from the permanent residential address entered here.

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  You will be asked to enter the alternative address later in the process and in some circumstances you may need to provide additional information.

                  </Typography>
                 
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}

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
                            <span>
                           <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">PO Box Address</Typography>
            <a onClick={()=>setToolInfo("post")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                          {toolInfo==="post"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  A Post Office Box is a mail box located at a post office (versus at a permanent residence).

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  You should not use a P.O. Box or an in-care-of-address (other than a registered address). If you do, we may need to contact you for further information to help validate the submission.
                  </Typography>
                 
                  <Typography style={{marginTop:"10px"}}>
                    If you reside in a country that does not use street addresses, you may enter a descriptive address.
                  </Typography>
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}    
                  

                          <div className="d-flex ">
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
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
                                value="male"
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
                          </div>
                          <div className="mx-5">
                            <Typography style={{ marginTop: "20px" }}>
                              Is this an In Care Of address?
                              <span style={{ color: "red" }}>*</span>
                              <span>
                           <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">In Care of Address</Typography>
            <a onClick={()=>setToolInfo("care")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                            {toolInfo==="care"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  An In Care Of Address denotes that something is to be delivered to an address where the recipient does not normally receive mail.

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  You should not use a P.O. Box or an in-care-of-address (other than a registered address). If you do, we may need to contact you for further information to help validate the submission.
                  </Typography>
                 
                  <Typography style={{marginTop:"10px"}}>
                  If you reside in a country that does not use street addresses, you may enter a descriptive address.
                  </Typography>
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}

                            <div className="d-flex">
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
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
                                  value="male"
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
                            </div>
                          </div>

                          <div className="mx-5">
                            <Typography style={{ marginTop: "20px" }}>
                              Is there an alternative mailing or business
                              address in the US?
                              <span style={{ color: "red" }}>*</span>
                              <span>
                           <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Alternate Mailing Address</Typography>
            <a onClick={()=>setToolInfo("mail")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                            {toolInfo==="mail"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Please check this box if you have an alternative mailing address away from the permanent residential address entered here.

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  You will be asked to enter the alternative address later in the process and in some circumstances you may need to provide additional information.

                  </Typography>
                 
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}


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
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                   

                    {payload.isalternativebusinessaddress ? (
                      <>
                        <div className="col-lg-3 col-6 col-md-3">
                          <Typography className="d-flex w-100 ">
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
                              id="Income"
                              // defaultValue={1}
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
                              <option value="">---</option>
                              {countries.map(({ id, name }) => (
                                <option value={id}> {name} </option>
                              ))}
                            </select>
                            <p style={{ color: "red", textAlign: "left" }}>
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
                              <p style={{ color: "red", textAlign: "left" }}>
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
                                value={payload.permanentResidentialCityorTown1}
                              />
                              <p style={{ color: "red", textAlign: "left" }}>
                                {errors.permanentResidentialCityorTown1}
                              </p>
                            </FormControl>
                          </div>
                          {payload.permanentResidentialCountryId === 258 ? (
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
                                  id="Income"
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
                                  <MenuItem value="0">
                                    <em>--Select--</em>
                                  </MenuItem>
                                  {usStates.map(({ name }) => (
                                    <MenuItem value={name}>{name}</MenuItem>
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
                                    payload.permanentResidentialCountryId1 == 0
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
                              <p style={{ color: "red", textAlign: "left" }}>
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

                  {/* Contact Details */}
                  <hr className="w-100"></hr>

                  <CardHeader
                    style={{ textAlign: "left" }}
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
                        <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Contact Details</Typography>
            <a onClick={()=>setToolInfo("Contact")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                  {toolInfo==="Contact"?(<div>
                <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Where applicable enter your US and Non-US (i.e. “Foreign”) taxpayer identification number(s) along with the US TIN Type and Foreign Country(ies) correlating to the FTIN(s).?  

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>
                  ated if you select one of those jurisdictions. If you select a country that normally does provide an FTIN, but you do not wish to provide or cannot provide, you have the option to provide an explanation. Not providing a FTIN when it would normally be available may lead to the highest rate of withholding being applied, where treaty benefits could apply.

                  </Typography>
                  <Typography style={{marginTop:"10px"}}>If you have not received the email within a few minutes, it probably means your local email service has detected an automated email and captured the email in a local spam or quarantine folder. Please see 'more' below for further information or contact:</Typography>
                <Typography style={{marginTop:"10px"}}>If you do not receive the email containing your confirmation code:</Typography>
                <Typography style={{marginTop:"10px"}}> 
The email is dispatched to the email address given as soon as you confirm the details entered into this screen and move across to the next part of the submission process. Delivery should take place within a few minutes, although on occasion it may take a little longer because of issues outside of our control.

                </Typography>
                <Typography style={{marginTop:"10px"}}>
                The following factors may impact delivery of the email: internet traffic, your internal email service delay, the way your internal email service is configured to accept automatically generated emails, or possibly the security settings of your browser.
                  </Typography>

                  <Typography style={{marginTop:"10px"}}>
                  Please also check your spam or junk email folder.

                  </Typography >
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}
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
                          <p style={{ color: "red", textAlign: "left" }}>
                            {errors.contactFirstName}
                          </p>
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
                              touched.contactLastName && errors.contactLastName
                            )}
                            value={payload.contactLastName}
                          />
                          <p style={{ color: "red", textAlign: "left" }}>
                            {errors.contactLastName}
                          </p>
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
                              <p style={{ color: "red", textAlign: "left" }}>
                                {errors.contactEmail}
                              </p>
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
                            {/* <option value={1}>--Select1--</option> */}
                            {countriesCode.map(({ id, name }) => (
                              <option value={id}>{name}</option>
                            ))}
                            <option></option>
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
                            {/* <option value={1}>--Select1--</option> */}
                            {countriesCode.map(({ id, name }) => (
                              <option value={id}>{name}</option>
                            ))}
                            <option></option>
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

                  <CardHeader
                    style={{ textAlign: "left" }}
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
                        <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">Q&A, Income Type</Typography>
            <a onClick={()=>setToolInfo("Income")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                  {toolInfo==="Income"?(<div>
                    <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  Income type or code is requested as part of the tax form completion process for purposes of calculating withholding rates, where applicable, and to further determine how you should be reported on. You should select the type of code that best defines the payments that you expect to receive. Income Types, associated with Form 1099 reporting, can include things like: Interest, Dividends, Rents, Royalties, Prizes and Awards. Income Codes, associated with Form 1042-S reporting, can be found here: https://www.irs.gov/pub/irs-pdf/p515.pdf
                  </Typography>
                 
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}
                  <Collapse
                    className="px-5"
                    in={open === "it"}
                    timeout="auto"
                    unmountOnExit
                  >
                    {incomeArr.length &&
                      incomeArr.map((ind , i) => {
                        return (
                          <div className="col-lg-3 col-6 col-md-3 ">
                            <Typography className="d-flex w-100 pb-2">
                              Income Type
                              {/* <span style={{ color: 'red' }}>*</span> */}
                            </Typography>

                            <FormControl className="w-100 d-flex" key={ind}>
                              <span className="w-100 d-flex pb-2">
                                <select
                                  className="w-100 "
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
                                  onClick={() => handleDelete(i)}
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

                  {/* Payment Type   */}
                  <CardHeader
                    style={{ textAlign: "left" }}
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
                        <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">TT-134 Q&A, Account </Typography>
            <Typography color="inherit"> information</Typography>
            <a onClick={()=>setToolInfo("Payment")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                  {toolInfo==="Payment"?(<div>
                    <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  As part of the tax form completion process, your withholding agent has requested that you provide banking details associated with your account. Here, you will be asked to select the method for which payment will be remitted, as permitted by the withholding agent. Allowable options can include: ACH, Wire or Check
                  </Typography>
                 
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}
                  <Collapse
                    className="px-5"
                    in={open === "pt"}
                    timeout="auto"
                    unmountOnExit
                  >
                    <div className="col-lg-3 col-6 col-md-3 ">
                      <Typography className="d-flex w-100 pb-2">
                        Payment Type
                        {/* <span style={{ color: 'red' }}>*</span> */}
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
                    {/* <FormControl>
                  <Typography>Payment Type</Typography>
                  <select
                    style={{
                      padding: ' 0 10px',
                      color: '#7e7e7e',
                      fontStyle: 'italic',
                      height: '36px',
                    }}
                    name="Payment"
                    id="Payment"
                    onChange={e => {
                      paymentSelection(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="ACH">ACH</option>
                    <option value="Check">Check</option>
                    <option value="Wire">Wire</option>
                  </select>
                </FormControl> */}
                  </Collapse>
                  <hr className="w-100"></hr>

                  {payload.paymentTypeId ? (
                    <>
                      <CardHeader
                        style={{ textAlign: "left" }}
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
                            <Tooltip style={{backgroundColor:"black",color:"white"}} title={
       <>
            <Typography color="inherit">TT-126 Q&A,Account</Typography>
            <Typography color="inherit"> information</Typography>
            <a onClick={()=>setToolInfo("Account1")}>
           <Typography style={{cursor:"pointer",textDecorationLine:"underline"}} align="center"> View More...</Typography>
           </a>
           
           </>
        }>
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
                      {toolInfo==="Account1"?(<div>
                        <Paper style={{backgroundColor:"#dedcb1",padding:'15px'}}>
                  <Typography>
                  If you have an account number, or several account numbers relating to the certificate submission please identify here.
The account details provided will be used to:
                  </Typography>
                  <Typography >1. Make payments to you if you are entitled to any
                    </Typography>
                    <Typography>
                    2.Ensure your form is correctly matched to your account
                    </Typography>
                    <Typography>
                    3.for further validation of new and existing information
                    </Typography>
                    <Typography>
                    4.In some circumstance will allow us to document multiple accounts with the same certificate
                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      Please see our privacy statement for further information.
                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      See more information on what to do if you have a joint account.
                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      Joint Accounts

                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      Please note that if you are submitting a form on behalf of an entity, which is part of a joint account and in receipt of a payment, the joint account should submit their own form.

                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      The form you are submitting ONLY represents the legal entity named on the form and DOES NOT represent the account or any joint account holders.

                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      We can contact the joint account holder by email informing them that they may need to submit a form too.

                      </Typography>
                      <Typography style={{marginTop:"10px"}}>
                      Ref: EH025

                      </Typography>
                 
                
                <Link href="#" underline="none"  style={{marginTop:"10px",fontSize:"16px"}} onClick={()=>{setToolInfo("")}}>--Show Less--</Link>
                </Paper>

              </div>):""}
                      <Collapse
                        className="px-5"
                        in={open === "ai"}
                        timeout="auto"
                        unmountOnExit
                      >
                        {/* ACH */}
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
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
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "36px",
                                    }}
                                    // labelId="demo-simple-select-standard-label"
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
                                    value={payload.accountBankBranchLocationId}
                                  >
                                    <option value={0}>-Select-</option>
                                    <option value={257}>United Kingdom</option>
                                    <option value={258}>United States</option>
                                    <option value="">---</option>
                                    {countries.map(({ id, name }) => (
                                      <option value={id}> {name} </option>
                                    ))}
                                  </select>
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.accountNumber}
                                  </p>
                                </FormControl>
                              </div>
                              {returnFieldName(handleBlur, touched, errors)}
                              {/* <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                {returnFieldName()}
                                <span style={{ color: 'red' }}>*</span>
                              </Typography>
                              <Input
                                required
                                style={{
                                  border: ' 1px solid #d9d9d9 ',
                                  height: ' 36px',
                                  lineHeight: '36px ',
                                  background: '#fff ',
                                  fontSize: '13px',
                                  color: ' #000 ',
                                  fontStyle: 'normal',
                                  borderRadius: '1px',
                                  padding: ' 0 10px ',
                                }}
                                id="outlined"
                                name="bankCode"
                                placeholder={returnFieldName()}
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
                              <p style={{color: "red",textAlign:"left"}}>{errors.bankCode}</p>
                            </FormControl>
                          </div> */}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                        {/* Check */}
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
                                      touched.makePayable && errors.makePayable
                                    )}
                                    value={payload.makePayable}
                                  />
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
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
                                    placeholder="Enter Residential Country"
                                    onChange={(e: any) =>
                                      setPayload({
                                        ...payload,
                                        payResidentalCountryId: e.target.value,
                                      })
                                    }
                                    onBlur={handleBlur}
                                    value={payload.payResidentalCountryId}
                                  >
                                    <option value={0}>-Select-</option>
                                    <option value={1}>-Select1-</option>
                                    {countries.map(({ id, name }) => (
                                      <option value={id}>{name}</option>
                                    ))}
                                  </select>
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.payResidentalCountryId}
                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-lg-3 col-6 col-md-3 mt-2">
                                <Typography align="left">
                                  Doing Business As Name
                                  {/* <span style={{ color: 'red' }}>*</span> */}
                                </Typography>
                                <FormControl className="w-100">
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
                                    //REMAINING
                                    id="outlined"
                                    placeholder="Enter Doing Business As Name"
                                    name="doingBusinessAsName"
                                    onChange={(e: any) =>
                                      setPayload({
                                        ...payload,
                                        doingBusinessAsName: e.target.value,
                                      })
                                    }
                                    // onBlur={handleBlur}
                                    // error={Boolean(touched.doingBusinessAsName && errors.doingBusinessAsName)}
                                    value={payload.doingBusinessAsName}
                                  />
                                  {/* <p style={{color: "red",textAlign:"left"}}>{errors.doingBusinessAsName}</p> */}
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
                                        payStreetNumberAndName: e.target.value,
                                      })
                                    }
                                    onBlur={handleBlur}
                                    error={Boolean(
                                      touched.payStreetNumberAndName &&
                                        errors.payStreetNumberAndName
                                    )}
                                    value={payload.payStreetNumberAndName}
                                  />
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.payCityorTown}
                                  </p>
                                </FormControl>
                              </div>
                              {payload.payResidentalCountryId == 258 ? (
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography align="left">
                                      State OR Provience
                                      <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <select
                                      // disabled ={payload.payResidentalCountryId == 0}
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
                                      placeholder="Enter State OR Provience"
                                      onChange={(e: any) =>
                                        setPayload({
                                          ...payload,
                                          payStateOrProvince: e.target.value,
                                        })
                                      }
                                      onBlur={handleBlur}
                                      value={payload.payStateOrProvince}
                                    >
                                      <MenuItem value="0">
                                        <em>--Select--</em>
                                      </MenuItem>
                                      {usStates.map(({ name }) => (
                                        <MenuItem value={name}>{name}</MenuItem>
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
                                      placeholder="Enter State OR Provience"
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
                                    <p
                                      style={{
                                        color: "red",
                                        textAlign: "left",
                                      }}
                                    >
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.payZipPostalCode}
                                  </p>
                                </FormControl>
                              </div>
                            </div>

                            <div className="d-flex mt-3">
                              <Checkbox
                                checked={payload.isCorrectPaymentPurposes}
                                name="radio-buttons"
                                onChange={() =>
                                  setPayload({
                                    ...payload,
                                    isConfirmed:
                                      !payload.isCorrectPaymentPurposes,
                                  })
                                }
                                onBlur={handleBlur}
                                // error={Boolean(touched.isCorrectPaymentPurposes && errors.isCorrectPaymentPurposes)}
                                value={payload.isCorrectPaymentPurposes}
                              />
                              <p style={{ color: "red", textAlign: "left" }}>
                                {errors.isCorrectPaymentPurposes}
                              </p>
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
                                  <Typography>
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.accountHolderName}
                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-lg-3 col-6 col-md-3 mt-2">
                                <FormControl className="w-100">
                                  <Typography> Bank name</Typography>
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.accountBankName}
                                  </p>
                                </FormControl>
                              </div>
                              <div className="col-lg-3 col-6 col-md-3 mt-2">
                                <Typography>
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
                                    // labelId="demo-simple-select-standard-label"
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
                                    value={payload.accountBankBranchLocationId}
                                  >
                                    <option
                                      value={0}
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.accountBankBranchLocationId}
                                  </p>
                                </FormControl>
                              </div>

                              <div className="col-lg-3 col-6 col-md-3 mt-2">
                                <FormControl className="w-100">
                                  <Typography>
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
                                  <p
                                    style={{ color: "red", textAlign: "left" }}
                                  >
                                    {errors.accountNumber}
                                  </p>
                                </FormControl>
                              </div>

                              {payload.accountBankBranchLocationId == 258 ? (
                                <div className="col-lg-3 col-6 col-md-3 mt-2">
                                  <FormControl className="w-100">
                                    <Typography>
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
                                        touched.abaRouting && errors.abaRouting
                                      )}
                                      value={payload.abaRouting}
                                    />
                                    <p
                                      style={{
                                        color: "red",
                                        textAlign: "left",
                                      }}
                                    >
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
                                    <Typography>
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
                                      value={payload.iban}
                                    />
                                  </FormControl>
                                  <FormControl className="w-100">
                                    <Typography>Swift code</Typography>
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
                                      value={payload.swiftCode}
                                    />
                                  </FormControl>
                                </div>
                              ) : (
                                ""
                              )}
                              {/* <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography>
                                Swift code
                              </Typography>
                              <Input
                                
                                style={{
                                  border: ' 1px solid #d9d9d9 ',
                                  height: ' 36px',
                                  lineHeight: '36px ',
                                  background: '#fff ',
                                  fontSize: '13px',
                                  color: ' #000 ',
                                  fontStyle: 'normal',
                                  borderRadius: '1px',
                                  padding: ' 0 10px ',
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
                                value={payload.swiftCode}
                              />
                            </FormControl>
                          </div> */}
                            </div>
                            {/* <FormControl className="mx-1">
                          <Typography>
                            Account holder name
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="account_holder_name"
                            id="outlined"
                            placeholder="Enter Account holder name"
                          />
                        </FormControl> */}

                            {/* <FormControl className="mx-1">
                          <Typography>
                            Bank name<span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="bank_name"
                            id="outlined"
                            placeholder="Enter Bank name"
                          />
                        </FormControl> */}

                            {/* <FormControl className="mx-1">
                          <Typography>
                            Bank Branch Location:
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Select
                            style={{
                              padding: ' 0 10px',
                              color: '#7e7e7e',
                              fontStyle: 'italic',
                              height: '36px',
                            }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                          >
                            <MenuItem
                              value=""
                              onClick={() => setBankLocation('')}
                            >
                              <em>--Select--</em>
                            </MenuItem>
                            <MenuItem
                              value={1}
                              onClick={() => setBankLocation('UK')}
                            >
                              UK
                            </MenuItem>
                            <MenuItem
                              value={2}
                              onClick={() => setBankLocation('US')}
                            >
                              US
                            </MenuItem>
                            <MenuItem
                              value={3}
                              onClick={() => setBankLocation('xyz')}
                            >
                              Others
                            </MenuItem>
                          </Select>
                       
                        </FormControl> */}

                            {/* <FormControl className="mx-1">
                          <Typography>
                            Account number
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="account_number"
                            id="outlined"
                            placeholder="Enter Account number"
                          />
                        </FormControl> */}
                            {/* {bankLocation === 'US' ? (
                          // <FormControl className="mx-1">
                          //   <Typography>
                          //     ABA / Rounting
                          //     <span style={{ color: 'red' }}>*</span>
                          //   </Typography>
                          //   <Input
                          //     required
                          //     style={{
                          //       border: ' 1px solid #d9d9d9 ',
                          //       height: ' 36px',
                          //       lineHeight: '36px ',
                          //       background: '#fff ',
                          //       fontSize: '13px',
                          //       color: ' #000 ',
                          //       fontStyle: 'normal',
                          //       borderRadius: '1px',
                          //       padding: ' 0 10px ',
                          //     }}
                          //     name="aba"
                          //     id="outlined"
                          //     placeholder="Enter ABA / Rounting"
                          //   />
                          // </FormControl>
                        ) : (
                          ''
                        )} */}

                            {/* {bankLocation !== '' ? (
                          <>
                            <FormControl>
                              <Typography>IBAN</Typography>
                              <Input
                                style={{
                                  border: ' 1px solid #d9d9d9 ',
                                  height: ' 36px',
                                  lineHeight: '36px ',
                                  background: '#fff ',
                                  fontSize: '13px',
                                  color: ' #000 ',
                                  fontStyle: 'normal',
                                  borderRadius: '1px',
                                  padding: ' 0 10px ',
                                }}
                                name="iban"
                                id="outlined"
                                placeholder="Enter IBAN"
                              />
                            </FormControl>
                            <FormControl className="mx-1">
                              <Typography>Swift code</Typography>
                              <Input
                                style={{
                                  border: ' 1px solid #d9d9d9 ',
                                  height: ' 36px',
                                  lineHeight: '36px ',
                                  background: '#fff ',
                                  fontSize: '13px',
                                  color: ' #000 ',
                                  fontStyle: 'normal',
                                  borderRadius: '1px',
                                  padding: ' 0 10px ',
                                }}
                                name="swift_code"
                                id="outlined"
                                placeholder="Enter Swift code"
                              />
                            </FormControl>
                          </>
                        ) : (
                          ''
                        )} */}
                          </>
                        ) : (
                          ""
                        )}
                      </Collapse>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="row d-flex mx-1 mt-3 mx-2">
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
                          // onBlur={handleBlur}
                          // error={Boolean(touched.isConfirmed && errors.isConfirmed)}
                          // value={payload.isConfirmed}
                        />
                      </div>
                      {/* <p style={{color: "red",textAlign:"left"}}>{errors.isConfirmed}</p> */}
                      <div className="w-auto d-flex p-0">
                        <Typography className="my-auto">
                          I confirm the information above is correct
                        </Typography>
                      </div>
                    </div>
                    {/* {payload.isConfirmed ? ( */}
                    <div className="text-center">
                      <Button
                        type="submit"
                        disabled={!payload.isConfirmed}
                        onClick={() => history("/Term")}
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
                      >
                        Continue
                      </Button>
                    </div>
                    {/* ) : (
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled
                      style={{
                        border: '1px solid #0095dd',
                        backgroundColor: '#D2D2D4',
                        borderColor: '#d2d2d2',
                        color: '#4a4a4a',
                        height: '45px',
                        lineHeight: 'normal',
                        textAlign: 'center',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        borderRadius: '0px',

                        padding: '0 35px',
                        letterSpacing: '1px',
                      }}
                      className="btn btn_submit  btn-primary-agent"
                    >
                      Continue
                    </Button>
                  </div>
                )} */}
                  </div>
                </Form>
              )}
            </Formik>
          </Paper>
        </div>
      </div>
      <div className="container-fluid">
        <footer>
          <div className="row mx-1">
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
