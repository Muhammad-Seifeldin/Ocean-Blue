import type { ReactNode } from "react";
import CtaBanner from "../../components/sections/CtaBanner";
import HeroSection from "../../components/sections/HeroSection";
import ExcursionGrid from "./ExcursionGrid";

const Excursions = (): ReactNode => {
	return (
		<>
			<HeroSection
				title="Unforgettable Ocean Adventures"
				subtitle="From snorkeling in pristine coral reefs to sailing on traditional dhows at sunset — every excursion is crafted for memories that last a lifetime."
				image="/images/hero/hero-excursions.png"
				primaryCta={{ label: "Book Now", path: "/booking" }}
			/>
			<ExcursionGrid />
			<CtaBanner
				title="Can't Find What You're Looking For?"
				subtitle="We create fully custom tours tailored to your group, interests, and budget. Just ask."
				primaryCta={{ label: "Plan a Custom Tour", path: "/booking" }}
				secondaryCta={{ label: "View Transportation", path: "/transportation" }}
			/>
		</>
	);
};

export default Excursions;
