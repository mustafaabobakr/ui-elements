async function copyToClipboardLegacy(content: string) {
	return new Promise<void>((resolve, reject) => {
		const textArea = document.createElement("textarea");
		textArea.value = content;
		// Avoid scrolling to bottom
		textArea.style.top = "0";
		textArea.style.left = "0";
		textArea.style.position = "fixed";
		document.body.appendChild(textArea);
		textArea.select();
		try {
			const successful = document.execCommand("copy");
			textArea.remove();
			if (successful) resolve();
			else reject(new Error("Failed to copy text"));
		} catch (err) {
			reject(err);
		}
	});
}
export async function copyToClipboard(content?: string, elementToCopyRef?: React.RefObject<HTMLElement>) {
	if (!content && !elementToCopyRef) return;
	const elRefText = elementToCopyRef?.current?.innerText;

	const txtContent = content ?? elRefText ?? "";
	if (navigator.clipboard) {
		return await navigator.clipboard.writeText(txtContent);
	}
	return await copyToClipboardLegacy(txtContent);
}
