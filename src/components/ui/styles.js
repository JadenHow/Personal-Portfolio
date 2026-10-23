import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

export const SectionWrapper = styled.section`
  padding: 96px 0;
  border-top: 1px solid var(--border);

  @media (max-width: 600px) {
    padding: 64px 0;
  }
`;

export const Eyebrow = styled.p`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

export const SectionLead = styled.p`
  margin-top: 12px;
  max-width: 620px;
  color: var(--muted);
`;

export const SectionHeader = styled.header`
  margin-bottom: 48px;
`;

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.li`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--muted);
  border: 1px solid var(--border);
  white-space: nowrap;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s, transform 0.15s;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: var(--accent);
  color: var(--on-accent);
  border: 1px solid var(--accent);

  &:hover {
    background: var(--accent-hover);
    border-color: var(--accent-hover);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const IconButton = styled.a`
  ${buttonBase}
  padding: 10px;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  font-size: 1.15rem;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const Strong = styled.strong`
  color: var(--text);
  font-weight: 600;
`;
