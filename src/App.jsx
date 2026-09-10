import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WarpTransition from './components/WarpTransition';
import CommandPalette from './components/CommandPalette';
import useReducedMotion from './hooks/useReducedMotion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudyJSE from './pages/CaseStudyJSE';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

export default function App() {
  const reduced = useReducedMotion();
  const [ludicrous, setLudicrous] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <SpaceBackground reduced={reduced} />
      <Navbar />
      <ScrollToTop />
      <WarpTransition />
      <CommandPalette ludicrous={ludicrous} setLudicrous={setLudicrous} />
      <div className="sc-fg">
        <main>
          <Routes>
            <Route path="/" element={<Home reduced={reduced} ludicrous={ludicrous} />} />
            <Route path="/projects" element={<Projects reduced={reduced} />} />
            <Route path="/projects/jse" element={<CaseStudyJSE />} />
            <Route path="/about" element={<About reduced={reduced} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}