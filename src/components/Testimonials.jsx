/**
 * Testimonials Section - Parent testimonials with warm, emotional tone
 */
import { motion } from 'framer-motion';
import { testimonialsContent } from '../data/content';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-pastel-yellow/20 to-cream"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        <motion.h2
          id="testimonials-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          What Parents Say
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Stories from families who&apos;ve found hope and progress with Happy Chatters
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsContent.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-soft flex flex-col hover:-translate-y-1 transition-transform"
            >
              {/* Friendly quote icon */}
              <div className="w-14 h-14 rounded-2xl bg-pastel-yellow/40 flex items-center justify-center mb-4 self-start">
                <svg className="w-8 h-8 text-pastel-yellow-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h7v7h-12.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.998 3.638-3.998 5.849h6.002v7h-12.001z" />
                </svg>
              </div>
              <blockquote className="flex-grow text-lg text-text-secondary italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer>
                <cite className="not-italic font-semibold text-text-primary">
                  {testimonial.author}
                </cite>
                <p className="text-sm text-warm-gray">{testimonial.role}</p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
