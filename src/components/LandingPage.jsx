import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import './LandingPage.css';

const GITHUB_URL = 'https://github.com/dogacero';
// Live-URL der gehosteten CV-App – nach Azure-Deploy z. B. auf https://cv.deine-domain.de setzen
const LEBENSLAUF_LIVE_URL = 'https://github.com/JanesMarekFabian/Softwar3.pro/tree/doga';
const LEBENSLAUF_GITHUB_URL = 'https://github.com/JanesMarekFabian/Softwar3.pro';

const LandingPage = () => {
  return (
    <div className="landing">
      <AnimatedBackground />
      <div className="landing-content">
      <header className="landing-hero">
        <h1>Doga Ceren Bozkurt</h1>
        <p className="tagline">
          Studentin Molekulare und Technische Medizin. Interessen: KI, Machine Learning, React und Web-Entwicklung.
        </p>
        <p className="skills-line">React · JavaScript · Cursor · R</p>
      </header>

      <section className="landing-built">
        <h2>Was ich zuletzt gebaut habe</h2>
        <p>
          Diese Portfolio-Webseite habe ich mit React und Vite umgesetzt und dabei mit Cursor als KI-Entwicklungswerkzeug gearbeitet. Außerdem habe ich meinen Lebenslauf als eigene React-App getrennt vom Portfolio aufgesetzt – beide Projekte hoste ich und der Code liegt auf GitHub.
        </p>
      </section>

      <section className="landing-contact">
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

      <section className="landing-links">
        <h2>Projekte & Links</h2>
        <div className="link-buttons">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
          <a
            href={LEBENSLAUF_LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            title="Lebenslauf als React-App ansehen"
          >
            Lebenslauf ansehen
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
          Den Lebenslauf kannst du als Live-App ansehen oder den Quellcode auf GitHub einsehen.
        </p>
      </section>

      <footer className="landing-footer">
        <p>Doga Ceren Bozkurt · Portfolio</p>
      </footer>
      </div>
    </div>
  );
};

export default LandingPage;
