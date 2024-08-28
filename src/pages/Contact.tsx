import ContactInfo from "../features/contact/ContactInfo";
import Email from "../features/contact/Email";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Contact() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Contact</Heading>
      </Row>
      <Container>
        <ContactInfo />
        <Email />
      </Container>
    </>
  );
}
