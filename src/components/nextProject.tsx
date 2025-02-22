import { useTransitionAnimation } from "@/hooks/useTransitionAnimation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type NextProjectProps = {
	projectName: string;
	href: string;
};

export const NextProject: React.FC<NextProjectProps> = ({
	projectName,
	href,
}) => {
	const [handleTransition] = useTransitionAnimation();

	return (
		<section className="flex items-center justify-between font-medium uppercase tracking-wider">
			<p className="text-[clamp(18px,4vw,36px)]">Next Project</p>
			<Link
				href={href}
				className="underline-hover before:h-0.5 md:before:h-[3px] lg:before:h-1 cursor-pointer items-center flex gap-1 md:gap-2"
				onClick={(e) => handleTransition(e, href)}
			>
				<p className="text-[clamp(18px,4vw,36px)] h-fit">{projectName}</p>
				<span>
					<ArrowRight className="size-5 md:size-8 lg:size-10" strokeWidth={3} />
				</span>
			</Link>
		</section>
	);
};
