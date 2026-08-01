import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marketspot.agency"),
  title: {
    default: "Law Firm SEO Agency for U.S. Attorneys | Marketspot",
    template: "%s | Marketspot Agency",
  },
  description:
    "Marketspot helps U.S. law firms get found on Google with SEO, local search, paid ads, and conversion-focused websites that turn searches into consultations.",
  keywords: [
    "law firm seo agency",
    "law firm seo services",
    "attorney seo",
    "u.s. law firm marketing",
    "legal marketing agency",
    "personal injury lawyer seo",
    "divorce lawyer seo",
    "criminal defense lawyer seo",
    "local seo for law firms",
    "google ads for lawyers",
    "law firm website design",
    "legal lead generation",
    "conversion optimization",
    "law firm marketing services",
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
    title:
      "Law Firm SEO Agency | SEO, Local Search & Lead Generation for Attorneys",
    description:
      "Full-service law firm marketing for U.S. attorneys. We help firms get found on Google with SEO, convert searches into consultations, and build websites that generate qualified leads.",
    type: "website",
    locale: "en_US",
    url: "https://marketspot.agency",
    siteName: "Marketspot Agency",
    images: [
      {
        url: "https://marketspot.agency/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketspot Agency - Digital Marketing Agency",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketspot Agency | Law Firm SEO Services",
    description:
      "Law firm SEO, local search, paid ads, and conversion-focused websites for U.S. attorneys.",
    creator: "@marketspot",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
