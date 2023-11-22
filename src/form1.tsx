// var data = localStorage.getItem("agentDetails"); // data may be a string or null

// if (data !== null) {
//   try {
//     var parsedData = JSON.parse(data);

//     if (typeof parsedData === 'object') {
//       console.log("Priyu",parsedData);
//     } else {
//       console.error("Data in localStorage is not a valid JavaScript object.");
//     }
//   } catch (error) {
//     console.error("Error parsing data from localStorage:", error);
//   }
// } else {
//   console.error("No data with the key 'agentDetails' found in localStorage.");
// }

// const dynamicData = {
//     parsedData: {
//       contactEmail: parsedData.contactEmail,
//       // Add other dynamic data properties here
//     },
//     // Add other dynamic data properties if needed
//   };

// const form1 =
// `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <!-- html2pdf CDN-->
//     <script src=
// "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js">
//     </script>

//     <style>
//         @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
//         body{
//             font-family: 'Barlow', sans-serif;
//             font-family: 'Roboto', sans-serif;
//         }
//         .container {

//         }

//         .d-flex{
//             display: flex !important;
//         }
//         .mx-auto{
//             margin-left: auto !important;
//             margin-right: auto !important;
//         }
//         .my-auto{
//             margin-top: auto !important;
//             margin-bottom: auto !important;
//         }
//         .text-center{
//             text-align: center !important;
//         }
//         .justify-between{
//             justify-content: space-between !important;
//         }
//         .justify-center{
//             justify-content: center !important;
//         }
//         .w-25{
//             width: 25%;
//         }
//         .w-50{
//             width: 50%;
//         }
//         .w-100{
//             width: 100%;
//         }

//         .d-text{
//             color: #545599 !important;
//         }
//         ul.arrow {
//         position: relative;
//         list-style: none;
//         }
//         ul.arrow {
//             width: fit-content;
//         }
//         .arrow li::before {
//         content: '▶';
//         position: absolute;
//         left: 0;
//         }
//         .h-fit{
//             height: fit-content;
//         }
//         .mb-0{
//             margin-bottom: 0px !important;
//         }
//     </style>
// </head>

// <body>
//     <div id = "WECI" class="container">
//         <button id="button">Generate PDF</button>
//         <div class="header d-flex" id="makepdf">
//             <div class="w-25" style="border-right: 1px solid; border-bottom: 1px solid;">
//                 <div class="d-flex">
//                         <p>
//                             Form
//                         </p>
//                         <h1>
//                             W-8BEN
//                         </h1>
//                 </div>
//                 <div>
//                     <p>
//                     ${dynamicData.parsedData.contactEmail}
//                     </p>
//                 </div>
//                 <div>
//                     <p>
//                         Department of the Treasury
//                         Internal Revenue Service
//                     </p>
//                 </div>
//             </div>
//             <div class="w-50 text-center" style="border-right: 1px solid; border-bottom: 1px solid;">
//                 <div>
//                         <h2 style="width: 86%;" class="mx-auto">
//                             Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding and Reporting (Individuals)
//                         </h2>
//                 </div>
//                 <div class="text-center">
//                     <ul style="list-style: none;" class="mx-auto arrow">
//                         <li>For use by individuals. Entities must use Form W-8BEN-E.</li>
//                         <li>Go to www.irs.gov/FormW8BEN for instructions and the latest information.</li>
//                         <li>Give this form to the withholding agent or payer. Do not send to the IRS.</li>
//                     </ul>
//                 </div>

//             </div>
//             <div class="w-25" style="border-right: 1px solid; border-bottom: 1px solid;">
//                 <div class="d-flex justify-center d-text">
//                         <p class="h-fit my-auto">
//                             UID :
//                         </p>
//                         <p>
//                             6utykj
//                         </p>
//                 </div>
//                 <div>
//                     <p>
//                         Electronic
//                         Substitute
//                     </p>
//                 </div>
//                 <div>
//                     <p>
//                         Form W-8BEN
//                     </p>
//                 </div>
//             </div>
//         </div>
//         <div class="d-flex justify-between">
//             <div> <h4 class="mb-0">Do NOT use this form if:</h4></div>
//             <div> <h4 class="mb-0">Instead, use Form:</h4></div>
//         </div>
//         <div class="d-flex justify-between">
//             <ul style="width: 100%;padding: 0;">
//                 <li style="line-height: 0px;" class="d-flex"><p class="h-fit" style="min-width: max-content;">You are NOT an individual</p><div style="width: 100%; border-bottom: dotted;margin: 0px 10px;"></div><p class="h-fit" style="min-width: max-content;">W-8BEN-E</p></li>
//                 <li style="line-height: 0px;" class="d-flex"><p class="h-fit" style="min-width: max-content;">You are NOT an individual</p><div style="width: 100%; border-bottom: dotted;margin: 0px 10px;"></div><p class="h-fit" style="min-width: max-content;">W-8BEN-E</p></li>
//                 <li style="line-height: 0px;" class="d-flex"><p class="h-fit" style="min-width: max-content;">You are NOT an individual</p><div style="width: 100%; border-bottom: dotted;margin: 0px 10px;"></div><p class="h-fit" style="min-width: max-content;">W-8BEN-E</p></li>
//                 <li style="line-height: 0px;" class="d-flex"><p class="h-fit" style="min-width: max-content;">You are NOT an individual</p><div style="width: 100%; border-bottom: dotted;margin: 0px 10px;"></div><p class="h-fit" style="min-width: max-content;">W-8BEN-E</p></li>
//                 <li style="line-height: 0px;" class="d-flex"><p class="h-fit" style="min-width: max-content;">You are NOT an individual</p><div style="width: 100%; border-bottom: dotted;margin: 0px 10px;"></div><p class="h-fit" style="min-width: max-content;">W-8BEN-E</p></li>
//             </ul>
//         </div>
//     </div>
// </body>

// <script>
//     let button = document.getElementById("button");
//     let makepdf = document.getElementById("makepdf");

//     button.addEventListener("click", function () {
//         let mywindow = window.open("", "PRINT",
//                 "height=400,width=600");

//         mywindow.document.write(makepdf.innerHTML);

//         mywindow.document.close();
//         mywindow.focus();

//         mywindow.print();
//         mywindow.close();

//         return true;
//     });
// </script>
// </html>`

// export default form1;
// src/App.tsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@mui/material";
import { Padding } from "@mui/icons-material";
const Form1: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    if (contentRef.current) {
      const content = contentRef.current.cloneNode(true) as HTMLDivElement;
      console.log("contentRef.current", content);
      content.style.fontSize = "16px";
      content.style.color = "black";
      const scale = 5; // You can adjust the scale as needed
      const canvasWidth = 4800; // Set your desired canvas width
      const canvasHeight =4800; // Set your desired canvas height

      html2canvas(contentRef.current, {
        width: 900,
        height: 900,
        // scale: 1,
      }).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL("image/png", 1.0); // Use original image quality
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          canvas.width / scale,
          canvas.height / scale
        );
        // pdf.addImage(
        //   imgData,
        //   "PNG",
        //   10,
        //   10,
        //   canvasWidth / scale,
        //     canvasHeight / scale
        // );

        pdf.save("example.pdf");
      });
    }
  };

  return (
    <div  style={{margin: "0 auto",width:"900px", padding:"0px", display:"table" }}>
      <h1 style={{ color: "red", paddingLeft:"20px"}} >Heading 1</h1>
      <div ref={contentRef} style={{ paddingLeft:"20px"}}>
        {/* {/ Your content goes here /} */}
        <p style={{ color: "yelow" }}>
          This is the content that will be in the PDF.
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "800px", 
            marginBottom:"20px"
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Header 1
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Header 2
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Row 1, Cell 1
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Row 1, Cell 2
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Row 2, Cell 1
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Row 2, Cell 2
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <Button onClick={downloadPDF} variant="contained">Download PDF</Button>
      </div>
    </div>
  );
};

export default Form1;
