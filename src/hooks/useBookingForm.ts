import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitBooking } from "../api/booking.api";
import { bookingFormSchema } from "../schemas/booking.schema";
import type { BookingFormSchema } from "../schemas/booking.schema";
import type { BookingStep } from "../types/booking.types";

const STEPS: BookingStep[] = [
	"service",
	"date",
	"guests",
	"contact",
	"success",
];

const stepFieldsMap: Record<BookingStep, Array<keyof BookingFormSchema>> = {
	service: ["serviceType", "serviceId", "serviceCategory"],
	date: ["date"],
	guests: ["guests"],
	contact: ["name", "email", "phone", "specialRequests"],
	success: [],
};

interface UseBookingFormResult {
	currentStep: BookingStep;
	currentStepIndex: number;
	totalSteps: number;
	isFirstStep: boolean;
	isLastStep: boolean;
	isSubmitting: boolean;
	isSuccess: boolean;
	isError: boolean;
	form: ReturnType<typeof useForm<BookingFormSchema>>;
	goNext: () => Promise<void>;
	goBack: () => void;
	onSubmit: () => Promise<void>;
}

const useBookingForm = (): UseBookingFormResult => {
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
	const currentStep = STEPS[currentStepIndex];

	const form = useForm<BookingFormSchema>({
		resolver: zodResolver(bookingFormSchema),
		mode: "onBlur",
		reValidateMode: "onChange",
		defaultValues: {
			serviceType: undefined,
			serviceId: "",
			serviceCategory: "",
			date: "",
			guests: 1,
			name: "",
			email: "",
			phone: "",
			specialRequests: "",
		},
	});

	const { mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: submitBooking,
	});

	const goNext = async (): Promise<void> => {
		const currentFields = stepFieldsMap[currentStep];
		const isValid = await form.trigger(currentFields, { shouldFocus: true });
		if (isValid) {
			setCurrentStepIndex((prev) => Math.min(prev + 1, STEPS.length - 1));
		}
	};

	const goBack = (): void => {
		setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
	};

	const onSubmit = async (): Promise<void> => {
		const isValid = await form.trigger();
		if (!isValid) return;

		const values = form.getValues();
		await mutateAsync({
			...values,
			guests: Number(values.guests),
			submittedAt: new Date().toISOString(),
		});

		setCurrentStepIndex(STEPS.indexOf("success"));
	};

	return {
		currentStep,
		currentStepIndex,
		totalSteps: STEPS.length - 1,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === STEPS.length - 2,
		isSubmitting: isPending,
		isSuccess,
		isError,
		form,
		goNext,
		goBack,
		onSubmit,
	};
};

export default useBookingForm;
