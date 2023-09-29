import React, { useState } from "react";
// import PDFReader from 'react-typescript-pdf-reader'
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router";
const ExamplePDFViewer = (props: any) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const navigate = useNavigate();
  const { pdfLink } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }: any) {
    setPageNumber(1);
  }
  return (
    <>
      {" "}
      <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <button onClick={()=>navigate(-1)}>Exit</button>
    </>
  );
};

export default ExamplePDFViewer;
