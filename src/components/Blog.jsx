/**
 * Blog Section - Parenting tips and resources
 */
import { motion } from 'framer-motion';
import { blogPostsContent } from '../data/content';

export default function Blog() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section
      id="blog"
      className="section-padding bg-white"
      aria-labelledby="blog-heading"
    >
      <div className="container-wide">
        <motion.h2
          id="blog-heading"
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Parenting Tips & Resources
        </motion.h2>
        <motion.p
          className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Helpful articles and tips to support your child&apos;s journey at home
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPostsContent.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-soft group hover:border-pastel-green/50 border-2 border-transparent transition-all hover:-translate-y-1"
            >
              <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-pastel-blue/40 via-pastel-yellow/30 to-pastel-green/40 mb-6 flex items-center justify-center" aria-hidden="true">
                <span className="text-4xl opacity-60">📚</span>
              </div>
              <time dateTime={post.date} className="text-sm text-warm-gray block mb-2">
                {formatDate(post.date)}
              </time>
              <h3 className="heading-3 mb-3 group-hover:text-pastel-green-dark transition-colors">
                {post.title}
              </h3>
              <p className="text-text-secondary mb-6">{post.excerpt}</p>
              <a
                href={`#blog-${post.slug}`}
                className="inline-flex items-center gap-2 text-pastel-green-dark font-semibold hover:gap-3 transition-all"
                aria-label={`Read more: ${post.title}`}
              >
                Read Article
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
