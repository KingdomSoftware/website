import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Terms = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const openIfLinked = () => {
            if (window.location.hash === '#terms') setIsOpen(true);
        };
        openIfLinked();
        window.addEventListener('hashchange', openIfLinked);
        return () => window.removeEventListener('hashchange', openIfLinked);
    }, []);

    return (
        <section id="terms" className="py-24 bg-neutral-950">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Legal</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2">Terms of Service</h2>
                    <p className="text-neutral-500 text-sm mb-6">Last updated 17 August 2026</p>

                    <button
                        type="button"
                        onClick={() => setIsOpen((o) => !o)}
                        aria-expanded={isOpen}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                    >
                        {isOpen ? 'Hide Terms of Service' : 'Read Terms of Service'}
                        <FiChevronDown
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-6 text-neutral-400 leading-relaxed text-sm pt-8">
                                    <p>
                                        These Terms of Service govern your use of this website
                                        (kingdomsoftware.com.au), operated by Kingdom Software, an Australian
                                        sole trader business (&ldquo;Kingdom Software&rdquo;, &ldquo;we&rdquo;,
                                        &ldquo;us&rdquo;, ABN 73 404 270 785). By using this website you agree
                                        to these Terms.
                                    </p>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">This website</h3>
                                        <p>
                                            This site provides general information about Kingdom Software and
                                            its services, and a contact form to get in touch with us. Content
                                            on this site is for general informational purposes only and doesn&apos;t
                                            constitute a binding offer or contract — any engagement for
                                            services is agreed separately in writing.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Our products</h3>
                                        <p>
                                            Some of Kingdom Software&apos;s products, such as SubmitMate, have
                                            their own separate Terms of Service and Privacy Policy that govern
                                            use of that specific product — this page covers the
                                            kingdomsoftware.com.au website only.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Acceptable use</h3>
                                        <p>
                                            You agree not to misuse this website — including attempting to
                                            disrupt or gain unauthorised access to it, or submitting the
                                            contact form with fraudulent, abusive, or unlawful content.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Intellectual property</h3>
                                        <p>
                                            The content, design, and branding of this website belong to
                                            Kingdom Software unless otherwise stated, and may not be copied or
                                            reused without our permission.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Liability</h3>
                                        <p>
                                            This website and its content are provided &ldquo;as is&rdquo;
                                            without warranties of any kind, to the maximum extent permitted by
                                            law (subject to any consumer guarantees under the Australian
                                            Consumer Law that can&apos;t be excluded). We&apos;re not liable
                                            for any loss arising from your use of this site.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Governing law</h3>
                                        <p>These Terms are governed by the laws of Victoria, Australia.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Changes</h3>
                                        <p>
                                            We may update these Terms from time to time; the &ldquo;Last
                                            updated&rdquo; date above will reflect the latest version.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Contact</h3>
                                        <p>
                                            Questions about these Terms:{' '}
                                            <a href="mailto:support@kingdomsoftware.com.au" className="text-blue-400 hover:text-blue-300">
                                                support@kingdomsoftware.com.au
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Terms;
