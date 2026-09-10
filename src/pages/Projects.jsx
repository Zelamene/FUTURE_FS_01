import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import projectsData from '../data/projects';
import useReducedMotion from '../hooks/useReducedMotion';
import './Projects.css';

export default function Projects() {
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(() => projectsData.map(() => false));
  const cardRefs = useRef([]);

  useEffect(() => {
    if (reduced) {
      setRevealed(projectsData.map(() => true));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = prev.slice();
              next[idx] = true;
              return next;
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <>
      <Helmet>
        <title>Projects — Zelamene Shazi</title>
      </Helmet>
      <header className="p-head">
        <h1 className="p-title">Projects</h1>
        <p className="p-intro">
          Things I've built, broken, and learned from — spanning quantitative analysis,
          full-stack products, security, and research.
        </p>
      </header>
      <section className="p-grid">
        {projectsData.map((p, i) => (
          <article
            key={i}
            data-idx={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={
              'p-card' +
              (!reduced && !revealed[i] ? ' p-card--hidden' : '') +
              (!reduced && revealed[i] ? ' p-card--reveal' : '')
            }
            style={{ '--d': i * 0.12 + 's' }}
          >
            <span className="p-sweep" aria-hidden="true" />
            <span className="p-corner p-corner--tl" aria-hidden="true" />
            <span className="p-corner p-corner--tr" aria-hidden="true" />
            <span className="p-corner p-corner--bl" aria-hidden="true" />
            <span className="p-corner p-corner--br" aria-hidden="true" />
            <span className="p-scan" aria-hidden="true" />
            <div className="p-thumb">
              <span className="p-thumb-race" aria-hidden="true" />
              <span className="p-speedlines" aria-hidden="true">
                <span className="p-sl" />
                <span className="p-sl" />
                <span className="p-sl" />
                <span className="p-sl" />
                <span className="p-sl" />
              </span>
              {p.badge && <span className="p-badge">{p.badge}</span>}
              <span className="p-bolt" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              {p.image ? (
                <img className="p-thumb-img" src={p.image} alt="" loading="lazy" />
              ) : (
                <span className="p-abbr">{p.abbr}</span>
              )}
            </div>
            <div className="p-body">
              <h2 className="p-ctitle">{p.title}</h2>
              <p className="p-desc">{p.description}</p>
              <div className="p-tags">
                {p.tech.map((t) => (
                  <span className="p-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="p-links">
                {p.demo && (
                  <a className="p-link" href={p.demo} target="_blank" rel="noreferrer">
                    ↗ Live demo
                  </a>
                )}
                {p.github && (
                  <a className="p-link" href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}