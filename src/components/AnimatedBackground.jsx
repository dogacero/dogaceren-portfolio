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

// Sternbild-Koordinaten (in Prozent) - besser sichtbar
const CONSTELLATIONS = {
  orion: [
    { left: 8, top: 30 },
    { left: 10, top: 35 },
    { left: 12, top: 40 },
    { left: 14, top: 35 },
    { left: 16, top: 30 },
    { left: 12, top: 45 },
  ],
  bigDipper: [
    { left: 72, top: 25 },
    { left: 75, top: 28 },
    { left: 78, top: 30 },
    { left: 81, top: 28 },
    { left: 84, top: 32 },
    { left: 87, top: 35 },
    { left: 90, top: 33 },
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

  // Shooting Stars generieren - 2 Pfeile, random auftauchen
  useEffect(() => {
    const createShootingStar = () => {
      const rng = Math.random();
      const startX = 20 + rng * 60; // Random zwischen 20% und 80%
      const startY = 15 + rng * 50; // Random zwischen 15% und 65%
      const angle = 45 + (rng - 0.5) * 20; // Leicht variierter Winkel
      const delay = rng * 3;
      
      return {
        id: Date.now() + Math.random(),
        startX,
        startY,
        angle,
        delay,
      };
    };

    const createPair = () => {
      const baseX = 20 + Math.random() * 60;
      const baseY = 15 + Math.random() * 50;
      const angle = 45 + (Math.random() - 0.5) * 20;
      
      return [
        {
          id: Date.now() + Math.random(),
          startX: baseX,
          startY: baseY,
          angle,
          delay: 0,
        },
        {
          id: Date.now() + Math.random() + 1,
          startX: baseX + (Math.random() - 0.5) * 5,
          startY: baseY + (Math.random() - 0.5) * 5,
          angle: angle + (Math.random() - 0.5) * 5,
          delay: 0.2,
        },
      ];
    };

    // Initiales Paar
    setShootingStars(createPair());

    // Random Interval zwischen 3-8 Sekunden
    const scheduleNext = () => {
      const delay = 3000 + Math.random() * 5000;
      setTimeout(() => {
        setShootingStars(createPair());
        scheduleNext();
      }, delay);
    };

    scheduleNext();
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

      {/* Shooting Stars - 2 Pfeile parallel */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star-arrow"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            '--angle': `${star.angle}deg`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div className="arrow-head"></div>
          <div className="arrow-tail"></div>
        </div>
      ))}

      {/* Kleine weiße Striche im Hintergrund */}
      <div className="background-lines">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`line-${i}`}
            className="background-line"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              transform: `rotate(${(i * 23) % 360}deg)`,
              opacity: 0.15 + (i % 3) * 0.05,
            }}
          />
        ))}
      </div>

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
