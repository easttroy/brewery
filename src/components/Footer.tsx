import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-etbrew-gold border-t-4 bg-stone-900 py-12 font-sans text-stone-400">
			<div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:text-left">
				{/* Column 1 */}
				<div>
					<h3 className="mb-4 font-serif text-xl text-white">
						East Troy Brewery
					</h3>
					<p className="mb-2">2905 Main St</p>
					<p className="mb-2">East Troy, WI 53120</p>
					<p className="mt-4">
						<a
							href="tel:2626422670"
							className="hover:text-etbrew-gold transition-colors"
						>
							(262) 642-2670
						</a>
					</p>
				</div>

				{/* Column 2 */}
				<div>
					<h3 className="mb-4 font-serif text-xl text-white">
						Quick Links
					</h3>
					<ul className="space-y-2">
						<li>
							<Link
								href="/"
								className="hover:text-etbrew-gold transition-colors"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/menus"
								className="hover:text-etbrew-gold transition-colors"
							>
								Menus
							</Link>
						</li>
						<li>
							<Link
								href="/events"
								className="hover:text-etbrew-gold transition-colors"
							>
								Events
							</Link>
						</li>
						<li>
							<Link
								href="/mug-club"
								className="hover:text-etbrew-gold transition-colors"
							>
								Mug Club
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-etbrew-gold transition-colors"
							>
								About Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Column 3 */}
				<div>
					<h3 className="mb-4 font-serif text-xl text-white">
						Hours
					</h3>
					<ul className="space-y-4 text-sm">
						<li>
							<span className="mb-1 block font-bold text-white">
								Monday
							</span>
							4pm - 8pm (SUPPER CLUB)
						</li>
						<li>
							<span className="mb-1 block font-bold text-white">
								Wednesday & Thursday
							</span>
							Bar: 4pm - 9pm
							<br />
							Food: 4pm - 8pm
						</li>
						<li>
							<span className="mb-1 block font-bold text-white">
								Friday
							</span>
							Bar: 4pm - 10pm
							<br />
							Food: 4pm - 9pm
						</li>
						<li>
							<span className="mb-1 block font-bold text-white">
								Saturday
							</span>
							Bar: 11:30am - 10pm
							<br />
							Food: 11:30am - 9pm
						</li>
						<li>
							<span className="mb-1 block font-bold text-white">
								Sunday
							</span>
							11:30am - 4pm
						</li>
						<li className="text-stone-500 italic">
							Closed Tuesdays
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-stone-800 pt-8 text-center text-sm sm:flex-row sm:gap-4">
				<span>
					&copy; {new Date().getFullYear()} East Troy Brewery. All
					rights reserved.
				</span>
				<span className="hidden text-stone-600 sm:inline">|</span>
				<div className="flex gap-4">
					<Link
						href="/terms-and-conditions"
						className="hover:text-etbrew-gold transition-colors"
					>
						Terms &amp; Conditions
					</Link>
					<Link
						href="/privacy-policy"
						className="hover:text-etbrew-gold transition-colors"
					>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer >
	);
}
