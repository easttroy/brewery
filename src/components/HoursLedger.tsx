"use client";

import { useTaproomStatus } from "@/lib/hours";

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
		hours: "11:30am - 8:00pm",
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
		barHours: "11:30am - 9:00pm",
		foodHours: "11:30am - 8:00pm",
	},
	{
		id: "fri",
		label: "Friday",
		days: [5],
		barHours: "11:30am - 10:00pm",
		foodHours: "11:30am - 9:00pm",
	},
	{
		id: "sat",
		label: "Saturday",
		days: [6],
		barHours: "11:30am - 10:00pm",
		foodHours: "11:30am - 9:00pm",
	},
	{
		id: "sun",
		label: "Sunday",
		days: [0],
		hours: "11:30am - 7:00pm",
	},
];

export default function HoursLedger({
	showBanner = false,
}: {
	showBanner?: boolean;
}) {
	const status = useTaproomStatus();
	const currentDay = status?.day ?? null;

	return (
		<div className="border-etbrew-teal rounded-xs border-t-4 bg-white p-6 shadow-md sm:p-8">
			{/* Live Open / Closed Status Pill */}
			{status && (
				<div
					className={`mb-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-xs border px-4 py-3 text-center text-xs sm:text-sm ${
						status.isOpen
							? "border-emerald-700/20 bg-emerald-50/70 text-emerald-950"
							: "border-stone-200 bg-stone-50 text-stone-700"
					}`}
				>
					<span
						className={`inline-flex items-center gap-2 font-bold tracking-wider uppercase ${
							status.isOpen
								? "text-emerald-800"
								: "text-stone-700"
						}`}
					>
						<span
							aria-hidden="true"
							className={`h-2 w-2 rounded-full ${
								status.isOpen
									? "bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]"
									: "bg-stone-400"
							}`}
						/>
						{status.label}
					</span>
					<span aria-hidden="true" className="text-stone-300">
						&bull;
					</span>
					<span className="font-medium text-stone-600">
						{status.detail}
					</span>
				</div>
			)}

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
