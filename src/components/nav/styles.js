import styled from 'styled-components';

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? 'var(--border)' : 'transparent')};
  transition: border-color 0.2s;
`;

export const Inner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 16px;
`;

export const Logo = styled.a`
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;

  span {
    color: var(--accent);
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 28px;

  a {
    font-size: 0.92rem;
    color: var(--muted);
    transition: color 0.15s;
  }

  a:hover {
    color: var(--text);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;
