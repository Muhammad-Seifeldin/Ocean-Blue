import { motion } from "motion/react";
import type { ReactNode } from "react";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { transportOptions } from "../../data/transportation";
import TransportCard from "./TransportCard";

const TransportOptions = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<SectionLabel>Getting Around</SectionLabel>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						Our Transfer Services
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
						Comfortable, punctual, and reliable transportation across Zanzibar
						island — whatever your needs, we have you covered.
					</p>
				</div>

				<div
					ref={ref}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{transportOptions.map((option, index) => (
						<motion.div
							key={option.id}
							initial={{ opacity: 0, y: 32 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
						>
							<TransportCard option={option} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TransportOptions;
