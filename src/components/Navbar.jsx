import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { label: 'HOME', href: '#' },
    { label: 'THE COUPLE', href: '#couple' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'EVENTS', href: '#events' },
    { label: 'RSVP', href: '#rsvp' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${scrolled ? 'py-3 px-6 bg-[#1e080f]/95 backdrop-blur-md border-b border-white/5'
                : 'p-6 bg-transparent'
            }`}>
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="font-script text-[2.2rem] text-text-light leading-none drop-shadow-md">
                    S&amp;K
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex gap-8 items-center">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a key={label} href={href}
                            className="text-text-light no-underline text-[0.75rem] tracking-[2px] font-body opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm">
                            {label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button className="md:hidden text-text-light p-1" onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 pt-4 pb-6 border-t border-white/10 mt-3">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a key={label} href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-text-light no-underline text-[0.8rem] tracking-[2px] font-body opacity-90 hover:opacity-100 transition-opacity text-center">
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
