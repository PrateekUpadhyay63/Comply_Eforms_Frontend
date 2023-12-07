import React from "react";
import { Button, Tooltip, Typography } from "@mui/material";

export default function Nav() {
  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <div
        className="m-2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <img
          style={{ width: "50%",maxWidth:"250px",padding:"20px" }}
          className="navbar"
          src={require("../../assets/img/logo.png")}
        />
        <div className="my-auto" style={{ height: "40px" }}>
          <Tooltip
            style={{ backgroundColor: "black", color: "white" }}
            title={
              <Typography>
                Are you sure you want to exit the process?
              </Typography>
            }
          >
            <Button
              className="my-auto mx-2"
              style={{ borderRadius: "30px", minWidth: "max-content",boxShadow:"none" }}
              variant="contained"
            >
              Sign out
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
