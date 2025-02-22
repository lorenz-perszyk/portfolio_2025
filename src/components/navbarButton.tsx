import Link from "next/link";

type Props = {
	text: string;
};

export const NavbarButton: React.FC<Props> = ({ text }) => {
	return (
		<button className="custom-nav-button h-4 w-fit text-black mix-blend-difference">
			<p className="opacity-0">{text}</p>
			<span className="text text-exit mix-blend-difference">{text}</span>
			<span className="text text-enter mix-blend-difference">{text}</span>
		</button>
	);
};
