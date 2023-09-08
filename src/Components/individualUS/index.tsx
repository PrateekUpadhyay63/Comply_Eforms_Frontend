import React, { useEffect, useState } from 'react';
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
  TextField
} from '@mui/material';
// import { useDispatch} from "react-redux";
import {RemoveCircleOutlineOutlined,ControlPointOutlined,Info,Delete} from '@mui/icons-material';
import { Formik, Form } from "formik";
import { individualSchema } from "../../schemas/individualindex";
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import "./style.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'bootstrap/dist/css/bootstrap.css';
import entity from "../../../src/assets/img/entity.png";
import individual from "../../../src/assets/img/individual.png";

// import { apiGetUrl, apiPostUrl } from '../api/apiUtils';
// import { CheckBox } from '@mui/icons-material';

export default function IndividualUs() {
  //States
  const [open, setOpen] = useState('');
  const [incomeArr, setIncomeArr] = useState(['intrest']);
  const [bankLocation, setBankLocation] = useState('');
  const [alternateNo, setAlternateNo] = useState(false);

  const [countries, setCountries] = useState([]);
  const [countriesCode, setCountriesCode] = useState([]);
  const [incomeCodes, setIncomeCodes] = useState([]);
  const [usStates, setUsStates] = useState([]);
  const [payload, setPayload] = useState({
    agentId: 3,
    businessTypeId: 1,
    isUSEntity: true,
    uniqueIdentifier: '',
    firstName: '',
    lastName: '',
    countryOfCitizenshipId: 1,
    dob: '',
    nameOfDisregarded: '',
    entityName: '',
    usTinTypeId: 1,
    usTin: '',
    foreignTINCountryId: 1,
    foreignTIN: '',
    foreignTINNotAvailable: true,
    alternativeTINFormat: true,
    giin: '',
    permanentResidentialCountryId: 1,
    permanentResidentialStreetNumberandName: '',
    permanentResidentialAptSuite: '',
    permanentResidentialCityorTown: '',
    permanentResidentialStateorProvince: '',
    permanentResidentialZipPostalCode: '',
    isAddressRuralRoute: true,
    isAddressPostOfficeBox: true,
    isCareOfAddress: true,
    isalternativebusinessaddress: true,
    permanentResidentialCountryId1: 1,
    permanentResidentialStreetNumberandName1: '',
    permanentResidentialAptSuite1: '',
    permanentResidentialCityorTown1: '',
    permanentResidentialStateorProvince1: '',
    permanentResidentialZipPostalCode1: '',
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    primaryContactNumberId: 1,
    primaryContactNumber: '',
    alternativeNumberId: 1,
    alternativeNumber: '',
    alternativeNumberId1: 1,
    alternativeNumber1: '',
    incomeTypeId: 1,
    paymentTypeId: 1,
    accountHolderName: '',
    accountBankName: '',
    accountBankBranchLocationId: 1,
    accountNumber: '',
    abaRouting: '',
    iban: '',
    swiftCode: '',
    bankCode: '',
    makePayable: '',
    payResidentalCountryId: 1,
    payStreetNumberAndName: '',
    payAptSuite: '',
    doingBusinessAsName: '',
    payCityorTown: '',
    payStateOrProvince: '',
    payZipPostalCode: '',
    isCorrectPaymentPurposes: true,
    isConfirmed: true,
  });
    
  // useEffect(() => {
  //   apiGetUrl('GetCountries', '', {})
  //     .then(res => {
  //       setCountries(res.data);
  //       console.log(res.data, 'res.data');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   apiGetUrl('GetCountriesCode', '', {})
  //     .then(res => {
  //       setCountriesCode(res.data);
  //       console.log(res.data, 'res.data');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   apiGetUrl('GetAllIncomeCodes', '', {})
  //     .then(res => {
  //       setIncomeCodes(res.data);
  //       console.log(res.data, 'res.data');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (payload.permanentResidentialCountryId == 258) {
  //     apiGetUrl('GetStateByCountryId', '', {})
  //       .then(res => {
  //         setUsStates(res.data);
  //         console.log(res.data, 'res.data');
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // }, [payload.permanentResidentialCountryId]);

  const handleOpen = (val:any) => {
    if (open === val) {
      setOpen('');
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
    setIncomeArr(incomeArr => [...incomeArr, '']);
  };

  const handleSub = (e: any) => {
    e.preventDefault();
    // apiPostUrl('InsertAccountHolderDetail', '', payload)
    //   .then((res:any) => {
    //     console.log(res.data, 'res.data');
    //   })
    //   .catch((err:any) => {
    //     console.log(err);
    //   });
    // console.log(payload, 'payload2');
  };

  const returnFieldName = () => {
    if (payload.paymentTypeId === 1) {
      return 'ABA / Routing';
    } else if (payload.paymentTypeId === 2) {
      return 'Sort Code';
    } else {
      return 'Bank Code';
    }
  };

  const clickInfo = () => {
    alert(
      'Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this'
    );
  };
  return (
    <section
      className="inner_content"
      style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}
    >
      <div style={{ fontSize: '32px', fontWeight: '500', color: 'white' }}>
        Account Holder Details
      </div>

      <div className="container-fluid">
        <div className="row"></div>

        <div className='row'>
          <div className='col-12'>
            <div className='tabview'>
              <ul>
                <li>
                  <button className='active'>
                    <div>
                      <div> <img src={individual} /></div>
                      <span>Individual</span>
                    </div>
                  </button>
                </li>
                <li>OR</li>
                <li>
                  <button>
                    <div>
                      <div> <img src={entity} /></div>
                      <span>Entity</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-3 " style={{ padding: '1.5rem 8px 8px 8px' }}>
          <Paper elevation={6} style={{ padding: '17px' }} className='underline-none'>
            <Formik
            initialValues={payload}
            enableReinitialize
            onSubmit = {() => { 
              console.log("submit!"); }}
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
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <>
                    </>
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Basic Details
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('basics')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'basics' ? (
                      <RemoveCircleOutlineOutlined />
                    ) : (
                      <ControlPointOutlined />
                    )}
                  </IconButton>
                }
              ></CardHeader>

              <Collapse
                className="px-5"
                in={open === 'basics'}
                timeout="auto"
                unmountOnExit
              >
                <FormControl className="w-100">
                  <div className="row">
                    <div>
                      <Typography align="left" style={{ marginTop: '20px' }}>
                        Are you a U.S Individual?
                        <span style={{ color: 'red' }}>*</span>
                        <Info
                          style={{
                            color: '#ffc107',
                            fontSize: '15px',
                            marginBottom: '12px',
                          }}
                          onClick={clickInfo}
                        />
                      </Typography>

                      <div className="d-flex">
                        <Typography className="my-auto">Yes</Typography>
                        <Radio
                          required
                          checked={payload.isUSEntity }
                          onChange={() =>
                            setPayload({ ...payload, isUSEntity: true })
                          }
                          value="yes"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'Yes' }}
                        />
                        <Typography className="my-auto">No</Typography>
                        <Radio
                          required
                          checked={!payload.isUSEntity }
                          onChange={() =>
                            setPayload({ ...payload, isUSEntity: false })
                          }

                          value="no"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'No' }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-12 col-md-6">
                      <Typography className="d-flex w-100">
                        Unique Identifier<span style={{ color: 'red' }}>*</span>
                        <Info
                          style={{ color: '#ffc107', fontSize: '15px' }}
                          onClick={clickInfo}
                        />
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
                        className="w-100 input"
                        name="uniqueIdentifier"
                        id="outlined"
                        placeholder="Enter Instructor Identifier"
                        onChange={e =>
                          setPayload({
                            ...payload,
                            uniqueIdentifier: e.target.value,
                          })
                        }
                        onBlur={handleBlur}
                        error={Boolean(touched.uniqueIdentifier && errors.uniqueIdentifier)}
                        value={payload.uniqueIdentifier}
                      />
                      <p className='error'>{errors.uniqueIdentifier}</p>
                    </div>
                  </div>
                </FormControl>

                {!payload.isUSEntity ? (
                  <div className="row">
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          First Name<span style={{ color: 'red' }}>*</span>
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
                          required
                          id="outlined"
                          name="firstName"
                          placeholder="Enter First Name"
                          onBlur={handleBlur}
                          error={Boolean(touched.firstName && errors.firstName)}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              firstName: e.target.value,
                            })
                          }
                          
                          value={payload.firstName}
                        />
                        <p className='error'>{errors.firstName}</p>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Last Name<span style={{ color: 'red' }}>*</span>
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
                          name="lastName"
                          placeholder="Enter Last Name"
                          onChange={e =>
                            setPayload({ ...payload, lastName: e.target.value })
                          }
                          onBlur={handleBlur}
                        error={Boolean(touched.lastName && errors.lastName)}
                        value={payload.lastName}
                        />
                        <p className='error'>{errors.lastName}</p>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Country Of Citizenship
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
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
                          {countries.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                          ))}
                        </select>
                        <p className='error'>{errors.countryOfCitizenshipId}</p>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Date of Birth<span style={{ color: 'red' }}>*</span>
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
                          type="date"
                          id="outlined"
                          name="dob"
                          onChange={e =>
                            setPayload({ ...payload, dob: e.target.value })
                          }
                          onBlur={handleBlur}
                          error={Boolean(touched.dob && errors.dob)}
                          value={payload.dob}
                        />
                        <p className='error'>{errors.dob}</p>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Name of disregarded entity receiving the payments (if
                          applicable)
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
                          name="nameOfDisregarded"
                          placeholder="Enter Business Name"
                          onChange={e =>
                            setPayload({
                              ...payload,
                              nameOfDisregarded: e.target.value,
                            })
                          }
                          // onBlur={handleBlur}
                          // error={Boolean(touched.nameOfDisregarded && errors.nameOfDisregarded)}
                          value={payload.nameOfDisregarded}
                        />
                        {/* <p className='error'>{errors.nameOfDisregarded}</p> */}
                      </FormControl>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          First Name<span style={{ color: 'red' }}>*</span>
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
                          required
                          id="outlined"
                          name="firstName"
                          placeholder="Enter First Name"
                          onBlur={handleBlur}
        
                          error={Boolean(touched.firstName && errors.firstName)}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              firstName: e.target.value,
                            })
                          }
                          
                          value={payload.firstName}
                        />
                        <p className='error'>{errors.firstName}</p>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Last Name<span style={{ color: 'red' }}>*</span>
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
                          name="lastName"
                          placeholder="Enter Last Name"
                          onChange={e =>
                            setPayload({ ...payload, lastName: e.target.value })
                          }
                          onBlur={handleBlur}
                        error={Boolean(touched.lastName && errors.lastName)}
                        value={payload.lastName}
                        />
                        <p className='error'>{errors.lastName}</p>
                      </FormControl>
                    </div>
                  </div>
                )}
              </Collapse>
              <hr className="w-100"></hr>
              {/* Tax Identifier Section */}
              <div>
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Tax Identification Numbers
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('tax')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'tax' ? (
                      <RemoveCircleOutlineOutlined />
                    ) : (
                      <ControlPointOutlined />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5"
                in={open === 'tax'}
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
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
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
                        <option value="">-Select-</option>
                        <option value="1">SSN/ITIN</option>
                        <option value="2">Applied for</option>
                        <option value="3">U.S. TIN not applicable</option>
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
                        name="usTin"
                        placeholder="Enter U.S. TIN"
                        onChange={(e: any) =>
                          setPayload({ ...payload, usTin: e.target.value })
                        }
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
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
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
                          <option value="">-Select-</option>
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
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </Collapse>
              <hr className="w-100"></hr>

              
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Permanent Residence Address
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('pra')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'pra' ? (
                      <RemoveCircleOutlineOutlined />
                    ) : (
                      <ControlPointOutlined />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5 "
                in={open === 'pra'}
                timeout="auto"
                unmountOnExit
              >
                <div className="col-lg-3 col-6 col-md-3">
                  <Typography align="left" className="d-flex w-100 ">
                    Residential Country:<span style={{ color: 'red' }}>*</span>
                  </Typography>

                  <FormControl className="w-100">
                    <select
                      style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '36px',
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
                      // error={Boolean(touched.permanentResidentialCountryId && errors.permanentResidentialCountryId)}
                      value={payload.permanentResidentialCountryId}
                    >
                      <option value="">-Select-</option>
                      {countries.map(({ id, name }) => (
                        <option value={id}>{name}</option>
                      ))}
                    </select>
                  </FormControl>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        Street Number and Name:
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
                      error={Boolean(touched.permanentResidentialStreetNumberandName && errors.permanentResidentialStreetNumberandName)}
                        value={payload.permanentResidentialStreetNumberandName}
                      />
                       <p className='error'>{errors.permanentResidentialStreetNumberandName}</p>

                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">Apt/Suite:</Typography>
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
                      <p className='error'>{errors.permanentResidentialAptSuite}</p>

                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        City or Town:<span style={{ color: 'red' }}>*</span>
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
                        name="permanentResidentialCityorTown"
                        placeholder="Enter City or Town"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialCityorTown: e.target.value,
                          })
                        }
                        onBlur={handleBlur}
                      error={Boolean(touched.permanentResidentialCityorTown && errors.permanentResidentialCityorTown)}
                        value={payload.permanentResidentialCityorTown}
                      />
                       <p className='error'>{errors.permanentResidentialCityorTown}</p>
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        State or Province:
                        {/* <span style={{ color: 'red' }}>*</span> */}
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
                        name="permanentResidentialStateorProvince"
                        placeholder="Enter State or Province"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialStateorProvince: e.target.value,
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
                        name="permanentResidentialZipPostalCode"
                        placeholder="Enter Zip or Postal Code"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialZipPostalCode: e.target.value,
                          })
                        }
                        onBlur={handleBlur}
                      error={Boolean(touched.permanentResidentialZipPostalCode && errors.permanentResidentialZipPostalCode)}
                        value={payload.permanentResidentialZipPostalCode}
                      />
                     <p className='error'>{errors.permanentResidentialZipPostalCode}</p>

                    </FormControl>
                  </div>
                </div>
                <div className="d-flex">
                <div>
                    <Typography align="left" style={{ marginTop: '20px' }}>
                      Is this address a Post Office Box?
                      <span style={{ color: 'red' }}>*</span>
                      <Info
                        style={{
                          color: '#ffc107',
                          fontSize: '15px',
                          marginBottom: '12px',
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
                          value="female"
                          control={<Radio />}
                          label="No"
                          checked={!payload.isAddressPostOfficeBox }
                          onChange={() =>
                            setPayload({ ...payload, isAddressPostOfficeBox: false })
                          }
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Yes"
                          checked={payload.isAddressPostOfficeBox }
                          onChange={() =>
                            setPayload({ ...payload, isAddressPostOfficeBox: true })
                          }
                        />
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="mx-5">
                    <Typography style={{ marginTop: '20px' }}>
                      Is this an In Care Of address?
                      <span style={{ color: 'red' }}>*</span>
                      <Info
                        style={{
                          color: '#ffc107',
                          fontSize: '15px',
                          marginBottom: '12px',
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
                          value="female"
                          control={<Radio />}
                          label="No"
                          checked={!payload.isCareOfAddress }
                          onChange={() =>
                            setPayload({ ...payload, isCareOfAddress: false })
                          }
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Yes"
                          checked={payload.isCareOfAddress }
                          onChange={() =>
                            setPayload({ ...payload, isCareOfAddress: true })
                          }
                        />
                      </RadioGroup>
                    </div>
                  </div>
                <div>
                  <Typography align="left" style={{ marginTop: '20px' }}>
                    Is there an alternative mailing or business address in the
                    US?
                    <span style={{ color: 'red' }}>*</span>
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginBottom: '12px',
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
                      inputProps={{ 'aria-label': 'A' }}
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
                      inputProps={{ 'aria-label': 'B' }}
                    />
                  </div>
                </div>
                </div>
                {payload.isalternativebusinessaddress ? (
                  <>
                    <div className="col-lg-3 col-6 col-md-3">
                      <Typography align="left" className="d-flex w-100 ">
                        Residential Country:
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>

                      <FormControl className="w-100">
                        <select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                          }}
                          name="permanentResidentialCountryId1"
                          id="Income"
                          defaultValue={1}
                          onChange={(e: any) =>
                            setPayload({
                              ...payload,
                              permanentResidentialCountryId1: e.target.value,
                            })
                          }
                          onBlur={handleBlur}
                      // error={Boolean(touched.permanentResidentialCountryId1 && errors.permanentResidentialCountryId1)}
                          value={payload.permanentResidentialCountryId1}
                        >
                        
                          <option value="">-Select-</option>
                          <option value={257}>United Kingdom</option>
                          <option value={258}>United States</option>
                          <option value="">---</option>
                          {countries.map(({ id, name }) => (
                            <option value={id}> {name} </option>
                          ))}
                        </select>
                        <p className='error'>{errors.permanentResidentialStreetNumberandName}</p>

                      </FormControl>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
                            Street Number and Name:
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
                          error={Boolean(touched.permanentResidentialStreetNumberandName1 && errors.permanentResidentialStreetNumberandName1)}
                            value={
                              payload.permanentResidentialStreetNumberandName1
                            }
                          />
                           <p className='error'>{errors.permanentResidentialStreetNumberandName1}</p>

                        </FormControl>
                      </div>
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">Apt/Suite:</Typography>
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
                            name="permanentResidentialAptSuite1"
                            placeholder="Enter Apt/Suite"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialAptSuite1: e.target.value,
                              })
                            }
                            value={payload.permanentResidentialAptSuite1}
                          />
                        </FormControl>
                      </div>
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
                            City or Town:<span style={{ color: 'red' }}>*</span>
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
                            name="permanentResidentialCityorTown1"
                            placeholder="Enter City or Town"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialCityorTown1: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                            error={Boolean(touched.permanentResidentialCityorTown1 && errors.permanentResidentialCityorTown1)}
                            value={payload.permanentResidentialCityorTown1}
                          />
                           <p className='error'>{errors.permanentResidentialCityorTown1}</p>

                        </FormControl>
                      </div>
                      {payload.permanentResidentialCountryId === 258 ? (
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <Typography align="left" className="d-flex w-100 ">
                            State or Province:
                            {/* <span style={{ color: 'red' }}>*</span> */}
                          </Typography>

                          <FormControl className="w-100">
                            <Select
                              style={{
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
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
                            </Select>
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
                            error={Boolean(touched.permanentResidentialZipPostalCode1 && errors.permanentResidentialZipPostalCode1)}
                            value={payload.permanentResidentialZipPostalCode1}
                          />
                          <p className='error'>{errors.permanentResidentialZipPostalCode1}</p>

                        </FormControl>
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </Collapse>

             
              <hr className="w-100"></hr>

              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Contact Details
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('cd')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'cd' ? (
                      <RemoveCircleOutlineOutlined />
                    ) : (
                      <ControlPointOutlined />
                    )}
                  </IconButton>
                }
              ></CardHeader>

              <Collapse
                className="px-5"
                in={open === 'cd'}
                timeout="auto"
                unmountOnExit
              >
                <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        First Name<span style={{ color: 'red' }}>*</span>
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
                        name="contactFirstName"
                        placeholder="Enter First Name"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            contactFirstName: e.target.value,
                          })
                        }
                        onBlur={handleBlur}
                        error={Boolean(touched.contactFirstName && errors.contactFirstName)}
                        value={payload.contactFirstName}
                      />
                     <p className='error'>{errors.contactFirstName}</p>

                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        Last Name<span style={{ color: 'red' }}>*</span>
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
                        name="contactLastName"
                        placeholder="Enter Last Name"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            contactLastName: e.target.value,
                          })
                        }
                        onBlur={handleBlur}
                        error={Boolean(touched.contactLastName && errors.contactLastName)}
                        value={payload.contactLastName}
                      />
                      <p className='error'>{errors.contactLastName}</p>
                    </FormControl>
                  </div>
                  <FormControl className="w-100">
                    <div className="row">
                      <div className="col-lg-3 col-6 col-md-3 mt-2 mx-2">
                        <FormControl className="w-100">
                          <Typography align="left">
                            Email<span style={{ color: 'red' }}>*</span>
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
                            error={Boolean(touched.contactEmail && errors.contactEmail)}
                            value={payload.contactEmail}
                          />
                          <p className='error'>{errors.contactEmail}</p>

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
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
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
                        <option value="">-Select-</option>
                        {countriesCode.map(({ id, name }) => (
                          <option value={id}>{name}</option>
                        ))}
                      </select>
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
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
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
                        <option value="">-Select-</option>
                        {countriesCode.map(({ id, name }) => (
                          <option value={id}>{name}</option>
                        ))}
                      </select>
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
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
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
                              <option value="">--Select--</option>
                              {countriesCode.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <Delete
                              style={{
                                color: 'red',
                                fontSize: '20px',
                                marginTop: '5px',
                              }}
                              onClick={() => {
                                setAlternateNo(false);
                              }}
                            />
                          </span>
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
                          color: '#007bff',
                          cursor: 'pointer',
                          fontSize: '12px',
                          marginTop: '8px',
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
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Income Type
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'grey',
                        marginLeft: '4px',
                        marginTop: '11px',
                      }}
                    >
                      (Optional)
                    </span>
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('it')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'it' ? (
                      <RemoveCircleOutlineOutlined />
                    ) : (
                      <ControlPointOutlined />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5"
                in={open === 'it'}
                timeout="auto"
                unmountOnExit
              >
                {incomeArr.length &&
                  incomeArr.map(ind => {
                    return (
                      <div className="col-lg-3 col-6 col-md-3 ">
                        <Typography className="d-flex w-100 pb-2">
                          Income Type<span style={{ color: 'red' }}>*</span>
                        </Typography>

                        <FormControl className="w-100 d-flex" key={ind}>
                          <span className="w-100 d-flex pb-2">
                            <select
                              className="w-100"
                              style={{
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
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
                                setAlternateNo(false);
                              }}
                              style={{
                                color: 'red',
                                fontSize: '20px',
                                marginTop: '8px',
                                marginLeft: '4px',
                              }}
                            />
                          </span>
                        </FormControl>
                      </div>
                    );
                  })}

                <Typography
                  style={{
                    color: '#007bff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}
                  onClick={() => addIncomeType()}
                >
                  <a>Add Income Type</a>
                </Typography>
              </Collapse>
              <hr className="w-100"></hr>

             
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Payment Type
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'grey',
                        marginLeft: '4px',
                        marginTop: '11px',
                      }}
                    >
                      (Optional)
                    </span>
                    <Info
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('pt')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'pt' ? (
                      <RemoveCircleOutlineOutlined />
                    ) : (
                      <ControlPointOutlined />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5"
                in={open === 'pt'}
                timeout="auto"
                unmountOnExit
              >
                <div className="col-lg-3 col-6 col-md-3 ">
                  <Typography className="d-flex w-100 pb-2">
                    Payment Type<span style={{ color: 'red' }}>*</span>
                  </Typography>

                  <FormControl className="w-100 d-flex">
                    <span className="w-100 d-flex">
                      <select
                        className="w-100"
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
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
                        <option value="">Select</option>
                        <option value={1}>ACH</option>
                        <option value={2}>Check</option>
                        <option value={3}>Wire</option>
                      </select>
                      <Delete
                        style={{
                          color: 'red',
                          fontSize: '20px',
                          marginTop: '8px',
                          marginLeft: '4px',
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
                    style={{ textAlign: 'left', marginLeft: '13px' }}
                    className="flex-row-reverse"
                    title={
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'left',
                          marginLeft: '13px',
                        }}
                      >
                        Account Information
                        <span
                          style={{
                            fontSize: '13px',
                            color: 'grey',
                            marginLeft: '4px',
                            marginTop: '11px',
                          }}
                        >
                          (Mandatory)
                        </span>
                        <Info
                          style={{
                            color: '#ffc107',
                            fontSize: '15px',
                            marginLeft: '5px',
                            cursor: 'pointer',
                          }}
                          onClick={clickInfo}
                        />
                      </div>
                    }
                    action={
                      <IconButton
                        onClick={() => handleOpen('ai')}
                        aria-label="expand"
                        size="small"
                        style={{ marginTop: '3px' }}
                      >
                        {open !== 'ai' ? (
                          <ControlPointOutlined />
                        ) : (
                          <RemoveCircleOutlineOutlined />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    className="px-5"
                    in={open === 'ai'}
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
                                name="accountHolderName"
                                placeholder="Enter  Account holder name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountHolderName: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                  error={Boolean(touched.accountHolderName && errors.accountHolderName)}
                                value={payload.accountHolderName}
                              />
                                <p className='error'>{errors.accountHolderName}</p>

                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                 Bank name
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
                                name="accountBankName"
                                placeholder="Enter Bank name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankName: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                  error={Boolean(touched.accountBankName && errors.accountBankName)}
                                value={payload.accountBankName}
                              />
                                <p className='error'>{errors.accountBankName}</p>

                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <Typography align="left">
                              Branch Location
                              <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl className="w-100">
                              <select
                                style={{
                                  padding: '0 10px',
                                  color: '#7e7e7e',
                                  fontStyle: 'italic',
                                  height: '36px',
                                }}
                                id="demo-simple-select-standard"
                                name="accountBankBranchLocationId"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankBranchLocationId: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                // error={Boolean(touched.accountBankBranchLocationId && errors.accountBankBranchLocationId)}
                                value={payload.accountBankBranchLocationId}
                              >
                               {/* <p className='error'>{errors.accountBankBranchLocationId}</p> */}

                                <option value="">-Select-</option>
                                <option value={257}>United Kingdom</option>
                                <option value={258}>United States</option>
                                <option value="">---</option>
                                {countries.map(({ id, name }) => (
                                  <option value={id}> {name} </option>
                                ))}
                              </select>
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Account Number
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
                                name="accountNumber"
                                placeholder="Enter Account Number"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountNumber: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.accountNumber && errors.accountNumber)}
                                value={payload.accountNumber}
                              />
                               <p className='error'>{errors.accountNumber}</p>

                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
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
                             <p className='error'>{errors.bankCode}</p>

                            </FormControl>
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    {payload.paymentTypeId === 2 ? (
                      <>
                        <div className="row">
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Make Payable To
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
                                name="makePayable"
                                placeholder="Enter Make Payable To"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    makePayable: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.makePayable && errors.makePayable)}
                                value={payload.makePayable}
                              />
                               <p className='error'>{errors.makePayable}</p>
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                {' '}
                                Residential Country
                                <span style={{ color: 'red' }}>*</span>
                              </Typography>
                              <select
                                // required
                                style={{
                                  padding: ' 0 10px',
                                  color: '#7e7e7e',
                                  fontStyle: 'italic',
                                  height: '36px',
                                }}
                                id="outlined"
                                name="payResidentalCountryId"
                                defaultValue={1}
                                placeholder="Enter Residential Country"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payResidentalCountryId: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                // error={Boolean(touched.payResidentalCountryId && errors.payResidentalCountryId)}
                                value={payload.payResidentalCountryId}
                              >
                               <p className='error'>{errors.payResidentalCountryId}</p>
                              <option value="">-Select-</option>
                                  {countries.map(({ id, name }) => (
                              <option value={id}>{name}</option>
                                  ))}
                              </select>
                            </FormControl>
                          </div>
                        

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Street Number And Name
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
                                name="payStreetNumberAndName"
                                placeholder="Enter Street Number And Name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payStreetNumberAndName: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                              error={Boolean(touched.payStreetNumberAndName && errors.payStreetNumberAndName)}
                                value={payload.payStreetNumberAndName}
                              />
                              <p className='error'>{errors.payStreetNumberAndName}</p>
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Apt/Suite
                                {/* <span style={{ color: 'red' }}>*</span> */}
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
                                name="payCityorTown"
                                placeholder="Enter  City OR Town"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payCityorTown: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.payCityorTown && errors.payCityorTown)}
                                value={payload.payCityorTown}
                              />
                              <p className='error'>{errors.payCityorTown}</p>
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                State OR Provience
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
                                name="payStateOrProvince"
                                placeholder="Enter  State OR Provience"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payStateOrProvince: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.payStateOrProvince && errors.payStateOrProvince)}
                                value={payload.payStateOrProvince}
                              />
                               <p className='error'>{errors.payStateOrProvince}</p>

                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Zip/Postal Code
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
                                name="payZipPostalCode"
                                placeholder="Enter Zip/Postal Code"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payZipPostalCode: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.payZipPostalCode && errors.payZipPostalCode)}
                                value={payload.payZipPostalCode}
                              />
                               <p className='error'>{errors.payZipPostalCode}</p>
                            </FormControl>
                          </div>
                        </div>

                        <div className="d-flex mt-3">
                          <Checkbox />
                          <Typography
                            align="left"
                            style={{ marginTop: '10px' }}
                          >
                            Please check the box to confirm that the above
                            details are correct for payment purposes.
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                        </div>
                      </>
                    ) : (
                      ''
                    )}

                    {payload.paymentTypeId === 3 ? (
                      <>
                        <div className="row">
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                               error={Boolean(touched.accountHolderName && errors.accountHolderName)}
                                value={payload.accountHolderName}
                              />
                              <p className='error'>{errors.accountHolderName}</p>
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left"> 
                              Bank name
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
                                name="accountBankName"
                                placeholder="Enter Bank name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankName: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.accountBankName && errors.accountBankName)}
                                value={payload.accountBankName}
                              />
                              <p className='error'>{errors.accountBankName}</p>
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <Typography align="left">
                              Bank Branch Location
                              <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl className="w-100">
                              <select
                                style={{
                                  padding: ' 0 10px',
                                  color: '#7e7e7e',
                                  fontStyle: 'italic',
                                  height: '36px',
                                }}
                                id="demo-simple-select-standard"
                                name="accountBankBranchLocationId"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankBranchLocationId: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                // error={Boolean(touched.accountBankBranchLocationId && errors.accountBankBranchLocationId)}
                                value={payload.accountBankBranchLocationId}
                              >
                                <option
                                  value=""
                                  onClick={() => setBankLocation('')}
                                >
                                  -Select-
                                </option>
                                <option
                                  value={257}
                                  onClick={() => setBankLocation('UK')}
                                >
                                  United Kingdom
                                </option>
                                <option
                                  value={258}
                                  onClick={() => setBankLocation('US')}
                                >
                                  United States
                                </option>
                                <option
                                  value=""
                                  onClick={() => setBankLocation('')}
                                >
                                  ---
                                </option>
                                {countries.map(({ id, name }) => (
                                  <option
                                    value={id}
                                    onClick={() => setBankLocation('')}
                                  >
                                    {' '}
                                    {name}{' '}
                                  </option>
                                ))}
                              </select>
                              <p className='error'>{errors.accountBankBranchLocationId}</p>
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Account Number
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
                                name="accountNumber"
                                placeholder="Enter Account Number"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountNumber: e.target.value,
                                  })
                                }
                                onBlur={handleBlur}
                                error={Boolean(touched.accountNumber && errors.accountNumber)}
                                value={payload.accountNumber}
                              />
                               <p className='error'>{errors.accountNumber}</p>
                            </FormControl>
                          </div>

                          {bankLocation === 'US' ? (
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  ABA / Routing
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
                                <p className='error'>{errors.abaRouting}</p>
                              </FormControl>
                            </div>
                          ) : (
                            ''
                          )}
                          {bankLocation !== '' ? (
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  IBAN
                                  {/* <span style={{ color: 'red' }}>*</span> */}
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
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                Swift code
                                {/* <span style={{ color: 'red' }}>*</span> */}
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
                        </div>
                        
                      </>
                    ) : (
                      ''
                    )}
                  </Collapse>
                </>
                
              ) : (
                ''
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
                    onClick={handleSub}
                    style={{
                      border: '1px solid #0095dd',
                      background: '#0095dd',
                      height: '45px',
                      lineHeight: 'normal',
                      textAlign: 'center',
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      borderRadius: '0px',
                      color: '#fff',
                      padding: '0 35px',
                      letterSpacing: '1px',
                    }}
                    className="btn btn_submit  btn-primary-agent"
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
          <div className="row  ">
            <Typography
              className="mx-2"
              align="left"
              style={{ marginBottom: '10px', color: 'white', fontSize: '12px' }}
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
