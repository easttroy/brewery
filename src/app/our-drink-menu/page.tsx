import { Metadata } from 'next';
import MenuTabs from '@/components/MenuTabs';

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
                        {/* Beer Item */}
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Cherry Pineapple Sour</h3>
                                <span className="text-etbrew-gold font-bold">4.5% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Sweet pineapple meets tart cherry in a puckering, fruit-forward delight.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Midnight Reserve</h3>
                                <span className="text-etbrew-gold font-bold">12.1% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Deep Roast, Rich brown sugar, Silky Smooth. Imperial Stout.</p>
                            <p className="text-stone-500 text-sm mt-1">10oz Draft: $7.00 | Mug Club: $6.00 | 5oz Taster: $4.00 | 32oz Crowler: $21.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Chocolate Cherry Porter</h3>
                                <span className="text-etbrew-gold font-bold">5.5% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Our original porter with additions of chocolate fudge and sweet dark cherry.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Paved In Gold</h3>
                                <span className="text-etbrew-gold font-bold">6.5% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">A big hop driven New England IPA, approachable and dangerous with El Dorado, Rakau, Amarillo hops.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $14.92</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Dorado Loco</h3>
                                <span className="text-etbrew-gold font-bold">5.2% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">&quot;Crazy Gold&quot;. This Mexican Lager was brewed with maximum thirst quenching ability. Try it with a lime!</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">American Lager</h3>
                                <span className="text-etbrew-gold font-bold">4.7% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Crispy clean American Light Lager pairing traditional noble hops with new school Indie Hops.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Goat Talk</h3>
                                <span className="text-etbrew-gold font-bold">7.8% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Doppelbock. Dark, smooth, and indulgent with flavors of caramelized malt, toasted bread, and subtle dark fruit.</p>
                            <p className="text-stone-500 text-sm mt-1">10oz Draft: $5.00 | Mug Club: $4.00 | 32oz Crowler: $18.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Watermelon Premium Seltzer</h3>
                                <span className="text-etbrew-gold font-bold">5.0% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">A simple syrup based hard premium seltzer, Watermelon flavored, and full of bubbles.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Strawberries & Cream Sour</h3>
                                <span className="text-etbrew-gold font-bold">5.0% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Lightly tart fruited sour infused with strawberry puree, cream and vanilla flavoring.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Penny Slot Dunkel</h3>
                                <span className="text-etbrew-gold font-bold">5.2% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Dark German Munich Dunkel lager. So satisfying that it keeps coming back again and again.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Lock & Key Porter</h3>
                                <span className="text-etbrew-gold font-bold">5.0% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Dark caramel and brown coffee malts capture the sweet, rich, and slightly bitter flavors.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Invaluable</h3>
                                <span className="text-etbrew-gold font-bold">8.4% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Imperial West Coast IPA brewed with Krush and Mosaic hops. Bright, tasty, and clean.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">J Henry Barrel Aged Grim</h3>
                                <span className="text-etbrew-gold font-bold">11.5% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Chocolate forward Imperial Stout Aged in J Henry Barrels. Velvety Chocolate, Smooth Booze, Barrel Charred Espresso.</p>
                            <p className="text-stone-500 text-sm mt-1">10oz Draft: $8.00 | Mug Club: $7.00 | 32oz Crowler: $21.00 | 5oz Draft: $4.00</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-2 border-b border-stone-100 pb-1">
                                <h3 className="text-xl font-bold font-sans text-stone-800 uppercase">Hef Time</h3>
                                <span className="text-etbrew-gold font-bold">4.8% ABV</span>
                            </div>
                            <p className="text-stone-600 mt-2">Hefeweizen brewed for the autumn season and football games. Sweet front of banana with a spicy clove finish.</p>
                            <p className="text-stone-500 text-sm mt-1">16oz Draft: $7.00 | Mug Club: $5.00 | 32oz Crowler: $15.00</p>
                        </div>
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
