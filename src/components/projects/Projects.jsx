import React from 'react';
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProjects, otherProjects, profile } from 'data';
import Section from 'components/ui/Section';
import Highlight from 'components/ui/Highlight';
import { Chips, Chip } from 'components/ui/styles';
import {
  FeaturedGrid,
  Card,
  CardTitle,
  CardDesc,
  Highlights,
  CardFooter,
  LinkRow,
  SubHeading,
  OtherGrid,
  OtherCard,
  AllLink
} from './styles';

const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Things I've built"
    lead="Systems built around throughput, latency and reliability, with the numbers to back them up."
  >
    <FeaturedGrid>
      {featuredProjects.map((project) => (
        <Card key={project.title}>
          <CardTitle>{project.title}</CardTitle>
          <CardDesc>{project.description}</CardDesc>
          <Highlights>
            {project.highlights.map((h) => (
              <li key={h}><Highlight text={h} /></li>
            ))}
          </Highlights>
          <CardFooter>
            <Chips aria-label="Technologies">
              {project.tech.map((t) => <Chip key={t}>{t}</Chip>)}
            </Chips>
            <LinkRow>
              {project.links.length > 0
                ? project.links.map(({ label, href }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" /> {label}
                  </a>
                ))
                : <span>Code walkthrough available on request</span>}
            </LinkRow>
          </CardFooter>
        </Card>
      ))}
    </FeaturedGrid>

    <SubHeading>More projects</SubHeading>
    <OtherGrid>
      {otherProjects.map((project) => (
        <li key={project.title}>
          <OtherCard href={project.href} target="_blank" rel="noreferrer">
            <h4>
              {project.title}
              <FaExternalLinkAlt size={12} aria-hidden="true" />
            </h4>
            <p>{project.description}</p>
            <small>{project.tech.join(' · ')}</small>
          </OtherCard>
        </li>
      ))}
    </OtherGrid>

    <AllLink href={profile.github} target="_blank" rel="noreferrer">
      See everything on GitHub <FaArrowRight aria-hidden="true" />
    </AllLink>
  </Section>
);

export default Projects;
