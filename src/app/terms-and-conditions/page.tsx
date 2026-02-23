import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms & Conditions",
	description: "Read the terms and conditions for East Troy Brewery.",
};

export default function TermsAndConditions() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			{/* Page Header */}
			<section className="border-etbrew-gold border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
					Terms &amp; Conditions
				</h1>
				<div className="bg-etbrew-gold mx-auto h-1 w-24"></div>
			</section>

			{/* Content */}
			<section className="mx-auto w-full max-w-4xl px-4 py-20">
				<div className="border-etbrew-gold prose prose-stone max-w-none border-t-4 bg-white p-8 shadow-xl md:p-16">
					<p className="mb-8 text-sm text-stone-500 italic">
						Last updated: February 22, 2026
					</p>

					<p>
						Please read these Terms of Use (&ldquo;Terms&rdquo;,
						&ldquo;Terms of Use&rdquo;) carefully before using the
						https://etbrew.com website (the &ldquo;Service&rdquo;)
						operated by East Troy Brewery Co (&ldquo;us&rdquo;,
						&ldquo;we&rdquo;, or &ldquo;our&rdquo;).
					</p>

					<p>
						Your access to and use of the Service is conditioned on
						your acceptance of and compliance with these Terms.
						These Terms apply to all visitors, users and others who
						access or use the Service.
					</p>

					<p>
						By accessing or using the Service you agree to be bound
						by these Terms. If you disagree with any part of the
						terms then you may not access the Service.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Intellectual Property
					</h2>
					<p>
						The Service and its original content, features and
						functionality are and will remain the exclusive property
						of East Troy Brewery Co and its licensors.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Links to Other Web Sites
					</h2>
					<p>
						Our Service may contain links to third-party web sites
						or services that are not owned or controlled by East
						Troy Brewery Co.
					</p>
					<p>
						East Troy Brewery Co has no control over, and assumes no
						responsibility for, the content, privacy policies, or
						practices of any third party web sites or services. You
						further acknowledge and agree that East Troy Brewery Co
						shall not be responsible or liable, directly or
						indirectly, for any damage or loss caused or alleged to
						be caused by or in connection with use of or reliance on
						any such content, goods or services available on or
						through any such web sites or services. We strongly
						advise you to read the terms and conditions and privacy
						policies of any third-party web sites or services that
						you visit.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Termination
					</h2>
					<p>
						We may terminate or suspend access to our Service
						immediately, without prior notice or liability, for any
						reason whatsoever, including without limitation if you
						breach the Terms.
					</p>
					<p>
						All provisions of the Terms which by their nature should
						survive termination shall survive termination,
						including, without limitation, ownership provisions,
						warranty disclaimers, indemnity and limitations of
						liability.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Disclaimer
					</h2>
					<p>
						Your use of the Service is at your sole risk. The
						Service is provided on an &ldquo;AS IS&rdquo; and
						&ldquo;AS AVAILABLE&rdquo; basis. The Service is
						provided without warranties of any kind, whether express
						or implied, including, but not limited to, implied
						warranties of merchantability, fitness for a particular
						purpose, non-infringement or course of performance.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Governing Law
					</h2>
					<p>
						These Terms shall be governed and construed in
						accordance with the laws of United States without regard
						to its conflict of law provisions.
					</p>
					<p>
						Our failure to enforce any right or provision of these
						Terms will not be considered a waiver of those rights.
						If any provision of these Terms is held to be invalid or
						unenforceable by a court, the remaining provisions of
						these Terms will remain in effect. These Terms
						constitute the entire agreement between us regarding our
						Service, and supersede and replace any prior agreements
						we might have between us regarding the Service.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Changes
					</h2>
					<p>
						We reserve the right, at our sole discretion, to modify
						or replace these Terms at any time. If a revision is
						material we will try to provide at least 30 days notice
						prior to any new terms taking effect. What constitutes a
						material change will be determined at our sole
						discretion.
					</p>
					<p>
						By continuing to access or use our Service after those
						revisions become effective, you agree to be bound by the
						revised terms. If you do not agree to the new terms,
						please stop using the Service.
					</p>

					<h2 className="mt-12 mb-4 font-serif text-2xl tracking-wide text-stone-800 uppercase">
						Contact Us
					</h2>
					<p>
						If you have any questions about these Terms, please{" "}
						<a
							href="mailto:info@etbrew.com"
							className="text-etbrew-teal hover:underline"
						>
							contact us
						</a>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
