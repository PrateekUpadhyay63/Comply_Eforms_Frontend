'use client'

import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function FormW8IMY() {

  const boxRef: any = useRef()
  //  const boxRef = useRef<HTMLDivElement>(null);
  const [pageData, setPageData]: any = useState()

  const downloadPDF = () => {
    const newWindow: any = window.open();

    const html = document.createElement("html");
    // const head = document.head.cloneNode(false);
    const body = document.createElement("body");
    let name = document.createElement("name");
    name.style.color = 'red'

    // console.log("pageData",pageData)

    if (boxRef.current) {

      body.appendChild(boxRef.current);
      // html.appendChild(head);
      html.appendChild(body);
      console.log("html", html.innerHTML)

      newWindow.document.write(html.innerHTML);
      newWindow.document.close();
      newWindow.print();
      newWindow.close();

    }

  }


  return (
    <>
      <section ref={boxRef}>
        <div style={{ padding: "0", margin: "10px auto", background: "#fff", width: "100%", maxWidth: "960px", paddingBlock: "20px" }}>
          <section>
            <table style={{ width: "100%", maxWidth: "920px", color: "#000", borderCollapse: "collapse", margin: "auto" }}>
              <thead>
                <tr>
                  <th style={{ width: "22.5%", boxSizing: "border-box", fontSize: "14px", lineHeight: "1.3", borderRight: "2px solid #000", borderBottom: "2px solid #000" }}>
                    <p>Form <strong style={{ fontSize: "30px", fontWeight: "700" }}>W-8IMY</strong></p>
                    <p style={{ margin: "15px 0" }}>(Rev. October 2021)</p>
                    <p>Department of the Treasury Internal Revenue Service</p>
                  </th>
                  <th style={{ padding: "0 10px", boxSizing: "border-box", textAlign: "center", width: "53.5%", fontSize: "14px", lineHeight: "1.3", borderRight: "2px solid #000", borderBottom: "2px solid #000" }}>
                    <h1 style={{ fontSize: "13.5px", fontWeight: "700" }}>Certificate of Foreign Intermediary, Foreign Flow-Through Entity, or Certain
                      U.S. Branches for United States Tax Withholding and Reporting</h1>
                    <ul style={{ listStyle: "none", fontSize: "12px", lineHeight: "1.5", paddingLeft: "0" }}>
                      <li>&#9658; For use by individuals. Entities must use Form W-8BEN-E.</li>
                      <li>&#9658; Go to www.irs.gov/FormW8BEN for instructions and the latest information.</li>
                      <li>&#9658; Give this form to the withholding agent or payer. Do not send to the IRS.</li>
                    </ul>
                  </th>
                  <th style={{ width: "24%", boxSizing: "border-box", fontSize: "18px", fontWeight: "bolder", lineHeight: "1.3", borderBottom: "2px solid #000", padding: "0 0 0 10px" }}>
                    <p style={{ fontSize: "14px", textAlign: "right", color: "blue", fontWeight: "400", marginBottom: "15px" }}>UID : 6utykj</p>
                    <h3 style={{ fontSize: "20px", fontWeight: "bolder", lineHeight: "1", }}>Electronic </h3>
                    <h3 style={{ fontSize: "20px", fontWeight: "bolder", lineHeight: "1", }}>Substitute  </h3>
                    <h5>Form W-8BEN</h5>
                  </th>
                </tr>
              </thead>
            </table>
          </section>

          <section>
            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "10px auto" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "start", padding: "0", fontWeight: "bold" }}>Do NOT use this form if: </td>
                  <td style={{ textAlign: "end", padding: "0", fontWeight: "bold" }}>Instead, use Form: </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <ul style={{ width: "100%", padding: "0 0 0 16px", marginTop: "15px" }}>
                      <li style={{ marginBottom: "6px" }}>A beneficial owner solely claiming foreign status or treaty benefits (other than a qualified intermediary (QI) acting as a qualified derivatives
                        dealer (QDD)) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .W-8BEN or W-8BEN-E</li>
                      <li style={{ marginBottom: "6px" }}>A hybrid entity claiming treaty benefits on its own behalf (other than a QI acting as a QDD)  . . . . . . . . . . . . . . . . . . . . . W-8BEN-E</li>
                      <li style={{ marginBottom: "6px" }}>A foreign person claiming that income is effectively connected with the conduct of a trade or business in the United States . . . . . W-8ECI</li>
                      <li>A disregarded entity with a single foreign owner that is the beneficial owner (other than a QI acting as a QDD) of the income to which this form
                        relates. Instead, the single foreign owner should use . . . . . . . . . . . . . . . . . . W-8BEN, W-8ECI, or W-8BEN-E</li>
                      <li>A foreign government, international organization, foreign central bank of issue, foreign tax-exempt organization, foreign private foundation, or
                        government of a U.S. possession claiming the applicability of section(s) 115(2), 501(c), 892, 895, or 1443(b) . . . . . . . . . . W-8EXP</li>
                      <li>U.S. entity or U.S. citizen or resident . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . W-9</li>
                      <li> A foreign person documenting itself for purposes of section 6050W . . . . . . . . . . . . . . W-8BEN, W-8BEN-E, or W-8ECI</li>
                    </ul>
                  </td>
                </tr>
                {/* <tr>
                  <td colSpan={2} style={{ borderTop: "1px solid #000", padding: "10px 0" }}> <strong>Note:</strong> If you are resident in a FATCA partner jurisdiction (that is, a Model 1 IGA jurisdiction with reciprocity), certain tax account information may be
                    provided to your jurisdiction of residence.</td>
                </tr> */}
              </tbody>

            </table>
            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "10px auto 0" }} cellPadding={0}>
              <thead>
                <tr style={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", }}>
                  <td style={{verticalAlign:"top",width:"120px"}}> <div style={{ background: "black", color: "#fff", fontWeight: "bold", width: "120px", padding: "0px 10px", height:"35px" , display:"flex" }}><p style={{margin:"auto"}}>Part I</p></div> </td>
                  <td style={{ padding: "0px 10px", fontWeight:"900" }}> <strong>Identification of Entity</strong></td>
                </tr>
              </thead>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "0px auto 10px" }}>
              <tbody>
                <tr>
                  <td style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "50%", borderRight: "1px solid #000", color: "#000" }}>
                    <div style={{ width: "100%", display: "table" }}>
                      <div style={{ float: "left", paddingRight: "10px", width: "20px" }}>1.</div>
                      <div style={{ float: "left", }}>Name of organization that is acting as intermediary .</div>
                    </div>
                    <p style={{ color: "#050581", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}> Lorem Ipsum Text</p>
                  </td>
                  <td style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "50%", color: "#000" }}>
                    <div style={{ width: "100%", display: "table" }}>
                      <div style={{ float: "left", paddingRight: "10px", width: "20px" }}>2.</div>
                      <div style={{ float: "left", }}>Country of incorporation or organization</div>
                    </div>
                    <p style={{ color: "#050581", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}> Lorem Ipsum Text</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding={0}>
                      <tbody>
                        <tr>
                          <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "70%", color: "#000" }}>
                            <div style={{ width: "100%", display: "table" }}>
                              <div style={{ float: "left", paddingRight: "10px", width: "20px" }}>3.</div>
                              <div style={{ float: "left", }}>Name of disregarded entity (if applicable), see instructions.</div>
                            </div>
                            <p style={{ color: "#050581", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}> Lorem Ipsum asd1</p>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "table" }}>
                      <div style={{ float: "left", paddingRight: "10px", width: "20px" }}>4.</div>
                      <div style={{ float: "left", }}>Chapter 3 Status (entity type) (Must check one box only.):</div>
                    </div>
                    <div style={{ width: "calc(100% - 15px)", display: "table", marginTop: "10px", fontSize: "14px", lineHeight: "1.3" }}>
                      <ul style={{ width: "100%", display: "flex", flexFlow: "row wrap", gap: "6px 0", listStyle: "none" }}>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; QI (including a QDD). Complete Part III
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Withholding foreign trust. Complete Part VII.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Nonqualified intermediary. Complete Part IV.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Nonwithholding foreign partnership. Complete Part VIII.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Territory financial institution. Complete Part V.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Nonwithholding foreign simple trust. Complete Part VIII.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; U.S. branch. Complete Part VI.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Nonwithholding foreign grantor trust. Complete Part VIII.
                        </li>
                        <li style={{ width: "50%", display: "flex" }}>
                          <input type="checkbox" name="" id="" /> &nbsp; Withholding foreign partnership. Complete Part VII..
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "table" }}>
                      <div style={{ paddingRight: "10px", width: "20px", display: "table-cell" }}>5.</div>
                      <div style={{ width: "calc(100% - 20px)", display: "table-cell" }}>Chapter 4 Status (FATCA status) (See instructions for details and complete the certification below for the entity’s applicable status.)
                        (Must check one box only.):</div>
                    </div>
                    <div style={{ width: "calc(100% - 15px)", display: "flex", flexFlow: "row", marginTop: "10px", fontSize: "14px", lineHeight: "1.3" }}>
                      <ul style={{ width: "50%", display: "flex", flexFlow: "column", listStyle: "none", paddingLeft: "20px", gap: "5px" }}>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "top" }}><input type="checkbox" name="" id="" /></span> Nonparticipating foreign financial institution (FFI) (including an FFI related to a Reporting IGA FFI other than a deemed-compliant FFI, participating FFI, or exempt beneficial owner). Complete Part IX (if applicable).
                        </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "top" }}><input type="checkbox" name="" id="" /></span> Participating FFI.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "top" }}><input type="checkbox" name="" id="" /></span> Reporting Model 1 FFI. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" checked /></span> Reporting Model 2 FFI.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span> Registered deemed-compliant FFI (other than a reporting Model 1 FFI,
                          sponsored FFI, or nonreporting IGA FFI covered in Part XIX).</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span> Territory financial institution. Complete Part V. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span> Sponsored FFI (other than a certified deemed-compliant sponsored, closely held investment vehicle). Complete Part X. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span> Certified deemed-compliant nonregistering local bank. Complete Part XII. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Certified deemed-compliant FFI with only low-value accounts. Complete Part XIII. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Certified deemed-compliant sponsored, closely held investment vehicle. Complete Part XIV. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Certified deemed-compliant limited life debt investment entity. Complete Part XV. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Certain investment entities that do not maintain financial accounts. Complete Part XVI </li>
                      </ul>
                      <ul style={{ width: "50%", display: "flex", flexFlow: "column", listStyle: "none", paddingLeft: "20px", gap: "10px" }}>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Owner-documented FFI. Complete Part XI</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Restricted distributor. Complete Part XVII.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Foreign central bank of issue. Complete Part XVIII.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Nonreporting IGA FFI. Complete Part XIX. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Exempt retirement plans. Complete Part XX. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Excepted nonfinancial group entity. Complete Part XXI. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Excepted nonfinancial start-up company. Complete Part XXII. </li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Excepted nonfinancial entity in liquidation or bankruptcy. Complete Part XXIII.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Publicly traded NFFE or NFFE affiliate of a publicly traded corporation. Complete Part XXIV.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Excepted territory NFFE. Complete Part XXV</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Active NFFE. Complete Part XXVI.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Passive NFFE. Complete Part XXVII.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Direct reporting NFFE.</li>
                        <li style={{ display: "flex", gap: "10px" }}>
                          <span style={{ verticalAlign: "middle" }}><input type="checkbox" name="" id="" /></span>Sponsored direct reporting NFFE. Complete Part XXVIII.</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "table" }}>
                      <div style={{ paddingRight: "10px", width: "20px", display: "table-cell" }}>6.</div>
                      <div style={{ width: "calc(100% - 20px)", display: "table-cell" }}>Permanent residence address (street, apt. or suite no., or rural route).
                        (Must check one box only.):</div>
                    </div>
                    <p style={{ color: "rgb(5, 5, 129)", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}> asd1, asd1</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding={0}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "70%", borderRight: "1px solid #000" }}>
                            City or town, state or province. Include postal code where appropriate.
                            <p style={{ color: "rgb(5, 5, 129)", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}>asd1, AS, asd1</p>
                          </td>
                          <td style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "30%" }}>
                            Country
                            <p style={{ color: "rgb(5, 5, 129)", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}> United States</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px", width: "20px" }}>8.</div>
                      <div style={{ width: "40%", }}> U.S. taxpayer identification number, if required &#9654; </div>
                      <div style={{ width: "150px", color: "rgb(5, 5, 129)", borderBottom: "1px solid #000" }}>12-3456213</div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "25%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> QI-EIN
                      </div>
                      <div style={{ width: "25%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> WP-EIN
                      </div>
                      <div style={{ width: "25%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> WT-EIN
                      </div>
                      <div style={{ width: "25%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> EIN
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px", }}>9a.</div>
                      <div> GIIN (if applicable) &#9654;</div>
                      <div style={{ color: "rgb(5, 5, 129)", borderBottom: "1px solid #000", width: "75%" }}>12-3456213</div>
                    </div>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px", width: "20px" }}>b.</div>
                      <div>Foreign taxpayer identification number, if required &#9654;</div>
                      <div style={{ color: "rgb(5, 5, 129)", borderBottom: "1px solid #000", width: "50%" }}>12-3456213</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px" }}>10.</div>
                      <div style={{ width: "40%", }}> Reference number(s) (see instructions) </div>
                    </div>
                    <p style={{ width: "100%", color: "rgb(5, 5, 129)" , marginBottom:"0px"}}>12-3456213</p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td style={{ borderTop: "2px solid #000" }}>For Paperwork Reduction Act Notice, see separate instructions.</td>
                  <td style={{ borderTop: "2px solid #000" }}>
                    <div style={{ display: "flex", paddingLeft: "20px" }}>
                      <div style={{ width: "50%" }}>Cat. No. 25402Q</div>
                      <div style={{ width: "50%" }}>Form <strong>W-8IMY</strong> (Rev. 10-2021)</div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </section>
          <section style={{ breakAfter: "page", breakBefore: "page" }}>
            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "10px auto" }} cellPadding={0}>
              <thead>
                <tr style={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", }}>
                  <td style={{verticalAlign:"top"}}> <div style={{ background: "black", color: "#fff", fontWeight: "bold", width: "120px", padding: "0px 10px", height:"35px" , display:"flex" }}><p style={{margin:"auto"}}>Part II</p></div> </td>
                  <td style={{ padding: "0px 10px", }}>
                    <strong>Disregarded Entity or Branch Receiving Payment.</strong> (Complete only if a disregarded entity with a GIIN or
                    a branch of an FFI in a country other than the FFI’s country of residence. Do not complete Part II for QDD
                    branches. See instructions.) </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px", lineHeight: "1.3" }}>11.</div>
                      <div style={{ lineHeight: "1" }}> Chapter 4 Status (FATCA status) of disregarded entity or branch receiving payment. </div>
                    </div>
                    <div style={{ display: "flex", flexFlow: "row wrap" }}>
                      <div style={{ width: "33.33%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> Branch treated as nonparticipating FFI.
                      </div>
                      <div style={{ width: "33.33%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> Reporting Model 1 FFI.
                      </div>
                      <div style={{ width: "33.33%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> U.S. Branch.
                      </div>
                      <div style={{ width: "33.33%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> Participating FFI.
                      </div>
                      <div style={{ width: "33.33%", display: "flex", gap: "10px" }}>
                        <input type="checkbox" name="" id="" /> Reporting Model 2 FFI.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px" }}>12.</div>
                      <div> Address of branch (street, apt. or suite no., or rural route). <strong>Do not use a P.O. box or in-care-of address</strong> (other than a registered address).</div>
                    </div>
                    <p style={{width:"100%",marginLeft:"30.72px",marginBottom:"0px",minHeight:"24px"}}></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding={0}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "70%", borderRight: "1px solid #000" }}>
                            City or town, state or province. Include postal code where appropriate.
                            <p style={{ color: "rgb(5, 5, 129)", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}>asd1, AS, asd1</p>
                          </td>
                          <td style={{ borderBottom: "1px solid #000", padding: "5px 10px", width: "30%" }}>
                            Country
                            <p style={{ color: "rgb(5, 5, 129)", width: "100%", margin: "6px 0 0", lineHeight: "1.4" }}> United States</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ borderBottom: "1px solid #000", padding: "5px 10px" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ paddingRight: "10px" }}>13.</div>
                      <div>GIIN (if any) &#9654;</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "10px auto" }} cellPadding={0}>
              <thead>
                <tr>
                  <td colSpan={2} style={{ textAlign: "center", fontSize: "20px", fontWeight: "900", paddingBottom: "10px", }}>Chapter 3 Status Certifications</td>
                </tr>
                <tr style={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", }}>
                  <td style={{verticalAlign:"top",width:"120px"}}> <div style={{ background: "black", color: "#fff", fontWeight: "bold", width: "120px", padding: "0px 10px", height:"35px" , display:"flex" }}><p style={{margin:"auto"}}>Part III</p></div> </td>
                  <td style={{ padding: "0px 10px", fontWeight:"900"}}> <strong>Qualified Intermediary</strong></td>
                </tr>
              </thead>
              
            </table>
            
            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "0px auto 10px" }} cellPadding={0}>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ fontSize: "18px", fontWeight: "600" }}>All Qualified Intermediaries</td>
                </tr>
                <tr>
                  <td style={{width:"30.72px"}}>14</td>
                  <td style={{ padding: "10px 0" }}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px" }} /> I certify that the entity identified in Part I (or branch, if relevant):
                  </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <ul style={{marginBottom:"0px"}}>
                            <li> Is a QI with respect to the accounts identified on line 10 or in a withholding statement associated with this form (as required) that is one or more of the following:</li>
                        </ul>
                        <ul style={{listStyleType:"none",paddingLeft:"28px",marginBottom:"0px"}}>
                            <li>
                               <strong>(i)</strong> Not acting for its own account;
                            </li>
                            <li>
                                <strong>(ii)</strong> A QDD receiving payments on underlying securities and/or potential section 871(m) transactions;
                            </li>
                            <li>
                            <strong>(iii)</strong> A QI assuming primary withholding responsibility for payments of substitute interest, as permitted by the QI Agreement.
                            </li>
                        </ul>
                        <ul style={{marginBottom:"0px"}}>
                            <li> Has provided or will provide a withholding statement (as required) for purposes of chapters 3 and 4, and section 1446(a), or section 
                            1446(f), subject to the certifications made on this form.</li>
                            <li>
                            To the extent it acts as a disclosing QI for purposes of section 1446(a) or (f) for payments associated with this form, the QI is to provide 
the required payee documentation to associate with an amount realized or an amount subject to withholding on a PTP distribution.
                            </li>
                        </ul>
                    </td>
                </tr>
              </tbody>
            </table>

            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "0px auto 10px" }} cellPadding={0}>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ fontSize: "18px", fontWeight: "600" }}>Qualified Intermediaries When Not Acting As Qualified Derivatives Dealers (check all that apply)</td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>15a </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> I certify that the entity identified in Part I of this form assumes primary withholding responsibility for purposes of chapters 3 and 4 for each 
                    account identified on a withholding statement attached to this form (or, if no withholding statement is attached to this form, for all accounts).
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>b </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that the entity identified in Part I of this form assumes primary withholding and reporting responsibility for each payment of an amount 
                    realized from the sale of an interest in a publicly traded partnership under section 1446(f) associated with each account identified on a withholding 
                    statement attached to this form for receiving such amounts (or, if no withholding statement is attached to this form, for all accounts).
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>c </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that the entity identified in Part I of this form assumes primary withholding as a nominee under Regulations section 1.1446-4(b)(3) 
                    for each distribution by a publicly traded partnership associated with each account identified on a withholding statement attached to this 
                    form for receiving such distributions (or, if no withholding statement is attached to this form, for all accounts).
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>d </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that the entity identified in Part I of this form is a QI acting as a qualified securities lender assuming primary withholding and 
                    reporting responsibilities with respect to payments that are U.S. source substitute dividends received from the withholding agent 
                    associated with each account identified on a withholding statement attached to this form (or, if no withholding statement is attached to this 
                    form, for all accounts).
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>e </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that the entity identified in Part I of this form assumes primary withholding responsibility for purposes of chapters 3 and 4 and 
                    primary Form 1099 reporting and backup withholding responsibility for all payments of U.S. source interest and substitute interest 
                    associated with this form, as permitted by the QI Agreement.
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>f </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that the entity identified in Part I of this form assumes primary Form 1099 reporting and backup withholding responsibility or 
                    reporting responsibility as a participating FFI or registered deemed-compliant FFI with respect to accounts that it maintains that are held by 
                    specified U.S. persons as permitted under Regulations sections 1.6049-4(c)(4)(i) or (c)(4)(ii) in lieu of Form 1099 reporting for each account 
                    identified on a withholding statement attached to this form (or, if no withholding statement is attached to this form, for all accounts).
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>g </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that the entity identified in Part I of this form does not assume primary Form 1099 reporting and backup withholding responsibility for each 
                    account identified on a withholding statement attached to this form (or, if no withholding statement is attached to this form, for all accounts).
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>h </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    (Complete only to the extent the entity identified in Part I of this form does not assume primary Form 1099 reporting and backup withholding 
                    responsibility.) If the entity identified in Part I of this form has allocated or will allocate a portion of a payment to a chapter 4 withholding rate pool 
                    of U.S. payees on a withholding statement associated with this form, I certify that the entity meets the requirements of Regulations section 
                    1.6049-4(c)(4)(iii) with respect to any account holder of an account it maintains that is included in such a withholding rate pool.
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>i </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    (Complete only to the extent the entity identified in Part I of this form does not assume primary Form 1099 reporting and backup withholding 
                    responsibility.) If the entity identified in Part I of this form has allocated or will allocate a portion of a payment to a chapter 4 withholding rate pool 
                    of U.S. payees on a withholding statement associated with this form, to the extent the U.S. payees are account holders of an intermediary or flowthrough entity receiving a payment from the entity, I certify that the entity has obtained, or will obtain, documentation sufficient to establish each 
                    such intermediary or flow-through entity status as a participating FFI, registered deemed-compliant FFI, or FFI that is a QI.
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ fontSize: "18px", fontWeight: "600" }}>Qualified Derivatives Dealers</td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>16a </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px" }} /> 
                    I certify that each QDD identified in Part I of this form or on a withholding statement associated with this form meets the requirements to 
                    act as a QDD (including approval by the IRS to so act) and assumes primary withholding and reporting responsibilities under chapters 3, 4, 
                    and 61 and section 3406 with respect to any payments it makes with respect to potential section 871(m) transactions.
                  </td>
                </tr>
                <tr>
                  <td style={{width:"30.72px",padding: "10px 0",verticalAlign:"top"}}> <label><strong>b </strong></label></td>
                  <td style={{ padding: "10px 0" ,display:"flex"}}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px",opacity:"0" }} /> 
                    Entity classification of QDD:
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px",marginLeft: "10px" }} /> 
                    Corporation
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px",marginLeft: "10px" }} /> 
                    Partnership
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px",marginBottom:"auto",marginTop:"6px",marginLeft: "10px" }} /> 
                    Disregarded Entity
                  </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <ul style={{marginBottom:"0px"}}>
                            <li> Is a QI with respect to the accounts identified on line 10 or in a withholding statement associated with this form (as required) that is one or more of the following:</li>
                        </ul>
                        <ul style={{listStyleType:"none",paddingLeft:"28px",marginBottom:"0px"}}>
                            <li>
                               <strong>(i)</strong> Not acting for its own account;
                            </li>
                            <li>
                                <strong>(ii)</strong> A QDD receiving payments on underlying securities and/or potential section 871(m) transactions;
                            </li>
                            <li>
                            <strong>(iii)</strong> A QI assuming primary withholding responsibility for payments of substitute interest, as permitted by the QI Agreement.
                            </li>
                        </ul>
                        <ul style={{marginBottom:"0px"}}>
                            <li> Has provided or will provide a withholding statement (as required) for purposes of chapters 3 and 4, and section 1446(a), or section 
                            1446(f), subject to the certifications made on this form.</li>
                            <li>
                            To the extent it acts as a disclosing QI for purposes of section 1446(a) or (f) for payments associated with this form, the QI is to provide 
the required payee documentation to associate with an amount realized or an amount subject to withholding on a PTP distribution.
                            </li>
                        </ul>
                    </td>
                </tr>
              </tbody>
            </table>









            <table style={{ width: "100%", maxWidth: "920px", borderCollapse: "collapse", margin: "0px auto 10px" }} cellPadding={0}>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ fontSize: "18px", fontWeight: "600" }}>Qualified Intermediaries When Not Acting As Qualified Derivatives Dealers (check all that apply)</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "5px 0" }}>Under penalties of perjury, I declare that I have examined the information on this form and to the best of my knowledge and belief it is true, correct, and complete. I further certify under penalties of perjury that:</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "10px 0" }}>
                    <ul style={{ listStyle: "disc", paddingLeft: "16px" }}>
                      <li>I am the individual that is the beneficial owner (or am authorized to sign for the individual that is the beneficial owner) of all the income or proceeds to which this form
                        relates or am using this form to document myself for chapter 4 purposes;
                      </li>
                      <li>The person named on line 1 of this form is not a U.S. person;</li>
                      <li>This form relates to:
                        <ol style={{ listStyle: "lower-alpha" }}>
                          <li>income not effectively connected with the conduct of a trade or business in the United States;</li>
                          <li> income effectively connected with the conduct of a trade or business in the United States but is not subject to tax under an applicable income tax treaty;</li>
                          <li>the partner’s share of a partnership’s effectively connected taxable income; or</li>
                          <li> the partner’s amount realized from the transfer of a partnership interest subject to withholding under section 1446(f);</li>
                        </ol>
                      </li>
                      <li>The person named on line 1 of this form is a resident of the treaty country listed on line 9 of the form (if any) within the meaning of the income tax treaty between the United States and that country; and</li>
                      <li>For broker transactions or barter exchanges, the beneficial owner is an exempt foreign person as defined in the instructions.Furthermore, I authorize this form to be provided to any withholding agent that has control, receipt, or custody of the income of which I am the beneficial owner or any withholding agent that can disburse or make payments of the income of which I am the beneficial owner. <strong>I agree that I will submit a new form within 30 days if any certification made on this form becomes incorrect. </strong></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p style={{ color: "blue" }}>W-8BEN – Electronic Substitute Form Statement</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    The Internal Revenue Service does not require your consent to any provisions of this document other than the certifications required to establish your status as a non-U.S. person and, if applicable, obtain
                    a reduced rate of withholding.
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "10px 0" }}>
                    <input type="checkbox" name="" id="" style={{ background: "#fff", border: "1px solid #000", marginRight: "10px" }} /> I certify that I have the capacity to sign for the person identified on line 1 of this form.
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "22px", fontWeight: "bold", maxWidth: "20%" }}>Sign Here</td>
                          <td style={{ width: "80%" }}>
                            <table style={{ borderCollapse: "collapse", width: "100%", }} cellSpacing="10">
                              <tbody>
                                <tr>
                                  <td style={{ width: "70%", padding: "0 10px", color: "blue", verticalAlign: "bottom" }}>
                                    <div style={{ display: "table", borderBottom: "1px solid #000", width: "100%" }}>
                                      <span style={{ display: "table-cell", textAlign: "left", width: "50%" }}>Date : 10-17-2023 12:00:53 IST </span>
                                      <span style={{ display: "table-cell", textAlign: "right", width: "50%" }}> ESC : YSCML</span>
                                    </div>
                                  </td>
                                  <td style={{ width: "30%", borderBottom: "1px solid #000", padding: "10px", color: "blue" }}>17-10-2023</td>
                                </tr>
                                <tr>
                                  <td style={{ width: "70%", color: "#000", textAlign: "center" }}>
                                    Signature of beneficial owner (or individual authorized to sign for beneficial owner)
                                  </td>
                                  <td style={{ width: "30%", color: "#000", textAlign: "center" }}>
                                    Date (MM-DD-YYYY)
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={2} style={{ fontSize: "16px", color: "blue", borderBottom: "1px solid #000" }}>jghkdk10</td>
                                </tr>
                                <tr>
                                  <td colSpan={2} style={{ fontSize: "16px", color: "#000" }}>Print name of signer</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <table style={{ width: "100%", maxWidth: "920px", color: "#000", borderCollapse: "collapse", margin: "auto" }}>
              <tfoot>
                <tr>
                  <td style={{ padding: "10px 0", borderTop: "2px solid #000" }} colSpan={3}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "50%", fontSize: "15px" }}>
                            <strong>For Paperwork Reduction Act Notice, see separate instructions.</strong>
                          </td>
                          <td style={{ width: "20%", textAlign: "center" }}>
                            Cat. No. 25047Z
                          </td>
                          <td style={{ width: "30%", textAlign: "end" }}>
                            Form <span style={{ fontSize: "20px", fontWeight: "bold" }}>W-8BEN</span> (Rev. 10-2021)
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%", color: "blue" }}>
                            Electronic Submission Confirmation: YVQ7NL
                          </td>
                          <td style={{ width: "20%", color: "blue", textAlign: "center" }}>
                            Email Address :
                          </td>
                          <td style={{ width: "30%", color: "blue" }}>
                            <a href="mailto:abhay.singh2@mail.com">abhay.singh2@mail.com</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tfoot>
            </table>
          </section>

          <section style={{ breakAfter: 'page', breakBefore: 'page' }}>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "40px auto" }}>
              <thead>
                <tr>
                  <td colSpan={4} style={{ fontSize: "32px", fontWeight: "bold", color: "#000", paddingBottom: "20px" }}> Tax Jurisdictions </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "18px" }} cellPadding={10}>
                      <thead>
                        <tr>

                          <td style={{ border: "2px solid #000", textAlign: "center", fontWeight: "bold" }}>Country</td>
                          <td style={{ border: "2px solid #000", textAlign: "center", fontWeight: "bold" }}>TIN Type </td>
                          <td style={{ border: "2px solid #000", textAlign: "center", fontWeight: "bold" }}>Tax Identification</td>
                          <td style={{ border: "2px solid #000", textAlign: "center", fontWeight: "bold" }}>TIN Unavailable</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "2px solid #000" }}>United States</td>
                          <td style={{ border: "2px solid #000" }}>Foreign</td>
                          <td style={{ border: "2px solid #000" }}>243543</td>
                          <td style={{ border: "2px solid #000" }}>False</td>
                        </tr>
                        <tr>
                          <td style={{ border: "2px solid #000" }}>Antarctica</td>
                          <td style={{ border: "2px solid #000" }}>Foreign</td>
                          <td style={{ border: "2px solid #000" }}>6856383</td>
                          <td style={{ border: "2px solid #000" }}>False</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section style={{ breakAfter: 'page', breakBefore: 'page' }}>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "40px auto 0", fontSize: "20px" }} cellPadding={10}>
              <thead>
                <tr>
                  <td colSpan={2} style={{ fontSize: "38px", fontWeight: "500", color: "#000", paddingBottom: "0px" }}> United States Citizenship Test Results </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ fontSize: "30px", fontWeight: "700", color: "#000", paddingBottom: "5px" }}> Information for tax purposes: </td>
                </tr>
              </thead>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "0px auto", fontSize: "20px" }} cellPadding={10}>
              <tbody>
                <tr>
                  <td style={{ width: "80%" }}>Was the individual born in the United States and held U.S. citizenship?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Country of Citizenship of the individual:</td>
                  <td>United States</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Country of Citizenship of the individual:</td>
                  <td>United States</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Country of birth of the individual:</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Is the individual subject to taxation as a U.S. citizen or resident alien?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Is the individual a Permanent Resident Card Holder (Green Card)?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Does the individual hold dual citizenship status?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Does or did the dual citizenship include U.S. citizenship?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Has U.S citizenship been formally renounced?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Date U.S. citizenship was renounced:</td>
                  <td>10-11-23</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Expatriate Documentation attached?</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Has the Individual been physically present in the U.S. on at least 31 days
                    during the current calendar year?</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>How many days has the Individual been in the U.S. in the current years?</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>How many days has the Individual been in the U.S. in the preceding years?</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>How many days has the Individual been in the U.S. in the further preceding years?</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>Effective days calculated for residency in U.S.:</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td style={{ width: "80%" }}>As result Individual considered as resident for tax purposes:</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "0px auto", fontSize: "20px" }} cellPadding={10}>
              <tfoot>
                <tr>
                  <td style={{ width: "50%" }}>Signed by: </td>
                  <td style={{ width: "50%" }}>Date: 24-11-2023</td>
                </tr>
              </tfoot>
            </table>
          </section>
          <section style={{ breakAfter: 'page', breakBefore: 'page' }}>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "40px auto", fontSize: "20px" }} cellPadding={10}>
              <thead>
                <tr>
                  <td colSpan={2} style={{ fontSize: "30px", fontWeight: "bold", paddingBottom: "20px" }}>Additional Information Provided:</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "50%" }}>Entity Name:</td>
                  <td style={{ width: "50%" }}>fgjghkghk hgkjghk</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Capacity:</td>
                  <td style={{ width: "50%" }}>Capacity Not Requested</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Form Filed:</td>
                  <td style={{ width: "50%" }}>W-8BEN (Oct 2021)</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Date:</td>
                  <td style={{ width: "50%" }}>10-17-2023</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Electronic Recipient Statement Consent:</td>
                  <td style={{ width: "50%" }}>No</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Contact email address:</td>
                  <td style={{ width: "50%" }}> <a href="mailto:abhay.singh2@mail.com" style={{ color: "#000", textDecoration: "none" }}>abhay.singh2@mail.com</a> </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Contact cell number:</td>
                  <td style={{ width: "50%" }}>  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Day time contact number:</td>
                  <td style={{ width: "50%" }}>United States 8638676734</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Day time Alternate contact number:</td>
                  <td style={{ width: "50%" }}>United States 534534535</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Day time Alternate contact number:</td>
                  <td style={{ width: "50%" }}>United States 534534535</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Signatory email address:</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Income Details:</td>
                  <td style={{ width: "50%" }}>01-Interest paid by U.S. obligors - general</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>VAT Number Provided:</td>
                  <td style={{ width: "50%" }}>7678676</td>
                </tr>
                <tr>
                  <td style={{ width: "50%", padding: "0px" }}>Forms Exchange Agent (Business Unit):</td>
                  <td style={{ width: "50%", padding: "0px" }}>ValueCoders</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Agent Contact Name:</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Agent Telephone Number:</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Agent Email Address:</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Hybrid status:</td>
                  <td style={{ width: "50%" }}>Not Applicable</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Hybrid status attachment:</td>
                  <td style={{ width: "50%" }}>No</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Hybrid status additional information:</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>Entity type:</td>
                  <td style={{ width: "50%" }}>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section style={{ breakAfter: "page", breakBefore: 'page' }}>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "40px auto 0px", fontSize: "20px" }} cellPadding={10}>
              <thead>
                <tr>
                  <th colSpan={2} style={{ fontSize: "24px", fontWeight: "600", paddingBottom: "20px", textAlign: "left", paddingLeft: "0" }}>Further Information:</th>
                </tr>
              </thead>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "20px auto", fontSize: "20px" }} cellPadding={10}>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ padding: "0" }} >
                    <div style={{ border: "2px solid #000", padding: "10px 20px", margin: "5px 0" }}>
                      <h5>Form vs Country Conflict Additional Information:</h5>
                      <p style={{ marginBottom: "0" }}>We have appointed a different country of residency based Power of Attorney who manages our
                        tax related correspondence.</p>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "0px auto", fontSize: "20px", border: "2px solid #000" }} cellPadding={10}>
              <tbody>
                <tr>
                  <td style={{ borderRight: "2px solid #000", borderBottom: "2px solid #000", fontSize: "20px", color: "#000" }}>
                    Attachments
                  </td>
                  <td style={{ borderBottom: "2px solid #000", }}>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td style={{ borderRight: "2px solid #000", padding: "10px", width: "50%" }}>
                    <p>Type:</p>
                    <p>File name:</p>
                    <p>Size:</p>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <p>Power of Attorney statement</p>
                    <p>we2.jpg</p>
                    <p>2.7MB</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "20px auto 20px", fontSize: "20px", border: "2px solid #000" }} cellPadding={10}>
              <tbody>
                <tr>
                  <td style={{ borderRight: "2px solid #000", borderBottom: "2px solid #000", fontSize: "20px", color: "#000", width: "50%" }}>
                    No U.S. Source Income Declaration
                  </td>
                  <td style={{ borderBottom: "2px solid #000", }}>
                    Selected
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Declaration Statement - Declaration of No U.S. Source Income Under penalties of perjury I
                    confirm that the goods or materials provided or manufactured and any and all associated
                    services, including consultancy, implementation, training or support are undertaken entirely from
                    locations outside of the United States and United States territories. I also confirm that the invoices
                    submitted will not include a request for payment of Dividends, Insurance Premiums or Interest
                    payments. I further confirm that should this situation change I will provide adequate notification,
                    clearly identify items that may be considered gained from U.S. sources, identify any Dividends,
                    Insurance Premiums or Interest payments due on any invoices submitted and submit an updated
                    U.S. source income statement.
                  </td>
                </tr>
                <tr>
                  <td>Signed by: jghkdk</td>
                  <td>Date: 10-17-2023</td>
                </tr>
              </tbody>
            </table>
            <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "920px", margin: "0px auto", fontSize: "20px" }} cellPadding={10}>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ padding: "0" }} >
                    <div style={{ border: "2px solid #000", padding: "10px 20px", margin: "5px 0" }}>
                      <h5>Warning Notification Override issue Number and type:</h5>
                      <ol start={1}>
                        <li>Treaty107 - Tax Treaty Claim</li>
                        <li>RES107 - Residency Test</li>
                        <li>RES117 - Residency Test</li>
                        <li>RES109 - Residency Test</li>
                        <li>RES105 - Residency Test</li>
                        <li>FTIN164 - TIN</li>
                        <li>SRC101 - W-8 Part II Special Rates and Conditions</li>
                        <li>A113 - Address</li>
                        <li>Treaty120 - Tax Treaty Claim</li>
                        <li>RES106 - Residency Test</li>
                        <li>SIG112 - SIGNATURE</li>
                      </ol>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </section>
        </div >
      </section >
      <section style={{ maxWidth: "960px", width: "100%", textAlign: "start", margin: "20px auto" }}>
        <Button variant="contained" onClick={downloadPDF}>click me</Button>
      </section>
    </>
  )
}