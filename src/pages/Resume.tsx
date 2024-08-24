import ResumeLayout from "../features/resume/ResumeLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Resume() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Resume</Heading>
      </Row>
      <ResumeLayout />
    </>
  );
}
