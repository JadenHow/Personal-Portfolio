import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillGroups = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 24px;
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);

  dt {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`;

export const EducationCard = styled.article`
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.35;
  }

  @media (max-width: 600px) {
    padding: 22px;
  }
`;

export const Label = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--subtle);
  margin-bottom: 14px;
`;

export const Degree = styled.p`
  margin-top: 4px;
  color: var(--accent);
  font-weight: 600;
`;

export const Facts = styled.p`
  margin-top: 8px;
  font-size: 0.88rem;
  color: var(--muted);
  font-family: var(--font-mono);
`;

export const Coursework = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
`;
