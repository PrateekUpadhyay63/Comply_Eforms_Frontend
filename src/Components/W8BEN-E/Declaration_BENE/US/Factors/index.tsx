import React, { useState,ChangeEvent,useEffect } from "react";
import { FormControl, Typography, Button, Paper, Tooltip ,Link} from "@mui/material";
import { Info } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
    getAllCountries,
    
  } from "../../../../../Redux/Actions";
  import { useDispatch, useSelector } from "react-redux";
import checksolid from "../../../../../assets/img/check-solid.png";
// import check from "../../../assets/img/check.png";
import Accordion from "@mui/material/Accordion";
import DeleteIcon from "@mui/icons-material/Delete";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Factors() {
  const history= useNavigate()
  const dispatch = useDispatch();
  const [allocation, setAllocation] = useState(''); // State to track allocation input

  const handleAllocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setAllocation(inputValue);

  const mirroredText = document.getElementById('mirroredText');
  if (mirroredText) {
    mirroredText.innerText = inputValue;
  }
};
useEffect(()=>{
    dispatch(getAllCountries());
})
const getCountriesReducer = useSelector(
    (state: any) => state.getCountriesReducer
  );
  const [toolInfo, setToolInfo] = useState("");
  const [numPapers, setNumPapers] = useState(1);
  const addIncomeTypePaper = () => {
    setNumPapers(numPapers + 1);
  };
  const [expanded, setExpanded] = React.useState<string | false>("");
  const deleteIncomeTypePaper = () => {
    setNumPapers(numPapers - 1);
  };
  const handleChangestatus =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
    };
    
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
                <a href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-" target="popup" onClick={()=>window.open('https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-','name','width=600,height=400')}>Help Video</a>
                </div>
            </div>
        </div>

        <div className="row w-100 h-100">
        <div className="col-4">
          <div style={{ padding: "20px 0px",height:"100%",marginTop:"20px" }}>
        <Paper style={{ padding: "0px 0px 0px 18px", height:"100%" }} className="bg-none">
         
              <div style={{background:"#ffffff33",height:"100%"}}>
                <div className="stepper">
                      <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChangestatus("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          className="accordian-header"
                        >
                          <Typography
                          className="text-uppercase d-flex active"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step I<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li className="active"> <label className="my-auto">Name and Address </label></li>
                              <li className="active">Account Indivation(Optional)</li>
                              <li className="active">Tax Identification Number</li>
                              <li className="active">Contact Details</li>
                              <li className="active">Form Selection</li>
                            </ul>
                          </Paper>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChangestatus("panel2")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          className="accordian-header"
                        >
                                     <Typography
                          className="text-uppercase d-flex"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step II<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li className="active"> <label className="my-auto">US Sourced Income Declaration (optional)</label></li>
                              <li >United States Citizenship Status</li>
                              <li>Tax Identification Number</li>
                              <li>Treaty Claim</li>
                              <li>
                              Special Rates and Conditions
                              </li>
                            </ul>
                        </Paper>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChangestatus("panel3")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                          className="accordian-header"
                        >
                                     <Typography
                          className="text-uppercase d-flex"
                            sx={{
                              width: "100%",
                              flexShrink: 0,
                              fontSize: "20px",
                            }}
                          >
                            Step III<img className="steper-check-icon-solid my-auto mx-2"  src={checksolid}/>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Paper
                            elevation={3}
                            style={{
                              padding: "20px",
                              backgroundColor: "#f0f0f0",
                              overflow: "auto",
                            }}
                          >
                            <ul>
                              <li > <label className="my-auto">Penalties of Perjury Certification</label></li>
                              <li >Electronic Signature</li>
                              <li>Electronic Signature Confirmation</li>
                              <li>U.S. Tax Certification Complete</li>
                              
                            </ul>
                        </Paper>
                        </AccordionDetails>
                      </Accordion>
                    </div>
              </div>
           
        </Paper>
      </div>
      </div>
        <div className="col-8">
      <div style={{ padding: "20px" }}>
      
        <Paper style={{ padding: "18px" }}>
          <div style={{ margin: "10px" }}>
            <Typography
              align="left"
              style={{ marginTop: "10px", fontSize: "38px" }}
            >
              U.S. Source Income and Determining Factors
              <span>
                    <Tooltip
                      style={{ backgroundColor: "black", color: "white" }}
                      title={
                        <>
                          <Typography color="inherit">
                          TT-124 Q&A process, U.S. Sourced Income
                          </Typography>
                          <a onClick={() => setToolInfo("factor")}>
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
            {toolInfo === "factor" ? (
                          <div>
                            <Paper
                              style={{
                                backgroundColor: "#dedcb1",
                                padding: "15px",
                                marginBottom: "10px",
                              }}
                            >
                              <Typography>
                              EH023:  Select the type of income the submission is being applied to.
                              </Typography>

                              <Typography style={{ marginTop: "10px" }}>
                              You may select more than one where multiple sources of income may be covered.
Generally income is considered from U.S. sources if it is paid by domestic U.S. corporations, U.S. citizens or resident aliens, or entities formed under the laws of the United States or a state.
                              </Typography>
                              <Typography className="my-2">
                              Income is also from U.S. sources if the property that produces the income is located in the United States or the services for which the income is paid were performed in the United States. 
                              </Typography>
                              <Typography className="my-2">
                              A payment is treated as being from sources within the United States if the source of the payment cannot be determined at the time of payment, such as fees for personal services paid before the services have been performed.
</Typography>
<Typography className="my-2">
Generally, interest on an obligation of a foreign corporation or foreign partnership is foreign-source income.
 
</Typography>
<Typography className="my-2">
If the entity is engaged in a trade or business in the United States during its tax year, interest paid by such an entity is treated as from U.S. sources only if interest is paid by a U.S. trade or business conducted by the entity or is allocable to income that is treated as effectively connected with the conduct of a U.S. trade or business. This applies to a foreign partnership only if it is predominantly engaged in the active conduct of a trade or business outside the United States.
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
{Array.from({ length: numPapers }).map((_, index) => (
            <Paper
              className="paper"
              elevation={3}
              style={{ backgroundColor: "#e8e1e1", marginTop: "10px" }}
            >
              <div style={{ padding: "15px" }}>
              <Typography align="right">
                             {numPapers > 1 ?( <DeleteIcon
                                onClick={deleteIncomeTypePaper}
                                style={{ color: "red", fontSize: "30px" ,cursor:"pointer"}}
                              />):""}
                            </Typography>
                <Typography
                  align="left"
                  style={{ fontSize: "22px",  }}
                >
                  Please select income type{" "}
                  <span style={{ color: "red", fontSize: "30px" }}>*</span>
                  <span>
                    <Tooltip
                      style={{ backgroundColor: "black", color: "white" }}
                      title={
                        <>
                          <Typography color="inherit">
                          TT-157 USSI_General
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
                              USSI_General
                              <br/>
                              Wages & Salaries
                              </Typography>

                              <Typography style={{ marginTop: "10px" }}>
                              Wages, salaries, and tips you received for performing services as an employee of an employer must be included in your gross income. Amounts withheld for taxes, including but not limited to income tax, social security and Medical taxes, are considered 'received' and must be included in gross income in the year they are withheld. Generally, your employer's contribution to a qualified pension plan for you is not included in gross income at the time it is contributed. Additionally, while amounts withheld under certain salary reduction agreements with your employer are generally excluded from gross income, such amounts may be included in wages subject to social security and Medicare taxes in the year they are withheld.
                              </Typography>
<Typography className="my-2">
Business Income
</Typography>
<Typography className="my-2">
Business Income - Personal Services: All wages and any other compensation for services performed in the United States are considered to be from sources in the United States.
</Typography>
<Typography className="my-2">
  
If you are employee and receive compensation for labor or personal services performed both inside and outside the United States, special rules apply in determining the source of the compensation. Compensation (other than certain fringe benefits) is sourced on a time basis. Certain Fringe benefits (such as housing and education) are sourced on a geographical basis.
</Typography>
<Typography className="my-2">
Business income may include income received from the sale of products or services. For example, fees received by a person from the regular practice of a profession are business income. Rents received by a person in the real estate business are business income. Payments received by a business in the form of property or services must be included in income at the fair market value of the property or services.
</Typography>
<Typography className="my-2">
A business may be organized as a sole proprietorship, partnership, or corporation. A sole proprietorship is an unincorporated business owned by an individual. A sole proprietorship has no existence apart from its owner. Business debts are personal debts of the owner. A limited liability company (LLC) owned by one individual is treated as a sole proprietorship for federal income tax purposes, unless the owner elects to treat the LLC as a corporation.

</Typography>
<Typography className="my-2">
A partnership is an unincorporated business organization that is the result of two or more persons joining together to carry on a trade or business, a financial operation, or venture. Each person contributes money, property or services, in return for a right to share in the profits and losses of the partnership. An LLC with more than one owner is treated as a partnership for tax purposes, unless the LLC elects to be treated as a corporation.
</Typography>
<Typography className="my-2">
The term 'corporation', for federal income tax purposes, generally includes legal entities separate from the persons who formed them under federal or state law or the shareholders who own them.
</Typography>
<Typography className="my-2">
Interest
</Typography>
<Typography className="my-2">
Most interest that you either receive or is credited to your account and that can be withdrawn without penalty is taxable income. Examples of taxable interest are interest on bank accounts, money market accounts, certificates of deposit, and deposited insurance dividends. Interest on insurance dividends left of deposit with the U.S. Department of Veterans Affairs, however, is not taxable. Interest on Series EE and Series I U.S. Saving Bonds generally does not have to be reported until the earlier of when the bonds mature or are redeemed.
</Typography>
<Typography className="my-2">
 
If you receive taxable interest, you may have to pay estimated tax.
</Typography>
<Typography className="my-2">
Dividends
</Typography>
<Typography className="my-2">
Dividends are distributions of property a corporation pays you because you own stock in that corporation. Most dividends are paid in cash. However, dividends may be paid as stock of another corporation or any other property. You also may receive dividends through your interest in a partnership, an estate, a trust, a subchapter S corporation or from an association that is taxable as a corporation.
</Typography>
<Typography className="my-2">
If you receive dividends in significant amounts, you may have to pay estimated tax to avoid a penalty.
</Typography>

<Typography className="my-2">
Rents
</Typography>
<Typography className="my-2">

Generally, cash or the fair market value of property you receive for the use of real estate or personal property is taxable to you as rental income. You can generally deduct expenses of renting property from your rental income.
</Typography>
<Typography className="my-2">

Most individual operate on a cash basis, which means they count their rental income as income when it is actually or constructively received, and deduct their expenses as they are paid. Some specific type of income are:
</Typography>
<Typography className="my-2">
- Amounts paid to cancel a lease - If a tenant pays you to cancel a lease, this money is also rental income and is reported in the year you receive it.
</Typography>
<Typography className="my-2">
- Advance Rent - Generally you include any advance rent paid in income in the year you receive it regardless of the period covered or the method of accounting you use.
</Typography>
<Typography className="my-2">
- Expenses paid by tenant - If your tenant pays any of your expenses, those payments are rental income. You may be allowed to deduct the expenses if they are considered deductible expenses.
</Typography>
<Typography className="my-2">
- Security deposits - Do not include a security deposit in your income if you may be required to return it to the tenant at the end of the lease. However, if you keep part or all of the security deposit because the tenant breaches the lease by vacating the property early, include the amount you keep in your income that year.
</Typography>
<Typography className="my-2">
For more information on rental income and expenses, including passive activity loss limits, refer to Publication 527, Publication 925.
</Typography>
<Typography className="my-2">
Royalties
</Typography>
<Typography className="my-2">
'To be a royalty, a payment must relate to the use of a valuable right. Payments for the use of trademarks, trade names, service marks or copyrights, whether or not payment is based on the use made of such property, ore ordinarily classified as royalties for federal tax purposes'
</Typography>
<Typography className="my-2">
The revenue ruling also notes that payments for the use of a professional athlete's name, photograph, likeness or facsimile signature are ordinarily characterized as royalties.
</Typography>
<Typography className="my-2">
On the basis of precedents, Rev. Rul. 81-178 holds that in Situation 1, since the payments from the licensing agreements are for the use of the organization's trademarks, trade names, service marks, copyrights, and its members' names, photographs, likenesses, and facsimile signatures, such amounts are royalties under IRC 512(b)(2). This conclusion is not altered by the organization's right to approve the quality or style of the licensed products and services, since the mere retention of quality control rights does not cause payments to loose their characterization as royalties. The revenue ruling also holds that in Situation 2, since the agreements require the personal services of the organization's members, the payments received are compensation for personal services and not royalties under IRC 512(b)(2).
</Typography>
<Typography className="my-2">
When the organization files a patent application, the inventor assigns both legal and beneficial rights in the invention to the organization, which agrees to pay a specified percentage of royalties received from licensees. the revenue ruling concludes that since the organization is both the beneficial and legal owner of the patents. amounts paid pursuant to licensing agreements are royalties which fall within IRC 512(b)(2). Rev. Rul. 76-297 distinguishes Rev. Rul. 73-193 on the basis that the organization described in Rev. Rul. 73-193 held only bare legal title to the patents, while the organization described in Rev. Rul. 76-297 is both the beneficial and legal owner of its patents.
</Typography>
<Typography className="my-2">
Sale of Real Property
</Typography>
<Typography className="my-2">
Real property is land and buildings and generally anything built on, growing on, or attached to land.
</Typography>
<Typography className="my-2">
Gross income from sources in the united States includes gains, profits and income from the sale or other disposition of real property located in the United States.
</Typography>
<Typography className="my-2">
Sale of Personal Property
</Typography>
<Typography className="my-2">
Personal property is property, such as machinery, equipment, or furniture, that is not real property.
 
</Typography>
<Typography className="my-2">
Gain or loss from the sale or exchange of personal property generally has its source in the United States if you have a tax home in the United States. If you do not have a tax home in the United States, the gain or loss generally is considered to be from sources outside the United States.
</Typography>
<Typography className="my-2">
Pensions
</Typography>
<Typography className="my-2">
If you receive retirement benefits in the form of pension or annuity payments from a qualified employer retirement plan, all or some portion of the amounts you receive may be taxable.
</Typography>
<Typography className="my-2">
The pension or annuity payments that your receive are fully taxable if you have no investment in the contract because any of the following situations apply:
</Typography>
<Typography className="my-2">
- You did not contribute to anything or are not considered to have contributed anything for the pension or annuity
</Typography>
<Typography className="my-2">
- Your employer did not withhold contributions from your salary, or
</Typography>
<Typography className="my-2">
- You received all of your contributions (your investment in the contract) tax free in prior years
</Typography>
<Typography className="my-2">
If you receive pension or annuity payments before age 59 1/2, you may be subject to additional 10% tax on early distributions unless the distribution qualifies for an exception.
</Typography>
<Typography className="my-2">
Scholarships - Fellowships
</Typography>
<Typography className="my-2">
A scholarship is generally an amount paid or allowed to a student at an educational institution for the purpose of study. A fellowship is generally an amount paid to an individual for the purpose of research.
</Typography>
<Typography className="my-2">
If you receive a scholarship or fellowship grant, all or part of the amounts you receive may be tax-free.
</Typography>
<Typography className="my-2">
Qualified scholarship and fellowship grants are treated as tax-free amounts in the following conditions are met:
</Typography>
<Typography className="my-2">
- You are a candidate for a degree at an educational institution that maintains a regular faculty and curriculum and normally has a regularly enrolled body of students in attendance at the place where it carries on its educational activities; and
</Typography>
<Typography className="my-2">
- Amounts you receive as a scholarship or fellowship grant are used for tuition and fees required for enrolment or attendance at the educational institution, or for fees, books, supplies, and equipment required for courses at the educational institution.
</Typography>
<Typography className="my-2">
you must include in gross income amounts used for incidental expenses, such as room and board, travel and optional equipment, and generally, amounts received as payments for teaching, research or other services required as a condition for receiving the scholarship or fellowship grant. Also you must include in income any part of the scholarship or fellowship that represents payments for services. Generally, when reporting scholarship income on your tax return, you will include the amounts on the same line as 'Wages, salaries, tips, etc. 'Review the instructions of your tax form to determine how to report any income from scholarships.'
</Typography>
<Typography className="my-2">
However you do not need to include in gross income any amounts you receive for services that are required by the National Health Service Corps Scholarship Program or The Armed Forces Health Professions Scholarship and Financial Assistance Program.
</Typography>
<Typography className="my-2">
Sale of Natural Resources
</Typography>
<Typography className="my-2">
The income from the sale of products of any farm, mine, oil or gas well, other natural deposit, or timber located in the United States and sold in a foreign country, or located in a foreign country and sold in the united States, is partly from sources in the United States. For information on determining that part, see section 1.863-1(b) of the regulations.
</Typography>
<Typography className="my-2">
Transportation Income
</Typography>
<Typography className="my-2">
Transportation income is income from the use of a vessel or aircraft or for the performance of services directly related to the use of any vessel or aircraft. This is true whether the vessel or aircraft is owned, hired or leased. The term 'vessel or aircraft' includes any container used in connection with a vessel or aircraft.
</Typography>
<Typography className="my-2">
All income from transportation that begins and ends in the United States is treated as derived from sources in the United States. If the transportation begins or ends in the United States, 50% of the transportation income is treated as derived from sources in the United States.
</Typography>
<Typography className="my-2">
For transportation income from personal services, 50% of the income is U.S. source income if the transportation is between the United States and a U.S. possession. For non-residential aliens, this only applies to income derived from, or in connection with, an aircraft.
</Typography>
<Typography className="my-2">
For information on how U.S. source transportation income is taxed, see Chapter 4.
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
                <FormControl className="w-100">
                  <select
                    className="col-md-6 col-12"
                    style={{
                      padding: " 0 10px",
                      color: "#7e7e7e",
                      fontStyle: "italic",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                    name="interestDividendPaymentId"
                    id="Income"
                    onChange={handleSelectChange}
                 
                  >
                    <option value={0}>-Select-</option>
                    <option value={1}>Other</option>
                    <option value={2}>Goods</option>
                    <option value={3}>Services</option>
                  </select>
                </FormControl>

               {selectedOption === "1" &&( 
              <>
               <Typography align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}>
              Please provide an explanation
              <span style={{ color: "red",fontSize:"30px" }}>*</span>
              </Typography>
              <FormControl className="w-100">
                <input
                className="col-md-12 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "7rem",
                  }}
                  
                  
                />
              </FormControl>
              <Typography align="left"
                style={{ fontSize: "22px", marginTop: "10px" }}>
              Allocation %  <span style={{ color: "red",fontSize:"30px" }}>*</span>
              </Typography>
              <FormControl className="w-50">
                <input
                 onChange={handleAllocationChange} 
                 value={allocation}
                className="col-md-6 col-12"
                  style={{
                    padding: " 0 10px",
                    color: "#7e7e7e",
                    fontStyle: "italic",
                    height: "3rem",
                  }}
                  
                  
                />
              </FormControl>
              </>)}

               {selectedOption === "2" &&( <>
                <Typography
                  align="left"
                  style={{ fontSize: "22px", marginTop: "10px" }}
                >
                  Select where goods are used{" "}
                  <span style={{ color: "red", fontSize: "30px" }}>*</span>
                </Typography>
                <FormControl className="w-100">
                  <select
                    className="col-md-6 col-12"
                    style={{
                      padding: " 0 10px",
                      color: "#7e7e7e",
                      fontStyle: "italic",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                    name="interestDividendPaymentId"
                    id="Income"
                  >
                     <option value="">-Select-</option>
                                      <option value={257}>
                                        United Kingdom
                                      </option>
                                      <option value={258}>United States</option>
                                      <option value="">---</option>
                                      {getCountriesReducer.allCountriesData?.map(
                                        (ele: any) => (
                                          <option key={ele?.id} value={ele?.id}>
                                            {ele?.name}
                                          </option>
                                        )
                                      )}
                  </select>
                </FormControl>

                <Typography
                  align="left"
                  style={{ fontSize: "22px", marginTop: "10px" }}
                >
                  Allocation %{" "}
                  <span style={{ color: "red", fontSize: "30px" }}>*</span>
                </Typography>
                <FormControl className="w-50">
                  <input
                   onChange={handleAllocationChange} 
                   value={allocation}
                    className="col-md-6 col-12"
                    style={{
                      padding: " 0 10px",
                      color: "#7e7e7e",
                      fontStyle: "italic",
                      height: "3rem",
                    }}
                  />
                </FormControl>
                </>)}

                {selectedOption ==="3" &&( <>
                <Typography
                  align="left"
                  style={{ fontSize: "22px", marginTop: "10px" }}
                >
                  Select where services are used{" "}
                  <span style={{ color: "red", fontSize: "30px" }}>*</span>
                </Typography>
                <FormControl className="w-100">
                  <select
                    className="col-md-6 col-12"
                    style={{
                      padding: " 0 10px",
                      color: "#7e7e7e",
                      fontStyle: "italic",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                    name="interestDividendPaymentId"
                    id="Income"
                  >
                    <option value={0}>-Select-</option>
                  </select>
                </FormControl>

                <Typography
                  align="left"
                  style={{ fontSize: "22px", marginTop: "10px" }}
                >
                  Allocation %{" "}
                  <span style={{ color: "red", fontSize: "30px" }}>*</span>
                </Typography>
                <FormControl className="w-50">
                  <input
                   onChange={handleAllocationChange} 
                   value={allocation}
                    className="col-md-6 col-12"
                    style={{
                      padding: " 0 10px",
                      color: "#7e7e7e",
                      fontStyle: "italic",
                      height: "3rem",
                    }}
                  />
                </FormControl>
                </>)}
              </div>
            </Paper>
            ))}
            <div style={{ marginTop: "20px", display: "flex" }}>
              <Button
               onClick={addIncomeTypePaper}
                variant="contained"
                size="large"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Add Income Type
              </Button>
              <div className="d-flex">
              <Typography
             
                style={{
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                Total Allocation:
              </Typography>
              <Typography
              id="mirroredText"
                style={{
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
               {allocation}
              </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <Button  disabled={allocation !== '100'} variant="contained" style={{ color: "white" }}>
              SAVE & EXIT
            </Button>
            <Button
              variant="contained"
              style={{ color: "white", marginLeft: "15px" }}
            >
              View form
            </Button>
            <Button
             disabled={allocation !== '100'}
            onClick={()=>{
              history("/BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Status_BenE")
            }}
              variant="contained"
              style={{ color: "white", marginLeft: "15px" }}
            >
              Confirm
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
              onClick={() => {
                history("/BenE/Tax_Purpose_BenE/Declaration_BenE/US");
              }}
            >
              <span style={{ marginRight: "5px" }}>
                {" "}
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
  );
}
