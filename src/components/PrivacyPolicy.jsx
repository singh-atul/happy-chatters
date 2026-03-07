/**
 * Privacy Policy Section - Basic privacy policy content
 * Linked from footer. Expand with full legal content as needed.
 */
export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
      className="section-padding bg-cream py-12"
      aria-labelledby="privacy-heading"
    >
      <div className="container-narrow">
        <h2 id="privacy-heading" className="heading-2 mb-6">
          Privacy Policy
        </h2>
        <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
          <p>
            At Happy Chatters, we are committed to protecting your family&apos;s privacy. We collect only the information
            necessary to provide our services and communicate with you about your child&apos;s progress.
          </p>
          <p>
            We do not share your personal information with third parties except as required by law or with your explicit
            consent. All data is stored securely and used solely for the purpose of delivering our training and support services.
          </p>
          <p>
            If you have questions about our privacy practices, please contact us at support@happychatters.in.
          </p>
        </div>
      </div>
    </section>
  );
}
