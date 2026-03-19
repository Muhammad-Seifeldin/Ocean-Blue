export type ExcursionCategory =
	| "snorkeling"
	| "dolphin-tour"
	| "sandbank-trip"
	| "sunset-cruise"
	| "island-hopping"
	| "custom-tour";

export interface Excursion {
	id: string;
	title: string;
	category: ExcursionCategory;
	description: string;
	longDescription: string;
	duration: string;
	groupSize: string;
	price: number;
	currency: string;
	image: string;
	highlights: string[];
	included: string[];
	notIncluded: string[];
	featured: boolean;
}
