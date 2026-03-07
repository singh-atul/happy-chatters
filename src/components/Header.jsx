/**
 * Header component - Navigation bar with logo and CTA
 * Sticky header with smooth scroll to sections
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/content';
import logoImg from '../assets/logo.png';

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
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 font-display font-bold text-xl sm:text-2xl text-text-primary hover:text-pastel-blue-dark transition-colors"
          aria-label={`${siteConfig.organizationName} - Home`}
        >
          <span className="flex h-16 items-center justify-center rounded-xl bg-white/80 px-2 shadow-sm">
            <img
              src={logoImg}
              alt=""
              className="h-14 w-auto max-h-14 object-contain block"
              width={85}
              height={56}
            />
          </span>
          <span>{siteConfig.organizationName}</span>
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
