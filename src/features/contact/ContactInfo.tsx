import styled from "styled-components";
import Heading from "../../ui/Heading";

const ContactSection = styled.div`
  padding: 2rem 1rem;
  max-width: 1000px; /* Adjust max-width as needed */
  margin: 0 auto;
  text-align: center;
  @media (min-width: 1024px) {
    padding: 4rem 1rem;
  }
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-weight: 300; /* Font-light */
  text-align: center;
  @media (min-width: 640px) {
    font-size: 1.25rem; /* sm:text-xl */
  }
  @media (min-width: 768px) {
    font-size: 1.5rem; /* md:size-3/4 */
    margin: 0 auto;
  }
`;

function ContactInfo() {
  return (
    <ContactSection>
      <Heading as="h2">Contact Me</Heading>
      <Description>
        Feel free to reach out for any inquiries or potential opportunities! I’m
        always open to connecting and discussing further. Whether you have
        questions, ideas to share, or opportunities to explore, I’d love to hear
        from you. Let’s connect and see how we can collaborate!
      </Description>
    </ContactSection>
  );
}

export default ContactInfo;
