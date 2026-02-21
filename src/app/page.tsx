import Button from '@/components/Button';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'East Troy Brewery | Handcrafted Food & Beer in WI',
  description: 'Enjoy handcrafted pints and elevated plates in the heart of historic East Troy, Wisconsin.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-stone-900 border-b-8 border-etbrew-gold overflow-hidden">
        <Image
          src="/brewery-filled.jpg"
          alt="East Troy Brewery Interior"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white mt-12">

          <p className="text-xl md:text-2xl font-sans mb-10 max-w-2xl mx-auto drop-shadow-md">
            Handcrafted pints and elevated plates in the heart of the historic village of East Troy, Wisconsin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/our-food-menu" variant="gold" className="text-lg px-8 py-4">Food Menu</Button>
            <Button href="/our-drink-menu" variant="outline-white" className="text-lg px-8 py-4">Our Beers</Button>
            <Button href="/our-cocktail-menu" variant="outline-white" className="text-lg px-8 py-4">Cocktail & Wine Menu</Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-etbrew-teal mb-8 uppercase tracking-wide">Crafted With Care</h2>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            We&apos;ve created a unique, seasonally-evolving menu where every dish is paired with our house-brewed beers and made with care here at the Brewery.
          </p>
          <div className="w-24 h-1 bg-etbrew-gold mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            No matter what you&apos;re sippin&apos;, we&apos;ve got you covered. Try one of our house-made beers, inventive cocktails, or enticing wines—selected from around the world.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            We offer a laid-back, family-friendly space to unwind from the daily hustle. Join us by the fireplace lounge, listen to live music, or soak up some sun outdoors on our patio.
          </p>
        </div>
      </section>

      {/* Split Feature Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-stone-100 p-16 lg:p-32 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-serif text-stone-800 mb-6 uppercase tracking-wide">Food Cooked From Scratch</h2>
          <p className="mb-10 text-stone-600 text-lg">Discover our locally sourced, chef-driven menu designed to pair perfectly with our craft beers.</p>
          <Button href="/our-food-menu">Food Menu</Button>
        </div>
        <div className="bg-stone-800 p-16 lg:p-32 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl font-serif text-white mb-6 uppercase tracking-wide">Craft Beer, Cocktails, <br />& Wines</h2>
          <p className="mb-10 text-stone-300 text-lg">Explore our rotating taps of house-brewed beers, plus hand-crafted cocktails and curated wines.</p>
          <Button href="/our-drink-menu" variant="outline-white">Drink Menu</Button>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 px-4 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-etbrew-teal mb-8 uppercase tracking-wide">Brewery Events</h2>
          <p className="text-xl text-stone-600 mb-10">Join us for live music, trivia nights, special releases, and more.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/events" variant="gold">See Our Upcoming Events</Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform?usp=sf_link" target="_blank" variant="outline">Book a Private Party</Button>
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-24 px-4 bg-stone-100 border-t-8 border-t-etbrew-teal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif text-stone-800 mb-10 uppercase tracking-wide">Our Hours</h2>
            <div className="space-y-6 text-stone-700 text-lg">
              <p className="bg-etbrew-gold text-white p-4 font-bold text-center uppercase tracking-widest text-sm">We are open for dine-in, patio seating, and carryout!</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-etbrew-gold pl-4">
                  <h4 className="font-bold underline mb-1">Monday</h4>
                  <p>4pm - 8pm - SUPPER CLUB MENU</p>
                </div>

                <div className="border-l-4 border-stone-300 pl-4">
                  <h4 className="font-bold underline mb-1">Tuesday</h4>
                  <p>CLOSED</p>
                </div>

                <div className="border-l-4 border-etbrew-teal pl-4 md:col-span-2">
                  <h4 className="font-bold underline mb-1">Wednesday and Thursday</h4>
                  <div className="flex gap-8">
                    <p>Bar open 4pm - 9pm</p>
                    <p>Food service 4pm - 8pm</p>
                  </div>
                </div>

                <div className="border-l-4 border-etbrew-teal pl-4 md:col-span-2">
                  <h4 className="font-bold underline mb-1">Friday</h4>
                  <div className="flex gap-8">
                    <p>Bar open 4pm - 10pm</p>
                    <p>Food Service 4pm - 9pm</p>
                  </div>
                </div>

                <div className="border-l-4 border-etbrew-teal pl-4 md:col-span-2">
                  <h4 className="font-bold underline mb-1">Saturday</h4>
                  <div className="flex gap-8">
                    <p>Bar open 11:30am - 10pm</p>
                    <p>Food service 11:30am - 9pm</p>
                  </div>
                </div>

                <div className="border-l-4 border-etbrew-teal pl-4">
                  <h4 className="font-bold underline mb-1">Sunday</h4>
                  <p>11:30am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif text-stone-800 mb-10 uppercase tracking-wide leading-tight">Have A Large Party?</h2>

            <div className="bg-white p-8 md:p-12 border-l-8 border-etbrew-gold shadow-lg text-stone-700 text-lg leading-relaxed space-y-6">
              <p>Reservations are available for <strong>parties of 8 or more.</strong></p>
              <p>You can make a reservation by emailing <a href="mailto:info@etbrew.com?subject=ETB Reservation for 8 or more." className="text-etbrew-teal hover:underline font-bold">info@etbrew.com</a> or by leaving us a voicemail at <a href="tel:+12626422670" className="text-etbrew-teal hover:underline font-bold">(262) 642-2670</a>.</p>
            </div>

            <div className="mt-8 bg-white/50 p-6 text-stone-600 italic border-l-4 border-stone-300">
              <p>Walk-ins are always welcome. You can grab a drink at the bar if you&apos;re waiting to dine with us.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
