import { useState } from "react";

const services = [
  { code: "ISO 9001", name: "Quality Management System", icon: "⭐", color: "#F0A500" },
  { code: "ISO 14001", name: "Environment Management System", icon: "🌿", color: "#2ECC71" },
  { code: "ISO 45001", name: "Occupational Health & Safety", icon: "🦺", color: "#FF6B6B" },
  { code: "ISO 27001", name: "Information Security Management", icon: "🔐", color: "#74B9FF" },
  { code: "ISO 22000", name: "Food Safety Management System", icon: "🍽️", color: "#FDCB6E" },
  { code: "ISO 13485", name: "Medical Devices QMS", icon: "🏥", color: "#D98EF0" },
  { code: "ISO 50001", name: "Energy Management", icon: "⚡", color: "#FFE066" },
  { code: "ISO 37001", name: "Anti-Bribery Management", icon: "⚖️", color: "#A8D8EA" },
  { code: "ISO 22716", name: "Cosmetic GMP", icon: "💄", color: "#FF85A1" },
  { code: "GMP", name: "Good Manufacturing Practice", icon: "🏭", color: "#55EFC4" },
  { code: "GLP", name: "Good Laboratory Practice", icon: "🧪", color: "#74B9FF" },
  { code: "GHP", name: "Good Hygiene Practice", icon: "🧼", color: "#00CEC9" },
  { code: "HACCP", name: "Hazard Analysis Critical Control Point", icon: "🔍", color: "#FF7675" },
  { code: "HALAL", name: "Halal Certification", icon: "☪️", color: "#00B894" },
  { code: "CE Marking", name: "European Conformity", icon: "🇪🇺", color: "#74B9FF" },
  { code: "ISO 42001", name: "AI Management System", icon: "🤖", color: "#C39BD3" },
  { code: "ISO 27032", name: "Cybersecurity Guidelines", icon: "🛡️", color: "#85C1E9" },
  { code: "ISO 22301", name: "Business Continuity Management", icon: "🔄", color: "#F0B27A" },
  { code: "PCI DSS", name: "Payment Card Industry Security", icon: "💳", color: "#AED6F1" },
  { code: "ISO 56002", name: "Innovation Management System", icon: "💡", color: "#F7DC6F" },
];

const WA_LINK = "https://wa.me/60148855311";
const PHONE = "+6014-88 55 3 11";
const NAME = "Afiq Nabil";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --gold: #E8A020;
    --gold-light: #F5C842;
    --gold-bright: #FFD966;
    --navy: #080F1E;
    --navy-mid: #0F1E36;
    --navy-card: #1A2D4A;
    --white: #FFFFFF;
    --off-white: #F0EDE8;
    --text-main: #FFFFFF;
    --text-sub: #D4CFCA;
    --text-dim: #A8A39E;
  }

  body { background: var(--navy); font-family: 'DM Sans', sans-serif; color: var(--text-main); }

  /* ===== NAV ===== */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 48px;
    background: rgba(8,15,30,0.96);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(232,160,32,0.25);
  }
  .nav-brand {
    font-family: 'Playfair Display', serif; font-size: 1rem;
    color: var(--gold-bright); letter-spacing: 0.05em; font-weight: 700;
  }
  .nav-cta {
    background: var(--gold); color: #000; font-weight: 800; font-size: 0.85rem;
    padding: 10px 22px; border-radius: 4px; text-decoration: none;
    letter-spacing: 0.07em; text-transform: uppercase;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 4px 16px rgba(232,160,32,0.35);
  }
  .nav-cta:hover { background: var(--gold-bright); transform: translateY(-1px); }

  /* ===== TABS ===== */
  .tabs {
    display: flex; border-bottom: 2px solid rgba(232,160,32,0.25);
    background: var(--navy-mid);
    position: sticky; top: 57px; z-index: 90;
  }
  .tab-btn {
    flex: 1; padding: 15px 8px; background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 700;
    color: var(--text-sub); letter-spacing: 0.08em; text-transform: uppercase;
    border-bottom: 3px solid transparent; margin-bottom: -2px;
    transition: color 0.2s, border-color 0.2s;
  }
  .tab-btn.active { color: var(--gold-bright); border-bottom-color: var(--gold); }
  .tab-btn:hover { color: var(--gold-light); }

  /* ===== SECTIONS ===== */
  .section { display: none; min-height: 100vh; }
  .section.active { display: block; }

  /* ===== HERO ===== */
  .hero {
    min-height: 100vh; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 130px 24px 70px;
    background:
      radial-gradient(ellipse at 15% 55%, rgba(232,160,32,0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 85% 20%, rgba(232,160,32,0.08) 0%, transparent 50%),
      var(--navy);
    text-align: center; position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(232,160,32,0.04) 80px, rgba(232,160,32,0.04) 81px),
      repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(232,160,32,0.04) 80px, rgba(232,160,32,0.04) 81px);
  }
  .hero-badge {
    display: inline-block; background: rgba(232,160,32,0.18); border: 1.5px solid rgba(232,160,32,0.55);
    color: var(--gold-bright); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
    padding: 7px 20px; border-radius: 30px; margin-bottom: 30px;
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 6vw, 5.5rem); font-weight: 900;
    line-height: 1.06; color: var(--white);
    max-width: 900px;
  }
  .hero h1 span { color: var(--gold-bright); }
  .hero-sub {
    margin-top: 24px; font-size: clamp(1rem, 2vw, 1.15rem); font-weight: 500;
    color: #C8D8F0; max-width: 560px; line-height: 1.75;
  }
  .hero-actions { display: flex; gap: 16px; margin-top: 48px; flex-wrap: wrap; justify-content: center; }
  .btn-primary {
    background: var(--gold); color: #000; font-weight: 800;
    padding: 16px 36px; border-radius: 5px; text-decoration: none;
    font-size: 0.92rem; letter-spacing: 0.07em; text-transform: uppercase;
    transition: transform 0.2s, background 0.2s;
    box-shadow: 0 6px 24px rgba(232,160,32,0.4);
  }
  .btn-primary:hover { background: var(--gold-bright); transform: translateY(-2px); }
  .btn-secondary {
    border: 2px solid rgba(232,160,32,0.6); color: var(--gold-bright);
    padding: 16px 36px; border-radius: 5px; text-decoration: none;
    font-size: 0.92rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
    transition: border-color 0.2s, background 0.2s; cursor: pointer; background: transparent;
  }
  .btn-secondary:hover { border-color: var(--gold-bright); background: rgba(232,160,32,0.1); }

  .hero-stats { display: flex; gap: 56px; margin-top: 72px; padding-top: 48px; border-top: 1px solid rgba(232,160,32,0.2); }
  .stat-val { font-family: 'Playfair Display', serif; font-size: 2.6rem; color: var(--gold-bright); font-weight: 900; }
  .stat-label { font-size: 0.8rem; font-weight: 700; color: #C8D8F0; text-transform: uppercase; letter-spacing: 0.12em; margin-top: 4px; }

  /* ===== SERVICES GRID ===== */
  .services-wrap { padding: 80px 40px; max-width: 1200px; margin: 0 auto; }
  .section-title {
    font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.2rem);
    margin-bottom: 10px; text-align: center; color: var(--gold); font-weight: 900;
  }
  .section-title span { color: var(--gold-bright); }
  .section-sub { text-align: center; color: #C8D8F0; font-size: 1.1rem; font-weight: 700; margin-bottom: 52px; }
  .services-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px;
  }
  .service-card {
    background: var(--navy-card); border: 1px solid rgba(232,160,32,0.15);
    border-radius: 10px; padding: 24px; cursor: pointer; text-decoration: none;
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden; display: block;
  }
  .service-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent, var(--card-color, var(--gold)), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .service-card:hover { transform: translateY(-5px); border-color: rgba(232,160,32,0.45); box-shadow: 0 16px 48px rgba(0,0,0,0.5); }
  .service-card:hover::before { opacity: 1; }
  .card-icon { font-size: 2.2rem; margin-bottom: 14px; }
  .card-code {
    font-size: 0.75rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--gold-bright); margin-bottom: 7px;
  }
  .card-name { font-size: 0.95rem; font-weight: 600; color: #FFFFFF; line-height: 1.45; }

  /* ===== POSTER SECTION ===== */
  .poster-wrap { padding: 80px 24px; display: flex; flex-direction: column; align-items: center; gap: 32px; }
  .poster {
    width: 100%; max-width: 600px;
    background: linear-gradient(150deg, #0D1B32 0%, #162540 55%, #0D1B32 100%);
    border: 1.5px solid rgba(232,160,32,0.4);
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 32px 100px rgba(0,0,0,0.8), 0 0 60px rgba(232,160,32,0.08);
    position: relative;
  }
  .poster-inner { padding: 48px 40px; }
  .poster-corner {
    position: absolute; width: 110px; height: 110px;
    border-color: var(--gold); border-style: solid; opacity: 0.5;
  }
  .poster-corner.tl { top: 14px; left: 14px; border-width: 2px 0 0 2px; }
  .poster-corner.br { bottom: 14px; right: 14px; border-width: 0 2px 2px 0; }
  .poster-logo-line { display: flex; align-items: center; gap: 12px; margin-bottom: 36px; }
  .poster-certified-badge {
    background: var(--gold); color: #000; font-size: 0.65rem;
    font-weight: 800; letter-spacing: 0.13em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 3px;
  }
  .poster-org { font-size: 0.75rem; font-weight: 600; color: #C8D8F0; letter-spacing: 0.05em; }
  .poster-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.9rem, 5.5vw, 3rem); font-weight: 900; line-height: 1.1;
    margin-bottom: 10px; color: var(--white);
  }
  .poster-headline em { color: var(--gold-bright); font-style: normal; }
  .poster-tagline { font-size: 0.92rem; font-weight: 600; color: #C8D8F0; margin-bottom: 36px; letter-spacing: 0.03em; }
  .poster-services-mini {
    display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-bottom: 36px;
  }
  .psm-item {
    display: flex; align-items: center; gap: 9px;
    background: rgba(232,160,32,0.1); border: 1px solid rgba(232,160,32,0.25);
    border-radius: 5px; padding: 9px 11px;
  }
  .psm-icon { font-size: 1.1rem; flex-shrink: 0; }
  .psm-text { font-size: 0.78rem; font-weight: 700; color: #FFFFFF; line-height: 1.3; }
  .poster-divider { border: none; border-top: 1px solid rgba(232,160,32,0.25); margin: 28px 0; }
  .poster-contact-area { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
  .poster-agent-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #C8D8F0; margin-bottom: 5px; }
  .poster-agent-name { font-family: 'Playfair Display', serif; font-size: 1.45rem; color: var(--gold-bright); font-weight: 900; }
  .poster-agent-phone { font-size: 0.9rem; font-weight: 700; color: #FFFFFF; margin-top: 4px; }
  .poster-wa-btn {
    display: inline-flex; align-items: center; gap: 9px;
    background: #25D366; color: #fff; font-weight: 800;
    padding: 13px 22px; border-radius: 7px; text-decoration: none;
    font-size: 0.88rem; letter-spacing: 0.04em;
    transition: opacity 0.2s, transform 0.15s;
    box-shadow: 0 4px 16px rgba(37,211,102,0.4);
  }
  .poster-wa-btn:hover { opacity: 0.9; transform: translateY(-1px); }
  .poster-moody-footer {
    background: rgba(232,160,32,0.12); border-top: 1px solid rgba(232,160,32,0.3);
    padding: 14px 40px; font-size: 0.72rem; font-weight: 700;
    color: #C8D8F0; letter-spacing: 0.1em;
    text-align: center; text-transform: uppercase;
  }

  /* ===== CONTACT SECTION ===== */
  .contact-wrap { padding: 80px 24px; max-width: 700px; margin: 0 auto; text-align: center; }
  .contact-card {
    background: var(--navy-mid); border: 1.5px solid rgba(232,160,32,0.25);
    border-radius: 14px; padding: 56px 40px; margin-top: 40px;
  }
  .contact-avatar {
    width: 84px; height: 84px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--gold-bright));
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 900; color: #000;
    margin: 0 auto 24px;
    box-shadow: 0 8px 32px rgba(232,160,32,0.4);
  }
  .contact-name { font-family: 'Playfair Display', serif; font-size: 2.1rem; font-weight: 900; color: var(--white); }
  .contact-title { font-size: 0.82rem; font-weight: 700; color: var(--gold-bright); letter-spacing: 0.13em; text-transform: uppercase; margin-top: 8px; margin-bottom: 40px; }
  .contact-methods { display: flex; flex-direction: column; gap: 12px; }
  .contact-method {
    display: flex; align-items: center; gap: 16px;
    background: rgba(232,160,32,0.08); border: 1.5px solid rgba(232,160,32,0.2);
    border-radius: 10px; padding: 18px 22px; text-decoration: none;
    color: var(--white); transition: border-color 0.2s, background 0.2s;
  }
  .contact-method:hover { border-color: rgba(232,160,32,0.5); background: rgba(232,160,32,0.14); }
  .cm-icon { font-size: 1.4rem; flex-shrink: 0; }
  .cm-info { text-align: left; }
  .cm-label { font-size: 0.7rem; font-weight: 700; color: #C8D8F0; text-transform: uppercase; letter-spacing: 0.11em; }
  .cm-value { font-size: 1rem; font-weight: 700; color: var(--white); margin-top: 3px; }
  .cm-wa { background: rgba(37,211,102,0.1); border-color: rgba(37,211,102,0.35); }
  .cm-wa:hover { border-color: rgba(37,211,102,0.65); background: rgba(37,211,102,0.2); }
  .cm-wa .cm-label { color: #4AE080; }
  .cm-wa .cm-value { color: #4AE080; }
  .share-links { margin-top: 40px; }
  .share-label { font-size: 0.78rem; font-weight: 700; color: #C8D8F0; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 16px; }
  .share-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .share-btn {
    display: flex; align-items: center; gap: 8px; padding: 11px 20px;
    border-radius: 7px; font-size: 0.85rem; font-weight: 700; text-decoration: none;
    transition: opacity 0.2s, transform 0.15s;
  }
  .share-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .fb { background: #1877F2; color: #fff; }
  .wa2 { background: #25D366; color: #fff; }
  .tg { background: #0088CC; color: #fff; }

  /* Responsive */
  @media (max-width: 600px) {
    .nav { padding: 14px 20px; }
    .nav-brand { font-size: 0.78rem; }
    .hero-stats { gap: 28px; }
    .services-wrap { padding: 60px 16px; }
    .poster-inner { padding: 32px 22px; }
    .contact-card { padding: 40px 20px; }
    .tabs { top: 53px; }
  }
`;

const POSTER_SERVICES = [
  { icon: "⭐", text: "ISO 9001 Quality" },
  { icon: "🌿", text: "ISO 14001 Environment" },
  { icon: "🦺", text: "ISO 45001 Safety" },
  { icon: "🔐", text: "ISO 27001 InfoSec" },
  { icon: "🍽️", text: "ISO 22000 Food Safety" },
  { icon: "☪️", text: "HALAL Certification" },
  { icon: "🤖", text: "ISO 42001 AI Mgmt" },
  { icon: "🏭", text: "GMP / HACCP / GLP" },
];

export default function App() {
  const [tab, setTab] = useState("website");

  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <div className="nav-brand">MOODY INTERNATIONAL · CERTIFIED AGENT</div>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="nav-cta">
          📲 WhatsApp Us
        </a>
      </nav>

      <div className="tabs" style={{ paddingTop: "57px" }}>
        {[
          { key: "website", label: "🌐 Website" },
          { key: "poster", label: "🖼️ Poster" },
          { key: "contact", label: "📱 Contact Links" },
        ].map((t) => (
          <button
            key={t.key}
            className={`tab-btn${tab === t.key ? " active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ========== WEBSITE TAB ========== */}
      <div className={`section${tab === "website" ? " active" : ""}`}>
        {/* HERO */}
        <div className="hero">
          <div className="hero-badge">✦ Authorised Agent · Moody International Assurance ✦</div>
          <h1>
            Elevate Your Business with <span>ISO Certification</span>
          </h1>
          <p className="hero-sub">
            Globally recognised management system certifications — from ISO 9001 to AI Management Systems. Expert guidance, seamless process, guaranteed results.
          </p>
          <div className="hero-actions">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              💬 Get Free Consultation
            </a>
            <button className="btn-secondary" onClick={() => setTab("poster")}>
              View Services
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-val">30+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div>
              <div className="stat-val">180+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div>
              <div className="stat-val">1M+</div>
              <div className="stat-label">Certified Orgs</div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="services-wrap">
          <h2 className="section-title">
            Our <span>Certification</span> Services
          </h2>
          <p className="section-sub" style={{ color: "#1B4F8A", fontWeight: 800, fontSize: "1.1rem" }}>
            Choose the standard that powers your business growth
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <a
                key={s.code}
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="service-card"
                style={{ "--card-color": s.color }}
              >
                <div className="card-icon">{s.icon}</div>
                <div className="card-code">{s.code}</div>
                <div className="card-name">{s.name}</div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: "center", marginTop: 64, padding: "52px 24px",
            background: "linear-gradient(135deg, #0D1B32 0%, #162540 100%)", border: "2px solid rgba(232,160,32,0.45)",
            borderRadius: 14
          }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", marginBottom: 12, color: "var(--gold-bright)", fontWeight: 900 }}>
              Ready to get <span style={{ color: "#FFFFFF" }}>certified?</span>
            </p>
            <p style={{ color: "#C8D8F0", fontSize: "1rem", fontWeight: 600, marginBottom: 30 }}>
              Contact {NAME} for a free assessment and quote — fast, reliable, globally recognised.
            </p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              💬 WhatsApp {NAME}
            </a>
          </div>
        </div>
      </div>

      {/* ========== POSTER TAB ========== */}
      <div className={`section${tab === "poster" ? " active" : ""}`} style={{ paddingTop: "80px" }}>
        <div className="poster-wrap">
          <h2 className="section-title">Social Media <span>Poster</span></h2>
          <p className="section-sub">Ready to share on Facebook, Instagram &amp; WhatsApp</p>

          <div className="poster">
            <div className="poster-corner tl" />
            <div className="poster-corner br" />

            <div className="poster-inner">
              <div className="poster-logo-line">
                <span className="poster-certified-badge">✦ Certified Agent</span>
                <span className="poster-org">Moody International Assurance Ltd</span>
              </div>

              <div className="poster-headline">
                Get Your Business<br />
                <em>ISO Certified</em><br />
                Today.
              </div>
              <div className="poster-tagline">🌐 Globally Recognised &nbsp;·&nbsp; 🏅 Professionally Audited &nbsp;·&nbsp; 30+ Standards</div>

              <div className="poster-services-mini">
                {POSTER_SERVICES.map((s) => (
                  <div className="psm-item" key={s.text}>
                    <span className="psm-icon">{s.icon}</span>
                    <span className="psm-text">{s.text}</span>
                  </div>
                ))}
              </div>

              <hr className="poster-divider" />

              <div className="poster-contact-area">
                <div>
                  <div className="poster-agent-label">Your Certified Agent</div>
                  <div className="poster-agent-name">{NAME}</div>
                  <div className="poster-agent-phone">📞 {PHONE}</div>
                </div>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="poster-wa-btn">
                  <span>💬</span> WhatsApp Now
                </a>
              </div>
            </div>

            <div className="poster-moody-footer">
              Moody International Assurance Ltd &nbsp;·&nbsp; Globally Accredited Certification Body
            </div>
          </div>

          <div style={{ textAlign: "center", paddingTop: 8 }}>
            <p style={{ color: "#C8D8F0", fontSize: "0.85rem", fontWeight: 600, marginBottom: 18 }}>
              📸 Screenshot the poster above to post on social media
            </p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              Share via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ========== CONTACT TAB ========== */}
      <div className={`section${tab === "contact" ? " active" : ""}`} style={{ paddingTop: "80px" }}>
        <div className="contact-wrap">
          <h2 className="section-title">Contact <span>Links</span></h2>
          <p className="section-sub">Copy &amp; paste these links to your social media bio or posts</p>

          <div className="contact-card">
            <div className="contact-avatar">AN</div>
            <div className="contact-name">{NAME}</div>
            <div className="contact-title">ISO Certification Agent · Moody International</div>

            <div className="contact-methods">
              <a href={`tel:${PHONE.replace(/[\s-]/g, "")}`} className="contact-method">
                <span className="cm-icon">📞</span>
                <div className="cm-info">
                  <div className="cm-label">Phone / Call</div>
                  <div className="cm-value">{PHONE}</div>
                </div>
              </a>

              <a href={WA_LINK} target="_blank" rel="noreferrer" className="contact-method cm-wa">
                <span className="cm-icon">💬</span>
                <div className="cm-info">
                  <div className="cm-label">WhatsApp — Tap to Chat</div>
                  <div className="cm-value">wa.me/60148855311</div>
                </div>
              </a>
            </div>

            {/* Link copy box */}
            <div style={{
              marginTop: 32, background: "rgba(0,0,0,0.35)", borderRadius: 10,
              padding: "20px 22px", border: "1px solid rgba(232,160,32,0.2)"
            }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#C8D8F0", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>
                Your WhatsApp Link — Copy for Social Media Bio
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "0.92rem", color: "var(--gold-bright)", wordBreak: "break-all", fontWeight: 700 }}>
                {WA_LINK}
              </div>
              <button
                onClick={() => { navigator.clipboard.writeText(WA_LINK); alert("✅ Link copied to clipboard!"); }}
                style={{
                  marginTop: 14, background: "var(--gold)", color: "#000", border: "none",
                  borderRadius: 5, padding: "10px 22px", fontSize: "0.82rem", fontWeight: 800,
                  cursor: "pointer", letterSpacing: "0.07em", textTransform: "uppercase"
                }}
              >
                📋 Copy Link
              </button>
            </div>

            <div className="share-links">
              <div className="share-label">Share This Contact On</div>
              <div className="share-btns">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(WA_LINK)}`}
                  target="_blank" rel="noreferrer" className="share-btn fb"
                >
                  📘 Facebook
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="share-btn wa2">
                  💬 WhatsApp
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(WA_LINK)}&text=${encodeURIComponent("Contact Afiq Nabil for ISO Certification - Moody International Assurance")}`}
                  target="_blank" rel="noreferrer" className="share-btn tg"
                >
                  ✈️ Telegram
                </a>
              </div>
              <p style={{ marginTop: 18, fontSize: "0.82rem", fontWeight: 500, color: "#C8D8F0" }}>
                📸 <strong style={{ color: "#FFFFFF" }}>Instagram:</strong> Copy the WhatsApp link above → paste in your bio, then share the poster as a post or Story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
