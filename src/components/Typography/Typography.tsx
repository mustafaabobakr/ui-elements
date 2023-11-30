import { memo, useRef } from "react";
import { containsHTML } from "./utils";

export type TypographyVariant =
	| "title3xl"
	| "title2xl"
	| "titleXl"
	| "titleLg"
	| "titleMd"
	| "titleMd_Bold"
	| "bodyLg"
	| "bodyLg_Bold"
	| "bodyMd"
	| "bodySm"
	| "linkLg"
	| "linkMd"
	| "linkMd_Bold"
	| "linkSm"
	| "linkSm_Bold"
	| "linkSmd"
	| "navItem"
	| "navItem_Bold"
	| "tagSm"
	| "tagSm_Bold"
	| "tagXs"
	| "tagXs_Bold"
	| "tagXs_Semi";
interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
	variant?: TypographyVariant;
	className?: string;
	children?: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({ tag = "p", variant = "bodyLg", children, className, ...props }) => {
	const htmlContainer = useRef<HTMLDivElement>(null);

	const Tag = tag!;
	const additionalClassNames = className ? className : "";

	// function to check if the tag is a html tag
	const isHTML = containsHTML(props.dangerouslySetInnerHTML?.__html);
	if (isHTML) {
		return <div ref={htmlContainer} className={`${variant} ${additionalClassNames}`} {...props}></div>;
	}

	return (
		<Tag className={`${variant} ${additionalClassNames}`} {...props}>
			{children}
		</Tag>
	);
};

Typography.displayName = "Typography";
export default memo(Typography);
