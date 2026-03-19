import { motion } from "motion/react";
import type { ReactNode } from "react";
import SectionLabel from "../../components/ui/SectionLabel";

interface PolicySection {
	title: string;
	content: string[];
}

const sections: PolicySection[] = [
	{
		title: "Information We Collect",
		content: [
			"When you submit a booking request through our website, we collect personal information including your full name, email address, and phone number.",
			"We also collect details about your requested service, preferred date, number of guests, and any special requests you provide.",
			"We do not collect payment information through this website. All payment arrangements are handled directly and securely.",
		],
	},
	{
		title: "How We Use Your Information",
		content: [
			"We use the information you provide solely to process your booking request and communicate with you regarding your experience.",
			"We may contact you via email or phone to confirm your booking, provide trip details, or follow up after your experience.",
			"We do not sell, trade, or share your personal information with third parties for marketing purposes.",
		],
	},
	{
		title: "Data Storage and Security",
		content: [
			"Your personal data is stored securely and is only accessible to authorized Ocean Blue staff members who need it to fulfill your booking.",
			"We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, or disclosure.",
			"We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable law.",
		],
	},
	{
		title: "Cookies",
		content: [
			"Our website uses minimal cookies to ensure proper functionality and improve your browsing experience.",
			"We do not use cookies for advertising or tracking purposes.",
			"You can control cookie settings through your browser preferences at any time.",
		],
	},
	{
		title: "Your Rights",
		content: [
			"You have the right to request access to the personal data we hold about you at any time.",
			"You may request correction or deletion of your personal data by contacting us directly.",
			"If you have concerns about how your data is being used, you have the right to raise a complaint with the relevant data protection authority.",
		],
	},
	{
		title: "Contact Us",
		content: [
			"If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at info@oceanblue.tz.",
			"We are committed to addressing any concerns you may have promptly and transparently.",
		],
	},
];

const PrivacyPolicy = (): ReactNode => {
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
							Privacy Policy
						</h1>
						<p className="text-sm text-gray-400 dark:text-gray-500">
							Last updated: January 2025
						</p>
						<p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
							At Ocean Blue, we are committed to protecting your privacy and
							handling your personal information with care and respect. This
							policy explains how we collect, use, and protect your data when
							you use our website or services.
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
							This Privacy Policy may be updated from time to time. Any changes
							will be reflected on this page with an updated date. We encourage
							you to review this policy periodically.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
