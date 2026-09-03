import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingEmailButton({ showFloatingBtn }) {
    const [copied, setCopied] = useState(false);
    const email = "hello@iamuxui.dev";

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
            className={`fixed right-8 bottom-12 z-50 transition-all duration-500 transform ${showFloatingBtn
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
                className="group relative flex items-center gap-2.5 bg-[#1a1a1a] text-white px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#333] hover:border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 overflow-hidden cursor-pointer"
                aria-label={
                    copied
                        ? "Email address copied to clipboard: hello@iamuxui.dev"
                        : "Email Arturo at hello@iamuxui.dev (also copies address to clipboard)"
                }
            >
                {/* Radar / Status Dot: pulso discreto de disponibilidad */}
                <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>

                {/* Contenedor con altura fija para la transición vertical del texto */}
                <div className="relative h-[16px] min-w-[70px] flex items-center overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.span
                                key="copied-text"
                                initial={{ y: 14, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -14, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="whitespace-nowrap text-white font-semibold"
                            >
                                Copied!
                            </motion.span>
                        ) : (
                            <motion.span
                                key="default-text"
                                initial={{ y: 14, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -14, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="whitespace-nowrap text-[#ECECEC] group-hover:text-white"
                            >
                                Email me
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
                                className="text-[12px] text-[#10B981] font-bold"
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
                                className="text-[12px] text-[#A3A3A3] group-hover:text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
