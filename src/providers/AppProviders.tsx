import type { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

interface AppProvidersProps {
	children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps): ReactNode => {
	return (
		<ThemeProvider>
			<QueryProvider>{children}</QueryProvider>
		</ThemeProvider>
	);
};

export default AppProviders;
