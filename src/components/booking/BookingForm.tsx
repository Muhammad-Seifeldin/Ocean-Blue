import type { ReactNode } from "react";
import useBookingForm from "../../hooks/useBookingForm";
import ContactFields from "./ContactFields";
import DatePicker from "./DatePicker";
import FormSuccess from "./FormSuccess";
import GuestCounter from "./GuestCounter";
import ServiceSelect from "./ServiceSelect";
import { AnimatePresence, motion } from "motion/react";

const stepTitles: Record<string, string> = {
	service: "Select a Service",
	date: "Choose a Date",
	guests: "Number of Guests",
	contact: "Your Details",
};

const stepVariants = {
	initial: { opacity: 0, x: 40 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -40 },
};

const BookingForm = (): ReactNode => {
	const {
		currentStep,
		currentStepIndex,
		totalSteps,
		isFirstStep,
		isLastStep,
		isSubmitting,
		isError,
		form,
		goNext,
		goBack,
		onSubmit,
	} = useBookingForm();

	if (currentStep === "success") {
		return <FormSuccess />;
	}

	return (
		<div className="bg-white dark:bg-[#0B2545] rounded-3xl shadow-sm border border-gray-100 dark:border-[#0A4D68]/40 p-6 md:p-10 w-full max-w-2xl mx-auto">
			{/* Progress Bar */}
			<div className="mb-8">
				<div className="flex items-center justify-between mb-2">
					<span className="text-xs font-semibold text-[#3CC4C9] uppercase tracking-widest">
						Step {currentStepIndex + 1} of {totalSteps}
					</span>
					<span className="text-xs text-gray-400 dark:text-gray-500">
						{stepTitles[currentStep]}
					</span>
				</div>
				<div className="w-full h-1.5 bg-gray-100 dark:bg-[#0A4D68]/30 rounded-full overflow-hidden">
					<motion.div
						className="h-full bg-[#3CC4C9] rounded-full"
						initial={{ width: 0 }}
						animate={{
							width: `${((currentStepIndex + 1) / totalSteps) * 100}%`,
						}}
						transition={{ duration: 0.4, ease: "easeInOut" }}
					/>
				</div>
			</div>

			{/* Step Content */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentStep}
					variants={stepVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					{currentStep === "service" && <ServiceSelect form={form} />}
					{currentStep === "date" && <DatePicker form={form} />}
					{currentStep === "guests" && <GuestCounter form={form} />}
					{currentStep === "contact" && <ContactFields form={form} />}
				</motion.div>
			</AnimatePresence>

			{/* Error Message */}
			{isError && (
				<p className="mt-4 text-sm text-red-500 dark:text-red-400 text-center">
					Something went wrong. Please try again.
				</p>
			)}

			{/* Navigation Buttons */}
			<div className="flex items-center justify-between mt-8 gap-4">
				{!isFirstStep ? (
					<button
						type="button"
						onClick={goBack}
						className="
              px-6 py-3 rounded-full text-sm font-semibold
              border border-gray-200 dark:border-[#0A4D68]/50
              text-gray-500 dark:text-gray-400
              hover:bg-gray-50 dark:hover:bg-[#0A4D68]/20
              transition-all duration-200
              cursor-pointer
            "
					>
						Back
					</button>
				) : (
					<div />
				)}

				{isLastStep ? (
					<button
						type="button"
						onClick={onSubmit}
						disabled={isSubmitting}
						className="
              px-8 py-3 rounded-full text-sm font-semibold
              bg-[#F28C38] text-white
              hover:bg-[#e07d2a]
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
              active:scale-[0.98]
              cursor-pointer
            "
					>
						{isSubmitting ? "Submitting..." : "Confirm Booking"}
					</button>
				) : (
					<button
						type="button"
						onClick={goNext}
						className="
              px-8 py-3 rounded-full text-sm font-semibold
              bg-[#0A4D68] text-white
              hover:bg-[#083d53]
              transition-all duration-200
              active:scale-[0.98]
              cursor-pointer
            "
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default BookingForm;
