import { Anchor, Car } from "lucide-react";
import type { ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import { excursions } from "../../data/excursions";
import { transportOptions } from "../../data/transportation";
import type { BookingFormSchema } from "../../schemas/booking.schema";

interface ServiceSelectProps {
	form: UseFormReturn<BookingFormSchema>;
}

const ServiceSelect = ({ form }: ServiceSelectProps): ReactNode => {
	const {
		register,
		watch,
		setValue,
		formState: { errors },
	} = form;
	const serviceType = watch("serviceType");

	const handleServiceTypeChange = (
		type: "excursion" | "transportation",
	): void => {
		setValue("serviceType", type, { shouldValidate: false });
		setValue("serviceId", "", { shouldValidate: false });
		setValue("serviceCategory", "", { shouldValidate: false });
	};

	const handleServiceSelect = (id: string, category: string): void => {
		setValue("serviceId", id, { shouldValidate: false });
		setValue("serviceCategory", category, { shouldValidate: false });
	};

	const selectedServiceId = watch("serviceId");

	return (
		<div className="flex flex-col gap-6">
			{/* Service Type Toggle */}
			<div>
				<p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
					What are you looking for?
				</p>
				<div className="grid grid-cols-2 gap-3">
					<button
						type="button"
						onClick={() => handleServiceTypeChange("excursion")}
						className={`
              flex flex-col items-center gap-2 p-4 rounded-2xl border-2
              transition-all duration-200 cursor-pointer
              ${
								serviceType === "excursion"
									? "border-[#0A4D68] bg-[#0A4D68]/5 dark:border-[#3CC4C9] dark:bg-[#3CC4C9]/10"
									: "border-gray-200 dark:border-[#0A4D68]/40 hover:border-[#0A4D68]/40 dark:hover:border-[#3CC4C9]/40"
							}
            `}
					>
						<Anchor
							size={24}
							className={
								serviceType === "excursion"
									? "text-[#0A4D68] dark:text-[#3CC4C9]"
									: "text-gray-400"
							}
						/>
						<span
							className={`text-sm font-semibold ${
								serviceType === "excursion"
									? "text-[#0A4D68] dark:text-[#3CC4C9]"
									: "text-gray-500 dark:text-gray-400"
							}`}
						>
							Sea Excursion
						</span>
					</button>

					<button
						type="button"
						onClick={() => handleServiceTypeChange("transportation")}
						className={`
              flex flex-col items-center gap-2 p-4 rounded-2xl border-2
              transition-all duration-200 cursor-pointer
              ${
								serviceType === "transportation"
									? "border-[#0A4D68] bg-[#0A4D68]/5 dark:border-[#3CC4C9] dark:bg-[#3CC4C9]/10"
									: "border-gray-200 dark:border-[#0A4D68]/40 hover:border-[#0A4D68]/40 dark:hover:border-[#3CC4C9]/40"
							}
            `}
					>
						<Car
							size={24}
							className={
								serviceType === "transportation"
									? "text-[#0A4D68] dark:text-[#3CC4C9]"
									: "text-gray-400"
							}
						/>
						<span
							className={`text-sm font-semibold ${
								serviceType === "transportation"
									? "text-[#0A4D68] dark:text-[#3CC4C9]"
									: "text-gray-500 dark:text-gray-400"
							}`}
						>
							Transportation
						</span>
					</button>
				</div>
				{errors.serviceType && (
					<p className="mt-2 text-xs text-red-500 dark:text-red-400">
						{errors.serviceType.message}
					</p>
				)}
			</div>

			{/* Service List */}
			{serviceType && (
				<div>
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
						{serviceType === "excursion"
							? "Choose an excursion"
							: "Choose a transfer"}
					</p>
					<div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
						{(serviceType === "excursion" ? excursions : transportOptions).map(
							(item) => (
								<button
									key={item.id}
									type="button"
									onClick={() => handleServiceSelect(item.id, item.category)}
									className={`
                  flex items-center justify-between p-3 rounded-xl border
                  text-left transition-all duration-200 cursor-pointer
                  ${
										selectedServiceId === item.id
											? "border-[#0A4D68] bg-[#0A4D68]/5 dark:border-[#3CC4C9] dark:bg-[#3CC4C9]/10"
											: "border-gray-200 dark:border-[#0A4D68]/40 hover:border-[#0A4D68]/30 dark:hover:border-[#3CC4C9]/30"
									}
                `}
								>
									<span
										className={`text-sm font-medium ${
											selectedServiceId === item.id
												? "text-[#0A4D68] dark:text-[#3CC4C9]"
												: "text-gray-700 dark:text-gray-300"
										}`}
									>
										{item.title}
									</span>
									{selectedServiceId === item.id && (
										<span className="w-4 h-4 rounded-full bg-[#0A4D68] dark:bg-[#3CC4C9] flex items-center justify-center shrink-0">
											<svg
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
												aria-hidden="true"
											>
												<title>Selected</title>
												<path
													d="M1.5 4L3.5 6L6.5 2"
													stroke="white"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									)}
								</button>
							),
						)}
					</div>
					{errors.serviceId && (
						<p className="mt-2 text-xs text-red-500 dark:text-red-400">
							{errors.serviceId.message}
						</p>
					)}
				</div>
			)}

			<input type="hidden" {...register("serviceId")} />
			<input type="hidden" {...register("serviceCategory")} />
			<input type="hidden" {...register("serviceType")} />
		</div>
	);
};

export default ServiceSelect;
