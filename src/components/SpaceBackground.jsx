import React, { useEffect, useRef, useMemo } from 'react';

export default function SpaceBackground({ reduced = false }) {
  const nebRef = useRef(null);
  const farRef = useRef(null);
  const nearRef = useRef(null);
  const planetRef = useRef(null);

  const dimStars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 88; i++) arr.push({ top: Math.random()*100, left: Math.random()*100, size: 0.5+Math.random()*0.9, opacity: 0.12+Math.random()*0.28 });
    return arr;
  }, []);

  const brightStars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 22; i++) arr.push({ top: Math.random()*100, left: Math.random()*100, size: 1.4+Math.random()*1.2, opacity: 0.55+Math.random()*0.4, delay: Math.random()*4, dur: 3.5+Math.random()*2 });
    return arr;
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        if (nebRef.current) nebRef.current.style.transform = `translate3d(0,${y*0.03}px,0)`;
        if (farRef.current) farRef.current.style.transform = `translate3d(0,${y*0.05}px,0)`;
        if (nearRef.current) nearRef.current.style.transform = `translate3d(0,${y*0.11}px,0)`;
        if (planetRef.current) planetRef.current.style.transform = `translate3d(0,${y*0.08}px,0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [reduced]);

  return (
    <div className="sc-bg" aria-hidden="true">
      <div className="sc-neb-wrap" ref={nebRef}>
        <div className="sc-neb sc-neb--1" />
        <div className="sc-neb sc-neb--2" />
        <div className="sc-neb sc-neb--3" />
      </div>
      <div className="sc-stars" ref={farRef}>
        {dimStars.map((s, i) => (
          <span key={i} className="sc-star" style={{ top: s.top+'%', left: s.left+'%', width: s.size+'px', height: s.size+'px', opacity: s.opacity }} />
        ))}
      </div>
      <div className="sc-planet" ref={planetRef} />
      <div className="sc-stars sc-stars--near" ref={nearRef}>
        {brightStars.map((s, i) => (
          <span key={i} className="sc-star sc-star--bright" style={{ top: s.top+'%', left: s.left+'%', width: s.size+'px', height: s.size+'px', opacity: s.opacity, animationDelay: s.delay+'s', animationDuration: s.dur+'s' }} />
        ))}
      </div>
      <div className="sc-orbit" />
      <div className="sc-rail"><span className="sc-rail-dot" /></div>
      <div className="sc-bg-vignette" />
    </div>
  );
}
