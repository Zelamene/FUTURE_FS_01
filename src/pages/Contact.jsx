import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IconLinkedin, IconGithub, IconMail } from '../components/icons';
import './Contact.css';

const SOCIALS = [
  { icon: <IconMail />, label: 'shazizelamene@gmail.com', href: 'mailto:shazizelamene@gmail.com' },
  { icon: <IconLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/zelamene-shazi-66ab142b6/' },
  { icon: <IconGithub />, label: 'GitHub', href: 'https://github.com/Zelamene' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitting(true);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString() })
      .then(() => { setSubmitting(false); setSuccess(true); })
      .catch(() => { setSubmitting(false); alert('Something went wrong. Please try again.'); });
  };

  return (
    <>
      <Helmet><title>Contact — Zelamene Shazi</title></Helmet>
      <div className="ct-wrap">
        <div>
          <h1 className="ct-title">Get in touch</h1>
          <p className="ct-intro">Have a question, want to collaborate, or just want to say hello? Drop a message or reach out through any of these channels.</p>
          <div className="ct-socials">{SOCIALS.map((s, i) => (
            <a key={i} className="ct-soc" href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
              <span className="ct-soc-icon">{s.icon}</span><span className="ct-soc-label">{s.label}</span>
            </a>
          ))}</div>
        </div>
        <div className="ct-panel">
          <span className="ct-corner ct-corner--tl" aria-hidden="true"/><span className="ct-corner ct-corner--tr" aria-hidden="true"/>
          <span className="ct-corner ct-corner--bl" aria-hidden="true"/><span className="ct-corner ct-corner--br" aria-hidden="true"/>
          <span className="ct-scan" aria-hidden="true"/>
          {success ? (
            <div className="ct-success"><div className="ct-success-icon">✓</div><h2 className="ct-success-h">Transmission received.</h2><p className="ct-success-p">Thanks for reaching out — I'll get back to you soon.</p><button className="ct-success-btn" onClick={() => { setSuccess(false); setForm({ name:'',email:'',subject:'',message:'' }); }}>Send another message</button></div>
          ) : (
            <form className="ct-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <h2 className="ct-panel-h">Send a message</h2>
              <div className="ct-field"><label className="ct-label" htmlFor="ct-name">Name <span>*</span></label><input className="ct-input" id="ct-name" name="name" required placeholder="Full name" value={form.name} onChange={handleChange}/></div>
              <div className="ct-field"><label className="ct-label" htmlFor="ct-email">Email <span>*</span></label><input className="ct-input" id="ct-email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange}/></div>
              <div className="ct-field"><label className="ct-label" htmlFor="ct-subject">Subject</label><input className="ct-input" id="ct-subject" name="subject" placeholder="Collaboration opportunity" value={form.subject} onChange={handleChange}/></div>
              <div className="ct-field"><label className="ct-label" htmlFor="ct-message">Message <span>*</span></label><textarea className="ct-textarea" id="ct-message" name="message" required placeholder="Hi Zelamene..." rows="4" value={form.message} onChange={handleChange}/></div>
              <button className="ct-submit" type="submit" disabled={submitting}>{submitting ? '...' : '↗ Send transmission'}</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
