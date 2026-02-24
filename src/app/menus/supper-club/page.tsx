import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
    title: "Supper Club Menu",
    description:
        "Join us for East Troy Brewery's Monday Night Supper Club. Elevated dining, scratch-made.",
};

import menuCategories from "@/data/supper-club.json";

export default function SupperClubMenu() {
    return (
        <div className="flex min-h-screen flex-col bg-stone-50">
            {/* Page Header */}
            <section className="border-etbrew-gold border-b-8 bg-stone-900 px-4 py-20 text-center text-white">
                <h1 className="font-serif text-5xl tracking-wider uppercase">
                    Menus
                </h1>
            </section>

            {/* Menu Content */}
            <section className="mx-auto w-full max-w-5xl px-4 py-20">
                <div className="border-etbrew-gold border-t-4 bg-white px-8 pt-0 pb-8 shadow-xl md:px-16 md:pt-0 md:pb-16">
                    <MenuTabs />
                    <div className="mt-12 mb-12 border-b border-stone-200 pb-6 text-center">
                        <h2
                            id="menu"
                            className="scroll-mt-[200px] font-serif text-4xl tracking-wide text-stone-800 uppercase"
                        >
                            Supper Club
                        </h2>
                        <p className="mt-2 font-sans text-sm tracking-widest text-stone-500 uppercase">
                            Monday Nights Only
                        </p>
                    </div>

                    {menuCategories.map((category, index) => (
                        <div key={index}>
                            <h2
                                id={category.title
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")}
                                className={`border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase ${index === 0 ? "mb-12" : "mt-20 mb-12"
                                    }`}
                            >
                                {category.title}
                            </h2>
                            {category.note && (
                                <p className="mb-8 text-center text-stone-500 italic">
                                    {category.note}
                                </p>
                            )}

                            <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="flex h-full flex-col"
                                    >
                                        <div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
                                            <h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
                                                {item.name}
                                            </h3>
                                            <span className="text-etbrew-gold font-bold">
                                                {item.price}
                                            </span>
                                        </div>
                                        {item.description && (
                                            <p className="mt-3 text-sm leading-relaxed text-stone-700 whitespace-pre-line">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
}
