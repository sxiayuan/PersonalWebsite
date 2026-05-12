'use client';

import { useState } from 'react';
import { SITE_CONTENT } from '@/data/siteContent';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = SITE_CONTENT.navigation;

  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-warmDark to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-warmGold hover:text-warmOrange transition">
              SX
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-warmGold transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="text-gray-300 hover:text-warmGold transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-gray-300 hover:text-warmGold transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
