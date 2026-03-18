import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "weekly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/webdev", priority: 0.95, changeFrequency: "weekly" },
  { path: "/appdev", priority: 0.95, changeFrequency: "weekly" },
  { path: "/hosting", priority: 0.9, changeFrequency: "weekly" },
  { path: "/corporate-hosting", priority: 0.85, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/solutions/ecommerce", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/saas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/cyber/security", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/hosting", priority: 0.75, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
