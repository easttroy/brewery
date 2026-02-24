import Button from "@/components/Button";
import Image from "next/image";
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
			<section className="border-etbrew-gold relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden border-b-8 bg-stone-900">
				<Image
					src="/images/backgrounds/brewery-filled.jpg"
					alt="East Troy Brewery Interior"
					fill
					priority
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 z-10 bg-black/65" />
				<div className="relative z-20 mx-auto mt-12 max-w-4xl px-4 text-center text-white">
					<p className="mx-auto mb-10 max-w-2xl font-sans text-xl drop-shadow-md md:text-2xl">
						Handcrafted pints and elevated plates in the heart of
						the historic village of East Troy, Wisconsin.
					</p>

					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button
							href="/menus/food"
							variant="gold"
							className="px-8 py-4 text-lg"
						>
							Food Menu
						</Button>
						<Button
							href="/menus/drafts"
							variant="outline-white"
							className="px-8 py-4 text-lg"
						>
							Beer Menu
						</Button>
						<Button
							href="/menus/cocktails"
							variant="outline-white"
							className="px-8 py-4 text-lg"
						>
							Cocktail Menu
						</Button>
					</div>
				</div>
			</section>

			{/* Intro Section */}
			<section className="bg-white px-4 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-etbrew-teal mb-8 font-serif text-4xl tracking-wide uppercase">
						Crafted With Care
					</h2>
					<p className="mb-8 text-xl leading-relaxed text-stone-600">
						We&apos;ve created a unique, seasonally-evolving menu
						where every dish is paired with our house-brewed beers
						and made with care here at the Brewery.
					</p>
					<div className="bg-etbrew-gold mx-auto mb-8 h-1 w-24"></div>
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
			<section className="grid grid-cols-1 lg:grid-cols-2">
				<div className="flex flex-col items-center justify-center bg-stone-100 p-16 text-center lg:p-32">
					<h2 className="mb-6 font-serif text-4xl tracking-wide text-stone-800 uppercase">
						Food Cooked From Scratch
					</h2>
					<p className="mb-10 text-lg text-stone-600">
						Discover our locally sourced, chef-driven menu designed
						to pair perfectly with our craft beers.
					</p>
					<Button href="/menus/food">Food Menu</Button>
				</div>
				<div className="flex flex-col items-center justify-center bg-stone-800 p-16 text-center text-white lg:p-32">
					<h2 className="mb-6 font-serif text-4xl tracking-wide text-white uppercase">
						Craft Beer, Cocktails, & Wines
					</h2>
					<p className="mb-10 text-lg text-stone-300">
						Explore our rotating taps of house-brewed beers, plus
						hand-crafted cocktails and curated wines.
					</p>
					<div className="flex flex-col justify-center gap-6 sm:flex-row">
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
			<section className="border-t border-stone-200 bg-white px-4 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-etbrew-teal mb-8 font-serif text-4xl tracking-wide uppercase">
						Brewery Events
					</h2>
					<p className="mb-10 text-xl text-stone-600">
						Join us for live music, trivia nights, special releases,
						and more.
					</p>

					<div className="flex flex-col justify-center gap-6 sm:flex-row">
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
			<section className="border-t-etbrew-teal border-t-8 bg-stone-100 px-4 py-24">
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
					<div>
						<h2 className="mb-10 font-serif text-4xl tracking-wide text-stone-800 uppercase">
							Our Hours
						</h2>
						<div className="space-y-6 text-lg text-stone-700">
							<p className="bg-etbrew-gold p-4 text-center text-sm font-bold tracking-widest text-white uppercase">
								We are open for dine-in, patio seating, and
								carryout!
							</p>

							<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
								<div className="border-etbrew-gold border-l-4 pl-4">
									<h4 className="mb-1 font-bold underline">
										Monday
									</h4>
									<p>4pm - 8pm - SUPPER CLUB MENU</p>
								</div>

								<div className="border-l-4 border-stone-300 pl-4">
									<h4 className="mb-1 font-bold underline">
										Tuesday
									</h4>
									<p>CLOSED</p>
								</div>

								<div className="border-etbrew-teal border-l-4 pl-4 md:col-span-2">
									<h4 className="mb-1 font-bold underline">
										Wednesday and Thursday
									</h4>
									<div className="flex gap-8">
										<p>Bar open 4pm - 9pm</p>
										<p>Food service 4pm - 8pm</p>
									</div>
								</div>

								<div className="border-etbrew-teal border-l-4 pl-4 md:col-span-2">
									<h4 className="mb-1 font-bold underline">
										Friday
									</h4>
									<div className="flex gap-8">
										<p>Bar open 4pm - 10pm</p>
										<p>Food Service 4pm - 9pm</p>
									</div>
								</div>

								<div className="border-etbrew-teal border-l-4 pl-4 md:col-span-2">
									<h4 className="mb-1 font-bold underline">
										Saturday
									</h4>
									<div className="flex gap-8">
										<p>Bar open 11:30am - 10pm</p>
										<p>Food service 11:30am - 9pm</p>
									</div>
								</div>

								<div className="border-etbrew-teal border-l-4 pl-4">
									<h4 className="mb-1 font-bold underline">
										Sunday
									</h4>
									<p>11:30am - 4pm</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h2 className="mb-10 font-serif text-4xl leading-tight tracking-wide text-stone-800 uppercase">
							Have A Large Party?
						</h2>

						<div className="border-etbrew-gold space-y-6 border-l-8 bg-white p-8 text-lg leading-relaxed text-stone-700 shadow-lg md:p-12">
							<p>
								Reservations are available for{" "}
								<strong>parties of 8 or more.</strong>
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

						<div className="mt-8 border-l-4 border-stone-300 bg-white/50 p-6 text-stone-600 italic">
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
