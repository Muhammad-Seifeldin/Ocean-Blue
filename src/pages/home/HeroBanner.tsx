import type { ReactNode } from "react";
import HeroSection from "../../components/sections/HeroSection";

const HeroBanner = (): ReactNode => {
	return (
		<HeroSection
			label="Zanzibar, Tanzania"
			title="Your Ocean Adventure Starts Here"
			subtitle="Discover pristine coral reefs, swim with dolphins, sail on traditional dhows, and experience the magic of Zanzibar with Ocean Blue."
			image="/images/hero/hero-main.png"
			primaryCta={{ label: "Book a Tour", path: "/contact" }}
			secondaryCta={{ label: "Explore Excursions", path: "/excursions" }}
		/>
	);
};

export default HeroBanner;
