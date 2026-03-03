import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import './LandingPage.css';

const GITHUB_URL = 'https://github.com/dogacero';
const LEBENSLAUF_URL = 'https://github.com/dogacero?tab=repositories';

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
            href={LEBENSLAUF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            title="Lebenslauf als React-Projekt auf GitHub"
          >
            Zum Lebenslauf
          </a>
        </div>
        <p className="link-note">
          Den Lebenslauf als React-Projekt findest du in meinem GitHub-Repo.
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
