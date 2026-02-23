import { Metadata } from "next";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
	title: "Cocktails & Wine",
	description:
		"Explore our curated cocktail and wine list at East Troy Brewery.",
};
import AgeGate from "@/components/AgeGate";

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
					<h2
						id="menu"
						className="mb-12 scroll-mt-[200px] border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase"
					>
						Cocktails
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
						{/* Menu Items */}
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									ETB Bloody Mary
								</h3>
								<span className="text-etbrew-gold font-bold">
									$9
								</span>
							</div>
							<p className="text-stone-600">
								Vodka, Miss Mary&apos;s Bloody Mary Mix, pickle
								and olive juice, hot sauce.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Blackberry Mule
								</h3>
								<span className="text-etbrew-gold font-bold">
									$10
								</span>
							</div>
							<p className="text-stone-600">
								Tito&apos;s vodka, lime juice, ginger beer,
								blackberry syrup.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Red Sangria (NEW)
								</h3>
								<span className="text-etbrew-gold font-bold">
									$8
								</span>
							</div>
							<p className="text-stone-600">
								Red Wine, Brandy, Raspberry Puree, Orange Juice.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Patio Punch
								</h3>
								<span className="text-etbrew-gold font-bold">
									$8.5
								</span>
							</div>
							<p className="text-stone-600">
								Coconut Rum, Amaretto, Pineapple Juice, Lime
								Juice, and a touch of Grenadine.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Rock&apos;n Paloma
								</h3>
								<span className="text-etbrew-gold font-bold">
									$8
								</span>
							</div>
							<p className="text-stone-600">
								Rock&apos;n Vodka, Grapefruit juice, lime juice,
								soda water.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Wisconsin Old Fashioned
								</h3>
								<span className="text-etbrew-gold font-bold">
									$8
								</span>
							</div>
							<p className="text-stone-600">
								A traditional Wisconsin old fashioned - made the
								right way by muddling orange and cherry with
								bitters and simple syrup, your choice of brandy,
								whiskey, or bourbon, sweet, sour, or press.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Mimosa
								</h3>
								<span className="text-etbrew-gold font-bold">
									$8
								</span>
							</div>
							<p className="text-stone-600">
								Caposaldo Brut Prosecco and your choice of
								Orange, Pineapple, Cranberry, or Grapefruit
								Juice.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Frozen Cocktail
								</h3>
								<span className="text-etbrew-gold font-bold">
									$10
								</span>
							</div>
							<p className="text-stone-600">
								Rotating frozen cocktail available at our indoor
								bar only.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Cocktail of the Month
								</h3>
								<span className="text-etbrew-gold font-bold">
									$10
								</span>
							</div>
							<p className="text-stone-600">
								Pineapple Jalapeno Margarita: Pineapple Jalapeno
								tequila, triple sec, lime juice, simple syrup,
								pineapple juice, and a splash of grenadine.
							</p>
						</div>
					</div>

					<h2 className="mt-20 mb-12 border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Hard Seltzer
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Happy Dad/Mom - Hard Seltzer
								</h3>
								<span className="text-etbrew-gold font-bold">
									$5
								</span>
							</div>
							<p className="text-stone-600">
								Fruit Punch, Grape, or Raspberry.
							</p>
						</div>
					</div>

					<h2 className="mt-20 mb-12 border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Wine
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
						{/* Reds */}
						<div>
							<div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Reds
								</h3>
							</div>
							<div className="mt-4">
								<div className="mb-2 flex items-baseline justify-between">
									<h4 className="font-sans text-lg font-bold text-stone-800">
										Bonanza
									</h4>
									<span className="text-etbrew-gold font-bold">
										$10 / $30
									</span>
								</div>
								<p className="text-stone-600">
									Cabernet Sauvignon
								</p>
							</div>
							<div className="mt-4">
								<div className="mb-2 flex items-baseline justify-between">
									<h4 className="font-sans text-lg font-bold text-stone-800">
										Sea Sun
									</h4>
									<span className="text-etbrew-gold font-bold">
										$10 / $30
									</span>
								</div>
								<p className="text-stone-600">Pinot Noir</p>
							</div>
						</div>

						{/* Whites */}
						<div>
							<div className="mb-2 flex items-baseline justify-between border-b border-stone-100 pb-1">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Whites
								</h3>
							</div>
							<div className="mt-4">
								<div className="mb-2 flex items-baseline justify-between">
									<h4 className="font-sans text-lg font-bold text-stone-800">
										Caposaldo
									</h4>
									<span className="text-etbrew-gold font-bold">
										$10 / $30
									</span>
								</div>
								<p className="text-stone-600">Moscato</p>
							</div>
							<div className="mt-4">
								<div className="mb-2 flex items-baseline justify-between">
									<h4 className="font-sans text-lg font-bold text-stone-800">
										Scarpetta
									</h4>
									<span className="text-etbrew-gold font-bold">
										$10 / $30
									</span>
								</div>
								<p className="text-stone-600">Pinot Grigio</p>
							</div>
							<div className="mt-4">
								<div className="mb-2 flex items-baseline justify-between">
									<h4 className="font-sans text-lg font-bold text-stone-800">
										Decoy
									</h4>
									<span className="text-etbrew-gold font-bold">
										$10 / $30
									</span>
								</div>
								<p className="text-stone-600">Chardonnay</p>
							</div>
						</div>
					</div>

					<h2 className="mt-20 mb-12 border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase">
						N/A Beverages
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Coke, Sprite, Diet Coke, Lemonade, Root Beer
								</h3>
								<span className="text-etbrew-gold font-bold">
									$2.5
								</span>
							</div>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Kiddie Cocktail, Raspberry Lemonade
								</h3>
								<span className="text-etbrew-gold font-bold">
									$3
								</span>
							</div>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									House-made Cream Soda
								</h3>
								<span className="text-etbrew-gold font-bold">
									$3.5
								</span>
							</div>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Potosi N/A Beer
								</h3>
								<span className="text-etbrew-gold font-bold">
									$4
								</span>
							</div>
							<p className="text-stone-600">
								Must be 21+ to order.
							</p>
						</div>
						<div>
							<div className="mb-2 flex items-baseline justify-between">
								<h3 className="font-sans text-xl font-bold text-stone-800 uppercase">
									Brooklyn Brewery NA
								</h3>
								<span className="text-etbrew-gold font-bold">
									$5
								</span>
							</div>
							<p className="text-stone-600">
								Rotating flavors, must be 21+ to order.
							</p>
						</div>
					</div>

					<h2 className="mt-20 mb-12 border-b border-stone-200 pb-6 text-center font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Liquor
					</h2>

					<div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Whiskey
							</h3>
							<p className="text-stone-600">
								Seagram 7, Jack Daniels, Crown Royal
							</p>
						</div>
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Bourbon
							</h3>
							<p className="text-stone-600">
								Old Fitzgerald, New Riff, Bulleit, 2XO
							</p>
						</div>
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Brandy
							</h3>
							<p className="text-stone-600">
								Barton&apos;s, Korbel
							</p>
						</div>
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Gin
							</h3>
							<p className="text-stone-600">
								Gordons, Bombay Sapphire, Hendricks
							</p>
						</div>
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Rum
							</h3>
							<p className="text-stone-600">
								Castillo, Captain Morgan Spiced, Captain Morgan
								Coconut, Bacardi
							</p>
						</div>
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Tequila
							</h3>
							<p className="text-stone-600">Campo Bravo</p>
						</div>
						<div>
							<h3 className="mb-2 border-b border-stone-100 pb-1 font-sans text-xl font-bold text-stone-800 uppercase">
								Vodka
							</h3>
							<p className="text-stone-600">
								Gordons, Titos, Rock&apos;n, Grey Goose
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
