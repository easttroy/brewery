"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Header({
	transparent = false,
}: {
	transparent?: boolean;
}) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Close the mobile menu automatically when navigating
	const closeMenu = () => setIsMobileMenuOpen(false);

	// If the header is transparent (homepage hero) we use white text, UNLESS the mobile menu is open.
	// If mobile menu is open, we force the nav base to be solid white so it matches the dropdown.
	const isSolid = !transparent || isMobileMenuOpen;

	// Dynamic classes based on solid state
	const headerClass = transparent
		? "absolute top-0 left-0 w-full z-50"
		: "bg-white shadow-md sticky top-0 w-full z-50";
	const navLinkClass = isSolid
		? "text-stone-800 hover:text-etbrew-gold"
		: "text-white hover:text-etbrew-gold";
	const topBarClass = transparent
		? "bg-transparent text-white border-b border-white/20"
		: "bg-etbrew-gold text-white";
	const logoTextClass = isSolid ? "text-stone-800" : "text-white";

	return (
		<header className={headerClass}>
			{/* Top Bar */}
			<div
				className={`${topBarClass} relative z-50 flex items-center justify-between px-4 py-2 font-sans text-xs transition-colors sm:text-sm md:px-8`}
			>
				<div className="flex gap-2 sm:gap-4">
					<span>2905 Main St, East Troy, WI</span>
					<span className="hidden md:inline">|</span>
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
					<span className="hidden md:inline">|</span>
					<div className="hidden items-center gap-3 md:flex">
						<a
							href="https://www.facebook.com/ETBrew/"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-opacity hover:opacity-75"
							aria-label="Facebook"
						>
							<svg
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</a>
						<a
							href="https://www.instagram.com/easttroybrewery/"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-opacity hover:opacity-75"
							aria-label="Instagram"
						>
							<svg
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
							</svg>
						</a>
						<a
							href="https://untappd.com/EastTroyBrewery"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-opacity hover:opacity-75"
							aria-label="Untappd"
						>
							<svg
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M11.655 4.36l.6-1.2c.3-.5.1-1.1-.4-1.4l-1.5-.8c-.5-.3-1.1-.1-1.4.4l-.6 1.2 3.3 1.8zm4.308 2.39l.6-1.2c.3-.5.1-1.1-.4-1.4l-1.5-.8c-.5-.3-1.1-.1-1.4.4l-.6 1.2 3.3 1.8zM17.2 9.6l-4.2-2.3-1.2 2.3c-.7 1.3-2.2 2.1-3.7 2.1-.5 0-.9-.1-1.4-.2-1.9-.7-3-2.7-2.5-4.7l.1-.3-2.8-1.5c-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4l2.8 1.5.1-.1c.8-1.2 2.2-1.9 3.6-1.7l1.2-2.3L6.5 0C5 .8 4.4 2.6 5 4.1l-3.1 5.9c-1.4 2.7-.4 6 2.3 7.4l3.8 2.1c2.7 1.4 6 .4 7.4-2.3l3.1-5.9c.8-1.5.1-3.3-1.3-3.7zm.6 3.1l-3.1 5.9c-1 1.9-3.3 2.7-5.3 1.7l-3.8-2.1c-1.9-1-2.7-3.3-1.7-5.3l3.1-5.9c.4-.7 1-1.2 1.7-1.5l-1.1 2.1c-.3.5-.1 1.1.4 1.4.2.1.3.1.5.1.4 0 .7-.2.9-.5l1.1-2.1c.9.1 1.7.7 2.1 1.5l-1.1 2.1c-.3.5-.1 1.1.4 1.4.2.1.3.1.5.1.4 0 .7-.2.9-.5l1.1-2.1c.6.6.8 1.5.4 2.7z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			{/* Main Navigation Bar */}
			<div
				className={`relative z-50 container mx-auto flex items-center justify-between px-4 py-4 transition-colors ${transparent && isMobileMenuOpen ? "bg-white" : ""}`}
			>
				<Link
					href="/"
					onClick={closeMenu}
					className={`font-serif text-3xl tracking-widest uppercase ${logoTextClass}`}
				>
					East Troy Brewery
				</Link>

				{/* Desktop Nav */}
				<nav
					className={`hidden items-center gap-6 font-sans text-sm font-bold tracking-wider xl:flex ${navLinkClass}`}
				>
					<Link href="/" className="py-4 transition-colors">
						HOME
					</Link>

					{/* Menus Dropdown */}
					<div className="group relative">
						<Link
							href="/our-food-menu"
							className="flex items-center gap-1 py-4 transition-colors"
						>
							MENUS
							<svg
								className="h-4 w-4"
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
							<div className="border-etbrew-gold flex flex-col overflow-hidden rounded-b border-t-4 bg-white text-stone-800 shadow-xl">
								<Link
									href="/our-food-menu"
									className="border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-100"
								>
									Food Menu
								</Link>
								<Link
									href="/our-drink-menu"
									className="border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-100"
								>
									Our Beers
								</Link>
								<Link
									href="/our-cocktail-menu"
									className="px-5 py-3 transition-colors hover:bg-stone-100"
								>
									Cocktails & Wine
								</Link>
							</div>
						</div>
					</div>

					{/* Events Dropdown */}
					<div className="group relative">
						<Link
							href="/events"
							className="flex items-center gap-1 py-4 transition-colors"
						>
							EVENTS
							<svg
								className="h-4 w-4"
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
							<div className="border-etbrew-gold flex flex-col overflow-hidden rounded-b border-t-4 bg-white text-stone-800 shadow-xl">
								<Link
									href="/events"
									className="border-b border-stone-100 px-5 py-3 transition-colors hover:bg-stone-100"
								>
									Brewery Events
								</Link>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform"
									target="_blank"
									rel="noopener noreferrer"
									className="px-5 py-3 transition-colors hover:bg-stone-100"
								>
									Private Parties
								</a>
							</div>
						</div>
					</div>

					<Link href="/mug-club" className="py-4 transition-colors">
						MUG CLUB
					</Link>
					<Link href="/about" className="py-4 transition-colors">
						ABOUT US
					</Link>
					<a
						href="https://www.toasttab.com/east-troy-brewery/giftcards?utmCampaign=onlineOrdering"
						target="_blank"
						rel="noopener noreferrer"
						className="py-4 transition-colors"
					>
						GIFT CARDS
					</a>
					<Button
						href="https://www.toasttab.com/east-troy-brewery/v3"
						target="_blank"
						variant="gold"
					>
						Order Online
					</Button>
				</nav>

				{/* Mobile Hamburger Button */}
				<button
					className={`transition-colors xl:hidden ${logoTextClass}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
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
				<div className="border-etbrew-gold absolute top-full left-0 z-40 flex w-full flex-col border-t-4 bg-white font-sans text-sm font-bold tracking-wider text-stone-800 shadow-xl xl:hidden">
					<Link
						href="/"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						HOME
					</Link>

					<div className="border-b border-stone-100 bg-stone-50/50 px-6 py-4">
						<div className="mb-2 text-xs text-stone-400">MENUS</div>
						<div className="flex flex-col gap-3 pl-4">
							<Link
								href="/our-food-menu"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Food Menu
							</Link>
							<Link
								href="/our-drink-menu"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Our Beers
							</Link>
							<Link
								href="/our-cocktail-menu"
								onClick={closeMenu}
								className="hover:text-etbrew-gold"
							>
								Cocktails & Wine
							</Link>
						</div>
					</div>

					<div className="border-b border-stone-100 bg-stone-50/50 px-6 py-4">
						<div className="mb-2 text-xs text-stone-400">
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
					<a
						href="https://www.toasttab.com/east-troy-brewery/giftcards?utmCampaign=onlineOrdering"
						target="_blank"
						rel="noopener noreferrer"
						onClick={closeMenu}
						className="border-b border-stone-100 px-6 py-4 hover:bg-stone-50"
					>
						GIFT CARDS
					</a>

					<div className="p-6">
						<Button
							href="https://www.toasttab.com/east-troy-brewery/v3"
							target="_blank"
							variant="gold"
							className="w-full text-center"
						>
							Order Online
						</Button>
					</div>
				</div>
			)}
		</header>
	);
}
