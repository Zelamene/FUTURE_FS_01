import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const heroCSS = `
.hero-namewrap{position:relative;display:inline-block;max-width:100%}
.hero-name{position:relative;z-index:2;margin:0;font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.02em;line-height:1.03;font-size:clamp(2.4rem,6vw,3.6rem);color:#f6f9ff}
.hero-blade{position:relative;z-index:2;margin-top:16px;height:2.5px;width:100%;border-radius:2px;background:#eaf2ff;box-shadow:0 0 5px #2f7bff,0 0 11px #2f7bff,0 0 24px rgba(47,123,255,.65),0 0 44px rgba(47,123,255,.38)}
.hero-blade::after{content:'';position:absolute;top:50%;right:-2px;width:7px;height:7px;border-radius:50%;transform:translateY(-50%);background:#fff;box-shadow:0 0 7px 2px #cfe0ff,0 0 14px 3px rgba(47,123,255,.7)}
.hero-streak{position:absolute;top:42%;left:-25%;width:150%;height:2px;border-radius:2px;z-index:1;pointer-events:none;opacity:0;filter:blur(1.5px);background:linear-gradient(90deg,transparent 0%,rgba(207,224,255,.15) 30%,#eaf2ff 50%,rgba(207,224,255,.15) 70%,transparent 100%)}
.hero-lede{margin:26px 0 32px;font-size:clamp(1.05rem,2.2vw,1.25rem);line-height:1.6;color:#9fb0c9;max-width:34rem}
.hero-cta{display:flex;flex-wrap:wrap;gap:14px}
.hero-btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:9px;font-family:'Inter',sans-serif;font-weight:600;font-size:15px;text-decoration:none;cursor:pointer;transition:all .22s ease;border:1px solid transparent}
.hero-btn--p{background:#2f7bff;color:#fff}
.hero-btn--p:hover{background:#4a8bff;box-shadow:0 8px 30px rgba(47,123,255,.45);transform:translateY(-1px)}
.hero-btn--g{background:rgba(255,255,255,.02);color:#dfe7f5;border-color:rgba(148,163,184,.22)}
.hero-btn--g:hover{border-color:rgba(47,123,255,.55);color:#fff;background:rgba(47,123,255,.06)}
.hero-avatar{position:relative;width:clamp(160px,22vw,244px);height:clamp(160px,22vw,244px);border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(120% 120% at 35% 25%,#183056 0%,#0c1a33 60%,#0a1526 100%);border:1px solid rgba(47,123,255,.45);box-shadow:0 0 0 1px rgba(47,123,255,.15),0 0 48px rgba(47,123,255,.28),inset 0 0 30px rgba(47,123,255,.12)}
.hero-avatar::before{content:'';position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(47,123,255,.25);filter:blur(2px)}
.hero-avatar-i{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:.02em;font-size:clamp(2.6rem,5vw,3.3rem);color:rgba(224,235,255,.92);text-shadow:0 0 18px rgba(47,123,255,.5)}
.hero-scroll{align-self:center;padding-bottom:26px;display:flex;flex-direction:column;align-items:center;gap:9px;color:#7f8ea6;font-size:.82rem;letter-spacing:.04em}
.hero-chev{width:16px;height:16px;border-right:2px solid rgba(150,180,230,.6);border-bottom:2px solid rgba(150,180,230,.6);transform:rotate(45deg)}
@media(prefers-reduced-motion:no-preference){
  .hero-name{animation:hName .9s cubic-bezier(.2,.7,.2,1) .35s both}
  .hero-lede{animation:hRise .7s ease 1.05s both}
  .hero-cta{animation:hRise .7s ease 1.30s both}
  .hero-streak{animation:hStreak 1.4s cubic-bezier(.3,.6,.2,1) .25s both}
  .hero-blade{animation:hIgnite .85s cubic-bezier(.25,.7,.3,1) 1.55s both,hFlicker .16s steps(2,end) 2.35s 2}
  .hero-chev{animation:hBounce 1.8s ease-in-out infinite}
}
@keyframes hName{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes hRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes hIgnite{0%{width:0;opacity:.2}10%{opacity:1}100%{width:100%;opacity:1}}
@keyframes hStreak{0%{transform:translateX(-120%);opacity:0}12%{opacity:.9}55%{opacity:.55}100%{transform:translateX(120%);opacity:0}}
@keyframes hFlicker{0%,100%{filter:brightness(1)}50%{filter:brightness(1.4)}}
@keyframes hBounce{0%,100%{transform:rotate(45deg) translate(0,0)}50%{transform:rotate(45deg) translate(4px,4px)}}
@media(max-width:820px){.hero-inner{flex-direction:column-reverse!important;gap:40px!important;padding:110px 22px 24px!important}.hero-text{width:100%}}
`;

export default function Home({ reduced }) {
  return (
    <>
      <Helmet><title>Zelamene Shazi — Software, Cloud & Quant</title></Helmet>
      <style>{heroCSS}</style>
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column' }}>
        <div className="hero-inner" style={{ flex:1, width:'100%', maxWidth:1120, margin:'0 auto', padding:'120px 24px 30px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:56 }}>
          <div className="hero-text" style={{ flex:'1 1 auto', maxWidth:'36rem' }}>
            <div className="hero-namewrap">
              <div className="hero-streak" aria-hidden="true" />
              <h1 className="hero-name">Zelamene Shazi</h1>
              <div className="hero-blade" aria-hidden="true" />
            </div>
            <p className="hero-lede">Final-year Computer Science student at the University of Pretoria — building in software, cloud & DevOps, and bringing quantitative methods to real-world problems.</p>
            <div className="hero-cta">
              <Link to="/projects" className="hero-btn hero-btn--p">View my work</Link>
              <Link to="/contact" className="hero-btn hero-btn--g">Get in touch</Link>
            </div>
          </div>
          <div style={{ flex:'0 0 auto' }}>
            <div className="hero-avatar"><span className="hero-avatar-i">ZS</span></div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span className="hero-chev" />Scroll to explore</div>
      </section>
    </>
  );
}
