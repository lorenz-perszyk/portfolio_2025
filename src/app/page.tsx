"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogHeader,
	DialogFooter,
} from "@/components/ui/dialog";

export default function Hero() {
	return (
		<>
			<nav className="fixed px-10 top-10 left-0">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Edit Profile</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4"></div>
						<DialogFooter>
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</nav>
			<div className="h-screen bg-gray-100">
				<div className="flex flex-col h-[90%] px-10 bg-gradient-to-tr from-[#06001C] from-20% to-[#1A0077]">
					<div className="flex flex-col gap-20 mt-auto mb-28">
						<h1 className="text-[clamp(28px,6vw,90px)] leading-tight text-white font-thin tracking-wide">
							Crafting Experiences,
							<br />
							Building Interfaces.
						</h1>
						<h3 className="text-2xl text-white font-thin tracking-wide">
							DESIGN + DEVELOPMENT
						</h3>
					</div>
				</div>
			</div>
			<div className="flex h-[60vh] bg-gray-100 px-10">
				<h2 className="text-[56px] my-auto font-thin leading-20 indent-80">
					I’m a UI/UX designer and frontend developer with a passion for
					creating intuitive, visually stunning digital experiences. With a
					background in communication design and a love for coding, I bridge the
					gap between design and development.
				</h2>
			</div>
			<div className="flex justify-center items-center h-[85vh] bg-gray-100 px-10">
				<div className="relative w-[70%] h-[80%] overflow-hidden">
					<img
						src="/images/spiral_website.png"
						alt="spiral website"
						className="h-full w-full object-cover object-center"
					/>
					<div className="absolute w-120 left-14 bottom-14 rounded-xl bg-[#FFDD00] p-6 uppercase font-medium tracking-wider">
						<h4 className="text-lg">
							E-Commerce / Company Portal
							<br />
							2023-2025
						</h4>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center h-[85vh] bg-gray-100 px-10">
				<div className="relative w-[70%] h-[80%] overflow-hidden">
					<img
						src="/images/easy_order.png"
						alt="easy order"
						className="h-full w-full object-cover object-center"
					/>
					<div className="absolute w-120 left-14 bottom-14 rounded-xl bg-[#FFDD00] p-6 uppercase font-medium tracking-wider">
						<h4 className="text-lg">
							App / Easy Order
							<br />
							2023-2025
						</h4>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center h-[85vh] bg-gray-100 px-10">
				<div className="relative w-[70%] h-[80%] overflow-hidden">
					<img
						src="/images/intranet.png"
						alt="spiral intranet"
						className="h-full w-full object-cover object-center"
					/>
					<div className="absolute w-120 left-14 bottom-14 rounded-xl bg-[#FFDD00] p-6 uppercase font-medium tracking-wider">
						<h4 className="text-lg">
							Spiral Intranet
							<br />
							2024-2025
						</h4>
					</div>
				</div>
			</div>
		</>
	);
}
