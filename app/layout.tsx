import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  title: "Marketspot Agency | Digital Excellence & Speed",
  description:
    "Award-winning digital marketing agency specializing in web development, graphics design, branding, and digital strategy. We help SMBs attract and convert their ideal customers with excellence and speed.",
  keywords:
    "digital marketing, web development, graphics design, branding, digital strategy, SMB marketing, digital agency Kenya",
  generator: "Marketspot Agency",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Marketspot Agency - Digital Excellence & Speed",
    description:
      "Expert digital marketing, web development, and graphics design services for SMBs. We deliver excellence and speed.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketspot Agency",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://marketspot.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ [spaceGrotesk.cssVariable]: spaceGrotesk.style.fontFamily }}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
