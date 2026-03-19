import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageWrapperProps {
	children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps): ReactNode => {
	return (
		<div className="min-h-screen flex flex-col bg-white dark:bg-[#030f1c]">
			<Navbar />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
};

export default PageWrapper;
