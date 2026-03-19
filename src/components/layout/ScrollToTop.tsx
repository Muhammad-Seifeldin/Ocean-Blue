import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (): null => {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <off>
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}
	}, []);

	return null;
};

export default ScrollToTop;
