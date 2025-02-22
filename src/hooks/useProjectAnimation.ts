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
		const navLinks = document.querySelectorAll(".nav-button")

		tl.from(line.current, {
			width: 0,
			duration: 1.8,
			ease: "power3.out",
		},
		"+=0.3");
		tl.from(
			splitTitle.words,
			{
				opacity: 0,
				yPercent: 120,
				duration: 1,
				stagger: 0.005,
				ease: "power2.out",
			},
			"<"
		);
		tl.from(
			splitDescription.words,
			{
				opacity: 0,
				yPercent: 120,
				duration: 1,
				stagger: 0.008,
				ease: "power3.out",
			},
			"<"
		);
		tl.from(
			splitServices.lines,
			{
				opacity: 0,
				y: 20,
				duration: 1,
				stagger: 0.05,
				ease: "power2.out",
			},
			"-=1.4"
		);
		tl.from(
			navLinks,
			{
				opacity: 0,
				y: 20,
				duration: 1,
				stagger: 0.1,
				ease: "power2.out",
			},
			"<"
		);
		tl.from(
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
		);
		tl.then(() => {
			splitDescription.revert();
			splitServices.revert();
		});
	}, []);

	return { line, title, description, services, buttons, image };
};
