import React from 'react';
import { skills, education } from 'data';
import Section from 'components/ui/Section';
import { Chips, Chip } from 'components/ui/styles';
import { Layout, SkillGroups, EducationCard, Label, Degree, Facts, Coursework } from './styles';

const Skills = () => (
  <Section id="skills" eyebrow="Skills & Education" title="My toolkit">
    <Layout>
      <SkillGroups>
        {skills.map(({ group, items }) => (
          <div key={group}>
            <dt>{group}</dt>
            <dd>
              <Chips>
                {items.map((item) => <Chip key={item}>{item}</Chip>)}
              </Chips>
            </dd>
          </div>
        ))}
      </SkillGroups>

      <EducationCard>
        <Label>Education</Label>
        <h3>{education.school}</h3>
        <Degree>{education.degree}</Degree>
        <Facts>{education.period} · GPA {education.gpa}</Facts>
        <Coursework>
          <Label>Relevant coursework</Label>
          <Chips>
            {education.coursework.map((c) => <Chip key={c}>{c}</Chip>)}
          </Chips>
        </Coursework>
      </EducationCard>
    </Layout>
  </Section>
);

export default Skills;
