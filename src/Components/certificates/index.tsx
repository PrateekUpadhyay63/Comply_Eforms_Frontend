import React from 'react';
import { useState }  from "react";
import "./index.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Info from '@mui/icons-material/Info';
import {Tooltip,Paper,
  Link,} from "@mui/material";
import Form from "../reusables/Formguide"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Certificates(props:any) {
const history = useNavigate()
const clickInfo = () => {
    alert(
      'Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this'
    );
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedCard, setSelectedCard] = useState("");
  type ComponentPaths = {
    [key: string]: string;
  };
  const handleCardSelect = (cardId:any) => {
    setSelectedCard(cardId);
  };
  const [toolInfo, setToolInfo] = useState("");
  const [InfoMore, setInfoMore] = useState("");
  const redirectToComponent = (cardId: string) => {
   
    const componentPaths: ComponentPaths = {
      'W-9': '/W9',
      'W-8BEN': '/W-8BEN/Declaration',
      'W-8ECI':'/W-8ECI/Info'
     
    };

    if (componentPaths.hasOwnProperty(cardId)) {
      history(componentPaths[cardId]);
    }
  };

  const cards = [
    { id: 'W-9', title: 'W-9', description: 'Used by individuals and entities to certify US Tax ID number' },
    { id: 'W-8BEN', title: 'W-8BEN', description: 'Used by individuals to certify beneficial owner, or account holder of financial institution, and claim treaty benefits' },
    { id: 'W-8BEN-E', title: 'W-8BEN-E', description: 'Used by entities to certify beneficial owner, or account holder of financial institution, and claim treaty benefits' },
    { id: 'W-8ECI', title: 'W-8ECI', description: 'Used by individuals, or entities, to certify beneficial owner receiving U.S. sourced income that is effectively connected with a U.S. trade or business ' },
    { id: 'W-8EXP', title: 'W-8EXP', description: 'Used by governments, or other tax exempt entities, to certify beneficial owner, or account holder of financial institution' },
    { id: 'W-8IMY', title: 'W-8IMY', description: 'Used by entities to certify intermediary, or flow through entity, receiving payments on behalf of another person' },
    { id: 'form 8233', title: 'Form 8233', description: 'Used by individuals to certify beneficial owner claiming treaty exemption on compensation for personal services' },
 
  ];

  return (

    <section className="inner_content" style={{ backgroundColor: '#0c3d69',marginBottom:'10px' }}>
      <div style={{padding:"17px"}}>
      {InfoMore === "basic" ? (<div>
              <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                <Typography>
                Certificate Selection for U.S. Tax Purposes
                </Typography>
                <Typography style={{ marginTop: "10px" }}>
                Select the most appropriate withholding certificate for your status and click Continue.
                </Typography>
                <Typography style={{ marginTop: "20px" }}>

                  
Based on details entered on the previous page, certain form selections which may not be applicable have been greyed out. If you believe a form should be available for your completion, press the Back button and revisit your details entered on the Account Holder Details page.
                </Typography>


                <Typography style={{ marginTop: "20px" }}>

                If you are uncertain which withholding certificate is correct, refer to the Read More link on each form and/or the Form Guide in the upper right-hand corner.
                </Typography>
               
                <Typography style={{ marginTop: "20px" }}>EH022</Typography>

                <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
              </Paper>

            </div>) : ""}
            <div style={{justifyContent:'space-between',display:"flex"}}>
            <Typography align="left"
      style={{ fontSize: '34px', fontWeight: '500', color:'white' ,marginLeft:"10px"}}
    >
     Certificate Selection for U.S. Tax Purposes 
     <span>
                <Tooltip style={{ backgroundColor: "black", color: "white" }} title={
                  <>
                    <Typography color="inherit">Certificate Selection</Typography>
                    <a onClick={() => setToolInfo("basic")}>
                      <Typography style={{ cursor: "pointer", textDecorationLine: "underline" }} align="center" > View More...</Typography>
                    </a>
                  </>
                }>
                  <Info
                    style={{
                      color: '#ffc107',
                      fontSize: '20px',
                      cursor: 'pointer',
                      verticalAlign: "super"
                    }}

                  />
                </Tooltip>
              </span>
    </Typography >
   
    <Typography align='right'>
        <Button  onClick={() => {
          history("/form")
                  // setOpen(true);
                  
                }} style={{backgroundColor:'#ffc107',color:'black',fontSize:"10px",fontWeight:'550'}}>Form Guide</Button>
    </Typography>
            </div>
            {toolInfo === "basic" ? (<div>
              <Paper style={{ backgroundColor: "#dedcb1", padding: '15px', marginBottom: "10px" }}>
                <Typography>
                Certificate Selection for U.S. Tax Purposes
                </Typography>
                <Typography style={{ marginTop: "10px" }}>
                Select the most appropriate withholding certificate for your status and click Continue.
                </Typography>
                <Typography style={{ marginTop: "20px" }}>

                  
Based on details entered on the previous page, certain form selections which may not be applicable have been greyed out. If you believe a form should be available for your completion, press the Back button and revisit your details entered on the Account Holder Details page.
                </Typography>


                <Typography style={{ marginTop: "20px" }}>

                If you are uncertain which withholding certificate is correct, refer to the Read More link on each form and/or the Form Guide in the upper right-hand corner.
                </Typography>
               
                <Typography style={{ marginTop: "20px" }}>EH022</Typography>

                <Link href="#" underline="none" style={{ marginTop: "10px", fontSize: "16px" }} onClick={() => { setToolInfo("") }}>--Show Less--</Link>
              </Paper>

            </div>) : ""}
        
    <div className='d-flex row'>
    {cards.map((card) => (
    <Card 
     key={card.id}
    className="mx-3 mt-3"
    sx={{
      width: '310px',
      border: selectedCard === card.id ? '7px solid #ffc107' : '2px solid transparent',
    }}
    onClick={() => handleCardSelect(card.id)}>
      <CardContent>
       
        <Typography align='center' variant="h5" component="div">
        {card.title}
        </Typography>
       
        <Typography align='center'  style={{fontSize:"13px",marginTop:"14px"}}>
        {card.description}
          <br />
         
        </Typography>
       <Typography align='center' >
       <Button  className="mt-4"size="small" style={{fontWeight:"bold"}} >Read More</Button>
       </Typography>
      </CardContent>
      
    </Card>
))}

    {/* <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
          W-8BEN
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by individuals to certify beneficial owner, or account holder of financial institution, and claim treaty benefits
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
        W-8BEN-E
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by entities to certify beneficial owner, or account holder of financial institution, and claim treaty benefits
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         W-8ECI
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by individuals, or entities, to certify beneficial owner receiving U.S. sourced income that is effectively connected with a U.S. trade or business 
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
          W-8EXP
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by governments, or other tax exempt entities, to certify beneficial owner, or account holder of financial institution
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
      
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         W-8IMY
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by entities to certify intermediary, or flow through entity, receiving payments on behalf of another person
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         form 8233
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}> 
       Used by individuals to certify beneficial owner claiming treaty exemption on compensation for personal services
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card> */}

    {selectedCard ? (
                  <div style={{marginTop:"20px"}}className="text-center" >
                  <Button
                  style={{ fontSize: '16px',marginTop:"35px" }}
                  size="medium"
                  type="submit"
                  onClick={() => redirectToComponent(selectedCard)}
                  variant="contained"
                  // onClick={()=>(
                  //   history("/W9")
                  // )}
                >
                  Continue
                </Button>

                  </div>
                ) : (
                  <div style={{marginTop:"20px"}} className="text-center ">
                    <Button
                      type="submit"
                     
                      style={{
                        marginTop:"35px",
                        border: '1px solid #0095dd',
                        backgroundColor: '#D2D2D4',
                        borderColor: '#d2d2d2',
                        color: '#4a4a4a',
                        height: '45px',
                        lineHeight: 'normal',
                        textAlign: 'center',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        borderRadius: '0px',

                        padding: '0 35px',
                        letterSpacing: '1px',
                      }}
                     
                    >
                      Continue
                    </Button>
                  </div>
                )}
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
        <Button variant="contained" size="large"  style={{ color: "white", backgroundColor: "black", marginTop: "10px" ,marginBottom:'20px'}}>
         <span style={{marginRight:"5px"}}> <ArrowBackIcon/></span> Back
        </Button>
        </Typography>
        </div>
    </div>

  <Form
  open={open} 
  setOpen={setOpen}
  handleClickOpen={handleClickOpen}
  handleClose={handleClose}
/>
   
    </section>

  );

}