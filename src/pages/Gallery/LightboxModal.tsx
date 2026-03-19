import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import type { GalleryImage } from "../../types/common.types";

interface LightboxModalProps {
	images: GalleryImage[];
	currentIndex: number | null;
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
}

const LightboxModal = ({
	images,
	currentIndex,
	onClose,
	onPrev,
	onNext,
}: LightboxModalProps): ReactNode => {
	const isOpen = currentIndex !== null;
	const current = currentIndex !== null ? images[currentIndex] : null;

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
		if (e.key === "ArrowLeft") onPrev();
		if (e.key === "ArrowRight") onNext();
		if (e.key === "Escape") onClose();
	};

	return (
		<AnimatePresence>
			{isOpen && current && (
				<motion.div
					key="lightbox"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onKeyDown={handleKeyDown}
					tabIndex={-1}
					className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4 outline-none"
				>
					{/* Close Button */}
					<button
						type="button"
						onClick={onClose}
						aria-label="Close lightbox"
						className="
              absolute top-4 right-4 z-10
              w-10 h-10 rounded-full
              bg-white/10 hover:bg-white/20
              flex items-center justify-center
              text-white transition-all duration-200
              cursor-pointer
            "
					>
						<X size={20} />
					</button>

					{/* Prev Button */}
					<button
						type="button"
						onClick={onPrev}
						aria-label="Previous image"
						className="
              absolute left-4 z-10
              w-10 h-10 rounded-full
              bg-white/10 hover:bg-white/20
              flex items-center justify-center
              text-white transition-all duration-200
              cursor-pointer
            "
					>
						<ChevronLeft size={22} />
					</button>

					{/* Image */}
					<motion.div
						key={current.id}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="relative max-w-4xl w-full"
					>
						<img
							src={current.src}
							alt={current.alt}
							className="w-full max-h-[80vh] object-contain rounded-2xl"
						/>
						<div className="mt-3 text-center">
							<p className="text-white/70 text-sm">{current.alt}</p>
							<p className="text-white/40 text-xs mt-1">
								{currentIndex !== null ? currentIndex + 1 : 0} / {images.length}
							</p>
						</div>
					</motion.div>

					{/* Next Button */}
					<button
						type="button"
						onClick={onNext}
						aria-label="Next image"
						className="
              absolute right-4 z-10
              w-10 h-10 rounded-full
              bg-white/10 hover:bg-white/20
              flex items-center justify-center
              text-white transition-all duration-200
              cursor-pointer
            "
					>
						<ChevronRight size={22} />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default LightboxModal;
