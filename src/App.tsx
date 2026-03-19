import { AnimatePresence } from "motion/react";
import type { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageTransition from "./components/layout/PageTransition";
import PageWrapper from "./components/layout/PageWrapper";
import ScrollToTop from "./components/layout/ScrollToTop";

const App = (): ReactNode => {
	const location = useLocation();

	return (
		<PageWrapper>
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<PageTransition key={location.pathname}>
					<Outlet />
				</PageTransition>
			</AnimatePresence>
		</PageWrapper>
	);
};

export default App;
