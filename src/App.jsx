import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import SEO from './components/SEO/SEO';
import Analytics from './components/SEO/Analytics';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Analytics />
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
              </>
            } />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;