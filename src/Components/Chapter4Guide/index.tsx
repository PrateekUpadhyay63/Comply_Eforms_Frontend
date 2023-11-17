import React, { useEffect } from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Info from "@mui/icons-material/Info";
import { Tooltip, Paper, Link } from "@mui/material";
import BreadCrumbComponent from "../reusables/breadCrumb";
import Form from "../reusables/Formguide";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { postFormSelection } from "../../Redux/Actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Chapter4(props: any) {


 

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
          {/* <a target="_blank" href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-">Help Video</a> */}
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
       
        <BreadCrumbComponent breadCrumbCode={1210} formName={3} />
      </div>
      <div className="col-8 mt-3">
        <div style={{ padding: "20px" }}>
          <Paper style={{ padding: "18px" }}>
           shahvacdv
          </Paper>
        </div>
      </div>
    </div>
  </section>
  );
}
