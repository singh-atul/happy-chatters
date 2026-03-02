/**
 * Happy Chatters - Main Application
 * Training and development center for autistic children
 *
 * Structure:
 * - Header: Sticky navigation with mobile menu
 * - Hero: Welcome section with CTAs
 * - About: Mission, vision, story
 * - Programs: Five core programs
 * - Why Choose Us: Differentiators
 * - Testimonials: Parent stories
 * - Enrollment: Four-step process
 * - Blog: Parenting tips
 * - FAQ: Accordion questions
 * - Contact: Form and info
 * - Footer: Links and social
 */
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Enrollment from './components/Enrollment';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="min-h-screen flex flex-col" role="application">
      {/* Skip link for accessibility - appears on focus */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <Enrollment />
        <Blog />
        <FAQ />
        <Contact />
        <PrivacyPolicy />
      </main>

      <Footer />
    </div>
  );
}

export default App;
