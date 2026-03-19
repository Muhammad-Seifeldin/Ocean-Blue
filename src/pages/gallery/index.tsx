import type { ReactNode } from "react";
import HeroSection from "../../components/sections/HeroSection";
import CtaBanner from "../../components/sections/CtaBanner";
import GalleryGrid from "./GalleryGrid";

const Gallery = (): ReactNode => {
	return (
		<>
			<HeroSection
				label="Our Gallery"
				title="Zanzibar Through Our Lens"
				subtitle="A glimpse into the breathtaking beauty of Zanzibar's ocean, beaches, and island adventures."
				image="/images/hero/hero-gallery.png"
				primaryCta={{ label: "Book an Experience", path: "/contact" }}
			/>
			<GalleryGrid />
			<CtaBanner />
		</>
	);
};

export default Gallery;
