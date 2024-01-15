import React,{useEffect, useState} from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Link,
  TextField,
  MenuItem,
  Select
} from "@mui/material";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { firstStepBusinessSchema, firstStepSchema ,tinSchema} from "../../../schemas";
import { useNavigate } from "react-router-dom";
import {getTinTypes, postW9Form} from "../../../Redux/Actions"
import { useDispatch } from "react-redux";
import BreadCrumbComponent from "../../reusables/breadCrumb";
import View_Insructions from "../../viewInstruction";

export default function Tin(props: any) {
  const dispatch = useDispatch();
  const {
    // handleTaxClassificationChange,
    // selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;

  const onBoardingFormValues = JSON.parse(
    localStorage.getItem("agentDetails") ?? "null"
  );
  const PrevStepData = JSON.parse(localStorage.getItem("PrevStepData") || "{}");
  const initialValue = {
    tiN_USTINId:onBoardingFormValues.usTinTypeId
    ? onBoardingFormValues.usTinTypeId
    : 0,
    Tin :onBoardingFormValues.usTin ? onBoardingFormValues.usTin : "",
  };
  const [payload, setPayload] = useState({
    tiN_USTINId:0,
    Tin :""
  });
  const [ustinArray, setUStinArray] = useState([]);
  const [ustinValue, setUStinvalue] = useState([]);
  const [notUsIndividual , setNonUsIndividual] = useState([]);
  const [canvaBx, setCanvaBx] = useState(false);
  const handleCanvaOpen = () => {
    setCanvaBx(true);
  }
  const handleCanvaClose = () => {
    setCanvaBx(false);
  }

  
  const formatTin = (e: any, values: any): any => {
    if (e.key === "Backspace" || e.key === "Delete") return;
    if (e.target.value.length === 3) {
      setPayload({ ...payload, Tin: payload.Tin + "-" });
      values.Tin = values.Tin + "-";
    }
    if (e.target.value.length === 6) {
      setPayload({ ...payload, Tin: payload.Tin + "-" });
      values.Tin = values.Tin + "-";
    }
  };
  const [selectedTaxClassification, setSelectedTaxClassification] =
  useState(0);
  const handleTaxClassificationChange = (
    event: any
  ) => {
    setSelectedTaxClassification(event.target.value);
  };
  useEffect(() => {

    dispatch(
      getTinTypes(3, (data: any) => {
        setUStinArray(data);
        let datas = data.filter((ele: any) => {
          return ele.usIndividual === true;
        });
        setUStinvalue(datas);
        let nonData = data.filter((ele: any) => {
          return ele.usEntity === true;
        });
        setNonUsIndividual(nonData)
      })
    );
  }, []);
  const history = useNavigate()
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [toolInfo, setToolInfo] = useState("");
  return( 
  
    <section
    className="inner_content"
    style={{ backgroundColor: "#0c3d69", marginBottom: "10px" ,height:"100%"}}
  >
      <View_Insructions canvaBx={canvaBx} handleCanvaClose={handleCanvaClose}/>
        {canvaBx === true ? (<div className="offcanvas-backdrop fade show" onClick={() => { handleCanvaClose() }}></div>) : null}

    <div className="overlay-div">
        <div className="overlay-div-group">
          <div className="viewInstructions"  onClick={() => { handleCanvaOpen(); }}>View Instructions</div>
          <div className="viewform">View Form</div>
          <div className="helpvideo">
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
      <Formik
      validateOnChange={false}
      validateOnBlur={false}
          initialValues={initialValue}
          enableReinitialize
          validationSchema={
            selectedTaxClassification == 0
              ? tinSchema
              : selectedTaxClassification == 1
              ? firstStepSchema
              : firstStepBusinessSchema
          } // Uncomment after testing ,this is validation Schema
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            const result = { ...PrevStepData, ...values };
            dispatch(
              postW9Form(result, () => {
                localStorage.setItem("PrevStepData",JSON.stringify(values))
                 history("/US_Purposes/Back/Exemption/Tax/Certificates")
              })
            );
            // dispatch(
            //   W9_state(values, () => {
            //     console.log(W9Data, "Done");
            //   })
            // );
            // uploadNews(dispatch, values, navigate);
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
              <div className="row w-100 h-100">
              <div className="col-4">
          <div style={{ padding: "20px 0px",height:"100%" }}>
            <BreadCrumbComponent breadCrumbCode={1249} formName={1}/>
          
      </div>
          </div>
          <div className="col-8 mt-3" > 
          <div style={{ padding: "10px 0px" }}>
            <Paper elevation={6} style={{ padding: "17px",}}>
  <div style={{  backgroundColor: "#ffff", }}>
  <Typography
    align="left"
    style={{ margin: "5px", fontSize: "27px" ,fontWeight:"550"}}
  >
    Taxpayer Identification Number
   
  </Typography>

  <div style={{ marginLeft:"4px", display: "flex", marginTop: "25px",justifyContent:"space-between"}} className="row">
    <div className="col-md-6 col-12">
      <Typography>
        U.S. TIN Type
        
        <span style={{ color: "red" }}>*</span>
        <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                            <>
                              <Typography color="inherit">U.S. TIN Type Info</Typography>
                              <a onClick={() => setToolInfo("basic")}>
                                <Typography style={{ cursor: "pointer", textDecorationLine: "underline" }} align="center" > View More...</Typography>
                              </a>
                            </>
                          }>
                            <Info
                              style={{
                                color: '#ffc107',
                                fontSize: '10px',
                                cursor: 'pointer',
                                verticalAlign: "super"
                              }}

                            />
                          </Tooltip></span>
      </Typography>
      {toolInfo === "basic" ? (<div>
                          <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                            <Typography>
                            Please select a U.S. TIN type status from the dropdown.
                            </Typography>
                           
                            <Typography style={{ marginTop: "10px" }}>
                            If a TIN type is not available, ensure you select the checkbox to the right of the field and provide an explanation as to why it is not available in the corresponding boxes at the bottom of the screen.
                            </Typography>


                            <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                          </Paper>

                        </div>) : ""}
                        <FormControl className="w-100">
                        {onBoardingFormValues?.isUSIndividual == true?( 
                          
                          <select
                            onChange={
                              handleChange
                            }
                            onBlur={handleBlur}
                            // error={Boolean(
                            //   touched.tiN_USTINId &&
                            //     errors.tiN_USTINId
                            // )}
                            name="tiN_USTINId"
                            value={values.tiN_USTINId}
                            style={{
                              padding: " 0 10px",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "36px",
                            }}
                          >
                           <option value="0">--Select--</option>
                               
                               {ustinValue?.map((ele: any) => (
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
                          </select>): 
                          
                          <select
                            onChange={
                              handleChange
                            }
                            onBlur={handleBlur}
                            // error={Boolean(
                            //   touched.tiN_USTINId &&
                            //     errors.tiN_USTINId
                            // )}
                            name="tiN_USTINId"
                            value={values.tiN_USTINId}
                            style={{
                              padding: " 0 10px",
                              color: "#7e7e7e",
                              fontStyle: "italic",
                              height: "36px",
                            }}
                          >
                           <option value="0">--Select--</option>
                               
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
                          </select>}
                          {errors.tiN_USTINId &&
                          touched.tiN_USTINId ? (
                            <div>
                              <p className="error">
                                {/* {errors.tiN_USTINId} */}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </FormControl>
    </div>

    <div className="col-md-6  col-12">
      
      <Typography>U.S. TIN</Typography>
      <Input
      name = "Tin"
      value={values.Tin}
      id = "Tin"
      onChange={
        handleChange
      }
      className="input-w9-cstm"
      inputProps={{ maxLength: 11}}
      onKeyDown={(e) => formatTin(e, values)}
      fullWidth
       
        style={{
          width: "100%",
          border: " 1px solid #d9d9d9 ",
          height:"40px",
          lineHeight: "36px ",
          background: "#fff ",
          fontSize: "13px",
          color: " #000 ",
          fontStyle: "normal",
          borderRadius: "1px",
          padding: " 0 10px ",
        }}
      />
          {/* <p className="error">{errors.Tin}</p> */}
    </div>

  </div>
  </div>
  </Paper>
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
    history("/US_Purposes/Back/Exemption")
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
</section>)}
