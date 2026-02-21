import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Gift Cards',
    description: 'Purchase gift cards for East Troy Brewery.',
};

export default function GiftCards() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold relative">
                <div className="relative z-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">Gift Cards</h1>
                    <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-6"></div>
                </div>
            </section>

            {/* Content */}
            <section className="py-32 px-4 max-w-3xl mx-auto w-full text-center flex-grow flex flex-col justify-center items-center">

                <div className="bg-white p-12 md:p-16 shadow-2xl border-t-8 border-etbrew-teal rounded-sm w-full">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6">Give the Gift of Great Beer</h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        East Troy Brewery gift cards make the perfect gift for the craft beer lover or foodie in your life. Physical gift cards can be purchased in the taproom, or you can send an e-gift card instantly via Toast.
                    </p>

                    <div className="flex flex-col gap-6 justify-center max-w-sm mx-auto">
                        <Button href="https://www.toasttab.com/east-troy-brewery/giftcards?utmCampaign=onlineOrdering" target="_blank" variant="gold" className="w-full text-lg py-4">
                            Purchase E-Gift Card
                        </Button>
                        <Button href="/visit-us" variant="outline" className="w-full text-lg py-4">
                            Get Directions
                        </Button>
                    </div>

                    <p className="text-sm text-stone-500 mt-12 italic">
                        Note: E-gift cards are processed securely through Toast. They can be redeemed for food, beverages, and merchandise at the brewery.
                    </p>
                </div>

            </section>

        </div>
    );
}
