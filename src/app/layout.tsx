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
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
				<MobileNav />
			</body>
		</html>
	);
}
