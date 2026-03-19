import type { ReactNode } from "react";

type WavePosition = "top" | "bottom";

interface WaveDividerProps {
	position?: WavePosition;
	fillColor?: string;
	className?: string;
}

const WaveDivider = ({
	position = "bottom",
	fillColor = "#ffffff",
	className = "",
}: WaveDividerProps): ReactNode => {
	return (
		<div
			className={`
        w-full overflow-hidden leading-none
        ${position === "top" ? "rotate-180" : ""}
        ${className}
      `}
		>
			<svg
				viewBox="0 0 1440 80"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className="w-full h-16 md:h-20"
				aria-hidden="true"
			>
				<title>Wave divider</title>
				<path
					d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
					fill={fillColor}
				/>
			</svg>
		</div>
	);
};

export default WaveDivider;
