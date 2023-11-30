import { DetailedHTMLProps, HTMLAttributes, memo, useEffect, useRef } from "react";
import { AnimationConfigWithData, AnimationConfigWithPath } from "lottie-web/build/player/lottie_light";
import useLottie from "./useLottie";

interface LottieFileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	file: string;
	width?: number;
	height?: number;
	options?: Omit<AnimationConfigWithPath, "container"> | Omit<AnimationConfigWithData, "container">;
	playAnimation?: boolean;
	stopAnimation?: boolean;
}
const LottieFile: React.FC<LottieFileProps> = ({
	file,
	width,
	height,
	options,
	playAnimation,
	stopAnimation,
	...props
}) => {
	const lottieContainer = useRef<HTMLDivElement>(null);
	const { animation, isLoading } = useLottie({
		animationFile: file,
		container: lottieContainer,
		options,
	});

	// assign animation events and destroy animation on unmount
	useEffect(() => {
		if (!animation) return;
		// toggle animation
		if (playAnimation) {
			animation.play();
			animation.setDirection(animation.playDirection === 1 ? -1 : 1);
		}
	}, [animation, playAnimation]);

	return (
		<section
			ref={lottieContainer}
			data-testid="LottieFile"
			data-animation-path={file}
			data-label="lottie-container"
			className={`lottie ${props.className ? props.className : ""}`}
			style={{
				width: width || "100%",
				height: height || "100%",
				...props.style,
			}}
			{...props}>
			{isLoading && (
				<div
					data-label="lottie-skeleton"
					style={{
						width: width || "100%",
						height: height || "100%",
						backgroundColor: "rgba(0,0,0,0.1)",
						...props.style,
					}}
					{...props}></div>
			)}
		</section>
	);
};

export default memo(LottieFile);
