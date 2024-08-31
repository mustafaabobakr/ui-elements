"use client";
import { type FC, memo } from "react";

/**
 * @description - A component that renders a background glow effect.
 * - {@link https://clerk.com/pricing | source}
 */
const BackgroundGlow: FC = () => {
	return (
		<section
			data-testid='BackgroundGlow'
			className='pointer-events-none absolute inset-x-0 top-0 left-0 z-10 h-full overflow-hidden mix-blend-overlay'>
			<picture>
				<source srcSet='/background/glow.avif' type='image/avif' />
				<source srcSet='/background/glow.png' type='image/png' />
				<img
					alt='glow'
					fetchPriority='high'
					width='1458'
					height='1458'
					decoding='async'
					src='/background/glow.avif'
					className='w-full max-w-none'
					style={{ color: "transparent" }}
				/>
			</picture>
		</section>
	);
};

BackgroundGlow.displayName = "BackgroundGlow";
export default memo(BackgroundGlow);
