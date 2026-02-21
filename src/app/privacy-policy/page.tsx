import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Read the privacy policy for East Troy Brewery.',
};

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold">
                <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">Privacy Policy</h1>
                <div className="w-24 h-1 bg-etbrew-gold mx-auto"></div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 max-w-4xl mx-auto w-full">
                <div className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-etbrew-gold prose prose-stone max-w-none">

                    <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from etbrew.com (the &ldquo;Site&rdquo;).</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Personal Information We Collect</h2>
                    <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as &ldquo;Device Information.&rdquo;</p>

                    <p>We collect Device Information using the following technologies:</p>
                    <ul className="list-disc pl-6 space-y-2 text-stone-700">
                        <li><strong>&ldquo;Cookies&rdquo;</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-etbrew-teal hover:underline">allaboutcookies.org</a>.</li>
                        <li><strong>&ldquo;Log files&rdquo;</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                        <li><strong>&ldquo;Web beacons,&rdquo; &ldquo;tags,&rdquo; and &ldquo;pixels&rdquo;</strong> are electronic files used to record information about how you browse the Site.</li>
                    </ul>

                    <p className="mt-6">Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, birthday, and phone number. We refer to this information as &ldquo;Order Information.&rdquo;</p>

                    <p>When we talk about &ldquo;Personal Information&rdquo; in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">How Do We Use Your Personal Information?</h2>
                    <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-stone-700">
                        <li>Communicate with you;</li>
                        <li>Screen our orders for potential risk or fraud; and</li>
                        <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                    </ul>
                    <p className="mt-6">We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Sharing Your Personal Information</h2>
                    <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use MailChimp to power our email marketing — you can read more about how MailChimp uses your Personal Information here: <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-etbrew-teal hover:underline">mailchimp.com/legal/privacy</a>. We also use Google Analytics to help us understand how our customers use the Site — you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-etbrew-teal hover:underline">google.com/policies/privacy</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-etbrew-teal hover:underline">tools.google.com/dlpage/gaoptout</a>.</p>
                    <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Do Not Track</h2>
                    <p>Please note that we do not alter our Site&apos;s data collection and use practices when we see a Do Not Track signal from your browser.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Data Retention</h2>
                    <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Minors</h2>
                    <p>The Site is not intended for individuals under the age of 21.</p>
                    <p>We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Changes</h2>
                    <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

                    <h2 className="text-2xl font-serif text-stone-800 mt-12 mb-4 uppercase tracking-wide">Contact Us</h2>
                    <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:info@etbrew.com" className="text-etbrew-teal hover:underline">info@etbrew.com</a> or by mail using the details provided below:</p>
                    <p className="font-bold">2905 Main St, East Troy, WI, 53120, United States</p>
                </div>
            </section>
        </div>
    );
}
