import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
	title: "Gift Cards",
	description: "Purchase gift cards for East Troy Brewery.",
};

export default function GiftCards() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			{/* Page Header */}
			<section className="border-etbrew-gold relative border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<div className="relative z-20 mx-auto max-w-4xl">
					<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
						Gift Cards
					</h1>
					<div className="bg-etbrew-gold mx-auto mb-6 h-1 w-24"></div>
				</div>
			</section>

			{/* Content */}
			<section className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-4 py-32 text-center">
				<div className="border-etbrew-teal w-full rounded-sm border-t-8 bg-white p-12 shadow-2xl md:p-16">
					<h2 className="mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Give the Gift of Great Beer
					</h2>
					<p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-stone-600">
						East Troy Brewery gift cards make the perfect gift for
						the craft beer lover or foodie in your life. Physical
						gift cards can be purchased in the taproom, or you can
						send an e-gift card instantly via Toast.
					</p>

					<div className="mx-auto flex max-w-sm flex-col justify-center gap-6">
						<Button
							href="https://www.toasttab.com/east-troy-brewery/giftcards?utmCampaign=onlineOrdering"
							target="_blank"
							variant="gold"
							className="w-full py-4 text-lg"
						>
							Purchase E-Gift Card
						</Button>
						<Button
							href="/visit-us"
							variant="outline"
							className="w-full py-4 text-lg"
						>
							Get Directions
						</Button>
					</div>

					<p className="mt-12 text-sm text-stone-500 italic">
						Note: E-gift cards are processed securely through Toast.
						They can be redeemed for food, beverages, and
						merchandise at the brewery.
					</p>
				</div>
			</section>
		</div>
	);
}
