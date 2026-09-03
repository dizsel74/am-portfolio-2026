import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingEmailButton({ showFloatingBtn }) {
    const [copied, setCopied] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const email = "hello@iamuxui.dev";

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Revisar estado inicial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContactClick = async () => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 2600);
            }
        } catch {
            // Fallback silencioso
        }
    };

    return (
        <aside
            aria-label="Contact options"
            className={`fixed right-8 bottom-12 z-50 transition-all duration-500 transform ${(showFloatingBtn && hasScrolled)
                ? 'translate-y-0 opacity-100 pointer-events-auto'
                : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
        >
            <motion.a
                href={`mailto:${email}?subject=Design%20Opportunity%20/%20Inquiry`}
                onClick={handleContactClick}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative flex items-center gap-1.5 md:gap-1.5 bg-white text-black px-3 md:px-4 py-3 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-[0_8px_30px_rgb(255,255,255,0.12)] border border-[#E5E5E5] hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black overflow-hidden cursor-pointer mix-blend-difference"
                aria-label={
                    copied
                        ? "Email address copied to clipboard: hello@iamuxui.dev"
                        : "Email Arturo at hello@iamuxui.dev (also copies address to clipboard)"
                }
            >
                {/* Radar / Status Dot: Inverted green (#EF467E) renders as Green (#10B981) on difference */}
                <span className={`relative flex h-2 w-2 transition-opacity duration-300 ${copied ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF467E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF467E]" />
                </span>

                {/* Contenedor con altura fija para la transición vertical del texto */}
                <div className="relative h-[16px] min-w-0 md:min-w-[58px] flex items-center overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.span
                                key="copied-text"
                                initial={{ y: 14, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -14, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="whitespace-nowrap text-black font-semibold flex items-center justify-center"
                            >
                                <span className="hidden md:inline">Copied!</span>
                                <svg className="md:hidden w-3.5 h-3.5" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                                </svg>
                            </motion.span>
                        ) : (
                            <motion.span
                                key="default-text"
                                initial={{ y: 14, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -14, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="whitespace-nowrap text-[#131313] group-hover:text-black flex items-center justify-center"
                            >
                                <span className="hidden md:inline">Email me</span>
                                <svg className="md:hidden w-3.5 h-3.5" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                                </svg>
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Ícono animado (Flecha diagonal ↗ a Check ✓) */}
                <div className="relative w-3.5 h-3.5 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.span
                                key="check"
                                initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                                className="text-[12px] text-[#EF467E] font-bold"
                                aria-hidden="true"
                            >
                                ✓
                            </motion.span>
                        ) : (
                            <motion.span
                                key="arrow"
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="text-[12px] text-[#5C5C5C] group-hover:text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            >
                                ↗
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </motion.a>

            {/* Región de accesibilidad para Screen Readers */}
            <span className="sr-only" aria-live="polite">
                {copied ? "Email address hello@iamuxui.dev copied to clipboard" : ""}
            </span>
        </aside>
    );
}
