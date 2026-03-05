import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Stickers from './Stickers';
import './LandingPage.css';

const GITHUB_URL = 'https://github.com/dogacero';
const LEBENSLAUF_GITHUB_URL = 'https://github.com/JanesMarekFabian/Softwar3.pro';
const LINKEDIN_URL = 'https://www.linkedin.com/in/doga-ceren-bozkurt';

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
                Studentin Molekulare und Technische Medizin, mit Interesse an KI, Web-Entwicklung und kleinen Tools.
              </p>
              <p className="skills-line">Cursor · React · JavaScript · Vite · R · ... more to come</p>
            </header>
            <section className="landing-card landing-about">
              <h2>Über mich</h2>
              <p>
                Als Studentin der Molekularen und Technischen Medizin verbinde ich Medizin, Technologie und KI – am liebsten dort, wo Bioinformatik und Web‑Entwicklung sich treffen. Ich baue gerne kleine Tools, probiere neue Technologien aus und lasse mich von Themen wie Stammzellbiologie und Datenanalyse inspirieren. In meiner Freizeit entwickle ich Web‑Apps, experimentiere mit KI‑Workflows und freue mich über jedes Projekt, das mich etwas Neues lernen lässt.
              </p>
              <p className="about-humor">
                Ich mag Projekte, die Spaß machen – und manchmal auch Projekte, die einfach nur funktionieren müssen. 😊
              </p>
            </section>

            <section className="landing-card landing-skills">
              <h2>Skills</h2>
              <div className="skills-grid">
                <div className="skills-category">
                  <h3>Tech-Stack</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Vite</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Azure</span>
                    <span className="skill-tag">R</span>
                  </div>
                </div>
                <div className="skills-category">
                  <h3>KI-Tools</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">Cursor</span>
                    <span className="skill-tag">Claude</span>
                    <span className="skill-tag">Copilot</span>
                  </div>
                  <p className="skills-note">für Code-Review, Debugging, Iteration</p>
                </div>
              </div>
            </section>

            <section className="landing-card landing-built">
              <h2>Was habe ich bisher gemacht</h2>
              <ul className="achievements-list">
                <li>Portfolio‑Webseite und Lebenslauf‑App mit React umgesetzt.</li>
                <li>Verschiedene Web‑Apps und kleine Tools mit React, Vite und JavaScript entwickelt.</li>
                <li>KI‑Tools wie Cursor, Claude und Copilot regelmäßig für Entwicklung und Lernen genutzt.</li>
                <li>Aktuell arbeite ich an einer E‑Commerce‑Web‑App (noch in Entwicklung).</li>
              </ul>
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
              <p className="contact-intro">Ich freue mich auf Ihre Nachricht!</p>
              <div className="contact-email">
                <strong>E-Mail:</strong>{' '}
                <a href="mailto:dcerenbozkurt@gmail.com">dcerenbozkurt@gmail.com</a>
              </div>
              <div className="contact-buttons">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'projekte' && (
          <div className="tab-panel" key="projekte">
            <section className="landing-projekte">
              <h2>Projekte</h2>
              <div className="projekte-grid">
                <div className="projekt-card">
                  <h3>Portfolio-Webseite</h3>
                  <p>Diese Seite: komplett mit Cursor entwickelt – Struktur, React-Komponenten, CSS.</p>
                  <div className="projekt-stack-tags">
                    <span className="stack-tag">React</span>
                    <span className="stack-tag">Vite</span>
                    <span className="stack-tag">Cursor</span>
                  </div>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    GitHub
                  </a>
                </div>
                <div className="projekt-card">
                  <h3>Lebenslauf als React-App</h3>
                  <p>Eigenes Projekt, getrennt vom Portfolio. React-basierter Lebenslauf.</p>
                  <div className="projekt-stack-tags">
                    <span className="stack-tag">React</span>
                  </div>
                  <a href={LEBENSLAUF_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                    GitHub
                  </a>
                </div>
                <div className="projekt-card">
                  <h3>Datenanalyse mit R</h3>
                  <p>Arbeiten mit R für statistische Auswertungen und Datenvisualisierung im Studium.</p>
                  <div className="projekt-stack-tags">
                    <span className="stack-tag">R</span>
                  </div>
                </div>
                <div className="projekt-card">
                  <h3>E-Commerce Web App</h3>
                  <p>Aktuell in Entwicklung – eine vollständige E-Commerce-Lösung mit React und modernen Web-Technologien.</p>
                  <div className="projekt-stack-tags">
                    <span className="stack-tag">React</span>
                    <span className="stack-tag">Vite</span>
                    <span className="stack-tag">In Entwicklung</span>
                  </div>
                </div>
              </div>
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
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  title="LinkedIn-Profil"
                >
                  LinkedIn
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
