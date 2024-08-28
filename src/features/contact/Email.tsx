import emailjs from "emailjs-com";
import { useState } from "react";
import styled from "styled-components";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

const Section = styled.section`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 0.625rem;
  font-size: 0.875rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

const Textarea = styled.textarea`
  padding: 0.625rem;
  font-size: 0.875rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  resize: vertical;
  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

function Email() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Your email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
          />
        </FormGroup>
        {/* <Button type="submit">Send message</Button> */}
      </Form>
    </Section>
  );
}

export default Email;
