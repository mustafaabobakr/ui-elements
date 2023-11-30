"use client";
import React, { useEffect, useState, memo, useCallback, CSSProperties } from "react";
import NextImage, { ImageProps, StaticImageData } from "next/image";
import { placeholderImage } from "./picture";

interface StaticRequire {
	default: StaticImageData;
}
type StaticImport = StaticRequire | StaticImageData;

export interface PictureProps extends Omit<ImageProps, "src"> {
	src: string | StaticImport | undefined | null;
	placeholderImageBorderRadius?: number;
	placeholderImageBackground?: CSSProperties["backgroundColor"];
}

const Picture: React.FC<PictureProps> = ({
	src = "/image_placeholder.svg",
	placeholderImageBorderRadius,
	placeholderImageBackground,
	...props
}: PictureProps) => {
	const widthToUse = props.width || 200;
	const heightToUse = props.height || 200;
	const loadingImagePlaceholder = placeholderImage(
		widthToUse as number,
		heightToUse as number,
		placeholderImageBorderRadius,
		placeholderImageBackground
	);

	const [imageSrc, setImageSrc] = useState<PictureProps["src"]>(loadingImagePlaceholder);
	const [imageWidth, setImageWidth] = useState(widthToUse);
	const [imageHeight, setImageHeight] = useState(heightToUse);
	const [imageError, setImageError] = useState<boolean>(false);

	const onLoadingComplete = () => {
		// set the image src to correct one
		setImageSrc(src);
	};

	// handle error
	const onError = useCallback(() => {
		setImageError(true);
		setImageSrc("/image_placeholder.svg");
		setImageWidth(imageWidth || 200);
		setImageHeight(imageHeight || 200);
	}, [imageHeight, imageWidth]);

	// re-render the component if src changes
	useEffect(() => {
		setImageError(false);
		setImageSrc(loadingImagePlaceholder);
		setImageWidth(widthToUse);
		setImageHeight(heightToUse);
	}, [src]);

	if (!imageSrc || imageSrc === "/image_placeholder.svg") {
		return (
			<NextImage
				loading="lazy"
				priority={false}
				decoding={"async"}
				placeholder="empty"
				draggable="false"
				{...props}
				src={imageSrc ?? "/image_placeholder.svg"}
				alt={props.alt || "Error Image"}
				{...(imageError?.toString() && { "data-error": "Error image" })}
				// conditionally add width if fill !== true
				{...(props.fill !== true && { width: imageWidth })}
				{...(props.fill !== true && { height: imageHeight })}
				onError={onError}
				onLoadingComplete={onLoadingComplete}
				style={{
					objectFit: "contain",
					//  conditionally add borderRadius if fill !== true
					...(props.fill !== true && {
						width: `${imageWidth}px`,
						height: `${imageHeight}px`,
						maxWidth: "100%",
						maxHeight: "500px",
					}),
					...props.style,
				}}
			/>
		);
	}

	return (
		<NextImage
			loading="lazy"
			priority={false}
			draggable="false"
			decoding={props.decoding || "async"}
			placeholder="empty"
			{...props}
			src={imageSrc}
			alt={props.alt || "Image"}
			// conditionally add width if fill !== true
			{...(props.fill !== true && { width: imageWidth })}
			{...(props.fill !== true && { height: imageHeight })}
			onError={onError}
			onLoadingComplete={onLoadingComplete}
			style={{
				...props.style,
			}}
		/>
	);
};

Picture.displayName = "Picture";
// memoize the component to avoid unnecessary re-renders based on src

export default memo(Picture, (prevProps, nextProps) => {
	return prevProps.src === nextProps.src;
});
