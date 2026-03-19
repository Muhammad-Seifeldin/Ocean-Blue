import type { Excursion } from "../types/excursion.types";

export const excursions: Excursion[] = [
	{
		id: "exc-001",
		title: "Snorkeling Adventure",
		category: "snorkeling",
		description:
			"Discover the vibrant underwater world of Zanzibar's coral reefs teeming with colorful marine life.",
		longDescription:
			"Dive into the crystal-clear waters of Zanzibar and explore some of the most beautiful coral reefs in the Indian Ocean. Our experienced guides will lead you to the best snorkeling spots where you can swim alongside tropical fish, sea turtles, and vibrant coral gardens. Suitable for all skill levels, with full equipment provided.",
		duration: "4 hours",
		groupSize: "2 - 12 people",
		price: 45,
		currency: "USD",
		image: "/images/excursions/snorkeling.png",
		highlights: [
			"Explore pristine coral reefs",
			"Swim with tropical fish and sea turtles",
			"Visit two top snorkeling spots",
			"Enjoy fresh fruit on the boat",
		],
		included: [
			"Snorkeling equipment",
			"Life jackets",
			"Experienced guide",
			"Fresh fruit & water",
			"Hotel pickup & drop-off",
		],
		notIncluded: [
			"Underwater camera",
			"Personal travel insurance",
			"Gratuities",
		],
		featured: true,
	},
	{
		id: "exc-002",
		title: "Dolphin Tour",
		category: "dolphin-tour",
		description:
			"Swim with wild dolphins in their natural habitat off the coast of Kizimkazi village.",
		longDescription:
			"Join us for an unforgettable early morning dolphin encounter at Kizimkazi, one of Zanzibar's most famous dolphin watching spots. Spot pods of spinner and bottlenose dolphins as they play in the warm Indian Ocean waters. With luck, you may even get to swim alongside them — a truly magical experience.",
		duration: "5 hours",
		groupSize: "2 - 10 people",
		price: 55,
		currency: "USD",
		image: "/images/excursions/dolphin-tour.png",
		highlights: [
			"Watch wild dolphins in their natural habitat",
			"Opportunity to swim with dolphins",
			"Visit Kizimkazi fishing village",
			"Stunning ocean scenery",
		],
		included: [
			"Boat trip",
			"Snorkeling gear",
			"Life jackets",
			"Guide",
			"Fresh fruit & water",
			"Hotel pickup & drop-off",
		],
		notIncluded: [
			"Personal travel insurance",
			"Gratuities",
			"Underwater camera",
		],
		featured: true,
	},
	{
		id: "exc-003",
		title: "Sandbank Trip",
		category: "sandbank-trip",
		description:
			"Spend a magical day on a pristine private sandbank surrounded by nothing but turquoise ocean.",
		longDescription:
			"Escape to one of Zanzibar's hidden sandbanks — a thin strip of white sand rising from the turquoise Indian Ocean. Relax, snorkel, and soak up the sun in complete serenity. Our team sets up a beautiful beach picnic so you can enjoy the ultimate private island experience with the ocean all around you.",
		duration: "6 hours",
		groupSize: "2 - 15 people",
		price: 65,
		currency: "USD",
		image: "/images/excursions/sandbank-trip.png",
		highlights: [
			"Private sandbank experience",
			"Crystal-clear snorkeling waters",
			"Beach picnic setup",
			"Stunning 360° ocean views",
		],
		included: [
			"Boat transfer",
			"Snorkeling equipment",
			"Beach picnic lunch",
			"Fresh drinks",
			"Guide",
			"Hotel pickup & drop-off",
		],
		notIncluded: [
			"Personal travel insurance",
			"Gratuities",
			"Alcoholic beverages",
		],
		featured: true,
	},
	{
		id: "exc-004",
		title: "Sunset Cruise",
		category: "sunset-cruise",
		description:
			"Sail into the golden horizon aboard a traditional dhow as the sun melts into the Indian Ocean.",
		longDescription:
			"There is no better way to end a day in Zanzibar than aboard a traditional wooden dhow watching the sun set over the Indian Ocean. Sip on fresh tropical drinks, feel the warm ocean breeze, and take in one of the most spectacular sunsets on earth. A romantic and peaceful experience you will never forget.",
		duration: "2 hours",
		groupSize: "2 - 20 people",
		price: 40,
		currency: "USD",
		image: "/images/excursions/sunset-cruise.png",
		highlights: [
			"Sail on a traditional dhow",
			"Breathtaking Indian Ocean sunset",
			"Fresh tropical drinks included",
			"Romantic and peaceful atmosphere",
		],
		included: [
			"Dhow boat",
			"Fresh tropical drinks",
			"Light snacks",
			"Guide",
			"Hotel pickup & drop-off",
		],
		notIncluded: ["Full meals", "Personal travel insurance", "Gratuities"],
		featured: false,
	},
	{
		id: "exc-005",
		title: "Island Hopping",
		category: "island-hopping",
		description:
			"Explore multiple stunning islands around Zanzibar in one epic full-day adventure.",
		longDescription:
			"Visit several of Zanzibar's most beautiful surrounding islands in one incredible day. From the historic Prison Island with its giant tortoises, to pristine snorkeling reefs and secluded beaches — island hopping gives you the full Zanzibar experience. Each island has its own unique character and charm waiting to be discovered.",
		duration: "8 hours",
		groupSize: "2 - 12 people",
		price: 85,
		currency: "USD",
		image: "/images/excursions/island-hopping.png",
		highlights: [
			"Visit Prison Island and giant tortoises",
			"Multiple snorkeling stops",
			"Secluded beach exploration",
			"Full day on the ocean",
		],
		included: [
			"Boat transport between islands",
			"Snorkeling equipment",
			"Lunch on the beach",
			"Fresh drinks",
			"Guide",
			"Hotel pickup & drop-off",
		],
		notIncluded: [
			"Prison Island entrance fee",
			"Personal travel insurance",
			"Gratuities",
		],
		featured: false,
	},
	{
		id: "exc-006",
		title: "Custom Tour",
		category: "custom-tour",
		description:
			"Build your perfect Zanzibar ocean experience tailored entirely to your wishes.",
		longDescription:
			"Can't find exactly what you are looking for? Let us create a completely personalized ocean experience just for you. Whether it is a private snorkeling trip, a romantic sunset dinner on the water, a full day island adventure, or anything in between — our team will craft the perfect itinerary around your interests, group size, and budget.",
		duration: "Flexible",
		groupSize: "Any group size",
		price: 0,
		currency: "USD",
		image: "/images/excursions/custom-tour.png",
		highlights: [
			"Fully personalized itinerary",
			"Any combination of activities",
			"Private or group experience",
			"Flexible timing and duration",
		],
		included: [
			"Everything tailored to your request",
			"Dedicated guide",
			"Hotel pickup & drop-off",
		],
		notIncluded: ["Varies by custom itinerary"],
		featured: false,
	},
];

export const getFeaturedExcursions = (): Excursion[] =>
	excursions.filter((e) => e.featured);

export const getExcursionById = (id: string): Excursion | undefined =>
	excursions.find((e) => e.id === id);
