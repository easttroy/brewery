interface PageHeaderProps {
	title: string;
	subtitle?: string;
	eyebrow?: string;
}

export default function PageHeader({
	title,
	subtitle,
	eyebrow,
}: PageHeaderProps) {
	return (
		<section className="border-etbrew-gold relative overflow-hidden border-b-4 bg-stone-900 px-4 py-16 text-center text-white md:py-24">
			{/* Subtle warm radial vignette for depth */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse at 50% 35%, rgba(173, 140, 26, 0.14) 0%, rgba(12, 10, 9, 0.55) 80%)",
				}}
			/>
			<div className="relative z-10 mx-auto max-w-4xl">
				{eyebrow && (
					<p className="text-etbrew-gold-bright mb-3 font-sans text-xs font-bold tracking-[0.25em] uppercase">
						{eyebrow}
					</p>
				)}
				<h1 className="font-serif text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
					{title}
				</h1>
				<div className="bg-etbrew-gold mx-auto mt-6 h-0.5 w-16" />
				{subtitle && (
					<p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-stone-300 md:text-xl">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
}

