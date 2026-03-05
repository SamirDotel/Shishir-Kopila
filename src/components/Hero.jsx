import React from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import heroBg from '../images/hero.png';

const Hero = () => {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/[.12] z-0" />

            <Navbar />

            <div className="container mx-auto px-4 text-center z-10 pt-20">

                {/* Top Text */}
                <p className="font-body text-text-light tracking-[3px] md:tracking-[5px] text-[0.7rem] md:text-[0.9rem] uppercase mb-8 md:mb-12 opacity-90 drop-shadow-md px-2">
                    TOGETHER WITH OUR FAMILIES, WE JOYFULLY INVITE YOU
                </p>

                {/* Main Names */}
                <h1 className="font-script text-[5.5rem] sm:text-[7.5rem] md:text-[10rem] text-text-light m-0 leading-[0.8] text-shadow-glow pb-0">
                    Shishir
                </h1>

                <h2 className="font-script text-secondary text-[3rem] sm:text-[4rem] md:text-[5rem] my-3 md:my-4 leading-none text-shadow-solid pl-0 md:pl-12">
                    &
                </h2>

                <h1 className="font-script text-[5.5rem] sm:text-[7.5rem] md:text-[10rem] text-text-light m-0 leading-[0.8] text-shadow-glow pb-6 md:pb-8">
                    Kopila
                </h1>

                {/* Date and Location */}
                <p className="font-heading text-text-light text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] mt-6 md:mt-8 mb-12 md:mb-16 opacity-90 drop-shadow-md">
                    March 11, 2026 • Kathmandu
                </p>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 text-text-light font-body text-sm tracking-[1px] opacity-80">
                <span className="block mb-2"></span>
                <ChevronDown size={20} className="mx-auto opacity-70 animate-bounce-slow" />
            </div>

        </section>
    );
};

export default Hero;
