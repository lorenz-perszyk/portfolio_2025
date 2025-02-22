import React, { ReactNode } from "react";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogHeader,
	DialogClose,
} from "@/components/ui/dialog";
import { ContactForm } from "./contactForm";
import { X } from "lucide-react";

interface CustomDialogProps {
	trigger: ReactNode;
}

export const ContactModal: React.FC<CustomDialogProps> = ({ trigger }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent
				className="h-[100dvh] max-h-[100dvh] min-w-full overflow-scroll md:overflow-auto bg-black border-black p-2 md:p-12"
				aria-describedby={"contact form"}
			>
				<div className="bg-white h-full rounded-4xl p-4 lg:p-2 flex flex-col lg:flex-row gap-2 gap-y-12 lg:overflow-hidden">
					<div className="relative grow-0 lg:grow-1 flex flex-col h-full pt-32 gap-10 px-0 lg:px-4 xl:px-8">
						<DialogHeader>
							<DialogTitle className="text-3xl font-medium text-left">
								Let's get in touch!
							</DialogTitle>
						</DialogHeader>
						<ContactForm />
						<DialogClose asChild>
							<button className="absolute top-3 lg:top-8 left-0 lg:left-8 cursor-pointer">
								<X className="h-10 w-10 text-gray-400" strokeWidth={1} />
							</button>
						</DialogClose>
					</div>
					<img
						src="/images/contact.webp"
						alt="contact"
						className="w-full lg:w-3/5 max-h-60 lg:max-h-full object-cover rounded-3xl rotate-180"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
