import React from 'react';
import { Link } from 'react-router-dom';
import { IconGithub, IconLinkedin, IconMail } from './icons';

const Footer = () => (
    <footer className="border-t border-[#E5E7EB] dark:border-[#1F2937] bg-[#F8F9FA] dark:bg-[#0B1120] py-8 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#6B7280] dark:text-[#D1D5DB] text-sm text-center md:text-left">
                &copy; 2026 Zelamene Shazi.
            </div>

            <div className="flex items-center gap-6">
                <a
                    href="https://github.com/Zelamene"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6B7280] dark:text-[#D1D5DB] hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-colors"
                >
                    <IconGithub className="w-5 h-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/zelamene-shazi-66ab142b6/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6B7280] dark:text-[#D1D5DB] hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-colors"
                >
                    <IconLinkedin className="w-5 h-5" />
                </a>
                <a
                    href="mailto:shazizelamene@gmail.com"
                    className="text-[#6B7280] dark:text-[#D1D5DB] hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-colors"
                >
                    <IconMail className="w-5 h-5" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;