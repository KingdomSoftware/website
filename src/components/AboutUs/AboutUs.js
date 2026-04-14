import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const values = [
    'Transparency in every process',
    'Commitment to correctness and quality',
    'Customer-centric approach',
    'Continuous innovation',
    'Collaborative and inclusive work environment',
];

const stats = [
    { value: '2023', label: 'Founded' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
];

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-neutral-950">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                            About Kingdom Software
                        </h2>
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            Kingdom Software is a technology company dedicated to providing cutting-edge solutions for businesses of all sizes. Established in 2023, we empower clients to thrive in the digital landscape.
                        </p>
                        <p className="text-neutral-400 leading-relaxed mb-8">
                            Our team combines deep technical expertise with a passion for innovation, delivering software products that not only meet but exceed expectations.
                        </p>
                        <ul className="space-y-3">
                            {values.map((value) => (
                                <li key={value} className="flex items-center gap-3 text-neutral-300">
                                    <FiCheckCircle className="text-blue-400 flex-shrink-0" />
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                To empower businesses with innovative and reliable software solutions, providing transparency at every stage of development and delivering products that inspire confidence and trust.
                            </p>
                        </div>
                        <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                To be a beacon of transparency and correctness in the software industry — setting the standard for excellence and inspiring confidence in our clients and partners worldwide.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-neutral-800 border border-neutral-700 rounded-xl p-5 text-center">
                                    <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                                    <p className="text-neutral-500 text-sm mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;