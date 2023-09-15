import React, { useState } from "react";
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

export default function Certifications(props: any) {
  const {
    handleTaxClassificationChange,
    selectedTaxClassification,
    data,
    handleChange,
    setselectedContinue,
  } = props;
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [toolInfo, setToolInfo] = useState("");

  return (
    <Paper style={{ marginLeft: "5px", width: "73%" }}>
      <Typography
        align="left"
        style={{
          margin: "10px",
          fontSize: "20px",
          fontWeight: "550",
          marginLeft: "20px",
        }}
      >
        Certification <span style={{ color: "red" }}>*</span>
        <span>
          <Tooltip
            style={{ backgroundColor: "black", color: "white" }}
            title={
              <>
                <Typography color="inherit">
                  Legal certification details
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
        </span>{" "}
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
              Legal certification details: This form must be signed and dated to
              establish to the requester or withholding agent that you are a
              U.S. person or a valid resident alien. Note that our system
              requires an electronic signature to confirm electronic submission.
            </Typography>

            <Typography style={{ marginTop: "10px" }}>
              Requirement for signature:
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              You may be requested to sign your submission by the withholding
              agent or requester, even if indicated otherwise below. Please note
              that this electronic forms submission process requires a valid
              electronic signature in all cases. Signature requirements:
              Complete the certification as indicated in 1 through 5 below.
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              1. For interest, dividend, and barter exchange accounts opened
              before 1984 and broker accounts considered active during 1983, you
              must give your correct TIN, but you do not have to sign the
              certification.
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              2. For interest, dividend, broker, and barter exchange accounts
              opened after 1983 and broker accounts considered inactive during
              1983, you must sign the certification or backup withholding will
              apply. If you are subject to backup withholding and you are only
              providing your correct TIN to the requester, select either (i) an
              appropriate box in 2; or (ii) box 3.
            </Typography>

            <Typography style={{ marginTop: "10px" }}>
              3. For real estate transactions, you must sign the certification.
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              4. Other payments. You must give your correct TIN, but you do not
              have to sign the certification unless you have been notified that
              you have previously given an incorrect TIN. 'Other payments'
              include payments made in the course of the requester's trade or
              business for rents, royalties, goods (other than bills for
              merchandise), medical and health care services (including payments
              to corporations), payments to a nonemployee for services, payments
              to certain fishing boat crew members and fishermen, and gross
              proceeds paid to attorneys (including payments to corporations).
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              5. Mortgage interest paid by you, acquisition or abandonment of
              secured property, cancellation of debt, qualified tuition program
              payments (under Section 529), IRA, Coverdell ESA, Archer MSA or
              HSA contributions or distributions, and pension distributions. You
              must give your correct TIN, but you do not have to sign the
              certification.
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
        style={{
          margin: "10px",
          fontSize: "18px",
          color: "grey",
          marginLeft: "20px",
        }}
      >
        Under penalties of perjury, I certify that:
      </Typography>

      <Paper
        style={{ marginLeft: "20px", width: "80%", backgroundColor: "#d2d6d3" }}
      >
        <div style={{ margin: "10px" }}>
          <Typography style={{ display: "flex" }}>
            <Checkbox />
            <Typography
              style={{ fontSize: "15px", color: "black", marginTop: "11px" }}
            >
              1. The number shown on this form is my correct taxpayer
              identification number (or I am waiting for a number to be issued
              to me), and
            </Typography>
          </Typography>
          <Typography style={{ display: "flex" }}>
            <Checkbox />
            <Typography
              style={{ fontSize: "15px", color: "black", marginTop: "11px" }}
            >
              2. I am not subject to backup withholding because:(a) I am exempt
              from backup withholding, or (b) I have not been notified by the
              Internal Revenue Service (IRS) that I am subject to backup
              withholding as a result of a failure to report all interest or
              dividends, or (c) the IRS has notified me that I am no longer
              subject to backup withholding
            </Typography>
          </Typography>
          <Typography style={{ display: "flex" }}>
            <Checkbox />
            <Typography
              style={{ fontSize: "13px", color: "black", marginTop: "11px" }}
            >
              3. I am a U.S. citizen or other U.S. person (See Glossary of Terms
              for a definition of a U.S. person), and
            </Typography>
          </Typography>
          <Typography style={{ display: "flex" }}>
            <Checkbox />
            <Typography
              style={{ fontSize: "15px", color: "black", marginTop: "11px" }}
            >
              4. The FATCA code(s) entered on this form (if any) indicate that I
              am exempt from FATCA reporting is correct.
            </Typography>
          </Typography>

          <Typography
            style={{
              fontSize: "13px",
              color: "black",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Please check the box below if you have been notified by the IRS that
            you are currently subject to backup withholding because you have
            failed to report all interest and dividends on your tax return. For
            real estate transactions, item 2 does not apply.For mortgage
            interest paid, acquisition or abandonment of secured property,
            cancellation of debt, contributions to an individual retirement
            arrangement (IRA), and generally, payments other than interest and
            dividends, you are not required to sign the Certification, but you
            must provide your correct TIN.{" "}
            <span style={{ fontWeight: "bold" }}>
              (Please note e-submission through this service requires an
              e-signature)
            </span>
          </Typography>
          <Typography style={{ display: "flex" }}>
            <Checkbox />
            <Typography
              style={{ fontSize: "15px", color: "black", marginTop: "11px" }}
            >
              I have been notified by IRS that I am currently subject to backup
              withholding.
            </Typography>
          </Typography>
          <Typography style={{ display: "flex" }}>
            <Checkbox />
            <Typography
              style={{ fontSize: "15px", color: "black", marginTop: "11px" }}
            >
              Check to confirm you have reviewed the Electronic Form
              <span
                style={{ color: "blue", fontSize: "13px", marginLeft: "5px" }}
              >
                (view Electronic Form)
              </span>
            </Typography>
          </Typography>
        </div>
      </Paper>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
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
          variant="contained"
          style={{ color: "white", marginLeft: "15px" }}
        >
          View form
        </Button>
        <Button
          type="submit"
          onClick={() => {
            setselectedContinue({
              step1: false,
              step2: false,
              step3: false,
              step4: false,
              step5: false,
              step6: true,
              step7: false,
              step8: false,
            });
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
          onClick={()=>setselectedContinue({
            step1: false,
            step2: false,
            step3: true,
            step4: false,
            step5: false,
            step6: false,
            step7: false,
            step8: false,
          })}
        >
          Back
        </Button>
      </Typography>
    </Paper>
  );
}
