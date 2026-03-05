import { useEffect } from 'react';

/**
 * Automatically finds all elements with .reveal, .reveal-left, .reveal-right
 * inside the document (or provided root) and adds .visible when they enter view.
 */
const useScrollReveal = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Once revealed, stop observing to avoid re-running
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

export default useScrollReveal;
