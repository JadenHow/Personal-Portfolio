import styled from 'styled-components';

export const ResumeSection = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const ResumeTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const ResumeDescription = styled.p`
  font-size: 1rem;
  max-width: 600px;
  text-align: center;
`;

export const ResumeWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ResumeIframe = styled.iframe`
  width: 100%;
  max-width: 900px;
  height: 600px;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ResumeButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #7e22ce;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6b21a8;
  }
`;
