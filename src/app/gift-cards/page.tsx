import { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "Gift Cards",
	description: "Purchase gift cards for East Troy Brewery.",
};

export default function GiftCards() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader
				title="Gift Cards"
				subtitle="Thinking of you, and also me, and also beer."
			/>

			{/* Content */}
			<section className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
				<div className="border-etbrew-teal w-full rounded-xs border-t-4 bg-white p-10 shadow-lg sm:p-12 md:p-16">
					<h2 className="mb-4 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Give the Gift of Great Beer
					</h2>
					<div className="bg-etbrew-gold/70 mx-auto mb-6 h-0.5 w-12" />
					<p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-stone-600">
						East Troy Brewery gift cards make the perfect gift for
						the craft beer lover or foodie in your life. Physical
						gift cards can be purchased in the taproom, or you can
						send an e-gift card instantly via Toast.
					</p>

					<div className="mx-auto flex max-w-sm flex-col justify-center gap-4">
						<Button
							href="https://www.toasttab.com/east-troy-brewery/giftcards?utmCampaign=onlineOrdering"
							target="_blank"
							variant="gold"
							className="w-full py-4 text-base sm:text-lg"
						>
							Purchase E-Gift Card
						</Button>
						<Button
							href="/visit-us"
							variant="outline"
							className="w-full py-4 text-base sm:text-lg"
						>
							Get Directions
						</Button>
					</div>

					<p className="mt-10 text-sm text-stone-500 italic">
						E-gift cards are processed securely through Toast. They
						can be redeemed for food, beverages, and merchandise at
						the brewery.
					</p>
				</div>
			</section>
		</div>
	);
}
