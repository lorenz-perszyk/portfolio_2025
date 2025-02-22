"use client";

import Link from "next/link";
import { ContactModal } from "./contactModal";
import { useTransitionAnimation } from "@/hooks/useTransitionAnimation";
import { NavbarButton } from "./navbarButton";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
	const [handleTransition] = useTransitionAnimation();

	return (
		<nav className="fixed z-10 top-6 md:top-8 flex justify-between items-center w-full text-white mix-blend-difference">
			<div className="flex items-center text-md">
				<Link href="/" onClick={(e) => handleTransition(e, "/")}>
					<button className="custom-nav-button h-4 w-fit ">
						<p className="opacity-0">Lorenz Perszyk</p>
						<span className="text text-exit">Lorenz Perszyk</span>
						<span className="text text-enter">Lorenz Perszyk</span>
					</button>  
				</Link>
			</div>
			<div className="flex items-center gap-4">
				<Link href="/about" onClick={(e) => handleTransition(e, "/about")}>
					<button className="custom-nav-button h-4 w-fit ">
						<p className="opacity-0">About</p>
						<span className="text text-exit">About</span>
						<span className="text text-enter">About</span>
					</button>
				</Link>
				<ContactModal
					trigger={
						<button className="custom-nav-button h-4 w-fit ">
							<p className="opacity-0">Contact</p>
							<span className="text text-exit">Contact</span>
							<span className="text text-enter">Contact</span>
						</button>
					}
				/>
			</div>
		</nav>
	);
};
