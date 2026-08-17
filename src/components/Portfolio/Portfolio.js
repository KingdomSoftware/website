import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiArrowUpRight } from 'react-icons/fi';
import { MdQrCode2 } from 'react-icons/md';

const products = [
    {
        Icon: FiTarget,
        name: 'SubmitMate',
        tagline: 'Competitions & promotions campaign builder',
        description:
            'A campaign builder for competitions, giveaways, and promotions — from entry forms and submission handling through to reporting and analytics.',
        href: 'https://submitmate.com',
        cta: 'Visit submitmate.com',
        colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20',
    },
    {
        Icon: MdQrCode2,
        name: 'QRMate',
        tagline: 'QR code management platform',
        description:
            'Create trackable QR codes that redirect to any URL, activate or deactivate them on demand, and see scan analytics over time.',
        href: null,
        cta: 'In development',
        colorClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500/20',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-neutral-950">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">What We've Built</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Our Products</h2>
                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                        Software we've designed, built, and operate ourselves — the same standard of work we bring to every client engagement.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {products.map((product, i) => {
                        const { Icon } = product;
                        const CardTag = product.href ? 'a' : 'div';
                        return (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CardTag
                                    {...(product.href
                                        ? { href: product.href, target: '_blank', rel: 'noopener noreferrer' }
                                        : {})}
                                    className="group block h-full bg-neutral-800 border border-neutral-700 rounded-2xl p-8 hover:border-neutral-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
                                >
                                    <div className={`inline-flex p-3 rounded-xl border ${product.colorClass} transition-colors duration-300 mb-5`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                                    <p className="text-blue-400 text-sm font-medium mb-3">{product.tagline}</p>
                                    <p className="text-neutral-400 leading-relaxed mb-5">{product.description}</p>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 group-hover:text-blue-400 transition-colors">
                                        {product.cta}
                                        {product.href && <FiArrowUpRight className="w-4 h-4" />}
                                    </span>
                                </CardTag>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
