import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { brandName, defaultKeywords, defaultSocialImage, siteUrl } from "./lib/seo";
import { CustomCursor } from "./components/custom-cursor";
import { FloatingNavbar } from "./components/floating-navbar";
import { PastelMeshBackground } from "./components/pastel-mesh-background";
import { SiteFooter } from "./components/site-footer";
import { SmoothScrollProvider } from "./components/smooth-scroll-provider";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crackheads Studio | Web, App & Hosting Solutions",
    template: "%s | Crackheads Studio",
  },
  description: "Crackheads Studio designs and builds high-performance web apps, SaaS products, ecommerce platforms, and managed hosting solutions.",
  keywords: defaultKeywords,
  authors: [{ name: brandName }],
  creator: brandName,
  publisher: brandName,
  applicationName: brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crackheads Studio | Web, App & Hosting Solutions",
    description: "High-performance product design, development, and hosting services for ecommerce, SaaS, and enterprise teams.",
    url: "/",
    siteName: brandName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultSocialImage,
        width: 1200,
        height: 630,
        alt: "Crackheads Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crackheads Studio",
    description: "Web and app development, product engineering, and managed hosting for fast-growing teams.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brandName,
  url: siteUrl,
  email: "crackheads.dev@gmail.com",
  telephone: "+8801885596054",
  sameAs: [siteUrl],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brandName,
  url: siteUrl,
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fffaf2] text-[#534a84]">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SmoothScrollProvider>
          <div className="relative min-h-full">
            <PastelMeshBackground />
            <CustomCursor />
            <FloatingNavbar />
            {children}
            <SiteFooter />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
