import React from 'react';
import {

    Typography,

    Button,
} from '@mui/material';

import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';


import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


export default function Term() {
    //States
    const history=useNavigate()

    return (
        <section className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>



            <div className="container-fluid">


                <div className="col-lg-12 mt-20" style={{ padding: "18px"}}>
                   
                    <Paper elevation={6} style={{ padding: '17px' ,marginTop:"20px"}}>
                        <Typography align='center' >
                        <DoneIcon style={{color:"green",fontSize:"50px",fontWeight:"bold",justifyContent:"center"}}/>
                        
                        </Typography>
                        <Typography style={{  fontSize: "20px",color:"grey" }} align='center'>Thank you for completing
                           
                        </Typography>
                        <Typography style={{ fontWeight: "550", fontSize: "17px" }} align='center' className='mt-3'>
                        The U.S. Withholding Certification Submission Process
                        </Typography >
                        <Typography align='center' style={{fontSize:"15px",color:"grey"}}>
                        Submitted information has been passed on to our administration team to validate against data on file.
                        </Typography>
                        <Typography align='center' style={{fontSize:"15px",color:"black",fontWeight:'550'}}>
                        You do not need to contact us to confirm delivery.
                        </Typography>
                        <Typography align='center' style={{fontSize:"15px",color:"grey"}}>
                        You will be contacted if additional information is required.
                        </Typography>
                        <Typography align='center' style={{fontSize:"15px",color:"black",marginTop:"15px",fontWeight:"bold",marginBottom:"15px"}}>
                        If you are using a public computer, please clear your cookies.
                        </Typography>
                       
                       
                       
                    </Paper>
                    <Typography align='center'>
                    <div className="mt-5" style={{ justifyContent: "center" }}>

<Button
    type="submit"
    
    style={{
        border: '1px solid #0095dd',
        background: '#0095dd',
        height: '45px',
        lineHeight: 'normal',
        textAlign: 'center',
        fontSize: '16px',
        textTransform: 'uppercase',
        borderRadius: '0px',
        color: '#fff',
        padding: '0 35px',
        letterSpacing: '1px',
    }}
    className="btn btn_submit  btn-primary-agent"
>
    Download PDF
</Button>


<div style={{marginTop:"25px"}}>
<Button
    type="submit"
    onClick={()=>{
        history("/Certificates")
    }}
    
    style={{
        border: '1px solid #0095dd',
        background: "black",
        height: '35px',
        lineHeight: 'normal',
        textAlign: 'center',
        fontSize: '16px',
        marginLeft: '12px',
        textTransform: 'uppercase',
        borderRadius: '0px',
        color: '#ffff',
        padding: '0 35px',
        letterSpacing: '1px',
    }}
    className="btn btn_submit  btn-primary-agent"
>
    Exit
</Button>
</div>

</div>
                    </Typography>
 
                </div>



            </div>
            <div className="container-fluid">
                <footer>
                    <div className="row mx-1">

                        <Typography className="mx-2" align="left" style={{ marginBottom: '10px', color: 'white', fontSize: "12px" }}>
                            © Comply Exchange Ltd.2023 - Version: 2.2.0.29 - Render Time:8.6691538s
                        </Typography>


                        <div className="col-12 col-sm-8 col-md-6 col-lg-6 footer_nav">
                            <ul className="nav inner_header_right"></ul>
                        </div>
                    </div>
                </footer>
            </div>

        </section>
    );
}
