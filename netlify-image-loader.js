module.exports = (src, width, quality) => {
	// Route image requests through Netlify's Image CDN
	return `https://lorenzperszyk.com/_next/image?url=${encodeURIComponent(
		src
	)}&w=${width}&q=${quality || 75}`;
};
