import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

function FireIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			aria-hidden="true"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
			/>
		</svg>
	);
}

function BeerMugIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			aria-hidden="true"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 7v11a2 2 0 002 2h6a2 2 0 002-2V7"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9 7V4 M13 7V3 M5 7h12"
			/>
		</svg>
	);
}

function MartiniIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			aria-hidden="true"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3 5l9 9 9-9"
			/>
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
		icon: (
			<FireIcon className="text-etbrew-gold mb-5 h-11 w-11 transition-transform duration-300 group-hover:scale-110" />
		),
		description:
			"Elevated plates, shared snacks, brick oven pizzas, & more.",
	},
	{
		title: "Beers",
		href: "/menus/drafts",
		icon: (
			<BeerMugIcon className="text-etbrew-gold mb-5 h-11 w-11 transition-transform duration-300 group-hover:scale-110" />
		),
		description:
			"Handcrafted beers brewed right here on the historic East Troy square.",
	},
	{
		title: "Cocktails & More",
		href: "/menus/cocktails",
		icon: (
			<MartiniIcon className="text-etbrew-gold mb-5 h-11 w-11 transition-transform duration-300 group-hover:scale-110" />
		),
		description:
			"Specialty house cocktails, mocktails, wine, and a curated spirits selection.",
	},
];

export default function MenusOverview() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="Our Menus"
				subtitle="Scratch-made food, house-brewed beers, and crafted cocktails."
			/>

			{/* Main Content */}
			<section className="mx-auto w-full max-w-5xl px-4 py-20">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{menuLinks.map((menu) => (
						<Link
							key={menu.title}
							href={menu.href}
							className="border-etbrew-gold group flex h-full flex-col items-center justify-center rounded-xs border-t-4 bg-white p-10 text-center text-stone-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-12"
						>
							{menu.icon}
							<h2 className="mb-3 font-serif text-2xl tracking-wide text-stone-800 uppercase sm:text-3xl">
								{menu.title}
							</h2>
							<p className="mb-6 font-sans text-sm leading-relaxed sm:text-base">
								{menu.description}
							</p>
							<span className="text-etbrew-teal mt-auto text-xs font-bold tracking-widest uppercase transition-colors group-hover:text-stone-900">
								View Menu &rarr;
							</span>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
