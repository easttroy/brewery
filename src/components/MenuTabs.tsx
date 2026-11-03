"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export interface MenuCategoryLink {
	id: string;
	label: string;
}

export default function MenuTabs({
	categories,
}: {
	categories?: MenuCategoryLink[];
}) {
	const pathname = usePathname();
	const wrapperRef = useRef<HTMLDivElement>(null);
	const pillStripRef = useRef<HTMLDivElement>(null);
	const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
	const isProgrammaticRef = useRef<boolean>(false);
	const lockTimerRef = useRef<number>(0);
	const [activeId, setActiveId] = useState<string | null>(null);

	const tabs = [
		{
			name: "Food",
			href: "/menus/food/",
		},
		{
			name: "Beers",
			href: "/menus/drafts/",
		},
		{
			name: "Cocktails & More",
			href: "/menus/cocktails/",
		},
	];

	const hasCategories = Boolean(categories && categories.length > 1);
	const currentCategoryId =
		hasCategories && categories?.some((c) => c.id === activeId)
			? activeId
			: (categories?.[0]?.id ?? null);

	// Sync --menu-tabs-height so category anchor scroll-margin-top is exact
	useEffect(() => {
		const el = wrapperRef.current;
		if (!el) return;

		const updateHeight = () => {
			document.documentElement.style.setProperty(
				"--menu-tabs-height",
				`${el.offsetHeight}px`,
			);
		};

		updateHeight();
		const observer = new ResizeObserver(updateHeight);
		observer.observe(el);
		return () => observer.disconnect();
	}, [hasCategories]);

	// Scroll-spy to highlight the currently visible menu section pill
	useEffect(() => {
		if (!categories || categories.length <= 1) return;

		let rafId = 0;
		const computeActive = () => {
			if (isProgrammaticRef.current) return;

			const headerHeight =
				parseFloat(
					getComputedStyle(document.documentElement).getPropertyValue(
						"--header-height",
					),
				) || 59;
			const tabsHeight = wrapperRef.current?.offsetHeight ?? 92;
			const threshold = headerHeight + tabsHeight + 48;

			let matched = categories[0].id;
			for (const cat of categories) {
				const sectionEl = document.getElementById(cat.id);
				if (!sectionEl) continue;
				const top = sectionEl.getBoundingClientRect().top;
				if (top <= threshold) {
					matched = cat.id;
				} else {
					break;
				}
			}

			// If scrolled to the bottom of the page, allow a short final section
			// (like Flights) to highlight even on tall desktop viewports.
			const atPageBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 32;
			if (atPageBottom) {
				const lastCat = categories[categories.length - 1];
				const lastEl = document.getElementById(lastCat.id);
				if (
					lastEl &&
					lastEl.getBoundingClientRect().top <
						window.innerHeight * 0.75
				) {
					matched = lastCat.id;
				}
			}

			setActiveId((prev) => (prev === matched ? prev : matched));
		};

		const onScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(computeActive);
		};

		const clearProgrammaticLock = () => {
			window.clearTimeout(lockTimerRef.current);
			isProgrammaticRef.current = false;
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("wheel", clearProgrammaticLock, {
			passive: true,
		});
		window.addEventListener("touchmove", clearProgrammaticLock, {
			passive: true,
		});
		onScroll();

		return () => {
			cancelAnimationFrame(rafId);
			window.clearTimeout(lockTimerRef.current);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("wheel", clearProgrammaticLock);
			window.removeEventListener("touchmove", clearProgrammaticLock);
		};
	}, [categories]);

	// Keep the active pill centered inside the horizontal strip when overflowing.
	// Uses direct scrollLeft assignment rather than smooth scrollTo so we never
	// cancel an active window.scrollTo({ behavior: "smooth" }) in Chrome/Safari.
	useEffect(() => {
		if (!currentCategoryId) return;
		const strip = pillStripRef.current;
		const pill = pillRefs.current[currentCategoryId];
		if (!strip || !pill) return;
		if (strip.scrollWidth <= strip.clientWidth) return;

		const stripRect = strip.getBoundingClientRect();
		const pillRect = pill.getBoundingClientRect();
		const pillCenterInStrip =
			pillRect.left -
			stripRect.left +
			strip.scrollLeft +
			pillRect.width / 2;
		const maxScroll = strip.scrollWidth - strip.clientWidth;
		const targetLeft = Math.min(
			maxScroll,
			Math.max(0, pillCenterInStrip - strip.clientWidth / 2),
		);

		if (Math.abs(strip.scrollLeft - targetLeft) > 4) {
			strip.scrollLeft = targetLeft;
		}
	}, [currentCategoryId]);

	const handleCategoryClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string,
		index: number,
	) => {
		const target = document.getElementById(id);
		if (!target) return;
		e.preventDefault();

		window.clearTimeout(lockTimerRef.current);
		isProgrammaticRef.current = true;
		lockTimerRef.current = window.setTimeout(() => {
			isProgrammaticRef.current = false;
		}, 800);
		setActiveId(id);

		const headerHeight =
			parseFloat(
				getComputedStyle(document.documentElement).getPropertyValue(
					"--header-height",
				),
			) || 59;
		const tabsHeight = wrapperRef.current?.offsetHeight ?? 92;

		let targetScrollY: number;
		const menuCard = index === 0 ? document.getElementById("menu") : null;
		if (menuCard) {
			targetScrollY =
				window.scrollY +
				menuCard.getBoundingClientRect().top -
				headerHeight -
				8;
		} else {
			targetScrollY =
				window.scrollY +
				target.getBoundingClientRect().top -
				headerHeight -
				tabsHeight -
				24;
		}

		window.scrollTo({
			top: Math.max(0, targetScrollY),
			behavior: "smooth",
		});
	};

	return (
		<div
			ref={wrapperRef}
			className="sticky top-[var(--header-height,104px)] z-40 -mx-6 mb-12 bg-white/95 backdrop-blur-md sm:-mx-8 md:-mx-16"
		>
			{/* Primary Menu Tabs */}
			<div className="flex flex-nowrap justify-center gap-4 border-b border-stone-200 px-4 sm:gap-8 sm:px-8 md:gap-12 md:px-16">
				{tabs.map((tab) => {
					const isActive = pathname?.includes(
						tab.href.replace(/\/$/, ""),
					);
					return (
						<Link
							key={tab.name}
							href={`${tab.href}#menu`}
							className={`-mb-px border-b-3 px-2 py-3.5 text-center font-serif text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-colors duration-200 sm:px-3 sm:text-base md:py-4 md:text-lg ${
								isActive
									? "border-etbrew-gold text-stone-900"
									: "border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-800"
							}`}
						>
							{tab.name}
						</Link>
					);
				})}
			</div>

			{/* Secondary Category Jump Pills */}
			{hasCategories && categories && (
				<div
					ref={pillStripRef}
					aria-label="Menu sections"
					className="overflow-x-auto border-b border-stone-200/90 bg-stone-50/90 px-4 py-2.5 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
				>
					<div className="mx-auto flex w-max items-center gap-1.5 sm:gap-2">
						{categories.map((cat, index) => {
							const isCurrent = currentCategoryId === cat.id;
							return (
								<a
									key={cat.id}
									ref={(el) => {
										pillRefs.current[cat.id] = el;
									}}
									href={`#${cat.id}`}
									onClick={(e) =>
										handleCategoryClick(e, cat.id, index)
									}
									className={`rounded-full px-3 py-1 font-sans text-[11px] font-bold tracking-wider whitespace-nowrap uppercase transition-all sm:px-3.5 sm:text-xs ${
										isCurrent
											? "bg-stone-900 text-white shadow-2xs"
											: "border border-stone-200/90 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-900"
									}`}
								>
									{cat.label}
								</a>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
