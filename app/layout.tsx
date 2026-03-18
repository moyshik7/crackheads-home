import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
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
  title: "Crackheads Studio",
  description: "Crackheads Studio builds delightful, high-performance digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fffaf2] text-[#534a84]">
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
