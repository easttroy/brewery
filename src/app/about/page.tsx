import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about the history and story behind East Troy Brewery in Wisconsin.",
};

export default function About() {
	return (
		<div className="flex min-h-screen flex-col bg-white">
			{/* Page Header */}
			<section className="border-etbrew-gold relative border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<div className="absolute inset-0 z-10 bg-black/40" />
				<div className="relative z-20 mx-auto max-w-4xl">
					<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
						About Us
					</h1>
					<div className="bg-etbrew-gold mx-auto mb-6 h-1 w-24"></div>
					<p className="mx-auto max-w-2xl font-sans text-xl">
						Don&apos;t call it a comeback. We&apos;ve been here for
						years.
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="mx-auto w-full max-w-4xl px-4 py-24">
				<div className="space-y-8 text-lg leading-relaxed text-stone-700">
					<h2 className="mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Our Story
					</h2>

					<p>
						East Troy Brewery is a modern-rustic gastro brewery
						located on the historic village square in East Troy,
						Wisconsin.
					</p>

					<p>
						What used to be the historic State Bank of East Troy,
						which opened way back in 1892, is now the home of our
						carefully crafted beer and scratch-made food.
					</p>

					<p>
						We pride ourselves on using locally sourced ingredients
						to create classic Wisconsin comfort food with a modern,
						chef-driven twist. Our rotating draft list features
						award-winning beers brewed directly on-site, serving
						everything from crisp lagers to double dry-hopped IPAs
						and robust stouts.
					</p>

					<h2 className="mt-16 mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						The Space
					</h2>

					<p>
						Our expansive taproom preserves the historic charm of
						the building while offering a warm, inviting modern
						atmosphere. Enjoy a pint by the lounge fireplace during
						winter months, or soak up the sun on our large outdoor
						patio overlooking the town square during the summer.
					</p>

					<h2 className="mt-16 mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Community Focus
					</h2>

					<p>
						We believe a brewery should be the heart of a community.
						East Troy Brewery is committed to supporting local
						farmers, musicians, and artists, providing a gathering
						place for locals and visitors alike to enjoy great food,
						great beer, and great company.
					</p>
				</div>

				<div className="mt-16 border-t border-stone-200 pt-16 text-center">
					<h3 className="text-etbrew-teal mb-6 font-serif text-2xl uppercase">
						Ready To Visit?
					</h3>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button href="/our-food-menu">View Menus</Button>
						<Button href="/visit-us" variant="outline">
							Directions & Hours
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
