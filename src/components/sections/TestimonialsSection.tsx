import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { ReactNode } from "react";
import type { Testimonial } from "../../types/common.types";
import SectionLabel from "../ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const testimonials: Testimonial[] = [
	{
		id: "t-001",
		name: "Sarah Mitchell",
		country: "United Kingdom",
		rating: 5,
		comment:
			"The dolphin tour was absolutely magical. Our guide was knowledgeable and passionate, and we got to swim right alongside a pod of dolphins. An experience we will never forget.",
		tour: "Dolphin Tour",
	},
	{
		id: "t-002",
		name: "Marco Rossi",
		country: "Italy",
		rating: 5,
		comment:
			"The sandbank trip exceeded all our expectations. Pristine white sand, crystal clear water, and a beautiful picnic set up just for us. Ocean Blue made our honeymoon truly special.",
		tour: "Sandbank Trip",
	},
	{
		id: "t-003",
		name: "Amina Hassan",
		country: "UAE",
		rating: 5,
		comment:
			"From booking to the actual tour everything was seamless. The sunset cruise on the traditional dhow was breathtaking. The crew was warm, professional and made us feel right at home.",
		tour: "Sunset Cruise",
	},
];

const StarRating = ({ rating }: { rating: number }): ReactNode => {
	return (
		<div className="flex items-center gap-0.5">
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={`star-${
						// biome-ignore lint/suspicious/noArrayIndexKey: static rating display
						i
					}`}
					size={14}
					className={
						i < rating
							? "text-[#F28C38] fill-[#F28C38]"
							: "text-gray-200 dark:text-gray-700"
					}
				/>
			))}
		</div>
	);
};

const TestimonialsSection = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-[#F4EBD0]/30 dark:bg-[#0A4D68]/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<SectionLabel>What Our Guests Say</SectionLabel>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						Stories from the Ocean
					</h2>
				</div>

				<div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, y: 32 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							className="
                bg-white dark:bg-[#0B2545]
                rounded-2xl p-6
                border border-gray-100 dark:border-[#0A4D68]/40
                flex flex-col gap-4
              "
						>
							<StarRating rating={testimonial.rating} />

							<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
								"{testimonial.comment}"
							</p>

							<div className="pt-2 border-t border-gray-100 dark:border-[#0A4D68]/30">
								<p className="text-sm font-semibold text-[#0A4D68] dark:text-[#DFF6FF]">
									{testimonial.name}
								</p>
								<div className="flex items-center justify-between mt-0.5">
									<p className="text-xs text-gray-400 dark:text-gray-500">
										{testimonial.country}
									</p>
									<span className="text-xs text-[#3CC4C9] font-medium">
										{testimonial.tour}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
