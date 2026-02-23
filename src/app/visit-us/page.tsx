import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Visit Us",
	description:
		"Directions, hours, and reservation information for East Troy Brewery.",
};

export default function VisitUs() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			{/* Page Header */}
			<section className="border-etbrew-gold border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
					Visit Us
				</h1>
				<div className="bg-etbrew-gold mx-auto mb-6 h-1 w-24"></div>
			</section>

			{/* Content */}
			<section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-4 py-24 md:grid-cols-2">
				{/* Left Col: Info */}
				<div>
					<h2 className="mb-8 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Location & Contact
					</h2>

					<div className="border-etbrew-gold space-y-6 border-l-4 bg-white p-8 text-lg text-stone-700 shadow-md">
						<div>
							<h3 className="mb-2 text-xl font-bold tracking-wider text-stone-900 uppercase">
								Address
							</h3>
							<p>2905 Main St.</p>
							<p>East Troy, WI 53120</p>
						</div>

						<div>
							<h3 className="mb-2 text-xl font-bold tracking-wider text-stone-900 uppercase">
								Phone
							</h3>
							<p>
								<a
									href="tel:+12626422670"
									className="text-etbrew-teal hover:underline"
								>
									(262) 642-2670
								</a>
							</p>
						</div>

						<div>
							<h3 className="mb-2 text-xl font-bold tracking-wider text-stone-900 uppercase">
								Email
							</h3>
							<p>
								<a
									href="mailto:info@etbrew.com"
									className="text-etbrew-teal hover:underline"
								>
									info@etbrew.com
								</a>
							</p>
						</div>
					</div>

					<h2 className="mt-16 mb-8 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Reservations
					</h2>
					<div className="text-lg leading-relaxed text-stone-700">
						<p className="mb-4">
							Reservations are available for{" "}
							<strong>parties of 8 or more.</strong>
						</p>
						<p className="mb-4">
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
						<p className="border-l-4 border-stone-300 bg-stone-100 p-4 italic">
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

					<div className="border-etbrew-teal space-y-6 border-t-8 bg-white p-8 text-lg text-stone-700 shadow-md">
						<div>
							<h4 className="text-etbrew-gold mb-1 font-bold tracking-wider uppercase">
								Monday
							</h4>
							<p>4pm - 8pm (SUPPER CLUB MENU)</p>
						</div>

						<div className="border-t border-stone-100 pt-4">
							<h4 className="mb-1 font-bold tracking-wider text-stone-400 uppercase">
								Tuesday
							</h4>
							<p>CLOSED</p>
						</div>

						<div className="border-t border-stone-100 pt-4">
							<h4 className="text-etbrew-teal mb-1 font-bold tracking-wider uppercase">
								Wednesday & Thursday
							</h4>
							<p>Bar open 4pm - 9pm</p>
							<p className="text-stone-500">
								Food service 4pm - 8pm
							</p>
						</div>

						<div className="border-t border-stone-100 pt-4">
							<h4 className="text-etbrew-teal mb-1 font-bold tracking-wider uppercase">
								Friday
							</h4>
							<p>Bar open 4pm - 10pm</p>
							<p className="text-stone-500">
								Food Service 4pm - 9pm
							</p>
						</div>

						<div className="border-t border-stone-100 pt-4">
							<h4 className="text-etbrew-teal mb-1 font-bold tracking-wider uppercase">
								Saturday
							</h4>
							<p>Bar open 11:30am - 10pm</p>
							<p className="text-stone-500">
								Food service 11:30am - 9pm
							</p>
						</div>

						<div className="border-t border-stone-100 pt-4">
							<h4 className="text-etbrew-teal mb-1 font-bold tracking-wider uppercase">
								Sunday
							</h4>
							<p>11:30am - 4pm</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
