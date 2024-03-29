import React ,{useEffect, useState} from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Tooltip,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import Infoicon from "../../../assets/img/info.png";
import InfoIcon from "@mui/icons-material/Info";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { fctaSchema } from "../../../schemas";
import { W9_state , GetAgentFATCAEntityGIINChallengeDisabledForEformAction, postW9Form } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCrumbComponent from "../../reusables/breadCrumb";
import View_Insructions from "../../viewInstruction";

export default function FCTA_Reporting(props: any) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const history = useNavigate()
  const [canvaBx, setCanvaBx] = useState(false);
  const handleCanvaOpen = () => {
    setCanvaBx(true);
  }
  const handleCanvaClose = () => {
    setCanvaBx(false);
  }
  const [clickCount, setClickCount] = useState(0);
  const [report, setReport] = useState<string>("");
  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport((event.target as HTMLInputElement).value);
  };
  const GetAgentFATCAEntityGIINChallengeDisabledForEformReducer = useSelector(
    (state: any) => state.GetAgentFATCAEntityGIINChallengeDisabledForEformReducer
  );
  const PrevStepData = JSON.parse(localStorage.getItem("PrevStepData") || "{}");
  const initialValue = {
    isExemptionFATCAReportings: "No",
    ReportingId:""
  };

  useEffect(() => {
    dispatch(GetAgentFATCAEntityGIINChallengeDisabledForEformAction());
    

  }, []);
  return (  

    <section
    className="inner_content"
    style={{ backgroundColor: "#0c3d69", marginBottom: "10px", height: "100%" }}
  >  <View_Insructions canvaBx={canvaBx} handleCanvaClose={handleCanvaClose}/>
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
          validationSchema={fctaSchema} // Uncomment after testing ,this is validation Schema
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            const result = { ...PrevStepData, ...values };
            if (clickCount === 0) {
              setClickCount(clickCount+1);
            }else{
            history("/US_Purposes/Back/Exemption/Tax")
            dispatch(
              postW9Form(result, () => {
                localStorage.setItem("PrevStepData",JSON.stringify(result))
                history("/US_Purposes/Back/Exemption/Tax")
              })
            );
           
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
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
     <div className="row w-100 h-100">
     <div className="col-4">
          <div style={{ padding: "20px 0px",height:"100%" }}>
            <BreadCrumbComponent breadCrumbCode={1239} formName={1}/>
          
      </div>
          </div>
                <div className="col-8 mt-3" > 
                <div style={{ padding: "10px 0px" }}>
                <Paper elevation={6} style={{ padding: "17px",}}>         
  <div style={{backgroundColor: "#ffff" }}>
  {values.isExemptionFATCAReportings == "No" && clickCount === 1 ? (<div  style={{backgroundColor: "#e8e1e1" , padding:"10px"}}>
                  <Typography>
                  FATCA100
                  <span className="mx-1">
                  <img src={Infoicon} style={{color: "#ffc107",height:"22px",
                  width:"20px",
                  boxShadow:"inherit",
                 

                         
                          cursor: "pointer",
                          marginBottom:"3px"
                         
                        }}/>
                    
                    
                
                  </span>
                  You have not made a selection to state that you are exempt from FATCA reporting.<div>&nbsp;</div><div>You do not need to make a selection if you are only making this submission for an account held in the United States. The exemption codes available only apply to certain types of U.S. persons submitting this form for accounts maintained outside of the United States by foreign (non U.S.) Financial Organizations.</div>
                  
                  </Typography>
                 
  
                </div>):""}
                
    <Typography
      align="left"
      style={{ margin: "10px", fontSize: "27px" }}
    >
      Exemption from FATCA reporting
      <span style={{ color: "red" }}>*</span><span>
          <Tooltip
            style={{ backgroundColor: "black", color: "white" }}
            title={
              <>
                <Typography color="inherit">
                 TT-450 What is FATCA reporting?
                </Typography>
                <a >
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
            <InfoIcon
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
    <Typography
      align="left"
      style={{ margin: "10px",fontSize: "17px", marginTop: "10px" }}
    >
      Will payments be made into an account held outside of the United
      States by a foreign institution?
    </Typography>

    <div style={{marginLeft:"10px", marginTop: "20px", justifyContent: "center" }}>
      <RadioGroup
        id="isExemptionFATCAReportings"
        aria-labelledby="demo-row-radio-buttons-group-label"
        row
        value={values.isExemptionFATCAReportings}
        onChange={handleChange}
      >
        <FormControlLabel
          control={<Radio/>}
          value="Yes"
          name="isExemptionFATCAReportings"
          label="Yes"
        />
        <FormControlLabel
        control={<Radio/>}
          value="No"
          name="isExemptionFATCAReportings"
          label="No"
        />
           
      </RadioGroup>
    </div>
    {errors.isExemptionFATCAReportings && touched.isExemptionFATCAReportings ? (
                <div>
                  <Typography color="error">
                    {errors.isExemptionFATCAReportings}
                  </Typography>
                </div>
              ) : (
                ""
              )}
    {values?.isExemptionFATCAReportings === "Yes" ? (
      <>
        <Typography
          align="left"
          style={{ fontSize: "17px", marginTop: "10px" }}
        >
          Please select from the list provided to apply for exemption
          from FATCA Reporting or select confirm if no exemption
          applies<span style={{ color: "red" }}>*</span>
          <span>
          <Tooltip
            style={{ backgroundColor: "black", color: "white" }}
            title={
              <>
                <Typography color="inherit">
                 TT-085 FATCA Exemption Classification
                </Typography>
                <a >
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
            <InfoIcon
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
        <FormControl className="w-100 mt-2">
          <select
          className="col-md-6 col-12"
            style={{
              padding: " 0 10px",
              color: "#7e7e7e",
              fontStyle: "italic",
              height: "36px",
            }}
            name="ReportingId"
            id="Income"
            // defaultValue={data.interestDividendPaymentId}
             onChange={handleChange}
          >
            <option value={0}>-Select-</option>
            {GetAgentFATCAEntityGIINChallengeDisabledForEformReducer.GetAgentFATCAEntityGIINChallengeDisabledForEformData?.map(
                                (ele: any) => (
                                  <option key={ele?.id} value={ele?.id}>
                                    {ele?.name}
                                  </option>
                                )
                              )}
          </select>
        </FormControl>
        <p className="error">{errors.ReportingId}</p>

      </>
    ) : ""}
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
    history("/US_Purposes/Back")
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
</section>

)}