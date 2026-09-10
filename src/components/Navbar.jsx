import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="sc-nav">
      <div className="sc-nav-inner">
        <NavLink to="/" className="sc-logo">Zelamene Shazi</NavLink>
        <div className="sc-links-nav">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
