import { Fragment, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { toast,ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@mui/material/Input";
import { ContentCopy } from "@mui/icons-material";
import { AppDispatch } from "../../Redux/store";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Select, Button, Typography, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import {
  getSecurityQuestions,
  postFormSelection,
  postSecurityCode,
} from "../../Redux/Actions";
import { Formik, Form } from "formik";
import { securitySchema } from "../../schemas";

const DialogEdit = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useNavigate();
  const { open, setOpen } = props;
  const postSecurityCodeData = useSelector(
    (state: any) => state.postSecurityCodeReducer.postSecurutyCodeData
  );
  const getSecurityQuestionsReducer = useSelector(
    (state: any) => state.getSecurityQuestionsReducer.getSecurityQuestionsData
  );
  var QuestionObject;
  const [payload, setPayload] = useState({
    confirmationCode: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  var initialValues = {
    confirmationCode: payload.confirmationCode,
    securityQuestion: "",
    securityQuestionId: 0,
    securityAnswer: "",
  };

  useEffect(() => {
    dispatch(postSecurityCode(() => console.log("hi")));
    dispatch(getSecurityQuestions());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(payload.confirmationCode);
    toast.success("Code copied to clipboard!",{
      autoClose: 2000
    })
    
  };
  useEffect(() => {
    setPayload({ ...payload, confirmationCode: postSecurityCodeData });
  }, [postSecurityCodeData]);
  return (
    <Fragment>
      <section
        className="inner_content"
        style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
      >
        <div style={{ padding: "25px" }}>
          <Paper style={{ padding: "22px" }}>
            <Formik
              initialValues={initialValues}
              enableReinitialize
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                
                QuestionObject = getSecurityQuestionsReducer.find((item: any) => item.id == values.securityQuestion);
                console.log(QuestionObject,"gdsvgh",values.securityQuestion)
                let submitData = {
                  agentId: 3,
                  confirmationCode: values.confirmationCode,
                  securityAnswer: values.securityAnswer,
                  formSelection: "",
                  securityQuestionId: values.securityQuestion,
                  securityQuestion: QuestionObject,
                  
                };
                history("/Certificates");
                localStorage.setItem("formSelection", JSON.stringify(submitData));
                // dispatch(
                //   postFormSelection(submitData, () => {
                //     history("/Certificates");
                //   })
                // );
              }}
              validationSchema={securitySchema}
            >
              {({
                errors,
                touched,
                handleBlur,
                values,
                handleSubmit,
                handleChange,
                isSubmitting,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Typography
                    className="my-2"
                    align="left"
                    style={{
                      fontSize: "25px",
                      color: "#04506e",
                      fontWeight: "550",
                    }}
                  >
                    Temporary Electronic Signature Confirmation Code
                  </Typography>

                  <Divider style={{ background: "black" }} />

                  <Typography
                    align="left"
                    className="mt-3"
                    style={{ fontSize: "15px", color: "#383a3b" }}
                  >
                    Please note, you will be required to enter your Confirmation
                    Code into the corresponding box at the very end of this
                    electronic form submission.
                  </Typography>
                  <div className="row col-10 d-flex mt-3">
                    <Typography className="col-3">
                      <Typography
                        style={{
                          fontSize: "20px",
                          color: "black",
                          marginTop: "8px",
                        }}
                      >
                        Your Confirmation Code:
                      </Typography>
                    </Typography>

                    <Typography className="col-5">
                      <TextField
                        fullWidth
                        size="small"
                        name="code"
                        value={values.confirmationCode}
                        disabled
                      />
                    </Typography>
                    <Typography className="col-1">
                      <ContentCopy
                       onClick={handleCopyClick}
                        // onClick={() => {
                        //   navigator.clipboard.writeText(
                        //     payload.confirmationCode
                        //   );
                        // }}
                        style={{ fontSize: "18px", marginTop: "5px" }}
                      />
                    </Typography>
                    <ToastContainer />
                  </div>

                  <Typography
                    align="left"
                    className="mt-3"
                    style={{ fontSize: "15px", color: "#383a3b" }}
                  >
                    To help you recover this Confirmation Code should you forget
                    it, please select a question from the dropdown below and
                    enter an answer to that question in the box to the right.
                  </Typography>
                  <Typography
                    align="left"
                    className="mt-2"
                    style={{ fontSize: "15px", color: "#383a3b" }}
                  >
                    To re-show the Confirmation Code, you will need to enter
                    this word later.
                  </Typography>

                  <div className="row col-12 d-flex mt-2">
                    <Typography className="col-5 ">
                      <select
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                        name="securityQuestion"
                        id="countryId"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        value={values.securityQuestion}
                      >
                        <option value="">-Select-</option>
                        {getSecurityQuestionsReducer?.map((ele: any) => (
                          <option key={ele?.id} value={ele?.id}>
                            {ele?.question}
                          </option>
                        ))}
                      </select>
                      <p className="error">{errors.securityQuestion}</p>
                    </Typography>
                    <Typography className="col-7 ">
                      <Input
                        fullWidth
                        type="text"
                        name="securityAnswer"
                        value={values.securityAnswer}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // error={Boolean(
                        //   touched.securityAnswer && errors.securityAnswer
                        // )}
                        style={{
                          border: " 1px solid #d9d9d9 ",
                          padding: " 0 10px",
                          color: "#7e7e7e",
                          fontStyle: "italic",
                          height: "50px",
                          width: "100%",
                        }}
                      />
 <p className="error">{errors.securityAnswer}</p>
                     
                      <Typography
                        className=" mt-2"
                        style={{
                          fontSize: "12px",
                          color: "black",
                          fontWeight: "550",
                        }}
                      >
                       
                        Please note: This word is case sensitive
                      </Typography>
                    </Typography>
                  </div>

                  <Typography align="center" style={{ marginTop: "4rem" }}>
                    <Button
                      style={{ fontSize: "18px" }}
                      size="small"
                      type="submit"
                      variant="contained"
                    >
                      OK
                    </Button>
                  </Typography>
                </Form>
              )}
            </Formik>
          </Paper>
        </div>
      </section>
    </Fragment>
  );
};

export default DialogEdit;
