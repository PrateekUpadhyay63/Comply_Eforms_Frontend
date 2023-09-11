import React,{useState} from "react";
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
  Link,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { ExpandMore, Info } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { secondStepSchema } from "../../../../schemas";

export default function Backup_witholding(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;
  const initialValue={
    isExemptionfromBackup:""
  }

  const [toolInfo, setToolInfo] = useState("");
  return (
    <>
   <Paper className="col-md-9 col-8">

    <Formik
                initialValues={initialValue}
                enableReinitialize
                validationSchema={secondStepSchema}       // Uncomment after testing ,this is validation Schema
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  console.log(values, ":STEP2 VALUES");
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: true,
                    step4: false,
                    step5: false,
                    step6: false,
          step7: false,
          step8: false,
                  });
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
      
      <div style={{ margin: "10px" }}>
        <Typography
          align="left"
          style={{ color: "black", fontSize: "20px", fontWeight: "550" }}
        >
          Exemption from Backup Withholding for U.S. Business & Organizations{" "}
          <span style={{ color: "red" }}>*</span>
          <span>
          <Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                            <>
                              <Typography color="inherit">Exemptions - Backup Withholding</Typography>
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
                          </Tooltip>
          </span>

        </Typography>

        {toolInfo === "basic" ? (<div>
                          <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                            <Typography>
                            What is backup withholding?
                            </Typography>
                            <Typography style={{ marginTop: "10px" }}>
                            Persons making certain payments to you must under certain conditions withhold and pay to the IRS a percentage of such payments. This is called 'Backup Withholding.' Payments that may be subject to backup withholding include interest, tax-exempt interest, dividends, broker and barter exchange transactions, rents, royalties, non employee pay, payments made in settlement of payment card and third party network transactions, and certain payments from fishing boat operators. Real estate transactions are not subject to backup withholding.
                            </Typography>
                           <Typography style={{ marginTop: "20px" }}>
                           You will not be subject to backup withholding on payments you receive if you give the requester your correct TIN, make the proper certifications, and report all your taxable interest and dividends on your tax return.
                           </Typography>
<Typography style={{ marginTop: "20px" }}>Ref: EH160</Typography>

                            <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                          </Paper>

                        </div>) : ""}
        <Typography
          align="left"
          style={{ fontSize: "13px", marginTop: "10px" }}
        >
          Generally, individuals (including sole proprietors) are not exempt
          from backup withholding.
        </Typography>
        <Typography
          align="left"
          style={{
            fontSize: "13px",
            fontWeight: "550",
            marginTop: "20px",
          }}
        >
          Is the business or organization you are making this submission for
          exempt from backup withholding?{" "}
          <span style={{ color: "red" }}>*</span>
          <span>
          <Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                            <>
                              <Typography color="inherit">Backup withholding details</Typography>
                              <a onClick={() => setToolInfo("backup")}>
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
                          </Tooltip>
          </span>
        </Typography>
        {toolInfo === "backup" ? (<div>
                          <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                            <Typography style={{fontWeight:"bold"}}>
                            --What is backup withholding?--
                            </Typography>
                            <Typography >
                            When it applies, backup withholding requires a payer to withhold tax from payments not otherwise subject to withholding. You may be subject to backup withholding if you fail to provide a correct taxpayer identification number (TIN) when required or if you fail to report interest, dividend, or patronage dividend income. Payments generally are not subject to any backup withholding imposed by the IRS, but backup withholding may be mandatory in certain circumstances.
                            </Typography>
                           <Typography style={{ marginTop: "20px",fontWeight:"bold"}}>
                           --When does the IRS require backup withholding?--
                           </Typography>
                           <Typography>
                           The IRS requires us to implement backup withholding at a flat 24% rate in the following cases:</Typography>
<Typography>- If a customer doesn't provide their TIN in the required manner</Typography>
<Typography>- If the IRS notifies us that a provided TIN is incorrect</Typography>
 
<Typography>
- If the IRS notifies us to start withholding on interest or dividends because the Customer has underreported interest or dividends on their income tax returns (only after the IRS has mailed the Customer 4 notices)
</Typography>
<Typography>
- If an Customer fails to certify that they are not subject to backup withholding for underreporting of interest and dividends
</Typography>

<Typography  style={{marginTop:'30px',fontWeight:"bold"}}>
--Who is exempt from backup withholding?--
</Typography>
<Typography >
Certain payees and payments are exempt from backup withholding. They can include tax-exempt organizations, government agencies, corporations (for certain payments), and other listed entities. You can learn more about exemption codes in the instructions for 'Line 4' contained in the IRS's <Link> PDF version of Form W-9</Link>
</Typography>
<Typography style={{marginTop:'30px',fontWeight:"bold"}}>
IRS Form Guidance:
</Typography>
<Typography style={{marginTop:'30px'}}>What is backup withholding?</Typography>
<Typography style={{marginTop:'10px'}}>
  
Persons making certain payments to you must under certain conditions withhold and pay to the IRS 24% of such payments. This is called 'backup withholding.' Payments that may be subject to backup withholding include interest, tax-exempt interest, dividends, broker and barter exchange transactions, rents, royalties, nonemployee pay, payments made in settlement of payment card and third party network transactions, and certain payments from fishing boat operators. Real estate transactions are not subject to backup withholding.
</Typography>
<Typography style={{marginTop:'10px'}}>
You will not be subject to backup withholding on payments you receive if you give the requester your correct TIN, make the proper certifications, and report all your taxable interest and dividends on your tax return.
 
</Typography>

<Typography style={{marginTop:'10px'}}>
Payments you receive will be subject to backup withholding if:
  </Typography>
  <Typography>
  - You do not furnish your TIN to the requester,
  </Typography>
  <Typography>
  - You do not certify your TIN when required (see the instructions for Part II for details),
  </Typography>
  <Typography>
  - The IRS tells the requester that you furnished an incorrect TIN,
  </Typography>
 
  <Typography>
  - The IRS tells you that you are subject to backup withholding because you did not report all your interest and dividends
      on your tax return (for reportable interest and dividends only), or
  </Typography>
  <Typography>
  - You do not certify to the requester that you are not subject to backup withholding under 4 above (for reportable
      interest and dividend accounts opened after 1983 only).
  </Typography>
  <Typography style={{marginTop:"30px"}}>
  See Exempt payee code, later, and the separate instructions for the Requester of Form W-9 for more information.
  </Typography>
  <Typography>

  </Typography>

<Typography style={{ marginTop: "20px" }}>Ref: EH160</Typography>

                            <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
                          </Paper>

                        </div>) : ""}


        <div style={{ marginTop: "20px", justifyContent: "center" }}>
          <FormControl  error={Boolean(touched.isExemptionfromBackup && errors.isExemptionfromBackup)}>
          <RadioGroup
          id="isExemptionfromBackup"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            value={values.isExemptionfromBackup}
            onChange={handleChange}
           
          >
            <FormControlLabel  control={<Radio />} value="Yes" name="isExemptionfromBackup" label="Yes" />
            <FormControlLabel control={<Radio />} value="No" name="isExemptionfromBackup" label="No" />
            <FormControlLabel
              
              control={<Radio />}
              label="Don't know"
              value="Don't" name="isExemptionfromBackup"
            />
          </RadioGroup>
          </FormControl>
        </div>
        <Paper style={{ backgroundColor: "#adadac", }}>
          <Typography
            style={{
              padding: "12px",
              justifyContent: "center",
              fontSize: "13px",
              verticalAlign:"middle"
            }}
          >
            If you are not sure please refer to the help available or select "Don't Know" where you will be guided through a series of questions to help you determine based on you expected income type.

          </Typography>
        </Paper>
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
        <Button variant="contained" style={{ color: "white" ,marginLeft:"10px"}}>
          View Form
        </Button>
        <Button
        type="submit"
          onClick={() => {
            setselectedContinue({
              step1: false,
              step2: false,
              step3: true,
              step4: false,
              step5: false,
              step6: false,
          step7: false,
          step8: false,
            });
            // setOpen(true);
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
          onClick={() => {
            setselectedContinue({
              step1: false,
              step2: true,
              step3: false,
              step4: false,
              step5: false,
              step6: false,
              step7: false,
              step8: false,
            });
            // setOpen(true);
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
    </Paper>
    </>
  );
}
