import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";

const ThemeToggle = (): ReactNode => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = (): void => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className="
        p-2 rounded-full
        text-[#0A4D68] dark:text-[#3CC4C9]
        hover:bg-[#0A4D68]/10 dark:hover:bg-[#3CC4C9]/10
        transition-all duration-200
        cursor-pointer
      "
		>
			{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
};

export default ThemeToggle;
