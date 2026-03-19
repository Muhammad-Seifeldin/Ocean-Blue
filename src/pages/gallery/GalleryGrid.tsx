import { motion } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";
import type { GalleryImage } from "../../types/common.types";
import SectionLabel from "../../components/ui/SectionLabel";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import LightboxModal from "./LightboxModal";

type GalleryCategory =
	| "all"
	| "excursion"
	| "transportation"
	| "beach"
	| "boat";

interface CategoryTab {
	label: string;
	value: GalleryCategory;
}

const categoryTabs: CategoryTab[] = [
	{ label: "All", value: "all" },
	{ label: "Excursions", value: "excursion" },
	{ label: "Transportation", value: "transportation" },
	{ label: "Beaches", value: "beach" },
	{ label: "Boats", value: "boat" },
];

const galleryImages: GalleryImage[] = [
	{
		id: "g-01",
		src: "/images/gallery/gallery-01.png",
		alt: "Snorkeling in crystal clear waters",
		category: "excursion",
	},
	{
		id: "g-02",
		src: "/images/gallery/gallery-02.png",
		alt: "Traditional dhow on the ocean",
		category: "boat",
	},
	{
		id: "g-03",
		src: "/images/gallery/gallery-03.png",
		alt: "White sand beach at sunrise",
		category: "beach",
	},
	{
		id: "g-04",
		src: "/images/gallery/gallery-04.png",
		alt: "Dolphin spotted near the boat",
		category: "excursion",
	},
	{
		id: "g-05",
		src: "/images/gallery/gallery-05.png",
		alt: "Private vehicle transfer service",
		category: "transportation",
	},
	{
		id: "g-06",
		src: "/images/gallery/gallery-06.png",
		alt: "Sandbank surrounded by turquoise water",
		category: "beach",
	},
	{
		id: "g-07",
		src: "/images/gallery/gallery-07.png",
		alt: "Sunset cruise on the Indian Ocean",
		category: "boat",
	},
	{
		id: "g-08",
		src: "/images/gallery/gallery-08.png",
		alt: "Island hopping adventure",
		category: "excursion",
	},
	{
		id: "g-09",
		src: "/images/gallery/gallery-09.png",
		alt: "Airport transfer vehicle",
		category: "transportation",
	},
	{
		id: "g-10",
		src: "/images/gallery/gallery-10.png",
		alt: "Coral reef underwater view",
		category: "excursion",
	},
	{
		id: "g-11",
		src: "/images/gallery/gallery-11.png",
		alt: "Zanzibar beach at golden hour",
		category: "beach",
	},
	{
		id: "g-12",
		src: "/images/gallery/gallery-12.png",
		alt: "Wooden dhow sailing at sunset",
		category: "boat",
	},
];

const GalleryGrid = (): ReactNode => {
	const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
	const { ref, isInView } = useScrollAnimation();

	const filtered =
		activeCategory === "all"
			? galleryImages
			: galleryImages.filter((img) => img.category === activeCategory);

	const handlePrev = (): void => {
		if (lightboxIndex === null) return;
		setLightboxIndex(
			lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1,
		);
	};

	const handleNext = (): void => {
		if (lightboxIndex === null) return;
		setLightboxIndex(
			lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1,
		);
	};

	return (
		<section className="py-20 md:py-28 bg-white dark:bg-[#030f1c]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<SectionLabel>Photo Gallery</SectionLabel>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						Moments from the Ocean
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
						Every photo tells the story of an unforgettable Zanzibar experience.
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex items-center gap-2 flex-wrap justify-center mb-10">
					{categoryTabs.map((tab) => (
						<button
							key={tab.value}
							type="button"
							onClick={() => {
								setActiveCategory(tab.value);
								setLightboxIndex(null);
							}}
							className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${
									activeCategory === tab.value
										? "bg-[#0A4D68] text-white dark:bg-[#3CC4C9] dark:text-[#0B2545]"
										: "bg-gray-100 text-gray-500 dark:bg-[#0A4D68]/20 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#0A4D68]/40"
								}
              `}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Grid */}
				<div
					ref={ref}
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
				>
					{filtered.map((image, index) => (
						<motion.button
							key={image.id}
							type="button"
							onClick={() => setLightboxIndex(index)}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{
								duration: 0.4,
								delay: index * 0.05,
								ease: "easeOut",
							}}
							className={`
                group relative overflow-hidden rounded-2xl
                cursor-pointer
                ${index % 7 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}
              `}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div
								className="
                absolute inset-0
                bg-[#0A4D68]/0 group-hover:bg-[#0A4D68]/30
                transition-all duration-300
                flex items-center justify-center
              "
							>
								<span
									className="
                  text-white text-xs font-medium
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-black/30 px-3 py-1.5 rounded-full
                  backdrop-blur-sm
                "
								>
									View
								</span>
							</div>
						</motion.button>
					))}
				</div>
			</div>

			{/* Lightbox */}
			<LightboxModal
				images={filtered}
				currentIndex={lightboxIndex}
				onClose={() => setLightboxIndex(null)}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
		</section>
	);
};

export default GalleryGrid;
