import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import BookingForm from "../../components/booking/BookingForm";

interface ContactItem {
	icon: LucideIcon;
	label: string;
	value: string;
	href?: string;
}

const contactItems: ContactItem[] = [
	{
		icon: Phone,
		label: "Phone",
		value: "+255 000 000 000",
		href: "tel:+255000000000",
	},
	{
		icon: Mail,
		label: "Email",
		value: "info@oceanblue.tz",
		href: "mailto:info@oceanblue.tz",
	},
	{
		icon: MapPin,
		label: "Location",
		value: "Zanzibar, Tanzania",
	},
	{
		icon: Clock,
		label: "Working Hours",
		value: "Every day, 7:00 AM – 8:00 PM",
	},
];

const ContactInfo = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section id="booking" className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={ref}
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
				>
					{/* Left — Info Side */}
					<motion.div
						initial={{ opacity: 0, x: -32 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="flex flex-col gap-8"
					>
						<div>
							<SectionLabel>Get In Touch</SectionLabel>
							<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF] leading-tight">
								We Would Love to Hear From You
							</h2>
							<p className="mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
								Whether you have a question about our tours, need help planning
								your trip, or are ready to book — our team is here and ready to
								help you create the perfect Zanzibar experience.
							</p>
						</div>

						{/* Contact Items */}
						<div className="flex flex-col gap-4">
							{contactItems.map((item) => (
								<div
									key={item.label}
									className="
                    flex items-start gap-4 p-4 rounded-2xl
                    bg-[#0A4D68]/5 dark:bg-[#3CC4C9]/10
                    border border-[#0A4D68]/10 dark:border-[#3CC4C9]/20
                  "
								>
									<div
										className="
                    w-10 h-10 rounded-xl shrink-0
                    bg-[#0A4D68]/10 dark:bg-[#3CC4C9]/10
                    flex items-center justify-center
                  "
									>
										<item.icon
											size={18}
											className="text-[#0A4D68] dark:text-[#3CC4C9]"
										/>
									</div>
									<div className="flex flex-col gap-0.5">
										<p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
											{item.label}
										</p>
										{item.href ? (
											<a
												href={item.href}
												className="
                          text-sm font-medium
                          text-[#0A4D68] dark:text-[#DFF6FF]
                          hover:text-[#3CC4C9] dark:hover:text-[#3CC4C9]
                          transition-colors duration-200
                        "
											>
												{item.value}
											</a>
										) : (
											<p className="text-sm font-medium text-[#0A4D68] dark:text-[#DFF6FF]">
												{item.value}
											</p>
										)}
									</div>
								</div>
							))}
						</div>

						{/* Response Time Note */}
						<div
							className="
              p-4 rounded-2xl
              bg-[#3CC4C9]/10 dark:bg-[#3CC4C9]/10
              border border-[#3CC4C9]/20
            "
						>
							<p className="text-sm text-[#0A4D68] dark:text-[#DFF6FF] font-medium">
								We typically respond within a few hours.
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
								For urgent inquiries please call us directly or send a WhatsApp
								message.
							</p>
						</div>
					</motion.div>

					{/* Right — Booking Form */}
					<motion.div
						initial={{ opacity: 0, x: 32 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					>
						<BookingForm />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
