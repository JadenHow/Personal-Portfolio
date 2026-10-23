import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Me from 'assets/me.jpg';
import { profile, heroPoints, stats } from 'data';
import Highlight from 'components/ui/Highlight';
import { Container, PrimaryButton, SecondaryButton, IconButton } from 'components/ui/styles';
import { Wrapper, Grid, Status, Name, Role, Pitch, Ctas, PhotoFrame, Photo, Stats, Stat } from './styles';

const Hero = () => (
  <Wrapper id="top">
    <Container>
      <Grid>
        <div>
          <Status>Open to new opportunities · {profile.location}</Status>
          <Name>{profile.name}</Name>
          <Role>{profile.role}</Role>
          <Pitch>
            {heroPoints.map((point) => (
              <li key={point}><Highlight text={point} /></li>
            ))}
          </Pitch>
          <Ctas>
            <PrimaryButton href={profile.resume} target="_blank" rel="noreferrer">
              View resume <FaArrowRight aria-hidden="true" />
            </PrimaryButton>
            <SecondaryButton href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" /> Email me
            </SecondaryButton>
            <IconButton href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </IconButton>
            <IconButton href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </IconButton>
          </Ctas>
        </div>

        <PhotoFrame>
          <Photo src={Me} alt="Portrait of Jaden How" />
        </PhotoFrame>
      </Grid>

      <Stats>
        {stats.map(({ value, label }) => (
          <Stat key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </Stat>
        ))}
      </Stats>
    </Container>
  </Wrapper>
);

export default Hero;
