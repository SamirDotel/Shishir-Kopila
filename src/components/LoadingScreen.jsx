import React, { useEffect, useState } from 'react';

/* ─── Tiny floating hearts that drift upward ─── */
const FLOATERS = [
    { left: '15%', delay: '0s', size: 14, dur: '4s' },
    { left: '30%', delay: '0.8s', size: 10, dur: '5s' },
    { left: '50%', delay: '1.5s', size: 16, dur: '3.5s' },
    { left: '65%', delay: '0.4s', size: 10, dur: '4.5s' },
    { left: '80%', delay: '1.2s', size: 12, dur: '4s' },
    { left: '22%', delay: '2.0s', size: 10, dur: '5s' },
    { left: '72%', delay: '2.5s', size: 14, dur: '4s' },
];

const LoadingScreen = ({ onDone }) => {
    const [phase, setPhase] = useState(0); // 0=intro, 1=full, 2=fadeout
    const [gone, setGone] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 200);
        const t2 = setTimeout(() => setPhase(2), 4200);
        const t3 = setTimeout(() => { setGone(true); onDone(); }, 5000);
        return () => [t1, t2, t3].forEach(clearTimeout);
    }, [onDone]);

    if (gone) return null;

    const fade = phase === 2;

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'radial-gradient(ellipse at center, #7a1a2e 0%, #3d0b1a 60%, #1e070f 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Cormorant Garamond', serif",
            opacity: fade ? 0 : 1,
            transition: 'opacity 0.8s ease',
            overflow: 'hidden',
        }}>

            {/* ── Floating background particles ── */}
            {FLOATERS.map((f, i) => (
                <span key={i} style={{
                    position: 'absolute', bottom: '-20px', left: f.left,
                    fontSize: f.size, opacity: 0.35,
                    animation: `floatUp ${f.dur} ${f.delay} infinite ease-in`,
                    pointerEvents: 'none',
                }}>❤️</span>
            ))}

            {/* ── Outer decorative rings ── */}
            <div style={{
                position: 'relative', width: 190, height: 190,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 30,
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? 'scale(1)' : 'scale(0.4)',
                transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
                {/* Outer ring */}
                <div style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    animation: 'spinSlow 12s linear infinite',
                }} />
                {/* Inner ring */}
                <div style={{
                    position: 'absolute', inset: 14, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    animation: 'spinSlow 8s linear infinite reverse',
                }} />

                {/* ── Two interlocked hearts ── */}
                <div style={{ position: 'relative', width: 110, height: 90 }}>
                    {/* Left heart (red) */}
                    <span style={{
                        position: 'absolute', left: 0, top: 0,
                        fontSize: 72, lineHeight: 1,
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
                        animation: 'heartLeft 1s 0.2s ease-out forwards, heartBeat 1.6s 1.2s ease-in-out infinite',
                        opacity: 0,
                        transformOrigin: 'center',
                    }}>❤️</span>
                    {/* Right heart (lighter / pink-ish) */}
                    <span style={{
                        position: 'absolute', right: 0, top: 8,
                        fontSize: 60, lineHeight: 1,
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4)) sepia(0.3) saturate(0.6) brightness(1.6) hue-rotate(310deg)',
                        animation: 'heartRight 1s 0.4s ease-out forwards, heartBeat 1.6s 1.4s ease-in-out infinite',
                        opacity: 0,
                        transformOrigin: 'center',
                    }}>❤️</span>
                </div>
            </div>

            {/* ── Names ── */}
            <div style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
                color: 'white',
                letterSpacing: 2,
                marginBottom: 10,
                textShadow: '0 2px 20px rgba(0,0,0,0.6)',
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s 0.6s ease, transform 0.9s 0.6s ease',
            }}>
                Shishir &amp; Kopila
            </div>

            {/* ── Small hearts row ── */}
            <div style={{
                display: 'flex', gap: 10, marginBottom: 8,
                opacity: phase >= 1 ? 1 : 0,
                transition: 'opacity 1s 1s ease',
            }}>
                {['💗', '❤️', '💗'].map((e, i) => (
                    <span key={i} style={{
                        fontSize: 14,
                        animation: `heartBeat 1.8s ${0.2 * i}s ease-in-out infinite`,
                    }}>{e}</span>
                ))}
            </div>

            {/* ── Nepali date ── */}
            <div style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                letterSpacing: 3,
                marginBottom: 28,
                opacity: phase >= 1 ? 1 : 0,
                transition: 'opacity 1s 1.1s ease',
            }}>
                27.11.2082
            </div>

            {/* ── Save the Date ── */}
            <div style={{
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.9s 1.3s ease, transform 0.9s 1.3s ease',
                textAlign: 'center',
            }}>
                <p style={{
                    color: '#e07a5f',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                    letterSpacing: 6,
                    textTransform: 'uppercase',
                    margin: '0 0 6px',
                    fontWeight: 600,
                }}>Save The Date</p>
                <p style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                    letterSpacing: 4,
                    textTransform: 'uppercase',
                    margin: 0,
                    fontFamily: "'Montserrat', sans-serif",
                }}>11th March 2026</p>
            </div>

            {/* ── Keyframes (injected as style tag) ── */}
            <style>{`
                @keyframes heartLeft {
                    from { opacity: 0; transform: translateX(-30px) scale(0.5); }
                    to   { opacity: 1; transform: translateX(0) scale(1); }
                }
                @keyframes heartRight {
                    from { opacity: 0; transform: translateX(30px) scale(0.5); }
                    to   { opacity: 1; transform: translateX(0) scale(1); }
                }
                @keyframes heartBeat {
                    0%,100% { transform: scale(1); }
                    40%     { transform: scale(1.25); }
                }
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes floatUp {
                    0%   { transform: translateY(0) scale(1);   opacity: 0.35; }
                    80%  { opacity: 0.35; }
                    100% { transform: translateY(-100vh) scale(0.8); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
