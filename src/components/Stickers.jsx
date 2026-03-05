import React from 'react';
import './Stickers.css';

const Stickers = () => {
  return (
    <div className="stickers-container">
      {/* Coding-Humor links */}
      <div className="sticker sticker-coding sticker-1">Code & Kaffee ☕</div>
      <div className="sticker sticker-coding sticker-2">npm install Leben</div>
      <div className="sticker sticker-coding sticker-3">Debugging ...</div>
      {/* KI-Humor rechts */}
      <div className="sticker sticker-ai sticker-4">console.log('Hilfe!')</div>
      <div className="sticker sticker-ai sticker-5">while(coffee) code();</div>
      {/* Easter Eggs unten */}
      <div className="sticker sticker-easter sticker-6">git commit -m 'Es funktioniert!'</div>
    </div>
  );
};

export default Stickers;
