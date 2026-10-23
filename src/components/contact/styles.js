import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 96px 0 48px;
  border-top: 1px solid var(--border);

  @media (max-width: 600px) {
    padding: 64px 0 32px;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  padding: 64px 48px;
  border-radius: 24px;
  border: 1px solid var(--border);
  background: var(--surface);
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: auto -20% -60% -20%;
    height: 120%;
    background: radial-gradient(ellipse at center, var(--accent-soft), transparent 60%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }

  @media (max-width: 600px) {
    padding: 44px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.9rem, 4.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
`;

export const Lead = styled.p`
  margin: 16px auto 0;
  max-width: 540px;
  color: var(--muted);
  font-size: 1.05rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
`;

export const EmailText = styled.p`
  margin-top: 20px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--subtle);
  overflow-wrap: anywhere;

  a {
    color: var(--accent);
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: 48px;
  font-size: 0.85rem;
  color: var(--subtle);

  nav {
    display: flex;
    gap: 20px;
  }

  a:hover {
    color: var(--text);
  }
`;
