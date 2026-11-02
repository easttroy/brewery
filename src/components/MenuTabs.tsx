"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuTabs() {
	const pathname = usePathname();

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

	return (
		<div className="sticky top-[var(--header-height,104px)] z-40 -mx-6 mb-14 flex flex-nowrap justify-center gap-4 border-b border-stone-200 bg-white/95 px-4 backdrop-blur-md sm:-mx-8 sm:gap-8 sm:px-8 md:-mx-16 md:gap-12 md:px-16">
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
	);
}
