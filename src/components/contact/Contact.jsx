import React from 'react';
import {
  Container,
  Card,
  Title,
  Subtitle,
  FormWrapper,
  StyledIframe
} from './styles';

import { useWindowSize } from 'contexts/WindowSizeContext';

const Contact = () => {
  const { isXSmall, isSmall, isMedium, isLarge } = useWindowSize();
  const isMobile = isXSmall || isSmall;
  const isTablet = isMedium || isLarge;

  return (
    <Container>
      <Card isMobile={isMobile || isTablet}>
        <Title isMobile={isMobile || isTablet}>📬 Let&apos;s Connect</Title>
        <Subtitle isMobile={isMobile || isTablet}>
          Have questions about my work or just want to say hi? Fill out the form below and I&apos;ll get back to you!
        </Subtitle>
        <FormWrapper isMobile={isMobile || isTablet}>
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
