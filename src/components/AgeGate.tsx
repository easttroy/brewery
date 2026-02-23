"use client";

import { useState } from "react";

function getCookieVerified(): boolean {
	if (typeof document === "undefined") return true;
	return document.cookie
		.split("; ")
		.some((row) => row.startsWith("age_verified="));
}

export default function AgeGate() {
	const [showModal, setShowModal] = useState(() => !getCookieVerified());
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
		setShowModal(false);
	}

	function handleDeny() {
		window.location.href = "/our-food-menu";
	}

	if (!showModal) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
			<div className="w-full max-w-md rounded-2xl bg-stone-900 p-8 text-center text-white shadow-2xl md:p-10">
				<h2 className="mb-4 font-serif text-3xl font-bold tracking-wide uppercase">
					Are You 21 or Older?
				</h2>
				<p className="mb-8 text-stone-300">
					You must be at least 21 to enter this site.
				</p>

				<label className="mb-8 flex cursor-pointer items-center justify-center gap-3 select-none">
					<input
						type="checkbox"
						checked={remember}
						onChange={(e) => setRemember(e.target.checked)}
						className="accent-etbrew-gold h-5 w-5 rounded"
					/>
					<span className="text-stone-300">Remember for 30 days</span>
				</label>

				<div className="flex gap-4">
					<button
						onClick={handleConfirm}
						className="flex-1 rounded-lg bg-green-500 py-4 text-lg font-bold tracking-wider text-white uppercase transition-colors hover:bg-green-600"
					>
						Yes, let me in
					</button>
					<button
						onClick={handleDeny}
						className="flex-1 rounded-lg bg-rose-500 py-4 text-lg font-bold tracking-wider text-white uppercase transition-colors hover:bg-rose-600"
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
}
