import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <section id="privacy" className="py-24 bg-neutral-900">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Legal</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2">Privacy Policy</h2>
                    <p className="text-neutral-500 text-sm mb-8">Last updated 17 August 2026</p>

                    <div className="space-y-6 text-neutral-400 leading-relaxed text-sm">
                        <p>
                            This policy explains how Kingdom Software, an Australian sole trader
                            business (&ldquo;Kingdom Software&rdquo;, &ldquo;we&rdquo;,
                            &ldquo;us&rdquo;, ABN 73 404 270 785), handles personal information
                            collected through this website (kingdomsoftware.com.au), consistent
                            with the Australian Privacy
                            Principles under the Privacy Act 1988 (Cth).
                        </p>

                        <div>
                            <h3 className="text-white font-semibold mb-2">What we collect</h3>
                            <p>
                                When you use the contact form on this site, we collect your name,
                                email address, and whatever message you send us. We don&apos;t use
                                cookies or trackers for analytics or advertising on this site.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">How we use it</h3>
                            <p>
                                Contact form submissions are sent to our sales inbox
                                (sales@kingdomsoftware.com.au) purely to respond to your enquiry —
                                we don&apos;t use it for marketing you haven&apos;t asked for, and
                                we don&apos;t sell or share it with third parties other than the
                                infrastructure providers needed to deliver the email itself.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">Our products</h3>
                            <p>
                                If you&apos;re a user of one of our products, such as SubmitMate,
                                that product has its own separate Privacy Policy covering how it
                                handles your data — this page only covers the
                                kingdomsoftware.com.au website and its contact form.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">Retention</h3>
                            <p>
                                Contact form messages are retained in our email inbox for as long
                                as reasonably needed to handle the enquiry and keep a record of
                                the conversation, unless you ask us to delete them sooner.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">Your rights</h3>
                            <p>
                                You can ask what personal information we hold about you, ask us to
                                correct it, or ask us to delete it, by emailing{' '}
                                <a href="mailto:support@kingdomsoftware.com.au" className="text-blue-400 hover:text-blue-300">
                                    support@kingdomsoftware.com.au
                                </a>{' '}
                                — we aim to respond within 30 days. If you&apos;re not satisfied
                                with our response, you can complain to the Office of the
                                Australian Information Commissioner (oaic.gov.au).
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">Changes</h3>
                            <p>
                                We may update this policy from time to time; the &ldquo;Last
                                updated&rdquo; date above will reflect the latest version.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Privacy;
