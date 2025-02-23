import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // Enable static export
	images: {
		unoptimized: true, // Disable image optimization
	},
};

export default nextConfig;
