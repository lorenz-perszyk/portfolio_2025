import React from "react";

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
		<section>
			<img
				src={src}
				alt={alt}
				className={`max-h-[1100px] overflow-hidden w-full object-cover object-center ${className}`}
			/>
		</section>
	);
};
