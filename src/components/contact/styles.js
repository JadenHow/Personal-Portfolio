import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Card = styled.div`
  padding: 2rem 2.5rem;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 900px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  border: none;
`;
