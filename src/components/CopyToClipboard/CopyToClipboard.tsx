import React, { type ComponentPropsWithoutRef } from "react";
import styles from "./CopyToClipboard.module.css";

interface CopyToClipboardProps extends ComponentPropsWithoutRef<"button"> {
	content?: string;
	elementToCopyRef?: React.RefObject<HTMLElement>;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ content, elementToCopyRef, ...props }) => {
	const [copied, setCopied] = React.useState(false);
	const copyFunction = React.useCallback(() => {
		if (!content && !elementToCopyRef) return;
		const elRefText = elementToCopyRef?.current?.innerText;

		const txtContent = content ?? elRefText ?? "";
		if (navigator.clipboard) {
			navigator.clipboard.writeText(txtContent);
		} else {
			const textArea = document.createElement("textarea");
			textArea.value = txtContent;
			// Avoid scrolling to bottom
			textArea.style.top = "0";
			textArea.style.left = "0";
			textArea.style.position = "fixed";
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			textArea.remove();
		}
		setCopied(true);
		const timer = () => setTimeout(() => setCopied(false), 2000);
		const timerId = timer();
		return () => {
			clearTimeout(timerId);
		};
	}, [content, elementToCopyRef]);

	return (
		<section data-label="copy button container" data-testid="CopyToClipboard" className={styles.container}>
			<button
				{...props}
				data-label="copy button"
				data-copied={copied}
				className={`${styles.clickable} ${copied ? styles.copied : ""} ${props.className ?? ""}`}
				onClick={copyFunction}>
				{copied ? (
					<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
						<path
							fillRule="evenodd"
							d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
						/>
					</svg>
				) : (
					<svg
						aria-hidden="true"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						xmlns="http://www.w3.org/2000/svg"
						className="copyButtonIcon_CtfL"
						viewBox="0 0 24 24">
						<path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
					</svg>
				)}
			</button>
			<span data-label="copy button text" className={styles.tooltip}>
				<span>{copied ? "Copied" : "Copy Text"}</span>
			</span>
		</section>
	);
};
export default React.memo(CopyToClipboard);
