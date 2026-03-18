import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
	title: "Hosting Solutions for Performance and Reliability",
	description:
		"Hosting solution packages for scalable web delivery, infrastructure reliability, and performance-focused deployments.",
	path: "/solutions/hosting",
	keywords: [
		"hosting solutions",
		"infrastructure solutions",
		"managed cloud hosting",
		"next.js hosting solution",
	],
});

export { default } from "../../hosting/page";
