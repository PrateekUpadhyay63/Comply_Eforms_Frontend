import { Fragment ,useState} from 'react';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import Paper from '@mui/material/Paper';


import DialogContentText from '@mui/material/DialogContentText';
import React from 'react';

import {  Button, Typography,RadioGroup,
    Radio,FormControlLabel,FormControl } from '@mui/material';

const Form = (props:any) => {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const [Intermediary,setIntermediary] = useState<string>('');
  const handleIntermediaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntermediary(event.target.value);
  };


  const [Reverse,setReverse] = useState<string>('');
  const handleReverseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReverse(event.target.value);
  };

  const [Hybrid,setHybrid] = useState<string>('');
  const handleHybridChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHybrid(event.target.value);
  };
  const [Tin,setTin] = useState<string>('');
  const handleTinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTin(event.target.value);
  };

  const [Trust,setTrust] = useState<string>('');
  const handleTrustChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrust(event.target.value);
  };

  const [Result,setResult] = useState<string>('');
  const handleResultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResult(event.target.value);
  };


  return (
    <Fragment>
    
           <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>



<div className="container-fluid">


    <div className="col-lg-12 mt-20" style={{ padding: "18px"}}>
    <Paper elevation={6} style={{ padding: '17px' ,marginTop:"20px",}}>
           
                <Typography
                  align="left"
                  style={{ fontSize: '23px', color: '#04506e' }}
                >
                  Forms Selection Guide
                </Typography>
              
              

          <Paper elevation={3} style={{ padding: '17px',backgroundColor:'#d4d9d4' }}> 
              <Typography
                align="center"
                className="mt-3"
                style={{ fontSize: '20px' }}
              >
               Determination of Intermediary Status
 
              </Typography>
             

              <Typography
                align="left"
                className="mt-3"
                style={{ fontSize: '16px', color: '#383a3b' }}
              >
               Are you an Intermediary or acting in the capacity of a flow-through where you may need to supply additional U.S. tax certification on behalf of your clients or the underlying beneficial owners?
              </Typography>
             <Typography className='mt-2'>
             An intermediary is any person that acts as a custodian, broker, nominee, or otherwise as an agent for another person, regardless of whether that other person is the beneficial owner of the amount paid (or to be paid), a flow-through entity, or another intermediary.
             </Typography>

             <FormControl >

<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  value={Intermediary}
  onChange={handleIntermediaryChange}

>
  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
  <FormControlLabel className="label" value="No" control={<Radio />} label="No" />

</RadioGroup>


</FormControl>
{Intermediary === "Yes" ?(
    <>
    <Typography align="center"
                className="mt-3"
                style={{ fontSize: '20px', color: '#383a3b' }}>
    Hybrid Entity
    </Typography>
    <Typography align="left"
                className="mt-3"
                style={{ fontSize: '16px', color: '#383a3b' }}>
        
Are you submitting a certificate claiming treaty benefits for or on behalf of a Hybrid entity?
    </Typography>
    <Typography  align="left"
                className="mt-3"
                style={{ fontSize: '16px', color: '#383a3b' }}>
    A hybrid entity is any person (other than an individual) that is treated as fiscally transparent in the U.S., but is not treated as fiscally transparent by a country with which the U.S. has an income tax treaty. Hybrid status is relevant for claiming treaty benefits.
    </Typography>
    <Typography align="left"
                className="mt-3"
                style={{ fontSize: '16px', color: '#383a3b' }}>
        
Fiscally transparent entity. An entity is considered fiscally transparent if the interest holders are required to separately take into account their share of the entity’s income on a current basis, whether or not the income has been distributed.  Also, the character and source of the income must be determined as if the income had been realized by the interest holders directly from the source. 
    </Typography>
    <FormControl >

<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  value={Hybrid}
  onChange={handleHybridChange}

>
  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
  <FormControlLabel className="label" value="No" control={<Radio />} label="No" />

</RadioGroup>


</FormControl>

{Hybrid === "Yes" ?(
    <>
    <Typography align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
    Reverse Hybrid
    </Typography>

    <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
    Are you submitting a certificate to claim treaty benefits for a Reverse Hybrid entity transmitting beneficial owner documentation provided by the interest holders to claim benefits on their behalf?
    </Typography>

    <Typography  align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
        
A Reverse Hybrid entity is any Person (other than an individual) that is not fiscally transparent under U.S. tax law principles, but that is fiscally transparent under the laws of a jurisdiction with which the United States has an income tax treaty.
    </Typography>

    <Typography>
    Fiscally transparent entity. An entity is treated as fiscally transparent with respect to an item of income for which treaty benefits are claimed to the extent that the interest holders in the entity must, on a current basis, take into account separately their shares of an item of income paid to the entity whether or not distributed and must determine the character of the items of income as if they were realized directly from the sources from which realized by the entity. 
    </Typography>
    <FormControl >

<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  value={Reverse}
  onChange={handleReverseChange}

>
  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
  <FormControlLabel className="label" value="No" control={<Radio />} label="No" />

</RadioGroup>


</FormControl>

{Reverse === "Yes" ?(
    <>
    <Typography align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
    Form Selection Guide Result
        </Typography>

        <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b',fontWeight:"bold" }}>
        We are not authorized to provide tax advice through this process, but the answers provided suggest you may need to provide a Form W-8IMY. "Certificate of Foreign Intermediary, Foreign Flow-through Entity, or Certain U.S. Branches for United States Tax Withholding".
 
        </Typography>
        <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b'}}>
A valid Form W-IMY and any associated documentation must be provided by: 
        </Typography>

        <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b'}}>
Qualified Intermediaries not acting on their own account representing they will provide withholding statements as required 
        </Typography>

        <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b'}}>
                Nonqualified intermediaries not acting on their own account and if applicable transmit withholding statements, associated certificates or other documentary evidence as required
        </Typography>

        <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b'}}>
                Foreign Partnerships, Foreign Simple or Grantor Trusts to establish that they are non-withholding for purposes of section 1441 and 1442 and to represent that the income is not effectively connected with a U.S. trade or business; and that the form is being used to transmit withholding certificates and associated documentation as required
        </Typography>


        <Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b'}}>

For a detailed explanation of who should submit a form W-8IMY please see the IRS instructions.
        </Typography>

        <Typography align="center"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b',fontWeight:'bold'}}>

If you need further guidance you may wish to contact your local tax advisers.
        </Typography>
    </>
):
<>
<Typography align="center"
    className="mt-3"
    style={{ fontSize: '26px', color: '#383a3b' }}>
        Form Selection Guide Result
        </Typography>

        <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
        We are not authorized to provide tax advice through this process, but the answers provided suggest that you may need to provide a Form W-8BEN-E. A Form W-8BEN-E is "A Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding".
            </Typography>

            <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
            Who should submit a Form W-8BEN-E?
            </Typography>

            <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
                
You must provide a valid Form W-8BEN-E to the withholding agent or payer if submitting a U.S. tax certificate on behalf of a Foreign Person who is the beneficial owner of an amount subject to U.S. tax withholding. Form W-8BEN-E should be provided whether or not you are claiming a reduced rate of, or exemption from withholding.
            </Typography>

            <Typography align="center"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
           If you need further guidance you may wish to contact your local tax advisers.
            </Typography>
            <Typography align="center" style={{ marginTop: '20px' }}>
                <Button
                  style={{ fontSize: '16px' }}
                  size="small"
                  type="submit"
                //   onClick={handleClose}
                  variant="contained"
                >
                  Confirm
                </Button>
              </Typography>
</>
}

    </>
):<>
<>
<Typography align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
Effectively Connected Income 
</Typography>
<Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
    
    Is the income this submission relates to considered to be effectively connected with conduct of a trade or business within the United States?
</Typography>
<Typography  align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
Generally, when a non-U.S. person engages in a trade or business in the United States they should have a U.S. tax identification number (TIN), have a U.S. business or postal address and report income on an annual U.S. income tax information return.
</Typography>
<Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
    
 
    In cases where different types of income are received it may be necessary to complete more than one submission.
</Typography>
<br/>
<Typography  align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
The Form W-8ECI is not considered valid when provided without an appropriate TIN.
</Typography>
<FormControl >

<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  value={Tin}
  onChange={handleTinChange}

>
  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
  <FormControlLabel className="label" value="No" control={<Radio />} label="No" />

</RadioGroup>


</FormControl>

{Tin === "Yes" ?(
    <>
    <Typography align="center"
    className="mt-3"
    style={{ fontSize: '20px', color: '#383a3b' }}>
        Non-U.S. Partnerships or non-U.S. Trusts
    </Typography>
    <FormControl >

    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={Trust}
      onChange={handleTrustChange}
    
    >
      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
      <FormControlLabel className="label" value="No" control={<Radio />} label="No" />
    
    </RadioGroup>
    
    
    </FormControl>


    {Trust === "Yes" ?(
        <>
<Typography align="center"
    className="mt-3"
    style={{ fontSize: '20px', color: '#383a3b' }}>
A Treaty Benefit or Foreign Person Claim
</Typography>
<Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
        Are you making this submission to claim treaty benefits (if applicable) or making the submission only to claim Foreign Person status for U.S. tax purposes?
 

</Typography>
<Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
A Foreign Person in this context includes all non-U.S. persons that could be described as, non-resident alien individuals, foreign (non-U.S.); corporations, partnerships, trusts estates and any other person that is not a U.S. person for U.S. tax purposes whether or not the resident country has an applicable tax treaty with the United States. It also includes a foreign branch or office of a U.S. financial institution or U.S. clearing organization if the foreign branch is a registered as a qualified intermediary.
</Typography>
<FormControl >

    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={Result}
      onChange={handleResultChange}
    
    >
      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
      <FormControlLabel className="label" value="No" control={<Radio />} label="No" />
    
    </RadioGroup>
    
    
    </FormControl>
    {Result ==="Yes" ?(
        <>
        <Typography align="center"
    className="mt-3"
    style={{ fontSize: '26px', color: '#383a3b' }}>
        Form Selection Guide Result
        </Typography>

        <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
        We are not authorized to provide tax advice through this process, but the answers provided suggest that you may need to provide a Form W-8BEN-E. A Form W-8BEN-E is "A Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding".
            </Typography>

            <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
            Who should submit a Form W-8BEN-E?
            </Typography>

            <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
                
You must provide a valid Form W-8BEN-E to the withholding agent or payer if submitting a U.S. tax certificate on behalf of a Foreign Person who is the beneficial owner of an amount subject to U.S. tax withholding. Form W-8BEN-E should be provided whether or not you are claiming a reduced rate of, or exemption from withholding.
            </Typography>

            <Typography align="center"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
           If you need further guidance you may wish to contact your local tax advisers.
            </Typography>
            <Typography align="center" style={{ marginTop: '20px' }}>
                <Button
                  style={{ fontSize: '16px' }}
                  size="small"
                  type="submit"
                //   onClick={handleClose}
                  variant="contained"
                >
                  Confirm
                </Button>
              </Typography>
        </>

    ):""}
        </>
    ):""}
    </>

):""}
</>
</>
}
    </>

):
<>
<Typography align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
Effectively Connected Income 
</Typography>
<Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
    
    Is the income this submission relates to considered to be effectively connected with conduct of a trade or business within the United States?
</Typography>
<Typography  align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
Generally, when a non-U.S. person engages in a trade or business in the United States they should have a U.S. tax identification number (TIN), have a U.S. business or postal address and report income on an annual U.S. income tax information return.
</Typography>
<Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
    
 
    In cases where different types of income are received it may be necessary to complete more than one submission.
</Typography>
<br/>
<Typography  align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
The Form W-8ECI is not considered valid when provided without an appropriate TIN.
</Typography>
<FormControl >

<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  value={Tin}
  onChange={handleTinChange}

>
  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
  <FormControlLabel className="label" value="No" control={<Radio />} label="No" />

</RadioGroup>


</FormControl>

{Tin === "Yes" ?(
    <>
    <Typography align="center"
    className="mt-3"
    style={{ fontSize: '20px', color: '#383a3b' }}>
        Non-U.S. Partnerships or non-U.S. Trusts
    </Typography>
    <FormControl >

    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={Trust}
      onChange={handleTrustChange}
    
    >
      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
      <FormControlLabel className="label" value="No" control={<Radio />} label="No" />
    
    </RadioGroup>
    
    
    </FormControl>


    {Trust === "Yes" ?(
        <>
<Typography align="center"
    className="mt-3"
    style={{ fontSize: '20px', color: '#383a3b' }}>
A Treaty Benefit or Foreign Person Claim
</Typography>
<Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
        Are you making this submission to claim treaty benefits (if applicable) or making the submission only to claim Foreign Person status for U.S. tax purposes?
 

</Typography>
<Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
A Foreign Person in this context includes all non-U.S. persons that could be described as, non-resident alien individuals, foreign (non-U.S.); corporations, partnerships, trusts estates and any other person that is not a U.S. person for U.S. tax purposes whether or not the resident country has an applicable tax treaty with the United States. It also includes a foreign branch or office of a U.S. financial institution or U.S. clearing organization if the foreign branch is a registered as a qualified intermediary.
</Typography>
<FormControl >

    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={Result}
      onChange={handleResultChange}
    
    >
      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
      <FormControlLabel className="label" value="No" control={<Radio />} label="No" />
    
    </RadioGroup>
    
    
    </FormControl>
    {Result ==="Yes" ?(
        <>
        <Typography align="center"
    className="mt-3"
    style={{ fontSize: '26px', color: '#383a3b' }}>
        Form Selection Guide Result
        </Typography>

        <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
        We are not authorized to provide tax advice through this process, but the answers provided suggest that you may need to provide a Form W-8BEN-E. A Form W-8BEN-E is "A Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding".
            </Typography>

            <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
            Who should submit a Form W-8BEN-E?
            </Typography>

            <Typography align="left"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
                
You must provide a valid Form W-8BEN-E to the withholding agent or payer if submitting a U.S. tax certificate on behalf of a Foreign Person who is the beneficial owner of an amount subject to U.S. tax withholding. Form W-8BEN-E should be provided whether or not you are claiming a reduced rate of, or exemption from withholding.
            </Typography>

            <Typography align="center"
    className="mt-3"
    style={{ fontSize: '16px', color: '#383a3b' }}>
           If you need further guidance you may wish to contact your local tax advisers.
            </Typography>
            <Typography align="center" style={{ marginTop: '20px' }}>
                <Button
                  style={{ fontSize: '16px' }}
                  size="small"
                  type="submit"
                //   onClick={handleClose}
                  variant="contained"
                >
                  Confirm
                </Button>
              </Typography>
        </>

    ):""}
        </>
    ):""}
    </>

):
<>
<Typography align="center"
            className="mt-3"
            style={{ fontSize: '20px', color: '#383a3b' }}>
Disregarded Entity
</Typography>
<Typography  align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
Are you making the submission on behalf of a Disregarded Entity for U.S. tax purposes?
</Typography>
<Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
A disregarded entity is defined as a business entity that has a single owner and is not a corporation under Regulations section 301.7701-2(b) is disregarded as an entity separate from its owner.
</Typography>
<Typography align="left"
            className="mt-3"
            style={{ fontSize: '16px', color: '#383a3b' }}>
    
A disregarded entity should not submit a Form W-8BEN to a partnership for purposes of section 1446. Instead the owner of such entity shall provide appropriate documentation. See Regulations section 1.1446-1.
</Typography>
</>
}
</>
}





















</Paper>
             
       
            </Paper>
            </div>
            </div>

</section>
         
    </Fragment>
  );
};

export default Form;