import type { ReactNode } from "react";

type BadgeVariant = "ocean" | "turquoise" | "sunset" | "sand";

interface BadgeProps {
	children: ReactNode;
	variant?: BadgeVariant;
	className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
	ocean:
		"bg-[#0A4D68]/10 text-[#0A4D68] dark:bg-[#0A4D68]/30 dark:text-[#DFF6FF]",
	turquoise:
		"bg-[#3CC4C9]/10 text-[#0A4D68] dark:bg-[#3CC4C9]/20 dark:text-[#3CC4C9]",
	sunset:
		"bg-[#F28C38]/10 text-[#F28C38] dark:bg-[#F28C38]/20 dark:text-[#F28C38]",
	sand: "bg-[#F4EBD0] text-[#0A4D68] dark:bg-[#F4EBD0]/10 dark:text-[#F4EBD0]",
};

const Badge = ({
	children,
	variant = "ocean",
	className = "",
}: BadgeProps): ReactNode => {
	return (
		<span
			className={`
        inline-block
        px-3 py-1
        rounded-full
        text-xs font-semibold
        ${variantClasses[variant]}
        ${className}
      `}
		>
			{children}
		</span>
	);
};

export default Badge;
