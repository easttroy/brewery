import { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "Page Not Found",
	description:
		"The page you were looking for could not be found. Explore East Troy Brewery's menus, tap list, and hours.",
};

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="Page Not Found"
				subtitle="Looks like that tap kicked. Let's pour you something fresh."
				eyebrow="404 Error"
			/>

			<section className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
				<div className="border-etbrew-gold w-full rounded-xs border-t-4 bg-white p-10 shadow-lg sm:p-12 md:p-16">
					<h2 className="mb-4 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Where Can We Take You?
					</h2>
					<div className="bg-etbrew-gold/70 mx-auto mb-6 h-0.5 w-12" />
					<p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-stone-600 sm:text-lg">
						The link you followed may be outdated or moved. Jump
						straight to our scratch kitchen menu, live draft list,
						or taproom hours below.
					</p>

					<div className="flex flex-col justify-center gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
						<Button href="/menus/food" variant="gold">
							Food Menu
						</Button>
						<Button href="/menus/drafts" variant="outline">
							Draft List
						</Button>
						<Button href="/visit-us" variant="outline">
							Hours &amp; Directions
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
