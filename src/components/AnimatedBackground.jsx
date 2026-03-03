import React, { useMemo, useState, useEffect } from 'react';
import './AnimatedBackground.css';

const STAR_COUNT = 70;
const SEED = 12345;
const MOUSE_GLOW_RADIUS = 120;

function seededRandom(seed) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const AnimatedBackground = () => {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

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
