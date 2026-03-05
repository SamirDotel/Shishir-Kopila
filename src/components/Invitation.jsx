import React, { useState, useEffect, useRef, useMemo } from 'react';
import heroBg from '../images/hero.png';

const WEDDING_DATE = new Date('2026-03-11T10:00:00');
const pad = (n) => String(n).padStart(2, '0');

const LOCAL_EMOJIS = [
    '❤️', '❤️', '❤️', '❤️',
    '💗', '💗', '💗',
    '💖', '💕',
    '🌸', '⭐',
];

// Emoji layer rendered behind the card inside the Invitation section
const InvitationEmojis = () => {
    const pieces = useMemo(() => Array.from({ length: 35 }).map((_, i) => {
        const emoji = LOCAL_EMOJIS[Math.floor(Math.random() * LOCAL_EMOJIS.length)];
        const duration = 16 + Math.random() * 18;
        return {
            id: i,
            emoji,
            left: `${Math.random() * 100}%`,
            fontSize: `${8 + Math.random() * 8}px`,          // 8–16px — smaller than hero
            opacity: 0.35 + Math.random() * 0.3,              // subtle
            animationDuration: `${duration}s`,
            animationDelay: `${-(Math.random() * duration)}s`, // negative = start mid-fall
        };
    }), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {pieces.map((p) => (
                <span
                    key={p.id}
                    className="floating-element"
                    style={{
                        left: p.left,
                        fontSize: p.fontSize,
                        opacity: p.opacity,
                        animationDuration: p.animationDuration,
                        animationDelay: p.animationDelay,
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


const Invitation = () => {
    const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });
    const cardRef = useRef(null);

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const diff = WEDDING_DATE - now;
            if (diff <= 0) { setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' }); return; }
            setTimeLeft({
                days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
                hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
                mins: pad(Math.floor((diff / (1000 * 60)) % 60)),
                secs: pad(Math.floor((diff / 1000) % 60)),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    // Fade-in on scroll
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add('animate-card-in'); },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="relative z-[2] min-h-screen flex items-center justify-center py-20 px-4"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Local emoji layer — behind the card */}
            <InvitationEmojis />

            {/* Same overlay as hero - very subtle */}
            <div className="absolute inset-0 bg-black/[.12]" />

            {/* Card */}
            <div
                ref={cardRef}
                className="relative z-10 w-full max-w-[420px] opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ '--tw-translate-y': '2rem' }}
            >
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(175deg, #fdf5ef 0%, #f7e4d8 60%, #f0d5c5 100%)',
                        border: '5px solid #3d0b1a',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                    }}
                >
                    {/* Corner ornaments */}
                    <div className="relative px-8 pt-8 pb-7 text-center">
                        <span className="absolute top-3 left-3 text-[#3d0b1a]/50 text-lg leading-none">🌿</span>
                        <span className="absolute top-3 right-3 text-[#3d0b1a]/50 text-lg leading-none" style={{ transform: 'scaleX(-1)' }}>🌿</span>

                        {/* Top diamonds + heart */}
                        <div className="flex justify-center items-center gap-3 mb-5">
                            <span style={{ color: '#c9a84c', fontSize: '0.8rem' }}>✦</span>
                            <span className="text-[1.4rem]">❤️</span>
                            <span style={{ color: '#c9a84c', fontSize: '0.8rem' }}>✦</span>
                        </div>

                        {/* "Together with our families" */}
                        <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#a03054', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            Together With Our Families
                        </p>

                        {/* You're Invited */}
                        <h2 style={{ fontFamily: 'Great Vibes, cursive', color: '#3d0b1a', fontSize: '3.6rem', lineHeight: 1, marginBottom: '0.4rem' }}>
                            You're Invited
                        </h2>

                        {/* Subtitle */}
                        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#666', fontSize: '1rem', marginBottom: '0.8rem' }}>
                            to celebrate the wedding of
                        </p>

                        {/* Names */}
                        <h3 style={{ fontFamily: 'Great Vibes, cursive', color: '#3d0b1a', fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                            Shishir <span style={{ color: '#c9a84c' }}>&amp;</span> Kopila
                        </h3>

                        {/* Hearts emoji */}
                        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>💕</div>

                        {/* Event info box */}
                        <div style={{ background: 'rgba(61,11,26,0.07)', borderRadius: '12px', padding: '1.2rem 1rem', marginBottom: '1.4rem' }}>
                            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#999', fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                                Wednesday
                            </p>
                            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#a03054', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                                March 11, 2026
                            </p>
                            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#777', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                10:00 in the morning
                            </p>
                            <hr style={{ border: 'none', borderTop: '1px solid #d4a0b0', margin: '0 2rem 1rem' }} />
                            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#a03054', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                                Golden Palace
                            </p>
                            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#777', fontSize: '0.9rem' }}>
                                RadheRadhe, Bhaktapur
                            </p>
                        </div>

                        {/* Divider */}
                        <hr style={{ border: 'none', borderTop: '1px solid #c9a0b0', margin: '0 0 1.2rem' }} />

                        {/* Countdown label */}
                        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#999', fontSize: '0.85rem', marginBottom: '1rem' }}>
                            ~ Counting the days ~
                        </p>

                        {/* Countdown boxes */}
                        <div className="flex justify-center gap-3 mb-7 flex-wrap">
                            {[
                                { label: 'DAYS', value: timeLeft.days },
                                { label: 'HOURS', value: timeLeft.hours },
                                { label: 'MINS', value: timeLeft.mins },
                                { label: 'SECS', value: timeLeft.secs },
                            ].map(({ label, value }) => (
                                <div key={label}
                                    className="flex flex-col items-center justify-center rounded-xl transition-transform duration-300 hover:scale-105"
                                    style={{ backgroundColor: '#7a1e3a', width: 68, height: 80, boxShadow: '0 4px 15px rgba(80,0,30,0.35)' }}>
                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>
                                        {value}
                                    </span>
                                    <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.65)', fontSize: '0.5rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Footer tagline */}
                        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#c9a84c', fontSize: '0.85rem' }}>
                            ✤ Our Promise Forever ✤
                        </p>

                        {/* Bottom corner ornaments */}
                        <span className="absolute bottom-3 left-3 text-[#3d0b1a]/40 text-lg leading-none">🌿</span>
                        <span className="absolute bottom-3 right-3 text-[#3d0b1a]/40 text-lg leading-none" style={{ transform: 'scaleX(-1)' }}>🌿</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Invitation;
