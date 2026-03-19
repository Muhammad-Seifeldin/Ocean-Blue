import type { ReactNode } from "react";
import CtaBanner from "../../components/sections/CtaBanner";
import HeroSection from "../../components/sections/HeroSection";
import TransportOptions from "./TransportOptions";

const Transportation = (): ReactNode => {
	return (
		<>
			<HeroSection
				title="Reliable Transfers Across Zanzibar"
				subtitle="From airport pickups to full day private tours — we get you where you need to go comfortably, safely, and on time."
				image="/images/hero/hero-transportation.png"
				primaryCta={{ label: "Book a Transfer", path: "/booking" }}
			/>
			<TransportOptions />
			<CtaBanner
				title="Need a Custom Transfer?"
				subtitle="We handle groups of any size and any destination on the island. Get in touch and we will sort it out."
				primaryCta={{ label: "Book Now", path: "/booking" }}
				secondaryCta={{ label: "View Excursions", path: "/excursions" }}
			/>
		</>
	);
};

export default Transportation;
