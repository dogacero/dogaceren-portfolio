import React, { useMemo, useState, useEffect } from 'react';
import './AnimatedBackground.css';

const STAR_COUNT = 70;
const SEED = 12345;
const MOUSE_GLOW_RADIUS = 120;
const SHOOTING_STAR_INTERVAL = 20000; // 20 Sekunden

function seededRandom(seed) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// Sternbild-Koordinaten (in Prozent) - größer und besser sichtbar
const CONSTELLATIONS = {
  orion: [
    { left: 10, top: 25 },
    { left: 12, top: 30 },
    { left: 14, top: 35 },
    { left: 16, top: 30 },
    { left: 18, top: 25 },
    { left: 14, top: 40 },
  ],
  bigDipper: [
    { left: 75, top: 20 },
    { left: 78, top: 23 },
    { left: 81, top: 25 },
    { left: 84, top: 23 },
    { left: 87, top: 27 },
    { left: 90, top: 30 },
    { left: 93, top: 28 },
  ],
};

const AnimatedBackground = () => {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [shootingStars, setShootingStars] = useState([]);

  const stars = useMemo(() => {
    const rng = seededRandom(SEED);
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: rng() * 100,
      top: rng() * 100,
      size: 1.5 + rng() * 2,
      delay: rng() * 3,
      duration: 2 + rng() * 2,
    }));
  }, []);

  // Shooting Stars generieren - alle 20 Sekunden ein paar
  useEffect(() => {
    const createShootingStarGroup = () => {
      const count = 2 + Math.floor(Math.random() * 2); // 2-3 Stars
      return Array.from({ length: count }, (_, i) => {
        const startX = -10; // Start links außerhalb
        const startY = 10 + Math.random() * 40; // Zwischen 10% und 50% von oben
        const delay = i * 0.5; // Leicht versetzt
        
        return {
          id: Date.now() + Math.random() + i,
          startX,
          startY,
          delay,
        };
      });
    };

    // Initiale Gruppe
    setShootingStars(createShootingStarGroup());

    // Alle 20 Sekunden neue Gruppe
    const interval = setInterval(() => {
      setShootingStars(createShootingStarGroup());
    }, SHOOTING_STAR_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="gradient-layer gradient-layer-1" />
      <div className="gradient-layer gradient-layer-2" />
      <div className="gradient-layer gradient-layer-3" />
      
      {/* Mond */}
      <div className="moon-container">
        <div className="moon"></div>
      </div>

      {/* Sternbilder */}
      <div className="constellation constellation-orion">
        {CONSTELLATIONS.orion.map((star, idx) => (
          <span
            key={`orion-${idx}`}
            className="constellation-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
          />
        ))}
        {CONSTELLATIONS.orion.slice(0, -1).map((star, idx) => {
          if (idx < CONSTELLATIONS.orion.length - 1) {
            const nextStar = CONSTELLATIONS.orion[idx + 1];
            const dx = nextStar.left - star.left;
            const dy = nextStar.top - star.top;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            return (
              <div
                key={`orion-line-${idx}`}
                className="constellation-line"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${length}%`,
                  transform: `rotate(${angle}deg)`,
                }}
              />
            );
          }
          return null;
        })}
      </div>

      <div className="constellation constellation-bigdipper">
        {CONSTELLATIONS.bigDipper.map((star, idx) => (
          <span
            key={`dipper-${idx}`}
            className="constellation-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
          />
        ))}
        {CONSTELLATIONS.bigDipper.slice(0, -1).map((star, idx) => {
          if (idx < CONSTELLATIONS.bigDipper.length - 1) {
            const nextStar = CONSTELLATIONS.bigDipper[idx + 1];
            const dx = nextStar.left - star.left;
            const dy = nextStar.top - star.top;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            return (
              <div
                key={`dipper-line-${idx}`}
                className="constellation-line"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${length}%`,
                  transform: `rotate(${angle}deg)`,
                }}
              />
            );
          }
          return null;
        })}
      </div>

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Normale Sterne */}
      <div className="stars-layer">
        {stars.map((star) => {
          const starX = (star.left / 100) * window.innerWidth;
          const starY = (star.top / 100) * window.innerHeight;
          const dist = Math.hypot(mouse.x - starX, mouse.y - starY);
          const near = dist < MOUSE_GLOW_RADIUS;
          return (
            <span
              key={star.id}
              className={`star ${near ? 'star--glow' : ''}`}
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedBackground;
