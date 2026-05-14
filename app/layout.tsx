import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marketspot.agency"),
  title: {
    default:
      "Digital Marketing Agency for SMBs | SEO, Paid Ads & Web Development | Marketspot",
    template: "%s | Marketspot Agency",
  },
  description:
    "Professional digital marketing agency helping small and mid-size businesses rank on Google, generate leads, and grow revenue. Expert SEO, paid ads management, web development, and branding with proven results.",
  keywords: [
    "digital marketing agency",
    "seo agency",
    "professional seo services",
    "paid ads agency",
    "web development agency",
    "web design services",
    "digital marketing services",
    "google ads management",
    "content marketing",
    "branding agency",
    "digital strategy agency",
    "conversion optimization",
    "seo services for small business",
    "seo services for startups",
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
      "Digital Marketing Agency | SEO, Paid Ads & Web Development Services",
    description:
      "Full-service digital marketing agency. We help SMBs get found on Google with SEO, convert leads with paid ads, build high-performing websites, and grow revenue with proven strategies.",
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
    title: "Marketspot Agency | Digital Marketing Services",
    description:
      "Digital marketing, SEO, paid ads, branding, and web development for SMBs.",
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
