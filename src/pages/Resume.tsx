import ResumeLayout from "../features/resume/ResumeLayout";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Resume() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Resume</Heading>
        <Button $size="small" $variation="primary">
          Download
        </Button>
      </Row>
      <ResumeLayout />
    </>
  );
}
