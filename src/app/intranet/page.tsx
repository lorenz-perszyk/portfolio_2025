"use client";

import ScalingText from "@/components/scalingText";
import { Spacer } from "@/components/ui/spacer";
import { ProjectImage } from "@/components/projectImage";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import { NextProject } from "@/components/nextProject";
import Image from "next/image";

export default function Intranet() {
	const { line, title, description, services, buttons, image } =
		useProjectAnimation();

	return (
		<div className="pt-40 md:pt-60">
			<section className="pb-30">
				<div ref={line} className="h-[1px] bg-black"></div>
				<h1
					ref={title}
					id="title"
					className="text-2xl! md:text-3xl font-medium uppercase tracking-wide mt-6! mb-8!"
				>
					Spiral Intranet
				</h1>
				<div className="grid grid-cols-6 gap-y-8">
					<p
						ref={description}
						id="description"
						className="kerning-none text-lg md:text-xl leading-7 md:leading-8 md:w-4/5 col-span-12 md:col-span-4 2xl:col-span-3"
					>
						Redesign of the companies intranet to provide all users, regardless
						of their position, with an intuitive, user-friendly platform for
						accessing critical information. The new design prioritizes easy
						navigation and responsive functionality, ensuring seamless usability
						across devices, especially for tablet users who make up a
						significant portion of the user base. The goal was to streamline
						workflows, improve efficiency, and empower employees to make quick,
						informed decisions.
					</p>
					<div className="flex flex-col gap-8 col-span-12 md:col-span-2 2xl:col-span-3">
						<p ref={services} id="services" className="text-xl leading-8">
							Frontend Development
							<br />
							UI/UX Design
						</p>
					</div>
				</div>
			</section>
			<div className="relative w-full h-[60vh] md:h-[900px] lg:h-[1200px] overflow-hidden">
				<Image
					ref={image}
					src="/images/intranet/intranet_hero.webp"
					alt="spiral intranet"
					fill
					priority
					className="object-cover object-center"
				/>
			</div>
			<Spacer size="sm" />
			<ProjectImage
				src="/images/intranet/intranet_product.webp"
				alt="spiral website"
			/>
			<Spacer />
			<section>
				<h2 className="text-2xl my-auto font-thin md:hidden">
					Transforming the intranet into a user-friendly hub for seamless
					information access, designed to streamline workflows and boost
					productivity.
				</h2>
				<ScalingText
					className="hidden md:block"
					text="Transforming the intranet into a user-friendly hub<br>
					for seamless information access, designed to streamline workflows<br>
					and boost productivity."
				/>
			</section>
			<Spacer />
			<ProjectImage
				src="/images/intranet/intranet_grid.webp"
				alt="spiral intranet grid screen"
			/>
			<Spacer size="sm" />
			<ProjectImage
				src="/images/intranet/intranet_roa.webp"
				alt="spiral intranet roa calculator"
			/>
			<Spacer size="sm" />
			<ProjectImage
				src="/images/intranet/intranet_spiralothek.webp"
				alt="spiral intranet video library"
			/>
			<Spacer />
			<NextProject projectName="Spiral" href="/webshop" />
			<Spacer />
		</div>
	);
}
