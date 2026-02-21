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
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b-2 border-stone-200">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`px-2 py-4 text-lg md:text-xl font-serif font-bold uppercase tracking-wide transition-colors duration-200 -mb-[2px] border-b-4 ${isActive
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
