"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { PreLoader } from "@/components/preLoader";

export default function Template({ children }: { children: React.ReactNode }) {
	const transitionElement = useRef(null);

	return (
		<>
			<div
				ref={transitionElement}
				id="transitionElement"
				className="h-0 bg-gray-100 z-100 fixed top-0 left-0 w-full"
			></div>
			<div
				id="transitionBackground"
				className="h-0 bg-black z-99 fixed top-0 left-0 w-full"
			></div>
			{children}
		</>
	);
}
