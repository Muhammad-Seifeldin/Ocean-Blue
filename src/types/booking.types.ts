export type ServiceType = "excursion" | "transportation";

export type BookingStep = "service" | "date" | "guests" | "contact" | "success";

export interface BookingFormData {
	serviceType: ServiceType;
	serviceId: string;
	serviceCategory: string;
	date: string;
	guests: number;
	name: string;
	email: string;
	phone: string;
	specialRequests?: string;
}

export interface BookingPayload extends BookingFormData {
	submittedAt: string;
}

export interface BookingResponse {
	id: number;
	success: boolean;
}
