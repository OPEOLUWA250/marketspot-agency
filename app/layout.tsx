import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  title: "Marketspot Agency | Digital Excellence & Speed",
  description:
    "Elevate your digital presence with expert web development, graphics design, and digital marketing services. Excellence and speed, guaranteed.",
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
