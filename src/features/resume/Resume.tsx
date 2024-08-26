import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import resumePdf from "../../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Resume() {
  const [width, setWidth] = useState(1200);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      <Document
        file={resumePdf}
        onLoadSuccess={() => setIsLoading(false)}
        onLoadError={() => setIsLoading(false)}
        loading={<LoadingMessage>Loading Pdf...</LoadingMessage>}
      >
        <Page
          pageNumber={1}
          scale={width > 786 ? 1.7 : 0.6}
          width={width / 3}
        />
      </Document>
    </div>
  );
}
