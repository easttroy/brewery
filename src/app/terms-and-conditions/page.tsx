import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Read the terms and conditions for East Troy Brewery.',
};

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold">
                <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">Terms &amp; Conditions</h1>
                <div className="w-24 h-1 bg-etbrew-gold mx-auto"></div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 max-w-4xl mx-auto w-full">
                <div className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-etbrew-gold prose prose-stone max-w-none">
                    <p className="text-sm text-stone-500 italic mb-8">Last updated: February 22, 2026</p>

                    <p>Please read these Terms of Use (&ldquo;Terms&rdquo;, &ldquo;Terms of Use&rdquo;) carefully before using the https://etbrew.com website (the &ldquo;Service&rdquo;) operated by East Troy Brewery Co (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).</p>

                    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

                    <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Intellectual Property</h2>
                    <p>The Service and its original content, features and functionality are and will remain the exclusive property of East Troy Brewery Co and its licensors.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Links to Other Web Sites</h2>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by East Troy Brewery Co.</p>
                    <p>East Troy Brewery Co has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that East Troy Brewery Co shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Termination</h2>
                    <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Disclaimer</h2>
                    <p>Your use of the Service is at your sole risk. The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.</p>
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Changes</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Contact Us</h2>
                    <p>If you have any questions about these Terms, please <a href="mailto:info@etbrew.com" className="text-etbrew-teal hover:underline">contact us</a>.</p>
                </div>
            </section>
        </div>
    );
}
