import React from 'react';
import { motion } from 'framer-motion';
import markOutline from '../../images/brand/mark-outline.svg';

const nodes = [
    { cx: 60, cy: 90, r: 5 },
    { cx: 230, cy: 170, r: 6 },
    { cx: 400, cy: 60, r: 5 },
    { cx: 330, cy: 300, r: 5 },
    { cx: 470, cy: 260, r: 4 },
    { cx: 150, cy: 280, r: 4 },
    { cx: 500, cy: 420, r: 5 },
    { cx: 260, cy: 440, r: 4 },
];

const edges = [
    [0, 1], [1, 2], [1, 3], [3, 4], [0, 5], [3, 6], [3, 7],
];

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-neutral-950">
            {/* Base gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-blue-950" />

            {/* Soft glow blobs */}
            <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-blue-600/25 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[24rem] h-[24rem] bg-indigo-500/10 rounded-full blur-3xl" />

            {/* Blueprint dot-grid texture */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.6) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Giant watermark of the brand mark */}
            <img
                src={markOutline}
                alt=""
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-[34rem] h-auto opacity-[0.12] hidden lg:block pointer-events-none"
            />

            {/* Network graph accent */}
            <svg
                className="absolute top-0 right-0 w-full max-w-3xl h-full opacity-40 pointer-events-none hidden md:block"
                viewBox="0 0 560 500"
                fill="none"
                preserveAspectRatio="xMaxYMid slice"
            >
                <g stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.5">
                    {edges.map(([a, b], i) => {
                        const A = nodes[a];
                        const B = nodes[b];
                        return <line key={i} x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy} />;
                    })}
                </g>
                <g fill="#93c5fd">
                    {nodes.map((n, i) => (
                        <motion.circle
                            key={i}
                            cx={n.cx}
                            cy={n.cy}
                            r={n.r}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                        />
                    ))}
                </g>
            </svg>

            {/* Skyline silhouette along the bottom edge */}
            <svg
                className="absolute bottom-0 left-0 w-full h-40 md:h-56 pointer-events-none"
                viewBox="0 0 1440 220"
                preserveAspectRatio="none"
                fill="none"
            >
                <g fill="#1e3a8a" fillOpacity="0.35">
                    <rect x="0" y="140" width="90" height="80" />
                    <rect x="100" y="100" width="70" height="120" />
                    <rect x="180" y="150" width="60" height="70" />
                    <rect x="255" y="60" width="90" height="160" />
                    <rect x="280" y="30" width="40" height="30" />
                    <rect x="360" y="120" width="70" height="100" />
                    <rect x="445" y="90" width="55" height="130" />
                    <rect x="515" y="150" width="80" height="70" />
                    <rect x="610" y="40" width="100" height="180" />
                    <rect x="640" y="10" width="40" height="30" />
                    <rect x="725" y="110" width="65" height="110" />
                    <rect x="800" y="70" width="60" height="150" />
                    <rect x="870" y="140" width="90" height="80" />
                    <rect x="975" y="95" width="70" height="125" />
                    <rect x="1060" y="150" width="60" height="70" />
                    <rect x="1135" y="55" width="90" height="165" />
                    <rect x="1160" y="25" width="40" height="30" />
                    <rect x="1235" y="115" width="70" height="105" />
                    <rect x="1320" y="85" width="55" height="135" />
                    <rect x="1390" y="145" width="50" height="75" />
                </g>
                <rect x="0" y="217" width="1440" height="3" fill="#3b82f6" fillOpacity="0.4" />
            </svg>

            <div className="relative z-10 container mx-auto w-full px-6">
                <motion.div
                    className="max-w-2xl text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-600/30 border border-blue-400/40 rounded-full text-blue-300 tracking-wide">
                        Kingdom Software
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Building Secure, Scalable{' '}
                        <span className="text-blue-400">Software Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto lg:mx-0">
                        We design and deliver dependable software that helps your business move faster with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
