"use client";

import { useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

const emptySubscribe = () => () => {};

function getCookieVerified(): boolean {
	return document.cookie
		.split("; ")
		.some((row) => row.startsWith("age_verified="));
}

export default function AgeGate() {
	const router = useRouter();
	const isCookieVerified = useSyncExternalStore(
		emptySubscribe,
		getCookieVerified,
		() => true,
	);
	const [dismissed, setDismissed] = useState(false);
	const [remember, setRemember] = useState(true);

	function handleConfirm() {
		if (remember) {
			const expires = new Date();
			expires.setDate(expires.getDate() + 30);
			document.cookie = `age_verified=true; expires=${expires.toUTCString()}; path=/`;
		} else {
			// Session cookie (no expires)
			document.cookie = "age_verified=true; path=/";
		}
		setDismissed(true);
	}

	function handleDeny() {
		router.push("/menus/food");
	}

	if (isCookieVerified || dismissed) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 p-4 backdrop-blur-sm"
			role="dialog"
			aria-modal="true"
			aria-labelledby="age-gate-title"
		>
			<div className="border-etbrew-gold w-full max-w-md rounded-xs border-t-4 bg-stone-900 px-8 py-10 text-center text-white shadow-2xl md:px-10 md:py-12">
				<p className="text-etbrew-gold-bright mb-3 font-sans text-xs font-bold tracking-[0.25em] uppercase">
					East Troy Brewery
				</p>
				<h2
					id="age-gate-title"
					className="font-serif text-3xl tracking-wide uppercase"
				>
					Are You 21 or Older?
				</h2>
				<div className="bg-etbrew-gold/70 mx-auto my-5 h-0.5 w-12" />
				<p className="mb-8 text-sm leading-relaxed text-stone-300 sm:text-base">
					Please verify your age to view our beer and cocktail menus.
				</p>

				<label className="mb-8 inline-flex cursor-pointer items-center justify-center gap-3 text-sm text-stone-300 transition-colors select-none hover:text-white">
					<input
						type="checkbox"
						checked={remember}
						onChange={(e) => setRemember(e.target.checked)}
						className="accent-etbrew-gold h-4 w-4 rounded-xs"
					/>
					<span>Remember me for 30 days</span>
				</label>

				<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
					<button
						onClick={handleConfirm}
						className="bg-etbrew-gold hover:bg-etbrew-gold-hover flex-1 cursor-pointer rounded-xs py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-sm transition-colors"
					>
						Yes, I Am 21+
					</button>
					<button
						onClick={handleDeny}
						className="flex-1 cursor-pointer rounded-xs border border-stone-600 py-3.5 text-sm font-bold tracking-wider text-stone-300 uppercase transition-colors hover:border-stone-400 hover:bg-stone-800 hover:text-white"
					>
						No, Food Menu Only
					</button>
				</div>
			</div>
		</div>
	);
}
