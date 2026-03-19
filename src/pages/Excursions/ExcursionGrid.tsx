import { motion } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";
import type { Excursion } from "../../types/excursion.types";
import type { ExcursionCategory } from "../../types/excursion.types";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { excursions } from "../../data/excursions";
import ExcursionCard from "./ExcursionCard";
import ExcursionDetail from "./ExcursionDetail";

type FilterOption = "all" | ExcursionCategory;

interface FilterTab {
	label: string;
	value: FilterOption;
}

const filterTabs: FilterTab[] = [
	{ label: "All", value: "all" },
	{ label: "Snorkeling", value: "snorkeling" },
	{ label: "Dolphins", value: "dolphin-tour" },
	{ label: "Sandbank", value: "sandbank-trip" },
	{ label: "Sunset Cruise", value: "sunset-cruise" },
	{ label: "Island Hopping", value: "island-hopping" },
	{ label: "Custom", value: "custom-tour" },
];

const ExcursionGrid = (): ReactNode => {
	const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
	const [selectedExcursion, setSelectedExcursion] = useState<Excursion | null>(
		null,
	);
	const { ref, isInView } = useScrollAnimation();

	const filtered =
		activeFilter === "all"
			? excursions
			: excursions.filter((e) => e.category === activeFilter);

	return (
		<section className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<SectionLabel>All Excursions</SectionLabel>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						Choose Your Adventure
					</h2>
				</div>

				{/* Filter Tabs */}
				<div className="flex items-center gap-2 flex-wrap justify-center mb-10">
					{filterTabs.map((tab) => (
						<button
							key={tab.value}
							type="button"
							onClick={() => setActiveFilter(tab.value)}
							className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${
									activeFilter === tab.value
										? "bg-[#0A4D68] text-white dark:bg-[#3CC4C9] dark:text-[#0B2545]"
										: "bg-gray-100 text-gray-500 dark:bg-[#0A4D68]/20 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#0A4D68]/40"
								}
              `}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Grid */}
				<div
					ref={ref}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{filtered.map((excursion, index) => (
						<motion.div
							key={excursion.id}
							initial={{ opacity: 0, y: 32 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: index * 0.08,
								ease: "easeOut",
							}}
						>
							<ExcursionCard
								excursion={excursion}
								onSelect={setSelectedExcursion}
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Detail Modal */}
			<ExcursionDetail
				excursion={selectedExcursion}
				onClose={() => setSelectedExcursion(null)}
			/>
		</section>
	);
};

export default ExcursionGrid;
