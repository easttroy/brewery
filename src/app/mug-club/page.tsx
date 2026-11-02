import { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "Mug Club",
	description:
		"Join the East Troy Brewery Mug Club for exclusive perks, discounts, and invites.",
};

export default function MugClub() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="Mug Club"
				subtitle="Join the best club in town."
				eyebrow="Annual Membership"
			/>

			{/* Content */}
			<section className="mx-auto w-full max-w-5xl px-4 py-20">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Ask About Becoming a Member
					</h2>
					<div className="bg-etbrew-gold/70 mx-auto mb-6 h-0.5 w-12" />
					<p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-600">
						Become a part of the East Troy Brewery family! Our Mug
						Club members enjoy exclusive perks, discounts, and
						access to special events all year long.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{/* Benefits */}
					<div className="border-etbrew-teal rounded-xs border-t-4 bg-white p-8 shadow-md md:p-12">
						<h3 className="mb-8 border-b border-stone-100 pb-4 text-center font-serif text-2xl tracking-wide text-stone-800 uppercase">
							Member Benefits
						</h3>

						<ul className="space-y-5 text-base leading-relaxed text-stone-700 sm:text-lg">
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-0.5 mr-4 font-bold">
									&#10003;
								</span>
								<p>
									Exclusive 20oz ETB Glass Mug (larger pours
									for the same price as a 16oz pint!)
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-0.5 mr-4 font-bold">
									&#10003;
								</span>
								<p>$2 off all beers on Mug Club Thursdays</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-0.5 mr-4 font-bold">
									&#10003;
								</span>
								<p>10% off all food purchases (dine-in only)</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-0.5 mr-4 font-bold">
									&#10003;
								</span>
								<p>
									15% off all to-go beer (growlers &amp;
									crowlers) and merchandise
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-0.5 mr-4 font-bold">
									&#10003;
								</span>
								<p>Free birthday beer or dessert</p>
							</li>
							<li className="flex items-start">
								<span className="text-etbrew-gold mt-0.5 mr-4 font-bold">
									&#10003;
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
						<div
							className="border-etbrew-gold rounded-xs border-t-4 bg-stone-900 p-10 text-center text-white shadow-xl sm:p-12"
							style={{
								backgroundImage:
									"radial-gradient(ellipse at 50% 25%, rgba(173, 140, 26, 0.14) 0%, transparent 75%)",
							}}
						>
							<h3 className="mb-4 font-serif text-2xl tracking-widest uppercase sm:text-3xl">
								Yearly Membership
							</h3>
							<div className="text-etbrew-gold-bright mb-6 font-serif text-6xl font-bold">
								$150
							</div>
							<p className="mb-8 text-stone-300 italic">
								Valid until end of current calendar year.
							</p>
							<Button
								href="/visit-us"
								variant="gold"
								className="w-full py-4 text-base sm:text-lg"
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
