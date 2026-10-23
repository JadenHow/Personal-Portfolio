import styled from 'styled-components';

export const List = styled.ol`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid ${({ $current }) => ($current ? 'var(--accent)' : 'var(--border)')};
  background: var(--surface);
  box-shadow: ${({ $current }) => ($current ? 'var(--shadow)' : 'none')};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 22px;
  }
`;

export const Meta = styled.div`
  font-size: 0.88rem;
  color: var(--subtle);
`;

export const Period = styled.p`
  font-family: var(--font-mono);
  font-size: 0.8rem;
`;

export const CurrentBadge = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
`;

export const Role = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.35;
`;

export const Company = styled.p`
  color: var(--accent);
  font-weight: 600;
  margin-top: 2px;
`;

export const CompanyNote = styled.span`
  color: var(--subtle);
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Bullets = styled.ul`
  margin: 16px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--muted);
  font-size: 0.96rem;

  li {
    position: relative;
    padding-left: 20px;
  }

  li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 0.65em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
  }
`;
