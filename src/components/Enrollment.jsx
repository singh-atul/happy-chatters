/**
 * Enrollment Process Section - Four-step process
 */
import { motion } from 'framer-motion';
import { enrollmentSteps } from '../data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Enrollment() {
  return (
    <section
      id="enrollment"
      className="section-padding bg-white"
      aria-labelledby="enrollment-heading"
    >
      <div className="container-wide">
        <motion.h2
          id="enrollment-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          How to Enroll
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A simple, supportive process to get your child started
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {enrollmentSteps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative"
            >
              {/* Connector line - hidden on mobile, visible on larger screens */}
              {index < enrollmentSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-pastel-blue/50"
                  aria-hidden="true"
                />
              )}
              <div className="card-soft text-center relative z-10 hover:-translate-y-1 transition-transform">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-pastel-blue to-pastel-green flex items-center justify-center text-2xl font-display font-bold text-white shadow-soft mx-auto mb-4 border-2 border-white/50"
                  aria-hidden="true"
                >
                  {step.step}
                </div>
                <h3 className="heading-3 mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
