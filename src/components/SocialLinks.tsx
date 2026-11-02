interface SocialLinksProps {
	className?: string;
	iconClassName?: string;
}

export default function SocialLinks({
	className = "flex items-center gap-3",
	iconClassName = "h-5 w-5",
}: SocialLinksProps) {
	return (
		<div className={className}>
			<a
				href="https://www.facebook.com/ETBrew/"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-opacity hover:opacity-75"
				aria-label="Facebook"
			>
				<svg
					className={iconClassName}
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
				</svg>
			</a>
			<a
				href="https://www.instagram.com/easttroybrewery/"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-opacity hover:opacity-75"
				aria-label="Instagram"
			>
				<svg
					className={iconClassName}
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
				</svg>
			</a>
			<a
				href="https://untappd.com/EastTroyBrewery"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-opacity hover:opacity-75"
				aria-label="Untappd"
			>
				<svg
					className={iconClassName}
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M11.655 4.36l.6-1.2c.3-.5.1-1.1-.4-1.4l-1.5-.8c-.5-.3-1.1-.1-1.4.4l-.6 1.2 3.3 1.8zm4.308 2.39l.6-1.2c.3-.5.1-1.1-.4-1.4l-1.5-.8c-.5-.3-1.1-.1-1.4.4l-.6 1.2 3.3 1.8zM17.2 9.6l-4.2-2.3-1.2 2.3c-.7 1.3-2.2 2.1-3.7 2.1-.5 0-.9-.1-1.4-.2-1.9-.7-3-2.7-2.5-4.7l.1-.3-2.8-1.5c-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4l2.8 1.5.1-.1c.8-1.2 2.2-1.9 3.6-1.7l1.2-2.3L6.5 0C5 .8 4.4 2.6 5 4.1l-3.1 5.9c-1.4 2.7-.4 6 2.3 7.4l3.8 2.1c2.7 1.4 6 .4 7.4-2.3l3.1-5.9c.8-1.5.1-3.3-1.3-3.7zm.6 3.1l-3.1 5.9c-1 1.9-3.3 2.7-5.3 1.7l-3.8-2.1c-1.9-1-2.7-3.3-1.7-5.3l3.1-5.9c.4-.7 1-1.2 1.7-1.5l-1.1 2.1c-.3.5-.1 1.1.4 1.4.2.1.3.1.5.1.4 0 .7-.2.9-.5l1.1-2.1c.9.1 1.7.7 2.1 1.5l-1.1 2.1c-.3.5-.1 1.1.4 1.4.2.1.3.1.5.1.4 0 .7-.2.9-.5l1.1-2.1c.6.6.8 1.5.4 2.7z" />
				</svg>
			</a>
		</div>
	);
}

