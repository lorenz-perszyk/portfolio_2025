import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="w-full h-screen">
				<Providers>
					<SidebarProvider>
						<AppSidebar />
						<main className="w-full h-screen relative px-3.5 pb-4 pt-16 bg-gradient-radial from-[#06001C] to-[#1A0077]">
							<SidebarTrigger className="absolute top-2 left-2" />
							{children}
						</main>
						<Toaster />
					</SidebarProvider>
				</Providers>
			</body>
		</html>
	);
}
