export const formatPrice = (price: number, currency: string): string => {
	if (price === 0) return "Custom Quote";

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(price);
};

export const formatDate = (dateString: string): string => {
	if (!dateString) return "";

	return new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(new Date(dateString));
};

export const formatDateShort = (dateString: string): string => {
	if (!dateString) return "";

	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(new Date(dateString));
};

export const formatGuests = (count: number): string => {
	return count === 1 ? "1 Guest" : `${count} Guests`;
};

export const formatDuration = (duration: string): string => {
	return duration.charAt(0).toUpperCase() + duration.slice(1);
};

export const formatPhoneNumber = (phone: string): string => {
	return phone.trim().replace(/\s+/g, " ");
};

export const truncateText = (text: string, maxLength: number): string => {
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength).trimEnd()}...`;
};

export const getMinBookingDate = (): string => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today.toISOString().split("T")[0];
};
