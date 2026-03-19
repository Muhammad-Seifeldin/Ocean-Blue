import { motion } from "motion/react";
import type { ReactNode } from "react";
import BookingForm from "../../components/booking/BookingForm";
import SectionLabel from "../../components/ui/SectionLabel";

const Booking = (): ReactNode => {
	return (
		<section className="min-h-screen py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="text-center mb-12"
				>
					<SectionLabel>Book Online</SectionLabel>
					<h1 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						Plan Your Adventure
					</h1>
					<p className="mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
						Fill in the form below and our team will confirm your booking within
						24 hours.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
				>
					<BookingForm />
				</motion.div>
			</div>
		</section>
	);
};

export default Booking;
