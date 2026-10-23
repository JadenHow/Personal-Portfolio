import styled from 'styled-components';

export const FeaturedGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: var(--shadow);
  }

  @media (max-width: 600px) {
    padding: 22px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
`;

export const CardDesc = styled.p`
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.95rem;
`;

export const Highlights = styled.ul`
  margin: 18px 0 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.92rem;
  color: var(--muted);

  li {
    position: relative;
    padding-left: 22px;
  }

  li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
  font-size: 0.9rem;
  font-weight: 600;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--text);
    transition: color 0.15s;
  }

  a:hover {
    color: var(--accent);
  }

  span {
    color: var(--subtle);
    font-weight: 500;
  }
`;

export const SubHeading = styled.h3`
  margin: 64px 0 20px;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const OtherGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

export const OtherCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--accent);
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
  }

  h4 svg {
    flex-shrink: 0;
    color: var(--subtle);
  }

  p {
    font-size: 0.88rem;
    color: var(--muted);
    flex: 1;
  }

  small {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--subtle);
  }
`;

export const AllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  font-weight: 600;
  color: var(--accent);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
