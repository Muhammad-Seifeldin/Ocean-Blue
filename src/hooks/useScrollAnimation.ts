import { useInView } from "motion/react";
import { useRef } from "react";
import type { RefObject } from "react";

interface ScrollAnimationOptions {
	threshold?: number;
	once?: boolean;
}

interface ScrollAnimationResult {
	ref: RefObject<HTMLDivElement | null>;
	isInView: boolean;
}

const useScrollAnimation = (
	options: ScrollAnimationOptions = {},
): ScrollAnimationResult => {
	const { threshold = 0.15, once = true } = options;
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		amount: threshold,
		once,
	});

	return { ref, isInView };
};

export default useScrollAnimation;
