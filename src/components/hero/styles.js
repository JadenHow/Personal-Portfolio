import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 72px 0 88px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -40% -10% auto auto;
    width: 640px;
    height: 640px;
    background: radial-gradient(circle, var(--accent-soft), transparent 65%);
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 40px 0 64px;
  }
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Status = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 24px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--success);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--success) 25%, transparent);
  }
`;

export const Name = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
`;

export const Role = styled.p`
  margin-top: 12px;
  font-size: clamp(1.15rem, 2.2vw, 1.4rem);
  font-weight: 600;
  color: var(--accent);
`;

export const Pitch = styled.ul`
  margin-top: 24px;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.08rem;
  color: var(--muted);

  li {
    position: relative;
    padding-left: 26px;
  }

  li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 700;
  }
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

export const PhotoFrame = styled.div`
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 340px;

  &::after {
    content: '';
    position: absolute;
    inset: 16px -16px -16px 16px;
    border: 2px solid var(--accent);
    border-radius: 24px;
    z-index: 0;
  }

  @media (max-width: 880px) {
    max-width: 240px;
    order: -1;
    justify-self: start;
  }
`;

export const Photo = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 24px;
  box-shadow: var(--shadow);
`;

export const Stats = styled.dl`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 72px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 56px;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  padding: 24px;
  border-left: 1px solid var(--border);

  &:first-child {
    border-left: none;
  }

  dt {
    font-size: 0.85rem;
    color: var(--muted);
    margin-top: 6px;
    line-height: 1.4;
  }

  dd {
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  @media (max-width: 880px) {
    padding: 20px;

    &:nth-child(odd) {
      border-left: none;
    }

    &:nth-child(n + 3) {
      border-top: 1px solid var(--border);
    }
  }
`;
