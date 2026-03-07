/**
 * Owner Section - Founder/owner profile with image
 */
import { motion } from 'framer-motion';
import { ownerContent } from '../data/content';

export default function Owner() {
  return (
    <section
      id="owner"
      className="section-padding bg-gradient-to-b from-cream to-pastel-blue/10"
      aria-labelledby="owner-heading"
    >
      <div className="container-narrow">
        <motion.h2
          id="owner-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Founder
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The heart and vision behind Happy Chatters
        </motion.p>

        <motion.article
          className="card-soft flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-shrink-0">
            <img
              src={ownerContent.image}
              alt={ownerContent.name}
              className="w-48 h-48 rounded-2xl object-cover shadow-soft border-2 border-pastel-blue/30"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,' + encodeURIComponent(
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="%23B8D4E8"><circle cx="100" cy="80" r="40"/><path d="M40 200c0-33 27-60 60-60s60 27 60 60z"/></svg>'
                );
              }}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="heading-3 text-pastel-blue-dark mb-2">{ownerContent.name}</h3>
            <p className="text-pastel-blue font-semibold mb-4">{ownerContent.title}</p>
            <p className="text-lg text-text-secondary leading-relaxed">{ownerContent.bio}</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
