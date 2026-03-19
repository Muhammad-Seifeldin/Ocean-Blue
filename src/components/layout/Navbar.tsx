import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavLink } from "../../types/common.types";
import ThemeToggle from "./ThemeToggle";

const navLinks: NavLink[] = [
	{ label: "Home", path: "/" },
	{ label: "Excursions", path: "/excursions" },
	{ label: "Transportation", path: "/transportation" },
	{ label: "About", path: "/about" },
	{ label: "Gallery", path: "/gallery" },
	{ label: "Contact", path: "/contact" },
];

const Navbar = (): ReactNode => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = (): void => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <off>
	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location.key]);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	const isActive = (path: string): boolean => {
		if (path === "/") return location.pathname === "/";
		return location.pathname.startsWith(path);
	};

	return (
		<header
			className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
					isScrolled
						? "bg-white/80 dark:bg-[#030f1c]/80 backdrop-blur-md shadow-sm border-b border-gray-100/50 dark:border-[#0A4D68]/30"
						: "bg-white/60 dark:bg-[#030f1c]/60 backdrop-blur-sm"
				}
      `}
		>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2 shrink-0">
						<img
							src="/images/logo.png"
							alt="Ocean Blue"
							className="h-8 md:h-10 w-auto dark:hidden"
						/>
						<img
							src="/images/logo-white.png"
							alt="Ocean Blue"
							className="h-8 md:h-10 w-auto hidden dark:block"
						/>
					</Link>

					{/* Desktop Links */}
					<ul className="hidden md:flex items-center gap-1">
						{navLinks.map((link) => (
							<li key={link.path}>
								<Link
									to={link.path}
									className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-200
                    ${
											isActive(link.path)
												? "text-[#0A4D68] bg-[#0A4D68]/10 dark:text-[#3CC4C9] dark:bg-[#3CC4C9]/10"
												: "text-gray-600 hover:text-[#0A4D68] hover:bg-[#0A4D68]/5 dark:text-gray-300 dark:hover:text-[#3CC4C9] dark:hover:bg-[#3CC4C9]/5"
										}
                  `}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					{/* Desktop Right Side */}
					<div className="hidden md:flex items-center gap-2">
						<ThemeToggle />
						<Link
							to="/booking"
							className="
                px-5 py-2 rounded-full text-sm font-semibold
                bg-[#F28C38] text-white
                hover:bg-[#e07d2a]
                transition-all duration-200
                active:scale-[0.98]
              "
						>
							Book Now
						</Link>
					</div>

					{/* Mobile Right Side */}
					<div className="flex md:hidden items-center gap-2">
						<ThemeToggle />
						<button
							type="button"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
							className="
                p-2 rounded-full
                text-[#0A4D68] dark:text-[#3CC4C9]
                hover:bg-[#0A4D68]/10 dark:hover:bg-[#3CC4C9]/10
                transition-all duration-200
                cursor-pointer
              "
						>
							{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="md:hidden overflow-hidden bg-white/95 dark:bg-[#030f1c]/95 backdrop-blur-md border-t border-gray-100 dark:border-[#0A4D68]/30"
					>
						<ul className="flex flex-col px-4 py-4 gap-1">
							{navLinks.map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className={`
                      block px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${
												isActive(link.path)
													? "text-[#0A4D68] bg-[#0A4D68]/10 dark:text-[#3CC4C9] dark:bg-[#3CC4C9]/10"
													: "text-gray-600 hover:text-[#0A4D68] hover:bg-[#0A4D68]/5 dark:text-gray-300 dark:hover:text-[#3CC4C9] dark:hover:bg-[#3CC4C9]/5"
											}
                    `}
									>
										{link.label}
									</Link>
								</li>
							))}
							<li className="pt-2">
								<Link
									to="/booking"
									className="
                    block px-4 py-3 rounded-xl text-sm font-semibold text-center
                    bg-[#F28C38] text-white
                    hover:bg-[#e07d2a]
                    transition-all duration-200
                  "
								>
									Book Now
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
