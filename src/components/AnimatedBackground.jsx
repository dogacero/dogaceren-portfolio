import React, { useMemo, useState, useEffect } from 'react';
import './AnimatedBackground.css';

const STAR_COUNT = 70;
const SEED = 12345;
const MOUSE_GLOW_RADIUS = 120;
const SHOOTING_STAR_COUNT = 3;

function seededRandom(seed) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// Sternbild-Koordinaten (in Prozent)
const CONSTELLATIONS = {
  orion: [
    { left: 15, top: 20 },
    { left: 18, top: 25 },
    { left: 20, top: 30 },
    { left: 22, top: 25 },
    { left: 25, top: 20 },
    { left: 20, top: 35 },
  ],
  bigDipper: [
    { left: 70, top: 15 },
    { left: 72, top: 18 },
    { left: 75, top: 20 },
    { left: 78, top: 18 },
    { left: 80, top: 22 },
    { left: 82, top: 25 },
    { left: 85, top: 23 },
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

  // Shooting Stars generieren
  useEffect(() => {
    const createShootingStar = () => {
      const rng = Math.random();
      const startX = rng * 100;
      const startY = rng * 30;
      const delay = rng * 8;
      
      return {
        id: Date.now() + Math.random(),
        startX,
        startY,
        delay,
      };
    };

    const initialStars = Array.from({ length: SHOOTING_STAR_COUNT }, createShootingStar);
    setShootingStars(initialStars);

    const interval = setInterval(() => {
      setShootingStars((prev) => {
        return prev.map((star) => {
          if (star.delay <= 0) {
            return createShootingStar();
          }
          return { ...star, delay: star.delay - 0.1 };
        });
      });
    }, 100);

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
