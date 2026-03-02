/**
 * Hero Section - First impression with headline and CTAs
 * Kid-friendly design with floating shapes and cheerful illustration
 */
import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import FloatingShapes from './FloatingShapes';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-pastel-blue/50 via-cream to-pastel-yellow/40 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-64 h-64 bg-pastel-green/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-pastel-yellow/35 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pastel-pink/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      <FloatingShapes />

      <div className="container-wide section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <h1
            id="hero-heading"
            className="heading-1 mb-6 text-text-primary font-display"
          >
            {heroContent.headline}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
            {heroContent.subtext}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#enrollment"
              className="btn-primary"
              aria-label="Enroll your child in our programs"
            >
              {heroContent.primaryCTA}
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              aria-label="Book a free consultation"
            >
              {heroContent.secondaryCTA}
            </a>
          </motion.div>
        </motion.div>

        {/* Kid-friendly illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
          aria-hidden="true"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
