import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://crackheads.dev";

export const brandName = "Crackheads Studio";

export const defaultKeywords = [
  "web development studio",
  "app development company",
  "next.js development",
  "saas development",
  "ecommerce development",
  "cyber security consulting",
  "cloud hosting services",
  "corporate hosting",
  "product design and engineering",
];

function normalizePath(path: string): string {
  if (path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function normalizeSiteUrl(value?: string): string {
  if (!value) {
    return FALLBACK_SITE_URL;
  }

  try {
    const parsed = new URL(value);
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const defaultSocialImage = "/images/logo.png";

type PageMetadataConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildPageMetadata(config: PageMetadataConfig): Metadata {
  const pathname = normalizePath(config.path);
  const pageKeywords = [...defaultKeywords, ...(config.keywords ?? [])];

  return {
    title: config.title,
    description: config.description,
    keywords: pageKeywords,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: pathname,
      siteName: brandName,
      locale: "en_US",
      type: config.type ?? "website",
      images: [
        {
          url: defaultSocialImage,
          width: 1200,
          height: 630,
          alt: `${brandName} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [defaultSocialImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
