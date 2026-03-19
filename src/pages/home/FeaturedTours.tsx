import { motion } from "motion/react";
import { Clock, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../../components/ui/SectionLabel";
import Badge from "../../components/ui/Badge";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { getFeaturedExcursions } from "../../data/excursions";
import { formatPrice, truncateText } from "../../utils/formatters";

const FeaturedTours = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();
	const featured = getFeaturedExcursions();

	return (
		<section className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
					<div>
						<SectionLabel>What We Offer</SectionLabel>
						<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
							Featured Excursions
						</h2>
					</div>
					<Link
						to="/excursions"
						className="
              text-sm font-semibold text-[#3CC4C9]
              hover:text-[#0A4D68] dark:hover:text-white
              transition-colors duration-200
              shrink-0
            "
					>
						View all excursions →
					</Link>
				</div>

				<div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{featured.map((excursion, index) => (
						<motion.div
							key={excursion.id}
							initial={{ opacity: 0, y: 32 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							className="
                group bg-white dark:bg-[#0B2545]
                rounded-2xl overflow-hidden
                border border-gray-100 dark:border-[#0A4D68]/40
                hover:shadow-md hover:scale-[1.02]
                transition-all duration-300
              "
						>
							{/* Image */}
							<div className="relative h-52 overflow-hidden">
								<img
									src={excursion.image}
									alt={excursion.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute top-3 right-3">
									<Badge variant="sunset">
										{formatPrice(excursion.price, excursion.currency)}
									</Badge>
								</div>
							</div>

							{/* Content */}
							<div className="p-5 flex flex-col gap-3">
								<h3 className="text-base font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
									{excursion.title}
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
									{truncateText(excursion.description, 100)}
								</p>

								<div className="flex items-center gap-4 pt-1">
									<span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
										<Clock size={13} />
										{excursion.duration}
									</span>
									<span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
										<Users size={13} />
										{excursion.groupSize}
									</span>
								</div>

								<Link
									to="/excursions"
									className="
                    mt-1 w-full py-2.5 rounded-full text-sm font-semibold text-center
                    border border-[#0A4D68] text-[#0A4D68]
                    dark:border-[#3CC4C9] dark:text-[#3CC4C9]
                    hover:bg-[#0A4D68] hover:text-white
                    dark:hover:bg-[#3CC4C9] dark:hover:text-[#0B2545]
                    transition-all duration-200
                  "
								>
									Learn More
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedTours;
