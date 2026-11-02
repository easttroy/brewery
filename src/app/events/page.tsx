import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import eventsData from "@/data/events.json";

export const metadata: Metadata = {
	title: "Brewery Events",
	description:
		"Check out upcoming events, live music, and specials at East Troy Brewery.",
};

export default function Events() {
	const upcomingEvents = eventsData.filter((e) => !e.isPast);
	const previousEvents = eventsData.filter((e) => e.isPast);

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
			<section className="mx-auto w-full max-w-4xl px-4 py-20">
				<div className="mb-16 text-center">
					<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Upcoming Events
					</h2>
					<div className="bg-etbrew-gold/70 mx-auto mt-3 mb-8 h-0.5 w-12" />

					{upcomingEvents.length === 0 ? (
						<div className="mt-8 rounded-xs border border-stone-200 bg-white p-10 text-stone-500 shadow-sm">
							<p className="font-serif text-xl tracking-wide text-stone-700 uppercase">
								No Upcoming Events
							</p>
							<p className="mt-2 text-stone-500">
								Please check back soon or follow us on Facebook
								for newly announced dates!
							</p>
						</div>
					) : (
						<div className="mt-8 space-y-6 text-left">
							{upcomingEvents.map((event, index) => {
								const { month, day } = parseDate(event.date);
								const borderColor =
									index % 2 === 0
										? "border-etbrew-teal"
										: "border-etbrew-gold";

								return (
									<div
										key={event.id}
										className={`rounded-xs border-l-4 bg-white ${borderColor} flex flex-col items-start gap-6 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 md:flex-row md:gap-8`}
									>
										<div className="group relative flex h-[120px] w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-xs border border-stone-200 sm:w-[120px] md:h-32 md:w-48">
											{event.image ? (
												<>
													<Image
														src={event.image}
														alt={event.name}
														fill
														className="object-cover transition-transform duration-500 group-hover:scale-105"
														sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 192px"
													/>
													<div className="absolute inset-0 bg-stone-900/60 transition-colors duration-500 group-hover:bg-stone-900/35" />

													<div className="relative z-10 text-center drop-shadow-md">
														<span className="mb-1 block text-xs font-bold tracking-widest text-stone-200 uppercase">
															{month}
														</span>
														<span className="block font-serif text-4xl text-white">
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
											<h3 className="mb-1.5 font-serif text-2xl text-stone-800 uppercase">
												{event.name}
											</h3>
											<p className="mb-4 text-sm font-bold tracking-wide text-stone-500 uppercase">
												{event.date}
											</p>
											<div className="mt-4">
												<Button
													href={event.url}
													target="_blank"
													variant="outline"
													className="text-xs"
												>
													View on Facebook
												</Button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>

				<div className="mt-20 mb-10 text-center">
					<h2 className="font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Previous Events
					</h2>
					<div className="mx-auto mt-3 h-0.5 w-12 bg-stone-300" />
				</div>

				{previousEvents.length === 0 ? (
					<div className="rounded-xs border border-stone-200 bg-white p-8 text-center text-stone-500 shadow-sm">
						<p className="text-xl font-bold tracking-wide uppercase">
							No Previous Events
						</p>
					</div>
				) : (
					<div className="space-y-6 opacity-80">
						{previousEvents.map((event, index) => {
							const { month, day } = parseDate(event.date);
							const borderColor =
								index % 2 === 0
									? "border-stone-400"
									: "border-stone-300";

							return (
								<div
									key={event.id}
									className={`rounded-xs border-l-4 bg-white ${borderColor} flex flex-col items-start gap-6 p-6 shadow-sm sm:p-8 md:flex-row md:gap-8`}
								>
									<div className="group relative flex h-[110px] w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-xs border border-stone-200 sm:w-[120px] md:h-28 md:w-40">
										{event.image ? (
											<>
												<Image
													src={event.image}
													alt={event.name}
													fill
													className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
													sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 160px"
												/>
												<div className="absolute inset-0 bg-stone-900/70 transition-colors duration-500 group-hover:bg-stone-900/40" />

												<div className="relative z-10 text-center drop-shadow-md">
													<span className="mb-1 block text-xs font-bold tracking-widest text-stone-300 uppercase">
														{month}
													</span>
													<span className="block font-serif text-3xl text-stone-50">
														{day}
													</span>
												</div>
											</>
										) : (
											<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 opacity-75">
												<span className="mb-1 block text-xs font-bold tracking-widest text-stone-400 uppercase">
													{month}
												</span>
												<span className="block font-serif text-3xl text-stone-700">
													{day}
												</span>
											</div>
										)}
									</div>

									<div className="flex-grow">
										<h3 className="mb-1.5 font-serif text-xl text-stone-600 uppercase">
											{event.name}
										</h3>
										<p className="mb-3 text-sm font-bold tracking-wide text-stone-400 uppercase">
											{event.date}
										</p>
										<div>
											<a
												href={event.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-stone-500 underline underline-offset-4 transition-colors hover:text-stone-800"
											>
												View on Facebook
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}

				<div className="mt-12 text-center">
					<a
						href="https://www.facebook.com/ETBrew/events"
						target="_blank"
						rel="noopener noreferrer"
						className="text-etbrew-teal border-etbrew-teal inline-block border-b-2 pb-1 text-sm font-bold tracking-wider uppercase transition-colors hover:border-stone-800 hover:text-stone-800"
					>
						See All Events on Facebook &rarr;
					</a>
				</div>
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
