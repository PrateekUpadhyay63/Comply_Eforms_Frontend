import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Checkbox,
  Tooltip,
  Link,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Declaration from "../../reusables/Declaration";
import { useNavigate } from "react-router-dom";

export default function Penalties(props: any) {
  const history = useNavigate()
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [selectedContinue, setselectedContinue] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
  });
  const [toolInfo, setToolInfo] = useState("");

  return (
    <>
      <Paper style={{ marginLeft: "5px", width: "73%" }}>
        <Typography
          align="left"
          style={{ margin: "10px", fontSize: "20px", fontWeight: "550" }}
        >
          Part II Certification<span style={{ color: "red" }}>*</span>
        </Typography>
        <Typography
          align="left"
          style={{ margin: "10px", fontSize: "20px", fontWeight: "550" }}
        >
          W-9 Electronic Substitute Form Statement
        </Typography>
        <Typography
          align="left"
          style={{ margin: "10px", fontSize: "12px", color: "grey" }}
        >
          The Internal Revenue Service does not require your consent to any
          provisions of this document other than the certifications required to
          avoid backup withholding.
        </Typography>
        <div
          style={{
            margin: "20px",
            display: "flex",
            marginTop: "20px",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography style={{ fontSize: "15px" }}>
              Signed by<span style={{ color: "red" }}>*</span>
              <span>
                <Tooltip
                  style={{ backgroundColor: "black", color: "white" }}
                  title={
                    <>
                      <Typography color="inherit">
                        Signature information
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
                  <InfoIcon
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
                    width: "70%",
                  }}
                >
                  <Typography>
                    Please enter the name of the authorized signatory.
                  </Typography>

                  <Typography style={{ marginTop: "10px" }}>
                    See 'More Info' for further information on signature
                    requirements.
                  </Typography>
                  <Typography style={{ marginTop: "10px" }}>
                    On submission an electronic version of this form will be
                    sent directly to the requester for their acceptance and
                    further validation. After submission you will be able to
                    save and print a copy for your own records.
                  </Typography>
                  <Typography style={{ marginTop: "10px" }}>
                    We will confirm receipt of the electronic form. Please note
                    that acceptance of the confirmation declaration for
                    electronic signature and the certification statement are
                    performed under penalty of perjury.
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

            <select
              style={{
                padding: " 0 10px",
                color: "#7e7e7e",
                fontStyle: "italic",
                height: "36px",
                width: "20em",
              }}
              name="permanentResidentialCountryId1"
              id="Income"
              defaultValue={1}
            ></select>
          </div>

          <div>
            <Typography style={{ fontSize: "15px" }}>
              Enter Confirmation Code:<span style={{ color: "red" }}>*</span>
              <span>
                <Tooltip
                  style={{ backgroundColor: "black", color: "white" }}
                  title={
                    <>
                      <Typography color="inherit">
                        Exemptions - Backup Withholding
                      </Typography>
                      <a onClick={() => setToolInfo("password")}>
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
                  <InfoIcon
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

            {toolInfo === "password" ? (
              <div>
                <Paper
                  style={{
                    backgroundColor: "#dedcb1",
                    padding: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Typography>
                    To authenticate the electronic signature you must enter the
                    alpha numeric token you received at the start of the
                    process. If you cannot remember your confirmation code, you
                    can click the 'Recover Password' link to answer your
                    security question again and receive it.
                  </Typography>

                  <Typography style={{ marginTop: "10px" }}>
                    If you do not wish to submit the electronic form at this
                    stage, you will need to exit the process and undertake again
                    at a later date.
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
            <div>
              <Input
                type="password"
                required
                style={{
                  border: " 1px solid #d9d9d9 ",
                  height: " 36px",
                  lineHeight: "36px ",
                  background: "#fff ",
                  fontSize: "13px",
                  color: " #000 ",
                  fontStyle: "normal",
                  borderRadius: "1px",
                  padding: " 0 10px ",
                }}
              />
              <span
                style={{ fontSize: "12px", color: "blue", marginLeft: "10px" }}
              >
                Recover Password
              </span>
            </div>
          </div>
        </div>
        <Typography align="left" style={{ margin: "10px", marginLeft: "20px" }}>
          <Typography style={{ fontSize: "15px" }}>Date</Typography>
          <Input
            type="date"
            required
            style={{
              width: "32%",
              border: " 1px solid #d9d9d9 ",
              height: " 36px",
              lineHeight: "36px ",
              background: "#fff ",
              fontSize: "13px",
              color: " #000 ",
              fontStyle: "normal",
              borderRadius: "1px",
              padding: " 0 10px ",
            }}
          />
        </Typography>

        <Typography style={{ display: "flex", marginLeft: "10px" }}>
          <Checkbox />
          <Typography
            style={{ fontSize: "13px", color: "black", marginTop: "7px" }}
          >
            Please "check" box to confirm your acceptance with the above
            declarations{" "}
            <span>
              <Tooltip
                style={{ backgroundColor: "black", color: "white" }}
                title={
                  <>
                    <Typography color="inherit">
                      Certification information
                    </Typography>
                    <a onClick={() => setToolInfo("check")}>
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
                <InfoIcon
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
        </Typography>
        {toolInfo === "check" ? (
          <div>
            <Paper
              style={{
                backgroundColor: "#dedcb1",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <Typography>
                This submission <span>must</span> be signed and dated by the
                beneficial owner of the income, or, if the beneficial owner is
                not an individual, by an authorized representative or officer of
                the beneficial owner.
              </Typography>
              <Typography>
                If this submission is being completed by an agent acting under a
                duly authorized power of attorney for the beneficial owner or
                account holder, the form must be accompanied by the power of
                attorney in proper form or a copy thereof specifically
                authorizing the agent to represent the principal in making,
                executing, and presenting the form.
              </Typography>

              <Typography style={{ marginTop: "10px" }}>
                Form 2848, Power of Attorney and Declaration of Representative,
                can be used for this purpose. The agent, as well as the
                beneficial owner or account holder, may incur liability for the
                penalties provided for an erroneous, false, or fraudulent form.
              </Typography>
              <Typography style={{ marginTop: "10px" }}>Ref: EH015</Typography>

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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            onClick={() => {
              setOpen2(true);
            }}
            variant="contained"
            style={{ color: "white" }}
          >
            SAVE & EXIT
          </Button>
          <Button
             onClick={() => {
              history("/Submit")
            //  setOpen2(true)
            }}
            variant="contained"
            style={{ color: "white", marginLeft: "15px" }}
          >
            Submit Electronically
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
            onClick={() =>
              setselectedContinue({
                step1: false,
                step2: false,
                step3: false,
                step4: false,
                step5: true,
                step6: false,
                step7: false,
                step8: false,
              })
            }
          >
            Back
          </Button>
        </Typography>
      </Paper>
      <Declaration
        open={open2}
        setOpen={setOpen2}
        handleClickOpen={handleClickOpen2}
        handleClose={handleClose2}
      />
    </>
  );
}
