import { Metadata } from "next";
import HoursLedger from "@/components/HoursLedger";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "Visit Us",
	description:
		"Directions, hours, and reservation information for East Troy Brewery.",
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
			<section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-4 py-20 md:grid-cols-2">
				{/* Left Col: Info */}
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
							<p className="text-stone-600">
								East Troy, WI 53120
							</p>
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
							Walk-ins are always welcome. You can grab a drink at
							the bar if you&apos;re waiting to dine with us.
						</p>
					</div>
				</div>

				{/* Right Col: Hours */}
				<div>
					<h2 className="mb-8 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Hours of Operation
					</h2>
					<HoursLedger showBanner />
				</div>
			</section>
		</div>
	);
}
