import { motion } from "motion/react";
import { CheckCircle, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const FormSuccess = (): ReactNode => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="
        bg-white dark:bg-[#0B2545]
        rounded-3xl shadow-sm
        border border-gray-100 dark:border-[#0A4D68]/40
        p-8 md:p-12
        w-full max-w-2xl mx-auto
        flex flex-col items-center text-center gap-6
      "
		>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					delay: 0.2,
					duration: 0.4,
					type: "spring",
					stiffness: 200,
				}}
			>
				<CheckCircle size={64} className="text-[#3CC4C9]" strokeWidth={1.5} />
			</motion.div>

			<div className="flex flex-col gap-2">
				<h2 className="text-2xl md:text-3xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
					Booking Received!
				</h2>
				<p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
					Thank you for choosing Ocean Blue. We have received your booking
					request and will get back to you within 24 hours to confirm your
					adventure.
				</p>
			</div>

			<div className="w-full p-4 rounded-2xl bg-[#0A4D68]/5 dark:bg-[#3CC4C9]/10 border border-[#0A4D68]/10 dark:border-[#3CC4C9]/20 flex flex-col gap-3">
				<p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
					Need to reach us?
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a
						href="mailto:info@oceanblue.tz"
						className="flex items-center gap-2 text-sm text-[#0A4D68] dark:text-[#3CC4C9] hover:underline"
					>
						<Mail size={14} />
						info@oceanblue.tz
					</a>
					<a
						href="tel:+255000000000"
						className="flex items-center gap-2 text-sm text-[#0A4D68] dark:text-[#3CC4C9] hover:underline"
					>
						<Phone size={14} />
						+255 000 000 000
					</a>
				</div>
			</div>

			<Link
				to="/"
				className="
          px-8 py-3 rounded-full text-sm font-semibold
          bg-[#F28C38] text-white
          hover:bg-[#e07d2a]
          transition-all duration-200
          active:scale-[0.98]
        "
			>
				Back to Home
			</Link>
		</motion.div>
	);
};

export default FormSuccess;
