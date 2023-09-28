import React, { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Paper,
  Select,
  MenuItem,
  Tooltip,
  Link,
} from "@mui/material";
import {  Info, DeleteOutline } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

export default function Tin(props: any) {
  const [incomeArr, setIncomeArr] = useState<string[]>([]);
  const initialValue = {
    usTin: "",
    usTinTypeId: "",
    foreignTINCountry: "",
    foreignTIN: "",
    isFTINLegally: "",
    isNotAvailable: "",
    alternativeTINFormat: "",
    isExplanationNotLegallyFTIN: "",
  };
  const addIncomeType = () => {
    setIncomeArr([...incomeArr, ""]);
  };

  const history = useNavigate();
  const [tax, setTax] = useState<string>("");

  const [submit, setSubmit] = useState<string>("1");

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSubmit = event.target.value;
    setSubmit(selectedSubmit);
  };
  const handleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value);
  };

  const [toolInfo, setToolInfo] = useState("");
  return (
    <>
      <Formik
        initialValues={initialValue}
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
            <section
              className="inner_content"
              style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
            >
              <div style={{ padding: "20px" }}>
                <Paper style={{ padding: "18px" }}>
                  <Typography
                    align="left"
                    style={{
                      margin: "10px",
                      fontSize: "33px",
                      fontWeight: "550",
                    }}
                  >
                    Attach Supporting Documentation
                    <span>
                      <Tooltip
                        style={{ backgroundColor: "black", color: "white" }}
                        title={
                          <>
                            <Typography color="inherit">
                              8233 Supporting Documentation
                            </Typography>
                            <a onClick={() => setToolInfo("basic")}>
                              <Typography
                                style={{
                                  cursor: "pointer",
                                  textDecorationLine: "underline",
                                }}
                                align="center"
                              >
                                {" "}
                                View More...
                              </Typography>
                            </a>
                          </>
                        }
                      >
                        <Info
                          style={{
                            color: "#ffc107",
                            fontSize: "16px",
                            cursor: "pointer",
                            verticalAlign: "super",
                          }}
                        />
                      </Tooltip>
                    </span>
                  </Typography>
                  {toolInfo === "basic" ? (
                    <div>
                      <Paper
                        style={{
                          backgroundColor: "#dedcb1",
                          padding: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography>
                          8233 Attach Supporting Documentation
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          8233 Attach Supporting Documentation
                        </Typography>

                        <Link
                          href="#"
                          underline="none"
                          style={{ marginTop: "10px", fontSize: "16px" }}
                          onClick={() => {
                            setToolInfo("");
                          }}
                        >
                          --Show Less--
                        </Link>
                      </Paper>
                    </div>
                  ) : (
                    ""
                  )}

                  <Typography
                    align="left"
                    style={{ margin: "10px", fontSize: "20px" }}
                  >
                    There are no mandatory documents required for this
                    submission
                  </Typography>

                  <Typography
                    style={{
                      margin: "10px",
                      fontSize: "33px",
                      fontWeight: "550",
                    }}
                  >
                    Add Additional Documentation
                  </Typography>

                  <div
                    style={{
                      margin: "10px",
                      display: "flex",
                      marginTop: "25px",
                      justifyContent: "space-between",
                    }}
                    className="row col-12"
                  >
                    <div className="col-4">
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
                      <Select
                        //   onChange={handleFile}
                        style={{
                          minWidth: "140px",
                          height: "45px",
                          marginRight: "10px",
                        }}
                      >
                        <MenuItem value="1">Keep Existing</MenuItem>
                        <MenuItem value="2">Upload</MenuItem>
                        <MenuItem value="3">Remove</MenuItem>
                      </Select>

                      {submit === "2" && (
                        <Input style={{ fontSize: "13px" }} type="file" />
                      )}
                      <span className="my-auto text mx-2">
                        <a>View..</a>
                      </span>
                    </div>
                    <div className="col-3"></div>
                  </div>
                  {incomeArr.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        margin: "10px",
                        display: "flex",
                        marginTop: "25px",
                        justifyContent: "space-between",
                      }}
                      className="row col-12"
                    >
                      <div className="col-4">
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
                        <Input
                          style={{ fontSize: "19px", border: "none" }}
                          type="file"
                        />
                      </div>
                      <div className="col-3">
                        <DeleteOutline
                          style={{ color: "red", fontSize: "30px" }}
                        />
                      </div>
                    </div>
                  ))}
                  <div
                    style={{
                      margin: "10px",
                      marginLeft: "20px",
                      marginTop: "1rem",
                    }}
                  >
                    <Button
                      onClick={addIncomeType}
                      variant="contained"
                      style={{ backgroundColor: "black" }}
                    >
                      Add Additional Documentation
                    </Button>
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
                    <Button
                      variant="contained"
                      style={{ color: "white", marginLeft: "15px" }}
                    >
                      View Form
                    </Button>
                    <Button
                      onClick={() => {
                        history(
                          "/Form8233/TaxPayer_Identification/Owner/Documentaion/certification"
                        );
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
        )}
      </Formik>
    </>
  );
}
