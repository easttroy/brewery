import { Metadata } from 'next';
import MenuTabs from '@/components/MenuTabs';
import beers from '@/data/beers.json';

export const metadata: Metadata = {
    title: 'Our Beers',
    description: 'Discover our selection of handcrafted beers brewed on-site at East Troy Brewery.',
};
import AgeGate from '@/components/AgeGate';

export default function DrinkMenu() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <AgeGate />
            {/* Page Header */}
            <section className="bg-stone-900 text-white py-20 px-4 text-center border-b-8 border-etbrew-gold">
                <h1 className="text-5xl font-serif uppercase tracking-wider">Menus</h1>
            </section>

            {/* Menu Content */}
            <section className="py-20 px-4 max-w-5xl mx-auto w-full">
                <div className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-etbrew-gold">
                    <MenuTabs />
                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 uppercase tracking-wide border-b border-stone-200 pb-6">Draft List</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {beers.map((beer, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                    <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">
                                        <a href={beer.url} target="_blank" rel="noopener noreferrer" className="hover:text-etbrew-teal transition-colors">
                                            {beer.name}
                                        </a>
                                    </h3>
                                    <span className="text-etbrew-gold font-bold">{beer.abv}</span>
                                </div>
                                {beer.style && <p className="text-stone-600 mt-2 font-serif italic">{beer.style}</p>}
                                <div className="mt-4 space-y-2">
                                    {Array.isArray(beer.prices) ? beer.prices.map((p: { size: string, price: string }, i: number) => (
                                        <div key={i} className="flex justify-between text-sm text-stone-600 border-b border-stone-200 border-dotted pb-1 last:border-0 hover:text-stone-900 transition-colors">
                                            <span>{p.size}</span>
                                            <span className="font-medium">{p.price}</span>
                                        </div>
                                    )) : (
                                        <p className="text-stone-500 text-sm">{beer.ibu !== 'N/A' && beer.ibu !== '' ? `${beer.ibu} IBU` : ''}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-serif text-center text-stone-800 mb-12 mt-20 uppercase tracking-wide border-b border-stone-200 pb-6">Flights</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Flight of 4</h3>
                                <span className="text-etbrew-gold font-bold">$10.00</span>
                            </div>
                            <p className="text-stone-600 mt-2">Get a flight and pick 4 beers on tap.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Flight of 6</h3>
                                <span className="text-etbrew-gold font-bold">$15.00</span>
                            </div>
                            <p className="text-stone-600 mt-2">Get a flight and pick 6 beers on tap.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
