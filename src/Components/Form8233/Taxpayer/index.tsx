import React, { useState } from "react";
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
import {CREATE_8233} from "../../../Redux/Actions";
import { ExpandMore, Info,DeleteOutline } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { US_TINSchema } from "../../../schemas/8233";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Tin(props: any) {

    const initialValue = {
  usTINTypeId: "",
  usTIN: "",
  foreginTIN_CountryId: "",
  foregionTIN: "",
  reasionForForegionTIN_NotAvailable: "",
  notAvailable: "",
  alternativeTIN_Format: "",


        
      };

    const history = useNavigate()
    const dispatch=useDispatch();
    const [tax, setTax] = useState<string>('');

    const handleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTax(event.target.value);
    };

    const [toolInfo, setToolInfo] = useState("");
    return (

        <>
        <Formik initialValues={initialValue}
        enableReinitialize
    validationSchema={US_TINSchema}

        onSubmit={(values, { setSubmitting }) => {
           setSubmitting(true);
           console.log(values)
           dispatch(
            CREATE_8233 (values, () => {
             history("/Form8233/TaxPayer_Identification/Owner");  
  
            })
          ) ;
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
        <>{console.log(errors,"errorsssss")}</>
        <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>
            <div style={{ padding: "20px" }}>
                <Paper style={{ padding: "18px" }}>
                    <Typography
                        align="left"
                        style={{ margin: "10px", fontSize: "23px", fontWeight: "550" }}
                    >
                        Taxpayer Identification Number

                    </Typography>

                    <div>
                        <div style={{ margin: "10px", display: "flex", marginTop: "25px", justifyContent: "space-between" }} className="row col-12">
                            <div className="col-4">
                                <Typography>
                                    U.S. TIN Type<span style={{ color: "red" }}>*</span>
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
                                                fontSize: '16px',
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
                                <select
                                name="usTinTypeId"
                                value={values.usTINTypeId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                               
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                        width: "100%",
                                    }}
                                   
                                   
                                ></select>
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
                                    <Checkbox size="medium" />
                                    <span style={{ fontSize: "18px" }}>
                                        Not Available
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: "10px", display: "flex", marginTop: "25px", justifyContent: "space-between" }} className="row col-12">
                            <div className="col-4">
                                <Typography>
                                    Foreign TIN Country <span style={{ color: "red" }}>*</span>
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
                                    // error={Boolean(touched.foreginTIN_CountryId && errors.foreginTIN_CountryId)}
                                    
                                ></select>
                                 <p className="error">{errors.foreginTIN_CountryId}</p>
                               
                                <div>

                                </div>
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
                               <div style={{ marginTop: "10px" ,display:"flex",justifyContent:"space-between"}}>
                               <FormControl>

<RadioGroup 
    row
    id={values.notAvailable}
    aria-labelledby="demo-row-radio-buttons-group-label"
    name="row-radio-buttons-group"
    onChange={handleTaxChange}
    

>
    <FormControlLabel name={values.notAvailable}  value="notAvailable" control={<Radio />} label="Not Available" />
    <FormControlLabel name={values.alternativeTIN_Format}   className="label" value="alternativeTINFormat" control={<Radio />} label="Alternative TIN Format" />

 

</RadioGroup>


 



</FormControl>
{ tax === "notAvailable"
                            ?(<Button  style={{marginTop:"5px",color:"red"}}>
   <DeleteOutline />
    </Button>):""} 
                               </div>
                            </div>
                            <div className="col-3">

                            </div>
                        </div>
                    </div>
                   
                    {
                        tax === "notAvailable"
                            ?
                            (
                                <div style={{ margin: '20px' }}>
                                    
                                   
                                    
                                        <Typography style={{ fontSize: "20px", marginTop: "3rem" }}>
                                            Please specify the reason for non-availability of Foreign TIN<span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </Typography>
                                        <Typography style={{ fontSize: "20px", marginTop: "2rem" }}>
                                        You have selected a FTIN country that is not on the IRS exemption list, where, in most cases a FTIN should be provided. You must provide a written explanation here explaining why you are not providing. By not providing we may not be able to apply treaty benefits should they apply and may render the form invalid.
                                        </Typography>
                                        <Input
                                        name="reasionForForegionTIN_NotAvailable"
                                        value={values.reasionForForegionTIN_NotAvailable}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.reasionForForegionTIN_NotAvailable && errors.reasionForForegionTIN_NotAvailable)}    
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
                                      <p className="error">{errors.reasionForForegionTIN_NotAvailable}</p>   
                                    </div>
                                )
                            :
                            tax === "No"
                                ?
                              <></>
                                :
                                <></>
                    }


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
                        <Button variant="contained" style={{ color: "white", marginLeft: "15px" }}>
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
    )
}
</Formik>
</>
    )}