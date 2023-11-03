import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Divider, Paper } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import BreadCrumbComponent from "../../reusables/breadCrumb";
export default function Term() {
  //States
  const history = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <section
      className="inner_content"
      style={{ backgroundColor: "#0c3d69", marginBottom: "10px" }}
    >
      <div className="overlay-div">
        <div className="overlay-div-group">
          <div className="viewInstructions">View Instructions</div>
          <div className="viewform">View Form</div>
          <div className="helpvideo">
            <a
              href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-"
              target="popup"
              onClick={() =>
                window.open(
                  "https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-",
                  "name",
                  "width=600,height=400"
                )
              }
            >
              Help Video
            </a>
          </div>
        </div>
      </div>

      <div className="row w-100 h-100">
        <div className="col-4">
          <div
            style={{ padding: "20px 0px", height: "100%", marginTop: "20px" }}
          >
            <BreadCrumbComponent breadCrumbCode={1204} formName={2}/>
          </div>
        </div>
        <div className="col-8 mt-4">
          <div style={{ padding: "30px 0px" }}>
            <Paper elevation={6} style={{ padding: "17px", marginTop: "20px" }}>
              <>
                <Paper
                  elevation={6}
                  style={{
                    padding: "17px",
                    marginTop: "20px",
                    backgroundColor: "#e8e1e1",
                  }}
                >
                  <Typography
                    align="left"
                    style={{ fontWeight: "550", fontSize: "38px" }}
                  >
                    Declaration of no U.S. Sourced Income
                  </Typography>

                  <Typography
                    align="left"
                    style={{ fontSize: "23px", marginTop: "20px" }}
                  >
                    If you are declaring that:
                  </Typography>
                  <Typography align="left" className="text mt-4">
                    You only provide goods and materials{" "}
                    <span style={{ fontWeight: "bold" }}>and</span>
                  </Typography>
                  <Divider className="divider" />
                  <Typography align="left" className="text">
                    Manufacture or production is undertaken entirely outside of
                    the United States and its territories
                  </Typography>
                  <Divider className="divider" />
                  <Typography align="left" className="text">
                    Any associated services provided are also undertaken
                    entirely outside of the United States and its territories
                    and
                  </Typography>
                  <Divider className="divider" />
                  <Typography align="left" className="text">
                    Invoices submitted do not request payment for dividends,
                    Insurance Premiums or Interest payments.
                  </Typography>
                  <Divider className="divider" />

                  <Typography align="left" className="text mt-4">
                    Please read the statement below and if applicable confirm
                    that the statement applies and is true and accurate.
                  </Typography>
                  <Typography align="left" className="text mt-4">
                    If you do manufacture or provide goods, undertake services
                    within the United States or your invoices are requesting
                    payments for Dividends, Insurance Premiums or Interest
                    payments please select "Income List" and you will be
                    provided with a list of income types. You should select all
                    that may apply, answering the associated question and
                    provide an indication of allocation percentage the income
                    type represents. On receipt of invoice we will compare the
                    information given to assist in the calculation of U.S.
                    withholding that may apply. Failure to make the correct
                    declarations may result in the wrong amount withholding
                    taxing place.
                  </Typography>
                </Paper>
                <Typography
                  align="left"
                  style={{
                    fontWeight: "550",
                    fontSize: "30px",
                    marginTop: "20px",
                  }}
                >
                  Declaration Statement - Declaration of No U.S. Source Income
                </Typography>
                <Typography align="left" className="text mt-2">
                  Under penalties of perjury I confirm that the goods or
                  materials provided or manufactured and any and all associated
                  services, including consultancy, implementation, training or
                  support are undertaken entirely from locations outside of the
                  United States and United States territories. I also confirm
                  that the invoices submitted will not include a request for
                  payment of Dividends, Insurance Premiums or Interest payments.
                </Typography>
                <Typography align="left" className="text mt-3">
                  I further confirm that should this situation change I will
                  provide adequate notification, clearly identify items that may
                  be considered gained from U.S. sources, identify any
                  Dividends, Insurance Premiums or Interest payments due on any
                  invoices submitted and submit an updated U.S. source income
                  statement.
                </Typography>
              </>
            </Paper>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                size="large"
                variant="contained"
                style={{ color: "white" }}
                onClick={() => {
                  history("/W-8BEN/Declaration/US_Sourced");
                }}
              >
                U.S. Sourced Income
              </Button>
              <Button
                onClick={() => {
                  history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Status_BenE");
                }}
                size="large"
                variant="contained"
                style={{ color: "white", marginLeft: "15px" }}
              >
                No U.S. Sourced Income
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
                size="large"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ marginRight: "5px" }}>
                  {" "}
                  <ArrowBackIcon />
                </span>{" "}
                Back
              </Button>
            </Typography>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <footer>
          <div className="row mx-1">
            <Typography
              className="mx-2"
              align="left"
              style={{ marginBottom: "10px", color: "white", fontSize: "14px" }}
            >
              © Comply Exchange Ltd.2023 - Version: 2.2.0.29 - Render
              Time:8.6691538s
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
