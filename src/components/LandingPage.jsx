import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Stickers from './Stickers';
import './LandingPage.css';

const GITHUB_URL = 'https://github.com/dogacero';
const LEBENSLAUF_GITHUB_URL = 'https://github.com/JanesMarekFabian/Softwar3.pro';

const TABS = [
  { id: 'start', label: 'Start' },
  { id: 'projekte', label: 'Projekte' },
  { id: 'links', label: 'Links' },
  { id: 'kontakt', label: 'Kontakt' },
];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('start');
  const [easterEggFound, setEasterEggFound] = useState(false);

  const handleEasterEggClick = () => {
    setEasterEggFound(true);
  };

  return (
    <div className="landing">
      <AnimatedBackground />
      {activeTab === 'start' && <Stickers />}
      <div className="landing-content">
        <nav className="landing-tabs" aria-label="Hauptbereiche">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {activeTab === 'start' && (
          <div className="tab-panel" key="start">
            <header className="landing-hero">
              <h1>Doga Ceren Bozkurt</h1>
              <p className="tagline">
                Studentin Molekulare und Technische Medizin, mit Fokus auf KI, Web-Entwicklung und kleine Tools.
              </p>
              <p className="skills-line">Cursor · React · JavaScript · Vite · R</p>
            </header>
            <div className="cursor-popup">
              <p>✨ Entwickle mit Cursor – von Idee zu Code! 🚀</p>
            </div>

            <section className="landing-card landing-built">
              <h2>Was habe ich bisher gemacht</h2>
              <p>
                Portfolio-Webseite und Lebenslauf-App mit React und Cursor entwickelt. Web-Apps und kleine Tools mit React, Vite und JavaScript umgesetzt. Datenanalyse mit R. KI-Tools wie Cursor, Claude und Copilot im Alltag genutzt – prompten, reviewen, iterieren.
              </p>
              <div className="tech-pills">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Vite</span>
                <span className="tech-pill">Cursor</span>
                <span className="tech-pill">Git</span>
              </div>
            </section>

            <section className="landing-card easter-egg-section">
              {!easterEggFound ? (
                <button
                  type="button"
                  className="easter-egg-button"
                  onClick={handleEasterEggClick}
                  aria-label="Easter Egg entdecken"
                >
                  ?
                </button>
              ) : (
                <div className="easter-egg-reveal">
                  <p className="easter-egg-message">🎉 You found it!</p>
                  <div className="easter-egg-terminal">
                    <div className="easter-egg-terminal-line">&gt; Thank you for clicking!</div>
                    <div className="easter-egg-terminal-line">This portfolio is developed with Cursor.</div>
                    <div className="easter-egg-terminal-line">Please enjoy exploring! 🚀</div>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {activeTab === 'kontakt' && (
          <div className="tab-panel" key="kontakt">
            <section className="landing-card landing-contact">
              <h2>Kontakt</h2>
              <ul className="contact-list">
                <li>
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:dcerenbozkurt@gmail.com">dcerenbozkurt@gmail.com</a>
                </li>
                <li>
                  <strong>Telefon:</strong>{' '}
                  <a href="tel:+4915788721875">+49 1578 8721875</a>
                </li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'projekte' && (
          <div className="tab-panel" key="projekte">
            <section className="landing-card landing-projekte">
              <h2>Projekte</h2>
              <ul className="projekte-list">
                <li>
                  <strong>Portfolio-Webseite</strong> – Diese Seite: komplett mit Cursor entwickelt – Struktur, React-Komponenten, CSS, Easter Egg.
                  <p className="projekt-stack">React, Vite, Cursor</p>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    Portfolio (GitHub)
                  </a>
                </li>
                <li>
                  <strong>Lebenslauf als React-App</strong> – Eigenes Projekt, getrennt vom Portfolio. React-basierter Lebenslauf.
                  <p className="projekt-stack">React</p>
                  <a href={LEBENSLAUF_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    Lebenslauf (GitHub)
                  </a>
                </li>
                <li>
                  <strong>Datenanalyse mit R</strong> – Arbeiten mit R für statistische Auswertungen und Datenvisualisierung im Studium.
                  <p className="projekt-stack">R</p>
                </li>
              </ul>
              <p className="projekte-note">
                Mehr Repositories und Aktivität findest du auf meinem GitHub-Profil.
              </p>
            </section>
          </div>
        )}

        {activeTab === 'links' && (
          <div className="tab-panel" key="links">
            <section className="landing-card landing-links">
              <h2>Links</h2>
              <div className="link-buttons">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  GitHub-Profil
                </a>
                <a
                  href={LEBENSLAUF_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  title="Lebenslauf-Projekt auf GitHub"
                >
                  Lebenslauf (GitHub)
                </a>
              </div>
              <p className="link-note">
                Code und weitere Projekte sind auf GitHub einsehbar.
              </p>
            </section>
          </div>
        )}

        <footer className="landing-footer">
          <p>Doga Ceren Bozkurt · Portfolio</p>
          <p className="footer-stack">Portfolio gebaut mit React, Vite und Cursor.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
