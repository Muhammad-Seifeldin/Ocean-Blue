import type { TransportOption } from "../types/transportation.types";

export const transportOptions: TransportOption[] = [
	{
		id: "trans-001",
		title: "Airport Transfer",
		category: "airport-transfer",
		description:
			"Reliable and comfortable transfers between Zanzibar Airport and your hotel.",
		price: 25,
		currency: "USD",
		image: "/images/transportation/airport-transfer.png",
		highlights: [
			"Meet & greet at arrivals",
			"Flight tracking included",
			"Air-conditioned vehicle",
			"24/7 availability",
		],
		included: [
			"Professional driver",
			"Air-conditioned vehicle",
			"Meet & greet service",
			"Flight monitoring",
			"Luggage assistance",
		],
	},
	{
		id: "trans-002",
		title: "Hotel Transfer",
		category: "hotel-transfer",
		description:
			"Smooth and punctual transfers between hotels and resorts across the island.",
		price: 20,
		currency: "USD",
		image: "/images/transportation/hotel-transfer.png",
		highlights: [
			"Island-wide coverage",
			"Punctual and reliable",
			"Comfortable vehicles",
			"Flexible scheduling",
		],
		included: [
			"Professional driver",
			"Air-conditioned vehicle",
			"Luggage assistance",
			"Flexible pickup time",
		],
	},
	{
		id: "trans-003",
		title: "Private Island Tour",
		category: "private-island-tour",
		description:
			"Explore Zanzibar at your own pace with a dedicated private vehicle and driver for the day.",
		price: 80,
		currency: "USD",
		image: "/images/transportation/private-island-tour.png",
		highlights: [
			"Full day private vehicle",
			"Visit any spot on the island",
			"Knowledgeable local driver",
			"Fully flexible itinerary",
		],
		included: [
			"Professional driver",
			"Air-conditioned vehicle",
			"Fuel",
			"Up to 8 hours",
			"Flexible itinerary",
		],
	},
	{
		id: "trans-004",
		title: "Day Transportation",
		category: "day-transportation",
		description:
			"Convenient point-to-point transportation anywhere on the island for your daily needs.",
		price: 30,
		currency: "USD",
		image: "/images/transportation/day-transportation.png",
		highlights: [
			"Any destination on the island",
			"Reliable and on time",
			"Comfortable ride",
			"Easy booking",
		],
		included: [
			"Professional driver",
			"Air-conditioned vehicle",
			"One-way or return trip",
			"Luggage assistance",
		],
	},
];

export const getTransportById = (id: string): TransportOption | undefined =>
	transportOptions.find((t) => t.id === id);
