import { Minus, Plus, Users } from "lucide-react";
import type { ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { BookingFormSchema } from "../../schemas/booking.schema";

interface GuestCounterProps {
	form: UseFormReturn<BookingFormSchema>;
}

const GuestCounter = ({ form }: GuestCounterProps): ReactNode => {
	const {
		watch,
		setValue,
		formState: { errors },
	} = form;
	const guests = watch("guests") ?? 1;

	const increment = (): void => {
		if (guests < 20) {
			setValue("guests", guests + 1, { shouldValidate: true });
		}
	};

	const decrement = (): void => {
		if (guests > 1) {
			setValue("guests", guests - 1, { shouldValidate: true });
		}
	};

	return (
		<div className="flex flex-col gap-6">
			<div>
				<p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">
					How many guests will be joining?
				</p>

				<div className="flex items-center justify-center gap-6">
					<button
						type="button"
						onClick={decrement}
						disabled={guests <= 1}
						aria-label="Decrease guests"
						className="
              w-12 h-12 rounded-full border-2
              border-gray-200 dark:border-[#0A4D68]/40
              flex items-center justify-center
              text-gray-500 dark:text-gray-400
              hover:border-[#0A4D68] hover:text-[#0A4D68]
              dark:hover:border-[#3CC4C9] dark:hover:text-[#3CC4C9]
              disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200
              cursor-pointer
            "
					>
						<Minus size={18} />
					</button>

					<div className="flex flex-col items-center gap-1">
						<div className="flex items-center gap-2">
							<Users size={20} className="text-[#3CC4C9]" />
							<span className="text-4xl font-bold text-[#0A4D68] dark:text-[#DFF6FF] w-12 text-center">
								{guests}
							</span>
						</div>
						<span className="text-xs text-gray-400 dark:text-gray-500">
							{guests === 1 ? "Guest" : "Guests"}
						</span>
					</div>

					<button
						type="button"
						onClick={increment}
						disabled={guests >= 20}
						aria-label="Increase guests"
						className="
              w-12 h-12 rounded-full border-2
              border-gray-200 dark:border-[#0A4D68]/40
              flex items-center justify-center
              text-gray-500 dark:text-gray-400
              hover:border-[#0A4D68] hover:text-[#0A4D68]
              dark:hover:border-[#3CC4C9] dark:hover:text-[#3CC4C9]
              disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200
              cursor-pointer
            "
					>
						<Plus size={18} />
					</button>
				</div>

				{errors.guests && (
					<p className="mt-4 text-xs text-red-500 dark:text-red-400 text-center">
						{errors.guests.message}
					</p>
				)}
			</div>

			<p className="text-xs text-center text-gray-400 dark:text-gray-500">
				Maximum 20 guests per booking. For larger groups please contact us
				directly.
			</p>
		</div>
	);
};

export default GuestCounter;
