import { Metadata } from "next";
import HoursLedger from "@/components/HoursLedger";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "Visit Us",
	description:
		"Directions, village square parking, hours, and reservation information for East Troy Brewery at 2905 Main St, East Troy, WI.",
};

export default function VisitUs() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="Visit Us"
				subtitle="Located on the historic village square in East Troy, Wisconsin."
				eyebrow="2905 Main St"
			/>

			{/* Content */}
			<section className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 sm:py-20">
				<div className="grid grid-cols-1 gap-16 md:grid-cols-2">
					{/* Left Col: Info & Reservations */}
					<div>
						<h2 className="mb-8 font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Location &amp; Contact
						</h2>

						<div className="border-etbrew-gold space-y-6 rounded-xs border-t-4 bg-white p-8 text-lg text-stone-700 shadow-md">
							<div>
								<h3 className="mb-1.5 text-sm font-bold tracking-widest text-stone-400 uppercase">
									Address
								</h3>
								<p className="font-medium text-stone-800">
									2905 Main St.
								</p>
								<p className="mb-4 text-stone-600">
									East Troy, WI 53120
								</p>
								<div className="flex flex-wrap gap-2.5">
									<a
										href="https://maps.google.com/?q=East+Troy+Brewery+2905+Main+St+East+Troy+WI+53120"
										target="_blank"
										rel="noopener noreferrer"
										className="border-etbrew-gold text-etbrew-gold hover:bg-etbrew-gold inline-flex items-center gap-2 rounded-xs border-2 px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors hover:text-white"
									>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											className="h-4 w-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
											/>
										</svg>
										Google Maps
									</a>
									<a
										href="https://maps.apple.com/?q=East+Troy+Brewery&address=2905+Main+St,East+Troy,WI,53120"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-xs border-2 border-stone-300 px-4 py-2 text-xs font-bold tracking-wider text-stone-700 uppercase transition-colors hover:border-stone-800 hover:bg-stone-800 hover:text-white"
									>
										Apple Maps
									</a>
								</div>
							</div>

							<div className="border-t border-stone-100 pt-5">
								<h3 className="mb-1.5 text-sm font-bold tracking-widest text-stone-400 uppercase">
									Phone
								</h3>
								<p>
									<a
										href="tel:+12626422670"
										className="text-etbrew-teal font-semibold hover:underline"
									>
										(262) 642-2670
									</a>
								</p>
							</div>

							<div className="border-t border-stone-100 pt-5">
								<h3 className="mb-1.5 text-sm font-bold tracking-widest text-stone-400 uppercase">
									Email
								</h3>
								<p>
									<a
										href="mailto:info@etbrew.com"
										className="text-etbrew-teal font-semibold hover:underline"
									>
										info@etbrew.com
									</a>
								</p>
							</div>
						</div>

						<h2 className="mt-14 mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Reservations
						</h2>
						<div className="text-lg leading-relaxed text-stone-700">
							<p className="mb-4">
								Reservations are available for{" "}
								<strong className="text-stone-900">
									parties of 8 or more.
								</strong>
							</p>
							<p className="mb-6">
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
							<p className="rounded-xs border-l-3 border-stone-300 bg-white p-5 text-base text-stone-600 italic shadow-xs">
								Walk-ins are always welcome. You can grab a
								drink at the bar if you&apos;re waiting to dine
								with us.
							</p>
						</div>
					</div>

					{/* Right Col: Hours & Parking */}
					<div>
						<h2 className="mb-8 font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Hours of Operation
						</h2>
						<HoursLedger showBanner />

						<h2 className="mt-14 mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Parking &amp; Getting Here
						</h2>
						<div className="border-etbrew-gold space-y-4 rounded-xs border-t-4 bg-white p-6 text-base leading-relaxed text-stone-700 shadow-md sm:p-8">
							<p>
								Find us on the{" "}
								<strong className="text-stone-900">
									south side of the Historic East Troy Village
									Square
								</strong>{" "}
								inside the 1892 State Bank building—just 2
								minutes west of{" "}
								<strong className="text-stone-900">
									I-43 Exit 38
								</strong>{" "}
								(Hwy 20 / Main St).
							</p>
							<p className="text-stone-600">
								Free angled parking is available directly around
								East Troy Village Square Park, along Main,
								Division, and Church Streets, and in public
								village parking just steps off the Square.
							</p>
						</div>
					</div>
				</div>

				{/* Interactive Map */}
				<div>
					<div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
						<div>
							<p className="text-etbrew-gold mb-1.5 text-xs font-bold tracking-[0.2em] uppercase">
								Historic Village Square
							</p>
							<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
								Find Us On The Map
							</h2>
						</div>
						<p className="text-sm text-stone-500">
							2905 Main St, East Troy, WI 53120
						</p>
					</div>

					<div className="border-etbrew-gold overflow-hidden rounded-xs border-t-4 bg-white p-2 shadow-md sm:p-3">
						<div className="relative h-[340px] w-full overflow-hidden rounded-xs bg-stone-100 sm:h-[420px]">
							<iframe
								title="Map showing East Troy Brewery at 2905 Main St, East Troy, WI 53120"
								src="https://www.google.com/maps?q=East+Troy+Brewery,+2905+Main+St,+East+Troy,+WI+53120&z=16&output=embed"
								className="h-full w-full border-0"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
