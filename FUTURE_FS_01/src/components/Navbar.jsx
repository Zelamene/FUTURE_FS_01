import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconSun, IconMoon, IconMenu, IconX } from "./icons";

const Navbar = ({ theme, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="fixed w-full z-50 top-0 transition-colors duration-300 bg-[#FFFFFF]/90 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#1F2937]">
            <div className="max-w-[1100px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <NavLink
                    to="/"
                    className="font-bold text-xl tracking-tight text-[#111827] dark:text-[#F9FAFB] font-heading"
                >
                    Zelamene Shazi
                </NavLink>

                { }
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors ${isActive
                                        ? "text-[#2563EB] dark:text-[#60A5FA]"
                                        : "text-[#6B7280] dark:text-[#D1D5DB] hover:text-[#111827] dark:hover:text-[#F9FAFB]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-[8px] bg-[#F8F9FA] dark:bg-[#111827] text-[#6B7280] dark:text-[#D1D5DB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors border border-[#E5E7EB] dark:border-[#1F2937]"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? (
                            <IconSun className="w-5 h-5" />
                        ) : (
                            <IconMoon className="w-5 h-5" />
                        )}
                    </button>
                </div>

                { }
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-[8px] bg-[#F8F9FA] dark:bg-[#111827] text-[#6B7280] dark:text-[#D1D5DB]"
                    >
                        {theme === "dark" ? (
                            <IconSun className="w-5 h-5" />
                        ) : (
                            <IconMoon className="w-5 h-5" />
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-[#111827] dark:text-[#F9FAFB]"
                    >
                        {isMobileMenuOpen ? (
                            <IconX className="w-6 h-6" />
                        ) : (
                            <IconMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            { }
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#FFFFFF] dark:bg-[#111827] border-b border-[#E5E7EB] dark:border-[#1F2937] shadow-lg">
                    <div className="flex flex-col py-4 px-4 gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `text-lg font-medium py-2 ${isActive
                                        ? "text-[#2563EB] dark:text-[#60A5FA]"
                                        : "text-[#6B7280] dark:text-[#D1D5DB]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
