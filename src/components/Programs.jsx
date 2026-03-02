/**
 * Our Programs Section - Five core programs with icons and descriptions
 */
import { motion } from 'framer-motion';
import { programsContent } from '../data/content';
import ProgramIcon from './ProgramIcon';
import FloatingShapes from './FloatingShapes';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Programs() {
  return (
    <section
      id="programs"
      className="section-padding bg-gradient-to-b from-white to-pastel-blue/10 relative overflow-hidden"
      aria-labelledby="programs-heading"
    >
      <FloatingShapes />
      <div className="container-wide relative z-10">
        <motion.h2
          id="programs-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Our Programs
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Comprehensive, evidence-based programs designed for each child&apos;s unique journey
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programsContent.map((program) => (
            <motion.article
              key={program.id}
              variants={cardVariants}
              className="card-soft flex flex-col group hover:border-pastel-blue/50 border-2 border-transparent transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-pastel-blue/30 flex items-center justify-center mb-4 group-hover:bg-pastel-yellow/40 transition-colors">
                <ProgramIcon type={program.icon} className="text-pastel-blue-dark" />
              </div>
              <h3 className="heading-3 mb-3 text-text-primary group-hover:text-pastel-blue-dark transition-colors">
                {program.title}
              </h3>
              <p className="text-text-secondary flex-grow mb-6">
                {program.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-pastel-blue-dark font-semibold hover:gap-3 transition-all"
                aria-label={`Learn more about ${program.title}`}
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
