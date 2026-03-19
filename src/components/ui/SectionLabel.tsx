import type { ReactNode } from "react";

interface SectionLabelProps {
	children: ReactNode;
	className?: string;
}

const SectionLabel = ({
	children,
	className = "",
}: SectionLabelProps): ReactNode => {
	return (
		<span
			className={`
        inline-block
        text-xs font-semibold tracking-widest uppercase
        text-[#3CC4C9]
        mb-3
        ${className}
      `}
		>
			{children}
		</span>
	);
};

export default SectionLabel;
