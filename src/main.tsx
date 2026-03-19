import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppProviders from "./providers/AppProviders";
import { router } from "./routes/routes";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error(
		"Root element not found. Make sure index.html has a <div id='root'>",
	);
}

const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<AppProviders>
			<RouterProvider router={router} />
		</AppProviders>
	</StrictMode>,
);
