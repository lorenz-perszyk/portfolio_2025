"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/app/utils/animations";

export const useTransitionAnimation = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleTransition = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		if (pathname !== href) {
			animatePageOut(href, router);
		}
	};

	return [handleTransition];
};
