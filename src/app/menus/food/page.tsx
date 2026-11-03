import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";
import PageHeader from "@/components/PageHeader";
import menuCategoriesRaw from "@/data/food.json";

export const metadata: Metadata = {
	title: "Food",
	description:
		"Explore our handcrafted food menu, featuring elevated plates and flatbreads at East Troy Brewery.",
};

interface MenuItem {
	name: string;
	price: string;
	description?: string;
}

interface MenuCategory {
	title: string;
	note?: string;
	items: MenuItem[];
}

const menuCategories = menuCategoriesRaw as MenuCategory[];

export default function FoodMenu() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader title="Menus" eyebrow="Scratch Kitchen & Taproom" />

			{/* Menu Content */}
			<section className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-20">
				<div className="border-etbrew-gold rounded-xs border-t-4 bg-white px-6 pt-0 pb-10 shadow-lg sm:px-8 md:px-16 md:pb-16">
					<MenuTabs />

					{menuCategories.map((category, index) => (
						<div key={category.title}>
							<div
								id={
									index === 0
										? "menu"
										: category.title
												.toLowerCase()
												.replace(/[^a-z0-9]+/g, "-")
								}
								className={`text-center ${
									index === 0
										? "mb-10 scroll-mt-[calc(var(--header-height,59px)+4.5rem)]"
										: "mt-20 mb-10"
								}`}
							>
								<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
									{category.title}
								</h2>
								<div className="bg-etbrew-gold/70 mx-auto mt-3 h-0.5 w-12" />
							</div>

							{category.note && (
								<div className="mx-auto mb-10 max-w-2xl rounded-xs border border-stone-200/80 bg-stone-50 px-6 py-4 text-center">
									<p className="text-sm leading-relaxed whitespace-pre-line text-stone-600 italic">
										{category.note}
									</p>
								</div>
							)}

							<div className="grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2">
								{category.items.map((item) => (
									<div
										key={item.name}
										className="flex h-full flex-col"
									>
										<div className="flex items-baseline justify-between gap-4 border-b border-dotted border-stone-300 pb-1.5">
											<h3 className="font-sans text-lg leading-snug font-bold tracking-wide text-stone-800 uppercase">
												{item.name}
											</h3>
											<span className="text-etbrew-gold shrink-0 font-serif text-lg font-bold">
												{item.price}
											</span>
										</div>
										{item.description && (
											<p className="mt-2.5 text-sm leading-relaxed whitespace-pre-line text-stone-600">
												{item.description}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
					))}

					{/* Menu Disclaimers & Notes */}
					<div className="mt-16 space-y-1 border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
						<p>*Please notify your server of any food allergies.</p>
						<p>
							**An 18% gratuity will be added to parties of 8 or
							more.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
