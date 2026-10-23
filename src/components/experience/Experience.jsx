import React from 'react';
import { experience } from 'data';
import Section from 'components/ui/Section';
import Highlight from 'components/ui/Highlight';
import { Chips, Chip } from 'components/ui/styles';
import { List, Item, Meta, Period, CurrentBadge, Role, Company, CompanyNote, Bullets } from './styles';

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where I've made an impact"
    lead="Two founding-engineer roles at fast-growing startups, plus features shipped to 1M+ students. I own systems end to end and measure what they deliver."
  >
    <List>
      {experience.map((job) => (
        <Item key={`${job.company}-${job.period}`} $current={job.current}>
          <Meta>
            <Period>{job.period}</Period>
            {job.current && <CurrentBadge>Current</CurrentBadge>}
          </Meta>
          <div>
            <Role>{job.role}</Role>
            <Company>
              {job.company}
              {job.note && <CompanyNote> · {job.note}</CompanyNote>}
            </Company>
            <Bullets>
              {job.bullets.map((bullet) => (
                <li key={bullet}><Highlight text={bullet} /></li>
              ))}
            </Bullets>
            <Chips aria-label="Technologies">
              {job.tech.map((t) => <Chip key={t}>{t}</Chip>)}
            </Chips>
          </div>
        </Item>
      ))}
    </List>
  </Section>
);

export default Experience;
