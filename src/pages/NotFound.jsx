import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const css = `
.nf-center{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;z-index:2;padding:80px 24px 60px;text-align:center}
.nf-num-wrap{position:relative;margin-bottom:10px}
.nf-num{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(7rem,22vw,14rem);letter-spacing:-.04em;line-height:.88;color:transparent;position:relative;z-index:2;background:linear-gradient(180deg,rgba(90,162,255,.92) 0%,rgba(47,123,255,.65) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 18px rgba(47,123,255,.7)) drop-shadow(0 0 44px rgba(47,123,255,.35))}
.nf-glitch{position:absolute;inset:0;z-index:1}.nf-glitch-r,.nf-glitch-c{position:absolute;inset:0;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(7rem,22vw,14rem);letter-spacing:-.04em;line-height:.88;overflow:hidden;pointer-events:none}.nf-glitch-r{color:rgba(255,72,82,.5)}.nf-glitch-c{color:rgba(90,162,255,.4)}
.nf-scanlines{position:absolute;inset:0;z-index:3;pointer-events:none;mix-blend-mode:screen;opacity:.3;background:repeating-linear-gradient(0deg,rgba(160,200,255,.06) 0px,rgba(160,200,255,.06) 1px,transparent 1px,transparent 3px)}
.nf-ninetyfive{position:absolute;z-index:0;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(3rem,9vw,5.5rem);letter-spacing:.03em;color:transparent;-webkit-text-stroke:1.5px rgba(255,72,82,.2);top:-12%;right:-18%;transform:rotate(14deg);pointer-events:none;user-select:none}
.nf-headline{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(1.4rem,3.5vw,2rem);color:#f2f6ff;margin:20px 0 12px}
.nf-sub{color:#93a0b8;font-size:clamp(1rem,2vw,1.15rem);line-height:1.6;max-width:28rem;margin:0 0 28px}
.nf-sub b{color:#ff8a8f;font-weight:600}
.nf-home{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:9px;font-family:'Inter',sans-serif;font-weight:600;font-size:15px;text-decoration:none;background:#2f7bff;color:#fff;transition:all .22s ease}
.nf-home:hover{background:#4a8bff;box-shadow:0 8px 30px rgba(47,123,255,.45);transform:translateY(-1px)}
.nf-curb{position:absolute;bottom:0;left:0;right:0;height:8px;z-index:6;background:repeating-linear-gradient(90deg,#ff3b30 0 20px,#fff 20px 40px);opacity:.55}
@media(prefers-reduced-motion:no-preference){
  .nf-glitch-r{animation:nfGR 3.5s steps(3,end) infinite}.nf-glitch-c{animation:nfGC 4s steps(4,end) infinite .5s}.nf-num{animation:nfFl 6s ease-in-out infinite}.nf-ninetyfive{animation:nfFloat 8s ease-in-out infinite}
}
@keyframes nfGR{0%,88%,100%{transform:none;clip-path:inset(0)}90%{transform:translate(4px,-2px);clip-path:inset(20% 0 60% 0)}94%{transform:translate(-3px,1px);clip-path:inset(50% 0 20% 0)}}
@keyframes nfGC{0%,85%,100%{transform:none;clip-path:inset(0)}87%{transform:translate(-5px,2px);clip-path:inset(30% 0 45% 0)}91%{transform:translate(3px,-1px);clip-path:inset(60% 0 10% 0)}}
@keyframes nfFl{0%,92%,96%,100%{opacity:1}93%{opacity:.7}95%{opacity:.85}}
@keyframes nfFloat{0%,100%{transform:rotate(14deg) translate(0,0)}50%{transform:rotate(18deg) translate(-8px,10px)}}
`;

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — Zelamene Shazi</title></Helmet>
      <style>{css}</style>
      <div className="nf-center" style={{ minHeight: '100vh' }}>
        <div className="nf-num-wrap">
          <span className="nf-ninetyfive" aria-hidden="true">#95</span>
          <div className="nf-glitch" aria-hidden="true"><span className="nf-glitch-r">404</span><span className="nf-glitch-c">404</span></div>
          <div className="nf-scanlines" aria-hidden="true" />
          <span className="nf-num">404</span>
        </div>
        <h1 className="nf-headline">You've spun out in hyperspace.</h1>
        <p className="nf-sub">Looks like this page took a wrong turn past the Kessel Run. Nothing here but empty space and a faint smell of <b>burnt rubber</b>.</p>
        <Link to="/" className="nf-home">Back to the grid</Link>
      </div>
      <div className="nf-curb" aria-hidden="true" />
    </>
  );
}
