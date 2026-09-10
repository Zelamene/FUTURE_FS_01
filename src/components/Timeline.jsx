import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Timeline.css';

const TYPE_LABELS = { education: 'Education', experience: 'Experience', achievement: 'Achievement' };

export default function Timeline({ data, reduced }) {
  const itemRefs = useRef([]);
  const spineRef = useRef(null);
  const wrapRef = useRef(null);
  const [lit, setLit] = useState(() => data.map(() => false));
  const [fillPct, setFillPct] = useState(0);
  const allLit = lit.every(Boolean);

  const updateFill = useCallback(() => {
    if (!spineRef.current) return;
    const r = spineRef.current.getBoundingClientRect();
    const trigger = window.innerHeight * 0.72;
    setFillPct(Math.max(0, Math.min(1, (trigger - r.top) / r.height)) * 100);
  }, []);

  useEffect(() => {
    if (reduced) { setLit(data.map(() => true)); setFillPct(100); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { const idx = Number(e.target.dataset.idx); setLit(prev => { if (prev[idx]) return prev; const next = prev.slice(); next[idx] = true; return next; }); obs.unobserve(e.target); } });
    }, { threshold: 0.3, rootMargin: '0px 0px -18% 0px' });
    itemRefs.current.forEach(el => el && obs.observe(el));
    const onScroll = () => requestAnimationFrame(updateFill);
    window.addEventListener('scroll', onScroll, { passive: true }); updateFill();
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [reduced, data, updateFill]);

  return (
    <div className="tl-wrap" ref={wrapRef}>
      <div className="tl-spine" ref={spineRef}><div className="tl-spine-bg"/><div className="tl-spine-fill" style={{ height: reduced ? '100%' : fillPct + '%' }}>{!reduced && <div className="tl-spine-pulse"/>}</div>{!reduced && <div className="tl-spine-tip" style={{ top: `calc(${fillPct}% - 7px)` }}/>}</div>
      {data.map((m, i) => (
        <div className="tl-item" key={i} data-idx={i} ref={el => (itemRefs.current[i] = el)}>
          <div className="tl-dot-wrap"><div className={'tl-dot' + (lit[i] ? ' tl-dot--lit' : '')}><span className="tl-dot-ring"/></div></div>
          <div className={'tl-card' + (lit[i] ? ' tl-card--lit' : '')}>
            <div className="tl-speedlines" aria-hidden="true"><span className="tl-sl"/><span className="tl-sl"/><span className="tl-sl"/><span className="tl-sl"/></div>
            <span className="tl-bolt" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
            <span className={'tl-type tl-type--' + m.type}>{TYPE_LABELS[m.type]}</span>
            <h3 className="tl-title">{m.title}</h3><p className="tl-entity">{m.entity}</p><p className="tl-date">{m.date}</p><p className="tl-desc">{m.description}</p>
            {m.achievements && <div className="tl-achs">{m.achievements.map(a => <span className="tl-ach" key={a}>{a}</span>)}</div>}
          </div>
        </div>
      ))}
      <div className="tl-finish"><div className="tl-finish-dot"><div className={'tl-checker' + (allLit ? ' tl-checker--lit' : '')}>{Array.from({length:9},(_,i) => <span key={i}/>)}</div></div><span className={'tl-finish-label' + (allLit ? ' tl-finish-label--lit' : '')}>{allLit ? 'And the race continues…' : 'Scroll to reveal the journey'}</span></div>
    </div>
  );
}
