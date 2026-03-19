import { lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Home = lazy(() => import("../pages/Home"));
const Excursions = lazy(() => import("../pages/Excursions"));
const Transportation = lazy(() => import("../pages/Transportation"));
const About = lazy(() => import("../pages/About"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Terms = lazy(() => import("../pages/Terms"));

const PageLoader = (): ReactNode => (
	<div className="min-h-screen flex items-center justify-center">
		<div className="w-8 h-8 rounded-full border-2 border-[#0A4D68] border-t-transparent animate-spin" />
	</div>
);

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<PageLoader />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "excursions",
				element: (
					<Suspense fallback={<PageLoader />}>
						<Excursions />
					</Suspense>
				),
			},
			{
				path: "transportation",
				element: (
					<Suspense fallback={<PageLoader />}>
						<Transportation />
					</Suspense>
				),
			},
			{
				path: "about",
				element: (
					<Suspense fallback={<PageLoader />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "gallery",
				element: (
					<Suspense fallback={<PageLoader />}>
						<Gallery />
					</Suspense>
				),
			},
			{
				path: "contact",
				element: (
					<Suspense fallback={<PageLoader />}>
						<Contact />
					</Suspense>
				),
			},
			{
				path: "privacy-policy",
				element: (
					<Suspense fallback={<PageLoader />}>
						<PrivacyPolicy />
					</Suspense>
				),
			},
			{
				path: "terms",
				element: (
					<Suspense fallback={<PageLoader />}>
						<Terms />
					</Suspense>
				),
			},
		],
	},
]);
