import { Metadata } from "next";
import Button from "@/components/Button";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
	title: "Food Menu",
	description:
		"Explore our handcrafted food menu, featuring elevated plates and supper club specials at East Troy Brewery.",
};

const menuCategories = [
	{
		title: "Starters",
		items: [
			{
				name: "Brussel Sprouts",
				price: "$12",
				description:
					"Fried brussel sprouts, tossed in honey garlic glaze, with bacon, parmesan, served with truffle aioli",
			},
			{
				name: "Cheese Curds",
				price: "$15",
				description:
					"Hill Valley, Battered and fried cheddar curds. Jalapeno Ranch & Sundried tomato aioli",
			},
			{
				name: "Garlic Pretzel Bites",
				price: "$12",
				description: "IPA White Cheddar Sauce",
			},
			{
				name: "Brewers Bites",
				price: "$15",
				description:
					"Fried mac n cheese bites, filled with chorizo, hatch green chilis, Hot Honey, served with IPA white cheddar sauce",
			},
			{
				name: "Baked Goat Cheese",
				price: "$14",
				description:
					"Lemon and herb goat cheese dip, garlic breadcrumbs, Grilled Pita.",
			},
		],
	},
	{
		title: "Main Course",
		items: [
			{
				name: "Brewery Burger",
				price: "$18",
				description:
					"8oz Chuck, brisket, and short rib blend. Bacon & onion jam, gruyere cheese, arugula, tomato, roasted garlic aioli, brioche bun and fries",
			},
			{
				name: "Hot Chicken Sandwich",
				price: "$15",
				description:
					"Buttermilk fried chicken breast, hot honey glaze, house pickles, pickled vegetable and jalapeno slaw served with fries",
			},
			{
				name: "Bratwurst Roll",
				price: "$12",
				description:
					"Hometown Sausage Bratwurst, Beer braised onions, wholegrain mustard aioli, pretzel roll served with fries",
			},
			{
				name: "Baked Mac n Cheese",
				price: "$12",
				description:
					"IPA white cheddar sauce, herb breadcrumbs, chives. Add Chicken $5",
			},
			{
				name: "Wings",
				price: "$10 - $16",
				description:
					"6 or 12 Traditional wings served with buffalo, bourbon bbq, mango habanero, thai chili, zess pepper ranch, or garlic parmesan. Not available on Fridays",
			},
		],
	},
	{
		title: "Salads",
		note: "Add Chicken + $4",
		items: [
			{
				name: "Caeser",
				price: "$15",
				description:
					"Romaine lettuce, Creamy caeser dressing, grated parmesan, shaved parmesan, garlic pretzel croutons",
			},
			{
				name: "Apple Arugula",
				price: "$16",
				description:
					"Granny smith apples, shallots, candied walnuts, gorgonzola, honey IPA vinaigrette",
			},
			{
				name: "Fall Mixed Greens",
				price: "$16",
				description:
					"Roasted butternut squash, dried cranberries, spiced pecans, goat cheese, maple dijon vinaigrette",
			},
		],
	},
	{
		title: "Entrees",
		note: "Served after 4pm",
		items: [
			{
				name: "Shrimp Scampi",
				price: "$25",
				description:
					"Tail on shrimp, garlic, red pepper flakes, linguini, IPA Infused butter sauce, breadcrumbs.",
			},
			{
				name: "Short Rib Gnocchi",
				price: "$35",
				description:
					"Beer Braised Beef short ribs, kale, baby carrots, gnocchi, beer braise reduction",
			},
			{
				name: "Ale Glazed Salmon",
				price: "$28",
				description:
					"Ale & Honey Glazed Grilled Salmon, Herb Roasted Fingerling Potatoes, Broccolini",
			},
			{
				name: "Chicken Alfredo",
				price: "$20",
				description:
					"Garlic herb breaded chicken breast, penne pasta, alfredo sauce, grated parmesan",
			},
		],
	},
	{
		title: "Brick Oven",
		note: "Build your own option available",
		items: [
			{
				name: "Truffle Pear",
				price: "$20",
				description:
					"White garlic sauce, anjou pears, shredded fontina, truffle oil, balsamic glaze, arugula",
			},
			{
				name: "Spicy Pepperoni",
				price: "$20",
				description:
					"Sliced pepperoni and sopresetta, shredded and fresh mozzarella, hot honey",
			},
			{
				name: "Bacon & Beer",
				price: "$20",
				description:
					"IPA white cheddar sauce, bacon, pancetta, mozzarella, cheddar, chives.",
			},
			{
				name: "Wild Mushroom",
				price: "$21",
				description:
					"Roasted wild mushroom blend, fontina, alfredo cream sauce, truffle oil, parsley",
			},
		],
	},
	{
		title: "Sides",
		items: [
			{
				name: "French Fries",
				price: "$5",
			},
			{
				name: "Sweet Potato Fries",
				price: "$6",
			},
			{
				name: "Truffle Tots",
				price: "$7",
				description: "Truffle oil, parmesan, chives, Garlic Aioli",
			},
			{
				name: "Side House Salad",
				price: "$6",
				description: "Mixed greens, tomato, onion, ranch.",
			},
			{
				name: "White Cheddar Mac n Cheese",
				price: "$5",
			},
		],
	},
	{
		title: "Soup & Chili",
		items: [
			{
				name: "Soup Of The Day",
				price: "Cup $5 Bowl $8",
			},
			{
				name: "White Bean Chicken Chili",
				price: "Cup $5 Bowl $9",
				description:
					"Salsa Verde based, Cilantro, Shredded Chicken, northern white beans, Topped with Lime Crema Pickled Onions.",
			},
			{
				name: "Beef Chili",
				price: "Cup $5 Bowl $9",
				description:
					"Peppers, Onions, Ground Beef, Pinto Beans, Kidney Beans. Topped with Cheddar Cheese & Green Onions.",
			},
		],
	},
	{
		title: "Friday Fish Fry",
		items: [
			{
				name: "Grilled Pacific Cod",
				price: "$18",
				description:
					"Lemon & herb grilled, served with coleslaw, tartar sauce and French fries.",
			},
			{
				name: "Fried Cod",
				price: "$18",
				description:
					"House beer battered cod, served with coleslaw, tartar, and French fries",
			},
			{
				name: "Fried Perch",
				price: "$20",
				description:
					"Zander pike perch, panko breaded. Served with coleslaw, tartar sauce and French fries. \nUpgrade to potato pancakes + $3",
			},
		],
	},
	{
		title: "Saturday Prime Rib",
		note: "Starting at 4pm",
		items: [
			{
				name: "Herb Crusted 14oz Prime Rib",
				price: "$28",
				description:
					"Served with Vegetable of the day, Choice of Baked Potato or French Fries, Au Jus, & creamy Horseradish",
			},
		],
	},
	{
		title: "Sweets",
		items: [
			{
				name: "Apple Strudel Eggrolls",
				price: "$12",
				description:
					"Apple pie filled and fried eggrolls, cinnamon sugar, white icing.",
			},
			{
				name: "Seasonal Cheesecake",
				price: "$12",
				description: "Rotating homemade cheesecake. Ask for flavors.",
			},
			{
				name: "Brownie Sundae",
				price: "$10",
				description:
					"Cast iron brownie, peanut butter icecream, caramel, roasted peanut",
			},
		],
	},
];

export default function FoodMenu() {
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

					<div className="mt-16 text-center">
						<p className="mb-8 text-sm text-stone-500 italic">
							Ask us about our private events and catering options
						</p>
						<Button
							href="https://www.toasttab.com/east-troy-brewery/v3"
							target="_blank"
							className="px-8 py-4 text-lg"
						>
							Order Online for Pickup
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
