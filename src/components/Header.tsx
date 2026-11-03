"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTaproomStatus } from "@/lib/hours";
import { TOAST_ORDER_URL, useOrderingOpen } from "@/lib/ordering";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

export default function Header({
	transparent = false,
}: {
	transparent?: boolean;
}) {
	const headerRef = useRef<HTMLElement>(null);
	const isOrderingOpen = useOrderingOpen();
	const taproomStatus = useTaproomStatus();

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

	const isSolid = !transparent;

	const headerClass = transparent
		? "absolute top-0 left-0 w-full z-50"
		: "border-t-3 border-t-etbrew-gold lg:border-t-0 bg-white/95 backdrop-blur-md shadow-xs border-b border-b-stone-200/80 sticky top-0 w-full z-50 pt-[env(safe-area-inset-top)]";
	const navLinkClass = isSolid ? "text-stone-800" : "text-white";
	const topBarClass = transparent
		? "bg-transparent text-white border-b border-white/20"
		: "bg-etbrew-gold text-white";
	const logoTextClass = isSolid ? "text-stone-800" : "text-white";

	return (
		<header ref={headerRef} className={headerClass}>
			{/* Desktop Top Utility Bar */}
			<div
				className={`${topBarClass} relative z-50 hidden items-center justify-between px-4 py-2 font-sans text-xs font-medium tracking-wide transition-colors lg:flex lg:px-8`}
			>
				<div className="flex items-center gap-4">
					<Link href="/visit-us" className="hover:underline">
						2905 Main St, East Troy, WI
					</Link>
					<span className="opacity-60">|</span>
					<a
						href="tel:2626422670"
						className="border-none hover:underline"
					>
						(262) 642-2670
					</a>
				</div>
				<div className="flex items-center gap-4">
					{taproomStatus && (
						<>
							<Link
								href="/visit-us"
								title={`${taproomStatus.label} - ${taproomStatus.detail}`}
								className={`inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase shadow-2xs transition-opacity hover:opacity-90 ${
									taproomStatus.isOpen
										? "text-emerald-700"
										: "text-stone-600"
								}`}
							>
								<span
									aria-hidden="true"
									className={`h-2 w-2 rounded-full ${
										taproomStatus.isOpen
											? "bg-emerald-500"
											: "bg-stone-400"
									}`}
								/>
								{taproomStatus.isOpen ? "Open" : "Closed"}
							</Link>
							<span className="opacity-60">|</span>
						</>
					)}
					<Link
						href="/sms"
						className="whitespace-nowrap hover:underline"
					>
						SMS Alerts
					</Link>
					<span className="opacity-60">|</span>
					<SocialLinks
						className="flex items-center gap-3.5"
						iconClassName="h-4 w-4"
					/>
				</div>
			</div>

			{/* Main App / Navigation Bar */}
			<div className="relative z-50 container mx-auto flex h-14 items-center justify-between px-4 lg:h-auto lg:py-4">
				<Link
					href="/"
					className={`hover:text-etbrew-gold font-serif text-lg leading-none tracking-[0.14em] whitespace-nowrap uppercase transition-colors sm:text-xl lg:text-xl lg:leading-9 lg:tracking-widest xl:text-2xl 2xl:text-3xl ${logoTextClass}`}
				>
					East Troy Brewery
				</Link>

				{/* Mobile / Tablet Compact App Actions (paired with bottom MobileNav) */}
				<div className="flex items-center gap-2 lg:hidden">
					{taproomStatus && (
						<Link
							href="/visit-us"
							title={`${taproomStatus.label} - ${taproomStatus.detail}`}
							className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] leading-none font-bold tracking-wider uppercase transition-transform active:scale-95 ${
								taproomStatus.isOpen
									? "border-emerald-600/25 bg-emerald-50 text-emerald-800"
									: "border-stone-200/90 bg-stone-100 text-stone-600"
							}`}
						>
							<span
								aria-hidden="true"
								className={`h-1.5 w-1.5 rounded-full ${
									taproomStatus.isOpen
										? "bg-emerald-500"
										: "bg-stone-400"
								}`}
							/>
							{taproomStatus.isOpen ? "Open" : "Closed"}
						</Link>
					)}
					<a
						href="tel:2626422670"
						aria-label="Call East Troy Brewery"
						className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200/90 text-stone-600 transition-transform active:scale-95"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.85}
							className="h-4 w-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
							/>
						</svg>
					</a>
					{isOrderingOpen && (
						<a
							href={TOAST_ORDER_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-etbrew-gold hover:bg-etbrew-gold-hover rounded-xs px-3 py-1.5 font-sans text-[11px] font-bold tracking-wider text-white uppercase shadow-2xs transition-all active:scale-95"
						>
							Order
						</a>
					)}
				</div>

				{/* Desktop Nav */}
				<nav
					className={`hidden items-center gap-4 font-sans text-xs font-bold tracking-wider lg:flex xl:gap-5 2xl:gap-6 2xl:text-sm ${navLinkClass}`}
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
					{isOrderingOpen && (
						<Button
							href={TOAST_ORDER_URL}
							target="_blank"
							variant="gold"
							className="ml-1 px-4 py-2.5 text-xs xl:px-5 2xl:px-6 2xl:py-3 2xl:text-sm"
						>
							Order Online
						</Button>
					)}
				</nav>
			</div>
		</header>
	);
}
