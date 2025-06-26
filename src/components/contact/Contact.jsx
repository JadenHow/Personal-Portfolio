import React from 'react';
import {
  Container,
  Card,
  Title,
  Subtitle,
  FormWrapper,
  StyledIframe
} from './styles';

const Contact = () => {
  return (
    <Container>
      <Card>
        <Title>📬 Let&apos;s Connect</Title>
        <Subtitle>
          Have questions about my work or just want to say hi? Fill out the form below and I’ll get back to you!
        </Subtitle>
        <FormWrapper>
          <StyledIframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfuVCn43_i6UuEHvYkL2OmBLMuzZt_lgKH6QfrgHkzqPaT6fA/viewform?embedded=true"
            title="Contact Form"
            height="750"
          />
        </FormWrapper>
      </Card>
    </Container>
  );
};

export default Contact;
