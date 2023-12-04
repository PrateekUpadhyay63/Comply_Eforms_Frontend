import React, { useState,useEffect } from "react";
import {
  FormControl,
  Typography,
  Button,
  Paper,
  Link,
  Tooltip,
  Accordion,
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.scss";
import { useSelector , useDispatch } from "react-redux";
import checksolid from "../../../assets/img/check-solid.png";
import { Formik, Form } from "formik";
import { Info } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { IncomeSchema } from "../../../schemas/w8ECI";

import { W8_state_ECI,GetIncomeTypes } from "../../../Redux/Actions";
import BreadCrumbComponent from "../../reusables/breadCrumb";

export default function Factors() {
  const initialValue = {
    itemIncomeType: "",
    incomeDescription: "",
    isAppplicationCheck: "",
  };
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{

    dispatch(GetIncomeTypes())
    },[])
  const [numPapers, setNumPapers] = useState(1);
  const addIncomeTypePaper = () => {
    setNumPapers(numPapers + 1);
  };

  const deleteIncomeTypePaper = () => {
    setNumPapers(numPapers - 1);
  };
  const [toolInfo, setToolInfo] = useState("");
  const [expanded, setExpanded] = React.useState<string | false>("");
  const GetIncomeTypesData = useSelector(
    (state:any)=>state.GetIncomeTypesReducer.GetIncomeTypesData
  )
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Formik
      

        initialValues={initialValue}
        validationSchema={IncomeSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            W8_state_ECI(values, () => {
              history("/W-8ECI/Certification");
            })
          );
          history("/W-8ECI/Certification");
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
            <>{console.log(values, errors)}</>
            <section
              className="inner_content"
              style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
            >
                  <div className="overlay-div">
            <div className="overlay-div-group">
                <div className="viewInstructions">View Instructions</div>
                <div className="viewform">View Form</div>
                <div className="helpvideo"> 
                {/* <a target="_blank" href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-">Help Video</a> */}
                <a href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-" target="popup" onClick={()=>window.open('https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-','name','width=600,height=400')}>Help Video</a>
                </div>
            </div>
        </div>
        <div className="row w-100 h-100">
        <div className="col-4">
          <div style={{ padding: "0px 0px",height:"100%" }}>
          <BreadCrumbComponent breadCrumbCode={1251} formName={4}/>
      </div>
      </div>
      <div className="col-8 mt-3">
              <div style={{ padding: "20px" }}>
                <Paper style={{ padding: "18px" }}>
                  <div style={{ margin: "10px" }}>
                    <Typography
                      align="left"
                      style={{ marginTop: "10px", fontSize: "38px" }}
                    >
                      Income Report
                      <span>
                        <Tooltip
                          style={{ backgroundColor: "black", color: "white" }}
                          title={
                            <>
                              <Typography color="inherit">
                                Income Type Details
                              </Typography>
                              <a onClick={() => setToolInfo("basic")}>
                                <Typography
                                  style={{
                                    cursor: "pointer",
                                    textDecorationLine: "underline",
                                  }}
                                  align="center"
                                >
                                  View More...
                                </Typography>
                              </a>
                            </>
                          }
                        >
                          <Info
                            style={{
                              color: "#ffc107",
                              fontSize: "26px",
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
                            You should only select 'Yes' and proceed through the
                            Special Rates and Conditions flow if you are
                            claiming specific treaty benefits that require you
                            to meet conditions you haven't already declared in
                            your submission. For example, for royalty income,
                            you must complete this line if your country's treaty
                            specifies different withholding rates for different
                            kinds of royalties. See the IRS's Tax Treaty Table
                            (February 2019 version available in English here)
                            for more about the Treaty Rates that different
                            countries have negotiated with the US.
                          </Typography>
                          <Typography style={{ marginTop: "10px" }}>
                            The following are additional examples of persons who
                            should complete this section.
                          </Typography>
                          <Typography style={{ marginTop: "20px" }}>
                            - Exempt organizations claiming treaty benefits
                            under the exempt organization articles of the
                            treaties with Canada, Mexico, Germany, and the
                            Netherlands.
                          </Typography>

                          <Typography style={{ marginTop: "20px" }}>
                            - Foreign corporations that are claiming a
                            preferential rate applicable to dividends based on
                            ownership of a specific percentage of stock.
                          </Typography>
                          <Typography style={{ marginTop: "20px" }}>
                            - Persons claiming treaty benefits on royalties if
                            the treaty contains different withholding rates for
                            different types of royalties.
                          </Typography>
                          <Typography style={{ marginTop: "20px" }}>
                            - Effect of Tax Treaties
                          </Typography>
                          <Typography style={{ marginTop: "20px" }}>
                            This line is generally not applicable to claiming
                            treaty benefits under an interest or dividends
                            (other than dividends subject to a preferential rate
                            based on ownership) article of a treaty.
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

                    <>
                      {Array.from({ length: numPapers }).map((_, index) => (
                        <Paper
                          className="paper"
                          elevation={3}
                          style={{
                            backgroundColor: "#e8e1e1",
                            marginTop: "10px",
                          }}
                        >
                          <div style={{ padding: "20px" }}>
                            {numPapers > 1 && (
                              <Typography align="right">
                                <DeleteIcon
                                  onClick={deleteIncomeTypePaper}
                                  style={{ color: "red", fontSize: "30px" }}
                                />
                              </Typography>
                            )}
                            <div className="col-12 d-flex">
                              <div className="col-6">
                                <Typography
                                  align="left"
                                  style={{
                                    fontSize: "22px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Select Item of Income:
                                  <span
                                    style={{ color: "red", fontSize: "30px" }}
                                  >
                                    *
                                  </span>
                                </Typography>
                                <FormControl className="w-100">
                                  <select
                                    name="itemIncomeType"
                                    id="Income"
                                    defaultValue={1}
                                    onBlur={handleBlur}
                                    value={values.itemIncomeType}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                    style={{
                                      padding: " 0 10px",
                                      color: "#7e7e7e",
                                      fontStyle: "italic",
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                     <option value={0}>--Please Select the income types--</option>
                            {GetIncomeTypesData?.map(
                              (ele: any) => (
                                <option key={ele?.id} value={ele?.id}>
                                  {ele?.name}
                                </option>
                                   )
                                   )}
                                  </select>
                                  <p className="error">
                                    {errors.itemIncomeType}
                                  </p>
                                </FormControl>
                              </div>
                            </div>

                            <Typography
                              align="left"
                              style={{ fontSize: "22px", marginTop: "10px" }}
                            >
                              Description of Income:
                              <span style={{ color: "red", fontSize: "30px" }}>
                                *
                              </span>
                            </Typography>
                            <FormControl className="w-100">
                              <input
                                name="incomeDescription"
                                type="text"
                                value={values.incomeDescription}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="col-md-12 col-12"
                                style={{
                                  padding: " 0 10px",
                                  color: "#7e7e7e",
                                  fontStyle: "italic",
                                  height: "9rem",
                                }}
                              />
                              <p className="error">
                                {errors.incomeDescription}
                              </p>
                            </FormControl>
                          </div>
                        </Paper>
                      ))}

                      <div style={{ marginTop: "20px" }}>
                        <Button
                          onClick={addIncomeTypePaper}
                          variant="contained"
                          size="large"
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          Add Income Type
                        </Button>
                      </div>
                      <div style={{ display: "flex", marginTop: "2rem" }}>
                        <Checkbox
                          name="isAppplicationCheck"
                          value={values.isAppplicationCheck}
                          onChange={handleChange}
                          size="medium"
                          style={{ fontSize: "2rem" }}
                        />
                        <Typography style={{ fontSize: "20px" }}>
                          If applicable check to certify that
                          <span>
                            <Tooltip
                              style={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                              title={
                                <>
                                  <Typography color="inherit">
                                    Line 12. Exemption From Withholding
                                  </Typography>
                                  <a onClick={() => setToolInfo("details")}>
                                    <Typography
                                      style={{
                                        cursor: "pointer",
                                        textDecorationLine: "underline",
                                      }}
                                      align="center"
                                    >
                                      View More...
                                    </Typography>
                                  </a>
                                </>
                              }
                            >
                              <Info
                                style={{
                                  color: "#ffc107",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                  verticalAlign: "super",
                                }}
                              />
                            </Tooltip>
                          </span>
                        </Typography>
                       
                      </div>
                      <p className="error">
                                {errors.isAppplicationCheck
}
                              </p>
                      {toolInfo === "details" ? (
                        <div>
                          <Paper
                            style={{
                              backgroundColor: "#dedcb1",
                              padding: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <Typography>
                              Checking the box here completes Line 12 on the
                              form certifying you are a foreign transferor
                              providing this form to claim an exception from
                              withholding under Regulations section
                              1.1446(f)-4(b)(6) on the amount realized paid to
                              you from a transfer of a PTP interest for which
                              withholding under section 1446(f) may otherwise
                              apply. By checking this box you are certifying
                              that you are a dealer in securities (as defined in
                              section 475(c)(1)) and that any gain from the
                              transfer of a PTP interest associated with this
                              form is effectively connected with the conduct of
                              a trade or business in the United States without
                              regard to the provisions of section 864(c)(8).
                              This representation applies to each transfer of a
                              PTP interest associated with this form unless you
                              specify otherwise on line 11 (Description of
                              Income) or an attachment. Furthermore, if this box
                              is checked we will need to raise a new issue in
                              Admin alerting the admin that this box has been
                              checked so that they review the description to see
                              if the exception form withholding is against all
                              income types of just certain ones.
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
                      <Paper
                        className="paper"
                        style={{
                          backgroundColor: "#e8e1e1",
                          marginTop: "10px",
                        }}
                      >
                        <Divider
                          style={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            backgroundColor: "black",
                          }}
                        />
                        <Typography
                          align="left"
                          style={{ fontSize: "18px", marginLeft: "1rem" }}
                        >
                          You are a dealer in securities (as defined in section
                          475(c)(1));
                        </Typography>
                        <Divider
                          style={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            backgroundColor: "black",
                          }}
                        />
                        <Typography
                          align="left"
                          style={{ fontSize: "18px", marginLeft: "1rem" }}
                        >
                          You are a transferor of an interest in a publicly
                          traded partnership (PTP) claiming an exception from
                          withholding under Regulations section
                          1.1446(f)-4(b)(6); and
                        </Typography>
                        <Divider
                          style={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            backgroundColor: "black",
                          }}
                        />
                        <Typography
                          align="left"
                          style={{ fontSize: "18px", marginLeft: "1rem" }}
                        >
                          Any gain from the transfer of the PTP interest
                          associated with this form is effectively connected
                          with the conduct of a trade or business within the
                          United States without regard to section 864(c)(8).
                        </Typography>
                        <Divider
                          style={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            backgroundColor: "black",
                          }}
                        />
                      </Paper>
                      <Typography
                        align="left"
                        style={{ fontSize: "18px", fontWeight: "550" }}
                      >
                        This representation applies to each transfer of a PTP
                        interest associated with this form unless you specify
                        otherwise above.
                      </Typography>
                    </>
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
                    <Button
                      variant="contained"
                      style={{ color: "white", marginLeft: "15px" }}
                    >
                      View form
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
                    onClick={()=>{
                      history("/W-8ECI/Tax_Payer")
                    }}
                      variant="contained"
                      size="large"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>
                        <ArrowBackIcon />
                      </span>{" "}
                      Back
                    </Button>
                  </Typography>
                </Paper>
              </div>
              </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
}
