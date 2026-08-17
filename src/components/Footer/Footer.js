import React from 'react';
import mark from '../../images/brand/mark.svg';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800">
            <div className="container mx-auto max-w-6xl py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <img src={mark} alt="" className="h-9 w-auto" />
                            <span className="text-white font-semibold tracking-wide">Kingdom Software</span>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                            Delivering innovative and reliable software solutions with transparency and excellence since 2023.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { label: 'Services', href: '#services' },
                                { label: 'Our Products', href: '#portfolio' },
                                { label: 'About Us', href: '#about' },
                                { label: 'Contact Us', href: '#contact' },
                                { label: 'Terms of Service', href: '#terms' },
                                { label: 'Privacy Policy', href: '#privacy' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="text-neutral-500 hover:text-neutral-300 transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-neutral-500">
                            <li className="flex items-center gap-2">
                                <FiMail className="text-blue-400 flex-shrink-0" />
                                <a href="mailto:sales@kingdomsoftware.com.au" className="hover:text-neutral-300 transition-colors break-all">
                                    sales@kingdomsoftware.com.au
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-neutral-600 text-sm">
                    <p>&copy; {currentYear} Kingdom Software. All rights reserved.</p>
                    <p>ABN 73 404 270 785</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
