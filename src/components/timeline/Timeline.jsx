import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaBriefcase, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import Badge from './helpers/Badge';

const Timeline = () => {
  const { state: { darkMode } } = useContext(ThemeContext);

  const sharedContentStyle = {
    background: darkMode ? '#222' : '#fff',
    color: darkMode ? '#f4f4f4' : '#333'
  };

  const sharedArrowStyle = {
    borderRight: darkMode ? '7px solid #222' : '7px solid #fff'
  };

  return (
    <div className="timeline-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>Timeline</h1>
        <p style={{ fontSize: '1rem' }}>A Quick Adventure Through My Coding Journey</p>
      </div>

      <VerticalTimeline lineColor="#5c2d91">

        <VerticalTimelineElement
          date="Jan 2025 - Apr 2025"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#7e22ce', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3>Software Engineer Intern</h3>
          <h4>PM Accelerator</h4>
          <p>
            <Badge text="Python" />
            <Badge text="FastAPI" />
            <Badge text="LangChain" />
            <Badge text="Google Cloud" />
          </p>
          <ul>
            <li>AI storytelling platform using LangChain + FastAPI.</li>
            <li>CI/CD to Cloud Run via Cloud Build.</li>
            <li>Real-time speech + voice generation.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jan 2024 - Aug 2024"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Royal Horizon Hotel</h3>
          <p>
            <Badge text="Java" />
            <Badge text="Spring Boot" />
            <Badge text="React" />
            <Badge text="MongoDB" />
          </p>
          <ul>
            <li>Full-stack hotel booking platform with JWT auth.</li>
            <li>Refresh token rotation, real-time availability.</li>
            <li>Lazy loading and code splitting for UX perf.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="May 2023 - Aug 2024"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#7e22ce', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3>Software Engineer Intern</h3>
          <h4>myBlueprint</h4>
          <p>
            <Badge text="C#" />
            <Badge text=".NET" />
            <Badge text="Redis" />
          </p>
          <ul>
            <li>Backend features using MVC in ASP.NET Core.</li>
            <li>Redis pub/sub, optimized SQL queries, CI/CD.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jan 2023 - Apr 2023"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#7e22ce', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3>Software Engineer Intern</h3>
          <h4>UofT Biology Department</h4>
          <p>
            <Badge text="Java" />
            <Badge text="Spring Boot" />
            <Badge text="Redis" />
            <Badge text="GKE" />
          </p>
          <ul>
            <li>Lab recruitment platform with autosave, autoscaling.</li>
            <li>WebSocket real-time validation, Redis caching.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Nov 2022 - Dec 2022"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Toronto Fitness Club</h3>
          <p>
            <Badge text="Python" />
            <Badge text="Django" />
          </p>
          <ul>
            <li>Backend + API rate limiting + real-time class updates.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Sep 2022 - Dec 2022"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#7e22ce', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3>Software Engineer Intern</h3>
          <h4>CheaprEats</h4>
          <p>
            <Badge text="Node.js" />
            <Badge text="React" />
            <Badge text="TypeScript" />
          </p>
          <ul>
            <li>Plaid API integration, 1K+ daily updates.</li>
            <li>85% frontend test coverage with Jest.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jul 2022 - Aug 2022"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Task Manager</h3>
          <p>
            <Badge text="Node.js" />
            <Badge text="MongoDB" />
          </p>
          <p>CRUD app with user authentication and session logic.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jun 2022 - Jul 2022"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Personal Portfolio</h3>
          <p>
            <Badge text="React" />
            <Badge text="CSS" />
          </p>
          <p>Built responsive website to showcase projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Feb 2022 - Mar 2022"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Server & Client Communicator</h3>
          <p>
            <Badge text="C" />
            <Badge text="Socket Programming" />
          </p>
          <p>Client-server communication model for real-time messaging.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Sep 2021 - Dec 2021"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Brawlr</h3>
          <p>
            <Badge text="Java" />
            <Badge text="Firebase" />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jan 2021 - Apr 2021"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: '#9333ea', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3>Steam Games Recommendations</h3>
          <p>
            <Badge text="Python" />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Sep 2021 - Jun 2025"
          contentStyle={sharedContentStyle}
          contentArrowStyle={sharedArrowStyle}
          iconStyle={{ background: 'purple', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3>University of Toronto</h3>
          <h4>Computer Science Specialist</h4>
          <p>Core courses in:</p>
          <p>
            Software Design, Computer Organization, Software Tools and Systems Programming, Data Structures & Analysis, Software Engineering, Databases, Programming on the Web, Algorithm Design, Analysis & Complexity, Artificial Intelligence, Machine Learning, Operating Systems
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
