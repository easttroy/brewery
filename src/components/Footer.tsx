import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
	return (
		<footer className="border-etbrew-gold border-t-4 bg-stone-900 py-14 font-sans text-stone-400">
			<div className="container mx-auto grid grid-cols-1 gap-10 px-4 text-center md:grid-cols-3 md:gap-12 md:text-left">
				{/* Column 1: Brand & Contact */}
				<div>
					<h3 className="mb-4 font-serif text-xl tracking-wider text-white uppercase">
						East Troy Brewery
					</h3>
					<p className="mb-1 text-stone-300">2905 Main St</p>
					<p className="mb-4 text-stone-300">East Troy, WI 53120</p>
					<p className="mb-1">
						<a
							href="tel:2626422670"
							className="hover:text-etbrew-gold-bright transition-colors"
						>
							(262) 642-2670
						</a>
					</p>
					<p>
						<a
							href="mailto:info@etbrew.com"
							className="hover:text-etbrew-gold-bright text-sm transition-colors"
						>
							info@etbrew.com
						</a>
					</p>
					<SocialLinks
						className="mt-6 flex items-center justify-center gap-4 text-stone-400 md:justify-start"
						iconClassName="h-5 w-5"
					/>
				</div>

				{/* Column 2: Quick Links */}
				<div>
					<h3 className="mb-4 font-serif text-xl tracking-wider text-white uppercase">
						Quick Links
					</h3>
					<ul className="mx-auto grid max-w-xs grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:mx-0">
						<li>
							<Link
								href="/"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/menus/food"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Food Menu
							</Link>
						</li>
						<li>
							<Link
								href="/menus/drafts"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Beer Menu
							</Link>
						</li>
						<li>
							<Link
								href="/menus/cocktails"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Cocktails
							</Link>
						</li>
						<li>
							<Link
								href="/events"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Events
							</Link>
						</li>
						<li>
							<Link
								href="/mug-club"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Mug Club
							</Link>
						</li>
						<li>
							<Link
								href="/gift-cards"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Gift Cards
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/visit-us"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								Visit Us
							</Link>
						</li>
						<li>
							<Link
								href="/sms"
								className="hover:text-etbrew-gold-bright transition-colors"
							>
								SMS Alerts
							</Link>
						</li>
					</ul>
				</div>

				{/* Column 3: Hours */}
				<div>
					<h3 className="mb-4 font-serif text-xl tracking-wider text-white uppercase">
						Hours
					</h3>
					<ul className="space-y-3 text-sm">
						<li>
							<span className="font-bold text-stone-200">
								Monday:
							</span>{" "}
							11:30am - 8:00pm
						</li>
						<li className="text-stone-500 italic">
							Tuesday: Closed
						</li>
						<li>
							<span className="block font-bold text-stone-200">
								Wednesday &amp; Thursday
							</span>
							<span>
								Bar: 11:30am - 9:00pm &middot; Kitchen: 11:30am
								- 8:00pm
							</span>
						</li>
						<li>
							<span className="block font-bold text-stone-200">
								Friday &amp; Saturday
							</span>
							<span>
								Bar: 11:30am - 10:00pm &middot; Kitchen: 11:30am
								- 9:00pm
							</span>
						</li>
						<li>
							<span className="font-bold text-stone-200">
								Sunday:
							</span>{" "}
							11:30am - 7:00pm
						</li>
					</ul>
				</div>
			</div>

			<div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-stone-800 pt-8 text-center text-xs text-stone-500 sm:flex-row sm:gap-4 sm:text-sm">
				<span>
					&copy; {new Date().getFullYear()} East Troy Brewery. All
					rights reserved.
				</span>
				<span className="hidden text-stone-700 sm:inline">|</span>
				<div className="flex gap-4">
					<Link
						href="/terms-and-conditions"
						className="hover:text-etbrew-gold-bright transition-colors"
					>
						Terms &amp; Conditions
					</Link>
					<Link
						href="/privacy-policy"
						className="hover:text-etbrew-gold-bright transition-colors"
					>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
}
