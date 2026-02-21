import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Brewery Events',
    description: 'Check out upcoming events, live music, and specials at East Troy Brewery.',
};

export default function Events() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold relative">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative z-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">Brewery Events</h1>
                    <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-6"></div>
                    <p className="text-xl max-w-2xl mx-auto font-sans">Live music. Comedy nights. Beer releases.</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 max-w-4xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6">Upcoming Events</h2>
                    <div className="bg-stone-100 p-8 border border-stone-200 mt-8 rounded shadow-inner text-stone-500">
                        <p className="text-xl font-bold uppercase tracking-wide">No Upcoming Events</p>
                        <p className="mt-2 text-stone-600">Please check back later for new dates!</p>
                    </div>
                </div>

                <div className="text-center mt-20 mb-12">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6 border-b border-stone-200 pb-2 inline-block">Previous Events</h2>
                </div>

                {/* Event List */}
                <div className="space-y-8 opacity-75">

                    {/* Event Item */}
                    <div className="bg-white border-l-8 border-etbrew-teal p-8 shadow hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-stone-100 p-6 text-center min-w-[120px] rounded shrink-0 border border-stone-200">
                            <span className="block text-sm font-bold text-etbrew-gold uppercase tracking-widest mb-1">OCT</span>
                            <span className="block text-4xl font-serif text-stone-900">31</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-serif text-stone-800 uppercase mb-2">Halloween Costume Party</h3>
                            <p className="text-stone-500 mb-4 font-bold">8:00 PM - Midnight | $5 Cover</p>
                            <p className="text-stone-700 leading-relaxed mb-2">
                                Dress up and drink up! We&apos;re hosting our 3rd annual Halloween bash featuring a costume contest with cash prizes, spooky cocktails, and a special midnight tapping of our Imperial Pumpkin Stout.
                            </p>
                        </div>
                    </div>

                    {/* Event Item */}
                    <div className="bg-white border-l-8 border-etbrew-gold p-8 shadow hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-stone-100 p-6 text-center min-w-[120px] rounded shrink-0 border border-stone-200">
                            <span className="block text-sm font-bold text-etbrew-teal uppercase tracking-widest mb-1">SEP</span>
                            <span className="block text-4xl font-serif text-stone-900">14</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-serif text-stone-800 uppercase mb-2">Live Music: The Bluegrass Boys</h3>
                            <p className="text-stone-500 mb-4 font-bold">7:00 PM - 10:00 PM | Free Entry</p>
                            <p className="text-stone-700 leading-relaxed mb-2">
                                Join us on the patio for a night of stompin&apos; bluegrass. Grab a pint of our seasonal Oktoberfest and enjoy the crisp autumn air.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Private Events CTA */}
            <section className="bg-stone-900 py-20 px-4 mt-auto">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-serif text-white uppercase tracking-wide mb-6">Host Your Next Event With Us</h2>
                    <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Looking for a unique space for your rehearsal dinner, corporate gathering, or birthday party? The brewery is available for private events.
                    </p>
                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform?usp=sf_link" target="_blank" variant="gold" className="text-lg px-8 py-4">
                        Book a Private Party
                    </Button>
                </div>
            </section>

        </div>
    );
}
