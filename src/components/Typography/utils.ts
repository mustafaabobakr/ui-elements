export const containsHTML = (htmlString?: string | TrustedHTML) => {
	const regex = /<[^>]+>/s;

	if (!htmlString) return false;
	try {
		if (regex.test(htmlString as string)) return true;
		return false;
	} catch (err) {
		console.error(err);
		return false;
	}
};
