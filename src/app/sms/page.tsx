import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "SMS Alerts",
	description:
		"Sign up for East Troy Brewery SMS alerts to stay in the loop on specials and events.",
};

export default function SMSAlerts() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			<PageHeader title="SMS Alerts" subtitle="Stay in the loop." />

			{/* Content */}
			<section className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
				<div className="border-etbrew-gold w-full rounded-xs border-t-4 bg-white p-8 shadow-lg sm:p-12 md:p-16">
					<h2 className="mb-4 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Sign up for SMS alerts
					</h2>
					<div className="bg-etbrew-gold/70 mx-auto mb-6 h-0.5 w-12" />
					<p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-stone-600">
						Get the latest news on special beer releases, taproom
						events, and exclusive discounts, delivered straight to
						your phone.
					</p>

					<div className="relative mx-auto w-full max-w-lg bg-transparent">
						<iframe
							src="https://app2.simpletexting.com/join/joinWebForm?webFormId=690b997eea162d7184c57748&c=USA"
							width="100%"
							height="600"
							style={{ border: "none" }}
							title="East Troy Brewery SMS Sign Up Form"
							className="mx-auto block w-full outline-none focus:outline-none"
						></iframe>
					</div>
				</div>
			</section>
		</div>
	);
}
