import React from 'react';
import { IconGithub, IconLinkedin, IconMail } from './icons';

export default function Footer() {
  return (
    <footer style={{ maxWidth: 1120, margin: '0 auto', padding: '24px', borderTop: '1px solid rgba(126,166,226,.1)', color: '#7f8ea6', fontSize: '.86rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      <span>© 2026 Zelamene Shazi</span>
      <div style={{ display: 'flex', gap: 14 }}>
        <a href="https://github.com/Zelamene" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: '#9fb0c9', display: 'inline-flex', transition: 'color .2s ease' }}><IconGithub /></a>
        <a href="https://www.linkedin.com/in/zelamene-shazi-66ab142b6/" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: '#9fb0c9', display: 'inline-flex', transition: 'color .2s ease' }}><IconLinkedin /></a>
        <a href="mailto:shazizelamene@gmail.com" aria-label="Email" style={{ color: '#9fb0c9', display: 'inline-flex', transition: 'color .2s ease' }}><IconMail /></a>
      </div>
    </footer>
  );
}
