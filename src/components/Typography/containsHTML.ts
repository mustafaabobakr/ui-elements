export const containsHTML = (htmlString?: string) => {
  const regex = /<[^>]+>/s;

  if (!htmlString) return false;
  try {
    if (regex.test(htmlString)) return true;
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};
