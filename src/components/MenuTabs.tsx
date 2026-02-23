'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuTabs() {
    const pathname = usePathname();

    const tabs = [
        { name: 'Food Menu', href: '/our-food-menu' },
        { name: 'Our Beers', href: '/our-drink-menu' },
        { name: 'Cocktails & Wine', href: '/our-cocktail-menu' },
    ];

    return (
        <div className="sticky top-[99px] xs:top-[99px] sm:top-[104px] md:top-[104px] xl:top-[120px] z-40 bg-white/95 backdrop-blur-md pt-0 pb-0 -mx-4 px-4 sm:-mx-8 sm:px-8 md:-mx-16 md:px-16 flex justify-center flex-nowrap gap-2 sm:gap-4 md:gap-8 mb-12 border-b-2 border-stone-200 hide-scrollbar">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`px-1 sm:px-2 py-3 md:py-4 text-[14px] sm:text-sm md:text-xl font-serif font-bold uppercase tracking-wide transition-colors duration-200 -mb-[2px] border-b-4 text-center whitespace-nowrap ${isActive
                            ? 'border-etbrew-gold text-etbrew-gold'
                            : 'border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300'
                            }`}
                    >
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    );
}
