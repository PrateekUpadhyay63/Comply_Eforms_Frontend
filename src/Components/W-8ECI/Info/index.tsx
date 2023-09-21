import React,{useState} from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Accordion,
  
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Link,
  Checkbox,
  TextField,
  RadioGroup,
  Radio,
} from "@mui/material";
import {  ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";


export default function Tin(props: any) {

  const initialValue = {
    streetNumberName: "",
    eciUsTinTypeId: "",
    eciUsTin: "",
    aptSuite:"",
    cityTown:"",
    stateProvinceId:"",
    zipPostalCode:""
    
  };
  const history= useNavigate()
  

  const [toolInfo, setToolInfo] = useState("");
  return(

    <>
    <Formik initialValues={initialValue}
    onSubmit={(values, { setSubmitting }) => {
       setSubmitting(true);
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
    <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>   
    <div style={{padding:"20px"}}>
     <Paper style={{padding:"18px"}}>
  <Typography
    align="left"
    style={{ margin: "10px",fontSize: "28px",fontWeight:"550" }}
  >
   ECI Mandatory Information
   
  </Typography>
  <Typography
    align="left"
    style={{ margin: "10px",fontSize: "18px"}}
  >
   Please Provide your U.S. TIN
   
  </Typography>

  <div>
    <div style={{ margin: "10px", display: "flex", marginTop: "25px",justifyContent:"space-between"}} className="row col-12">
    <div className="col-4">
      <Typography>
        U.S. TIN Type<span style={{ color: "red" }}>*</span>
      </Typography>
      <select
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
        name="eciUsTinTypeId"
       
      ></select>
    </div>

    <div className="col-4">
      <Typography>U.S. TIN <span style={{ color: "red" }}>*</span></Typography>
      <Input
     name="eciUsTin"
      fullWidth
        required
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
      />
    </div>
    <div className="col-4">
    
     
    </div>
  </div>
  <Typography  align="left"
    style={{ fontSize: "18px",marginLeft:"1.3rem",marginTop:"2rem"}}>
  Please Provide your Business Address in the United States
  </Typography>
  <div style={{ margin: "10px", display: "flex", marginTop: "25px",justifyContent:"space-between"}} className="row col-12">
    <div className="col-4">
      <Typography>
      Street Number and Name: <span style={{ color: "red" }}>*</span>
      </Typography>
      <select
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
        name="streetNumberName"
       
      ></select>
     
      <div>

      </div>
    </div>

    <div className="col-4">
      <Typography>Apt/Suite: </Typography>
      <Input
     name="aptSuite"
      fullWidth
        required
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
      />
    </div>
    <div className="col-4">
      <Typography>City or Town: <span style={{ color: "red" }}>*</span></Typography>
      <Input
     name="cityTown"
      fullWidth
        required
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
      />
    </div>
  </div>
  <div style={{ margin: "10px", display: "flex", marginTop: "25px",justifyContent:"space-between"}} className="row col-12">
    <div className="col-4">
      <Typography>
      State or Province:<span style={{ color: "red" }}>*</span>
      </Typography>
      <select
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
        name="stateProvinceId"
        id="Income"
        defaultValue={1}
      ></select>
    </div>

    <div className="col-4">
      <Typography>Zip or Postal Code:<span style={{ color: "red" }}>*</span></Typography>
      <Input
     name="zipPostalCode"
      fullWidth
        required
        style={{
          border: " 1px solid #d9d9d9 ",
          padding: " 0 10px",
          color: "#7e7e7e",
          fontStyle: "italic",
          height: "50px",
          width: "100%",
        }}
      />
    </div>
    <div className="col-4">
    
     
    </div>
  </div>
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
    <Button variant="contained" style={{ color: "white",marginLeft:"15px" }}>
     View Form
    </Button>
    <Button
     
    onClick={()=>{
      history("/W-8ECI/Tax_Purpose")
    }}
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
</section>
</Form>
)}
</Formik>
</>
)}
