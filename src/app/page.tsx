import Button from "@/components/Button";
import HeroVideo from "@/components/HeroVideo";
import HoursLedger from "@/components/HoursLedger";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "East Troy Brewery | Handcrafted Food & Beer in WI",
	description:
		"Enjoy handcrafted pints and elevated plates in the heart of historic East Troy, Wisconsin.",
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="border-etbrew-gold relative flex h-[68svh] min-h-[420px] items-center justify-center overflow-hidden border-b-4 bg-stone-900 md:h-[85svh] md:min-h-[600px]">
				<HeroVideo />
				<div className="relative z-20 mx-auto mt-8 max-w-4xl px-4 text-center text-white">
					<p className="text-etbrew-gold-bright mb-4 font-sans text-xs font-bold tracking-[0.28em] uppercase drop-shadow sm:text-sm">
						Historic Village Square &bull; East Troy, WI
					</p>
					<h1 className="mx-auto mb-5 max-w-3xl font-serif text-4xl leading-tight tracking-wide uppercase drop-shadow-lg sm:text-5xl md:text-6xl">
						Handcrafted Pints &amp; Elevated Plates
					</h1>
					<p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-stone-100 drop-shadow-md md:text-xl">
						House-brewed beer, scratch-made comfort food, and a warm
						taproom inside East Troy&apos;s historic 1892 bank
						building.
					</p>

					<div className="flex flex-col justify-center gap-3.5 sm:flex-row sm:gap-4">
						<Button
							href="/menus/food"
							variant="gold"
							className="px-8 py-4 text-base sm:text-lg"
						>
							Food Menu
						</Button>
						<Button
							href="/menus/drafts"
							variant="outline-white"
							className="px-8 py-4 text-base sm:text-lg"
						>
							Beer Menu
						</Button>
						<Button
							href="/menus/cocktails"
							variant="outline-white"
							className="px-8 py-4 text-base sm:text-lg"
						>
							Cocktail Menu
						</Button>
					</div>
				</div>
			</section>

			{/* Intro Section */}
			<section className="bg-white px-4 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-etbrew-teal mb-6 font-serif text-3xl tracking-wide uppercase sm:text-4xl">
						Crafted With Care
					</h2>
					<div className="bg-etbrew-gold mx-auto mb-8 h-0.5 w-16" />
					<p className="mb-8 text-xl leading-relaxed text-stone-700">
						We&apos;ve created a unique, seasonally-evolving menu
						where every dish is paired with our house-brewed beers
						and made with care here at the Brewery.
					</p>
					<p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-stone-600">
						No matter what you&apos;re sippin&apos;, we&apos;ve got
						you covered. Try one of our house-made beers, inventive
						cocktails, or enticing wines—selected from around the
						world.
					</p>
					<p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-600">
						We offer a laid-back, family-friendly space to unwind
						from the daily hustle. Join us by the fireplace lounge,
						listen to live music, or soak up some sun outdoors on
						our patio.
					</p>
				</div>
			</section>

			{/* Split Feature Sections */}
			<section className="grid grid-cols-1 border-y border-stone-200 lg:grid-cols-2">
				<div className="flex flex-col items-center justify-center bg-stone-100 px-8 py-20 text-center sm:p-16 lg:p-28">
					<p className="text-etbrew-gold mb-3 text-xs font-bold tracking-[0.2em] uppercase">
						From the Kitchen
					</p>
					<h2 className="mb-5 font-serif text-3xl tracking-wide text-stone-800 uppercase sm:text-4xl">
						Food Cooked From Scratch
					</h2>
					<p className="mb-10 max-w-md text-lg leading-relaxed text-stone-600">
						Discover our locally sourced, chef-driven menu designed
						to pair perfectly with our craft beers.
					</p>
					<Button href="/menus/food">Food Menu</Button>
				</div>
				<div
					className="relative flex flex-col items-center justify-center overflow-hidden bg-stone-900 px-8 py-20 text-center text-white sm:p-16 lg:p-28"
					style={{
						backgroundImage:
							"radial-gradient(ellipse at 50% 30%, rgba(173, 140, 26, 0.12) 0%, transparent 75%)",
					}}
				>
					<p className="text-etbrew-gold-bright mb-3 text-xs font-bold tracking-[0.2em] uppercase">
						From the Taproom
					</p>
					<h2 className="mb-5 font-serif text-3xl tracking-wide text-white uppercase sm:text-4xl">
						Craft Beer, Cocktails &amp; Wines
					</h2>
					<p className="mb-10 max-w-md text-lg leading-relaxed text-stone-300">
						Explore our rotating taps of house-brewed beers, plus
						hand-crafted cocktails and curated wines.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
						<Button href="/menus/drafts" variant="outline-white">
							Beer Menu
						</Button>
						<Button href="/menus/cocktails" variant="outline-white">
							Cocktail Menu
						</Button>
					</div>
				</div>
			</section>

			{/* Events */}
			<section className="bg-white px-4 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-etbrew-teal mb-6 font-serif text-3xl tracking-wide uppercase sm:text-4xl">
						Brewery Events
					</h2>
					<div className="bg-etbrew-gold mx-auto mb-8 h-0.5 w-16" />
					<p className="mb-10 text-xl text-stone-600">
						Join us for live music, trivia nights, special releases,
						and more.
					</p>

					<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
						<Button href="/events" variant="gold">
							See Our Upcoming Events
						</Button>
						<Button
							href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform?usp=sf_link"
							target="_blank"
							variant="outline"
						>
							Book a Private Party
						</Button>
					</div>
				</div>
			</section>

			{/* Hours & Info */}
			<section className="border-t-etbrew-teal border-t-4 bg-stone-100 px-4 py-24">
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
					<div>
						<h2 className="mb-8 font-serif text-3xl tracking-wide text-stone-800 uppercase sm:text-4xl">
							Our Hours
						</h2>
						<HoursLedger showBanner />
					</div>

					<div>
						<h2 className="mb-8 font-serif text-3xl leading-tight tracking-wide text-stone-800 uppercase sm:text-4xl">
							Have A Large Party?
						</h2>

						<div className="border-etbrew-gold space-y-6 rounded-xs border-t-4 bg-white p-8 text-lg leading-relaxed text-stone-700 shadow-md sm:p-10">
							<p>
								Reservations are available for{" "}
								<strong className="text-stone-900">
									parties of 8 or more.
								</strong>
							</p>
							<p>
								You can make a reservation by emailing{" "}
								<a
									href="mailto:info@etbrew.com?subject=ETB Reservation for 8 or more."
									className="text-etbrew-teal font-bold hover:underline"
								>
									info@etbrew.com
								</a>{" "}
								or by leaving us a voicemail at{" "}
								<a
									href="tel:+12626422670"
									className="text-etbrew-teal font-bold hover:underline"
								>
									(262) 642-2670
								</a>
								.
							</p>
						</div>

						<div className="mt-6 rounded-xs border-l-3 border-stone-300 bg-white/70 p-6 text-stone-600 italic">
							<p>
								Walk-ins are always welcome. You can grab a
								drink at the bar if you&apos;re waiting to dine
								with us.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
