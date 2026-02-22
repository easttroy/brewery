import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import eventsData from '@/data/events.json';

export const metadata: Metadata = {
    title: 'Brewery Events',
    description: 'Check out upcoming events, live music, and specials at East Troy Brewery.',
};

export default function Events() {
    const upcomingEvents = eventsData.filter(e => !e.isPast);
    const previousEvents = eventsData.filter(e => e.isPast);

    const parseDate = (dateStr: string) => {
        const parts = dateStr.split(/[\s,]+/);
        if (parts.length >= 3) {
            return { month: parts[1], day: parts[2] };
        }
        return { month: 'TBD', day: '--' };
    };

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

                    {upcomingEvents.length === 0 ? (
                        <div className="bg-stone-100 p-8 border border-stone-200 mt-8 rounded shadow-inner text-stone-500">
                            <p className="text-xl font-bold uppercase tracking-wide">No Upcoming Events</p>
                            <p className="mt-2 text-stone-600">Please check back later for new dates!</p>
                        </div>
                    ) : (
                        <div className="space-y-8 text-left mt-8">
                            {upcomingEvents.map((event, index) => {
                                const { month, day } = parseDate(event.date);
                                // Alternate border colors just for visual variety
                                const borderColor = index % 2 === 0 ? 'border-etbrew-teal' : 'border-etbrew-gold';

                                return (
                                    <div key={event.id} className={`bg-white border-l-8 ${borderColor} p-8 shadow hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-8 items-start`}>
                                        <div className="group relative shrink-0 w-full sm:w-[120px] md:w-48 h-[120px] md:h-32 rounded overflow-hidden border border-stone-200 flex flex-col justify-center items-center">
                                            {event.image ? (
                                                <>
                                                    <Image
                                                        src={event.image}
                                                        alt={event.name}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 192px"
                                                    />
                                                    <div className="absolute inset-0 bg-stone-900/60 transition-colors duration-500 group-hover:bg-stone-900/30"></div>

                                                    <div className="relative z-10 text-center drop-shadow-md">
                                                        <span className="block text-sm font-bold text-stone-200 uppercase tracking-widest mb-1">{month}</span>
                                                        <span className="block text-4xl font-serif text-white">{day}</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="absolute inset-0 bg-stone-100 flex flex-col justify-center items-center">
                                                    <span className="block text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">{month}</span>
                                                    <span className="block text-4xl font-serif text-stone-900">{day}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-serif text-stone-800 uppercase mb-2">{event.name}</h3>
                                            <p className="text-stone-500 mb-4 font-bold">{event.date}</p>
                                            <div className="mt-4">
                                                <Button href={event.url} target="_blank" variant="outline" className="text-sm">
                                                    View on Facebook
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {previousEvents.length > 0 && (
                    <>
                        <div className="text-center mt-20 mb-12">
                            <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6 border-b border-stone-200 pb-2 inline-block">Previous Events</h2>
                        </div>

                        {/* Event List */}
                        <div className="space-y-8 opacity-75">
                            {previousEvents.map((event, index) => {
                                const { month, day } = parseDate(event.date);
                                const borderColor = index % 2 === 0 ? 'border-stone-400' : 'border-stone-300';

                                return (
                                    <div key={event.id} className={`bg-white border-l-8 ${borderColor} p-8 shadow flex flex-col md:flex-row gap-8 items-start`}>
                                        <div className="group relative shrink-0 w-full sm:w-[120px] md:w-40 h-[120px] md:h-28 rounded overflow-hidden border border-stone-200 flex flex-col justify-center items-center">
                                            {event.image ? (
                                                <>
                                                    <Image
                                                        src={event.image}
                                                        alt={event.name}
                                                        fill
                                                        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 160px"
                                                    />
                                                    <div className="absolute inset-0 bg-stone-900/70 transition-colors duration-500 group-hover:bg-stone-900/40"></div>

                                                    <div className="relative z-10 text-center drop-shadow-md">
                                                        <span className="block text-sm font-bold text-stone-300 uppercase tracking-widest mb-1">{month}</span>
                                                        <span className="block text-4xl font-serif text-stone-50">{day}</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="absolute inset-0 bg-stone-100 flex flex-col justify-center items-center opacity-75">
                                                    <span className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">{month}</span>
                                                    <span className="block text-4xl font-serif text-stone-700">{day}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-xl font-serif text-stone-600 uppercase mb-2">{event.name}</h3>
                                            <p className="text-stone-400 mb-4 font-bold">{event.date}</p>
                                            <div className="mt-2">
                                                <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-600 text-sm underline underline-offset-4">
                                                    View on Facebook
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                <div className="text-center mt-12">
                    <a href="https://www.facebook.com/ETBrew/events" target="_blank" rel="noopener noreferrer" className="inline-block text-etbrew-teal hover:text-stone-800 transition-colors font-bold uppercase tracking-wide border-b-2 border-etbrew-teal hover:border-stone-800 pb-1">
                        See All Events on Facebook →
                    </a>
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
