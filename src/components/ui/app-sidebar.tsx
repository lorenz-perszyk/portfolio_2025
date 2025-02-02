"use client";

import {
	Calendar,
	Home,
	Inbox,
	File,
	UserRound,
	LogOut,
	LogIn,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	// SidebarHeader,
	// SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useUser } from "@/app/context/UserProvider";
import { useRouter } from "next/navigation";

// Menu items.
const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "My Profile",
		url: "/about",
		icon: UserRound,
	},
	{
		title: "Employees",
		url: "/employees",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "/calendar",
		icon: Calendar,
	},
	{
		title: "Orders",
		url: "/orders",
		icon: Calendar,
	},
	{
		title: "Add Employee",
		url: "/form",
		icon: File,
	},
];

export function AppSidebar() {
	const { user, logout } = useUser();
	const router = useRouter();

	const handleLogout = () => {
		logout(() => {
			router.push("/login");
		});
	};

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Cantine</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{user && (
								<>
									{items.map((item) => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild>
												<Link href={item.url}>
													<item.icon className="mr-2" />
													<span>{item.title}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={handleLogout}
											className="text-red-500"
										>
											<LogOut className="mr-2" />
											Logout
										</SidebarMenuButton>
									</SidebarMenuItem>
								</>
							)}
							{!user && (
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href="/login">
											<LogIn className="mr-2" />
											<span>Login</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							)}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
