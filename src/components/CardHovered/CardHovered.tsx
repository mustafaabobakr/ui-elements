"use client";
import { type ElementRef, type MouseEvent, memo, useCallback, useRef } from "react";

interface CardHoveredProps extends React.HTMLAttributes<HTMLElement> {}
const CardHovered: React.FC<CardHoveredProps> = ({ ...props }: CardHoveredProps) => {
	const cardRef = useRef<ElementRef<"article">>(null);
	const bgRef = useRef<ElementRef<"div">>(null);

	const handleCardMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
		if (!bgRef.current || !cardRef.current) return;
		const { left, top } = cardRef.current.getBoundingClientRect();
		const x = `${e.clientX - left}px`;
		const y = `${e.clientY - top}px`;
		cardRef.current.style.setProperty("--cursor-x", x);
		cardRef.current.style.setProperty("--cursor-y", y);
		bgRef.current.style.setProperty("top", y);
		bgRef.current.style.setProperty("left", x);
	}, []);

	return (
		<article
			ref={cardRef}
			data-testid="CardHovered"
			className="min-h-[210px] relative z-0 group overflow-hidden h-full border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#22d3ee_0,transparent,transparent_70%)]"
			onMouseMove={handleCardMouseMove}>
			{props.children}
			<footer
				ref={bgRef}
				className="bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90 -translate-x-1/2 -translate-y-1/2">
				<img
					alt="Float UI"
					loading="lazy"
					width="363"
					height="172"
					decoding="async"
					data-nimg="1"
					className="absolute inset-0 -z-10"
					src="/feature-cover.svg"
					style={{
						color: "transparent",
					}}
				/>
			</footer>
			<div className="absolute inset-[1px] -z-10 rounded-xl bg-zinc-950"></div>
		</article>
	);
};

CardHovered.displayName = "CardHovered"; // valuable for debugging with React DevTools
export default memo(CardHovered);
