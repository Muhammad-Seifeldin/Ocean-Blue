import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			staleTime: 1000 * 60 * 5,
		},
		mutations: {
			retry: 0,
		},
	},
});

interface QueryProviderProps {
	children: ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps): ReactNode => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default QueryProvider;
