import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const COMMANDS = [
  { id: 'home', label: 'Home', section: 'Navigate', icon: '⌂', path: '/' },
  { id: 'projects', label: 'Projects', section: 'Navigate', icon: '◈', path: '/projects' },
  { id: 'about', label: 'About', section: 'Navigate', icon: '◉', path: '/about' },
  { id: 'contact', label: 'Contact', section: 'Navigate', icon: '✉', path: '/contact' },
  { id: 'ludicrous', label: 'Toggle Ludicrous Mode', section: 'Easter eggs', icon: '⚡', path: null },
];

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB','KeyA'];

export default function CommandPalette({ ludicrous, setLudicrous }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const konamiRef = useRef([]);
  const navigate = useNavigate();

  const filtered = COMMANDS.filter(c => !query || c.label.toLowerCase().includes(query.toLowerCase()));

  const execute = useCallback((cmd) => {
    if (cmd.id === 'ludicrous') setLudicrous(v => !v);
    else if (cmd.path) navigate(cmd.path);
    setOpen(false); setQuery(''); setActiveIdx(0);
  }, [navigate, setLudicrous]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(v => !v); setQuery(''); setActiveIdx(0); }
      if (e.key === 'Escape') { setOpen(false); setQuery(''); }
      konamiRef.current.push(e.code);
      if (konamiRef.current.length > KONAMI.length) konamiRef.current.shift();
      if (konamiRef.current.length === KONAMI.length && konamiRef.current.every((v, i) => v === KONAMI[i])) { setLudicrous(v => !v); konamiRef.current = []; }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setLudicrous]);

  useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);

  const onPaletteKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(v => Math.min(v+1, filtered.length-1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx(v => Math.max(v-1, 0)); }
    else if (e.key === 'Enter' && filtered[activeIdx]) execute(filtered[activeIdx]);
  };

  if (!open) return null;

  const sections = []; let lastSection = null;
  filtered.forEach((c, i) => { if (c.section !== lastSection) { sections.push({ type: 'section', label: c.section }); lastSection = c.section; } sections.push({ type: 'item', ...c, filteredIdx: i }); });

  return (
    <div className="pal-overlay" onClick={() => { setOpen(false); setQuery(''); }} style={{ position:'fixed',inset:0,zIndex:100,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:'min(22vh,180px)',background:'rgba(3,6,14,.72)',backdropFilter:'blur(6px)',WebkitBackdropFilter:'blur(6px)' }}>
      <div className={'pal-panel' + (ludicrous ? ' pal-panel--ludicrous' : '')} onClick={e => e.stopPropagation()} onKeyDown={onPaletteKey} style={{ position:'relative',width:'100%',maxWidth:520,borderRadius:16,overflow:'hidden',background:'linear-gradient(180deg,rgba(18,30,56,.82),rgba(11,19,36,.92))',border:`1px solid ${ludicrous?'rgba(255,72,82,.5)':'rgba(47,123,255,.3)'}`,boxShadow:'0 24px 64px rgba(0,0,0,.6)' }}>
        <div style={{ position:'relative',zIndex:1,display:'flex',alignItems:'center',gap:10,padding:'14px 18px',borderBottom:'1px solid rgba(126,166,226,.12)' }}>
          <span style={{ color:'#6e82a0',fontSize:'1.1rem' }}>⌘</span>
          <input ref={inputRef} type="text" placeholder="Type a command…" value={query} onChange={e => { setQuery(e.target.value); setActiveIdx(0); }} style={{ flex:1,background:'none',border:'none',outline:'none',fontFamily:"'Inter',sans-serif",fontSize:'.95rem',color:'#f4f7ff' }} />
          <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'.68rem',color:'#6e82a0',padding:'3px 7px',borderRadius:4,background:'rgba(255,255,255,.06)',border:'1px solid rgba(148,163,184,.2)' }}>ESC</span>
        </div>
        <div style={{ position:'relative',zIndex:1,maxHeight:320,overflowY:'auto',padding:'8px 0' }}>
          {filtered.length === 0 ? <div style={{ padding:'28px 18px',textAlign:'center',color:'#5a6d88',fontSize:'.9rem' }}>No commands found.</div> :
            sections.map((s, i) => s.type === 'section' ?
              <div key={'s'+i} style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'.68rem',color:'#5a6d88',padding:'10px 18px 4px',textTransform:'uppercase',letterSpacing:'.06em' }}>{s.label}</div> :
              <div key={s.id} onClick={() => execute(s)} onMouseEnter={() => setActiveIdx(s.filteredIdx)}
                style={{ display:'flex',alignItems:'center',gap:12,padding:'10px 18px',cursor:'pointer',background: s.filteredIdx===activeIdx ? (ludicrous?'rgba(255,60,70,.12)':'rgba(47,123,255,.12)') : 'transparent',transition:'background .12s ease' }}>
                <span style={{ width:28,height:28,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',background:s.id==='ludicrous'?'rgba(255,60,70,.1)':'rgba(47,123,255,.1)',border:`1px solid ${s.id==='ludicrous'?'rgba(255,72,82,.3)':'rgba(47,123,255,.25)'}`,fontSize:'.9rem',color:s.id==='ludicrous'?'#ff9a9f':'#8fc0ff' }}>{s.icon}</span>
                <span style={{ flex:1,fontFamily:"'Inter',sans-serif",fontWeight:600,fontSize:'.92rem',color:'#dfe7f5' }}>{s.label}</span>
                {s.id === 'ludicrous' && <span style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:'.62rem',fontWeight:600,padding:'2px 8px',borderRadius:999,background:'rgba(255,60,70,.14)',border:'1px solid rgba(255,72,82,.4)',color:'#ff8a8f' }}>{ludicrous?'ON':'OFF'}</span>}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
