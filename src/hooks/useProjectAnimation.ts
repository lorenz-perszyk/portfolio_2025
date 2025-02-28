import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const useProjectAnimation = () => {
	const line = useRef(null);
	const title = useRef(null);
	const description = useRef(null);
	const services = useRef(null);
	const buttons = useRef(null);
	const image = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		const splitTitle = new SplitType("#title", { types: "lines,words" });
		const splitDescription = new SplitType("#description", {
			types: "lines,words",
		});
		const splitServices = new SplitType("#services");
		const navLinks = document.querySelectorAll(".nav-button");

		tl.from(
			line.current,
			{
				width: 0,
				duration: 1.8,
				ease: "power3.out",
			},
			"+=0.3"
		)
			.from(
				splitTitle.words,
				{
					opacity: 0,
					yPercent: 120,
					duration: 1,
					stagger: 0.01,
					ease: "power2.out",
				},
				"<"
			)
			.from(
				splitDescription.words,
				{
					opacity: 0,
					yPercent: 120,
					duration: 1,
					stagger: 0.008,
					ease: "power3.out",
				},
				"<"
			)
			.from(
				splitServices.words,
				{
					opacity: 0,
					y: 100,
					duration: 1,
					stagger: 0.008,
					ease: "power2.out",
				},
				"-=1.8"
			)
			.from(
				navLinks,
				{
					opacity: 0,
					y: 20,
					duration: 1,
					stagger: 0.1,
					ease: "power2.out",
				},
				"-=1.3"
			)
			.from(
				image.current,
				{
					opacity: 0,
					y: 40,
					scale: 1.05,
					delay: 0.3,
					duration: 1.2,
					ease: "power1.out",
				},
				"<-=0.3"
			)
			.fromTo(
				"#navbar",
				{
					yPercent: -100,
				},
				{
					opacity: 1,
					yPercent: 0,
					duration: 1.2,
					ease: "power3.out",
				},
				"<"
			)
			.then(() => {
				splitTitle.revert();
				splitDescription.revert();
				splitServices.revert();
			});
	}, []);

	return { line, title, description, services, buttons, image };
};
