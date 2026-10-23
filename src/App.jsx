import React from 'react';
import Nav from 'components/nav/Nav';
import Hero from 'components/hero/Hero';
import Experience from 'components/experience/Experience';
import Projects from 'components/projects/Projects';
import Skills from 'components/skills/Skills';
import Contact from 'components/contact/Contact';

const App = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
    <Contact />
  </>
);

export default App;
