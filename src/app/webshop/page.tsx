"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScalingText from "@/components/scalingText";
import { Spacer } from "@/components/ui/spacer";
import { ArrowUpRight } from "lucide-react";
import { ProjectImage } from "@/components/projectImage";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import { NextProject } from "@/components/nextProject";

gsap.registerPlugin(useGSAP);

export default function Webshop() {
	const { line, title, description, services, buttons, image } =
		useProjectAnimation();

	return (
		<div className="pt-40 md:pt-60">
			<section className="pb-30">
				<div ref={line} className="h-[1px] bg-black"></div>
				<h1
					ref={title}
					id="title"
					className="text-2xl! md:text-3xl font-medium uppercase tracking-wide mt-6 mb-8"
				>
					Spiral Webshop
				</h1>
				<div className="grid grid-cols-6 gap-y-8">
					<p
						ref={description}
						id="description"
						className="kerning-none text-lg md:text-xl leading-7 md:leading-8 md:w-4/5 col-span-12 md:col-span-4 2xl:col-span-3"
					>
						The completely reworked company website for SPIRAL Reihs & Co. KG
						features a modern and responsive webshop, a detailed service and
						solutions section, and a company showcase highlighting the team and
						brand identity. The project involved close collaboration with
						external companies, internal stakeholders, and cross-functional
						teams to deliver a seamless digital experience that reflects
						Spiral’s values and enhances user engagement.
					</p>
					<div className="flex flex-col gap-8 col-span-12 md:col-span-2 2xl:col-span-3">
						<p ref={services} id="services" className="text-xl leading-8">
							Product Owner
							<br />
							UI/UX
							<br />
							CMS (Wordpress)
						</p>
						<Link
							ref={buttons}
							className="nav-button w-fit"
							href="https://shop.spiral.at"
							target="_blank"
						>
							<button className="arrow-link text-xl!">
								<span className="text">Visit Site</span>
								<ArrowUpRight className="arrow arrow-out" strokeWidth={2.5} />
								<ArrowUpRight className="arrow arrow-in" strokeWidth={2.5} />
							</button>
						</Link>
					</div>
				</div>
			</section>
			<div className="w-full overflow-hidden">
				<img
					ref={image}
					src="/images/webshop/webshop_hero_v2.webp"
					alt="spiral website"
					className="h-full max-h-[1000px] w-full my-auto object-cover object-center"
				/>
			</div>
			<div className="bg-white">
				<Spacer size="xl" />
				<section>
					<h2 className="text-2xl my-auto font-thin md:hidden">
						The new website boosts Spiral’s brand image, promotes sales, and
						showcases services, solutions, and team.
					</h2>
					<ScalingText
						className="hidden md:block"
						text="The new website boosts Spiral’s brand <br>
						image, promotes sales, and showcases services,<br>
						solutions, and team."
					/>
				</section>
				<Spacer size="xl" />
				<ProjectImage
					src="/images/webshop/webshop_home.webp"
					alt="spiral website"
				/>
				<Spacer size="sm" />
				<ProjectImage
					src="/images/webshop/webshop_search.webp"
					alt="spiral website"
				/>
				<Spacer size="sm" />
				<ProjectImage
					src="/images/webshop/webshop_product.webp"
					alt="spiral website"
				/>
				<Spacer size="sm" />
				<ProjectImage
					src="/images/webshop/webshop_detail.webp"
					alt="spiral website"
				/>
				<Spacer size="sm" />
				<ProjectImage
					src="/images/webshop/webshop_basket.webp"
					alt="spiral website"
				/>
				<Spacer size="sm" />
				<ProjectImage
					src="/images/webshop/webshop_service.webp"
					alt="spiral website"
				/>
				<Spacer size="sm" />
				<ProjectImage
					src="/images/webshop/webshop_mood_1.webp"
					alt="spiral website"
					className="max-h-[1200px] object-[50%_20%]!"
				/>
				<Spacer />
				<NextProject projectName="Easy Order" href="/easy_order" />
				<Spacer />
			</div>
		</div>
	);
}
