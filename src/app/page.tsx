"use client";

import { ProjectPreview } from "@/components/projectPreview";
import ScalingText from "@/components/scalingText";
import { Spacer } from "@/components/ui/spacer";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HomePage() {
	const container = useRef<HTMLDivElement>(null);
	const background = useRef<HTMLDivElement>(null);
	const title = useRef<HTMLDivElement>(null);
	const subTitle = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		const splitTitle = new SplitType("#title", { types: "lines,words" });
		const splitSubTitle = new SplitType("#subTitle", { types: "lines,words" });

		tl.set(container.current, { opacity: 1, duration: 0 })
			.from(background.current, {
				height: 0,
				duration: 0.9,
				ease: "power3.out",
			})
			.from(splitTitle.words, {
				opacity: 0,
				yPercent: 100,
				duration: 1.3,
				stagger: 0.015,
				ease: "power3.out",
			})
			.from(
				splitSubTitle.words,
				{
					opacity: 0,
					yPercent: 100,
					duration: 1.2,
					stagger: 0,
					ease: "power3.out",
				},
				"-=1"
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
				splitSubTitle.revert();
			});
	}, []);

	return (
		<>
			<div
				className="h-[100dvh] md:h-screen bg-gray-100 opacity-0"
				ref={container}
			>
				<section
					ref={background}
					className="flex flex-col h-[90dvh] bg-radial-[at_30%_70%] bg-[length:160%] from-[#06001C] from-5% to-[#1A0077]"
				>
					<div className="flex flex-col gap-10 mt-auto mb-[10%]">
						<h1
							ref={title}
							id="title"
							className="kerning-none text-[clamp(32px,6vw,90px)]! leading-tight text-white font-thin tracking-wide"
						>
							Crafting Experiences,
							<br />
							Building Interfaces.
						</h1>
						<h3
							ref={subTitle}
							id="subTitle"
							className="kerning-none text-xl md:text-3xl! text-white font-thin tracking-wide"
						>
							DESIGN + DEVELOPMENT
						</h3>
					</div>
				</section>
			</div>
			<Spacer size="sm" />
			<section>
				<h2 className="text-2xl my-auto font-thin md:hidden">
					I’m a UI/UX designer and frontend developer with a passion for
					creating intuitive, visually stunning digital experiences. With a
					background in communication design and a love for coding, I bridge the
					gap between design and development.
				</h2>
				<ScalingText
					className="hidden md:block"
					text="I’m a UI/UX designer and frontend developer<br>
					with a passion for creating intuitive, visually stunning<br>
					digital experiences. With a background in communication<br>
					design and a love for coding, I bridge the gap between<br>
					design and development."
				/>
			</section>
			<Spacer size="xl" />
			<ProjectPreview
				imagePath="/images/webshop/webshop_hero_v2.webp"
				title="E-Commerce / Company Portal"
				year="2023-2025"
				href="/webshop"
			/>
			<Spacer />
			<ProjectPreview
				imagePath="/images/easy_order/easy_order_hero.webp"
				title="App / Easy Order"
				year="2023-2025"
				href="/easy_order"
			/>
			<Spacer />
			<ProjectPreview
				imagePath="/images/intranet/intranet_hero.webp"
				title="Spiral Intranet"
				year="2024-2025"
				href="/intranet"
			/>
			<Spacer />
		</>
	);
}
