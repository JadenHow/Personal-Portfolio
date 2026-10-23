import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { profile } from 'data';
import { Container, PrimaryButton, SecondaryButton } from 'components/ui/styles';
import { Wrapper, Card, Title, Lead, Actions, EmailText, Footer } from './styles';

const CONTACT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSfuVCn43_i6UuEHvYkL2OmBLMuzZt_lgKH6QfrgHkzqPaT6fA/viewform';

const Contact = () => (
  <Wrapper id="contact" aria-labelledby="contact-title">
    <Container>
      <Card>
        <Title id="contact-title">Let&apos;s build something together</Title>
        <Lead>
          I&apos;m looking for my next backend or full-stack role. If you&apos;re hiring, or just want to talk
          systems, my inbox is open.
        </Lead>
        <Actions>
          <PrimaryButton href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" /> Email me
          </PrimaryButton>
          <SecondaryButton href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" /> Connect on LinkedIn
          </SecondaryButton>
        </Actions>
        <EmailText>
          {profile.email} · or use the <a href={CONTACT_FORM} target="_blank" rel="noreferrer">contact form</a>
        </EmailText>
      </Card>

      <Footer>
        <span>© {new Date().getFullYear()} {profile.name} · Built with React</span>
        <nav aria-label="Social">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </Footer>
    </Container>
  </Wrapper>
);

export default Contact;
