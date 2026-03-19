// biome-ignore assist/source/organizeImports: <off>
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Youtube,
	Twitter,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { NavLink, SocialLink } from "../../types/common.types";

const quickLinks: NavLink[] = [
	{ label: "Home", path: "/" },
	{ label: "Excursions", path: "/excursions" },
	{ label: "Transportation", path: "/transportation" },
	{ label: "About Us", path: "/about" },
	{ label: "Gallery", path: "/gallery" },
	{ label: "Contact", path: "/contact" },
	{ label: "Book Online", path: "/booking" },
];

const excursionLinks: NavLink[] = [
	{ label: "Snorkeling Trips", path: "/excursions" },
	{ label: "Dolphin Tours", path: "/excursions" },
	{ label: "Sandbank Trips", path: "/excursions" },
	{ label: "Sunset Cruises", path: "/excursions" },
	{ label: "Island Hopping", path: "/excursions" },
	{ label: "Custom Tours", path: "/excursions" },
];

const socialLinks: SocialLink[] = [
	{ platform: "instagram", url: "https://instagram.com" },
	{ platform: "facebook", url: "https://facebook.com" },
	{ platform: "youtube", url: "https://youtube.com" },
	{ platform: "x", url: "https://x.com" },
	{ platform: "tiktok", url: "https://tiktok.com" },
];

const SocialIcon = ({
	platform,
}: {
	platform: SocialLink["platform"];
}): ReactNode => {
	const iconProps = { size: 18 };
	switch (platform) {
		case "instagram":
			return <Instagram {...iconProps} />;
		case "facebook":
			return <Facebook {...iconProps} />;
		case "youtube":
			return <Youtube {...iconProps} />;
		case "x":
			return <Twitter {...iconProps} />;
		case "tiktok":
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
				</svg>
			);
	}
};

const Footer = (): ReactNode => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-white dark:bg-[#030f1c] border-t border-gray-100 dark:border-[#0A4D68]/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Column 1 — Brand */}
					<div className="flex flex-col gap-4">
						<Link to="/" className="inline-block">
							<img
								src="/images/logo.png"
								alt="Ocean Blue"
								className="h-10 w-auto dark:hidden"
							/>
							<img
								src="/images/logo-white.png"
								alt="Ocean Blue"
								className="h-10 w-auto hidden dark:block"
							/>
						</Link>
						<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
							Unforgettable ocean and island experiences in Zanzibar through
							safe, authentic, and personalized excursions.
						</p>
						<div className="flex items-center gap-3 mt-1">
							{socialLinks.map((social) => (
								<a
									key={social.platform}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.platform}
									className="
                      p-2 rounded-full
                      text-gray-400 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9]
                      hover:bg-[#0A4D68]/10 dark:hover:bg-[#3CC4C9]/10
                      transition-all duration-200
                    "
								>
									<SocialIcon platform={social.platform} />
								</a>
							))}
						</div>
					</div>

					{/* Column 2 — Quick Links */}
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-semibold text-[#0A4D68] dark:text-[#DFF6FF] tracking-wide uppercase">
							Quick Links
						</h4>
						<ul className="flex flex-col gap-2">
							{quickLinks.map((link) => (
								<li key={link.path + link.label}>
									<Link
										to={link.path}
										className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9] transition-colors duration-200"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3 — Excursions */}
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-semibold text-[#0A4D68] dark:text-[#DFF6FF] tracking-wide uppercase">
							Our Excursions
						</h4>
						<ul className="flex flex-col gap-2">
							{excursionLinks.map((link) => (
								<li key={link.label}>
									<Link
										to={link.path}
										className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9] transition-colors duration-200"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4 — Contact */}
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-semibold text-[#0A4D68] dark:text-[#DFF6FF] tracking-wide uppercase">
							Contact Us
						</h4>
						<ul className="flex flex-col gap-3">
							<li className="flex items-start gap-3">
								<MapPin size={16} className="text-[#3CC4C9] mt-0.5 shrink-0" />
								<span className="text-sm text-gray-500 dark:text-gray-400">
									Zanzibar, Tanzania
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone size={16} className="text-[#3CC4C9] shrink-0" />
								<a
									href="tel:+255000000000"
									className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9] transition-colors duration-200"
								>
									+255 000 000 000
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail size={16} className="text-[#3CC4C9] shrink-0" />
								<a
									href="mailto:info@oceanblue.tz"
									className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9] transition-colors duration-200"
								>
									info@oceanblue.tz
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-6 border-t border-gray-100 dark:border-[#0A4D68]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-gray-400 dark:text-gray-500">
						© {currentYear} Ocean Blue. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						<Link
							to="/privacy-policy"
							className="text-xs text-gray-400 dark:text-gray-500 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9] transition-colors duration-200"
						>
							Privacy Policy
						</Link>
						<span className="text-gray-200 dark:text-gray-700">|</span>
						<Link
							to="/terms"
							className="text-xs text-gray-400 dark:text-gray-500 hover:text-[#0A4D68] dark:hover:text-[#3CC4C9] transition-colors duration-200"
						>
							Terms & Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
