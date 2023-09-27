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
import { amountSchema } from "../../../schemas/8233";
import {CREATE_8233} from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
import { ExpandMore, Info,DeleteOutline } from "@mui/icons-material";
import { Formik, Form } from "formik";
// import "./index.scss";
import { useNavigate } from "react-router-dom";


export default function Tin(props: any) {

    const initialValue = {
        taxTreaty_DescriptionOfPersonalServiceYouProvide: "",
        taxTreaty_TotalCompensationYouExpectForThisCalenderYear: "",
        taxTreaty_TreatyId: "",
        taxTreaty_TreatyArticleId: "",
        taxTreaty_TotalCompensationListedon11bExemptFromTax: "",
        taxTreaty_CheckAll: true,
        taxTreaty_CountryOfResidenceId: "",
        taxTreaty_NoncompensatoryScholarshiporFellowshipIncome: "",
        taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingTreatyID: "",
        taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID: "",
        totalIncomeListedIncomeonLine13ATaxExemptAmount: "",
        sufficientFactToJustfyExemptionForClaim12A_13: "",


        
      };
      const dispatch=useDispatch();
    const history = useNavigate()
    const [tax, setTax] = useState<string>('');

    const handleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTax(event.target.value);
    };

    const [toolInfo, setToolInfo] = useState("");
    return (

        <>
        <Formik initialValues={initialValue}
         enableReinitialize
         validationSchema={amountSchema}
        onSubmit={(values, { setSubmitting }) => {
           setSubmitting(true);

           dispatch(
            CREATE_8233 (values, () => {
                history("/Form8233/TaxPayer_Identification/Owner/Documentaion")
  
            })
          ) ;
          history("/Form8233/TaxPayer_Identification/Owner/Documentaion")
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
<span style={{backgroundColor:"black",color:"white",padding:"7px"}}>Part II</span> Claim for Tax Treaty Withholding Exemption and/or Personal Exemption Amount
</Typography>


    <Typography style={{fontSize:"19px",marginLeft:"10px"}}>
    <span style={{fontWeight:"550"}}>11
        </span> Compensation for independent (and certain dependent) personal services:
        </Typography>

        <div className="col-12">
<div className="col-12 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>a
                                    </span> Description of personal services you are providing
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit"></Typography>
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
                                       <span style={{fontWeight:"550"}}> Line 11a.</span> For compensation for independent personal services, examples of acceptable descriptions to enter on this line include: 'Consulting contract to design software' or 'give three lectures at XYZ University.'
For compensation for dependent personal services, examples of acceptable descriptions to enter on this line include:
                                        </Typography>

                                        
                                        <ul>
                                            <li>
                                           A nonresident alien student may enter 'part-time library assistant,' 'part-time restaurant worker,' or 'teaching one chemistry course per semester to undergraduate students.'
                                                </li>
                                                <li>
                                                    A nonresident alien professor or teacher may enter 'teaching at ABC University.'
                                                </li>
                                                <li>
                                                    A nonresident alien researcher may enter 'research at ABC University's school for liquid crystal research.'
                                                    </li>
                                                    <li>
                                                        A nonresident alien business/vocational trainee may enter 'neurosurgical residency at ABC Hospital' or 'one-year internship in hydraulic engineering at XYZ Corporation.'
                                                        </li>

                                            </ul>
                                           


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                <Input
                                name="taxTreaty_DescriptionOfPersonalServiceYouProvide"
                                value={values.taxTreaty_DescriptionOfPersonalServiceYouProvide}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.taxTreaty_DescriptionOfPersonalServiceYouProvide && errors.taxTreaty_DescriptionOfPersonalServiceYouProvide)}
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "9rem",
                                        width: "100%",
                                    }}
                                   
                                   
                                />
             <p className="error">{errors.taxTreaty_DescriptionOfPersonalServiceYouProvide}</p>                    
              

</div>
<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>b
                                    </span>
 Total compensation you expect to be paid for these services in this calendar or tax year <span style={{ color: "red" }}>*</span>
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-032 Total amount of compensation for personal services</Typography>
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
                                        <span style={{fontWeight:"550"}}>Line 11b.</span>  Enter the total amount of compensation for personal services you will receive from this withholding agent during the tax year. Enter an estimated amount if you do not know the exact amount.
                                        </Typography>

                                       


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                <Input
                                placeholder="$"
                                value={values.taxTreaty_TotalCompensationYouExpectForThisCalenderYear}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.taxTreaty_TotalCompensationYouExpectForThisCalenderYear && errors.taxTreaty_TotalCompensationYouExpectForThisCalenderYear)}
                               
                                name="taxTreaty_TotalCompensationYouExpectForThisCalenderYear"
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                        width: "100%",
                                    }}
                                   
                                   
                                />
                                 <p className="error">{errors.taxTreaty_TotalCompensationYouExpectForThisCalenderYear}</p>
              

</div>



<Typography style={{fontSize:"20px"}}>
                                <span className="mx-1"style={{fontWeight:"550"}}>12
                                    </span>
  If compensation is exempt from withholding based on a tax treaty benefit, provide:
 <Typography style={{fontSize:"20px"}}>
 Tax treaty and treaty article on which you are basing exemption from withholding
 

                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-033 Treaty and article claimed</Typography>
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
                                </Typography>
                                {toolInfo === "num" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                           <span style={{fontWeight:"550"}}>Line 12a.
                                            </span>  Enter the specific treaty and article on which you are basing your claim for exemption from withholding
  For example, “U.S./Germany tax treaty, Article 20(4)” or “U.S./Belgium tax treaty, Article 7 (business profits)”
                                        </Typography>

                                       

                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
<div className="row d-flex col-12">
<div className="col-6 my-3">

                         
                                
<Typography  style={{fontSize:"20px"}}>
<span className="mx-1"style={{fontWeight:"550"}}>a</span> Treaty:
</Typography>

<select
name="taxTreaty_TreatyId"
value={values.taxTreaty_TreatyId}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // error={Boolean(touched.taxTreaty_TreatyId && errors.taxTreaty_TreatyId)}
    style={{
        border: " 1px solid #d9d9d9 ",
        padding: " 0 10px",
        color: "#7e7e7e",
        fontStyle: "italic",
        height: "50px",
        width: "100%",
    }}
   
   
></select>
<p className="error">{errors.taxTreaty_TreatyId}</p>


</div>
<div className="col-6 my-3">



<Typography  style={{fontSize:"20px"}}>
<span className="mx-1"style={{fontWeight:"550"}}>b</span> Article:
</Typography>

<select
 value={values.taxTreaty_TreatyArticleId}
 onBlur={handleBlur}
 onChange={handleChange}
//  error={Boolean(touched.taxTreaty_TreatyArticleId && errors.taxTreaty_TreatyArticleId)}
name="taxTreaty_TreatyArticleId"
    style={{
        border: " 1px solid #d9d9d9 ",
        padding: " 0 10px",
        color: "#7e7e7e",
        fontStyle: "italic",
        height: "50px",
        width: "100%",
    }}
   
   
></select>
<p className="error">{errors.taxTreaty_TreatyArticleId}</p>

</div>
</div>



<div className="d-flex col-12">
<div className="col-6 my-3">

                         
<Typography style={{fontSize:"20px"}}>
<span style={{fontWeight:"550"}}> c</span> Total compensation listed on line 11b above that is exempt from tax under this treaty <span style={{ color: "red" }}>*</span>
    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
        <>
            <Typography color="inherit"></Typography>
            <a onClick={() => setToolInfo("receive")}>
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
{toolInfo === "receive" ? (<div>
    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
        <Typography>
        <span style={{fontWeight:"550"}}>Line 12c.
            </span>  If all income received for the services performed to which this Form 8233 applies is exempt, check the box. If only part of the income is exempt, enter the exact dollar amount that is exempt from withholding.
        </Typography>

        <Typography style={{ marginTop: "10px" }}>

       <span style={{fontWeight:"550"}}> Exception.
        </span> If you are claiming a tax treaty benefit that is determined by reference to more than one date of arrival, enter the earlier date of arrival. For example, you are currently claiming treaty benefits (as a teacher or a researcher) under article 15 of the tax treaty between the United States and Norway. You previously claimed treaty benefits (as a student) under article 16(1) of that treaty. Under article 16(4) of that treaty, the combination of exemptions under articles 15 and 16(1) may not extend beyond 5 tax years from the date you entered the United States. If article 16(4) of that treaty applies, enter on line 8 the date you entered the United States as a student.
        </Typography>


        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
    </Paper>

</div>) : ""}

<Input
name="taxTreaty_TotalCompensationListedon11bExemptFromTax"
value={values.taxTreaty_TotalCompensationListedon11bExemptFromTax}
onBlur={handleBlur}
onChange={handleChange}
error={Boolean(touched.taxTreaty_TotalCompensationListedon11bExemptFromTax && errors.taxTreaty_TotalCompensationListedon11bExemptFromTax)}
    style={{
        border: " 1px solid #d9d9d9 ",
        padding: " 0 10px",
        color: "#7e7e7e",
        fontStyle: "italic",
        height: "50px",
        width: "100%",
    }}
   
   
/>
<p className="error">{errors.taxTreaty_TotalCompensationListedon11bExemptFromTax}</p>

</div>
<div className="col-6 my-3 d-flex">
<Checkbox className="mt-2"/>
<Typography style={{marginTop:"2.5rem",fontSize:"20px"}}>
Check for All
</Typography>

</div>

</div>

<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                               <span style={{fontWeight:"550"}}> d</span> Country of residence
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-051 Date of entry into the United States</Typography>
                                            <a onClick={() => setToolInfo("residence")}>
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
                                <Typography style={{fontSize:"20px"}}>
                                Country:
                                </Typography>
                                {toolInfo === "residence" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 12d.
                                            </span> Generally, you may claim a withholding exemption based on a U.S. tax treaty with the country in which you claim permanent (or indefinite) residence. This is the foreign country in which you live most of the time. It is not necessarily the country of your citizenship.
                                        </Typography>

                                        <Typography style={{ marginTop: "10px" }}>

                                       For example, you are a citizen of Pakistan but maintain your home in England. You cannot claim a withholding exemption based on the U.S./Pakistan tax treaty. Any withholding exemption you claim must be based on the U.S./United Kingdom tax treaty.
                                        </Typography>


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                <Input
                                name="taxTreaty_CountryOfResidenceId"
                                value={values.taxTreaty_CountryOfResidenceId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.taxTreaty_CountryOfResidenceId && errors.taxTreaty_CountryOfResidenceId)}   
                                
                                style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                        width: "100%",
                                    }}
                                   
                                   
                                />
               <p className="error">{errors.taxTreaty_CountryOfResidenceId}</p>

</div>
<Typography style={{fontSize:"20px"}}>
<span style={{fontWeight:"550"}}>Note:
    </span> Do not complete lines 13a through 13c unless you also received compensation for personal services<span style={{fontWeight:"550"}}> from the same withholding agent</span>
</Typography>

<div className="col-6 my-3">
<Typography style={{fontSize:"20px"}}>
<span style={{fontWeight:"550"}}>13</span> Noncompensatory scholarship or fellowship income:
</Typography>
                         
                                <Typography style={{fontSize:"20px"}}>
                               <span style={{fontWeight:"550"}}> a</span> Amount 
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-036 Non compensatory scholarship or fellowship income</Typography>
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
                                        <span style={{fontWeight:"550"}}>Line 13a.
                                            </span>  Enter non compensatory scholarship or fellowship income.
                                        </Typography>

                                        <Typography style={{ marginTop: "10px" }}>

                                       <span style={{fontWeight:"550"}}>Note:
                                        </span>   Do not complete lines 13a through 13c unless you also received compensation for personal services from the same withholding agent.
                                        </Typography>


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                <Input
                                 value={values.taxTreaty_NoncompensatoryScholarshiporFellowshipIncome}
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 error={Boolean(touched.taxTreaty_NoncompensatoryScholarshiporFellowshipIncome && errors.taxTreaty_NoncompensatoryScholarshiporFellowshipIncome)}
                                name="taxTreaty_NoncompensatoryScholarshiporFellowshipIncome"
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "50px",
                                        width: "100%",
                                    }}
                                   
                                   
                                />
               <p className="error">{errors.taxTreaty_NoncompensatoryScholarshiporFellowshipIncome}</p>

</div>


                              
                              
                              
<Typography style={{fontSize:"20px"}}>
                               Tax treaty <span style={{fontWeight:"550"}}>
                                and treaty article</span> on which you are basing exemption from withholding
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-037 Specific treaty and article claimed</Typography>
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
                                        <span style={{fontWeight:"550"}}>Line 13b.
                                            </span> Enter the specific treaty and article on which you are basing your claim for exemption from withholding
 For example, “U.S./Germany tax treaty, Article 20(3)”.
                                        </Typography>

                                        


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                              
                               <div className="row col-12 mt-2">  
                            <div className="col-6 ">
                            
                                <Typography style={{fontSize:"20px"}}>
                                <span style={{fontWeight:"550"}}>b </span>Treaty:
                                   
                                </Typography>
                               
                                <select
                                name="taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingTreatyID"
                                value={values.taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingTreatyID}
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
                                 <p className="error">{errors.taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingTreatyID}</p>
                            </div>

                            <div className="col-6 ">
                                <Typography style={{fontSize:"20px"}}><span style={{fontWeight:"550"}}>c </span> Article:
                                
                            
                                </Typography>
                             
                                
                                <Input
                              value={values.taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              error={Boolean(touched.taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID && errors.taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID)}  
 name="taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID"
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
                               <p className="error">{errors.taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID}</p> 
                            </div>
                           
                        </div>

                      
                        <div className="col-6 my-3">

                         
<Typography style={{fontSize:"20px"}}>
<span className="mx-1" style={{fontWeight:"550"}}>d
    </span>
    Total income listed on line 13a above that is exempt from tax under this treaty
    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
        <>
            <Typography color="inherit">TT-038 Income listed in 13a</Typography>
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
        <span style={{fontWeight:"550"}}>Line 13c..</span>  Enter income listed in 13a that is exempt from tax under this treaty.
        </Typography>

      


        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
    </Paper>

</div>) : ""}
<Input
 value={values.totalIncomeListedIncomeonLine13ATaxExemptAmount}
 onBlur={handleBlur}
 onChange={handleChange}
 error={Boolean(touched.totalIncomeListedIncomeonLine13ATaxExemptAmount && errors.totalIncomeListedIncomeonLine13ATaxExemptAmount)}
name="totalIncomeListedIncomeonLine13ATaxExemptAmount"
    style={{
        border: " 1px solid #d9d9d9 ",
        padding: " 0 10px",
        color: "#7e7e7e",
        fontStyle: "italic",
        height: "50px",
        width: "100%",
    }}
   
   
/>
<p className="error">{errors.totalIncomeListedIncomeonLine13ATaxExemptAmount}</p>

</div>

<div className="col-6 my-3">

                         
                                <Typography style={{fontSize:"20px"}}>
                                <span className="mx-1" style={{fontWeight:"550"}}>14
                                    </span>
                                    
 Sufficient facts to justify the exemption from withholding claimed on line 12 and/or line 13 (see instructions)
                                    <span><Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                                        <>
                                            <Typography color="inherit">TT-039 Explain your withholding claim</Typography>
                                            <a onClick={() => setToolInfo("explain")}>
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
                                {toolInfo === "explain" ? (<div>
                                    <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                                        <Typography>
                                        <span style={{fontWeight:"550"}}>Line 14..</span>  Provide sufficient facts to justify the exemption from withholding claimed on line 12 and/or line 13. Be sure you provide enough details to allow the IRS to determine the tax treaty benefit you are claiming.
                                        </Typography>

                                     


                                        <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                                    </Paper>

                                </div>) : ""}
                                <Input
                                value={values.sufficientFactToJustfyExemptionForClaim12A_13}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.sufficientFactToJustfyExemptionForClaim12A_13 && errors.sufficientFactToJustfyExemptionForClaim12A_13)}
                                name="sufficientFactToJustfyExemptionForClaim12A_13"
                                    style={{
                                        border: " 1px solid #d9d9d9 ",
                                        padding: " 0 10px",
                                        color: "#7e7e7e",
                                        fontStyle: "italic",
                                        height: "8rem",
                                        width: "100%",
                                    }}
                                   
                                   
                                />
                                 <p className="error">{errors.sufficientFactToJustfyExemptionForClaim12A_13}</p>
              

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