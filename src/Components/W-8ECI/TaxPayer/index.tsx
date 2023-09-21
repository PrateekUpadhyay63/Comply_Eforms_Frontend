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
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import "./index.scss";
import { useNavigate } from "react-router-dom";


export default function Tin(props: any) {

    const initialValue = {
        usTin: "",
        usTinTypeId: "",
        foreignTINCountry: "",
        foreignTIN: "",
        isFTINLegally: "",
        isNotAvailable: "",
        alternativeTINFormat:"",
        isExplanationNotLegallyFTIN:""


        
      };

    const history = useNavigate()
    const [tax, setTax] = useState<string>('');

    const handleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTax(event.target.value);
    };

    const [toolInfo, setToolInfo] = useState("");
    return (

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
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                        width: "100%",
                                    }}
                                   
                                   
                                ></select>
                            </div>

                            <div className="col-4">
                                <Typography>U.S. TIN</Typography>
                                <Input
 name="usTin"
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
                                    name="foreignTINCountry"
                                    
                                ></select>
                                <div style={{ marginTop: "1rem" }}>
                                    <Checkbox size="medium"  name="isFTINLegally"/>
                                    <span style={{ fontSize: "20px", marginTop: "5px" }}>


                                        Check if FTIN not legally required <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                            <>
                                                <Typography color="inherit">FTIN not legally required</Typography>
                                                <a onClick={() => setToolInfo("check")}>
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
                                    </span>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className="col-4">
                                <Typography>Foreign TIN </Typography>
                                <Input
name="foreignTIN"
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
                                <FormControl style={{ marginTop: "10px" }}>

                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"

                                    >
                                        <FormControlLabel name="isNotAvailable" disabled value="Yes" control={<Radio />} label="Not Available" />
                                        <FormControlLabel name="alternativeTINFormat" disabled defaultChecked className="label" value="no" control={<Radio />} label="Alternative TIN Format" />

                                    </RadioGroup>


                                </FormControl>
                            </div>
                            <div className="col-3">

                            </div>
                        </div>
                    </div>
                    <Typography style={{ margin: "20px", fontSize: "23px" }}>
                        Do you wish to provide a further (or other) explanation why you are not legally required to provide an FTIN?<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl style={{ marginLeft: "23px" }}>

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={tax}
                            onChange={handleTaxChange}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel className="label" value="No" control={<Radio />} label="No" />

                        </RadioGroup>


                    </FormControl>
                    {
                        tax === "Yes"
                            ?
                            (
                                <div style={{ margin: '20px' }}>
                                    <Typography style={{ fontSize: "25px", fontWeight: "550" }}>
                                        Foreign TIN Provision – Reasonable Explanation
                                    </Typography>
                                    <Typography style={{ fontSize: "20px", fontWeight: "550", marginTop: "15px" }}>
                                        Reasonable Explanation Provision
                                    </Typography>
                                    <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                                        You have not provided a Foreign Tax Identification Number, FTIN, where one would generally be provided. The IRS provides for a range of circumstances where it is considered reasonable to not provide a FTIN, including but not limited to:
                                    </Typography>
                                    <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                                        <ul>
                                            <li>
                                                The account holder is resident of a jurisdiction that is not listed in section 3 of Revenue Procedure 2017-46, 2017-43 I.R.B. 372, which may be further updated in future published guidance;

                                            </li>
                                            <li>The account holder is resident in a jurisdiction that has been identified by the IRS on a list of jurisdictions for which withholding agents are not required to obtain foreign TINs;
                                            </li>
                                            <li>
                                                The account holder is a government, international organization, foreign central bank of issue, or resident of a U.S. territory; or

                                            </li>
                                            <li>
                                                You obtain a reasonable explanation for why the account holder has not been issued a foreign TIN.

                                            </li>
                                        </ul>
                                        <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                                            Please select the appropriate explanation below, or where none apply, please select, ‘Other/None of the above’ and you will have the opportunity to provide a written explanation.


                                        </Typography>
                                        <Typography style={{ fontSize: "20px", marginTop: "15px" }}>
                                            Please note, treaty benefits, where they may otherwise apply, may not be provided if you do not enter either a U.S TIN or a Foreign TIN or provide an acceptable and reasonable explanation. The recipient of the submission document may need to obtain further information.
                                        </Typography>

                                    </Typography>
                                    <div>
                                        <Typography style={{ fontSize: "20px", marginTop: "3rem" }}>
                                            Please specify the reason for non-availability of US TIN<span style={{ color: "red" }}>
                                                *
                                            </span>
                                        </Typography>
                                        <Input
                                            fullWidth
                                            required
                                            style={{
                                                border: " 1px solid #d9d9d9 ",
                                                padding: " 0 10px",
                                                color: "#7e7e7e",
                                                fontStyle: "italic",
                                                height: "8rem",
                                                width: "100%",
                                            }}
                                        />
                                    </div>
                                </div>)
                            :
                            tax === "No"
                                ?
                                <div style={{ margin: "20px" }}>
                                    <Typography style={{ fontSize: "20px", marginTop: "3rem" }}>
                                        Please specify the reason for non-availability of US TIN<span style={{ color: "red" }}>
                                            *
                                        </span>
                                    </Typography>
                                    <Input
                                        fullWidth
                                        required
                                        style={{
                                            border: " 1px solid #d9d9d9 ",
                                            padding: " 0 10px",
                                            color: "#7e7e7e",
                                            fontStyle: "italic",
                                            height: "8rem",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                                :
                                <></>
                    }


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
                        <Button variant="contained" style={{ color: "white", marginLeft: "15px" }}>
                            View Form
                        </Button>
                        <Button

                            onClick={() => {
                                history("/W-8ECI/Income")
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
    )
}
</Formik>
</>
    )}