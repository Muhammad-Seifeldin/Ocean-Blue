import type { ReactNode } from "react";
import HeroSection from "../../components/sections/HeroSection";
import ContactInfo from "./ContactInfo";
import MapEmbed from "./MapEmbed";

const Contact = (): ReactNode => {
	return (
		<>
			<HeroSection
				title="Let's Plan Your Adventure"
				subtitle="Ready to explore Zanzibar? Reach out directly or book online — we are always happy to help."
				image="/images/hero/hero-contact.png"
			/>
			<ContactInfo />
			<MapEmbed />
		</>
	);
};

export default Contact;
