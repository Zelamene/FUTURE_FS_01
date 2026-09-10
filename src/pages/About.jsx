import React from 'react';
import { Helmet } from 'react-helmet-async';
import skillsData from '../data/skills';
import experienceData from '../data/experience';
import skillIcons from '../components/skillIcons';
import './About.css';
import useReducedMotion from '../hooks/useReducedMotion';
import Timeline from '../components/Timeline';

export default function About() {
  const reduced = useReducedMotion();
  return (
    <>
      <Helmet><title>About — Zelamene Shazi</title></Helmet>
      <header className="ab-head"><h1 className="ab-title">About</h1><p className="ab-intro">Final-year Computer Science student at the University of Pretoria — building in software, cloud & DevOps, and bringing quantitative methods to real-world problems.</p></header>
      <div className="ab-sh"><h2 className="ab-sh-h">What I work with</h2><p className="ab-sh-sub">Grouped by what I use them for, not what category they fall under.</p></div>
      <div className="ab-groups">{skillsData.map((g, gi) => (
        <div className="ab-panel" key={gi}>
          <span className="ab-corner ab-corner--tl" aria-hidden="true"/><span className="ab-corner ab-corner--tr" aria-hidden="true"/>
          <span className="ab-corner ab-corner--bl" aria-hidden="true"/><span className="ab-corner ab-corner--br" aria-hidden="true"/>
          <span className="ab-scan" aria-hidden="true"/>
          <h3 className="ab-gl">{g.label}</h3><p className="ab-gd">{g.description}</p>
          <div className="ab-icons">{g.items.map(t => (
            <div className="ab-icon" key={t.key} title={t.name}>
              <span className="ab-icon-svg">{skillIcons[t.key]}</span>
              <span className="ab-icon-name">{t.name}</span>
            </div>
          ))}</div>
        </div>
      ))}</div>
      <div className="ab-sh"><h2 className="ab-sh-h">The journey so far</h2><p className="ab-sh-sub">Experience, education, and a few wins along the way.</p></div>
      <Timeline data={experienceData} reduced={reduced} />
    </>
  );
}