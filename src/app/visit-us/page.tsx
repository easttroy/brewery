import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Visit Us',
    description: 'Directions, hours, and reservation information for East Troy Brewery.',
};

export default function VisitUs() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold">
                <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">Visit Us</h1>
                <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-6"></div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left Col: Info */}
                <div>
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-8">Location & Contact</h2>

                    <div className="bg-white p-8 border-l-4 border-etbrew-gold shadow-md text-stone-700 space-y-6 text-lg">
                        <div>
                            <h3 className="font-bold text-xl text-stone-900 uppercase tracking-wider mb-2">Address</h3>
                            <p>2905 Main St.</p>
                            <p>East Troy, WI 53120</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-stone-900 uppercase tracking-wider mb-2">Phone</h3>
                            <p><a href="tel:+12626422670" className="text-etbrew-teal hover:underline">(262) 642-2670</a></p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-stone-900 uppercase tracking-wider mb-2">Email</h3>
                            <p><a href="mailto:info@etbrew.com" className="text-etbrew-teal hover:underline">info@etbrew.com</a></p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-8 mt-16">Reservations</h2>
                    <div className="text-stone-700 text-lg leading-relaxed">
                        <p className="mb-4">Reservations are available for <strong>parties of 8 or more.</strong></p>
                        <p className="mb-4">You can make a reservation by emailing <a href="mailto:info@etbrew.com?subject=ETB Reservation for 8 or more." className="text-etbrew-teal hover:underline font-bold">info@etbrew.com</a> or by leaving us a voicemail at <a href="tel:+12626422670" className="text-etbrew-teal hover:underline font-bold">(262) 642-2670</a>.</p>
                        <p className="italic bg-stone-100 p-4 border-l-4 border-stone-300">Walk-ins are always welcome. You can grab a drink at the bar if you&apos;re waiting to dine with us.</p>
                    </div>
                </div>

                {/* Right Col: Hours */}
                <div>
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-8">Hours of Operation</h2>

                    <div className="bg-white p-8 shadow-md border-t-8 border-etbrew-teal text-stone-700 text-lg space-y-6">
                        <div>
                            <h4 className="font-bold text-etbrew-gold mb-1 uppercase tracking-wider">Monday</h4>
                            <p>4pm - 8pm (SUPPER CLUB MENU)</p>
                        </div>

                        <div className="border-t border-stone-100 pt-4">
                            <h4 className="font-bold text-stone-400 mb-1 uppercase tracking-wider">Tuesday</h4>
                            <p>CLOSED</p>
                        </div>

                        <div className="border-t border-stone-100 pt-4">
                            <h4 className="font-bold text-etbrew-teal mb-1 uppercase tracking-wider">Wednesday & Thursday</h4>
                            <p>Bar open 4pm - 9pm</p>
                            <p className="text-stone-500">Food service 4pm - 8pm</p>
                        </div>

                        <div className="border-t border-stone-100 pt-4">
                            <h4 className="font-bold text-etbrew-teal mb-1 uppercase tracking-wider">Friday</h4>
                            <p>Bar open 4pm - 10pm</p>
                            <p className="text-stone-500">Food Service 4pm - 9pm</p>
                        </div>

                        <div className="border-t border-stone-100 pt-4">
                            <h4 className="font-bold text-etbrew-teal mb-1 uppercase tracking-wider">Saturday</h4>
                            <p>Bar open 11:30am - 10pm</p>
                            <p className="text-stone-500">Food service 11:30am - 9pm</p>
                        </div>

                        <div className="border-t border-stone-100 pt-4">
                            <h4 className="font-bold text-etbrew-teal mb-1 uppercase tracking-wider">Sunday</h4>
                            <p>11:30am - 4pm</p>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}
