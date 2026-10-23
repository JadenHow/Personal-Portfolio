import React from 'react';
import { Container, SectionWrapper, SectionHeader, Eyebrow, SectionTitle, SectionLead } from './styles';

const Section = ({ id, eyebrow, title, lead, children }) => (
  <SectionWrapper id={id} aria-labelledby={`${id}-title`}>
    <Container>
      <SectionHeader>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle id={`${id}-title`}>{title}</SectionTitle>
        {lead && <SectionLead>{lead}</SectionLead>}
      </SectionHeader>
      {children}
    </Container>
  </SectionWrapper>
);

export default Section;
