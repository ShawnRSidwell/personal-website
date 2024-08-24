import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import resumePdf from "../../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Document file={resumePdf}>
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </div>
  );
}
