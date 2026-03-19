import { motion } from "motion/react";
import { Anchor, Globe, Users } from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface StatItem {
	icon: LucideIcon;
	value: string;
	label: string;
}

const stats: StatItem[] = [
	{
		icon: Users,
		value: "5,000+",
		label: "Happy Guests",
	},
	{
		icon: Anchor,
		value: "12+",
		label: "Tours & Transfers",
	},
	{
		icon: Globe,
		value: "50+",
		label: "Countries Represented",
	},
];

const OurStory = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={ref}
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
				>
					{/* Image Side */}
					<motion.div
						initial={{ opacity: 0, x: -32 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="relative"
					>
						<div className="relative rounded-3xl overflow-hidden aspect-4/3">
							<img
								src="/images/hero/hero-about.png"
								alt="Ocean Blue story"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-[#0B2545]/30 to-transparent" />
						</div>

						{/* Floating stat card */}
						<div
							className="
              absolute -bottom-6 -right-4 md:-right-8
              bg-white dark:bg-[#0B2545]
              rounded-2xl p-4 shadow-lg
              border border-gray-100 dark:border-[#0A4D68]/40
            "
						>
							<p className="text-2xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
								5,000+
							</p>
							<p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
								Happy guests served
							</p>
						</div>
					</motion.div>

					{/* Text Side */}
					<motion.div
						initial={{ opacity: 0, x: 32 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
						className="flex flex-col gap-6"
					>
						<div>
							<SectionLabel>Our Story</SectionLabel>
							<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF] leading-tight">
								Zanzibar is Our Home. The Ocean is Our Passion.
							</h2>
						</div>

						<div className="flex flex-col gap-4 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
							<p>
								Ocean Blue was founded by a group of Zanzibar locals who grew up
								on these shores, fishing, sailing, and diving in the same waters
								they now share with guests from around the world. What started
								as a small boat and a dream has grown into one of Zanzibar's
								most trusted ocean experience providers.
							</p>
							<p>
								Every tour we run reflects our deep love for this island — its
								turquoise waters, its vibrant marine life, its warm sunsets, and
								its welcoming people. We do not just show you Zanzibar. We share
								it with you the way locals do.
							</p>
							<p>
								Safety, authenticity, and genuine hospitality are not just words
								to us. They are the foundation of every single experience we
								create — from a quick airport transfer to a full day island
								hopping adventure.
							</p>
						</div>

						{/* Stats Row */}
						<div className="grid grid-cols-3 gap-4 pt-2">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-[#0A4D68]/5 dark:bg-[#3CC4C9]/10"
								>
									<stat.icon size={20} className="text-[#3CC4C9]" />
									<p className="text-xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
										{stat.value}
									</p>
									<p className="text-xs text-gray-400 dark:text-gray-500 leading-tight">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
