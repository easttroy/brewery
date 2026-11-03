import type { Metadata, Viewport } from "next";
import { Averia_Serif_Libre, Open_Sans } from "next/font/google";
import "./globals.css";

const averia = Averia_Serif_Libre({
	weight: ["300", "400", "700"],
	variable: "--font-averia",
	subsets: ["latin"],
});

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#1c1917",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://etbrew.com"),
	title: {
		template: "%s | East Troy Brewery",
		default: "East Troy Brewery | Handcrafted Food & Beer in WI",
	},
	description:
		"Modern-rustic brewery in East Troy, WI featuring handcrafted pints, elevated plates, and a historic atmosphere.",
	manifest: "/manifest.webmanifest",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "ET Brew",
	},
	keywords: [
		"brewery",
		"East Troy",
		"Wisconsin",
		"craft beer",
		"restaurant",
		"gastro-brewery",
	],
	openGraph: {
		title: "East Troy Brewery",
		description:
			"Modern-rustic brewery in East Troy, WI featuring handcrafted pints and elevated plates.",
		url: "https://etbrew.com",
		siteName: "East Troy Brewery",
		images: [
			{
				url: "https://etbrew.com/images/backgrounds/brewery-filled.jpg",
				width: 960,
				height: 720,
				alt: "East Troy Brewery exterior",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": ["Brewery", "Restaurant"],
	"@id": "https://etbrew.com/#organization",
	name: "East Troy Brewery",
	url: "https://etbrew.com/",
	logo: "https://etbrew.com/icon.png",
	image: "https://etbrew.com/images/backgrounds/brewery-filled.jpg",
	description:
		"Modern-rustic gastro-brewery on the historic Village Square in East Troy, Wisconsin featuring house-brewed beers and scratch-made comfort food.",
	telephone: "+1-262-642-2670",
	email: "info@etbrew.com",
	priceRange: "$$",
	servesCuisine: ["American", "Craft Beer", "Gastropub", "Pizza", "Burgers"],
	hasMenu: "https://etbrew.com/menus/food/",
	acceptsReservations: "https://etbrew.com/visit-us/",
	address: {
		"@type": "PostalAddress",
		streetAddress: "2905 Main St",
		addressLocality: "East Troy",
		addressRegion: "WI",
		postalCode: "53120",
		addressCountry: "US",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 42.7852,
		longitude: -88.4051,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Monday",
			opens: "11:30",
			closes: "20:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Wednesday", "Thursday"],
			opens: "11:30",
			closes: "21:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Friday", "Saturday"],
			opens: "11:30",
			closes: "22:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Sunday",
			opens: "11:30",
			closes: "19:00",
		},
	],
	sameAs: [
		"https://www.facebook.com/ETBrew/",
		"https://www.instagram.com/easttroybrewery/",
		"https://untappd.com/EastTroyBrewery",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${averia.variable} ${openSans.variable} flex min-h-screen flex-col bg-stone-50 pb-[calc(4.5rem+env(safe-area-inset-bottom))] font-sans text-stone-800 antialiased lg:pb-0`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
				<MobileNav />
			</body>
		</html>
	);
}
