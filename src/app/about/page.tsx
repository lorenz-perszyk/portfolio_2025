"use client";

import { Spacer } from "@/components/ui/spacer";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Home() {
	const backgroundWrapper = useRef(null);
	const background = useRef(null);
	const imageContainer = useRef(null);
	const image = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		const splitTitle = new SplitType("#title", { types: "lines,words" });
		const splitDescription = new SplitType("#description", {
			types: "lines,words",
		});

		tl.from(backgroundWrapper.current, {
			height: 0,
			duration: 0,
			ease: "power3.out",
		})
			.from(
				background.current,
				{
					height: 0,
					paddingTop: 0,
					duration: 0.7,
					ease: "power3.out",
				},
				"<"
			)
			.from(splitTitle.words, {
				opacity: 0,
				yPercent: 100,
				duration: 1,
				stagger: 0.05,
				ease: "power2.out",
			})
			.from(
				splitDescription.words,
				{
					opacity: 0,
					yPercent: 100,
					duration: 1,
					stagger: 0.01,
					ease: "power2.out",
				},
				"<"
			)
			.from(
				imageContainer.current,
				{
					yPercent: 100,
					duration: 1.5,
					ease: "expo.out",
				},
				"<"
			)
			.from(
				image.current,
				{
					yPercent: -100,
					duration: 1.5,
					scale: 0.8,
					ease: "expo.out",
				},
				"<"
			)
			.fromTo(
				"#navbar",{
					yPercent: -100,
				},
				{
					opacity: 1,
					yPercent: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=1"
			)
			.then(() => {
				splitTitle.revert();
				splitDescription.revert();
			});
	});

	return (
		<div className="min-h-screen pb-40 bg-gray-100">
			<div ref={backgroundWrapper}>
				<section
					ref={background}
					className="flex-col h-[75vh] pt-[15vh] grid grid-cols-12 bg-radial-[at_15%_40%] from-[#06001C] from-10% to-[#1A0077]"
				>
					<h1
						id="title"
						className="text-[clamp(32px,4vw,60px)]! col-span-12 md:col-span-6 col-start-1 leading-tight text-white font-thin tracking-wide"
					>
						Designer, developer
						<br />
						problem-solver.
					</h1>
					<div
						ref={imageContainer}
						className="relative mt-[2vh] md:mt-0 col-span-8 md:col-span-4 col-start-3 md:col-start-8 w-full h-[50vh] md:h-[75vh] overflow-hidden"
						style={{ transformOrigin: "bottom" }}
					>
						<Image
							ref={image}
							src="/images/lorenz.webp"
							alt="Lorenz Perszyk"
							fill
							priority
							className="grayscale object-cover"
						/>
					</div>
				</section>
			</div>
			<section className="grid grid-cols-12 mt-[15vh] md:mt-15">
				<h2
					id="description"
					className="col-span-12 md:col-span-5 text-2xl md:text-3xl md:leading-10 font-thin"
				>
					I’m a UI/UX Designer and Frontend Developer with a BA in Communication
					Design and 8+ years of experience in the creative field. My passion
					lies in crafting intuitive, visually stunning digital experiences that
					bridge the gap between design and functionality.
				</h2>
			</section>
			<Spacer />
			<section>
				<div className="grid grid-cols-12 gap-y-8 pt-4 md:pt-8 border-t-1 border-gray-500 mb-16">
					<h3 className="col-span-12 md:col-span-4 lg:col-span-6 text-2xl md:text-4xl">
						Experience and Skills
					</h3>
					<div className="col-span-12 md:col-span-5 col-start-1 md:col-start-7 flex flex-col gap-6 md:gap-8 text-lg md:text-xl">
						<div>
							<p className="font-medium">Art Direction</p>
							<p>
								Crafting cohesive visual identities and user experiences that
								resonate with audiences and reflect brand values.
							</p>
						</div>
						<div>
							<p className="font-medium">Frontend Development</p>
							<p>
								Building intuitive, responsive interfaces that deliver seamless
								user experiences across devices, with a focus on clean code,
								scalability, and accessibility.
							</p>
						</div>
						<div>
							<p className="font-medium">Project Management</p>
							<p>
								Leading cross-functional teams, streamlining workflows, and
								delivering projects on time and within scope.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="grid grid-cols-12 gap-y-8 pt-4 md:pt-8 border-t-1 border-gray-500 mb-16">
					<h3 className="col-span-12 md:col-span-4 lg:col-span-6 text-2xl md:text-4xl">
						Softskills
					</h3>
					<div className="col-span-12 md:col-span-5 col-start-1 md:col-start-7 flex flex-col gap-6 md:gap-8 text-lg md:text-xl">
						<div>
							<p className="font-medium">Organization & Time Management</p>
							<p>Keeping projects tidy, on track, and well-documented.</p>
						</div>
						<div>
							<p className="font-medium">Collaboration & Leadership</p>
							<p>
								Thriving in team environments, whether as a contributor or
								leading the charge.
							</p>
						</div>
						<div>
							<p className="font-medium">Communication</p>
							<p>
								Bridging gaps between departments and ensuring everyone is
								aligned.
							</p>
						</div>
						<div>
							<p className="font-medium">Mentorship</p>
							<p>
								Sharing knowledge and helping others grow, because great work
								happens when we help each other out.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="grid grid-cols-12 gap-y-8 pt-4 md:pt-8 border-t-1 border-gray-500 mb-16">
					<h3 className="col-span-12 md:col-span-4 lg:col-span-6 text-2xl md:text-4xl">
						Interests & Hobbies
					</h3>
					<div className="col-span-12 md:col-span-5 col-start-1 md:col-start-7 flex flex-col gap-8 text-lg md:text-xl">
						<div>
							<p>
								Outside of work, I’m passionate about art, design, and
								cinema—especially art house and world cinema. I also enjoy
								staying active through cycling and swimming, and I’m always
								exploring museums and new creative inspirations.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
