import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  Typography,
  Button,
  Tooltip,
  Link,
  Input,
  Paper,
  Checkbox,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export default function Certifications(props: any) {
  const history = useNavigate();
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [toolInfo, setToolInfo] = useState("");

  return (
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
              fontSize: "30px",
              fontWeight: "550",
              marginLeft: "20px",
            }}
          >
            Certification
          </Typography>
          <Paper
            style={{
              marginLeft: "20px",
              padding: "10px",
              border: "2px solid black",
              fontSize: "20px",
            }}
            className="my-3"
          >
            <span style={{ backgroundColor: "darkgrey", padding: "10px" }}>
              Part III
            </span>{" "}
            Certification
          </Paper>

          <Typography
            style={{
              margin: "10px",
              fontSize: "20px",

              marginLeft: "20px",
            }}
          >
            <span style={{ fontWeight: "550" }}>I certify that:</span>
          </Typography>
          <Typography
            style={{
              margin: "10px",
              fontSize: "20px",
              color: "grey",
              marginLeft: "20px",
            }}
          >
            Under penalties of perjury, I declare that I have examined the
            information on this form and to the best of my knowledge and belief
            it is true, correct, and complete. I further certify under penalties
            of perjury that:
          </Typography>

          <Paper
            style={{
              marginLeft: "20px",
              width: "80%",
              backgroundColor: "#d2d6d3",
            }}
          >
            <div style={{ margin: "10px" }}>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginTop: "10px",
                  }}
                >
                  1 I am the beneficial owner (or am authorized to sign for the
                  beneficial owner) of all the income to which this form
                  relates.
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  2 The beneficial owner is not a U.S. person.
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  3 The beneficial owner is a resident of the treaty country
                  listed on line 12a and/or 13b above within the meaning of the
                  income tax treaty between the United States and that country,
                  or was a resident of the treaty country listed on line 12a
                  and/or 13b above at the time of, or immediately prior to,
                  entry into the United States, as required by the treaty.
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  4. Furthermore, I authorize this form to be provided to any
                  withholding agent that has control, receipt, or custody of the
                  income of which I am the beneficial owner or any withholding
                  agent that can disburse or make payments of the income of
                  which I am the beneficial owner.
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />

              <Typography
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              ></Typography>

              <Typography style={{ display: "flex" }}>
                <Checkbox className="mx-2" />
                <Typography
                  style={{ fontSize: "20px", color: "black", marginTop: "7px" }}
                >
                  Check to confirm you have reviewed the Electronic Form
                  <span
                    style={{
                      color: "blue",
                      fontSize: "19px",
                      marginLeft: "5px",
                    }}
                  >
                    (view Electronic Form)
                  </span>
                </Typography>
              </Typography>
              <Divider
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  backgroundColor: "black",
                }}
              />
            </div>
          </Paper>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
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
              onClick={() => {
                history(
                  "/Form8233/TaxPayer_Identification/Owner/Documentaion/certification/Submission"
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
  );
}
