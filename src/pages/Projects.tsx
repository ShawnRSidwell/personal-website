import ProjectTable from "../features/projects/ProjectTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Projects() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Github Projects</Heading>
      </Row>
      <Row type="horizontal">
        <ProjectTable />
      </Row>
    </>
  );
}
