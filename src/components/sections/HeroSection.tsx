import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../ui/SectionLabel";

interface HeroSectionProps {
	label?: string;
	title: string;
	subtitle: string;
	image: string;
	primaryCta?: {
		label: string;
		path: string;
	};
	secondaryCta?: {
		label: string;
		path: string;
	};
}

const HeroSection = ({
	label,
	title,
	subtitle,
	image,
	primaryCta,
	secondaryCta,
}: HeroSectionProps): ReactNode => {
	return (
		<section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img src={image} alt={title} className="w-full h-full object-cover" />
				<div className="absolute inset-0 bg-linear-to-r from-[#0B2545]/80 via-[#0A4D68]/50 to-transparent" />
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="max-w-2xl flex flex-col gap-6">
					{label && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<SectionLabel className="text-[#3CC4C9]">{label}</SectionLabel>
						</motion.div>
					)}

					<motion.h1
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
					>
						{title}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="text-base md:text-lg text-white/80 leading-relaxed"
					>
						{subtitle}
					</motion.p>

					{(primaryCta ?? secondaryCta) && (
						<motion.div
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex flex-wrap gap-4 mt-2"
						>
							{primaryCta && (
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
							)}
							{secondaryCta && (
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
							)}
						</motion.div>
					)}
				</div>
			</div>

			{/* Bottom Wave */}
			<div className="absolute bottom-0 left-0 right-0 z-10">
				<svg
					viewBox="0 0 1440 80"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					className="w-full h-12 md:h-20 fill-white dark:fill-[#030f1c]"
					aria-hidden="true"
				>
					<title>Decorative wave</title>
					<path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
				</svg>
			</div>
		</section>
	);
};

export default HeroSection;
