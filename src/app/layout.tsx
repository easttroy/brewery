import type { Metadata } from "next";
import { Averia_Serif_Libre, Marmelad, Open_Sans } from "next/font/google";
import "./globals.css";

const averia = Averia_Serif_Libre({
	weight: ["300", "400", "700"],
	variable: "--font-averia",
	subsets: ["latin"],
});

const marmelad = Marmelad({
	weight: "400",
	variable: "--font-marmelad",
	subsets: ["latin"],
});

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		template: "%s | East Troy Brewery",
		default: "East Troy Brewery | Handcrafted Food & Beer in WI",
	},
	description:
		"Modern-rustic brewery in East Troy, WI featuring handcrafted pints, elevated plates, and a historic atmosphere.",
	keywords: [
		"brewery",
		"East Troy",
		"Wisconsin",
		"craft beer",
		"restaurant",
		"supper club",
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
				url: "https://etbrew.com/content/uploads/sites/20/2020/03/Brewery_Filled.jpg",
				width: 960,
				height: 720,
				alt: "East Troy Brewery exterior",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${averia.variable} ${marmelad.variable} ${openSans.variable} flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800 antialiased`}
			>
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
