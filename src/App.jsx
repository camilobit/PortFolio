// src/App.jsx
import './App.css'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Projects from './components/Proyectos/Projects';
import AboutMe from './components/SobreMi/AboutMe';
import Inicio from './components/Inicio/Inicio';
// import Contact from './components/Contacto/Contact';
import Skills from './components/Proyectos/Skills';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <AboutMe/>
        <SocialMedia />
        <Element name="inicio">
          <Inicio />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          {/* <Contact /> */}
        </Element>
        <Footer />
        <SpeedInsights />
        <Analytics />
        
      </div>
    </Router>
  )
}

export default App;
