import React from 'react';
import logo from '../../images/KSLogo.png';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800">
            <div className="container mx-auto max-w-6xl py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    <div>
                        <img src={logo} alt="Kingdom Software" className="h-12 mb-4" />
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            Delivering innovative and reliable software solutions with transparency and excellence since 2023.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { label: 'Services', href: '#services' },
                                { label: 'About Us', href: '#about' },
                                { label: 'Contact Us', href: '#contact' },
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
                <div className="border-t border-neutral-800 pt-8 text-center text-neutral-600 text-sm">
                    <p>&copy; {currentYear} Kingdom Software. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
