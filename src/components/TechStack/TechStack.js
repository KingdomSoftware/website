import React from 'react';
import { SiReact, SiNodedotjs, SiAmazonwebservices, SiTypescript, SiTailwindcss } from 'react-icons/si';

const stack = [
    { Icon: SiReact, label: 'React' },
    { Icon: SiTypescript, label: 'TypeScript' },
    { Icon: SiNodedotjs, label: 'Node.js' },
    { Icon: SiAmazonwebservices, label: 'AWS' },
    { Icon: SiTailwindcss, label: 'Tailwind CSS' },
];

const TechStack = () => {
    return (
        <div className="bg-neutral-950 border-t border-neutral-900 py-8">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
                <span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">
                    Built With
                </span>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {stack.map(({ Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2 text-neutral-500 hover:text-blue-400 transition-colors duration-300"
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
