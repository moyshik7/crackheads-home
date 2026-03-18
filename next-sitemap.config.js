const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crackheads.dev";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  additionalPaths: async () => [
    { loc: "/", priority: 1, changefreq: "weekly" },
    { loc: "/about", priority: 0.8, changefreq: "monthly" },
    { loc: "/contact", priority: 0.9, changefreq: "weekly" },
    { loc: "/projects", priority: 0.8, changefreq: "monthly" },
    { loc: "/webdev", priority: 0.95, changefreq: "weekly" },
    { loc: "/appdev", priority: 0.95, changefreq: "weekly" },
    { loc: "/hosting", priority: 0.9, changefreq: "weekly" },
    { loc: "/corporate-hosting", priority: 0.85, changefreq: "weekly" },
    { loc: "/solutions", priority: 0.9, changefreq: "weekly" },
    { loc: "/solutions/ecommerce", priority: 0.8, changefreq: "monthly" },
    { loc: "/solutions/saas", priority: 0.8, changefreq: "monthly" },
    { loc: "/solutions/cyber/security", priority: 0.8, changefreq: "monthly" },
    { loc: "/solutions/hosting", priority: 0.75, changefreq: "monthly" },
  ],
};
