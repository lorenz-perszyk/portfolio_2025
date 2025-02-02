"use client";

import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/UserProvider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 1,
		},
	},
});

type Props = {
	children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
      <UserProvider>
        {children}
      </UserProvider>
		</QueryClientProvider>
	);
};
