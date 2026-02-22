import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Mug Club',
    description: 'Join the East Troy Brewery Mug Club for exclusive perks, discounts, and invites.',
};

export default function MugClub() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold">
                <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">Mug Club</h1>
                <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-6"></div>
                <p className="text-xl max-w-2xl mx-auto font-sans">Join the best club in town.</p>
            </section>

            {/* Content */}
            <section className="py-24 px-4 max-w-5xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6">Ask About Becoming a Member</h2>
                    <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        Become a part of the East Troy Brewery family! Our Mug Club members enjoy exclusive perks, discounts, and access to special events all year long.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Benefits */}
                    <div className="bg-white p-8 md:p-12 shadow-lg border-t-8 border-etbrew-teal">
                        <h3 className="text-2xl font-serif text-stone-800 uppercase tracking-wide mb-8 text-center border-b border-stone-100 pb-4">Member Benefits</h3>

                        <ul className="space-y-6 text-stone-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-etbrew-gold mr-4 mt-1">✓</span>
                                <p>Exclusive 20oz ETB Glass Mug (larger pours for the same price as a 16oz pint!)</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-etbrew-gold mr-4 mt-1">✓</span>
                                <p>$2 off all beers on Mug Club Thursdays</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-etbrew-gold mr-4 mt-1">✓</span>
                                <p>10% off all food purchases (dine-in only)</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-etbrew-gold mr-4 mt-1">✓</span>
                                <p>15% off all to-go beer (growlers & crowlers) and merchandise</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-etbrew-gold mr-4 mt-1">✓</span>
                                <p>Free birthday beer or dessert</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-etbrew-gold mr-4 mt-1">✓</span>
                                <p>Early access to special bottle releases and events</p>
                            </li>
                        </ul>
                    </div>

                    {/* Pricing & Sign up */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-stone-900 text-white p-12 text-center rounded shadow-xl">
                            <h3 className="text-3xl font-serif uppercase tracking-widest mb-4">Yearly Membership</h3>
                            <div className="text-6xl font-black text-etbrew-gold mb-8">$75</div>
                            <p className="text-stone-300 mb-8 italic">Valid until end of current calendar year.</p>
                            <Button href="/visit-us" variant="gold" className="w-full text-lg py-4">Purchase at the Brewery</Button>
                        </div>

                        <p className="text-center text-stone-500 mt-6 text-sm">
                            Memberships can only be purchased in-person at the taproom. Ask your server or bartender for details!
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}
