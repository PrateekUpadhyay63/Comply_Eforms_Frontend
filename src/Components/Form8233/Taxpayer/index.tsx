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
import { Info, DeleteOutline } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import checksolid from "../../../assets/img/check-solid.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { US_TINSchema } from "../../../schemas/8233";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getAllCountries,getAllCountriesCode,getAllCountriesIncomeCode,getAllStateByCountryId } from "../../../Redux/Actions";

export default function Tin(props: any) {
  const initialValue = {
    usTINTypeId: "",
    usTIN: "",
    foreginTIN_CountryId: "",
    foregionTIN: "",
    reasionForForegionTIN_NotAvailable: "",
    notAvailable: false,
    alternativeTIN_Format: "",
  };
  useEffect(() => {
    dispatch(getAllCountries())   
    dispatch(getAllCountriesCode())   
    dispatch(getAllCountriesIncomeCode())   
    dispatch(getAllStateByCountryId())   
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
                {/* <a target="_blank" href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-">Help Video</a> */}
                <a href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-" target="popup" onClick={()=>window.open('https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-','name','width=600,height=400')}>Help Video</a>
                </div>
            </div>
        </div>
        <div className="row w-100 h-100">
        <div className="col-4">
          <div style={{ padding: "20px 0px",height:"100%",marginTop:"20px" }}>
        <Paper style={{ padding: "0px 0px 0px 18px", height:"100%" }} className="bg-none">
         
              <div style={{background:"#ffffff33",height:"100%"}}>
                <div className="stepper">
                      <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChangestatus("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          className="accordian-header"
                        >
                          <Typography
                          className="text-uppercase d-flex active"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step I<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li className="active"> <label className="my-auto">Name and Address </label></li>
                              <li className="active">Account Indivation(Optional)</li>
                              <li className="active">Tax Identification Number</li>
                              <li className="active">Contact Details</li>
                             
                            </ul>
                          </Paper>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChangestatus("panel2")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          className="accordian-header"
                        >
                                     <Typography
                          className="text-uppercase d-flex"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step II<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li className="active"> <label className="my-auto">Substantial U.S. Presence Test</label></li>
                              <li >Identification of Beneficial Owner</li>
                              <li >Treaty Claim</li>
                              <li >Tax Identification Number</li>
                            
                            </ul>
                        </Paper>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChangestatus("panel3")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          className="accordian-header"
                        >
                                     <Typography
                          className="text-uppercase d-flex"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step III<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li > <label className="my-auto">Supporting Documentation</label></li>
                             
                              
                            </ul>
                        </Paper>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChangestatus("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          className="accordian-header"
                        >
                          <Typography
                          className="text-uppercase d-flex"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step IV<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li > <label className="my-auto">Penalties of Perjury Certification </label></li>
                              <li >Electronic Signature</li>
                              <li >Electronic Signature Confirmation</li>
                              <li >U.S. Tax Certification Complete</li>
                              
                            </ul>
                          </Paper>
                        </AccordionDetails>
                      </Accordion>
                    </div>
              </div>
           
        </Paper>
      </div>
      </div>
      <div className="col-8">
              <div style={{ padding: "20px" }}>
                <Paper style={{ padding: "18px" }}>
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
                    <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                        justifyContent: "space-between",
                      }}
                      className="row col-12"
                    >
                      <div className="col-4">
                        <Typography>
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
                                  fontSize: "16px",
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
                        <select
                          name="usTINTypeId"
                          id="Income"
                          defaultValue={1}
                          onBlur={handleBlur}
                          value={values.usTINTypeId}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                        >
                           <option value="1">-Select-</option>
                              <option value="2">SSN/ITIN</option>
                              <option value="3">U.S. TIN not applicable</option>
                              <option value="4">U.S. TIN not available</option>
                        </select>
                        <p className="error">{errors.usTINTypeId}</p>
                      </div>

                      <div className="col-4">
                        <Typography>U.S. TIN</Typography>
                        <Input
                          fullWidth
                          name="usTIN"
                          value={values.usTIN}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(touched.usTIN && errors.usTIN)}
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                        />
                        <p className="error">{errors.usTIN}</p>
                      </div>
                      <div className="col-3">
                        <div style={{ marginTop: "27px" }}>
                          <Checkbox
                            className="mx-2"
                            name="notAvailable"
                            value={values.notAvailable}
                            onChange={handleChange}
                            size="medium"
                            style={{ fontSize: "2rem" }}
                          />
                          <span style={{ fontSize: "18px" }}>
                            Not Available
                          </span>
                          <p className="error">{errors.notAvailable}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                        justifyContent: "space-between",
                      }}
                      className="row col-12"
                    >
                      <div className="col-4">
                        <Typography>
                          Foreign TIN Country
                          <span style={{ color: "red" }}>*</span>
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
                          name="foreginTIN_CountryId"
                          value={values.foreginTIN_CountryId}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                            <option value="">-Select-</option>
                              <option value={257}>United Kingdom</option>
                              <option value={258}>United States</option>
                              <option value="">---</option>
                              {getCountriesReducer.allCountriesData?.map((ele:any) => (
                              <option key={ele?.id} value={ele?.id}>{ele?.name}</option>
                                  ))}
                            </select>
                        <p className="error">{errors.foreginTIN_CountryId}</p>
                      </div>

                      <div className="col-4">
                        <Typography>Foreign TIN </Typography>
                        <Input
                          name="foregionTIN"
                          value={values.foregionTIN}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          fullWidth
                          style={{
                            border: " 1px solid #d9d9d9 ",
                            padding: " 0 10px",
                            color: "#7e7e7e",
                            fontStyle: "italic",
                            height: "50px",
                            width: "100%",
                          }}
                        />
                        <p className="error">{errors.foregionTIN}</p>
                        <div
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <FormControl>
                            <RadioGroup
                              row
                              value={values.reasionForForegionTIN_NotAvailable}
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                name="reasionForForegionTIN_NotAvailable"
                                value="Yes"
                                control={<Radio />}
                                label="Not Available"
                              />
                              <FormControlLabel
                                name="reasionForForegionTIN_NotAvailable"
                                className="label"
                                value="No"
                                control={<Radio />}
                                label="Alternative TIN Format"
                              />
                            </RadioGroup>
                          </FormControl>
                          {values.reasionForForegionTIN_NotAvailable ===
                          "reasionForForegionTIN_NotAvailable" ? (
                            <Button style={{ marginTop: "5px", color: "red" }}>
                              <DeleteOutline />
                            </Button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                  </div>

                  {values.reasionForForegionTIN_NotAvailable === "No" ? (
                    <div style={{ margin: "20px" }}>
                      <Typography
                        style={{ fontSize: "20px", marginTop: "3rem" }}
                      >
                        Please specify the reason for non-availability of
                        Foreign TIN<span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Typography
                        style={{ fontSize: "20px", marginTop: "2rem" }}
                      >
                        You have selected a FTIN country that is not on the IRS
                        exemption list, where, in most cases a FTIN should be
                        provided. You must provide a written explanation here
                        explaining why you are not providing. By not providing
                        we may not be able to apply treaty benefits should they
                        apply and may render the form invalid.
                      </Typography>
                      <Input
                        name="reasionForForegionTIN_NotAvailable"
                        value={values.reasionForForegionTIN_NotAvailable}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(
                          touched.reasionForForegionTIN_NotAvailable &&
                            errors.reasionForForegionTIN_NotAvailable
                        )}
                        fullWidth
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "8rem",
                          width: "100%",
                        }}
                      />
                      <p className="error">
                        {errors.reasionForForegionTIN_NotAvailable}
                      </p>
                    </div>
                  ) : values.reasionForForegionTIN_NotAvailable === "No" ? (
                    <></>
                  ) : (
                    <></>
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
