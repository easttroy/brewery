"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuTabs() {
	const pathname = usePathname();

	const tabs = [
		{ name: "Food", href: "/menus/food/" },
		{ name: "Beers", href: "/menus/drafts/" },
		{ name: "Cocktails & More", href: "/menus/cocktails/" },
		{ name: "Supper Club", href: "/menus/supper-club/", isSpecial: true },
	];

	return (
		<div className="xs:top-[99px] hide-scrollbar sticky top-[99px] z-40 -mx-4 mb-16 flex flex-nowrap justify-center gap-2 border-b-2 border-stone-200 bg-white/95 px-4 pt-0 pb-0 backdrop-blur-md sm:top-[104px] sm:-mx-8 sm:gap-4 sm:px-8 md:top-[104px] md:-mx-16 md:gap-8 md:px-16 xl:top-[120px]">
			{tabs.map((tab) => {
				const isActive = pathname?.includes(tab.href.replace(/\/$/, ""));
				return (
					<Link
						key={tab.name}
						href={`${tab.href}#menu`}
						className={`-mb-[2px] border-b-4 px-1 py-3 text-center font-serif text-[14px] font-bold tracking-wide whitespace-nowrap uppercase transition-colors duration-200 sm:px-2 sm:text-sm md:py-4 md:text-xl ${isActive
							? "border-etbrew-gold text-etbrew-gold"
							: (tab.isSpecial ? "border-transparent text-etbrew-gold hover:border-etbrew-gold/50" : "border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-800")
							} ${tab.isSpecial ? "flex flex-row items-center gap-1.5" : ""}`}
					>
						{tab.isSpecial && <span className="text-lg md:text-xl leading-none pb-0.5">★</span>}
						{tab.name}
					</Link>
				);
			})}
		</div>
	);
}
