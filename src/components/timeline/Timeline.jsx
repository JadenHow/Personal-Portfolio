import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaBriefcase, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import Badge from './helpers/Badge';
import { timeline } from './timelineData';

const ICONS = {
  work: { icon: <FaBriefcase />, background: '#7e22ce' },
  project: { icon: <FaLaptopCode />, background: '#9333ea' },
  education: { icon: <FaGraduationCap />, background: 'purple' }
};

const contentStyle = {
  background: 'var(--surface)',
  color: 'var(--text)',
  boxShadow: '0 3px 0 var(--border)'
};

const contentArrowStyle = {
  borderRight: '7px solid var(--surface)'
};

const Timeline = () => (
  <section className="timeline-container">
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>Timeline</h1>
      <p style={{ fontSize: '1rem' }}>A Quick Adventure Through My Coding Journey</p>
    </div>

    <VerticalTimeline lineColor="#5c2d91">
      {timeline.map((entry) => {
        const { icon, background } = ICONS[entry.type];
        return (
          <VerticalTimelineElement
            key={`${entry.title}-${entry.date}`}
            date={entry.date}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={{ background, color: '#fff' }}
            icon={icon}
          >
            <h3>{entry.title}</h3>
            {entry.subtitle && <h4>{entry.subtitle}</h4>}
            {entry.tags && (
              <p>
                {entry.tags.map((tag) => <Badge key={tag} text={tag} />)}
              </p>
            )}
            {entry.bullets && (
              <ul>
                {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
            {entry.summaryLabel && <p>{entry.summaryLabel}</p>}
            {entry.summary && <p>{entry.summary}</p>}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  </section>
);

export default Timeline;
