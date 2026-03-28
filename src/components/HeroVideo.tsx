"use client";

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function HeroVideo() {
	// ─── Refs ───────────────────────────────────────────────────────────────
	const bgVideoRef = useRef<HTMLVideoElement>(null);
	const modalVideoRef = useRef<HTMLVideoElement>(null);
	const modalContainerRef = useRef<HTMLDivElement>(null);
	const expandBtnRef = useRef<HTMLButtonElement>(null);
	// userWantsPlayingRef — tracks the user's intent so scroll/visibility
	// handlers can resume correctly without stale closures.
	const userWantsPlayingRef = useRef(false);
	// videoStartedRef — avoids stale closure issues inside the timeupdate
	// handler that confirms actual sustained playback.
	const videoStartedRef = useRef(false);
	const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// ─── State ──────────────────────────────────────────────────────────────
	const [videoStarted, setVideoStarted] = useState(false);
	const [videoError, setVideoError] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [loopFading, setLoopFading] = useState(false);
	const [controlsVisible, setControlsVisible] = useState(false);
	// isTouchDevice — touch-primary devices have no hover, so controls stay
	// permanently visible once the video starts rather than auto-hiding.
	// Lazy initializer runs only on the client; defaults to false during SSR.
	const [isTouchDevice] = useState(
		() => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches,
	);

	// ─── Callbacks ──────────────────────────────────────────────────────────

	const showControls = useCallback(() => {
		setControlsVisible(true);
		if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
		hideTimerRef.current = setTimeout(() => setControlsVisible(false), 3000);
	}, []);

	const togglePlay = useCallback(() => {
		const video = bgVideoRef.current;
		if (!video) return;

		if (isPlaying) {
			video.pause();
			userWantsPlayingRef.current = false;
		} else {
			video.muted = true;
			video.play().catch(() => {});
			userWantsPlayingRef.current = true;
		}
	}, [isPlaying]);

	const openModal = useCallback(() => setModalOpen(true), []);

	const closeModal = useCallback(() => {
		setModalOpen(false);
		if (modalVideoRef.current) {
			modalVideoRef.current.pause();
			modalVideoRef.current.currentTime = 0;
		}
		expandBtnRef.current?.focus();
	}, []);

	// ─── Effects ─────────────────────────────────────────────────────────────

	// Cleanup the auto-hide timer on unmount.
	useEffect(() => {
		return () => {
			if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
		};
	}, []);

	// Set video.muted = true as a DOM property as early as possible — before
	// the browser processes the autoPlay attribute and evaluates its policy.
	// useLayoutEffect runs synchronously after DOM mutations but before paint,
	// giving us the best chance of being ahead of Safari's autoplay check.
	useLayoutEffect(() => {
		if (bgVideoRef.current) bgVideoRef.current.muted = true;
	}, []);


	// Autoplay on mount — skip if reduced motion or Save-Data is requested.
	// React's `muted` prop is unreliable as a DOM property; Safari checks the
	// property directly, so we set it imperatively via the ref.
	useEffect(() => {
		const video = bgVideoRef.current;
		if (!video || videoError) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const saveData =
			(
				navigator as Navigator & {
					connection?: { saveData?: boolean };
				}
			).connection?.saveData ?? false;

		if (prefersReducedMotion || saveData) return;

		video.muted = true;
		userWantsPlayingRef.current = true;
		if (video.paused) {
			video.play().catch(() => {
				userWantsPlayingRef.current = false;
			});
		}
	}, [videoError]);

	// Scroll-based pause — saves battery/CPU when the hero is off-screen.
	useEffect(() => {
		const video = bgVideoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (userWantsPlayingRef.current) video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.1 },
		);

		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	// Page Visibility API — pause when tab is hidden, resume on return.
	useEffect(() => {
		const video = bgVideoRef.current;
		if (!video) return;

		const handleVisibilityChange = () => {
			if (document.hidden) {
				video.pause();
			} else if (userWantsPlayingRef.current) {
				video.play().catch(() => {});
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () =>
			document.removeEventListener("visibilitychange", handleVisibilityChange);
	}, []);

	// Combined timeupdate handler:
	//   1. Confirms sustained playback (currentTime > 0.5 s) before setting
	//      videoStarted — prevents macOS Safari's brief onPlaying false positive
	//      from prematurely revealing controls over the static poster.
	//   2. Loop crossfade — fades out in the last 0.8 s before the loop point.
	useEffect(() => {
		const video = bgVideoRef.current;
		if (!video) return;

		const handleTimeUpdate = () => {
			// Confirm the video has genuinely been playing before revealing controls.
			if (!videoStartedRef.current && video.currentTime > 0.5) {
				videoStartedRef.current = true;
				setVideoStarted(true);
				showControls();
			}

			// Loop crossfade.
			if (video.duration && userWantsPlayingRef.current) {
				setLoopFading(video.duration - video.currentTime < 0.8);
			}
		};

		video.addEventListener("timeupdate", handleTimeUpdate);
		return () => video.removeEventListener("timeupdate", handleTimeUpdate);
	}, [showControls]);

	// Space bar — pause/play (mirrors native video player UX).
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key !== " " || modalOpen) return;
			const tag = (document.activeElement as HTMLElement)?.tagName ?? "";
			if (["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(tag)) return;
			e.preventDefault();
			showControls();
			togglePlay();
		};

		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [togglePlay, modalOpen, showControls]);

	// Body scroll lock while modal is open.
	useEffect(() => {
		document.body.style.overflow = modalOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [modalOpen]);

	// Auto-play modal video when it opens.
	useEffect(() => {
		if (!modalOpen) return;
		modalVideoRef.current?.play().catch(() => {});
	}, [modalOpen]);

	// Focus trap — keeps keyboard navigation inside the modal while open.
	useEffect(() => {
		if (!modalOpen) return;

		const container = modalContainerRef.current;
		if (!container) return;

		const focusable = container.querySelectorAll<HTMLElement>(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
		);
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		first?.focus();

		const trapTab = (e: KeyboardEvent) => {
			if (e.key !== "Tab") return;
			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};

		document.addEventListener("keydown", trapTab);
		return () => document.removeEventListener("keydown", trapTab);
	}, [modalOpen]);

	// Close modal on Escape key.
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [closeModal]);

	// ─── Derived values ──────────────────────────────────────────────────────
	const videoOpacity = videoStarted && !loopFading ? 1 : 0;
	// Touch devices have no hover to reveal controls, so they stay visible
	// permanently once the video has started.
	const controlsOpacity = !videoStarted ? 0 : isTouchDevice || controlsVisible ? 1 : 0;
	const controlsInteractive = videoStarted && (isTouchDevice || controlsVisible);

	return (
		<>
			{/* Hero video container */}
			<div
				className="absolute inset-0"
				onMouseMove={showControls}
				onTouchStart={showControls}
			>
				{/* Poster — always rendered; visible before playback starts and
				    during loop crossfades. */}
				<Image
					src="/images/backgrounds/brewery-filled.jpg"
					alt="East Troy Brewery Interior"
					fill
					priority
					className="absolute inset-0 z-[1] object-cover object-center"
				/>
				{/*
				 * Sources: WebM first (Chrome/Firefox VP9), MP4 for Safari.
				 * autoPlay + muted + playsInline required for Safari autoplay.
				 * muted also set imperatively in the autoplay effect (React bug).
				 * poster: first-frame fallback if JS is slow or disabled.
				 *
				 * onPlaying / onPause sync isPlaying with real browser state.
				 * videoStarted is set via timeupdate (not onPlaying) to avoid
				 * macOS Safari's false-positive: it fires onPlaying briefly during
				 * a blocked autoplay attempt before pausing the video.
				 *
				 * onPlaying still resets loopFading for clean loop crossfades.
				 * onError keeps videoStarted false so the poster stays visible.
				 */}
				<video
					ref={bgVideoRef}
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					poster="/images/backgrounds/brewery-filled.jpg"
					className="absolute inset-0 z-[2] h-full w-full object-cover object-center"
					style={{ opacity: videoOpacity, transition: "opacity 0.6s ease" }}
					onPlaying={() => {
						setIsPlaying(true);
						setLoopFading(false);
					}}
					onPause={() => setIsPlaying(false)}
					onError={() => setVideoError(true)}
				>
					<source src="/videos/pov-bg.mp4" type="video/mp4" />
				</video>
				{/* Cinematic radial gradient — darker at the edges, lighter in the
				    centre so the video breathes rather than sitting under a flat tint. */}
				<div
					className="absolute inset-0 z-[3]"
					style={{
						background:
							"radial-gradient(ellipse at 55% 45%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.68) 100%)",
					}}
				/>
				{/* Controls — fade in after confirmed playback (0.5 s of currentTime).
				    Auto-hide after 3 s on pointer devices; always visible on touch. */}
				<div
					className={`absolute top-6 right-6 z-[4] flex items-center gap-2 transition-opacity duration-500 sm:top-10 sm:right-10 ${controlsInteractive ? "" : "pointer-events-none"}`}
					style={{ opacity: controlsOpacity }}
					aria-hidden={!videoStarted}
				>
					{/* Pause/play toggle (WCAG 2.2.2) */}
					<button
						onClick={togglePlay}
						aria-label={isPlaying ? "Pause background video" : "Play background video"}
						title={isPlaying ? "Pause" : "Play"}
						className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						{isPlaying ? (
							<svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
								<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
							</svg>
						) : (
							<svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
								<path d="M8 5.14v14l11-7-11-7z" />
							</svg>
						)}
					</button>
					{/* Expand button — one-time attention pulse on first appearance */}
					<button
						ref={expandBtnRef}
						onClick={openModal}
						aria-label="Expand the vibes"
						title="Expand the vibes"
						className="flex items-center gap-3 rounded-full border border-white/40 bg-black/40 px-5 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
						style={{
							animation: videoStarted
								? "attention-pulse 0.65s ease-in-out 0.6s 2 both"
								: "none",
						}}
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-5 w-5 drop-shadow"
						>
							<path d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5" />
						</svg>
						<span className="text-sm font-semibold uppercase tracking-wide drop-shadow">
							Expand the Vibes
						</span>
					</button>
				</div>
			</div>
			{/* Modal lightbox */}
			{modalOpen && (
				<div
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
					onClick={closeModal}
					role="dialog"
					aria-modal="true"
					aria-label="Brewery video"
				>
					<div
						ref={modalContainerRef}
						className="relative w-full max-w-5xl px-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={closeModal}
							aria-label="Close video"
							className="absolute -top-12 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<video
							ref={modalVideoRef}
							controls
							playsInline
							preload="metadata"
							className="w-full rounded-xl shadow-2xl"
							style={{ maxHeight: "80vh", objectFit: "contain" }}
						>
							<source src="/videos/pov.webm" type="video/webm" />
							<source src="/videos/pov.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			)}
		</>
	);
}
