import React from 'react';
import { Heart } from 'lucide-react';
import footerBg from '../images/Footer.png';

const Footer = () => {
    return (
        <footer
            className="relative text-center px-4 py-16"
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-[1000px] mx-auto px-4">
                <h2 className="font-script text-6xl mb-2 flex items-center justify-center gap-4 text-white leading-none" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                    Shishir <Heart size={30} className="text-pink-400" fill="currentColor" /> Kopila
                </h2>

                <p className="font-heading text-lg text-white/80 m-0 mb-10">
                    Thank you for being part of our special day.
                </p>

                <div className="w-[80px] h-[1px] bg-secondary mx-auto mb-10 opacity-50"></div>

                <div className="flex flex-wrap justify-center gap-8 mb-6">
                    <a href="#couple" className="text-white no-underline text-xs uppercase tracking-[2px] opacity-70 hover:opacity-100 transition-opacity">The Couple</a>
                    <a href="#gallery" className="text-white no-underline text-xs uppercase tracking-[2px] opacity-70 hover:opacity-100 transition-opacity">Gallery</a>
                    <a href="#events" className="text-white no-underline text-xs uppercase tracking-[2px] opacity-70 hover:opacity-100 transition-opacity">Events</a>
                </div>

                <p className="text-xs text-white/60 uppercase tracking-[1px]">
                    &copy; 2026 Shishir &amp; Kopila. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
