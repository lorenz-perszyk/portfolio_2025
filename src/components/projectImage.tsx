import React from "react";
import Image from "next/image";

interface ProjectImageProps {
	src: string;
	alt: string;
	className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
	src,
	alt,
	className,
}) => {
	return (
		<section className="relative">
			<div className="relative aspect-video">
				<Image
					src={src}
					alt={alt}
					fill
					className={`max-h-[1100px] overflow-hidden object-cover object-center ${className}`}
				/>
			</div>
		</section>
	);
};
