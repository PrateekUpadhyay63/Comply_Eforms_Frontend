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
import { ExpandMore, Info,DeleteOutline } from "@mui/icons-material";
import { Formik, Form } from "formik";
// import "./index.scss";
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

    
    <Typography  align="left"
                        style={{ margin: "10px", fontSize: "33px", fontWeight: "550" }}>
Identification of Beneficial Owner (See instructions.)
</Typography>

<div className="row mt-4">
    <div className="col-12 d-flex">

        <Typography style={{ margin: "10px", fontSize: "18px"}}>
          This exemption is applicable for compensation for calendar year
        </Typography>
        <FormControl className="w-50 ">
            <select
                                        style={{
                                            border: " 1px solid #d9d9d9 ",
                                            padding: " 0 10px",
                                            color: "#7e7e7e",
                                            fontStyle: "italic",
                                            height: "50px",
                                            width: "20%",
                                        }}
                                        name="foreignTINCountry"
                                        
            ></select>
        </FormControl>
    </div>
</div>


<div className="row mt-4">
    <div className="col-12 d-flex">

    <Typography style={{ fontSize: "18px"}} className="my-auto">
    , or other tax year beginning
        </Typography>
        <FormControl className="mx-2" style={{width:"20%"}}>
        <select
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                 
                                    }}
                                    name="foreignTINCountry"
                                    
                                ></select>
        </FormControl>


        <Typography style={{  fontSize: "18px"}} className="my-auto">
        and ending
        </Typography>
        <FormControl className="mx-2" style={{width:"20%"}}>
        <select
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                   
                                        
                                    }}
                                    name="foreignTINCountry"
                                    
                                ></select>
        </FormControl>
    </div>

</div>
<Paper style={{ padding: "10px" ,border:"2px solid black",fontSize:"20px"}} className="my-3">
<span style={{backgroundColor:"darkgrey", padding: "10px"}}>Part I</span> Identification of Beneficial Owner (See instructions.)
    </Paper> 
    <Typography style={{fontSize:"16px"}}>
    <span style={{fontWeight:"550"}}>Note:
        </span> Citizens of Canada or Mexico are not required to complete lines 7a and 7b.
        </Typography>

        <div className="col-12">
<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>6
                                    </span> U.S. visa type<span style={{ color: "red" }}>*</span>
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-048 Enter your U.S. visa type</Typography>
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
                                       <span style={{fontWeight:"550"}}> Line 6.</span> Enter your U.S. visa type.
                                        </Typography>

                                        <Typography style={{ marginTop: "10px" }}>
                                        For example
                                        </Typography>
                                        <Typography style={{ marginTop: "10px" }}>
                                        foreign students are usually granted an “F-1” visa. Foreign professors, teachers, or researchers are usually granted a “J-1” visa.
                                        </Typography>
                                        <ul>
                                            <li>
                                            Business/vocational trainees are usually granted an “M-1” visa; however, some persons granted a “J-1” visa may also be considered business/vocational trainees (for example, a person admitted to complete a postgraduate residency in medicine).
                                                </li>

                                            </ul>
                                            <Typography>
                                            Spouses and dependents admitted on secondary visas (for example, “F-2,” “J-2,” “H-4,” and “O-3” visas) are not usually eligible to claim the same treaty benefits as the primary visa holder.
                                            </Typography>
                                            <Typography>
                                            If you do not have, or do not require, a visa, write “None.”
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
<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>7a
                                    </span> Country issuing passport <span style={{ color: "red" }}>*</span>
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-049 Country that issued your Passport</Typography>
                                            <a onClick={() => setToolInfo("issue")}>
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
                                {toolInfo === "issue" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 7a.</span> Enter the Country that issued your Passport.
                                        </Typography>

                                        <Typography style={{ marginTop: "5px" }}>
                                        If you are Citizen of Canada or Mexico skip this line.
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
<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>7b
                                    </span> Passport number<span style={{ color: "red" }}>*</span>
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-050 Passport Number</Typography>
                                            <a onClick={() => setToolInfo("num")}>
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
                                {toolInfo === "num" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                           <span style={{fontWeight:"550"}}>Line 7b.
                                            </span> Enter your Passport Number.
                                        </Typography>

                                        <Typography style={{ marginTop: "5px" }}>
                                        If you are Citizen of Canada or Mexico skip this line.
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
<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                               <span style={{fontWeight:"550"}}> 8</span> Date of entry into the United States <span style={{ color: "red" }}>*</span>
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-051 Date of entry into the United States</Typography>
                                            <a onClick={() => setToolInfo("united")}>
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
                                {toolInfo === "united" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 8.
                                            </span> You are generally required to enter your date of entry into the United States that pertains to your current non-immigrant status. For example, enter the date of arrival shown on your current Immigration Form I-94, Arrival-Departure Record.
                                        </Typography>

                                        <Typography style={{ marginTop: "10px" }}>

                                       <span style={{fontWeight:"550"}}> Exception.
                                        </span> If you are claiming a tax treaty benefit that is determined by reference to more than one date of arrival, enter the earlier date of arrival. For example, you are currently claiming treaty benefits (as a teacher or a researcher) under article 15 of the tax treaty between the United States and Norway. You previously claimed treaty benefits (as a student) under article 16(1) of that treaty. Under article 16(4) of that treaty, the combination of exemptions under articles 15 and 16(1) may not extend beyond 5 tax years from the date you entered the United States. If article 16(4) of that treaty applies, enter on line 8 the date you entered the United States as a student.
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
<div>
                                    <Checkbox size="medium"/>
                                    <span style={{ fontSize: "20px", marginTop: "5px" }}>


                                    Check if Nonimmigrant status Not Applicable:
                                       
                                    </span>
                                </div>

                               <div className="row col-12 mt-2">  
                            <div className="col-6 ">
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>9a</span> Current nonimmigrant status<span style={{ color: "red" }}>*</span>
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-052 Current non-immigrant status</Typography>
                                            <a onClick={() => setToolInfo("status")}>
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
                                {toolInfo === "status" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 9a.
                                            </span> Enter your current non-immigrant status.
                                        </Typography>

                                        <Typography style={{ marginTop: "5px" }}>
                                        For example, enter your current non-immigrant status shown on your current Immigration Form I-94. Check the box if not applicable. 
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

                            <div className="col-6 mt-1">
                                <Typography style={{fontSize:"20px"}}><span style={{fontWeight:"550"}}>9b</span> Date your current nonimmigrant status expires
                                
                                <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-053 Expiry of current non-immigrant status</Typography>
                                            <a onClick={() => setToolInfo("expiry")}>
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
                                {toolInfo === "expiry" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 9b.
                                            </span> Enter the date your current non-immigrant status expires.
                                        </Typography>

                                        <Typography style={{ marginTop: "5px" }}>
                                        For example, you may enter the date of expiration shown on your current Immigration Form I-94. Enter “DS” on line 9b if the date of expiration is based on “duration of status.” 
                                        </Typography>


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                
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
                                <div className="mt-2">
                                    <Checkbox size="medium"/>
                                    <span style={{ fontSize: "20px", marginTop: "13px" ,fontWeight:"550"}}>
                                    Please check this box if you wish to declare Duration of Stay (DS)
                                       
                                    </span>
                                </div>
                            </div>
                           
                        </div>

                        <div className="mt-2">
                                    <Checkbox size="medium"/>
                                    <span style={{ fontSize: "20px", marginTop: "13px" }}>
                                  <span style={{fontWeight:"550"}}> 10</span> If you are a foreign student, trainee, professor/teacher, or researcher, check this box
                                       
                                    </span>
                                    <div style={{ fontSize: "20px",fontWeight:"550"}}className="mx-2">Caution: See the line 10 instructions for the required additional statement you must attach.
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-053 Expiry of current non-immigrant status</Typography>
                                            <a onClick={() => setToolInfo("student")}>
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
                                    </div>
                                {toolInfo === "student" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 10.
                                             Nonresident alien students, trainees, professors/teachers, and researchers using Form 8233 to claim a tax treaty withholding exemption for compensation for personal services must attach a statement to Form 8233.The format and contents of the required statements are shown in Appendix A and Appendix B in Pub. 519.
                                             </span>

                                        </Typography>

                                        


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                    
                                </div>
                                <div  style={{fontSize:"20px"}}className="d-flex mt-5 mx-3">
                                You have selected Line 10 Checkbox. Please provide Statement to Form 8233 <span style={{color:"red"}}>
                                    *
                                </span>
                                <Input  className="mx-5"type="file"/>
                                </div>

        </div>




  




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

    onClick={() => {

history("/Form8233/TaxPayer_Identification/Owner/Claim_part")
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