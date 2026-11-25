"use client";

import { useSyncExternalStore } from "react";

export interface DayWindow {
	open: number; // minutes since midnight (America/Chicago)
	kitchenClose: number;
	barClose: number;
	kitchenCloseLabel: string;
	barCloseLabel: string;
}

export const HOURS_BY_DAY: Record<number, DayWindow | null> = {
	0: {
		open: 11 * 60 + 30,
		kitchenClose: 19 * 60,
		barClose: 19 * 60,
		kitchenCloseLabel: "7:00pm",
		barCloseLabel: "7:00pm",
	},
	1: {
		open: 11 * 60 + 30,
		kitchenClose: 20 * 60,
		barClose: 20 * 60,
		kitchenCloseLabel: "8:00pm",
		barCloseLabel: "8:00pm",
	},
	2: null, // Tuesday: Closed
	3: {
		open: 11 * 60 + 30,
		kitchenClose: 20 * 60,
		barClose: 21 * 60,
		kitchenCloseLabel: "8:00pm",
		barCloseLabel: "9:00pm",
	},
	4: {
		open: 11 * 60 + 30,
		kitchenClose: 20 * 60,
		barClose: 21 * 60,
		kitchenCloseLabel: "8:00pm",
		barCloseLabel: "9:00pm",
	},
	5: {
		open: 11 * 60 + 30,
		kitchenClose: 21 * 60,
		barClose: 22 * 60,
		kitchenCloseLabel: "9:00pm",
		barCloseLabel: "10:00pm",
	},
	6: {
		open: 11 * 60 + 30,
		kitchenClose: 21 * 60,
		barClose: 22 * 60,
		kitchenCloseLabel: "9:00pm",
		barCloseLabel: "10:00pm",
	},
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

export interface TaproomStatus {
	day: number;
	monthDay: string;
	isOpen: boolean;
	isKitchenOpen: boolean;
	label: string;
	detail: string;
	holidayNote?: string;
}

export function getChicagoTimeParts(now: Date = new Date()): {
	day: number;
	minutes: number;
	monthDay: string;
} {
	try {
		const parts = new Intl.DateTimeFormat("en-US", {
			timeZone: "America/Chicago",
			month: "2-digit",
			day: "2-digit",
			weekday: "short",
			hour: "numeric",
			minute: "numeric",
			hourCycle: "h23",
		}).formatToParts(now);

		const monthStr = parts.find((p) => p.type === "month")?.value ?? "01";
		const dayStr = parts.find((p) => p.type === "day")?.value ?? "01";
		const weekdayStr = parts.find((p) => p.type === "weekday")?.value ?? "";
		const hourStr = parts.find((p) => p.type === "hour")?.value ?? "0";
		const minuteStr = parts.find((p) => p.type === "minute")?.value ?? "0";

		const day = WEEKDAY_MAP[weekdayStr] ?? now.getDay();
		const minutes = (Number(hourStr) % 24) * 60 + Number(minuteStr);
		const monthDay = `${monthStr}-${dayStr}`;
		return { day, minutes, monthDay };
	} catch {
		const m = String(now.getMonth() + 1).padStart(2, "0");
		const d = String(now.getDate()).padStart(2, "0");
		return {
			day: now.getDay(),
			minutes: now.getHours() * 60 + now.getMinutes(),
			monthDay: `${m}-${d}`,
		};
	}
}

export function computeTaproomStatus(now: Date = new Date()): TaproomStatus {
	const { day, minutes, monthDay } = getChicagoTimeParts(now);
	const todayWindow = HOURS_BY_DAY[day];
	const holidayNote =
		monthDay === "11-25"
			? "Closed Tomorrow (November 26) for Thanksgiving"
			: monthDay === "11-26"
				? "Closed Today (November 26) for Thanksgiving"
				: undefined;

	// Thanksgiving Day (November 26): closed all day
	if (monthDay === "11-26") {
		return {
			day,
			monthDay,
			isOpen: false,
			isKitchenOpen: false,
			label: "Closed for Thanksgiving",
			detail: "Opens Friday at 11:30am",
			holidayNote,
		};
	}

	if (!todayWindow) {
		return {
			day,
			monthDay,
			isOpen: false,
			isKitchenOpen: false,
			label: "Closed Today",
			detail: "Opens Wednesday at 11:30am",
			holidayNote,
		};
	}

	if (minutes < todayWindow.open) {
		return {
			day,
			monthDay,
			isOpen: false,
			isKitchenOpen: false,
			label: "Closed Now",
			detail: "Opens today at 11:30am",
			holidayNote,
		};
	}

	if (minutes < todayWindow.kitchenClose) {
		const sameClose = todayWindow.kitchenClose === todayWindow.barClose;
		return {
			day,
			monthDay,
			isOpen: true,
			isKitchenOpen: true,
			label: "Open Now",
			detail: sameClose
				? `Until ${todayWindow.barCloseLabel}`
				: `Kitchen til ${todayWindow.kitchenCloseLabel} · Bar til ${todayWindow.barCloseLabel}`,
			holidayNote,
		};
	}

	if (minutes < todayWindow.barClose) {
		return {
			day,
			monthDay,
			isOpen: true,
			isKitchenOpen: false,
			label: "Bar Open Now",
			detail: `Until ${todayWindow.barCloseLabel} · Kitchen closed`,
			holidayNote,
		};
	}

	// Past closing time today: check if tomorrow is Thanksgiving or Tuesday (closed)
	const nextDay = (day + 1) % 7;
	const detail =
		monthDay === "11-25"
			? "Closed Tomorrow (Nov 26) for Thanksgiving · Opens Friday at 11:30am"
			: HOURS_BY_DAY[nextDay] === null
				? "Opens Wednesday at 11:30am"
				: "Opens tomorrow at 11:30am";

	return {
		day,
		monthDay,
		isOpen: false,
		isKitchenOpen: false,
		label: "Closed Now",
		detail,
		holidayNote,
	};
}

let cachedKey = "";
let cachedSnapshot: TaproomStatus | null = null;

function getStatusSnapshot(): TaproomStatus {
	const now = new Date();
	const { day, minutes, monthDay } = getChicagoTimeParts(now);
	const key = `${monthDay}:${day}:${minutes}`;
	if (key !== cachedKey || !cachedSnapshot) {
		cachedKey = key;
		cachedSnapshot = computeTaproomStatus(now);
	}
	return cachedSnapshot;
}

export function subscribeClock(callback: () => void): () => void {
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

export function useTaproomStatus(): TaproomStatus | null {
	return useSyncExternalStore(subscribeClock, getStatusSnapshot, () => null);
}
