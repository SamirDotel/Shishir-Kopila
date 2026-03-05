import React, { useEffect, useRef, useState, useMemo } from 'react';
import groomImg from '../images/Groom.jpg';
import brideImg from '../images/Bride.jpg';

const Couple = () => {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);   // 0 → 1 as section scrolls in
    const [burst, setBurst] = useState(false); // triggers emoji burst once

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const onScroll = () => {
            const rect = section.getBoundingClientRect();
            const winH = window.innerHeight;

            // progress 0 = section bottom just entered view, 1 = section top reached center
            const raw = 1 - rect.top / (winH * 0.85);
            const p = Math.max(0, Math.min(1, raw));
            setProgress(p);

            if (p > 0.5 && !burst) setBurst(true);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run on mount
        return () => window.removeEventListener('scroll', onScroll);
    }, [burst]);

    // Cards start 260px offscreen (left/right) and travel to 0
    const offset = Math.round((1 - progress) * 260);

    // Floating emoji pieces distributed across the section — computed once, never re-randomized
    const FLOAT_EMOJIS = ['💗', '❤️', '💕', '💖', '🌸', '✨', '⭐', '💫', '🌺', '🎀', '🌷', '💝'];
    const floatingPieces = useMemo(() =>
        Array.from({ length: 28 }).map((_, i) => {
            const duration = 5 + Math.random() * 7;
            return {
                id: i,
                emoji: FLOAT_EMOJIS[i % FLOAT_EMOJIS.length],
                left: `${Math.random() * 100}%`,
                fontSize: `${10 + Math.random() * 12}px`,
                opacity: 0.45 + Math.random() * 0.4,
                animationDuration: `${duration}s`,
                animationDelay: `${-(Math.random() * duration)}s`, // start mid-fall, no bunching
            };
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);

    return (
        <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden" id="couple"
            style={{ background: 'linear-gradient(160deg, #fff5f7 0%, #fce8ee 35%, #fdf3f0 70%, #fff9f5 100%)' }}>

            {/* Floating emojis across the section */}
            {floatingPieces.map((p) => (
                <span
                    key={p.id}
                    className="floating-element"
                    style={{
                        left: p.left,
                        fontSize: p.fontSize,
                        opacity: p.opacity,
                        animationDuration: p.animationDuration,
                        animationDelay: p.animationDelay,
                    }}
                >
                    {p.emoji}
                </span>
            ))}

            <div className="max-w-[1100px] mx-auto px-4">

                {/* Section heading */}
                <div className="text-center mb-16 reveal">
                    <span className="font-body text-secondary text-sm uppercase tracking-[4px] mb-2 block">Meet</span>
                    <h2 className="font-script text-5xl md:text-7xl text-primary leading-none">The Couple</h2>
                </div>

                {/* Cards + Heart row */}
                <div className="relative flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4">

                    {/* ——— GROOM CARD (slides from the left) ——— */}
                    <div
                        className="flex-1 w-full max-w-[370px] bg-white rounded-2xl p-7 text-center shadow-xl z-[2] transition-shadow duration-300 hover:shadow-2xl"
                        style={{
                            transform: `translateX(-${offset}px)`,
                            opacity: Math.max(0, progress * 1.8),
                            transition: 'box-shadow 0.3s',
                        }}
                    >
                        {/* Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl">🤵</div>

                        <div className="w-[160px] h-[160px] mx-auto mb-5 rounded-full overflow-hidden border-[5px] border-secondary shadow-md">
                            <img
                                src={groomImg}
                                alt="Groom"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>

                        <p className="text-secondary uppercase text-[0.7rem] tracking-[3px] mb-1 font-body">The Groom</p>
                        <h3 className="font-heading text-[1.9rem] mb-3 text-primary">Shishir Dotel</h3>
                        <p className="text-[#666] text-[0.9rem] leading-[1.75] mb-4">
                            A dreamer with an adventurous spirit. Known for my warm smile and kind heart. Ready for life's greatest journey.
                        </p>
                        <p className="text-[#999] text-[0.85rem] italic">"I found my home the moment I found her." 💕</p>
                    </div>

                    {/* ——— CENTER BEATING HEART ——— */}
                    <div className="relative flex items-center justify-center w-[160px] md:w-[200px] h-[200px] shrink-0 z-10 my-6 md:my-0">
                        {burst && (
                            <div
                                className="couple-heart-center text-[7rem] md:text-[9rem] leading-none select-none"
                                style={{ zIndex: 10 }}
                            >
                                ❤️
                            </div>
                        )}
                    </div>

                    {/* ——— BRIDE CARD (slides from the right) ——— */}
                    <div
                        className="flex-1 w-full max-w-[370px] bg-white rounded-2xl p-7 text-center shadow-xl z-[2] transition-shadow duration-300 hover:shadow-2xl"
                        style={{
                            transform: `translateX(${offset}px)`,
                            opacity: Math.max(0, progress * 1.8),
                            transition: 'box-shadow 0.3s',
                        }}
                    >
                        {/* Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl">👰</div>

                        <div className="w-[160px] h-[160px] mx-auto mb-5 rounded-full overflow-hidden border-[5px] border-secondary shadow-md">
                            <img
                                src={brideImg}
                                alt="Bride"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>

                        <p className="text-secondary uppercase text-[0.7rem] tracking-[3px] mb-1 font-body">The Bride</p>
                        <h3 className="font-heading text-[1.9rem] mb-3 text-primary">Kopila Magar</h3>
                        <p className="text-[#666] text-[0.9rem] leading-[1.75] mb-4">
                            A soul full of grace and beauty. My laughter is contagious and my love unconditional. Ready to begin forever.
                        </p>
                        <p className="text-[#999] text-[0.85rem] italic">"He makes me believe in fairy tales." ❤️</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Couple;
