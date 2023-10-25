import React, { useState } from 'react';
import {jsPDF} from "jspdf"
import html2canvas from "html2canvas";
import Form2 from '../../form2';
import form1 from "../../../src/form1";

import {

    Typography,

    Button,
} from '@mui/material';

import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';

import { useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


export default function Term() {
    //States
    const history=useNavigate()
    const pdfRef = useRef(null);
    const pdfRefnew = useRef(null);
    const [notView , setNotView] = useState(false);
    const exportPDF = () => {
        // const id = formData.id;
        
        // var name = document.getElementById('name');
        // console.log("Abhay",name)
        // const element = document.getElementById(id);
        // console.log(element)
        // const input = pdfRef.current;
        let htmlString = form1;
        // let htmlString =  "<!DOCTYPE html><html><body><p><b>This text is bold</b></p><p><i>This text is italic</i></p><p>This is<sub> subscript</sub> and <sup>superscript</sup></p></body></html>";

    let iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    let iframedoc = iframe.contentDocument ;
    if(iframedoc){
        iframedoc.body.innerHTML = htmlString;
        html2canvas(iframedoc.body, {}).then((canvas) => {
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            heightLeft -= pageHeight;
            const doc = new jsPDF("p", "mm");
            doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(
                canvas,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight,
                "",
                "FAST"
              );
              heightLeft -= pageHeight;
            }
            doc.save("Downld.pdf");
          });
    }else{
        console.log("not Found")
      }
    
        // if (input) {
          // Use html2canvas to capture the content as an image
          
        // } else {
        //   console.error("Element with id 'WECI' not found.");
        // }
      }; 

    // const exportPDF = () => {
    //     const content = pdfRef.current;
    
    //     if (content !== null) {
    //         const doc = new jsPDF();
    //         doc.html(content, {
    //             callback: function (pdf) {
    //                 pdf.save('sample.pdf');
    //             }
    //         });
    //     } else {
    //         console.error("pdfRef.current is null. Ensure it points to the content you want to export to a PDF.");
    //     }
    // };
    
    return (
        <section  className="inner_content" style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}>
            {/* <iframe src={form1}></iframe> */}
            
        {/* {notView ? (<div ref={pdfRef} dangerouslySetInnerHTML={{__html: form1}} />):""} */}

            <Form2 pdfRef={pdfRef}/>

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
    onClick={()=>{
        exportPDF()
    }}
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
