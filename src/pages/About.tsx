import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function About() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">About</Heading>
      </Row>
      <Container>
        <div>about section</div>
      </Container>
    </>
  );
}
