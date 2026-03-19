import { Check, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { TransportOption } from "../../types/transportation.types";
import Badge from "../../components/ui/Badge";
import { formatPrice } from "../../utils/formatters";

interface TransportCardProps {
	option: TransportOption;
}

const TransportCard = ({ option }: TransportCardProps): ReactNode => {
	return (
		<div
			className="
        group bg-white dark:bg-[#0B2545]
        rounded-2xl overflow-hidden
        border border-gray-100 dark:border-[#0A4D68]/40
        hover:shadow-md hover:scale-[1.02]
        transition-all duration-300
        flex flex-col
      "
		>
			{/* Image */}
			<div className="relative h-52 overflow-hidden shrink-0">
				<img
					src={option.image}
					alt={option.title}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute top-3 right-3">
					<Badge variant="sunset">
						{formatPrice(option.price, option.currency)}
					</Badge>
				</div>
			</div>

			{/* Content */}
			<div className="p-5 flex flex-col gap-4 flex-1">
				<div className="flex flex-col gap-1.5">
					<h3 className="text-base font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
						{option.title}
					</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
						{option.description}
					</p>
				</div>

				{/* Highlights */}
				<ul className="flex flex-col gap-2 flex-1">
					{option.highlights.map((highlight) => (
						<li
							key={highlight}
							className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
						>
							<Check size={14} className="text-[#3CC4C9] mt-0.5 shrink-0" />
							{highlight}
						</li>
					))}
				</ul>

				{/* Included */}
				<div className="pt-3 border-t border-gray-100 dark:border-[#0A4D68]/30">
					<p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
						Included
					</p>
					<div className="flex flex-wrap gap-1.5">
						{option.included.map((item) => (
							<span
								key={item}
								className="
                  text-xs px-2.5 py-1 rounded-full
                  bg-[#0A4D68]/5 dark:bg-[#3CC4C9]/10
                  text-[#0A4D68] dark:text-[#3CC4C9]
                "
							>
								{item}
							</span>
						))}
					</div>
				</div>

				<Link
					to="/booking"
					className="
            mt-1 w-full py-2.5 rounded-full text-sm font-semibold
            flex items-center justify-center gap-1.5
            bg-[#0A4D68] text-white
            dark:bg-[#3CC4C9] dark:text-[#0B2545]
            hover:bg-[#083d53] dark:hover:bg-[#2db3b8]
            transition-all duration-200
            active:scale-[0.98]
          "
				>
					Book Transfer
					<ChevronRight size={15} />
				</Link>
			</div>
		</div>
	);
};

export default TransportCard;
