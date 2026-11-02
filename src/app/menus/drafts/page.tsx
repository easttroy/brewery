import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";
import PageHeader from "@/components/PageHeader";
import AgeGate from "@/components/AgeGate";
import beers from "@/data/beers.json";

export const metadata: Metadata = {
	title: "Beers",
	description:
		"Discover our selection of handcrafted beers brewed on-site at East Troy Brewery.",
};

export default function DrinkMenu() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<AgeGate />
			<PageHeader title="Menus" eyebrow="Scratch Kitchen & Taproom" />

			{/* Menu Content */}
			<section className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-20">
				<div className="border-etbrew-gold rounded-xs border-t-4 bg-white px-6 pt-0 pb-10 shadow-lg sm:px-8 md:px-16 md:pb-16">
					<MenuTabs />

					<div
						id="menu"
						className="mb-12 scroll-mt-[200px] text-center"
					>
						<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Draft List
						</h2>
						<div className="bg-etbrew-gold/70 mx-auto mt-3 h-0.5 w-12" />
					</div>

					<div className="grid grid-cols-1 gap-x-12 gap-y-11 md:grid-cols-2">
						{beers.map((beer, index) => {
							const hasIbu =
								Boolean(beer.ibu) && beer.ibu !== "N/A";

							return (
								<div
									key={index}
									className="flex h-full flex-col"
								>
									<div className="flex items-baseline justify-between gap-4 border-b border-stone-200 pb-2">
										<h3 className="font-sans text-lg leading-snug font-bold tracking-wide text-stone-800 uppercase">
											<a
												href={beer.url}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:text-etbrew-teal transition-colors"
											>
												{beer.name}
											</a>
										</h3>
										{beer.abv && (
											<span className="border-etbrew-gold/30 text-etbrew-gold shrink-0 rounded-xs border bg-amber-50/60 px-2 py-0.5 font-sans text-xs font-bold tracking-wider uppercase">
												{beer.abv} ABV
											</span>
										)}
									</div>

									{(beer.style || hasIbu) && (
										<div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-stone-500">
											{beer.style && (
												<span className="font-serif text-stone-600 italic">
													{beer.style}
												</span>
											)}
											{beer.style && hasIbu && (
												<span
													aria-hidden="true"
													className="text-stone-300"
												>
													&bull;
												</span>
											)}
											{hasIbu && (
												<span className="text-xs font-medium tracking-wider text-stone-400 uppercase">
													{beer.ibu} IBU
												</span>
											)}
										</div>
									)}

									{beer.description && (
										<p className="mt-3 text-sm leading-relaxed text-stone-600">
											{beer.description}
										</p>
									)}

									{Array.isArray(beer.prices) &&
										beer.prices.length > 0 && (
											<div className="mt-auto space-y-1.5 pt-5">
												{beer.prices.map(
													(
														p: {
															size: string;
															price: string;
														},
														i: number,
													) => (
														<div
															key={i}
															className="flex items-baseline justify-between gap-3 border-b border-dotted border-stone-200 pb-1 text-sm text-stone-600 last:border-0"
														>
															<span>
																{p.size}
															</span>
															<span className="shrink-0 font-serif font-bold text-stone-800">
																{p.price}
															</span>
														</div>
													),
												)}
											</div>
										)}
								</div>
							);
						})}
					</div>

					<div className="mt-20 mb-12 text-center">
						<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Flights
						</h2>
						<div className="bg-etbrew-gold/70 mx-auto mt-3 h-0.5 w-12" />
					</div>

					<div className="grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2">
						<div>
							<div className="flex items-baseline justify-between gap-4 border-b border-dotted border-stone-300 pb-1.5">
								<h3 className="font-sans text-lg font-bold tracking-wide text-stone-800 uppercase">
									Flight of 4
								</h3>
								<span className="text-etbrew-gold shrink-0 font-serif text-lg font-bold">
									$10.00
								</span>
							</div>
							<p className="mt-2.5 text-sm text-stone-600">
								Get a flight and pick 4 beers on tap.
							</p>
						</div>
						<div>
							<div className="flex items-baseline justify-between gap-4 border-b border-dotted border-stone-300 pb-1.5">
								<h3 className="font-sans text-lg font-bold tracking-wide text-stone-800 uppercase">
									Flight of 6
								</h3>
								<span className="text-etbrew-gold shrink-0 font-serif text-lg font-bold">
									$15.00
								</span>
							</div>
							<p className="mt-2.5 text-sm text-stone-600">
								Get a flight and pick 6 beers on tap.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
