import resumePdf from "../../assets/resume.pdf";

export default function Resume() {
  return <embed src={resumePdf} width="100%" height="900vh" />;
}
