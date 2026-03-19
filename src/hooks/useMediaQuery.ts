import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState<boolean>(
		() => window.matchMedia(query).matches,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const handler = (event: MediaQueryListEvent): void => {
			setMatches(event.matches);
		};

		mediaQuery.addEventListener("change", handler);

		return () => {
			mediaQuery.removeEventListener("change", handler);
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;
