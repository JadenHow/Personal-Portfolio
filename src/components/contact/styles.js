import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: ${({ isMobile }) => (isMobile ? '0' : '2rem 2.5rem')};
  border-radius: 2rem;
  max-width: 900px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: ${({ isMobile }) => (isMobile ? '1rem' : '0 0 1rem 0')};
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: ${({ isMobile }) => (isMobile ? '1rem' : '0 0 2rem 0')};
`;

export const FormWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  border: ${({ isMobile }) => (isMobile ? '' : '1px solid #e0e0e0')};
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  border: none;
`;
