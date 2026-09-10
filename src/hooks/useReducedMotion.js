import { useState, useEffect } from 'react';

export default function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
  });
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const h = () => setReduced(m.matches);
    m.addEventListener ? m.addEventListener('change', h) : m.addListener(h);
    return () => (m.removeEventListener ? m.removeEventListener('change', h) : m.removeListener(h));
  }, []);
  return reduced;
}
