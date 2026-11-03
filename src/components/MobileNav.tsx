"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { TOAST_ORDER_URL, useOrderingOpen } from "@/lib/ordering";
import SocialLinks from "./SocialLinks";

const MORE_PATHS = [
	"/mug-club",
	"/gift-cards",
	"/about",
	"/sms",
	"/privacy-policy",
	"/terms-and-conditions",
];

export default function MobileNav() {
	const pathname = usePathname();
	const [isMoreOpen, setIsMoreOpen] = useState(false);
	const isOrderingOpen = useOrderingOpen();

	const closeMore = useCallback(() => setIsMoreOpen(false), []);

	// Lock body scroll while the More sheet is open.
	useEffect(() => {
		if (!isMoreOpen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [isMoreOpen]);

	// Close More sheet on Escape key.
	useEffect(() => {
		if (!isMoreOpen) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeMore();
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [isMoreOpen, closeMore]);

	const normPath = pathname?.replace(/\/$/, "") || "/";

	const isHomeActive = !isMoreOpen && normPath === "/";
	const isMenusActive = !isMoreOpen && normPath.startsWith("/menus");
	const isEventsActive = !isMoreOpen && normPath.startsWith("/events");
	const isVisitActive = !isMoreOpen && normPath.startsWith("/visit-us");
	const isMoreRoute = MORE_PATHS.some((p) => normPath.startsWith(p));
	const isMoreActive = isMoreOpen || isMoreRoute;

	const handleTabClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		alreadyInSection: boolean,
	) => {
		closeMore();
		if (alreadyInSection) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<>
			{/* Slide-Up "More" Sheet Backdrop */}
			<div
				onClick={closeMore}
				aria-hidden="true"
				className={`fixed inset-0 z-[55] bg-stone-950/60 backdrop-blur-xs transition-opacity duration-250 lg:hidden ${
					isMoreOpen ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
			/>

			{/* Slide-Up "More" Bottom Sheet */}
			<div
				role="dialog"
				aria-modal="true"
				aria-label="More navigation and actions"
				aria-hidden={!isMoreOpen}
				className={`border-etbrew-gold fixed inset-x-0 bottom-0 z-[60] max-h-[85svh] overflow-y-auto rounded-t-2xl border-t-3 bg-stone-50 px-5 pt-3 pb-[calc(1.25rem+env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
					isMoreOpen
						? "translate-y-0"
						: "pointer-events-none translate-y-full"
				}`}
			>
				{/* Drag handle visual cue */}
				<div className="mx-auto mb-3 h-1 w-10 rounded-full bg-stone-300" />

				{/* Sheet Header */}
				<div className="mb-4 flex items-center justify-between">
					<div>
						<p className="text-etbrew-gold text-[10px] font-bold tracking-[0.2em] uppercase">
							East Troy Brewery
						</p>
						<h2 className="font-serif text-xl tracking-wide text-stone-800 uppercase">
							More &amp; Quick Actions
						</h2>
					</div>
					<button
						onClick={closeMore}
						aria-label="Close menu"
						className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-stone-200/80 text-stone-600 transition-colors hover:bg-stone-300 active:scale-95"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							className="h-5 w-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{/* Quick Action Tiles */}
				<div className="mb-4 grid grid-cols-2 gap-3">
					{isOrderingOpen && (
						<a
							href={TOAST_ORDER_URL}
							target="_blank"
							rel="noopener noreferrer"
							onClick={closeMore}
							className="bg-etbrew-gold hover:bg-etbrew-gold-hover flex flex-col justify-between rounded-xl p-4 text-white shadow-sm transition-transform active:scale-97"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								className="mb-2.5 h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
								/>
							</svg>
							<div>
								<span className="block text-sm font-bold tracking-wide uppercase">
									Order Online
								</span>
								<span className="text-xs text-white/85">
									Carryout via Toast
								</span>
							</div>
						</a>
					)}

					<a
						href="https://maps.google.com/?q=East+Troy+Brewery+2905+Main+St+East+Troy+WI+53120"
						target="_blank"
						rel="noopener noreferrer"
						onClick={closeMore}
						className={`rounded-xl bg-stone-900 p-4 text-white shadow-sm transition-transform active:scale-97 ${
							isOrderingOpen
								? "flex flex-col justify-between"
								: "col-span-2 flex items-center justify-between"
						}`}
					>
						<div
							className={
								isOrderingOpen
									? ""
									: "flex items-center gap-3.5"
							}
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								className={`text-etbrew-gold-bright h-6 w-6 shrink-0 ${
									isOrderingOpen ? "mb-2.5" : ""
								}`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
								/>
							</svg>
							<div>
								<span className="block text-sm font-bold tracking-wide uppercase">
									Get Directions
								</span>
								<span className="text-xs text-stone-300">
									2905 Main St, East Troy, WI
								</span>
							</div>
						</div>
						{!isOrderingOpen && <ExternalArrow />}
					</a>
				</div>

				{/* Grouped Navigation List */}
				<div className="divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-xs">
					<Link
						href="/mug-club"
						onClick={closeMore}
						className="flex items-center justify-between px-4 py-3.5 transition-colors active:bg-stone-50"
					>
						<div className="flex items-center gap-3.5">
							<span className="bg-etbrew-gold/10 text-etbrew-gold flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.75}
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 7v11a2 2 0 002 2h6a2 2 0 002-2V7M16 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2M5 7h12"
									/>
								</svg>
							</span>
							<div>
								<span
									className={`block text-sm font-bold tracking-wide uppercase ${
										normPath.startsWith("/mug-club")
											? "text-etbrew-gold"
											: "text-stone-800"
									}`}
								>
									Mug Club
								</span>
								<span className="text-xs text-stone-500">
									Annual membership &amp; taproom perks
								</span>
							</div>
						</div>
						<ChevronRight />
					</Link>

					<Link
						href="/gift-cards"
						onClick={closeMore}
						className="flex items-center justify-between px-4 py-3.5 transition-colors active:bg-stone-50"
					>
						<div className="flex items-center gap-3.5">
							<span className="bg-etbrew-teal/10 text-etbrew-teal flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.75}
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
									/>
								</svg>
							</span>
							<div>
								<span
									className={`block text-sm font-bold tracking-wide uppercase ${
										normPath.startsWith("/gift-cards")
											? "text-etbrew-gold"
											: "text-stone-800"
									}`}
								>
									Gift Cards
								</span>
								<span className="text-xs text-stone-500">
									Physical cards &amp; instant Toast e-gifts
								</span>
							</div>
						</div>
						<ChevronRight />
					</Link>

					<Link
						href="/about"
						onClick={closeMore}
						className="flex items-center justify-between px-4 py-3.5 transition-colors active:bg-stone-50"
					>
						<div className="flex items-center gap-3.5">
							<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.75}
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
									/>
								</svg>
							</span>
							<div>
								<span
									className={`block text-sm font-bold tracking-wide uppercase ${
										normPath.startsWith("/about")
											? "text-etbrew-gold"
											: "text-stone-800"
									}`}
								>
									About Us
								</span>
								<span className="text-xs text-stone-500">
									Our 1892 bank building &amp; story
								</span>
							</div>
						</div>
						<ChevronRight />
					</Link>

					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform"
						target="_blank"
						rel="noopener noreferrer"
						onClick={closeMore}
						className="flex items-center justify-between px-4 py-3.5 transition-colors active:bg-stone-50"
					>
						<div className="flex items-center gap-3.5">
							<span className="bg-etbrew-gold/10 text-etbrew-gold flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.75}
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
									/>
								</svg>
							</span>
							<div>
								<span className="block text-sm font-bold tracking-wide text-stone-800 uppercase">
									Private Parties
								</span>
								<span className="text-xs text-stone-500">
									Book rehearsals, birthdays &amp; events
								</span>
							</div>
						</div>
						<ExternalArrow />
					</a>

					<Link
						href="/sms"
						onClick={closeMore}
						className="flex items-center justify-between px-4 py-3.5 transition-colors active:bg-stone-50"
					>
						<div className="flex items-center gap-3.5">
							<span className="bg-etbrew-teal/10 text-etbrew-teal flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.75}
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
									/>
								</svg>
							</span>
							<div>
								<span
									className={`block text-sm font-bold tracking-wide uppercase ${
										normPath.startsWith("/sms")
											? "text-etbrew-gold"
											: "text-stone-800"
									}`}
								>
									SMS Alerts
								</span>
								<span className="text-xs text-stone-500">
									Beer releases &amp; event text updates
								</span>
							</div>
						</div>
						<ChevronRight />
					</Link>
				</div>

				{/* Contact & Social Row */}
				<div className="mt-4 flex items-center justify-between px-1 pt-1">
					<a
						href="tel:2626422670"
						className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-2 text-xs font-bold tracking-wide text-stone-700 shadow-2xs active:scale-97"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							className="text-etbrew-teal h-4 w-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
							/>
						</svg>
						(262) 642-2670
					</a>

					<SocialLinks
						className="flex items-center gap-4 text-stone-500"
						iconClassName="h-5 w-5"
					/>
				</div>
			</div>

			{/* Fixed Native-Style Bottom Tab Bar */}
			<nav
				aria-label="Mobile navigation"
				className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200/90 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(28,25,23,0.07)] backdrop-blur-xl lg:hidden"
			>
				<div className="mx-auto grid h-[60px] max-w-lg grid-cols-5 grid-rows-[60px]">
					{/* Tab 1: Home */}
					<Link
						href="/"
						onClick={(e) => handleTabClick(e, normPath === "/")}
						className={`relative flex h-[60px] touch-manipulation flex-col items-center justify-end pb-2 select-none ${
							isHomeActive
								? "text-etbrew-gold"
								: "text-stone-500 hover:text-stone-800"
						}`}
					>
						<ActiveBar visible={isHomeActive} />
						<span className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-92">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={isHomeActive ? 2.1 : 1.75}
								className="h-[22px] w-[22px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>
							<span className="text-[10px] leading-none font-bold tracking-wider uppercase">
								Home
							</span>
						</span>
					</Link>

					{/* Tab 2: Visit (Left of Center) */}
					<Link
						href="/visit-us"
						onClick={(e) =>
							handleTabClick(e, normPath.startsWith("/visit-us"))
						}
						className={`relative flex h-[60px] touch-manipulation flex-col items-center justify-end pb-2 select-none ${
							isVisitActive
								? "text-etbrew-gold"
								: "text-stone-500 hover:text-stone-800"
						}`}
					>
						<ActiveBar visible={isVisitActive} />
						<span className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-92">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={isVisitActive ? 2.1 : 1.75}
								className="h-[22px] w-[22px]"
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
							<span className="text-[10px] leading-none font-bold tracking-wider uppercase">
								Visit
							</span>
						</span>
					</Link>

					{/* Tab 3: Menu (Raised Center Medallion + Explicit Bottom Label) */}
					<Link
						href="/menus/food"
						onClick={(e) =>
							handleTabClick(e, normPath.startsWith("/menus"))
						}
						className="group relative flex h-[60px] touch-manipulation flex-col items-center justify-end pb-2 select-none"
					>
						{/* Raised dome positioned out-of-flow so grid row stays strictly 60px */}
						<span className="pointer-events-none absolute -top-[18px] left-1/2 -translate-x-1/2 rounded-full border-t border-stone-200/90 bg-white p-1.5 shadow-[0_-5px_12px_rgba(28,25,23,0.08)] transition-transform duration-150 group-active:scale-93">
							<span
								className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
									isMenusActive
										? "ring-etbrew-gold text-etbrew-gold-bright bg-stone-900 shadow-md ring-2"
										: "bg-etbrew-gold group-hover:bg-etbrew-gold-hover text-white shadow-[0_4px_12px_rgba(173,140,26,0.4)]"
								}`}
							>
								{/* Classic Fork & Knife Menu Icon */}
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 3.75v5.25a2.25 2.25 0 0 0 2.25 2.25v9M6.75 3.75h4.5v5.25A2.25 2.25 0 0 1 9 11.25M9 3.75v4.5M16.5 3.75v16.5M16.5 3.75c-1.8 0-3 2.1-3 5.25v2.25h3"
									/>
								</svg>
							</span>
						</span>

						<span
							className={`relative z-10 text-[10px] leading-none font-extrabold tracking-wider uppercase transition-colors ${
								isMenusActive
									? "text-etbrew-gold"
									: "text-stone-800"
							}`}
						>
							Menu
						</span>
					</Link>

					{/* Tab 4: Events (Right of Center) */}
					<Link
						href="/events"
						onClick={(e) =>
							handleTabClick(e, normPath.startsWith("/events"))
						}
						className={`relative flex h-[60px] touch-manipulation flex-col items-center justify-end pb-2 select-none ${
							isEventsActive
								? "text-etbrew-gold"
								: "text-stone-500 hover:text-stone-800"
						}`}
					>
						<ActiveBar visible={isEventsActive} />
						<span className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-92">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={isEventsActive ? 2.1 : 1.75}
								className="h-[22px] w-[22px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
								/>
							</svg>
							<span className="text-[10px] leading-none font-bold tracking-wider uppercase">
								Events
							</span>
						</span>
					</Link>

					{/* Tab 5: More */}
					<button
						type="button"
						onClick={() => setIsMoreOpen((prev) => !prev)}
						aria-expanded={isMoreOpen}
						className={`relative flex h-[60px] cursor-pointer touch-manipulation flex-col items-center justify-end pb-2 select-none ${
							isMoreActive
								? "text-etbrew-gold"
								: "text-stone-500 hover:text-stone-800"
						}`}
					>
						<ActiveBar visible={isMoreActive} />
						<span className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-92">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={isMoreActive ? 2.1 : 1.75}
								className="h-[22px] w-[22px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
								/>
							</svg>
							<span className="text-[10px] leading-none font-bold tracking-wider uppercase">
								More
							</span>
						</span>
					</button>
				</div>
			</nav>
		</>
	);
}

function ActiveBar({ visible }: { visible: boolean }) {
	return (
		<span
			aria-hidden="true"
			className={`bg-etbrew-gold absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-b-full transition-opacity duration-200 ${
				visible ? "opacity-100" : "opacity-0"
			}`}
		/>
	);
}

function ChevronRight() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			className="h-4 w-4 shrink-0 text-stone-400"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m8.25 4.5 7.5 7.5-7.5 7.5"
			/>
		</svg>
	);
}

function ExternalArrow() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			className="h-4 w-4 shrink-0 text-stone-400"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
			/>
		</svg>
	);
}
