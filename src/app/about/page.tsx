import { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about the history and story behind East Troy Brewery in Wisconsin.",
};

export default function About() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="About Us"
				subtitle="Don't call it a comeback. We've been here for years."
				eyebrow="Est. 1892 Building"
			/>

			{/* Content */}
			<section className="mx-auto w-full max-w-4xl px-4 py-20">
				<div className="border-etbrew-gold rounded-xs border-t-4 bg-white p-8 shadow-md sm:p-12 md:p-16">
					<div className="space-y-8 text-lg leading-relaxed text-stone-700">
						<div>
							<h2 className="mb-3 font-serif text-3xl tracking-wide text-stone-800 uppercase">
								Our Story
							</h2>
							<div className="bg-etbrew-gold/70 mb-6 h-0.5 w-12" />
							<div className="space-y-6">
								<p>
									East Troy Brewery is a modern-rustic gastro
									brewery located on the historic village
									square in East Troy, Wisconsin.
								</p>
								<p>
									What used to be the historic State Bank of
									East Troy, which opened way back in 1892, is
									now the home of our carefully crafted beer
									and scratch-made food.
								</p>
								<p>
									We pride ourselves on using locally sourced
									ingredients to create classic Wisconsin
									comfort food with a modern, chef-driven
									twist. Our rotating draft list features
									award-winning beers brewed directly on-site,
									serving everything from crisp lagers to
									double dry-hopped IPAs and robust stouts.
								</p>
							</div>
						</div>

						<div className="pt-6">
							<h2 className="mb-3 font-serif text-3xl tracking-wide text-stone-800 uppercase">
								The Space
							</h2>
							<div className="bg-etbrew-gold/70 mb-6 h-0.5 w-12" />
							<p>
								Our expansive taproom preserves the historic
								charm of the building while offering a warm,
								inviting modern atmosphere. Enjoy a pint by the
								lounge fireplace during winter months, or soak
								up the sun on our large outdoor patio
								overlooking the town square during the summer.
							</p>
						</div>

						<div className="pt-6">
							<h2 className="mb-3 font-serif text-3xl tracking-wide text-stone-800 uppercase">
								Community Focus
							</h2>
							<div className="bg-etbrew-gold/70 mb-6 h-0.5 w-12" />
							<p>
								We believe a brewery should be the heart of a
								community. East Troy Brewery is committed to
								supporting local farmers, musicians, and
								artists, providing a gathering place for locals
								and visitors alike to enjoy great food, great
								beer, and great company.
							</p>
						</div>
					</div>

					<div className="mt-16 border-t border-stone-200 pt-12 text-center">
						<h3 className="text-etbrew-teal mb-6 font-serif text-2xl tracking-wide uppercase">
							Ready To Visit?
						</h3>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Button href="/menus/food">View Menus</Button>
							<Button href="/visit-us" variant="outline">
								Directions &amp; Hours
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
