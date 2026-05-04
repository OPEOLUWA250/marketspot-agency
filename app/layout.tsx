import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marketspot.agency"),
  title: {
    default:
      "Marketspot Agency | Digital Marketing Agency - SEO, Paid Ads & Web Development",
    template: "%s | Marketspot Agency",
  },
  description:
    "Marketspot Agency helps SMBs grow online with SEO, paid ads, web development, and branding. We focus on measurable revenue, technical SEO, and conversion-driven strategies. Get real digital growth with real business results.",
  keywords: [
    "digital marketing agency",
    "seo agency",
    "web development agency",
    "paid ads agency",
    "branding agency",
    "digital marketing services",
    "seo services",
    "web design services",
    "paid advertising management",
    "marketspot agency",
  ],
  generator: "Marketspot Agency",
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
  },
  authors: [
    {
      name: "Marketspot Agency",
      url: "https://marketspot.agency",
    },
  ],
  openGraph: {
    title: "Marketspot Agency | Digital Marketing Agency for Real Results",
    description:
      "Full-service digital marketing agency. We help SMBs get found on Google with SEO, convert leads with paid ads, and build high-performing websites.",
    type: "website",
    locale: "en_US",
    url: "https://marketspot.agency",
    siteName: "Marketspot Agency",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketspot Agency - Digital Marketing Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketspot Agency | Digital Marketing Services",
    description:
      "Digital marketing, SEO, paid ads, branding, and web development for SMBs.",
    creator: "@marketspot",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://marketspot.agency",
  },
  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
