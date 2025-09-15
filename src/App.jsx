
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Contact from './components/Contact';

import './App.css'

function App() {
  return (
    <div className='bg-black text-white'>
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Positions />
      <Contact />
    </div>
  );
}

export default App;