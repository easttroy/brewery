import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://etbrew.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const routes: Array<{
		path: string;
		changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
		priority: number;
	}> = [
		{ path: "/", changeFrequency: "weekly", priority: 1.0 },
		{ path: "/menus/", changeFrequency: "weekly", priority: 0.9 },
		{ path: "/menus/food/", changeFrequency: "weekly", priority: 0.9 },
		{ path: "/menus/drafts/", changeFrequency: "hourly", priority: 0.9 },
		{ path: "/menus/cocktails/", changeFrequency: "weekly", priority: 0.8 },
		{ path: "/visit-us/", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/events/", changeFrequency: "daily", priority: 0.8 },
		{ path: "/about/", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/mug-club/", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/gift-cards/", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/sms/", changeFrequency: "yearly", priority: 0.5 },
		{
			path: "/privacy-policy/",
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			path: "/terms-and-conditions/",
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	return routes.map((route) => ({
		url: `${BASE_URL}${route.path}`,
		lastModified: now,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));
}

