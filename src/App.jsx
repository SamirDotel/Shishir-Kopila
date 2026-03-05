import React, { useState } from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Couple from './components/Couple';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import useScrollReveal from './hooks/useScrollReveal';

// Weighted emojis: hearts dominate (~75%)
const emojis = [
  '❤️', '❤️', '❤️', '❤️',   // red hearts — most common
  '💗', '💗', '💗',           // pink hearts
  '💖', '💕',                  // sparkling & two hearts
  '🌸',                        // cherry blossom
  '⭐',                        // star
];

const FloatingBackground = () => {
  const pieces = Array.from({ length: 60 }).map((_, i) => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const duration = 18 + Math.random() * 20; // 18–38s per cycle
    const size = 10 + Math.random() * 12;     // 10–22px font size
    const delay = -(Math.random() * duration); // negative = starts mid-fall

    return {
      id: i,
      emoji,
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      fontSize: `${size}px`,
      opacity: 0.55 + Math.random() * 0.35,   // 0.55–0.9
    };
  });

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="floating-element"
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            fontSize: p.fontSize,
            opacity: p.opacity,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal();
  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className="relative overflow-hidden">
        <FloatingBackground />
        <Hero />
        <Invitation />
        <Couple />
        <Gallery />
        <Events />
        <Footer />
      </div>
    </>
  );
}

export default App;
