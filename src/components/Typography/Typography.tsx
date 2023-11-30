import { TypographyVariant } from "./typography";
import { containsHTML } from "./containsHTML";
import { memo, useRef } from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
	variant?: TypographyVariant;
	className?: string;
	children?: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({ tag = "p", variant = "bodyLg", children, className, ...props }) => {
	const htmlContainer = useRef<HTMLDivElement>(null);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const Tag = tag!;
	const additionalClassNames = className ? className : "";

	// function to check if the tag is a html tag
	const isHTML = containsHTML(props.dangerouslySetInnerHTML?.__html);

	// parse html tags and add classNames to them then return them as a string to set as innerHTML
	// this will solve the CMS html tags not having font or color classNames
	// TODO: needs some testing to make sure it works as expected.
	// specially with the OpenContent component!.

	// useIsomorphicLayoutEffect(() => {
	//   if (isHTML && htmlContainer.current) {
	//     const html = htmlContainer.current.innerHTML;
	//     const parser = new DOMParser();
	//     const parsedHTML = parser.parseFromString(html, 'text/html');
	//     const parsedHTMLTags = parsedHTML.getElementsByTagName('*');
	//     const parsedHTMLTagsArray = Array.from(parsedHTMLTags);
	//     parsedHTMLTagsArray.forEach((tag) => {
	//       tag.classList.add(variant ?? 'bodyLg');
	//       if (additionalClassNames && additionalClassNames.length > 0) {
	//         // map over additional classNames and add them to the tag
	//         additionalClassNames.split(' ').forEach((className) => {
	//           tag.classList.add(className);
	//         });
	//       }
	//     });
	//     const parsedHTMLString = parsedHTML.documentElement.innerHTML;
	//     htmlContainer.current.innerHTML = parsedHTMLString;
	//   }
	// }, [htmlContainer]);

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
