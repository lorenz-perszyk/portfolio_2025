import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { gsap } from "gsap";

export const animatePageIn = () => {
	// const tl = gsap.timeline();
	// const transitionElement = document.getElementById("transitionElement");
	// tl.fromTo(
	// 	transitionElement,
	// 	{
	// 		height: "100dvh",
	// 	},
	//    {
	//       height: 0,
	// 		duration: 3,
	// 		ease: "power3.in",
	// 	}
	// );
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
	const tl = gsap.timeline({ defaults: { duration: 1 } });
	const transitionElement = document.getElementById("transitionElement");
	const transitionBackground = document.getElementById("transitionBackground");

	tl.set(transitionBackground, {
		height: "100dvh",
		opacity: 0,
	})
		.to(transitionBackground, {
			opacity: 0.6,
			duration: 0.7,
			ease: "power2.in",
		})
		.to(
			transitionElement,
			{
				height: "100dvh",
				ease: "power3.in",
			},
			"<"
		)
		.then(() => {
			router.push(href);
		});
};
