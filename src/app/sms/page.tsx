import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SMS Alerts',
    description: 'Sign up for East Troy Brewery SMS alerts to stay in the loop on specials and events.',
};

export default function SMSAlerts() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold relative">
                <div className="relative z-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">SMS Alerts</h1>
                    <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-6"></div>
                    <p className="text-xl max-w-2xl mx-auto font-sans">Stay in the loop.</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-32 px-4 max-w-3xl mx-auto w-full text-center flex-grow flex flex-col justify-center items-center">

                <div className="bg-white p-12 md:p-16 shadow-2xl border-t-8 border-etbrew-gold rounded-sm w-full">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6">Sign up for SMS alerts</h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Get the latest news on special beer releases, taproom events, and exclusive discounts, delivered straight to your phone.
                    </p>

                    <div className="w-full max-w-lg mx-auto relative bg-transparent">
                        <iframe
                            src="https://app2.simpletexting.com/join/joinWebForm?webFormId=690b997eea162d7184c57748&c=USA"
                            width="100%"
                            height="600"
                            style={{ border: 'none' }}
                            title="East Troy Brewery SMS Sign Up Form"
                            className="block w-full mx-auto outline-none focus:outline-none"
                        ></iframe>
                    </div>
                </div>

            </section>

        </div>
    );
}
