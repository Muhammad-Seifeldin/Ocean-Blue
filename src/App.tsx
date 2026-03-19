import { AnimatePresence } from "motion/react";
import type { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageTransition from "./components/layout/PageTransition";
import PageWrapper from "./components/layout/PageWrapper";

const App = (): ReactNode => {
	const location = useLocation();

	return (
		<PageWrapper>
			<AnimatePresence mode="wait">
				<PageTransition key={location.pathname}>
					<Outlet />
				</PageTransition>
			</AnimatePresence>
		</PageWrapper>
	);
};

export default App;
