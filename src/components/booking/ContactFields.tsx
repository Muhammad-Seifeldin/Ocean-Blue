import type { ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { BookingFormSchema } from "../../schemas/booking.schema";

interface ContactFieldsProps {
	form: UseFormReturn<BookingFormSchema>;
}

const ContactFields = ({ form }: ContactFieldsProps): ReactNode => {
	const {
		register,
		formState: { errors },
	} = form;

	return (
		<div className="flex flex-col gap-5">
			{/* Name */}
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Full Name
				</label>
				<input
					id="name"
					type="text"
					placeholder="John Doe"
					{...register("name")}
					className="
            w-full px-4 py-3 rounded-xl border
            border-gray-200 dark:border-[#0A4D68]/40
            bg-white dark:bg-[#0A4D68]/10
            text-gray-700 dark:text-gray-300
            placeholder:text-gray-300 dark:placeholder:text-gray-600
            focus:outline-none focus:ring-2 focus:ring-[#3CC4C9]/50 focus:border-[#3CC4C9]
            transition-all duration-200
            text-sm
          "
				/>
				{errors.name && (
					<p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
						{errors.name.message}
					</p>
				)}
			</div>

			{/* Email */}
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Email Address
				</label>
				<input
					id="email"
					type="email"
					placeholder="john@example.com"
					{...register("email")}
					className="
            w-full px-4 py-3 rounded-xl border
            border-gray-200 dark:border-[#0A4D68]/40
            bg-white dark:bg-[#0A4D68]/10
            text-gray-700 dark:text-gray-300
            placeholder:text-gray-300 dark:placeholder:text-gray-600
            focus:outline-none focus:ring-2 focus:ring-[#3CC4C9]/50 focus:border-[#3CC4C9]
            transition-all duration-200
            text-sm
          "
				/>
				{errors.email && (
					<p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
						{errors.email.message}
					</p>
				)}
			</div>

			{/* Phone */}
			<div>
				<label
					htmlFor="phone"
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Phone Number
				</label>
				<input
					id="phone"
					type="tel"
					placeholder="+1 234 567 8900"
					{...register("phone")}
					className="
            w-full px-4 py-3 rounded-xl border
            border-gray-200 dark:border-[#0A4D68]/40
            bg-white dark:bg-[#0A4D68]/10
            text-gray-700 dark:text-gray-300
            placeholder:text-gray-300 dark:placeholder:text-gray-600
            focus:outline-none focus:ring-2 focus:ring-[#3CC4C9]/50 focus:border-[#3CC4C9]
            transition-all duration-200
            text-sm
          "
				/>
				{errors.phone && (
					<p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
						{errors.phone.message}
					</p>
				)}
			</div>

			{/* Special Requests */}
			<div>
				<label
					htmlFor="specialRequests"
					className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
				>
					Special Requests
					<span className="ml-1 text-xs text-gray-400 dark:text-gray-500 font-normal">
						(optional)
					</span>
				</label>
				<textarea
					id="specialRequests"
					rows={3}
					placeholder="Any special requirements or requests..."
					{...register("specialRequests")}
					className="
            w-full px-4 py-3 rounded-xl border
            border-gray-200 dark:border-[#0A4D68]/40
            bg-white dark:bg-[#0A4D68]/10
            text-gray-700 dark:text-gray-300
            placeholder:text-gray-300 dark:placeholder:text-gray-600
            focus:outline-none focus:ring-2 focus:ring-[#3CC4C9]/50 focus:border-[#3CC4C9]
            transition-all duration-200
            text-sm resize-none
          "
				/>
				{errors.specialRequests && (
					<p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
						{errors.specialRequests.message}
					</p>
				)}
			</div>
		</div>
	);
};

export default ContactFields;
