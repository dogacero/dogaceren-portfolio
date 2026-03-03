import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <header className="landing-hero">
        <h1>Doga Ceren Bozkurt</h1>
        <p className="tagline">
          Studentin Molekulare und Technische Medizin · Interessen: Künstliche Intelligenz,
          Machine Learning, Bioinformatik & Web-Entwicklung
        </p>
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
          <li>
            <strong>Adresse:</strong> Pestalozzistraße 19, Villingen-Schwenningen, Deutschland
          </li>
        </ul>
      </section>

      <section className="landing-links">
        <h2>Projekte & Links</h2>
        <div className="link-buttons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
          <a
            href="#"
            className="btn btn-secondary"
            title="Link zur deployten Lebenslauf-App (URL später eintragen)"
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
  );
};

export default LandingPage;
