/**
 * Why Choose Us Section - Five key differentiators
 */
import { motion } from 'framer-motion';
import { whyChooseUsContent } from '../data/content';
import ProgramIcon from './ProgramIcon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding bg-cream"
      aria-labelledby="why-us-heading"
    >
      <div className="container-wide">
        <motion.h2
          id="why-us-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We&apos;re committed to providing the highest quality care in a supportive environment
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseUsContent.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-pastel-green/30 flex items-center justify-center">
                <ProgramIcon type={item.icon} className="text-pastel-green-dark" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
