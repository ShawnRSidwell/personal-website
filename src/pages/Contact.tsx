import ContactInfo from "../features/contact/ContactInfo";
import Email from "../features/contact/Email";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

export default function Contact() {
  return (
    <div>
      <Heading as="h1">Contact</Heading>
      <Container>
        <ContactInfo />
        <Email />
      </Container>
    </div>
  );
}
