import React, { useState, ChangeEvent } from "react";
import Link from "@mui/material/Link";
export default function View_Insructions(props: any) {
    const {canvaBx, handleCanvaClose}=props;
    // const [canvaBx, setCanvaBx] = useState(false);
    // const handleCanvaOpen = () => {
    //   setCanvaBx(true);
    // }
    // const handleCanvaClose = () => {
    //   setCanvaBx(false);
    // }
  return <>
   <div
          className={`offcanvas offcanvas-end ${canvaBx ? "show" : " "}`}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ background: "#d8dce6" }}
        >
          <div className="offcanvas-header flex-column">
            <button
              type="button"
              className="btn-close align-self-end"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => { handleCanvaClose() }}
            ></button>

          </div>
          <div className="offcanvas-body pt-0">
            <div className="card mb-3 rounded-0">
              <div className="card-header p-0">
                <h6 className="offcanvas-title w-100 text-center py-2 px-3" id="offcanvasNavbarLabel" style={{ background: "#e7e7e7" }}>IRS Form Instructions</h6>
              </div>
              <div className="card-body">

              </div>
            </div>
            <div className="card mb-3 rounded-0">
              <div className="card-header  p-0">
                <h6 className="offcanvas-title w-100 text-center py-2 px-3" id="offcanvasNavbarLabel" style={{ background: "#e7e7e7" }}>IRS Form Instructions</h6>
              </div>
              <div className="card-body">
                <ul className="navbar-nav justify-content-center text-center w-100 ">
                  <li className="nav-item">
                    <Link className="nav-link text-decoration-none" aria-current="page" href="/">W-8BEN - Foreign Status Individuals</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-decoration-none" href="/">W-8BEN-E - Foreign Status Entities</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-decoration-none" href="/">W-8IMY - Intermediaries</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {canvaBx === true ? (<div className="offcanvas-backdrop fade show" onClick={() => { handleCanvaClose() }}></div>) : null}</>;
}
