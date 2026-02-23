import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
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
			{/* Page Header */}
			<section className="border-etbrew-gold relative border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<div className="absolute inset-0 z-10 bg-black/40" />
				<div className="relative z-20 mx-auto max-w-4xl">
					<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
						Brewery Events
					</h1>
					<div className="bg-etbrew-gold mx-auto mb-6 h-1 w-24"></div>
					<p className="mx-auto max-w-2xl font-sans text-xl">
						Live music. Comedy nights. Beer releases.
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="mx-auto w-full max-w-4xl px-4 py-24">
				<div className="mb-16 text-center">
					<h2 className="mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Upcoming Events
					</h2>

					{upcomingEvents.length === 0 ? (
						<div className="mt-8 rounded border border-stone-200 bg-stone-100 p-8 text-stone-500 shadow-inner">
							<p className="text-xl font-bold tracking-wide uppercase">
								No Upcoming Events
							</p>
							<p className="mt-2 text-stone-600">
								Please check back later for new dates!
							</p>
						</div>
					) : (
						<div className="mt-8 space-y-8 text-left">
							{upcomingEvents.map((event, index) => {
								const { month, day } = parseDate(event.date);
								// Alternate border colors just for visual variety
								const borderColor =
									index % 2 === 0
										? "border-etbrew-teal"
										: "border-etbrew-gold";

								return (
									<div
										key={event.id}
										className={`border-l-8 bg-white ${borderColor} flex flex-col items-start gap-8 p-8 shadow transition-shadow hover:shadow-lg md:flex-row`}
									>
										<div className="group relative flex h-[120px] w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded border border-stone-200 sm:w-[120px] md:h-32 md:w-48">
											{event.image ? (
												<>
													<Image
														src={event.image}
														alt={event.name}
														fill
														className="object-cover transition-transform duration-500 group-hover:scale-110"
														sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 192px"
													/>
													<div className="absolute inset-0 bg-stone-900/60 transition-colors duration-500 group-hover:bg-stone-900/30"></div>

													<div className="relative z-10 text-center drop-shadow-md">
														<span className="mb-1 block text-sm font-bold tracking-widest text-stone-200 uppercase">
															{month}
														</span>
														<span className="block font-serif text-4xl text-white">
															{day}
														</span>
													</div>
												</>
											) : (
												<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100">
													<span className="mb-1 block text-sm font-bold tracking-widest text-stone-500 uppercase">
														{month}
													</span>
													<span className="block font-serif text-4xl text-stone-900">
														{day}
													</span>
												</div>
											)}
										</div>

										<div className="flex-grow">
											<h3 className="mb-2 font-serif text-2xl text-stone-800 uppercase">
												{event.name}
											</h3>
											<p className="mb-4 font-bold text-stone-500">
												{event.date}
											</p>
											<div className="mt-4">
												<Button
													href={event.url}
													target="_blank"
													variant="outline"
													className="text-sm"
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

				<div className="mt-20 mb-12 text-center">
					<h2 className="mb-6 inline-block border-b border-stone-200 pb-2 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Previous Events
					</h2>
				</div>

				{previousEvents.length === 0 ? (
					<div className="rounded border border-stone-200 bg-stone-100 p-8 text-center text-stone-500 shadow-inner">
						<p className="text-xl font-bold tracking-wide uppercase">
							No Previous Events
						</p>
					</div>
				) : (
					<div className="space-y-8 opacity-75">
						{previousEvents.map((event, index) => {
							const { month, day } = parseDate(event.date);
							const borderColor =
								index % 2 === 0
									? "border-stone-400"
									: "border-stone-300";

							return (
								<div
									key={event.id}
									className={`border-l-8 bg-white ${borderColor} flex flex-col items-start gap-8 p-8 shadow md:flex-row`}
								>
									<div className="group relative flex h-[120px] w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded border border-stone-200 sm:w-[120px] md:h-28 md:w-40">
										{event.image ? (
											<>
												<Image
													src={event.image}
													alt={event.name}
													fill
													className="object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
													sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 160px"
												/>
												<div className="absolute inset-0 bg-stone-900/70 transition-colors duration-500 group-hover:bg-stone-900/40"></div>

												<div className="relative z-10 text-center drop-shadow-md">
													<span className="mb-1 block text-sm font-bold tracking-widest text-stone-300 uppercase">
														{month}
													</span>
													<span className="block font-serif text-4xl text-stone-50">
														{day}
													</span>
												</div>
											</>
										) : (
											<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 opacity-75">
												<span className="mb-1 block text-sm font-bold tracking-widest text-stone-400 uppercase">
													{month}
												</span>
												<span className="block font-serif text-4xl text-stone-700">
													{day}
												</span>
											</div>
										)}
									</div>

									<div className="flex-grow">
										<h3 className="mb-2 font-serif text-xl text-stone-600 uppercase">
											{event.name}
										</h3>
										<p className="mb-4 font-bold text-stone-400">
											{event.date}
										</p>
										<div className="mt-2">
											<a
												href={event.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-stone-400 underline underline-offset-4 hover:text-stone-600"
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
						className="text-etbrew-teal border-etbrew-teal inline-block border-b-2 pb-1 font-bold tracking-wide uppercase transition-colors hover:border-stone-800 hover:text-stone-800"
					>
						See All Events on Facebook →
					</a>
				</div>
			</section>

			{/* Private Events CTA */}
			<section className="mt-auto bg-stone-900 px-4 py-20">
				<div className="mx-auto max-w-4xl text-center text-white">
					<h2 className="mb-6 font-serif text-4xl tracking-wide text-white uppercase">
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
						className="px-8 py-4 text-lg"
					>
						Book a Private Party
					</Button>
				</div>
			</section>
		</div>
	);
}
