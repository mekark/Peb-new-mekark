import type { Metadata } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});




export const metadata: Metadata = {
  title:
    "PEB Manufacturer in Chennai - Mekark",

  description:
    "Leading Pre-Engineered Building Manufacturer in Chennai. Turnkey PEB & EPC solutions – from design to execution with on-time delivery.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${manrope.variable}
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}