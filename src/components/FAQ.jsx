/**
 * FAQ Section - Accordion-style frequently asked questions
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqContent } from '../data/content';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section
      id="faq"
      className="section-padding bg-cream"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        <motion.h2
          id="faq-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Common questions from parents — we&apos;re here to help
        </motion.p>

        <div className="space-y-4">
          {faqContent.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-soft"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
              >
                <span className="heading-3 text-lg pr-4">{item.question}</span>
                <motion.span
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-pastel-yellow/50 flex items-center justify-center border-2 border-pastel-yellow-dark/30"
                >
                  <svg className="w-5 h-5 text-pastel-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-text-secondary border-t border-pastel-blue/30 mt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
