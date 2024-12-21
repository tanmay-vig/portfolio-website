import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievements />
      <Experience />
      <Skills />
      <Projects />
      <Positions />
      <Contact />
    </>
  );
}

export default App;