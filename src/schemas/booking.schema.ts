import { z } from "zod";

export const serviceSelectSchema = z.object({
	serviceType: z.enum(["excursion", "transportation"], {
		error: "Please select a service type",
	}),
	serviceId: z.string().min(1, "Please select a specific service"),
	serviceCategory: z.string().min(1, "Please select a category"),
});

export const dateSchema = z.object({
	date: z
		.string()
		.min(1, "Please select a date")
		.refine((val) => {
			const selected = new Date(val);
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			return selected >= today;
		}, "Date cannot be in the past"),
});

export const guestSchema = z.object({
	guests: z
		.number({
			error: "Please enter a valid number of guests",
		})
		.min(1, "At least 1 guest is required")
		.max(20, "Maximum 20 guests per booking"),
});

export const contactSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email address"),
	phone: z
		.string()
		.min(7, "Please enter a valid phone number")
		.max(20, "Phone number is too long")
		.regex(/^\+?[0-9\s\-().]+$/, "Please enter a valid phone number"),
	specialRequests: z.string().max(500, "Maximum 500 characters").optional(),
});

export const bookingFormSchema = serviceSelectSchema
	.merge(dateSchema)
	.merge(guestSchema)
	.merge(contactSchema);

export type ServiceSelectData = z.infer<typeof serviceSelectSchema>;
export type DateData = z.infer<typeof dateSchema>;
export type GuestData = z.infer<typeof guestSchema>;
export type ContactData = z.infer<typeof contactSchema>;
export type BookingFormSchema = z.infer<typeof bookingFormSchema>;
