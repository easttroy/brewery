import Button from "@/components/Button";
import HeroVideo from "@/components/HeroVideo";
import HoursLedger from "@/components/HoursLedger";
import beers from "@/data/beers.json";
import { Metadata } from "next";

const KITCHEN_HIGHLIGHTS = [
	{
		name: "Hill Valley Cheese Curds",
		detail: "Beer-battered local curds, zess pepper ranch & sun-dried tomato aioli",
		price: "$15",
	},
	{
		name: "Brewery Burger",
		detail: "Smashed chuck, brisket & short rib, bacon-onion jam, gruyere",
		price: "$18",
	},
	{
		name: "Spicy Pepperoni Flatbread",
		detail: "Pepperoni, soppressata, fresh mozzarella & hot honey",
		price: "$20",
	},
];

const featuredBeers = [
	...beers.filter((b) => !b.style?.toLowerCase().includes("seltzer")),
	...beers.filter((b) => b.style?.toLowerCase().includes("seltzer")),
].slice(0, 3);

export const metadata: Metadata = {
	title: "East Troy Brewery | Handcrafted Food & Beer in WI",
	description:
		"Enjoy handcrafted pints and elevated plates in the heart of historic East Troy, Wisconsin.",
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="border-etbrew-gold relative flex h-[70svh] min-h-[480px] items-center justify-center overflow-hidden border-b-4 bg-stone-900 py-14 md:h-[85svh] md:min-h-[600px]">
				<HeroVideo />
				<div className="relative z-20 mx-auto mt-6 max-w-4xl px-4 text-center text-white sm:mt-8">
					<p className="text-etbrew-gold-bright mb-3 font-sans text-xs font-bold tracking-[0.26em] uppercase drop-shadow sm:mb-4 sm:text-sm">
						Historic Village Square &bull; East Troy, WI
					</p>
					<h1 className="mx-auto mb-4 max-w-3xl font-serif text-3xl leading-tight tracking-wide uppercase drop-shadow-lg sm:mb-5 sm:text-5xl md:text-6xl">
						Handcrafted Pints &amp; Elevated Plates
					</h1>
					<p className="mx-auto mb-8 max-w-2xl font-sans text-base text-stone-100 drop-shadow-md sm:mb-10 sm:text-lg md:text-xl">
						House-brewed beer, scratch-made comfort food, and a warm
						taproom inside East Troy&apos;s historic 1892 bank
						building.
					</p>

					<div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
						<Button
							href="/menus/food"
							variant="gold"
							className="px-8 py-3.5 text-base sm:py-4 sm:text-lg"
						>
							Food Menu
						</Button>
						<div className="grid grid-cols-2 gap-3 sm:contents">
							<Button
								href="/menus/drafts"
								variant="outline-white"
								className="px-4 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-lg"
							>
								Beer Menu
							</Button>
							<Button
								href="/menus/cocktails"
								variant="outline-white"
								className="px-4 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-lg"
							>
								Cocktail Menu
							</Button>
						</div>
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
						cocktails, or enticing wines selected from around the
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
				<div className="flex flex-col items-center justify-between bg-stone-100 px-6 py-20 text-center sm:p-16 lg:px-14 lg:py-24 xl:px-20">
					<div className="flex w-full max-w-md flex-col items-center">
						<p className="text-etbrew-gold mb-3 text-xs font-bold tracking-[0.2em] uppercase">
							From the Kitchen
						</p>
						<h2 className="mb-4 font-serif text-3xl tracking-wide text-stone-800 uppercase sm:text-4xl">
							Food Cooked From Scratch
						</h2>
						<p className="mb-8 text-base leading-relaxed text-stone-600 sm:text-lg">
							Locally sourced, chef-driven comfort food designed
							to pair with our house beers.
						</p>

						<div className="mb-10 w-full divide-y divide-stone-200/90 rounded-xs border border-stone-200/90 bg-white px-5 py-2 text-left shadow-2xs">
							{KITCHEN_HIGHLIGHTS.map((item) => (
								<div key={item.name} className="py-3.5">
									<div className="flex items-baseline justify-between gap-3">
										<h3 className="font-sans text-sm font-bold tracking-wide text-stone-800 uppercase">
											{item.name}
										</h3>
										<span className="text-etbrew-gold shrink-0 font-serif text-sm font-bold">
											{item.price}
										</span>
									</div>
									<p className="mt-1 text-xs leading-relaxed text-stone-500">
										{item.detail}
									</p>
								</div>
							))}
						</div>
					</div>
					<Button href="/menus/food">Full Food Menu</Button>
				</div>

				<div
					className="relative flex flex-col items-center justify-between overflow-hidden bg-stone-900 px-6 py-20 text-center text-white sm:p-16 lg:px-14 lg:py-24 xl:px-20"
					style={{
						backgroundImage:
							"radial-gradient(ellipse at 50% 30%, rgba(173, 140, 26, 0.12) 0%, transparent 75%)",
					}}
				>
					<div className="flex w-full max-w-md flex-col items-center">
						<p className="text-etbrew-gold-bright mb-3 text-xs font-bold tracking-[0.2em] uppercase">
							From the Taproom
						</p>
						<h2 className="mb-4 font-serif text-3xl tracking-wide text-white uppercase sm:text-4xl">
							Craft Beer, Cocktails &amp; Wines
						</h2>
						<p className="mb-8 text-base leading-relaxed text-stone-300 sm:text-lg">
							Explore our rotating taps of house-brewed beers,
							handcrafted cocktails, and curated wines.
						</p>

						<div className="backdrop-blur-2xs mb-10 w-full divide-y divide-white/10 rounded-xs border border-white/10 bg-white/[0.04] px-5 py-2 text-left">
							{featuredBeers.map((beer) => (
								<div key={beer.name} className="py-3.5">
									<div className="flex items-baseline justify-between gap-3">
										<h3 className="font-sans text-sm font-bold tracking-wide text-white uppercase">
											{beer.name}
										</h3>
										{beer.abv && beer.abv !== "N/A" && (
											<span className="text-etbrew-gold-bright shrink-0 font-sans text-[11px] font-bold tracking-wider uppercase">
												{beer.abv} ABV
											</span>
										)}
									</div>
									{beer.style && (
										<p className="mt-1 font-serif text-xs text-stone-400 italic">
											{beer.style}
										</p>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
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
