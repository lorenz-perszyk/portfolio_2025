"use client";

import ScalingText from "@/components/scalingText";
import { Spacer } from "@/components/ui/spacer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import { NextProject } from "@/components/nextProject";

export default function EasyOrder() {
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
					Easy Order
				</h1>
				<div className="grid grid-cols-6 gap-y-8">
					<p
						ref={description}
						id="description"
						className="kerning-none text-lg md:text-xl leading-7 md:leading-8 md:w-4/5 col-span-12 md:col-span-4 2xl:col-span-3"
					>
						Easy Order is a companion app for the Spiral webshop, designed to
						streamline the purchasing process for users. The app focuses on
						barcode scanning to speed up product selection, while also providing
						an intuitive interface for order history, customer support, and
						seamless checkout. The goal was to create a user-friendly experience
						that enhances efficiency and convenience for Spiral’s customers.
					</p>
					<div className="flex flex-col gap-8 col-span-12 md:col-span-2 2xl:col-span-3">
						<p ref={services} id="services" className="text-xl leading-8">
							Product Owner
							<br />
							UI/UX
						</p>
						<div className="flex flex-col gap-0">
							<Link
								className="nav-button"
								href="https://play.google.com/store/apps/details?id=at.spiral.EasyOrderApp&hl=en"
								target="_blank"
							>
								<button className="arrow-link text-xl!">
									<span className="text">Google Play</span>
									<ArrowUpRight className="arrow arrow-out" />
									<ArrowUpRight className="arrow arrow-in" />
								</button>
							</Link>
							<Link
								className="nav-button"
								href="https://apps.apple.com/at/app/spiral-easy-order-4-0/id6467878004"
								target="_blank"
							>
								<button className="arrow-link text-xl!">
									<span className="text">App Store</span>
									<ArrowUpRight className="arrow arrow-out" />
									<ArrowUpRight className="arrow arrow-in" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<div className="w-full overflow-hidden">
				<img
					ref={image}
					src="/images/easy_order/easy_order_hero.webp"
					alt="spiral easy order"
					className="h-full max-h-[1000px] w-full my-auto object-cover object-center"
				/>
			</div>
			<Spacer size="xl" />
			<section>
				<h2 className="text-2xl my-auto font-thin md:hidden">
					Easy Order combines barcode scanning, order history, and quick
					checkout in one intuitive interface.
				</h2>
				<ScalingText
					className="hidden md:block"
					text="Easy Order combines barcode scanning, order<br>
					history, and quick checkout in one intuitive interface."
				/>
			</section>
			<Spacer size="xl" />
			<section className="relative overflow-hidden">
				<img
					src="/images/easy_order/eo_1.webp"
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</section>
			<Spacer />
			<section className="relative max-h-[1000px] overflow-hidden">
				<img
					src="/images/easy_order/eo_warehouse.jpg"
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</section>
			<Spacer />
			<NextProject projectName="Intranet" href="/intranet" />
			<Spacer />
		</div>
	);
}
