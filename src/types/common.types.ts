export interface NavLink {
	label: string;
	path: string;
}

export interface SocialLink {
	platform: "instagram" | "facebook" | "youtube" | "x" | "tiktok";
	url: string;
}

export interface GalleryImage {
	id: string;
	src: string;
	alt: string;
	category: "excursion" | "transportation" | "beach" | "boat";
}

export interface Testimonial {
	id: string;
	name: string;
	country: string;
	rating: number;
	comment: string;
	tour: string;
}

export interface SEOMeta {
	title: string;
	description: string;
	image?: string;
}
