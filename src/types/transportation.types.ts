export type TransportCategory =
	| "airport-transfer"
	| "hotel-transfer"
	| "private-island-tour"
	| "day-transportation";

export interface TransportOption {
	id: string;
	title: string;
	category: TransportCategory;
	description: string;
	price: number;
	currency: string;
	image: string;
	highlights: string[];
	included: string[];
}
