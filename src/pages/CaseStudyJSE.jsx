import React, { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);
const IconBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function CorrelationChart() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [width, setWidth] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const [reduced] = React.useState(() => {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; }
  });

  const data = useMemo(() => {
    const n = 96;
    const bump = (i, c, amp, w) => amp * Math.exp(-((i - c) ** 2) / (2 * w * w));
    const noise = (i) => { const x = Math.sin(i * 12.9898) * 43758.5453; return x - Math.floor(x) - 0.5; };
    const arr = [];
    for (let i = 0; i < n; i++) {
      let v = 0.04;
      v += bump(i, 7, 0.30, 3);
      v += bump(i, 18, -0.22, 3.5);
      v += bump(i, 26, 0.68, 2.4);
      v += bump(i, 41, -0.16, 3);
      v += bump(i, 53, 0.42, 4);
      v += bump(i, 62, 0.26, 3);
      v += bump(i, 78, -0.14, 4);
      v += noise(i) * 0.05;
      v = Math.max(-1, Math.min(1, v));
      arr.push({ i, year: 2018 + Math.floor(i / 12), month: i % 12, value: v });
    }
    return arr;
  }, []);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const n = data.length;
  const H = width && width < 520 ? 250 : 320;
  const padL = 44, padR = 16, padT = 22, padB = 30;
  const plotW = Math.max(0, width - padL - padR);
  const plotH = H - padT - padB;
  const yMin = -0.55, yMax = 0.92;

  const x = (i) => padL + (n <= 1 ? 0 : (i / (n - 1)) * plotW);
  const y = (v) => padT + (1 - (v - yMin) / (yMax - yMin)) * plotH;

  const yTicks = [0.8, 0.4, 0, -0.4];
  const yearTicks = [0, 12, 24, 36, 48, 60, 72, 84];
  const covid = 26;

  const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`).join(" ");
  const areaPath =
    `M ${x(0).toFixed(1)} ${(padT + plotH).toFixed(1)} ` +
    data.map((d, i) => `L ${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`).join(" ") +
    ` L ${x(n - 1).toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  const pointFromClientX = (clientX) => {
    const rect = svgRef.current.getBoundingClientRect();
    const rel = clientX - rect.left;
    let idx = Math.round(((rel - padL) / plotW) * (n - 1));
    idx = Math.max(0, Math.min(n - 1, idx));
    return idx;
  };
  const onMove = (e) => {
    if (!plotW) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setHover(pointFromClientX(clientX));
  };
  const leave = () => setHover(null);

  const hd = hover != null ? data[hover] : null;
  const tipLeft = hd ? Math.max(52, Math.min(width - 52, x(hd.i))) : 0;
  const tipTop = hd ? y(hd.value) : 0;
  const tipBelow = tipTop < 66;

  return (
    <div className="cs-chart" ref={containerRef}>
      {width > 0 && (
        <svg
          ref={svgRef}
          width={width}
          height={H}
          viewBox={`0 0 ${width} ${H}`}
          style={{ display: "block", touchAction: "pan-y" }}
        >
          <defs>
            <linearGradient id="csArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(47,123,255,0.32)" />
              <stop offset="100%" stopColor="rgba(47,123,255,0)" />
            </linearGradient>
          </defs>

          <rect x={x(covid - 1.4)} y={padT} width={x(covid + 1.4) - x(covid - 1.4)} height={plotH} fill="rgba(255,72,82,0.07)" />
          <line x1={x(covid)} y1={padT} x2={x(covid)} y2={padT + plotH} stroke="rgba(255,90,98,0.35)" strokeDasharray="3 3" />
          <text x={x(covid)} y={padT - 7} textAnchor="middle" fontSize="10.5" fill="#ff8f95" fontFamily="'JetBrains Mono', monospace">Mar 2020</text>

          {yTicks.map((t) => (
            <g key={t}>
              <line x1={padL} y1={y(t)} x2={width - padR} y2={y(t)} stroke={t === 0 ? "rgba(150,180,230,0.28)" : "rgba(150,180,230,0.1)"} />
              <text x={padL - 8} y={y(t) + 3.5} textAnchor="end" fontSize="10.5" fill="#7f8ea6" fontFamily="'JetBrains Mono', monospace">{t > 0 ? "+" : ""}{t.toFixed(1)}</text>
            </g>
          ))}

          {yearTicks.map((i) => (
            <text key={i} x={x(i)} y={H - 8} textAnchor="middle" fontSize="10.5" fill="#7f8ea6" fontFamily="'JetBrains Mono', monospace">{2018 + i / 12}</text>
          ))}

          <path d={areaPath} fill="url(#csArea)" />
          <path d={linePath} fill="none" stroke="#5aa2ff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 4px rgba(47,123,255,0.85))" }} />

          {hd && (
            <g>
              <line x1={x(hd.i)} y1={padT} x2={x(hd.i)} y2={padT + plotH} stroke="rgba(180,205,255,0.4)" />
              <circle cx={x(hd.i)} cy={y(hd.value)} r="4.5" fill="#fff" stroke="#5aa2ff" strokeWidth="2" style={{ filter: "drop-shadow(0 0 5px rgba(47,123,255,0.9))" }} />
            </g>
          )}

          <rect
            x={padL} y={padT} width={plotW} height={plotH} fill="transparent"
            onMouseMove={onMove} onMouseLeave={leave}
            onTouchStart={onMove} onTouchMove={onMove} onTouchEnd={leave}
          />
        </svg>
      )}

      {hd && (
        <div className="cs-tip" style={{ left: tipLeft, top: tipBelow ? tipTop + 14 : tipTop - 14, transform: `translate(-50%, ${tipBelow ? "0" : "-100%"})` }}>
          <span className="cs-tip-date">{MONTHS[hd.month]} {hd.year}</span>
          <span className="cs-tip-val">{hd.value >= 0 ? "+" : ""}{hd.value.toFixed(2)}</span>
        </div>
      )}

      <p className="cs-cap">
        Rolling correlation of JSE&nbsp;Top&nbsp;40 returns with rand weakness (USD/ZAR).
        {reduced ? " " : " Hover the line to inspect any month. "}
        Illustrative of the finding — the full dataset is live in the dashboard.
      </p>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@500;600&family=Source+Sans+Pro:wght@400;600&family=Space+Grotesk:wght@500;600;700&display=swap');

.cs-wrap{ max-width:820px; margin:0 auto; padding:100px 24px 80px; color:#f4f7ff; font-family:'Source Sans Pro', system-ui, sans-serif; }
.cs-wrap *{ box-sizing:border-box; }

.cs-back{ display:inline-flex; align-items:center; gap:5px; color:#8fa2bd; text-decoration:none; font-size:.9rem; font-weight:600; font-family:'Inter', sans-serif; margin-bottom:26px; transition:color .2s ease; }
.cs-back:hover{ color:#dfeaff; }
.cs-back svg{ width:16px; height:16px; }

.cs-kicker{ font-family:'JetBrains Mono', monospace; font-size:.82rem; color:#6aa2ff; margin:0 0 12px; }
.cs-title{ font-family:'Space Grotesk', sans-serif; font-weight:700; letter-spacing:-.02em; font-size:clamp(2.1rem, 5.2vw, 3rem); line-height:1.06; margin:0 0 16px; color:#f6f9ff; }
.cs-lede{ font-size:clamp(1.08rem, 2.2vw, 1.28rem); line-height:1.6; color:#aebbd0; margin:0 0 22px; }
.cs-meta{ display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin-bottom:6px; }
.cs-chip{ font-size:.72rem; font-weight:600; padding:4px 10px; border-radius:6px; background:rgba(47,123,255,.1); border:1px solid rgba(47,123,255,.28); color:#bcd4ff; }
.cs-actions{ display:flex; flex-wrap:wrap; gap:12px; margin-top:22px; }
.cs-btn{ display:inline-flex; align-items:center; gap:7px; padding:11px 20px; border-radius:9px; font-family:'Inter', sans-serif; font-weight:600; font-size:14px; text-decoration:none; cursor:pointer; transition:all .22s ease; border:1px solid transparent; }
.cs-btn svg{ width:16px; height:16px; }
.cs-btn--primary{ background:#2f7bff; color:#fff; }
.cs-btn--primary:hover{ background:#4a8bff; box-shadow:0 8px 28px rgba(47,123,255,.4); transform:translateY(-1px); }
.cs-btn--ghost{ background:rgba(255,255,255,.02); color:#dfe7f5; border-color:rgba(148,163,184,.22); }
.cs-btn--ghost:hover{ border-color:rgba(47,123,255,.55); color:#fff; background:rgba(47,123,255,.06); }

.cs-stats{ display:grid; grid-template-columns:repeat(4, 1fr); gap:1px; margin:40px 0 8px; border-radius:14px; overflow:hidden; border:1px solid rgba(47,123,255,.18); background:rgba(47,123,255,.14); }
@media (max-width:640px){ .cs-stats{ grid-template-columns:repeat(2, 1fr); } }
.cs-stat{ background:linear-gradient(180deg, rgba(15,26,50,.82), rgba(9,16,32,.9)); padding:18px 16px; }
.cs-stat-v{ font-family:'JetBrains Mono', monospace; font-weight:600; font-size:1.5rem; color:#eaf2ff; letter-spacing:-.01em; }
.cs-stat-l{ font-size:.78rem; color:#8fa2bd; line-height:1.4; margin-top:5px; }

.cs-h2{ font-family:'Space Grotesk', sans-serif; font-weight:700; letter-spacing:-.01em; font-size:1.5rem; color:#f2f6ff; margin:52px 0 14px; }
.cs-p{ font-size:1.04rem; line-height:1.72; color:#aebbd0; margin:0 0 18px; }
.cs-p b{ color:#e7eefb; font-weight:600; }

.cs-panel{ position:relative; margin:26px 0 10px; border-radius:16px; padding:18px 16px 12px; background:linear-gradient(180deg, rgba(16,26,48,.72), rgba(10,17,32,.82)); border:1px solid rgba(47,123,255,.2); box-shadow:0 12px 34px rgba(0,0,0,.4); }
.cs-panel-h{ font-family:'Space Grotesk', sans-serif; font-weight:600; font-size:1rem; color:#e7eefb; margin:2px 4px 6px; }
.cs-chart{ position:relative; width:100%; }
.cs-tip{ position:absolute; z-index:4; pointer-events:none; display:flex; flex-direction:column; align-items:center; gap:1px; padding:6px 10px; border-radius:8px; background:rgba(6,11,22,.92); border:1px solid rgba(90,162,255,.5); box-shadow:0 6px 18px rgba(0,0,0,.5); white-space:nowrap; }
.cs-tip-date{ font-family:'Inter', sans-serif; font-size:.72rem; color:#9fb0c9; }
.cs-tip-val{ font-family:'JetBrains Mono', monospace; font-weight:600; font-size:.95rem; color:#8fc0ff; }
.cs-cap{ font-size:.82rem; color:#7f8ea6; line-height:1.5; margin:12px 4px 2px; }

.cs-callout{ position:relative; margin:26px 0; border-radius:14px; padding:22px 22px 22px 26px; background:linear-gradient(180deg, rgba(40,16,20,.5), rgba(24,11,14,.55)); border:1px solid rgba(255,84,92,.28); overflow:hidden; }
.cs-callout::before{ content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:linear-gradient(180deg, #ff5a62, #c1121f); box-shadow:0 0 12px rgba(255,70,80,.7); }
.cs-callout-v{ font-family:'JetBrains Mono', monospace; font-weight:600; font-size:2rem; color:#ffd7d9; }
.cs-callout-p{ font-size:1rem; line-height:1.65; color:#e6c3c6; margin:8px 0 0; }
.cs-callout-p b{ color:#fff; font-weight:600; }

.cs-btn:focus-visible, .cs-back:focus-visible{ outline:2px solid #6aa2ff; outline-offset:2px; }
`;

export default function CaseStudyJSE() {
  return (
    <>
      <Helmet>
        <title>Is the JSE really a rand hedge? — Zelamene Shazi</title>
      </Helmet>
      <style>{css}</style>

      <article className="cs-wrap">
        <Link className="cs-back" to="/projects"><IconBack /> Back to projects</Link>

        <p className="cs-kicker">Case study — quantitative analysis</p>
        <h1 className="cs-title">Is the JSE really a rand hedge?</h1>
        <p className="cs-lede">
          South African investors treat the JSE as a natural hedge against a weakening
          rand. I put that belief to the test against seven years of data — and found
          the hedge is real, but far less dependable than the story suggests.
        </p>

        <div className="cs-meta">
          <span className="cs-chip">Python</span>
          <span className="cs-chip">pandas</span>
          <span className="cs-chip">Plotly</span>
          <span className="cs-chip">Streamlit</span>
        </div>
        <div className="cs-actions">
          <a className="cs-btn cs-btn--primary" href="https://jse-rand-market-analytics-dashboard-3w8ntex9xejyesphdwaqtm.streamlit.app/" target="_blank" rel="noreferrer"><IconArrow /> Live dashboard</a>
          <a className="cs-btn cs-btn--ghost" href="https://github.com/Zelamene/JSE-Rand-Market-Analytics-Dashboard" target="_blank" rel="noreferrer"><IconGithub /> View code</a>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="cs-stat-v">7 yr</div><div className="cs-stat-l">of JSE Top 40 &amp; USD/ZAR data</div></div>
          <div className="cs-stat"><div className="cs-stat-v">≈ 0.0</div><div className="cs-stat-l">average rolling correlation</div></div>
          <div className="cs-stat"><div className="cs-stat-v">+0.72</div><div className="cs-stat-l">peak correlation — Mar 2020</div></div>
          <div className="cs-stat"><div className="cs-stat-v">36 pts</div><div className="cs-stat-l">Naspers vs Standard Bank gap</div></div>
        </div>

        <h2 className="cs-h2">The question</h2>
        <p className="cs-p">
          Many of the JSE's largest names — Naspers, Prosus, Richemont, the miners — earn
          most of their money offshore. When the rand weakens, those earnings translate into
          more rands, so the index is <b>supposed</b> to rise as the currency falls. That's the
          rand-hedge thesis, and it's used to justify holding local equity through currency
          storms. But "supposed to" and "reliably does" are different claims, so I tested the
          second one directly.
        </p>

        <h2 className="cs-h2">The approach</h2>
        <p className="cs-p">
          I pulled seven years of daily JSE&nbsp;Top&nbsp;40 and USD/ZAR data, aligned and cleaned
          it in pandas, and computed a <b>rolling correlation</b> between index returns and rand
          weakness across a moving window. Rather than a single headline number — which hides as
          much as it reveals — the rolling view shows how the relationship <b>behaves over time</b>,
          and where it breaks.
        </p>

        <h2 className="cs-h2">The finding</h2>
        <p className="cs-p">
          The hedge isn't constant — it's <b>episodic</b>. For long stretches the correlation sits
          near zero: the JSE and the rand simply aren't moving together. Then a crisis hits and the
          relationship snaps strongly positive, exactly when the hedge is supposed to matter most.
        </p>

        <div className="cs-panel">
          <div className="cs-panel-h">Rolling correlation — JSE Top 40 vs rand weakness</div>
          <CorrelationChart />
        </div>

        <div className="cs-callout">
          <div className="cs-callout-v">36 points</div>
          <p className="cs-callout-p">
            March 2020 is the clearest case. As COVID hit, the rand collapsed and the two poles of
            the index split apart: <b>Naspers</b>, the offshore-earning hedge, held up while
            <b> Standard Bank</b>, a domestic lender, fell hard — a roughly <b>36-percentage-point</b>
            divergence in a single month. The hedge worked, but only in the storm.
          </p>
        </div>

        <h2 className="cs-h2">What it means</h2>
        <p className="cs-p">
          Treating the JSE as an always-on rand hedge is a mistake — most of the time it isn't one.
          But as crisis insurance it earns its reputation. I turned that into a <b>backtested pairs
          strategy</b> that leans on the relationship when it's actually present, and wrapped the whole
          analysis in a <b>live Streamlit dashboard</b> so anyone can explore the correlation, the
          stock-level splits, and the strategy for themselves.
        </p>

        <div className="cs-actions">
          <a className="cs-btn cs-btn--primary" href="https://jse-rand-market-analytics-dashboard-3w8ntex9xejyesphdwaqtm.streamlit.app/" target="_blank" rel="noreferrer"><IconArrow /> Explore the live dashboard</a>
          <a className="cs-btn cs-btn--ghost" href="https://github.com/Zelamene/JSE-Rand-Market-Analytics-Dashboard" target="_blank" rel="noreferrer"><IconGithub /> View the code</a>
        </div>
      </article>
    </>
  );
}