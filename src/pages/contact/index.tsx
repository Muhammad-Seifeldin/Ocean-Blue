import type { ReactNode } from "react";
import HeroSection from "../../components/sections/HeroSection";
import ContactInfo from "./ContactInfo";
import MapEmbed from "./MapEmbed";

const Contact = (): ReactNode => {
	return (
		<>
			<HeroSection
				label="Contact & Book"
				title="Let's Plan Your Adventure"
				subtitle="Ready to explore Zanzibar? Fill in the booking form or reach out directly — we are always happy to help."
				image="/images/hero/hero-contact.png"
				primaryCta={{ label: "Book Now", path: "#booking" }}
			/>
			<ContactInfo />
			<MapEmbed />
		</>
	);
};

export default Contact;
