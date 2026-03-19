import { motion } from "motion/react";
import { Anchor, Heart, Shield, Leaf, Star, Users } from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface ValueItem {
	icon: LucideIcon;
	title: string;
	description: string;
}

const values: ValueItem[] = [
	{
		icon: Shield,
		title: "Safety First",
		description:
			"Every trip is conducted with the highest safety standards. All guides are certified and equipment is regularly inspected.",
	},
	{
		icon: Heart,
		title: "Genuine Hospitality",
		description:
			"We treat every guest like a friend visiting the island. Warm, personal, and always going the extra mile.",
	},
	{
		icon: Anchor,
		title: "Authentic Experiences",
		description:
			"No generic tours. Every excursion is crafted to showcase the real beauty and culture of Zanzibar.",
	},
	{
		icon: Star,
		title: "Expert Local Guides",
		description:
			"Our guides are born and raised in Zanzibar. Their passion and knowledge make every trip unforgettable.",
	},
	{
		icon: Users,
		title: "Small Group Sizes",
		description:
			"We keep our groups small so every guest gets the personal attention and experience they deserve.",
	},
	{
		icon: Leaf,
		title: "Eco Responsible",
		description:
			"We are committed to protecting Zanzibar's marine ecosystem for future generations to enjoy.",
	},
];

const WhyChooseUs = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-[#F4EBD0]/20 dark:bg-[#0A4D68]/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<SectionLabel>Why Ocean Blue</SectionLabel>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						The Ocean Blue Difference
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
						We are not just a tour operator. We are your trusted companion for
						every ocean adventure in Zanzibar.
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
							<div className="w-11 h-11 rounded-xl bg-[#0A4D68]/10 dark:bg-[#3CC4C9]/10 flex items-center justify-center">
								<value.icon
									size={22}
									className="text-[#0A4D68] dark:text-[#3CC4C9]"
								/>
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

export default WhyChooseUs;
