"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

export default function Header({
	transparent = false,
}: {
	transparent?: boolean;
}) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	// Keep --header-height synced with actual sticky header height so secondary
	// sticky elements (like MenuTabs) dock flush without pixel guesswork.
	useEffect(() => {
		const el = headerRef.current;
		if (!el) return;

		const updateHeight = () => {
			document.documentElement.style.setProperty(
				"--header-height",
				`${el.offsetHeight}px`,
			);
		};

		updateHeight();
		const observer = new ResizeObserver(updateHeight);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	// Close the mobile menu automatically when navigating
	const closeMenu = () => setIsMobileMenuOpen(false);

	// If the header is transparent (homepage hero) we use white text, UNLESS the mobile menu is open.
	// If mobile menu is open, we force the nav base to be solid white so it matches the dropdown.
	const isSolid = !transparent || isMobileMenuOpen;

	// Dynamic classes based on solid state
	const headerClass = transparent
		? "absolute top-0 left-0 w-full z-50"
		: "bg-white/98 backdrop-blur-sm shadow-sm border-b border-stone-200/80 sticky top-0 w-full z-50";
	const navLinkClass = isSolid ? "text-stone-800" : "text-white";
	const topBarClass = transparent
		? "bg-transparent text-white border-b border-white/20"
		: "bg-etbrew-gold text-white";
	const logoTextClass = isSolid ? "text-stone-800" : "text-white";

	return (
		<header ref={headerRef} className={headerClass}>
			{/* Top Bar */}
			<div
				className={`${topBarClass} relative z-50 flex items-center justify-between px-4 py-2 font-sans text-xs font-medium tracking-wide transition-colors sm:text-sm md:px-8`}
			>
				<div className="flex items-center gap-2 sm:gap-4">
					<Link href="/visit-us" className="hover:underline">
						2905 Main St, East Troy, WI
					</Link>
					<span className="hidden opacity-60 sm:inline">|</span>
					<a
						href="tel:2626422670"
						className="hidden border-none hover:underline sm:inline"
					>
						(262) 642-2670
					</a>
				</div>
				<div className="flex items-center gap-2 sm:gap-4">
					<Link
						href="/sms"
						className="whitespace-nowrap hover:underline"
					>
						SMS Alerts
					</Link>
					<span className="hidden opacity-60 md:inline">|</span>
					<SocialLinks
						className="hidden items-center gap-3.5 md:flex"
						iconClassName="h-4 w-4"
					/>
				</div>
			</div>

			{/* Main Navigation Bar */}
			<div
				className={`relative z-50 container mx-auto flex items-center justify-between px-4 py-4 transition-colors ${transparent && isMobileMenuOpen ? "bg-white" : ""}`}
			>
				<Link
					href="/"
					onClick={closeMenu}
					className={`hover:text-etbrew-gold font-serif text-xl leading-9 tracking-widest whitespace-nowrap uppercase transition-colors sm:text-2xl md:text-3xl ${logoTextClass}`}
				>
					East Troy Brewery
				</Link>

				{/* Desktop Nav */}
				<nav
					className={`hidden items-center gap-5 font-sans text-xs font-bold tracking-wider xl:flex 2xl:gap-6 2xl:text-sm ${navLinkClass}`}
				>
					<Link
						href="/"
						className="hover:text-etbrew-gold py-4 transition-colors"
					>
						HOME
					</Link>

					{/* Menus Dropdown */}
					<div className="group relative">
						<Link
							href="/menus"
							className="hover:text-etbrew-gold flex items-center gap-1 py-4 transition-colors"
						>
							MENUS
							<svg
								className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</Link>
						{/* Wrapper with padding top (pt-2) to bridge the hover gap */}
						<div className="absolute top-full left-0 z-50 hidden min-w-[200px] pt-2 group-hover:block">
							<div className="border-etbrew-gold flex flex-col overflow-hidden rounded-b-xs border-t-4 bg-white text-sm text-stone-800 shadow-xl ring-1 ring-black/5">
								<Link
									href="/menus/food"
									className="hover:text-etbrew-gold border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50"
								>
									Food
								</Link>
								<Link
									href="/menus/drafts"
									className="hover:text-etbrew-gold border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50"
								>
									Beers
								</Link>
								<Link
									href="/menus/cocktails"
									className="hover:text-etbrew-gold px-5 py-3 transition-colors hover:bg-stone-50"
								>
									Cocktails &amp; More
								</Link>
							</div>
						</div>
					</div>

					{/* Events Dropdown */}
					<div className="group relative">
						<Link
							href="/events"
							className="hover:text-etbrew-gold flex items-center gap-1 py-4 transition-colors"
						>
							EVENTS
							<svg
								className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</Link>
						{/* Wrapper with padding top (pt-2) to bridge the hover gap */}
						<div className="absolute top-full left-0 z-50 hidden min-w-[200px] pt-2 group-hover:block">
							<div className="border-etbrew-gold flex flex-col overflow-hidden rounded-b-xs border-t-4 bg-white text-sm text-stone-800 shadow-xl ring-1 ring-black/5">
								<Link
									href="/events"
									className="hover:text-etbrew-gold border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-50"
								>
									Brewery Events
								</Link>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-etbrew-gold px-5 py-3 transition-colors hover:bg-stone-50"
								>
									Private Parties
								</a>
							</div>
						</div>
					</div>

					<Link
						href="/mug-club"
						className="hover:text-etbrew-gold py-4 transition-colors"
					>
						MUG CLUB
					</Link>
					<Link
						href="/about"
						className="hover:text-etbrew-gold py-4 transition-colors"
					>
						ABOUT US
					</Link>
					<Link
						href="/gift-cards"
						className="hover:text-etbrew-gold py-4 transition-colors"
					>
						GIFT CARDS
					</Link>
					<Link
						href="/visit-us"
						className="hover:text-etbrew-gold py-4 transition-colors"
					>
						VISIT US
					</Link>
					<Button
						href="https://www.toasttab.com/east-troy-brewery/v3"
						target="_blank"
						variant="gold"
						className="ml-1 px-5 py-2.5 text-xs 2xl:px-6 2xl:py-3 2xl:text-sm"
					>
						Order Online
					</Button>
				</nav>

				{/* Mobile Hamburger Button */}
				<button
					className={`cursor-pointer p-1 transition-colors xl:hidden ${logoTextClass}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
					aria-expanded={isMobileMenuOpen}
				>
					<svg
						className="h-8 w-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{isMobileMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Navigation Menu Dropdown */}
			{isMobileMenuOpen && (
				<div className="border-etbrew-gold absolute top-full left-0 z-40 flex max-h-[calc(100svh-var(--header-height,104px))] w-full flex-col overflow-y-auto border-t-4 bg-white font-sans text-sm font-bold tracking-wider text-stone-800 shadow-2xl xl:hidden">
					<Link
						href="/"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						HOME
					</Link>

					<div className="border-b border-stone-100 bg-stone-50/60 px-6 py-4">
						<div className="mb-2.5 text-xs tracking-widest text-stone-400">
							MENUS
						</div>
						<div className="flex flex-col gap-3 pl-4">
							<Link
								href="/menus/food"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Food
							</Link>
							<Link
								href="/menus/drafts"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Beers
							</Link>
							<Link
								href="/menus/cocktails"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Cocktails &amp; More
							</Link>
						</div>
					</div>

					<div className="border-b border-stone-100 bg-stone-50/60 px-6 py-4">
						<div className="mb-2.5 text-xs tracking-widest text-stone-400">
							EVENTS
						</div>
						<div className="flex flex-col gap-3 pl-4">
							<Link
								href="/events"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Brewery Events
							</Link>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform"
								target="_blank"
								rel="noopener noreferrer"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Private Parties
							</a>
						</div>
					</div>

					<Link
						href="/mug-club"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						MUG CLUB
					</Link>
					<Link
						href="/about"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						ABOUT US
					</Link>
					<Link
						href="/gift-cards"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						GIFT CARDS
					</Link>
					<Link
						href="/visit-us"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						VISIT US
					</Link>

					<div className="p-6">
						<Button
							href="https://www.toasttab.com/east-troy-brewery/v3"
							target="_blank"
							variant="gold"
							className="w-full text-center"
						>
							Order Online
						</Button>

						<div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-5 text-xs font-medium text-stone-500">
							<a
								href="tel:2626422670"
								className="hover:text-etbrew-gold font-semibold text-stone-700"
							>
								(262) 642-2670
							</a>
							<SocialLinks
								className="flex items-center gap-4 text-stone-600"
								iconClassName="h-5 w-5"
							/>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
