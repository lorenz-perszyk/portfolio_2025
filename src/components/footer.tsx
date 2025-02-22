import { ContactModal } from "./contactModal";

export const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col h-50 pb-6 pt-10 bg-radial-[at_35%_30%] from-[#06001C] from-10% to-[#1A0077] text-white">
			<ContactModal
				trigger={<button className="text-3xl! lg:text-4xl! cursor-pointer w-fit">Contact</button>}
			/>
			<div className="w-full mt-auto flex justify-between pt-3 border-t-1 border-gray-500">
				<p>Lorenz Perszyk</p>
				<p>© 2025</p>
			</div>
		</footer>
	);
};
