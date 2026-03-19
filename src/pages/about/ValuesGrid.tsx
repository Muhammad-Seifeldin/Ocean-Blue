import { motion } from "motion/react";
import { Anchor, Heart, Leaf, Shield, Star, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface Value {
	icon: LucideIcon;
	title: string;
	description: string;
	color: string;
	bg: string;
}

const values: Value[] = [
	{
		icon: Shield,
		title: "Safety",
		description:
			"Every trip and transport service prioritizes guest safety above all else. All equipment is inspected regularly and all guides are certified.",
		color: "text-[#0A4D68] dark:text-[#3CC4C9]",
		bg: "bg-[#0A4D68]/10 dark:bg-[#3CC4C9]/10",
	},
	{
		icon: Anchor,
		title: "Authenticity",
		description:
			"We celebrate Zanzibar's natural beauty and culture in everything we do. No generic experiences — only real, meaningful moments.",
		color: "text-[#3CC4C9]",
		bg: "bg-[#3CC4C9]/10",
	},
	{
		icon: Heart,
		title: "Hospitality",
		description:
			"Every guest is treated like a friend visiting the island for the first time. Warm, personal, and always going the extra mile.",
		color: "text-[#F28C38]",
		bg: "bg-[#F28C38]/10",
	},
	{
		icon: Star,
		title: "Adventure",
		description:
			"We create memorable experiences on the sea and beaches that push the boundaries of ordinary travel and ignite a sense of wonder.",
		color: "text-[#0A4D68] dark:text-[#3CC4C9]",
		bg: "bg-[#0A4D68]/10 dark:bg-[#3CC4C9]/10",
	},
	{
		icon: Leaf,
		title: "Sustainability",
		description:
			"We respect the ocean and are committed to protecting Zanzibar's natural environment for the generations that come after us.",
		color: "text-[#3CC4C9]",
		bg: "bg-[#3CC4C9]/10",
	},
	{
		icon: Users,
		title: "Community",
		description:
			"Ocean Blue is rooted in the local community. We employ local guides, support local businesses, and give back to the island that made us.",
		color: "text-[#F28C38]",
		bg: "bg-[#F28C38]/10",
	},
];

const ValuesGrid = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-[#F4EBD0]/20 dark:bg-[#0A4D68]/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<SectionLabel>What We Stand For</SectionLabel>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						Our Core Values
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
						These are the principles that guide every decision we make and every
						experience we create.
					</p>
				</div>

				<div
					ref={ref}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{values.map((value, index) => (
						<motion.div
							key={value.title}
							initial={{ opacity: 0, y: 32 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: index * 0.08,
								ease: "easeOut",
							}}
							className="
                bg-white dark:bg-[#0B2545]
                rounded-2xl p-6
                border border-gray-100 dark:border-[#0A4D68]/40
                flex flex-col gap-4
                hover:shadow-sm
                transition-all duration-300
              "
						>
							<div
								className={`w-11 h-11 rounded-xl flex items-center justify-center ${value.bg}`}
							>
								<value.icon size={22} className={value.color} />
							</div>
							<div className="flex flex-col gap-1.5">
								<h3 className="text-base font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
									{value.title}
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
									{value.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ValuesGrid;
