import type { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	hoverable?: boolean;
}

const Card = ({
	children,
	className = "",
	onClick,
	hoverable = false,
}: CardProps): ReactNode => {
	const baseClass = `
    bg-white dark:bg-[#0B2545]
    rounded-2xl
    shadow-sm
    border border-gray-100 dark:border-[#0A4D68]/40
    overflow-hidden
    transition-all duration-300
    ${hoverable ? "hover:shadow-md hover:scale-[1.02] cursor-pointer" : ""}
    ${className}
  `;

	if (onClick) {
		return (
			<button type="button" onClick={onClick} className={baseClass}>
				{children}
			</button>
		);
	}

	return <div className={baseClass}>{children}</div>;
};

export default Card;
