import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import './LandingPage.css';

const GITHUB_URL = 'https://github.com/dogacero';
const LEBENSLAUF_GITHUB_URL = 'https://github.com/JanesMarekFabian/Softwar3.pro';

const TABS = [
  { id: 'start', label: 'Start' },
  { id: 'kontakt', label: 'Kontakt' },
  { id: 'projekte', label: 'Projekte' },
  { id: 'links', label: 'Links' },
];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('start');
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [easterEggFound, setEasterEggFound] = useState(false);

  const handleEasterEggClick = () => {
    const next = easterEggClicks + 1;
    setEasterEggClicks(next);
    if (next >= 5 && !easterEggFound) setEasterEggFound(true);
  };

  return (
    <div className="landing">
      <AnimatedBackground />
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
          <div className="tab-panel">
            <header className="landing-hero">
              <h1>Doga Ceren Bozkurt</h1>
              <p className="tagline">
                Studentin Molekulare und Technische Medizin. Interessen: KI, Machine Learning, React und Web-Entwicklung.
              </p>
              <p className="skills-line">React · JavaScript · Cursor · R</p>
            </header>

            <section className="landing-card landing-built">
              <h2>Meine Skills</h2>
              <p>
                Ich entwickle mit KI-Tools wie Cursor und Claude produktiv – von Web-Apps bis zu kleinen Tools.
                Mit React, JavaScript und Vite baue ich moderne Oberflächen; mit R arbeite ich an Datenanalyse.
                Ich lerne schnell, baue gerne in der Freizeit an Projekten und halte Code übersichtlich.
              </p>
            </section>

            <section className="landing-card easter-egg-section">
              <p className="easter-egg-hint">?</p>
              <button
                type="button"
                className="easter-egg-trigger"
                onClick={handleEasterEggClick}
                aria-label="Versteckter Bereich"
              />
              {easterEggFound && (
                <p className="easter-egg-message">Du hast den Easter Egg gefunden.</p>
              )}
            </section>
          </div>
        )}

        {activeTab === 'kontakt' && (
          <div className="tab-panel">
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
          <div className="tab-panel">
            <section className="landing-card landing-projekte">
              <h2>Projekte</h2>
              <ul className="projekte-list">
                <li>
                  <strong>Portfolio-Webseite</strong> – Diese Seite: React, Vite, mit Cursor entwickelt. Einfache Tab-Navigation, klare Struktur.
                  <br />
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    Portfolio (GitHub)
                  </a>
                </li>
                <li>
                  <strong>Lebenslauf als React-App</strong> – Eigenes Projekt, getrennt vom Portfolio. React-basierter Lebenslauf.
                  <br />
                  <a href={LEBENSLAUF_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    Lebenslauf (GitHub)
                  </a>
                </li>
              </ul>
              <p className="projekte-note">
                Mehr Repositories und Aktivität findest du auf meinem GitHub-Profil.
              </p>
            </section>
          </div>
        )}

        {activeTab === 'links' && (
          <div className="tab-panel">
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
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
