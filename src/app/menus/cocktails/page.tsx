import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";
import PageHeader from "@/components/PageHeader";
import AgeGate from "@/components/AgeGate";
import menuCategoriesRaw from "@/data/cocktails.json";

type MenuItem = {
	name: string;
	price?: string;
	description?: string;
	isSimple?: boolean;
};

type MenuSubcategory = {
	title: string;
	items: MenuItem[];
};

type MenuCategory = {
	title: string;
	isGrid3?: boolean;
	items?: MenuItem[];
	subcategories?: MenuSubcategory[];
};

const menuCategories = menuCategoriesRaw as MenuCategory[];

function toSlug(title: string) {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

const categoryLinks = menuCategories.map((cat) => ({
	id: toSlug(cat.title),
	label: cat.title,
}));

export const metadata: Metadata = {
	title: "Cocktails & More",
	description:
		"Explore our curated cocktail and wine list at East Troy Brewery.",
};

export default function CocktailMenu() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<AgeGate />
			<PageHeader title="Menus" eyebrow="Scratch Kitchen & Taproom" />

			{/* Menu Content */}
			<section className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-20">
				<div
					id="menu"
					className="border-etbrew-gold scroll-mt-[var(--header-height,59px)] rounded-xs border-t-4 bg-white px-6 pt-0 pb-10 shadow-lg sm:px-8 md:px-16 md:pb-16"
				>
					<MenuTabs categories={categoryLinks} />

					{menuCategories.map((category, index) => (
						<div key={category.title}>
							<div
								id={toSlug(category.title)}
								className={`scroll-mt-[calc(var(--header-height,59px)+var(--menu-tabs-height,92px)+1.5rem)] text-center ${
									index === 0 ? "mb-12" : "mt-20 mb-12"
								}`}
							>
								<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
									{category.title}
								</h2>
								<div className="bg-etbrew-gold/70 mx-auto mt-3 h-0.5 w-12" />
							</div>

							{category.subcategories ? (
								<div
									className={`grid grid-cols-1 gap-x-12 gap-y-10 ${
										category.isGrid3
											? "md:grid-cols-2 lg:grid-cols-3"
											: "md:grid-cols-2"
									}`}
								>
									{category.subcategories.map((sub) => (
										<div key={sub.title}>
											<h3 className="text-etbrew-teal mb-4 border-b border-stone-200 pb-2 font-serif text-xl font-bold tracking-wider uppercase">
												{sub.title}
											</h3>
											<div className="space-y-6">
												{sub.items?.map((item) => (
													<div key={item.name}>
														<div className="flex items-baseline justify-between gap-4 border-b border-dotted border-stone-300 pb-1.5">
															<h4 className="font-sans text-lg leading-snug font-bold text-stone-800">
																{item.name}
															</h4>
															{item.price && (
																<span className="text-etbrew-gold shrink-0 font-serif text-base font-bold">
																	{item.price}
																</span>
															)}
														</div>
														{item.description && (
															<p className="mt-2 text-sm text-stone-600 italic">
																{
																	item.description
																}
															</p>
														)}
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							) : (
								<div
									className={`grid grid-cols-1 gap-x-12 gap-y-9 ${
										category.isGrid3
											? "md:grid-cols-2 lg:grid-cols-3"
											: "md:grid-cols-2"
									}`}
								>
									{category.items?.map((item) => (
										<div key={item.name}>
											{item.isSimple ? (
												<>
													<h3 className="mb-2 border-b border-stone-200 pb-1.5 font-sans text-lg font-bold tracking-wide text-stone-800 uppercase">
														{item.name}
													</h3>
													{item.description && (
														<p className="text-sm leading-relaxed text-stone-600">
															{item.description}
														</p>
													)}
												</>
											) : (
												<>
													<div className="flex items-baseline justify-between gap-4 border-b border-dotted border-stone-300 pb-1.5">
														<h3 className="font-sans text-lg leading-snug font-bold tracking-wide text-stone-800 uppercase">
															{item.name}
														</h3>
														{item.price && (
															<span className="text-etbrew-gold shrink-0 font-serif text-lg font-bold">
																{item.price}
															</span>
														)}
													</div>
													{item.description && (
														<p className="mt-2.5 text-sm leading-relaxed text-stone-600">
															{item.description}
														</p>
													)}
												</>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
