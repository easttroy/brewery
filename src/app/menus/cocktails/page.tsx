import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";
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

export const metadata: Metadata = {
	title: "Cocktails & More",
	description:
		"Explore our curated cocktail and wine list at East Troy Brewery.",
};

export default function CocktailMenu() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<AgeGate />
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

					{menuCategories.map((category, index) => (
						<div key={index}>
							<h2
								id={
									index === 0
										? "menu"
										: category.title
											.toLowerCase()
											.replace(/[^a-z0-9]+/g, "-")
								}
								className={`border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase ${index === 0
									? "mb-12 scroll-mt-[200px]"
									: "mt-20 mb-12"
									}`}
							>
								{category.title}
							</h2>

							{category.subcategories ? (
								<div className={`grid grid-cols-1 gap-x-12 gap-y-10 ${category.isGrid3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
									{category.subcategories.map((sub, subIndex) => (
										<div key={subIndex}>
											<div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
												<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
													{sub.title}
												</h3>
											</div>
											{sub.items ? (
												sub.items.map((item, itemIndex) => (
													<div className="mt-4" key={itemIndex}>
														<div className="mb-2 flex items-baseline justify-between">
															<h4 className="font-sans text-lg font-bold text-stone-800">
																{item.name}
															</h4>
															{item.price && (
																<span className="text-etbrew-gold font-bold">
																	{item.price}
																</span>
															)}
														</div>
														{item.description && (
															<p className="text-stone-600">
																{item.description}
															</p>
														)}
													</div>
												))
											) : (
												<p className="text-stone-600 mt-2">
												</p>
											)}
										</div>
									))}
								</div>
							) : (
								<div className={`grid grid-cols-1 gap-x-12 gap-y-10 ${category.isGrid3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
									{category.items?.map((item, itemIndex) => (
										<div key={itemIndex}>
											{item.isSimple ? (
												<>
													<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
														{item.name}
													</h3>
													{item.description && (
														<p className="text-stone-600">
															{item.description}
														</p>
													)}
												</>
											) : (
												<>
													<div className="mb-2 flex items-baseline justify-between">
														<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
															{item.name}
														</h3>
														{item.price && (
															<span className="text-etbrew-gold font-bold">
																{item.price}
															</span>
														)}
													</div>
													{item.description && (
														<p className="text-stone-600">
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
