"use client";

import { useSyncExternalStore } from "react";

interface HoursRow {
	id: string;
	label: string;
	days: number[]; // 0 = Sunday ... 6 = Saturday
	closed?: boolean;
	hours?: string;
	barHours?: string;
	foodHours?: string;
}

const SCHEDULE: HoursRow[] = [
	{
		id: "mon",
		label: "Monday",
		days: [1],
		hours: "11:30am – 8:00pm",
	},
	{
		id: "tue",
		label: "Tuesday",
		days: [2],
		closed: true,
	},
	{
		id: "wed-thu",
		label: "Wednesday & Thursday",
		days: [3, 4],
		barHours: "11:30am – 9:00pm",
		foodHours: "11:30am – 8:00pm",
	},
	{
		id: "fri",
		label: "Friday",
		days: [5],
		barHours: "11:30am – 10:00pm",
		foodHours: "11:30am – 9:00pm",
	},
	{
		id: "sat",
		label: "Saturday",
		days: [6],
		barHours: "11:30am – 10:00pm",
		foodHours: "11:30am – 9:00pm",
	},
	{
		id: "sun",
		label: "Sunday",
		days: [0],
		hours: "11:30am – 7:00pm",
	},
];

function getCentralDayOfWeek(): number {
	try {
		const weekdayStr = new Intl.DateTimeFormat("en-US", {
			timeZone: "America/Chicago",
			weekday: "short",
		}).format(new Date());
		const map: Record<string, number> = {
			Sun: 0,
			Mon: 1,
			Tue: 2,
			Wed: 3,
			Thu: 4,
			Fri: 5,
			Sat: 6,
		};
		return map[weekdayStr] ?? new Date().getDay();
	} catch {
		return new Date().getDay();
	}
}

const emptySubscribe = () => () => {};

export default function HoursLedger({
	showBanner = false,
}: {
	showBanner?: boolean;
}) {
	const currentDay = useSyncExternalStore(
		emptySubscribe,
		getCentralDayOfWeek,
		() => null,
	);

	return (
		<div className="border-etbrew-teal rounded-xs border-t-4 bg-white p-6 shadow-md sm:p-8">
			{showBanner && (
				<p className="border-etbrew-gold/30 mb-6 rounded-xs border bg-stone-50 px-4 py-3 text-center text-xs font-bold tracking-[0.15em] text-stone-700 uppercase">
					Open for dine-in, patio seating &amp; carryout
				</p>
			)}

			<div className="divide-y divide-stone-100">
				{SCHEDULE.map((row) => {
					const isToday =
						currentDay !== null && row.days.includes(currentDay);

					return (
						<div
							key={row.id}
							className={`flex flex-col justify-between gap-1 py-4 transition-colors first:pt-1 last:pb-1 sm:flex-row sm:items-baseline sm:gap-4 ${
								isToday
									? "border-etbrew-gold -mx-3 rounded-xs border-l-3 bg-amber-50/40 px-3"
									: ""
							}`}
						>
							<div className="flex items-center gap-2.5">
								<h4
									className={`font-sans text-sm font-bold tracking-wider uppercase ${
										row.closed
											? "text-stone-400"
											: isToday
												? "text-stone-900"
												: "text-stone-800"
									}`}
								>
									{row.label}
								</h4>
								{isToday && (
									<span className="bg-etbrew-gold rounded-xs px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase">
										Today
									</span>
								)}
							</div>

							<div className="text-sm sm:text-right sm:text-base">
								{row.closed ? (
									<span className="font-medium tracking-wider text-stone-400 uppercase italic">
										Closed
									</span>
								) : row.hours ? (
									<span className="font-medium text-stone-700">
										{row.hours}
									</span>
								) : (
									<div className="space-y-0.5">
										<p className="font-medium text-stone-800">
											<span className="text-xs tracking-wider text-stone-500 uppercase">
												Bar:
											</span>{" "}
											{row.barHours}
										</p>
										<p className="text-sm text-stone-500">
											<span className="text-xs tracking-wider text-stone-400 uppercase">
												Kitchen:
											</span>{" "}
											{row.foodHours}
										</p>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
