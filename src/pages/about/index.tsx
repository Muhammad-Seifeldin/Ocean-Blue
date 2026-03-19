import type { ReactNode } from "react";
import CtaBanner from "../../components/sections/CtaBanner";
import HeroSection from "../../components/sections/HeroSection";
import OurStory from "./OurStory";
import ValuesGrid from "./ValuesGrid";

const About = (): ReactNode => {
	return (
		<>
			<HeroSection
				label="About Ocean Blue"
				title="Born from a Love of the Ocean"
				subtitle="We are a team of passionate Zanzibari locals dedicated to sharing the magic of our island with the world."
				image="/images/hero/hero-about.png"
				primaryCta={{ label: "Book an Experience", path: "/contact" }}
				secondaryCta={{ label: "Our Excursions", path: "/excursions" }}
			/>
			<OurStory />
			<ValuesGrid />
			<CtaBanner />
		</>
	);
};

export default About;
