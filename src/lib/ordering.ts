"use client";

import { useSyncExternalStore } from "react";

export const TOAST_ORDER_URL =
	"https://order.toasttab.com/online/east-troy-brewery";

/**
 * Master switch — set to false to hide online ordering buttons 24/7
 * regardless of time of day.
 */
export const ONLINE_ORDERING_ENABLED: boolean = false;

/**
 * East Troy Brewery kitchen / food-service hours in America/Chicago time,
 * expressed as minutes since midnight [openMinutes, closeMinutes].
 * null = closed all day.
 */
const KITCHEN_HOURS_BY_DAY: Record<number, [number, number] | null> = {
	0: [11 * 60 + 30, 19 * 60], // Sunday: 11:30am – 7:00pm
	1: [11 * 60 + 30, 20 * 60], // Monday: 11:30am – 8:00pm
	2: null, // Tuesday: Closed
	3: [11 * 60 + 30, 20 * 60], // Wednesday: 11:30am – 8:00pm
	4: [11 * 60 + 30, 20 * 60], // Thursday: 11:30am – 8:00pm
	5: [11 * 60 + 30, 21 * 60], // Friday: 11:30am – 9:00pm
	6: [11 * 60 + 30, 21 * 60], // Saturday: 11:30am – 9:00pm
};

const WEEKDAY_MAP: Record<string, number> = {
	Sun: 0,
	Mon: 1,
	Tue: 2,
	Wed: 3,
	Thu: 4,
	Fri: 5,
	Sat: 6,
};

export function checkKitchenOrderingOpen(now: Date = new Date()): boolean {
	if (!ONLINE_ORDERING_ENABLED) return false;

	try {
		const parts = new Intl.DateTimeFormat("en-US", {
			timeZone: "America/Chicago",
			weekday: "short",
			hour: "numeric",
			minute: "numeric",
			hourCycle: "h23",
		}).formatToParts(now);

		const weekdayStr = parts.find((p) => p.type === "weekday")?.value ?? "";
		const hourStr = parts.find((p) => p.type === "hour")?.value ?? "0";
		const minuteStr = parts.find((p) => p.type === "minute")?.value ?? "0";

		const day = WEEKDAY_MAP[weekdayStr];
		if (day === undefined) return false;

		const window = KITCHEN_HOURS_BY_DAY[day];
		if (!window) return false;

		const [openMins, closeMins] = window;
		const currentMins = (Number(hourStr) % 24) * 60 + Number(minuteStr);

		return currentMins >= openMins && currentMins < closeMins;
	} catch {
		return ONLINE_ORDERING_ENABLED;
	}
}

function subscribeOrderingClock(callback: () => void): () => void {
	const interval = setInterval(callback, 60_000);
	const handleVisibility = () => {
		if (!document.hidden) callback();
	};
	document.addEventListener("visibilitychange", handleVisibility);

	return () => {
		clearInterval(interval);
		document.removeEventListener("visibilitychange", handleVisibility);
	};
}

/**
 * Reactive hook returning true when online ordering is enabled and within
 * East Troy Brewery's posted kitchen hours (America/Chicago).
 */
export function useOrderingOpen(): boolean {
	return useSyncExternalStore(
		subscribeOrderingClock,
		() => checkKitchenOrderingOpen(),
		() => false,
	);
}
