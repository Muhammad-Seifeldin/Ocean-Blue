import { Clock, Users, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Excursion } from "../../types/excursion.types";
import Badge from "../../components/ui/Badge";
import { formatPrice, truncateText } from "../../utils/formatters";

interface ExcursionCardProps {
	excursion: Excursion;
	onSelect: (excursion: Excursion) => void;
}

const ExcursionCard = ({
	excursion,
	onSelect,
}: ExcursionCardProps): ReactNode => {
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
					src={excursion.image}
					alt={excursion.title}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute top-3 left-3">
					<Badge variant="turquoise">{excursion.duration}</Badge>
				</div>
				<div className="absolute top-3 right-3">
					<Badge variant="sunset">
						{formatPrice(excursion.price, excursion.currency)}
					</Badge>
				</div>
			</div>

			{/* Content */}
			<div className="p-5 flex flex-col gap-3 flex-1">
				<h3 className="text-base font-bold text-[#0A4D68] dark:text-[#DFF6FF]">
					{excursion.title}
				</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
					{truncateText(excursion.description, 110)}
				</p>

				<div className="flex items-center gap-4">
					<span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
						<Clock size={13} />
						{excursion.duration}
					</span>
					<span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
						<Users size={13} />
						{excursion.groupSize}
					</span>
				</div>

				<button
					type="button"
					onClick={() => onSelect(excursion)}
					className="
            mt-1 w-full py-2.5 rounded-full text-sm font-semibold
            flex items-center justify-center gap-1.5
            bg-[#0A4D68] text-white
            dark:bg-[#3CC4C9] dark:text-[#0B2545]
            hover:bg-[#083d53] dark:hover:bg-[#2db3b8]
            transition-all duration-200
            active:scale-[0.98]
            cursor-pointer
          "
				>
					View Details
					<ChevronRight size={15} />
				</button>
			</div>
		</div>
	);
};

export default ExcursionCard;
