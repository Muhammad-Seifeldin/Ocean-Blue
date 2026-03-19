import type { BookingPayload, BookingResponse } from "../types/booking.types";
import axiosInstance from "./axiosInstance";

export const submitBooking = async (
	data: BookingPayload,
): Promise<BookingResponse> => {
	const response = await axiosInstance.post<BookingResponse>("/posts", data);
	return {
		id: response.data.id,
		success: true,
	};
};
