/**
 * Contact Section - Form and contact information
 * Form submissions are sent to support@happychatters.in via FormSubmit (formsubmit.co).
 * Note: On first submission, FormSubmit sends an activation email to that address - the recipient must click the link to enable the form.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('phone', formState.phone);
    formData.append('message', formState.message);
    formData.append('_subject', 'New message from Happy Chatters website');
    formData.append('_template', 'table');

    const response = await fetch(`https://formsubmit.co/${siteConfig.contact.email}`, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-cream to-pastel-blue/20"
      aria-labelledby="contact-heading"
    >
      <div className="container-wide">
        <motion.h2
          id="contact-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We&apos;d love to hear from you. Reach out to schedule a consultation or ask questions.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-soft"
          >
            <h3 className="heading-3 mb-6">Send us a Message</h3>
            {submitted ? (
              <div
                className="p-6 rounded-2xl bg-pastel-green/30 text-pastel-green-dark font-semibold"
                role="status"
                aria-live="polite"
              >
                Thank you! We&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-text-primary mb-2">
                    Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-blue/50 focus:border-pastel-blue-dark focus:outline-none transition-colors"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-blue/50 focus:border-pastel-blue-dark focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-blue/50 focus:border-pastel-blue-dark focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-pastel-blue/50 focus:border-pastel-blue-dark focus:outline-none transition-colors resize-y"
                    placeholder="Tell us about your child and how we can help..."
                    aria-required="true"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-soft">
              <h3 className="heading-3 mb-6">Contact Information</h3>
              <ul className="space-y-6" role="list">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-pastel-blue/30 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-6 h-6 text-pastel-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-text-primary">Phone</p>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-text-secondary hover:text-pastel-blue-dark transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-pastel-blue/30 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-6 h-6 text-pastel-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-text-primary">Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-text-secondary hover:text-pastel-blue-dark transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-pastel-blue/30 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-6 h-6 text-pastel-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-text-primary">Location</p>
                    <p className="text-text-secondary">{siteConfig.contact.address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
