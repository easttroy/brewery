import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
	title: "Mug Club",
	description:
		"Join the East Troy Brewery Mug Club for exclusive perks, discounts, and invites.",
};

export default function MugClub() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			{/* Page Header */}
			<section className="border-etbrew-gold border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
					Mug Club
				</h1>
				<div className="bg-etbrew-gold mx-auto mb-6 h-1 w-24"></div>
				<p className="mx-auto max-w-2xl font-sans text-xl">
					Join the best club in town.
				</p>
			</section>

			{/* Content */}
			<section className="mx-auto w-full max-w-5xl px-4 py-24">
				<div className="mb-16 text-center">
					<h2 className="mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Ask About Becoming a Member
					</h2>
					<p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-600">
						Become a part of the East Troy Brewery family! Our Mug
						Club members enjoy exclusive perks, discounts, and
						access to special events all year long.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{/* Benefits */}
					<div className="border-etbrew-teal border-t-8 bg-white p-8 shadow-lg md:p-12">
						<h3 className="mb-8 border-b border-stone-100 pb-4 text-center font-serif text-2xl tracking-wide text-stone-800 uppercase">
							Member Benefits
						</h3>

						<ul className="space-y-6 text-lg text-stone-700">
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-1 mr-4">
									✓
								</span>
								<p>
									Exclusive 20oz ETB Glass Mug (larger pours
									for the same price as a 16oz pint!)
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-1 mr-4">
									✓
								</span>
								<p>$2 off all beers on Mug Club Thursdays</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-1 mr-4">
									✓
								</span>
								<p>10% off all food purchases (dine-in only)</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-1 mr-4">
									✓
								</span>
								<p>
									15% off all to-go beer (growlers & crowlers)
									and merchandise
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-1 mr-4">
									✓
								</span>
								<p>Free birthday beer or dessert</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-1 mr-4">
									✓
								</span>
								<p>
									Early access to special bottle releases and
									events
								</p>
							</li>
						</ul>
					</div>

					{/* Pricing & Sign up */}
					<div className="flex flex-col justify-center">
						<div className="rounded bg-stone-900 p-12 text-center text-white shadow-xl">
							<h3 className="mb-4 font-serif text-3xl tracking-widest uppercase">
								Yearly Membership
							</h3>
							<div className="text-etbrew-gold mb-8 text-6xl font-black">
								$150
							</div>
							<p className="mb-8 text-stone-300 italic">
								Valid until end of current calendar year.
							</p>
							<Button
								href="/visit-us"
								variant="gold"
								className="w-full py-4 text-lg"
							>
								Purchase at the Brewery
							</Button>
						</div>

						<p className="mt-6 text-center text-sm text-stone-500">
							Memberships can only be purchased in-person at the
							taproom. Ask your server or bartender for details!
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
