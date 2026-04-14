import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../images/KSHero2.png';

const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
            style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

            <div className="relative z-10 container mx-auto text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-600/30 border border-blue-400/40 rounded-full text-blue-300 tracking-wide">
                        Kingdom Software
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Transforming Ideas into{' '}
                        <span className="text-blue-400">Software Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
                        Innovative, reliable, and scalable technology solutions to drive your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            Get Started
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
                        >
                            Our Services
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
                    <div className="w-1 h-3 bg-white/60 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;