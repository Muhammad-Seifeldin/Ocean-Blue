import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { Transition } from "motion/react";

interface PageTransitionProps {
	children: ReactNode;
}

const pageVariants = {
	initial: {
		opacity: 0,
		y: 16,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: -8,
	},
};

const pageTransition: Transition = {
	duration: 0.3,
	ease: "easeInOut",
};

const PageTransition = ({ children }: PageTransitionProps): ReactNode => {
	return (
		<motion.div
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
