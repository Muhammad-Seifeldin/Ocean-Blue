import { motion } from "motion/react";
import type { ReactNode } from "react";
import SectionLabel from "../../components/ui/SectionLabel";

interface TermsSection {
	title: string;
	content: string[];
}

const sections: TermsSection[] = [
	{
		title: "Booking and Confirmation",
		content: [
			"All bookings are subject to availability and are confirmed only upon receipt of a confirmation message from Ocean Blue.",
			"Submitting a booking request through our website does not guarantee a reservation until you receive a written confirmation from our team.",
			"We reserve the right to decline any booking request at our discretion.",
		],
	},
	{
		title: "Payments",
		content: [
			"Payment terms will be communicated at the time of booking confirmation. We accept various payment methods which will be outlined during the booking process.",
			"Prices listed on our website are per person unless otherwise stated and are subject to change without prior notice.",
			"All prices are quoted in US Dollars unless explicitly stated otherwise.",
		],
	},
	{
		title: "Cancellation Policy",
		content: [
			"Cancellations made more than 48 hours before the scheduled tour or transfer will receive a full refund.",
			"Cancellations made within 48 hours of the scheduled departure may be subject to a cancellation fee of up to 50% of the total booking value.",
			"No-shows or cancellations on the day of departure will not be eligible for a refund.",
			"Ocean Blue reserves the right to cancel any tour or transfer due to adverse weather conditions, safety concerns, or circumstances beyond our control. In such cases a full refund or alternative date will be offered.",
		],
	},
	{
		title: "Health and Safety",
		content: [
			"All guests are required to disclose any medical conditions, disabilities, or physical limitations that may affect their ability to participate in our activities.",
			"Ocean Blue reserves the right to refuse participation to any guest whose health or physical condition may pose a risk to themselves or others.",
			"Guests are responsible for ensuring they are fit and healthy to participate in the activities they have booked.",
			"Life jackets and safety equipment are mandatory on all water-based excursions and must be worn at all times when required by the guide.",
		],
	},
	{
		title: "Liability",
		content: [
			"Ocean Blue is not liable for any loss, damage, injury, or expense that results from circumstances beyond our reasonable control.",
			"We strongly recommend that all guests obtain comprehensive travel insurance prior to their trip to cover cancellations, medical emergencies, and personal belongings.",
			"Guests participate in all activities at their own risk. Ocean Blue takes all reasonable precautions to ensure guest safety but cannot guarantee against all risks inherent in outdoor and water-based activities.",
		],
	},
	{
		title: "Conduct",
		content: [
			"Guests are expected to behave respectfully toward guides, crew members, other guests, and the natural environment at all times.",
			"Ocean Blue reserves the right to remove any guest from a tour or transfer without refund if their behavior is deemed disruptive, dangerous, or disrespectful.",
			"The consumption of alcohol during excursions is at the discretion of the Ocean Blue guide and may be restricted for safety reasons.",
		],
	},
	{
		title: "Environmental Responsibility",
		content: [
			"Guests are expected to respect Zanzibar's natural marine environment. Touching or disturbing coral, marine life, or natural habitats is strictly prohibited.",
			"All waste must be disposed of responsibly. Littering in or around the ocean is not tolerated.",
			"Ocean Blue is committed to sustainable tourism practices and asks all guests to support our efforts to protect the environment.",
		],
	},
	{
		title: "Governing Law",
		content: [
			"These Terms and Conditions are governed by the laws of the United Republic of Tanzania.",
			"Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Zanzibar, Tanzania.",
		],
	},
];

const Terms = (): ReactNode => {
	return (
		<section className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col gap-12"
				>
					{/* Header */}
					<div className="flex flex-col gap-3">
						<SectionLabel>Legal</SectionLabel>
						<h1 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
							Terms & Conditions
						</h1>
						<p className="text-sm text-gray-400 dark:text-gray-500">
							Last updated: January 2025
						</p>
						<p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
							Please read these Terms and Conditions carefully before using our
							services. By making a booking with Ocean Blue, you agree to be
							bound by the following terms.
						</p>
					</div>

					{/* Sections */}
					<div className="flex flex-col gap-10">
						{sections.map((section, index) => (
							<motion.div
								key={section.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: index * 0.07,
									ease: "easeOut",
								}}
								className="flex flex-col gap-4"
							>
								<h2 className="text-lg font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
									{index + 1}. {section.title}
								</h2>
								<div className="flex flex-col gap-3">
									{section.content.map((paragraph) => (
										<p
											key={paragraph}
											className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed"
										>
											{paragraph}
										</p>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Footer Note */}
					<div
						className="
            p-5 rounded-2xl
            bg-[#0A4D68]/5 dark:bg-[#3CC4C9]/10
            border border-[#0A4D68]/10 dark:border-[#3CC4C9]/20
          "
					>
						<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
							These Terms and Conditions may be updated from time to time. The
							most current version will always be available on this page.
							Continued use of our services constitutes acceptance of any
							changes.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Terms;
