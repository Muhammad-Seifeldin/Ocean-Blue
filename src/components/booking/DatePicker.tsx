import { CalendarDays } from "lucide-react";
import type { ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { BookingFormSchema } from "../../schemas/booking.schema";
import { formatDate, getMinBookingDate } from "../../utils/formatters";

interface DatePickerProps {
	form: UseFormReturn<BookingFormSchema>;
}

const DatePicker = ({ form }: DatePickerProps): ReactNode => {
	const {
		register,
		watch,
		formState: { errors },
	} = form;
	const selectedDate = watch("date");

	return (
		<div className="flex flex-col gap-6">
			<div>
				<label
					htmlFor="date"
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Select your preferred date
				</label>
				<div className="relative">
					<input
						id="date"
						type="date"
						min={getMinBookingDate()}
						{...register("date")}
						className="
              w-full px-4 py-3 pl-11 rounded-xl border
              border-gray-200 dark:border-[#0A4D68]/40
              bg-white dark:bg-[#0A4D68]/10
              text-gray-700 dark:text-gray-300
              focus:outline-none focus:ring-2 focus:ring-[#3CC4C9]/50 focus:border-[#3CC4C9]
              transition-all duration-200
              text-sm
            "
					/>
					<CalendarDays
						size={16}
						className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
					/>
				</div>
				{errors.date && (
					<p className="mt-2 text-xs text-red-500 dark:text-red-400">
						{errors.date.message}
					</p>
				)}
			</div>

			{selectedDate && !errors.date && (
				<div className="p-4 rounded-xl bg-[#0A4D68]/5 dark:bg-[#3CC4C9]/10 border border-[#0A4D68]/10 dark:border-[#3CC4C9]/20">
					<p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
						Selected date
					</p>
					<p className="text-sm font-semibold text-[#0A4D68] dark:text-[#3CC4C9]">
						{formatDate(selectedDate)}
					</p>
				</div>
			)}
		</div>
	);
};

export default DatePicker;
