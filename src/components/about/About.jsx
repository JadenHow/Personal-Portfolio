import React, { useState } from 'react';
import Me2 from 'assets/me2.JPG';
import KLCC from 'assets/KLCC.jpg';
import { FaCode, FaTools, FaCogs } from 'react-icons/fa';
import { useWindowSize } from 'contexts/WindowSizeContext';
import {
  Container,
  Left,
  Right,
  CardBg,
  Card,
  StyledImg,
  Title,
  Description,
  SectionTitle,
  SkillsGrid,
  SkillHeading,
  SkillIcon,
  SkillList,
  ToggleButton
} from './styles';

const About = () => {
  const [img1, setImg1] = useState(false);
  const { isXSmall, isSmall, isMedium, isLarge } = useWindowSize();

  const isMobile = isXSmall || isSmall;
  const isTablet = isMedium || isLarge;

  return (
    <Container isMobile={isMobile} isTablet={isTablet}>
      <Left isMobile={isMobile} isTablet={isTablet}>
        {!isMobile && !isTablet && <CardBg />}
        <Card isMobile={isMobile} isTablet={isTablet}>
          <StyledImg src={img1 ? KLCC : Me2} alt="Profile" isAlt={img1} />
        </Card>
      </Left>

      <Right>
        {isMobile || isTablet
          ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Title isMobile={isMobile} isTablet={isTablet}>About Me</Title>
          </div>
          : <Title isMobile={isMobile} isTablet={isTablet}>About Me</Title>}
        <Description>
          I&apos;m currently based in Toronto and pursuing a degree in Computer Science at the University of Toronto.
        </Description>
        <Description>
          I&apos;m driven by a passion for backend development and aspire to become a software engineer who solves
          challenging problems and builds solutions that improve lives.
        </Description>

        {isMobile || isTablet
          ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionTitle>Technical Skills</SectionTitle>
          </div>
          : <SectionTitle>Technical Skills</SectionTitle>}
        <SkillsGrid>
          <div>
            <SkillHeading>
              <FaCode style={{ ...SkillIcon }} /> Languages
            </SkillHeading>
            <SkillList>
              <li>Python</li>
              <li>Go</li>
              <li>Java</li>
              <li>Kotlin</li>
              <li>C</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Bash</li>
              <li>HTML/CSS</li>
            </SkillList>
          </div>

          <div>
            <SkillHeading>
              <FaTools style={{ ...SkillIcon }} /> Frameworks & Libraries
            </SkillHeading>
            <SkillList>
              <li>FastAPI</li>
              <li>Spring Boot</li>
              <li>Django</li>
              <li>.NET</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Express.js</li>
              <li>Nest.js</li>
              <li>Redis</li>
            </SkillList>
          </div>

          <div>
            <SkillHeading>
              <FaCogs style={{ ...SkillIcon }} /> Technologies & Tools
            </SkillHeading>
            <SkillList>
              <li>REST APIs, GraphQL</li>
              <li>Docker, Kubernetes, GKE</li>
              <li>CI/CD, GitHub Actions, Jenkins</li>
              <li>Linux/Unix, Git, NoSQL</li>
              <li>Microservices, SDLC</li>
              <li>Machine Learning</li>
            </SkillList>
          </div>
        </SkillsGrid>

        {!isMobile && !isTablet && <ToggleButton onClick={() => setImg1(!img1)}>
          Click here to see a picture I took!
        </ToggleButton>}
      </Right>
    </Container>
  );
};

export default About;
