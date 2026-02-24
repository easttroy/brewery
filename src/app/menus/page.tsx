import { Metadata } from "next";
import Link from "next/link";

function FireIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
    );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    );
}

function BeerMugIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7v11a2 2 0 002 2h6a2 2 0 002-2V7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V4 M13 7V3 M5 7h12" />
        </svg>
    );
}

function MartiniIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5l9 9 9-9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18" />
        </svg>
    );
}

export const metadata: Metadata = {
    title: "Menus",
    description:
        "Explore our handcrafted food, house-brewed beers, and specialty cocktails at East Troy Brewery.",
};

const menuLinks = [
    {
        title: "Food",
        href: "/menus/food",
        icon: <FireIcon className="mb-4 h-12 w-12 text-etbrew-gold transition-transform group-hover:scale-110" />,
        description: "Elevated plates, shared snacks, brick oven pizzas, & supper club specials.",
        isDark: false,
    },
    {
        title: "Beers",
        href: "/menus/drafts",
        icon: <BeerMugIcon className="mb-4 h-12 w-12 text-etbrew-gold transition-transform group-hover:scale-110" />,
        description: "Handcrafted beers brewed right here on the historic East Troy square.",
        isDark: false,
    },
    {
        title: "Cocktails & More",
        href: "/menus/cocktails",
        icon: <MartiniIcon className="mb-4 h-12 w-12 text-etbrew-gold transition-transform group-hover:scale-110" />,
        description: "Specialty house cocktails, mocktails, wine, and a curated spirits selection.",
        isDark: false,
    },
    {
        title: "Supper Club",
        href: "/menus/supper-club",
        icon: <StarIcon className="mb-4 h-12 w-12 text-etbrew-gold transition-transform group-hover:scale-110" />,
        description: "Monday night exclusives: prime rib, fish fry, and classic Wisconsin traditions.",
        isDark: true,
    },
];

export default function MenusOverview() {
    return (
        <div className="flex min-h-screen flex-col bg-stone-50">
            {/* Page Header */}
            <section className="border-etbrew-gold border-b-8 bg-stone-900 px-4 py-20 text-center text-white">
                <h1 className="font-serif text-5xl tracking-wider uppercase">
                    Our Menus
                </h1>
            </section>

            {/* Main Content */}
            <section className="mx-auto w-full max-w-5xl px-4 py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {menuLinks.map((menu, index) => (
                        <Link
                            key={index}
                            href={menu.href}
                            className={`group flex h-full flex-col items-center justify-center border-etbrew-gold border-t-4 p-12 text-center shadow-md transition-all hover:shadow-xl hover:-translate-y-1 ${menu.isDark ? "bg-stone-900 text-stone-300" : "bg-white text-stone-600"
                                }`}
                        >
                            {menu.icon}
                            <h2 className={`mb-4 font-serif text-3xl tracking-wide uppercase ${menu.isDark ? "text-white" : "text-stone-800"
                                }`}>
                                {menu.title}
                            </h2>
                            <p className="font-sans leading-relaxed">
                                {menu.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
