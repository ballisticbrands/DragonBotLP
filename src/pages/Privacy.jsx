const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white" style={{ fontFamily: sysFont }}>
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <a href="/" className="inline-flex items-center gap-2 mb-10 text-sm text-[#98CC65] hover:text-[#2F7D4F] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to DragonBot
          </a>
          <div className="flex items-center gap-3 mb-4">
            <img src="/DragonBot-logo.png" alt="DragonBot" className="h-8" />
            <span className="text-sm font-medium text-[#2F7D4F] bg-[#2F7D4F]/10 px-3 py-1 rounded-full">Legal</span>
          </div>
          <h1 className="font-extrabold text-4xl">Consent &amp; Privacy Notice</h1>
          <p className="mt-3 text-white/40 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-white/70 leading-relaxed mb-8">
          Your privacy matters to us. This Privacy Notice explains how we collect, use, store, and protect your information when you use our application (the "App").
        </p>
        <p className="text-white/70 leading-relaxed mb-12">
          By using the App, you acknowledge that you have read and understood this Privacy Notice and consent to the collection and use of your information as described below.
        </p>

        <div className="space-y-12">

          <section>
            <h2 className="font-bold text-xl mb-4">1. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">We may collect the following types of information:</p>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-2">a. Information You Provide</h3>
                <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2">
                  <li>Account details (such as name, email address, or username)</li>
                  <li>Content you submit or upload within the App</li>
                  <li>Communications you send to us (support requests, feedback, etc.)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">b. Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2">
                  <li>Device and browser information</li>
                  <li>IP address and general location (e.g., country or region)</li>
                  <li>Usage data such as pages viewed, features used, and interaction timestamps</li>
                  <li>Log files and error reports</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">c. Third-Party Data (if applicable)</h3>
                <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2">
                  <li>Information received from integrated third-party services you choose to connect to the App</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">2. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2 mb-4">
              <li>Provide, operate, and improve the App</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about updates, features, or support</li>
              <li>Monitor performance, security, and usage trends</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              We do <strong className="text-white font-semibold">not</strong> sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">3. Legal Basis for Processing</h2>
            <p className="text-white/70 leading-relaxed mb-3">Depending on your location, we process your data based on:</p>
            <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2 mb-4">
              <li>Your consent</li>
              <li>Performance of a contract (providing the App)</li>
              <li>Legitimate business interests</li>
              <li>Legal obligations</li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              You may withdraw your consent at any time where consent is the legal basis for processing.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">4. Data Storage &amp; Security</h2>
            <p className="text-white/70 leading-relaxed mb-3">
              We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse.
            </p>
            <p className="text-white/70 leading-relaxed">
              Your data may be stored and processed on secure servers operated by us or trusted third-party service providers.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-3">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2 mb-4">
              <li>Service providers who help us operate the App (e.g., hosting, analytics, customer support)</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              All third parties are required to protect your data and use it only for authorized purposes.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">6. Data Retention</h2>
            <p className="text-white/70 leading-relaxed">
              We retain your information only for as long as necessary to fulfill the purposes described in this notice, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">7. Your Rights</h2>
            <p className="text-white/70 leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-white/70 leading-relaxed ml-2 mb-4">
              <li>Access your personal data</li>
              <li>Correct or update your data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              You can exercise these rights by contacting us at{' '}
              <a href="mailto:help@getdragonbot.com" className="text-[#98CC65] hover:text-[#2F7D4F] underline transition-colors">help@getdragonbot.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">8. Children's Privacy</h2>
            <p className="text-white/70 leading-relaxed">
              The App is not intended for children under the age of 13 (or the minimum age required by applicable law). We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">9. Changes to This Notice</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Notice from time to time. Any changes will be effective when posted in the App. Continued use of the App constitutes acceptance of the updated notice.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl mb-4">10. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions or requests regarding this Privacy Notice or your data, please contact us at:{' '}
              <a href="mailto:help@getdragonbot.com" className="text-[#98CC65] hover:text-[#2F7D4F] underline transition-colors">
                help@getdragonbot.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} DragonBot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}