import React from 'react';

const skillIcons = {
  react: (
    <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="3.2" fill="currentColor"/>
    <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.4"/>
    <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 16 16)"/>
    <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 16 16)"/></svg>
  ),
  typescript: (
    <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="1.2"/>
    <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="currentColor">TS</text></svg>
  ),
  javascript: (
    <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="1.2"/>
    <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="currentColor">JS</text></svg>
  ),
  csharp: (
    <svg viewBox="0 0 32 32"><text x="16" y="23" textAnchor="middle" fontSize="18" fontWeight="700" fontFamily="sans-serif" fill="currentColor">C#</text></svg>
  ),
  dotnet: (
    <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.4"/>
    <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="600" fontFamily="sans-serif" fill="currentColor">.NET</text></svg>
  ),
  nodejs: (
    <svg viewBox="0 0 32 32"><polygon points="16,2 30,9 30,23 16,30 2,23 2,9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <text x="16" y="20" textAnchor="middle" fontSize="8.5" fontWeight="600" fontFamily="sans-serif" fill="currentColor">Node</text></svg>
  ),
  python: (
    <svg viewBox="0 0 32 32"><path d="M16 2c-6 0-5.6 2.6-5.6 2.6v2.7h5.7v.8H7.4S2 7.5 2 13.8s4.7 6.1 4.7 6.1h2.8v-2.9s-.1-4.7 4.6-4.7h5.7s4.5.1 4.5-4.3V5.3S24.9 2 16 2zm-3.2 1.9a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="currentColor" opacity=".85"/>
    <path d="M16 30c6 0 5.6-2.6 5.6-2.6v-2.7h-5.7v-.8h8.7S30 24.5 30 18.2s-4.7-6.1-4.7-6.1h-2.8v2.9s.1 4.7-4.6 4.7h-5.7s-4.5-.1-4.5 4.3v2.7S7.1 30 16 30zm3.2-1.9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" opacity=".55"/></svg>
  ),
  java: (
    <svg viewBox="0 0 32 32"><text x="16" y="23" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="serif" fontStyle="italic" fill="currentColor">J</text>
    <path d="M10 26c0 0 4 2 12 0M8 28.5c0 0 5 2.5 16 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  cpp: (
    <svg viewBox="0 0 32 32"><text x="14" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="currentColor">C</text>
    <line x1="22" y1="12" x2="22" y2="20" stroke="currentColor" strokeWidth="1.6"/><line x1="18" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.6"/>
    <line x1="26" y1="12" x2="26" y2="20" stroke="currentColor" strokeWidth="1.6"/><line x1="22" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.6" opacity=".5"/></svg>
  ),
  php: (
    <svg viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="14" ry="9" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="sans-serif" fill="currentColor">PHP</text></svg>
  ),
  sql: (
    <svg viewBox="0 0 32 32"><ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" opacity=".4"/></svg>
  ),
  html: (
    <svg viewBox="0 0 32 32"><polygon points="4,2 6,28 16,30 26,28 28,2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif" fill="currentColor">&lt;/&gt;</text></svg>
  ),
  tailwind: (
    <svg viewBox="0 0 32 32"><path d="M8 13c1.6-5.3 5-8 10-8 7.5 0 8.4 5.6 12.2 6.5 2.5.6 4.8-.3 6.8-2.5-1.6 5.3-5 8-10 8-7.5 0-8.4-5.6-12.2-6.5-2.5-.6-4.8.3-6.8 2.5z" fill="none" stroke="currentColor" strokeWidth="1.4" transform="translate(-4,2) scale(.85)"/>
    <path d="M8 13c1.6-5.3 5-8 10-8 7.5 0 8.4 5.6 12.2 6.5 2.5.6 4.8-.3 6.8-2.5-1.6 5.3-5 8-10 8-7.5 0-8.4-5.6-12.2-6.5-2.5-.6-4.8.3-6.8 2.5z" fill="none" stroke="currentColor" strokeWidth="1.4" transform="translate(-4,12) scale(.85)"/></svg>
  ),
  vite: (
    <svg viewBox="0 0 32 32"><path d="M28 5L16.5 29 5 5l11.5 3z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M20 2L16.5 12 24 5z" fill="currentColor" opacity=".4"/></svg>
  ),
  pandas: (
    <svg viewBox="0 0 32 32"><rect x="8" y="4" width="4" height="10" rx="1" fill="currentColor" opacity=".75"/>
    <rect x="8" y="18" width="4" height="10" rx="1" fill="currentColor" opacity=".75"/>
    <rect x="14" y="9" width="4" height="14" rx="1" fill="currentColor" opacity=".5"/>
    <rect x="20" y="4" width="4" height="10" rx="1" fill="currentColor" opacity=".75"/>
    <rect x="20" y="18" width="4" height="10" rx="1" fill="currentColor" opacity=".75"/></svg>
  ),
  numpy: (
    <svg viewBox="0 0 32 32"><polygon points="16,2 28,9 28,23 16,30 4,23 4,9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <text x="16" y="20" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="sans-serif" fill="currentColor">NP</text></svg>
  ),
  plotly: (
    <svg viewBox="0 0 32 32"><polyline points="4,26 10,18 16,22 22,10 28,14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="18" r="2" fill="currentColor"/><circle cx="22" cy="10" r="2" fill="currentColor"/></svg>
  ),
  streamlit: (
    <svg viewBox="0 0 32 32"><path d="M16 4L4 18h24z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M16 14L8 26h16z" fill="currentColor" opacity=".3"/></svg>
  ),
  excel: (
    <svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <text x="16" y="22" textAnchor="middle" fontSize="14" fontWeight="800" fontFamily="sans-serif" fill="currentColor">X</text></svg>
  ),
  azure: (
    <svg viewBox="0 0 32 32"><path d="M12 4L4 28h8l10-16-4-8z" fill="currentColor" opacity=".5"/>
    <path d="M14 12l14 16H10l8-6z" fill="currentColor" opacity=".8"/></svg>
  ),
  docker: (
    <svg viewBox="0 0 32 32"><rect x="2" y="14" width="5" height="4" rx=".5" fill="currentColor" opacity=".3"/>
    <rect x="8" y="14" width="5" height="4" rx=".5" fill="currentColor" opacity=".5"/>
    <rect x="14" y="14" width="5" height="4" rx=".5" fill="currentColor" opacity=".7"/>
    <rect x="8" y="9" width="5" height="4" rx=".5" fill="currentColor" opacity=".4"/>
    <rect x="14" y="9" width="5" height="4" rx=".5" fill="currentColor" opacity=".55"/>
    <rect x="14" y="4" width="5" height="4" rx=".5" fill="currentColor" opacity=".35"/>
    <path d="M0 18c2-6 8-7 14-7h8c4 0 8 1 10 5-2-1-4-1-6 0-4 2-6 6-6 10H2c-2-3-2-5-2-8z" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg>
  ),
  git: (
    <svg viewBox="0 0 32 32"><circle cx="10" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="22" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="10" cy="24" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.4"/>
    <line x1="10" y1="10.5" x2="10" y2="21.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M22 10.5v4c0 2-2 4-4 4h-5" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg>
  ),
  postgresql: (
    <svg viewBox="0 0 32 32"><ellipse cx="16" cy="8" rx="10" ry="5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6 8v16c0 2.8 4.5 5 10 5s10-2.2 10-5V8" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M22 12c3 1 5 4 5 7v3c0 2-1 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".5"/></svg>
  ),
  mysql: (
    <svg viewBox="0 0 32 32"><ellipse cx="16" cy="9" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6 9v14c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5V9" fill="none" stroke="currentColor" strokeWidth="1.3"/>
    <text x="16" y="22" textAnchor="middle" fontSize="6" fontWeight="600" fontFamily="sans-serif" fill="currentColor">My</text></svg>
  ),
  mongodb: (
    <svg viewBox="0 0 32 32"><path d="M16 2c-1 4-5 7-5 14s4 13 5 14c1-1 5-7 5-14S17 6 16 2z" fill="currentColor" opacity=".6"/>
    <line x1="16" y1="18" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5"/></svg>
  ),
  netlify: (
    <svg viewBox="0 0 32 32"><polygon points="16,2 30,16 16,30 2,16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <polygon points="16,8 24,16 16,24 8,16" fill="currentColor" opacity=".3"/></svg>
  ),
};

export default skillIcons;