import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SMS Alerts",
	description:
		"Sign up for East Troy Brewery SMS alerts to stay in the loop on specials and events.",
};

export default function SMSAlerts() {
	return (
		<div className="flex min-h-screen flex-col bg-stone-50">
			{/* Page Header */}
			<section className="border-etbrew-gold relative border-b-8 bg-stone-900 px-4 py-24 text-center text-white">
				<div className="relative z-20 mx-auto max-w-4xl">
					<h1 className="mb-6 font-serif text-5xl tracking-wider uppercase md:text-6xl">
						SMS Alerts
					</h1>
					<div className="bg-etbrew-gold mx-auto mb-6 h-1 w-24"></div>
					<p className="mx-auto max-w-2xl font-sans text-xl">
						Stay in the loop.
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-4 py-32 text-center">
				<div className="border-etbrew-gold w-full rounded-sm border-t-8 bg-white p-12 shadow-2xl md:p-16">
					<h2 className="mb-6 font-serif text-3xl tracking-wide text-stone-800 uppercase">
						Sign up for SMS alerts
					</h2>
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
