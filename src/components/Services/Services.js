import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiCpu } from 'react-icons/fi';

const services = [
    {
        Icon: FiCode,
        title: 'Software Development',
        description: 'Custom software solutions tailored to your unique business needs. From concept to deployment, we build robust and scalable applications.',
        colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20',
    },
    {
        Icon: FiGlobe,
        title: 'Web Development',
        description: 'Responsive, modern, and high-performance web applications built with the latest technologies and best practices.',
        colorClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500/20',
    },
    {
        Icon: FiCpu,
        title: 'Consulting',
        description: 'Expert technology consulting to optimise your systems, processes, and architecture for maximum efficiency and growth.',
        colorClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-500/20',
    },
];

const Services = () => {
    return (
        <section id="services" className="relative py-24 bg-neutral-900 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.8) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div className="container relative mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">What We Do</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Our Services</h2>
                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                        We deliver end-to-end technology solutions designed to meet the demands of modern businesses.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => {
                        const { Icon } = service;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-neutral-800 border border-neutral-700 rounded-2xl p-8 hover:border-neutral-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
                            >
                                <div className={`inline-flex p-3 rounded-xl border ${service.colorClass} transition-colors duration-300 mb-5`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
