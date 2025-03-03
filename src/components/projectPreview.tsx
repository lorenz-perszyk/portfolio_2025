'use client'

import { useTransitionAnimation } from "@/hooks/useTransitionAnimation";
import Link from "next/link";
import Image from "next/image";

type ProjectPreviewProps = {
	imagePath: string;
	title: string;
	year: string;
	href: string;
};

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
	imagePath,
	title,
	year,
	href
}) => {
	const [ handleTransition ] = useTransitionAnimation()

	return (
		<section className="flex justify-center items-center">
			<Link
				href={href}
				className="relative w-full h-full aspect-video mb-16 md:mb-0 cursor-pointer"
				onClick={(e) => handleTransition(e, href)}
			>
				<Image
					src={imagePath}
					alt="spiral website"
					fill
					className="object-cover object-center overflow-hidden "
				/>
				<div className="absolute w-80 md:w-120 left-4 -bottom-8 md:left-8 md:bottom-8 xl:left-12 xl:bottom-12 rounded-xl bg-[#FFDD00] p-4 md:p-6 uppercase font-medium tracking-wider">
					<h4 className="text-md md:text-lg">
						{title}
						<br />
						{year}
					</h4>
				</div>
			</Link>
		</section>
	);
};
