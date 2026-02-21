import { Metadata } from 'next';
import Button from '@/components/Button';

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
                </div>
            </section>

            {/* Content */}
            <section className="py-32 px-4 max-w-3xl mx-auto w-full text-center flex-grow flex flex-col justify-center items-center">

                <div className="bg-white p-12 md:p-16 shadow-2xl border-t-8 border-etbrew-gold rounded-sm w-full">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6">Stay in the Loop</h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Sign up for SMS alerts to get the latest news on special beer releases, taproom events, and exclusive discounts delivered straight to your phone.
                    </p>

                    <form className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-stone-700 uppercase tracking-wider mb-2">Mobile Number *</label>
                            <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" className="w-full p-4 border border-stone-300 focus:outline-none focus:border-etbrew-gold focus:ring-1 focus:ring-etbrew-gold bg-stone-50" required />
                        </div>

                        <p className="text-xs text-stone-500 mt-4 leading-relaxed mb-6">
                            By submitting this form, you agree to receive promotional text messages from East Troy Brewery. Messages may include offers, event info, and updates. Standard message and data rates may apply. You can reply STOP at any time to cancel.
                        </p>

                        <Button variant="gold" className="w-full text-lg py-4 mt-4">
                            Subscribe Now
                        </Button>
                    </form>
                </div>

            </section>

        </div>
    );
}
