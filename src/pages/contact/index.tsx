import { useCallback } from "react";
import type { ReactNode } from "react";
import HeroSection from "../../components/sections/HeroSection";
import ContactInfo from "./ContactInfo";
import MapEmbed from "./MapEmbed";

const Contact = (): ReactNode => {
	const scrollToBooking = useCallback((): void => {
		const el = document.getElementById("booking");
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	return (
		<>
			<HeroSection
				label="Contact & Book"
				title="Let's Plan Your Adventure"
				subtitle="Ready to explore Zanzibar? Fill in the booking form or reach out directly — we are always happy to help."
				image="/images/hero/hero-contact.png"
				onPrimaryCta={scrollToBooking}
				primaryCtaLabel="Book Now"
			/>
			<ContactInfo />
			<MapEmbed />
		</>
	);
};

export default Contact;
