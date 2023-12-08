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
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { fctaSchema } from "../../../schemas";
import { W9_state , GetAgentFATCAEntityGIINChallengeDisabledForEformAction } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCrumbComponent from "../../reusables/breadCrumb";

export default function FCTA_Reporting(props: any) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const history = useNavigate()
  const [report, setReport] = useState<string>("");
  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport((event.target as HTMLInputElement).value);
  };
  const GetAgentFATCAEntityGIINChallengeDisabledForEformReducer = useSelector(
    (state: any) => state.GetAgentFATCAEntityGIINChallengeDisabledForEformReducer
  );
 
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
  >
     <div className="overlay-div">
        <div className="overlay-div-group">
          <div className="viewInstructions">View Instructions</div>
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
            history("/US_Purposes/Back/Exemption/Tax")
            dispatch(
              W9_state(values, () => {
                console.log( "Done");
              })
            );
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
            <BreadCrumbComponent breadCrumbCode={1253} formName={2}/>
          
      </div>
          </div>
                <div className="col-8 mt-3" >          
  <div style={{ margin: "12px", padding: "10px", backgroundColor: "#ffff" }}>
    <Typography
      align="left"
      style={{ margin: "10px", fontSize: "27px" }}
    >
      Exemption from FATCA reporting
      <span style={{ color: "red" }}>*</span>
      <Info style={{ color: "#ffc107", fontSize: "13px" }} />{" "}
    </Typography>
    <Typography
      align="left"
      style={{ margin: "10px",fontSize: "17px", marginTop: "10px" }}
    >
      Will payments be made into an account held outside of the United
      States by a foreign institution?
    </Typography>

    <div style={{margin: "10px", marginTop: "20px", justifyContent: "center" }}>
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
          style={{ fontSize: "12px", marginTop: "10px" }}
        >
          Please select from the list provided to apply for exemption
          from FATCA Reporting or select confirm if no exemption
          applies<span style={{ color: "red" }}>*</span>
          <Info style={{ color: "#ffc107", fontSize: "13px" }} />
        </Typography>
        <FormControl className="w-100">
          <select
          className="col-md-6 col-12"
            style={{
              padding: " 0 10px",
              color: "#7e7e7e",
              fontStyle: "italic",
              height: "30px",
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
   {values?.isExemptionFATCAReportings === "Yes" ?( <Button
     type="submit"
      variant="contained"
      style={{ color: "white", marginLeft: "15px" }}
    >
      Continue
    </Button>):<Button
     onClick={()=>{history("/US_Purposes/Back/Exemption/Tax")}}
      variant="contained"
      style={{ color: "white", marginLeft: "15px" }}
    >
      Continue
    </Button>}

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