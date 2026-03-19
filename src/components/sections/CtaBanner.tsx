import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface CtaBannerProps {
	title?: string;
	subtitle?: string;
	primaryCta?: {
		label: string;
		path: string;
	};
	secondaryCta?: {
		label: string;
		path: string;
	};
}

const CtaBanner = ({
	title = "Ready to Explore Zanzibar?",
	subtitle = "Book your ocean adventure today and create memories that last a lifetime.",
	primaryCta = { label: "Book a Tour", path: "/contact" },
	secondaryCta = { label: "View Excursions", path: "/excursions" },
}: CtaBannerProps): ReactNode => {
	const { ref, isInView } = useScrollAnimation();

	return (
		<section className="py-20 md:py-28 bg-[#0A4D68] dark:bg-[#0B2545] relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 opacity-10">
				<svg
					viewBox="0 0 1440 320"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-0 w-full"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<title>Decorative wave background</title>
					<path
						d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
						fill="white"
					/>
					<path
						d="M0,200 C480,280 960,120 1440,200 L1440,320 L0,320 Z"
						fill="white"
						opacity="0.5"
					/>
				</svg>
			</div>

			<div
				ref={ref}
				className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
			>
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col items-center gap-6"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
						{title}
					</h2>
					<p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
						{subtitle}
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4 mt-2">
						<Link
							to={primaryCta.path}
							className="
                px-8 py-3.5 rounded-full text-sm font-semibold
                bg-[#F28C38] text-white
                hover:bg-[#e07d2a]
                transition-all duration-200
                active:scale-[0.98]
              "
						>
							{primaryCta.label}
						</Link>
						<Link
							to={secondaryCta.path}
							className="
                px-8 py-3.5 rounded-full text-sm font-semibold
                bg-white/10 text-white border border-white/30
                hover:bg-white/20
                backdrop-blur-sm
                transition-all duration-200
                active:scale-[0.98]
              "
						>
							{secondaryCta.label}
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CtaBanner;
