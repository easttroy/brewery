import Link from "next/link";

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	target?: string;
	variant?: "gold" | "outline" | "outline-white" | "ghost";
	className?: string;
	onClick?: () => void;
}

export default function Button({
	children,
	href,
	target,
	variant = "gold",
	className = "",
	onClick,
}: ButtonProps) {
	const baseStyles =
		"inline-block font-sans font-bold uppercase tracking-wider py-3 px-6 transition-all duration-300 text-sm text-center";

	const variants = {
		gold: "bg-etbrew-gold text-white hover:bg-[#a68c1c]",
		outline:
			"border-2 border-etbrew-gold text-etbrew-gold hover:bg-etbrew-gold hover:text-white",
		"outline-white":
			"border-2 border-white text-white hover:bg-etbrew-gold hover:border-etbrew-gold hover:text-white",
		ghost: "text-stone-800 hover:text-etbrew-gold",
	};

	const styles = `${baseStyles} ${variants[variant]} ${className}`;

	if (href) {
		if (href.startsWith("http")) {
			return (
				<a
					href={href}
					target={target || "_blank"}
					rel="noopener noreferrer"
					className={styles}
				>
					{children}
				</a>
			);
		}
		return (
			<Link href={href} className={styles}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={styles}>
			{children}
		</button>
	);
}
