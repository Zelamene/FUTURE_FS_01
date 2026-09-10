import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function WarpTransition() {
  const location = useLocation();
  const [warping, setWarping] = useState(false);
  const prevPath = React.useRef(location.pathname);
  const reduced = useMemo(() => {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
  }, []);

  const streaks = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 36; i++) arr.push({ top: Math.random()*100, left: Math.random()*100, width: 1+Math.random()*1.5, height: 3+Math.random()*6, delay: Math.random()*0.15, opacity: 0.3+Math.random()*0.7 });
    return arr;
  }, []);

  useEffect(() => {
    if (reduced) return;
    if (location.pathname !== prevPath.current) {
      setWarping(true);
      const t = setTimeout(() => setWarping(false), 650);
      prevPath.current = location.pathname;
      return () => clearTimeout(t);
    }
  }, [location.pathname, reduced]);

  if (!warping) return null;

  return (
    <div className="wj-overlay wj-overlay--active" aria-hidden="true">
      <div className="wj-streaks">
        {streaks.map((s, i) => (
          <span key={i} className="wj-streak" style={{ top: s.top+'%', left: s.left+'%', width: s.width+'px', height: s.height+'px', animationDelay: s.delay+'s', boxShadow: `0 0 ${4+s.opacity*6}px rgba(47,123,255,${s.opacity*0.8})` }} />
        ))}
      </div>
      <div className="wj-flash" />
    </div>
  );
}
