import React, { useContext, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from 'contexts/ThemeContext';
import { profile } from 'data';
import { Container, PrimaryButton } from 'components/ui/styles';
import { Bar, Inner, Logo, Links, Actions, ThemeButton } from './styles';

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Nav = () => {
  const { state: { darkMode }, dispatch } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Container>
        <Inner aria-label="Main">
          <Logo href="#top">Jaden How<span>.</span></Logo>

          <Links>
            {sections.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </Links>

          <Actions>
            <ThemeButton
              type="button"
              onClick={() => dispatch({ type: 'TOGGLE' })}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            </ThemeButton>
            <PrimaryButton href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </PrimaryButton>
          </Actions>
        </Inner>
      </Container>
    </Bar>
  );
};

export default Nav;
