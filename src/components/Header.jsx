/**
 * Header component - Navigation bar with logo and CTA
 * Sticky header with smooth scroll to sections
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/content';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Enrollment', href: '#enrollment' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-pastel-blue/30 shadow-soft"
      role="banner"
    >
      <nav
        className="container-wide section-padding flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo with friendly icon */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-display font-bold text-xl sm:text-2xl text-text-primary hover:text-pastel-blue-dark transition-colors"
          aria-label={`${siteConfig.organizationName} - Home`}
        >
          <span className="w-10 h-10 rounded-full bg-pastel-yellow flex items-center justify-center shadow-soft border-2 border-pastel-yellow-dark/30" aria-hidden="true">
            <svg className="w-6 h-6 text-pastel-yellow-dark" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h2v2H7zm6 0h2v2h-2zm-3 4c1.66 0 3-1.34 3-3H9c0 1.66 1.34 3 3 3z" />
            </svg>
          </span>
          {siteConfig.organizationName}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className="text-text-primary hover:text-pastel-blue-dark font-medium transition-colors"
                role="menuitem"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#enrollment" className="btn-primary">
            Enroll Now
          </a>
          <a href="#contact" className="btn-secondary">
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-xl hover:bg-pastel-blue/30 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-8 h-8 text-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream border-t border-pastel-blue/30 overflow-hidden"
          >
            <ul className="px-4 py-6 space-y-4" role="menu">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    className="block py-2 text-lg font-medium text-text-primary hover:text-pastel-blue-dark"
                    role="menuitem"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-pastel-blue/30 space-y-2">
                <a href="#enrollment" className="block btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                  Enroll Now
                </a>
                <a href="#contact" className="block btn-secondary text-center" onClick={() => setMobileMenuOpen(false)}>
                  Book Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
