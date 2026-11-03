import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import eventsDataRaw from "@/data/events.json";

export const metadata: Metadata = {
	title: "Brewery Events",
	description:
		"Check out upcoming events, weekly taproom specials, live music, and private party bookings at East Troy Brewery.",
};

interface BreweryEvent {
	id: string;
	name: string;
	url?: string;
	ctaLabel?: string;
	date: string;
	startDate?: string; // Optional YYYY-MM-DD for automatic past/upcoming rollover
	description?: string;
	isCanceled?: boolean;
	isPast?: boolean;
	manual?: boolean;
	image?: string | null;
}

const WEEKLY_TRADITIONS = [
	{
		day: "Every Wednesday",
		title: "Wing Wednesday",
		description:
			"Traditional or boneless wings tossed in your choice of house sauces and signature dry rubs.",
	},
	{
		day: "Every Thursday",
		title: "Taco Thursday",
		description:
			"Chef-crafted weekly taco specials from our scratch kitchen, paired best with a crisp house pint.",
	},
	{
		day: "Every Friday",
		title: "Friday Fish Fry",
		description:
			"A classic Wisconsin Friday tradition served alongside our full taproom food and draft menus.",
	},
];

function getChicagoDateIso(): string {
	try {
		return new Intl.DateTimeFormat("en-CA", {
			timeZone: "America/Chicago",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(new Date());
	} catch {
		return new Date().toISOString().slice(0, 10);
	}
}

export default function Events() {
	const todayIso = getChicagoDateIso();
	const eventsData = (eventsDataRaw as BreweryEvent[]).filter(
		(e) => !e.isCanceled,
	);

	const isEventPast = (event: BreweryEvent) => {
		if (event.startDate && /^\d{4}-\d{2}-\d{2}$/.test(event.startDate)) {
			return event.startDate < todayIso;
		}
		return Boolean(event.isPast);
	};

	const upcomingEvents = eventsData.filter((e) => !isEventPast(e));
	const previousEvents = eventsData.filter((e) => isEventPast(e)).slice(0, 6);

	const parseDate = (dateStr: string) => {
		const parts = dateStr.split(/[\s,]+/);
		if (parts.length >= 3) {
			return { month: parts[1], day: parts[2] };
		}
		return { month: "TBD", day: "--" };
	};

	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="Brewery Events"
				subtitle="Live music. Comedy nights. Beer releases."
				eyebrow="What's Happening"
			/>

			{/* Content */}
			<section className="mx-auto w-full max-w-5xl space-y-20 px-4 py-16 sm:py-20">
				{/* Upcoming Events */}
				<div>
					<div className="mb-10 text-center">
						<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Upcoming Events
						</h2>
						<div className="bg-etbrew-gold/70 mx-auto mt-3 h-0.5 w-12" />
					</div>

					{upcomingEvents.length === 0 ? (
						<div className="border-etbrew-gold mx-auto max-w-3xl rounded-xs border-t-4 bg-white p-8 text-center shadow-md sm:p-12">
							<p className="text-etbrew-gold mb-2 text-xs font-bold tracking-[0.2em] uppercase">
								Live Music &bull; Specials &bull; Tap Releases
							</p>
							<h3 className="font-serif text-2xl tracking-wide text-stone-800 uppercase sm:text-3xl">
								New Dates Announced On Social
							</h3>
							<p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-stone-600">
								We post newly scheduled live music, comedy
								nights, supper clubs, and seasonal beer releases
								directly on our Facebook and Instagram pages.
							</p>
							<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
								<Button
									href="https://www.facebook.com/ETBrew/events"
									target="_blank"
									variant="gold"
								>
									Facebook Events
								</Button>
								<Button
									href="https://www.instagram.com/easttroybrewery/"
									target="_blank"
									variant="outline"
								>
									Follow on Instagram
								</Button>
							</div>
						</div>
					) : (
						<div className="mx-auto max-w-4xl space-y-6">
							{upcomingEvents.map((event, index) => {
								const { month, day } = parseDate(event.date);
								const borderColor =
									index % 2 === 0
										? "border-etbrew-gold"
										: "border-etbrew-teal";
								const isTicketUrl = Boolean(
									event.url?.includes("eventbrite.com"),
								);
								const ctaText =
									event.ctaLabel ||
									(isTicketUrl
										? "Get Tickets"
										: "Event Details");

								return (
									<div
										key={event.id}
										className={`rounded-xs border-l-4 bg-white ${borderColor} flex flex-col items-start gap-6 p-6 shadow-md transition-shadow hover:shadow-lg sm:p-8 md:flex-row md:items-center md:gap-8`}
									>
										<div className="group relative flex h-44 w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-xs border border-stone-200 md:h-40 md:w-56">
											{event.image ? (
												<>
													<Image
														src={event.image}
														alt={event.name}
														fill
														className="object-cover transition-transform duration-500 group-hover:scale-105"
														sizes="(max-width: 768px) 100vw, 224px"
													/>
													<div className="absolute inset-0 bg-stone-900/45 transition-colors duration-500 group-hover:bg-stone-900/25" />

													<div className="relative z-10 rounded-xs bg-stone-900/80 px-3.5 py-2 text-center shadow-md backdrop-blur-xs">
														<span className="mb-0.5 block text-[11px] font-bold tracking-widest text-stone-200 uppercase">
															{month}
														</span>
														<span className="block font-serif text-3xl leading-none text-white">
															{day}
														</span>
													</div>
												</>
											) : (
												<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100">
													<span className="mb-1 block text-xs font-bold tracking-widest text-stone-500 uppercase">
														{month}
													</span>
													<span className="block font-serif text-4xl text-stone-900">
														{day}
													</span>
												</div>
											)}
										</div>

										<div className="flex-grow">
											<p className="text-etbrew-gold mb-1.5 text-xs font-bold tracking-widest uppercase">
												{event.date}
											</p>
											<h3 className="mb-2.5 font-serif text-2xl leading-snug text-stone-800 uppercase">
												{event.name}
											</h3>
											{event.description && (
												<p className="mb-5 text-sm leading-relaxed text-stone-600">
													{event.description}
												</p>
											)}
											<div className="flex flex-wrap items-center gap-3">
												{event.url && (
													<Button
														href={event.url}
														target="_blank"
														variant={
															isTicketUrl
																? "gold"
																: "outline"
														}
														className="text-xs"
													>
														{ctaText}
													</Button>
												)}
												<a
													href="https://www.facebook.com/ETBrew/events"
													target="_blank"
													rel="noopener noreferrer"
													className="text-xs font-bold tracking-wider text-stone-500 uppercase underline underline-offset-4 transition-colors hover:text-stone-800"
												>
													Facebook Events &rarr;
												</a>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>

				{/* Weekly Taproom Traditions */}
				<div>
					<div className="mb-10 text-center">
						<p className="text-etbrew-teal mb-2 text-xs font-bold tracking-[0.2em] uppercase">
							Every Week At The Brewery
						</p>
						<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
							Weekly Specials
						</h2>
						<div className="bg-etbrew-gold/70 mx-auto mt-3 h-0.5 w-12" />
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{WEEKLY_TRADITIONS.map((item) => (
							<div
								key={item.title}
								className="border-etbrew-teal flex flex-col rounded-xs border-t-4 bg-white p-6 shadow-sm sm:p-7"
							>
								<span className="text-etbrew-gold mb-2 text-xs font-bold tracking-widest uppercase">
									{item.day}
								</span>
								<h3 className="mb-2.5 font-serif text-xl tracking-wide text-stone-800 uppercase">
									{item.title}
								</h3>
								<p className="text-sm leading-relaxed text-stone-600">
									{item.description}
								</p>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<Link
							href="/menus/food/#weekly-specials"
							className="text-etbrew-teal border-etbrew-teal inline-block border-b-2 pb-1 text-xs font-bold tracking-wider uppercase transition-colors hover:border-stone-800 hover:text-stone-800"
						>
							Explore Our Scratch Kitchen Menu &rarr;
						</Link>
					</div>
				</div>

				{/* Past Event Highlights (2-column compact horizontal cards) */}
				{previousEvents.length > 0 && (
					<div>
						<div className="mb-10 text-center">
							<h2 className="font-serif text-2xl tracking-wide text-stone-700 uppercase sm:text-3xl">
								Past Events
							</h2>
							<div className="mx-auto mt-3 h-0.5 w-12 bg-stone-300" />
						</div>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							{previousEvents.map((event) => {
								const { month, day } = parseDate(event.date);

								return (
									<a
										key={event.id}
										href={
											event.url ||
											"https://www.facebook.com/ETBrew/events"
										}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-4 rounded-xs border border-stone-200/90 bg-white p-3.5 shadow-2xs transition-all hover:border-stone-300 hover:shadow-sm sm:p-4"
									>
										<div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xs border border-stone-200 bg-stone-200 sm:h-20 sm:w-28">
											{event.image ? (
												<>
													<Image
														src={event.image}
														alt={event.name}
														fill
														className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
														sizes="112px"
													/>
													<div className="absolute inset-0 bg-stone-900/45 transition-colors duration-500 group-hover:bg-stone-900/20" />
												</>
											) : (
												<div className="absolute inset-0 bg-stone-800" />
											)}
											<div className="absolute inset-0 flex flex-col items-center justify-center text-center drop-shadow">
												<span className="block text-[10px] font-bold tracking-widest text-stone-200 uppercase">
													{month}
												</span>
												<span className="block font-serif text-xl leading-none text-white">
													{day}
												</span>
											</div>
										</div>

										<div className="min-w-0 flex-grow">
											<p className="text-[11px] font-bold tracking-wider text-stone-400 uppercase">
												{event.date}
											</p>
											<h3 className="group-hover:text-etbrew-teal mt-0.5 line-clamp-2 font-serif text-base leading-snug text-stone-800 uppercase transition-colors sm:text-lg">
												{event.name}
											</h3>
										</div>
									</a>
								);
							})}
						</div>

						<div className="mt-10 text-center">
							<a
								href="https://www.facebook.com/ETBrew/events"
								target="_blank"
								rel="noopener noreferrer"
								className="text-etbrew-teal border-etbrew-teal inline-block border-b-2 pb-1 text-sm font-bold tracking-wider uppercase transition-colors hover:border-stone-800 hover:text-stone-800"
							>
								See All Events on Facebook &rarr;
							</a>
						</div>
					</div>
				)}
			</section>

			{/* Private Events CTA */}
			<section
				className="border-etbrew-teal mt-auto border-t-4 bg-stone-900 px-4 py-20"
				style={{
					backgroundImage:
						"radial-gradient(ellipse at 50% 30%, rgba(173, 140, 26, 0.12) 0%, transparent 75%)",
				}}
			>
				<div className="mx-auto max-w-4xl text-center text-white">
					<h2 className="mb-6 font-serif text-3xl tracking-wide text-white uppercase sm:text-4xl">
						Host Your Next Event With Us
					</h2>
					<p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-300">
						Looking for a unique space for your rehearsal dinner,
						corporate gathering, or birthday party? The brewery is
						available for private events.
					</p>
					<Button
						href="https://docs.google.com/forms/d/e/1FAIpQLSeVM75ot-3YXXhFJKE7BeR_CL4aJFr715Nuh2JeqTq7oh_yfQ/viewform?usp=sf_link"
						target="_blank"
						variant="gold"
						className="px-8 py-4 text-base sm:text-lg"
					>
						Book a Private Party
					</Button>
				</div>
			</section>
		</div>
	);
}
