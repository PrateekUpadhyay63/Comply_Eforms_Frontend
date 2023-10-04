import { Fragment,useEffect } from 'react';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import {ContentCopy} from '@mui/icons-material';
import { AppDispatch } from "../../Redux/store";
import DialogContentText from '@mui/material/DialogContentText';
import React from 'react';
import { useNavigate } from "react-router-dom"
import { TextField, Select, Button, Typography,Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from "react-redux";
import { postSecurityCode } from '../../Redux/Actions';

const DialogEdit = (props:any) => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useNavigate()
  const { open, setOpen } = props;
  const postSecurityCodeData = useSelector(
    (state: any) => state.postSecurityCodeReducer
  );

  useEffect(() => {
    dispatch(postSecurityCode(()=>console.log("hi")));
  }, []);
  
  const handleClose = () => {
    setOpen(false);
  };
console.log(postSecurityCodeData,"postSecurityCodeData")
  return (
    <Fragment>
    <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>
    <div style={{padding:"25px"}}>
    <Paper style={{padding:"22px"}}>
     
                <Typography
                className='my-2'
                  align="left"
                  style={{ fontSize: '25px', color: '#04506e',fontWeight:"550" }}
                >
                  Temporary Electronic Signature Confirmation Code
                </Typography>
            
              <Divider style={{ background: 'black' }} />

              <Typography
                align="left"
                className="mt-3"
                style={{ fontSize: '15px', color: '#383a3b' }}
              >
                Please note, you will be required to enter your Confirmation
                Code into the corresponding box at the very end of this
                electronic form submission.
              </Typography>
              <div className="row col-10 d-flex mt-3">
                <Typography className="col-3">
                  <Typography
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      marginTop: '8px',
                    }}
                  >
                    Your Confirmation Code:
                  </Typography>
                </Typography>

                <Typography className="col-5">
                  <TextField
                    fullWidth
                    size="small"
                    name="description"
                    
                  />
                </Typography>
                <Typography className="col-1">
                  <ContentCopy
                    style={{ fontSize: '18px', marginTop: '5px' }}
                  />
                </Typography>
              </div>

              <Typography
                align="left"
                className="mt-3"
                style={{ fontSize: '15px', color: '#383a3b' }}
              >
                To help you recover this Confirmation Code should you forget it,
                please select a question from the dropdown below and enter an
                answer to that question in the box to the right.
              </Typography>
              <Typography
                align="left"
                className="mt-2"
                style={{ fontSize: '15px', color: '#383a3b' }}
              >
                To re-show the Confirmation Code, you will need to enter this
                word later.
              </Typography>

              <div className="row col-12 d-flex mt-2">
                <Typography className="col-5 ">
                  <Select
                    style={{ width: '90%', height: '38px', marginTop: '3px' }}
                  ></Select>
                </Typography>
                <Typography className="col-7 ">
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter Security Word"
                   
                  />
                  <Typography
                    className=" mt-2"
                    style={{
                      fontSize: '12px',
                      color: 'black',
                      fontWeight: '550',
                    }}
                  >
                    Please note: This word is case sensitive
                  </Typography>
                </Typography>
              </div>

              <Typography align="center" style={{ marginTop: "4rem" }}>
                <Button
                  style={{ fontSize: '18px' }}
                  size="small"
                  type="submit"
                  onClick={()=>(
                    history("/Certificates")
                  )}
                  variant="contained"
                >
                  OK
                </Button>
              </Typography>
    </Paper>
</div>
</section>
           
    </Fragment>
  );
};

export default DialogEdit;
