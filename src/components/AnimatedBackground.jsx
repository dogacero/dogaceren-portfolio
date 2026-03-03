import React, { useMemo } from 'react';
import './AnimatedBackground.css';

const STAR_COUNT = 70;
const SEED = 12345;

function seededRandom(seed) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const AnimatedBackground = () => {
  const stars = useMemo(() => {
    const rng = seededRandom(SEED);
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: rng() * 100,
      top: rng() * 100,
      size: 1 + rng() * 2,
      delay: rng() * 3,
      duration: 2 + rng() * 2,
    }));
  }, []);

  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="gradient-layer gradient-layer-1" />
      <div className="gradient-layer gradient-layer-2" />
      <div className="gradient-layer gradient-layer-3" />
      <div className="stars-layer">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
