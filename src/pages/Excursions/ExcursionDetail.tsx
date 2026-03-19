import { AnimatePresence, motion } from "motion/react";
import { X, Clock, Users, Check, XCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Excursion } from "../../types/excursion.types";
import Badge from "../../components/ui/Badge";
import { formatPrice } from "../../utils/formatters";

interface ExcursionDetailProps {
	excursion: Excursion | null;
	onClose: () => void;
}

const ExcursionDetail = ({
	excursion,
	onClose,
}: ExcursionDetailProps): ReactNode => {
	return (
		<AnimatePresence>
			{excursion && (
				<>
					{/* Backdrop */}
					<motion.div
						key="backdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={onClose}
						className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
					/>

					{/* Modal */}
					<motion.div
						key="modal"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="
              fixed inset-x-4 bottom-0 md:inset-auto md:top-1/2 md:left-1/2
              md:-translate-x-1/2 md:-translate-y-1/2
              z-50 w-auto md:w-full md:max-w-2xl
              bg-white dark:bg-[#0B2545]
              rounded-t-3xl md:rounded-3xl
              overflow-hidden
              max-h-[90vh] overflow-y-auto
            "
					>
						{/* Image */}
						<div className="relative h-56 shrink-0">
							<img
								src={excursion.image}
								alt={excursion.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
							<button
								type="button"
								onClick={onClose}
								aria-label="Close details"
								className="
                  absolute top-4 right-4
                  w-8 h-8 rounded-full
                  bg-black/30 backdrop-blur-sm
                  flex items-center justify-center
                  text-white hover:bg-black/50
                  transition-all duration-200
                  cursor-pointer
                "
							>
								<X size={16} />
							</button>
							<div className="absolute bottom-4 left-4 flex items-center gap-2">
								<Badge variant="sunset">
									{formatPrice(excursion.price, excursion.currency)}
								</Badge>
								<Badge variant="turquoise">{excursion.duration}</Badge>
							</div>
						</div>

						{/* Content */}
						<div className="p-6 flex flex-col gap-6">
							<div className="flex flex-col gap-2">
								<h2 className="text-xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
									{excursion.title}
								</h2>
								<div className="flex items-center gap-4">
									<span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
										<Clock size={13} />
										{excursion.duration}
									</span>
									<span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
										<Users size={13} />
										{excursion.groupSize}
									</span>
								</div>
								<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
									{excursion.longDescription}
								</p>
							</div>

							{/* Highlights */}
							<div>
								<h4 className="text-sm font-bold text-[#0A4D68] dark:text-[#DFF6FF] mb-3">
									Highlights
								</h4>
								<ul className="flex flex-col gap-2">
									{excursion.highlights.map((highlight) => (
										<li
											key={highlight}
											className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
										>
											<Check
												size={15}
												className="text-[#3CC4C9] mt-0.5 shrink-0"
											/>
											{highlight}
										</li>
									))}
								</ul>
							</div>

							{/* Included / Not Included */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<h4 className="text-sm font-bold text-[#0A4D68] dark:text-[#DFF6FF] mb-3">
										Included
									</h4>
									<ul className="flex flex-col gap-2">
										{excursion.included.map((item) => (
											<li
												key={item}
												className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
											>
												<Check
													size={15}
													className="text-green-500 mt-0.5 shrink-0"
												/>
												{item}
											</li>
										))}
									</ul>
								</div>
								<div>
									<h4 className="text-sm font-bold text-[#0A4D68] dark:text-[#DFF6FF] mb-3">
										Not Included
									</h4>
									<ul className="flex flex-col gap-2">
										{excursion.notIncluded.map((item) => (
											<li
												key={item}
												className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
											>
												<XCircle
													size={15}
													className="text-red-400 mt-0.5 shrink-0"
												/>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* CTA */}
							<Link
								to="/booking"
								className="
                  w-full py-3.5 rounded-full text-sm font-semibold text-center
                  bg-[#F28C38] text-white
                  hover:bg-[#e07d2a]
                  transition-all duration-200
                  active:scale-[0.98]
                "
							>
								Book This Excursion
							</Link>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default ExcursionDetail;
