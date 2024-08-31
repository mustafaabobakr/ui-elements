import { type CSSProperties, type FC, type ImgHTMLAttributes, memo, useCallback, useEffect, useState } from "react";
import { imagePlaceholderBase64 } from "./placeholder";
import { placeholderImage } from "./utils";

export interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
	sources?: { srcSet: string; type?: string }[];
	placeholderImageBorderRadius?: number;
	placeholderImageBackground?: CSSProperties["backgroundColor"];
}

const Picture: FC<PictureProps> = ({
	sources,
	src = imagePlaceholderBase64,
	placeholderImageBorderRadius,
	placeholderImageBackground,
	...props
}: PictureProps) => {
	const widthToUse = props.width ?? 20;
	const heightToUse = props.height ?? 20;
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

	const onError = useCallback(() => {
		setImageError(true);
		setImageSrc(imagePlaceholderBase64);
		setImageWidth(imageWidth ?? 20);
		setImageHeight(imageHeight ?? 20);
	}, []);

	useEffect(() => {
		setImageError(false);
		setImageSrc(src);
		setImageWidth(widthToUse);
		setImageHeight(heightToUse);
	}, [src]);

	return (
		<picture data-testid='Picture' data-error={imageError}>
			{sources?.map((source) => (
				<source key={source.srcSet} srcSet={source.srcSet} type={source.type} />
			))}
			<img
				loading='lazy'
				draggable='false'
				decoding={props.decoding ?? "async"}
				width={imageWidth}
				height={imageHeight}
				{...props}
				src={imageSrc}
				alt={props.alt ?? "placeholder alt"}
				onError={onError}
				style={{
					userSelect: "none",
					objectFit: imageError ? "contain" : undefined,
					maxWidth: "100%",
					width: imageWidth,
					height: imageHeight,
					...props.style,
				}}
			/>
		</picture>
	);
};

Picture.displayName = "Picture";

export default memo(Picture);
