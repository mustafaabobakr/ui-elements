export const shimmer = (
  w: number,
  h: number,
  border?: number,
  placeholderImageBackground?: string
) => {
  const borderRadius = border && border > 0 ? `${border}px` : 0;

  if (placeholderImageBackground) {
    return `
    <svg width="${w}" height="${h}" style="border-radius:${borderRadius}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="${w}" height="${h}" fill="${placeholderImageBackground}" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;
  }

  return `
<svg width="${w}" height="${h}" style="border-radius:${borderRadius}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="rgba(243, 248, 252, 1)" offset="20%" />
      <stop stop-color="#eee" offset="50%" />
      <stop stop-color="rgba(243, 248, 252, 1)" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="rgba(243, 248, 252, 1)" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
};

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

/**
 * placeholderImage
 *  return base64 image
 */
export const placeholderImage = (
  width: number,
  height: number,
  borderRadius?: number,
  placeholderImageBackground?: string
) =>
  `data:image/svg+xml;base64,${toBase64(
    shimmer(width, height, borderRadius, placeholderImageBackground)
  )}`;
