"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

export const Nav = () => {
  return (
    <svg
      fill="none"
      height="36"
      viewBox="0 0 32 32"
      width="36"
      className="text-green-600 transition-transform duration-300 hover:rotate-12 hover:scale-110"
    >
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function AppNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Navbar
      maxWidth="full"
      className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md px-4 sm:px-6 py-3 animate-fade-in-down z-50 font-inter"
    >
      <div className="flex items-center justify-between w-full">
        {/* Brand */}
        <NavbarBrand className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <Nav />
          <span className="font-extrabold text-xl text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-300">
            Aishwarya
          </span>
        </NavbarBrand>

        {/* Nav Items - Desktop */}
        <NavbarContent className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-20 items-center">
          {navItems.map(({ label, href }) => (
            <NavbarItem key={label}>
              <Link
                href={href}
                className="text-gray-800 dark:text-gray-100 font-bold text-sm tracking-wide hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Dark Mode Toggle and Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <span className="text-yellow-300">🌙</span>
            ) : (
              <span className="text-gray-800">☀️</span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-100 mb-1 transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-100 mb-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-100 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 animate-slide-down z-40">
          <nav className="flex flex-col py-4">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-6 py-3 text-gray-800 dark:text-gray-100 font-bold border-b border-gray-200 dark:border-gray-700 last:border-none hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </Navbar>
  );
}
