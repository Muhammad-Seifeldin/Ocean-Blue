import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import type { ReactNode } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const MapEmbed = (): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-[#F4EBD0]/20 dark:bg-[#0A4D68]/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<div className="inline-flex items-center gap-2 mb-3">
						<MapPin size={16} className="text-[#3CC4C9]" />
						<span className="text-xs font-semibold text-[#3CC4C9] uppercase tracking-widest">
							Find Us
						</span>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						We Are Based in Zanzibar
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
						Located in the heart of Zanzibar — easily accessible from all major
						hotels and resorts on the island.
					</p>
				</div>

				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 32 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="
            rounded-3xl overflow-hidden
            border border-gray-100 dark:border-[#0A4D68]/40
            shadow-sm
            h-80 md:h-[480px]
          "
				>
					<iframe
						title="Ocean Blue Location — Zanzibar"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.66720836483!2d39.1389!3d-6.1659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd0ba9b4f3bed%3A0xb0b13e2d0b0b0b0b!2sZanzibar%20City%2C%20Tanzania!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default MapEmbed;
