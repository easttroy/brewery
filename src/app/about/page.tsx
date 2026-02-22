import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about the history and story behind East Troy Brewery in Wisconsin.',
};

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* Page Header */}
            <section className="bg-stone-900 text-white py-24 px-4 text-center border-b-8 border-etbrew-gold relative">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative z-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif uppercase tracking-wider mb-6">About Us</h1>
                    <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-6"></div>
                    <p className="text-xl max-w-2xl mx-auto font-sans">Don't call it a comeback. We've been here for years.</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4 max-w-4xl mx-auto w-full">
                <div className="text-lg text-stone-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6">Our Story</h2>

                    <p>East Troy Brewery is a modern-rustic gastro brewery located on the historic village square in East Troy, Wisconsin.</p>

                    <p>What used to be the historic State Bank of East Troy, which opened way back in 1892, is now the home of our carefully crafted beer and scratch-made food.</p>

                    <p>We pride ourselves on using locally sourced ingredients to create classic Wisconsin comfort food with a modern, chef-driven twist. Our rotating draft list features award-winning beers brewed directly on-site, serving everything from crisp lagers to double dry-hopped IPAs and robust stouts.</p>

                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6 mt-16">The Space</h2>

                    <p>Our expansive taproom preserves the historic charm of the building while offering a warm, inviting modern atmosphere. Enjoy a pint by the lounge fireplace during winter months, or soak up the sun on our large outdoor patio overlooking the town square during the summer.</p>

                    <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-wide mb-6 mt-16">Community Focus</h2>

                    <p>We believe a brewery should be the heart of a community. East Troy Brewery is committed to supporting local farmers, musicians, and artists, providing a gathering place for locals and visitors alike to enjoy great food, great beer, and great company.</p>
                </div>

                <div className="mt-16 text-center border-t border-stone-200 pt-16">
                    <h3 className="text-2xl font-serif text-etbrew-teal mb-6 uppercase">Ready To Visit?</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/our-food-menu">View Menus</Button>
                        <Button href="/visit-us" variant="outline">Directions & Hours</Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
