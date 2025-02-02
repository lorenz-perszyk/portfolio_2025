import { PageTitle } from "@/components/pageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<PageTitle title="About" />
			<div className="h-full w-full flex flex-col gap-4 justify-center items-center">
				<Button variant="default" size="lg" asChild>
					<Link href="/">Home</Link>
				</Button>
				<Button variant="ghost" size="lg" asChild>
					<Link href="/about">About</Link>
				</Button>
			</div>
		</>
	);
}
