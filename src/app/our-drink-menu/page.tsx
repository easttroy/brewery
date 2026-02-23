import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";
import beers from "@/data/beers.json";

export const metadata: Metadata = {
	title: "Our Beers",
	description:
		"Discover our selection of handcrafted beers brewed on-site at East Troy Brewery.",
};
import AgeGate from "@/components/AgeGate";

export default function DrinkMenu() {
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
					<h2
						id="menu"
						className="mb-12 scroll-mt-[200px] border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase"
					>
						Draft List
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
						{beers.map((beer, index) => (
							<div key={index} className="flex h-full flex-col">
								<div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
									<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
										<a
											href={beer.url}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-etbrew-teal transition-colors"
										>
											{beer.name}
										</a>
									</h3>
									<span className="text-etbrew-gold font-bold">
										{beer.abv}
									</span>
								</div>
								{beer.style && (
									<p className="mt-2 font-serif text-stone-600 italic">
										{beer.style}
									</p>
								)}
								{beer.description && (
									<p className="mt-3 text-sm leading-relaxed text-stone-700">
										{beer.description}
									</p>
								)}
								<div className="mt-auto space-y-2 pt-6">
									{Array.isArray(beer.prices) &&
									beer.prices.length > 0 ? (
										beer.prices.map(
											(
												p: {
													size: string;
													price: string;
												},
												i: number,
											) => (
												<div
													key={i}
													className="flex justify-between border-b border-dotted border-stone-200 pb-1 text-sm text-stone-600 transition-colors last:border-0 hover:text-stone-900"
												>
													<span>{p.size}</span>
													<span className="font-medium">
														{p.price}
													</span>
												</div>
											),
										)
									) : (
										<p className="text-sm text-stone-500">
											{beer.ibu !== "N/A" &&
											beer.ibu !== ""
												? `${beer.ibu} IBU`
												: ""}
										</p>
									)}
								</div>
							</div>
						))}
					</div>

					<h2 className="mt-20 mb-12 border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Flights
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
						<div>
							<div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Flight of 4
								</h3>
								<span className="text-etbrew-gold font-bold">
									$10.00
								</span>
							</div>
							<p className="mt-2 text-stone-600">
								Get a flight and pick 4 beers on tap.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Flight of 6
								</h3>
								<span className="text-etbrew-gold font-bold">
									$15.00
								</span>
							</div>
							<p className="mt-2 text-stone-600">
								Get a flight and pick 6 beers on tap.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
