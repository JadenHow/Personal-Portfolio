import React from 'react';
import {
  ResumeSection,
  ResumeTitle,
  ResumeDescription,
  ResumeWrapper,
  ResumeIframe,
  ResumeButton
} from './styles';

const Resume = () => {
  return (
    <ResumeSection>
      <ResumeTitle>My Resume</ResumeTitle>
      <ResumeDescription>
        You can preview my resume below. If you&apos;d like a copy, feel free to download it using the button provided.
      </ResumeDescription>
      <ResumeWrapper>
        <ResumeIframe
          src="https://drive.google.com/file/d/16jjYzWaowHHl3utBhvRg02FhDiu_Hrc9/preview"
          allow="autoplay"
        />
      </ResumeWrapper>
      <a href="https://drive.google.com/file/d/16jjYzWaowHHl3utBhvRg02FhDiu_Hrc9/view?usp=drive_link" target="_blank" rel="noreferrer">
        <ResumeButton>Open in Google Drive</ResumeButton>
      </a>
    </ResumeSection>
  );
};

export default Resume;
