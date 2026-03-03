import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import './LandingPage.css';

const GITHUB_URL = 'https://github.com/dogacero';
const LEBENSLAUF_URL = 'https://github.com/dogacero/Doga';

const LandingPage = () => {
  return (
    <div className="landing">
      <AnimatedBackground />
      <div className="landing-content">
      <header className="landing-hero">
        <h1>Doga Ceren Bozkurt</h1>
        <p className="tagline">
          Ich begeistere mich für Künstliche Intelligenz, Machine Learning und moderne Web-Technologien.
          Als Studentin der Molekularen und Technischen Medizin verbinde ich Life Sciences mit
          React, Cursor und KI-Tools – und setze React bis in die letzte Komponente ein.
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
