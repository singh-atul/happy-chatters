/**
 * About Us Section - Mission, vision, and organization story
 * Emphasizes empathy, patience, and personalized learning
 */
import { motion } from 'framer-motion';
import { aboutContent } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <motion.h2
          id="about-heading"
          className="heading-2 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="card-soft">
            <h3 className="heading-3 mb-4 text-pastel-blue-dark">Our Mission</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              {aboutContent.mission}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-soft">
            <h3 className="heading-3 mb-4 text-pastel-green-dark">Our Vision</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              {aboutContent.vision}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-soft">
            <h3 className="heading-3 mb-4 text-pastel-yellow-dark">Our Story</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              {aboutContent.story}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-soft">
            <h3 className="heading-3 mb-6 text-text-primary">What We Believe</h3>
            <ul className="grid sm:grid-cols-2 gap-4" role="list">
              {aboutContent.values.map((value, index) => {
                const colors = ['bg-pastel-blue/40', 'bg-pastel-yellow/50', 'bg-pastel-green/40', 'bg-pastel-pink/40'];
                return (
                  <li
                    key={value}
                    className="flex items-center gap-3 text-lg text-text-secondary"
                  >
                    <span
                      className={`flex-shrink-0 w-10 h-10 rounded-full ${colors[index % colors.length]} flex items-center justify-center text-lg font-display font-bold text-text-primary`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    {value}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
