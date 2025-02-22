import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const PreLoader = () => {
	const preloader = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.to(preloader.current, {
			opacity: 0,
			duration: 3,
			delay: 3,
			onComplete: () => {
				if (preloader.current) {
					preloader.current.style.display = "none";
				}
			},
		});
	}, []);

	return (
		<div
			ref={preloader}
			className="flex items-center justify-center h-[100dvh] w-screen bg-gray-100 fixed top-0 left-0 z-98"
		>
			<h1 className="text-black font-rubik text-lg! font-semibold ">
				Lorenz Perszyk
			</h1>
		</div>
	);
};
