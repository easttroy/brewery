"use client";

import { useSyncExternalStore } from "react";
import { computeTaproomStatus, subscribeClock } from "./hours";

export const TOAST_ORDER_URL =
	"https://order.toasttab.com/online/east-troy-brewery";

/**
 * Master switch — set to false to hide online ordering buttons 24/7
 * regardless of time of day.
 */
export const ONLINE_ORDERING_ENABLED: boolean = false;

export function checkKitchenOrderingOpen(now: Date = new Date()): boolean {
	if (!ONLINE_ORDERING_ENABLED) return false;
	return computeTaproomStatus(now).isKitchenOpen;
}

/**
 * Reactive hook returning true when online ordering is enabled and within
 * East Troy Brewery's posted kitchen hours (America/Chicago).
 */
export function useOrderingOpen(): boolean {
	return useSyncExternalStore(
		subscribeClock,
		() => checkKitchenOrderingOpen(),
		() => false,
	);
}
