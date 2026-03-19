import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
	children: ReactNode;
	variant?: ButtonVariant;
	size?: ButtonSize;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	fullWidth?: boolean;
	onClick?: () => void;
	className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-[#F28C38] text-white hover:bg-[#e07d2a] active:scale-[0.98] dark:bg-[#F28C38] dark:hover:bg-[#e07d2a]",
	secondary:
		"bg-[#0A4D68] text-white hover:bg-[#083d53] active:scale-[0.98] dark:bg-[#0A4D68] dark:hover:bg-[#083d53]",
	ghost:
		"bg-transparent text-[#0A4D68] hover:bg-[#0A4D68]/10 active:scale-[0.98] dark:text-[#3CC4C9] dark:hover:bg-[#3CC4C9]/10",
	outline:
		"bg-transparent border border-[#0A4D68] text-[#0A4D68] hover:bg-[#0A4D68]/10 active:scale-[0.98] dark:border-[#3CC4C9] dark:text-[#3CC4C9] dark:hover:bg-[#3CC4C9]/10",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-4 py-2 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-4 text-lg",
};

const Button = ({
	children,
	variant = "primary",
	size = "md",
	type = "button",
	disabled = false,
	fullWidth = false,
	onClick,
	className = "",
}: ButtonProps): ReactNode => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`
        inline-flex items-center justify-center
        rounded-full font-semibold
        transition-all duration-200
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
		>
			{children}
		</button>
	);
};

export default Button;
