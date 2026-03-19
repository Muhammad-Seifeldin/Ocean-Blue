import type { ReactNode } from "react";
import CtaBanner from "../../components/sections/CtaBanner";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import FeaturedTours from "./FeaturedTours";
import HeroBanner from "./HeroBanner";
import WhyChooseUs from "./WhyChooseUs";

const Home = (): ReactNode => {
	return (
		<>
			<HeroBanner />
			<FeaturedTours />
			<WhyChooseUs />
			<TestimonialsSection />
			<CtaBanner />
		</>
	);
};

export default Home;
