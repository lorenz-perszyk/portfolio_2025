import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // Enable static export
	images: {
		loader: "custom", // Use a custom loader
		loaderFile: "./netlify-image-loader.js", // Path to your custom loader file
	},
};

export default nextConfig;
