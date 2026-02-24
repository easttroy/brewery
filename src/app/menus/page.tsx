import { Metadata } from "next";
import Link from "next/link";
import {
    StarIcon,
    FireIcon,
    BeakerIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

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
        icon: <BeakerIcon className="mb-4 h-12 w-12 text-etbrew-gold transition-transform group-hover:scale-110" />,
        description: "Handcrafted beers brewed right here on the historic East Troy square.",
        isDark: false,
    },
    {
        title: "Cocktails & More",
        href: "/menus/cocktails",
        icon: <SparklesIcon className="mb-4 h-12 w-12 text-etbrew-gold transition-transform group-hover:scale-110" />,
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
